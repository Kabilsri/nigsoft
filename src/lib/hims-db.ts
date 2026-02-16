import pool from './db';
import { v4 as uuidv4 } from 'uuid';

export interface HIMSApplication {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  qualification: string;
  experience: string;
  role: string;
  batch: string;
  message?: string;
  status: string;
  created_at: Date;
}

export async function createHIMSApplication(data: Omit<HIMSApplication, 'id' | 'status' | 'created_at'>): Promise<HIMSApplication> {
  const id = uuidv4();
  const [result] = await pool.execute(
    `INSERT INTO hims_applications (id, full_name, email, phone, qualification, experience, role, batch, message) 
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [id, data.full_name, data.email, data.phone, data.qualification, data.experience, data.role, data.batch, data.message || null]
  );
  
  return {
    id,
    ...data,
    status: 'pending',
    created_at: new Date()
  };
}

export async function getHIMSApplications(): Promise<HIMSApplication[]> {
  const [rows] = await pool.execute('SELECT * FROM hims_applications ORDER BY created_at DESC');
  return rows as HIMSApplication[];
}

export async function updateHIMSApplicationStatus(id: string, status: string): Promise<boolean> {
  const [result]: any = await pool.execute(
    'UPDATE hims_applications SET status = ? WHERE id = ?',
    [status, id]
  );
  return result.affectedRows > 0;
}

export async function deleteHIMSApplication(id: string): Promise<boolean> {
  const [result]: any = await pool.execute('DELETE FROM hims_applications WHERE id = ?', [id]);
  return result.affectedRows > 0;
}
