import { Zap, ShieldCheck, Layers } from "lucide-react";

export default function ShowcaseSection() {
  const floatStyle = {
    animation: 'float 8s ease-in-out infinite'
  };

  const keyframes = `
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
  `;
  return (
    <section id="showcase" className="relative py-20 bg-white overflow-hidden">
      {/* Premium Background Elements */}
      {/* <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-orange-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-400/5 to-cyan-400/5 rounded-full blur-3xl"></div>
      </div> */}

      <div className="container mx-auto relative grid md:grid-cols-2 gap-16 items-center px-4 z-10">
        <div className="space-y-8">
          
          <h2 id="showcase-title" className="text-3xl md:text-4xl font-bold leading-tight text-[#02082D]">
            Manage Complex <span className="bg-gradient-to-r from-[#FFD439] to-[#FF7A00] bg-clip-text text-transparent">Healthcare Operations</span> with <span className="bg-gradient-to-r from-[#ec4899] to-[#d83963] bg-clip-text text-transparent">Ease</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
            Nigsoft enables hospitals, clinics, and diagnostic centers to manage patients, reports, billing,
workflows, and departments seamlessly using a unified, intelligent healthcare platform.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#E12E34]/20 to-[#ff6b6b]/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative h-12 w-12 rounded-xl bg-gradient-to-br from-[#E12E34] to-[#ff6b6b] flex items-center justify-center shadow-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[#02082D] text-lg mb-2">Real-time Operational Overview</h3>
                <p className="text-gray-600 leading-relaxed">
                  Track patients, reports, billing, and workflows in real time from a single dashboard.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#E12E34]/20 to-[#ff6b6b]/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative h-12 w-12 rounded-xl bg-gradient-to-br from-[#E12E34] to-[#ff6b6b] flex items-center justify-center shadow-lg">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[#02082D] text-lg mb-2">Secure Roles & Permissions</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ensure data privacy with role-based access for doctors, staff, labs, and administrators.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#E12E34]/20 to-[#ff6b6b]/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative h-12 w-12 rounded-xl bg-gradient-to-br from-[#E12E34] to-[#ff6b6b] flex items-center justify-center shadow-lg">
                  <Layers className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[#02082D] text-lg mb-2">Workflow-Centric Screens</h3>
                <p className="text-gray-600 leading-relaxed">
                  Access patient history, reports, prescriptions, and billing without switching systems.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="relative group">
            {/* Floating background elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            
            {/* Main image container */}
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20 group-hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
              <img 
                src="/icons/report.png" 
                alt="Nigsoft healthcare management dashboard showing reports, analytics, and patient workflows" 
                className="w-full h-auto rounded-xl"
                loading="eager"
              />
            </div>
            
            {/* Floating secondary image */}
            <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-white/30 w-48 group-hover:scale-105 transition-all duration-500" style={floatStyle}>
              <style>{keyframes}</style>
              <img 
                src="/icons/report.png" 
                alt="Healthcare analytics dashboard" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
