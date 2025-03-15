import Image from "next/image"

interface TeamMember {
  name: string
  role: string
  image: string
}

const teamMembers: TeamMember[] = [
  { name: "Helmi Said", role: "Fullstack Developer at EVOP Co-founder", image: "/team/Helmi.png" },
  { name: "Arya Maulana", role: "Founder, Fullstack Developer, Cyber Security", image: "/team/Arya.png" },
  { name: "Artha Gandhi", role: "Fullstack Developer at EVOP", image: "/team/Artha.png" },
  { name: "Aditya Pratama", role: "Fullstack Developer at EVOP, Co-founder", image: "/team/Adit.png" },
  { name: "Nouval Aryanta", role: "Cyber Security at EVOP", image: "/team/Nouval.png" },
  { name: "Ahmad Lazim", role: "Fullstack Developer", image: "/team/Lazim.png" },
  { name: "Abdul Alim", role: "Fullstack Developer at EVOP", image: "/team/Aliem.png" },
  { name: "George Misael", role: "Fullstack Developer at EVOP", image: "/team/George.png" },
]

export function OurTeam() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 bg-[#287eff]/10 text-[#287eff] rounded-full text-sm font-medium">
            Our Team
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d0d12]">
            Meet the Talented Individuals Behind EVOP
          </h2>
          <p className="text-gray-600 text-lg">
            Our diverse team of experts is dedicated to delivering innovative solutions and exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-20 h-20 relative mb-4">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#287eff]/20 rounded-full" />
              </div>
              <h3 className="text-2xl font-bold text-[#0d0d12] text-center mb-2">{member.name}</h3>
              <p className="text-center text-slate-600 text-lg">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

