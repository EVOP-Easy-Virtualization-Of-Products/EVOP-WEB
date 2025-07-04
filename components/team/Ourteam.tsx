import Image from "next/image"

interface TeamMember {
  name: string
  role: string
  image: string
  isLeadership?: boolean
  title?: string
}

const foundersAndCoFounders: TeamMember[] = [
  { 
    name: "Helmi Said", 
    role: "Co-Founder", 
    title: "Fullstack Developer",
    image: "/team/helmi.jpg", 
    isLeadership: true 
  },
  { 
    name: "Arya Maulana", 
    role: "Founder ", 
    title: "Fullstack Developer, Cyber Security Expert",
    image: "/team/arya2.jpg", 
    isLeadership: true 
  },
  { 
    name: "Aditya Pratama", 
    role: "Co-Founder ", 
    title: "Fullstack Developer",
    image: "/team/Aditt.png", 
    isLeadership: true 
  },
]

const teamMembers: TeamMember[] = [
  // { name: "Artha Gandhi", role: "Fullstack Developer", image: "/team/Artha.png" },
  { name: "Nouval Aryanta", role: "Cyber Security ", image: "/team/naupal.jpg" },
  { name: "Ahmad Lazim", role: "Fullstack Developer", image: "/team/Lazim.jpg" },
  { name: "Abdul Alim", role: "Fullstack Developer", image: "/team/Alim2.jpg" },
  { name: "George Misael", role: "Marketing Specialist", image: "/team/George.jpg" },
]

export function OurTeam() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-1 bg-[#287eff]/10 text-[#287eff] rounded-full text-sm font-medium">
            Our Team
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d0d12]">
            Meet the Talented Minds Behind EVOP
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our diverse team of experts combines innovation, expertise, and passion to deliver exceptional results for our clients.
          </p>
        </div>

        {/* Leadership Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-[#0d0d12] mb-2">Leadership Team</h3>
            <div className="w-20 h-1 bg-[#287eff] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {foundersAndCoFounders.map((leader, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-4">
                      <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-[#287eff]/10 group-hover:ring-[#287eff]/30 transition-all duration-300">
                        <Image
                          src={leader.image || "/placeholder.svg"}
                          alt={leader.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#287eff] rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-[#0d0d12] mb-1">{leader.name}</h3>
                    <div className="text-[#287eff] font-semibold text-sm mb-2 uppercase tracking-wide">
                      {leader.role}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{leader.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-[#0d0d12] mb-2">Our Team</h3>
            <div className="w-20 h-1 bg-[#287eff] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 justify-items-center max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl p-4 sm:p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 h-full">
                  <div className="relative mb-3 sm:mb-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden mx-auto ring-2 ring-gray-100 group-hover:ring-[#287eff]/30 transition-all duration-300">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <h4 className="text-sm sm:text-lg font-semibold text-[#0d0d12] mb-1">{member.name}</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">{member.role}</p>
                  
                  {/* Skill Badge */}
                  <div className="mt-2 sm:mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-block px-2 sm:px-3 py-1 bg-[#287eff]/10 text-[#287eff] rounded-full text-xs font-medium">
                      EVOP Team
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-r from-[#287eff]/5 to-[#287eff]/10 rounded-2xl">
            <h3 className="text-xl font-bold text-[#0d0d12] mb-2">Want to Join Our Team?</h3>
            <p className="text-gray-600 mb-4">We&apos;re always looking for talented individuals to join our mission.</p>
            <button className="px-6 py-3 bg-[#287eff] text-white rounded-lg font-medium hover:bg-[#1e6ad8] transition-colors duration-300">
              View Open Positionst
            </button>
          </div>
        </div> */}
      </div>
    </section>
  )
}

