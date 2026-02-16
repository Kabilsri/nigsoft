import pool from './db';

export interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  salaryMin?: number;
  salaryMax?: number;
  experienceLevel?: string;
  department?: string;
  deadline?: string;
  postedDate?: string;
  isActive?: boolean;
}

export async function getJobs(): Promise<Job[]> {
  const [rows] = await pool.query('SELECT * FROM jobs WHERE is_active = TRUE ORDER BY posted_date DESC');
  return (rows as any[]).map(row => ({
    id: row.id,
    title: row.title,
    location: row.location,
    type: row.type,
    description: row.description,
    requirements: JSON.parse(row.requirements || '[]'),
    responsibilities: JSON.parse(row.responsibilities || '[]'),
    salaryMin: row.salary_min,
    salaryMax: row.salary_max,
    experienceLevel: row.experience_level,
    department: row.department,
    deadline: row.deadline,
    postedDate: row.posted_date,
    isActive: row.is_active
  }));
}

export async function getJobById(id: string): Promise<Job | null> {
  const [rows] = await pool.query('SELECT * FROM jobs WHERE id = ?', [id]);
  const jobs = rows as any[];
  
  if (jobs.length === 0) return null;
  
  const row = jobs[0];
  return {
    id: row.id,
    title: row.title,
    location: row.location,
    type: row.type,
    description: row.description,
    requirements: JSON.parse(row.requirements || '[]'),
    responsibilities: JSON.parse(row.responsibilities || '[]'),
    salaryMin: row.salary_min,
    salaryMax: row.salary_max,
    experienceLevel: row.experience_level,
    department: row.department,
    deadline: row.deadline,
    postedDate: row.posted_date,
    isActive: row.is_active
  };
}

export async function createJob(job: Omit<Job, 'id' | 'postedDate'>): Promise<Job> {
  const id = Date.now().toString();
  const postedDate = new Date();

  await pool.query(
    `INSERT INTO jobs (id, title, location, type, description, requirements, responsibilities, 
     salary_min, salary_max, experience_level, department, deadline, posted_date, is_active) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      id, job.title, job.location, job.type, job.description,
      JSON.stringify(job.requirements), JSON.stringify(job.responsibilities),
      job.salaryMin || null, job.salaryMax || null, job.experienceLevel || null,
      job.department || null, job.deadline || null, postedDate, true
    ]
  );

  return { id, postedDate: postedDate.toISOString(), ...job };
}

export async function updateJob(id: string, data: Partial<Job>): Promise<Job | null> {
  const updates: string[] = [];
  const values: any[] = [];

  if (data.title) { updates.push('title = ?'); values.push(data.title); }
  if (data.location) { updates.push('location = ?'); values.push(data.location); }
  if (data.type) { updates.push('type = ?'); values.push(data.type); }
  if (data.description) { updates.push('description = ?'); values.push(data.description); }
  if (data.requirements) { updates.push('requirements = ?'); values.push(JSON.stringify(data.requirements)); }
  if (data.responsibilities) { updates.push('responsibilities = ?'); values.push(JSON.stringify(data.responsibilities)); }
  if (data.salaryMin !== undefined) { updates.push('salary_min = ?'); values.push(data.salaryMin); }
  if (data.salaryMax !== undefined) { updates.push('salary_max = ?'); values.push(data.salaryMax); }
  if (data.experienceLevel) { updates.push('experience_level = ?'); values.push(data.experienceLevel); }
  if (data.department) { updates.push('department = ?'); values.push(data.department); }
  if (data.deadline) { updates.push('deadline = ?'); values.push(data.deadline); }
  if (data.isActive !== undefined) { updates.push('is_active = ?'); values.push(data.isActive); }

  if (updates.length === 0) return null;

  values.push(id);
  await pool.query(`UPDATE jobs SET ${updates.join(', ')} WHERE id = ?`, values);

  return getJobById(id);
}

export async function deleteJob(id: string): Promise<boolean> {
  const [result] = await pool.query('DELETE FROM jobs WHERE id = ?', [id]);
  return (result as any).affectedRows > 0;
}
