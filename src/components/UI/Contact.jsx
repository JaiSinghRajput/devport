import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Globe } from "lucide-react";
import { TerminalWindow } from "../layout/TerminalWindow";

export function Contact({ contact }) {
  const socialLinks = [
    { icon: Github, url: contact.github, name: "GitHub" },
    { icon: Linkedin, url: contact.linkedin, name: "LinkedIn" },
    { icon: Twitter, url: contact.twitter, name: "Twitter" },
    { icon: Globe, url: contact.website, name: "Website" },
  ];

  return (
    <TerminalWindow className="hover:scale-105 transition-transform duration-300 shadow-xl max-w-5xl w-full">
      <div className="flex flex-col lg:flex-row justify-between gap-6 p-4">
        {/* Contact Info */}
        <div className="flex-1 flex flex-col items-start gap-3 text-gray-300">
          <h2 className="text-2xl font-bold text-white mb-2">📬 Contact Me</h2>
          <p className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-yellow-400" /> {contact.email}
          </p>
          <p className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-yellow-400" /> {contact.phone}
          </p>
          <p className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-yellow-400" /> {contact.location}
          </p>
        </div>

        {/* Social Links & CTA */}
        <div className="flex-1 flex flex-col items-start gap-4">
          <h2 className="text-xl font-semibold text-white">🌐 Find me online</h2>
          <div className="flex gap-4">
            {socialLinks.map((link, i) =>
              link.url ? (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:flex items-center gap-1 px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition transform hover:scale-105"
                >
                  <link.icon className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-200">{link.name}</span>
                </a>
              ) : null
            )}
          </div>

          <a
            href={`mailto:${contact.email}`}
            className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-xl hover:bg-yellow-400 transition transform hover:scale-105"
          >
            Let’s Work Together 🚀
          </a>
        </div>
      </div>

      <div className="mt-6 font-mono text-sm text-gray-400 text-center">
        <span className="text-green-400">$</span> git commit -m "Hire Jai Singh"
      </div>
    </TerminalWindow>
  );
}
