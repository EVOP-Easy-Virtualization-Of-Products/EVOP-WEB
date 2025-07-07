import Image from "next/image";
import Link from "next/link";
import { Linkedin, Instagram, Twitter } from "lucide-react";

const footerLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Cookies", href: "/cookies" },
  { name: "Security", href: "/security" },
  { name: "Legal Document", href: "/legal" },
];

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/evoptech/" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/evop.tech" },
  
];

export function Footer() {
  return (
    <footer className="bg-[#0d0d12] text-white">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="EVOP"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
            <p className="font-plus-jakarta font-bold text-2xl px-2 text-[#4AC3F3]">
              EVOP
            </p>
          </Link>

          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
