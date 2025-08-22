import { FileText } from "lucide-react";
import { TerminalWindow } from "../components/layout/TerminalWindow";
import { TechStack } from "../components/UI/TechStack";
import { Contact } from "../components/UI/Contact";
import CommandLine from "../components/UI/CommandLine";
import { QuoteLine } from "../components/UI/QuoteLine";
import RecursiveObject from "../components/UI/RecursiveObject";
import TerminalOutput from "../components/UI/TerminalOutput";

export default function HomePage({ aboutData, recentProjects, techStack, contact, education }) {
  const recentProjectsToShow = recentProjects.slice(0, 2);

  return (
    <div className="flex flex-col gap-12 items-center lg:px-0 w-full max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center gap-4 mt-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Hey 👋, I’m <span className="text-green-400">Jai Singh</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl">
          {aboutData.role} | Builder | AI Enthusiast | Turning ideas into clean code 🚀
        </p>
      </div>

      {/* Hero Terminal */}
      <TerminalWindow className="hover:scale-105 transition-transform duration-300 shadow-xl w-full">
        <CommandLine command="whoami" />
        <QuoteLine>
          {aboutData.role} 
        </QuoteLine>
        <CommandLine command="cat profile.jpg" />
        <TerminalOutput className="flex flex-col items-center gap-2">
          <div className="border-2 border-green-400 p-1 rounded-full">
            <img
              src="https://res.cloudinary.com/nobita-storage/image/upload/v1755858657/fae2951a-9fd6-44e7-bd58-795c5ad1baf5.png"
              alt="Jai Singh"
              className="w-32 h-32 rounded-full object-cover"
            />
          </div>
          <span className="text-green-400">// Jai Singh, Fullstack Developer</span>
        </TerminalOutput>
        <div className="mt-6 flex gap-4">
          <a
            href={aboutData.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-black border-2 hover:border-green-600 text-indigo-500 px-5 py-2 rounded-xl shadow-md transition-transform hover:scale-105"
          >
            <FileText className="w-5 h-5" />
            View Resume
          </a>
        </div>
      </TerminalWindow>

      {/* About Split Terminals */}
      <div className="grid gap-6 w-full lg:grid-cols-2">
        <TerminalWindow className="hover:scale-105 transition-transform duration-300 shadow-lg">
          <CommandLine command="cat bio.txt" />
          <TerminalOutput>{aboutData.bio}</TerminalOutput>
        </TerminalWindow>

        {/* Experience */}
        <TerminalWindow className="hover:scale-105 transition-transform duration-300 shadow-lg">
          <CommandLine command="cat experience.js" />
          <TerminalOutput>
            {aboutData.experience.map((exp, i) => (
              <div key={i} className="flex flex-col gap-1 mb-2">
                <span className="text-yellow-400">{exp.position} @ {exp.company}</span>
                <span className="text-gray-400 text-sm">{exp.duration}</span>
                <span className="text-purple-400">{exp.description}</span>
              </div>
            ))}
          </TerminalOutput>
        </TerminalWindow>

        {/* Skills */}
        <TerminalWindow className="hover:scale-105 transition-transform duration-300 shadow-lg">
          <CommandLine command="cat skills.js" />
          <TerminalOutput>
            {aboutData.skills.map((skill, i) => (
              <span key={i} className="text-green-400 mr-2 inline-block">// {skill}</span>
            ))}
          </TerminalOutput>
        </TerminalWindow>

        {/* Education */}
        <TerminalWindow className="hover:scale-105 transition-transform duration-300 shadow-lg">
          <CommandLine command="cat education.json" />
          <TerminalOutput>
            <span className="text-yellow-400">{education.degree} in {education.field}</span>
            <span className="text-gray-400">{education.institute}, {education.university}</span>
            <span className="text-purple-400">Expected Graduation: {education.expectedGraduation}</span>
          </TerminalOutput>
        </TerminalWindow>

        {/* Fun Facts */}
        <TerminalWindow className="hover:scale-105 transition-transform duration-300 shadow-lg">
          <CommandLine command="cat fun-facts.js" />
          <TerminalOutput>
            {aboutData.funFacts.map((fact, i) => (
              <span key={i} className="text-pink-400 inline-block">// {fact}</span>
            ))}
          </TerminalOutput>
        </TerminalWindow>
      </div>

      {/* Recent Projects Section */}
      <div className="w-full">
        <h2 className="text-2xl font-bold text-white mb-4">Recent Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {recentProjectsToShow.map((proj, i) => (
            <TerminalWindow key={i} className="hover:scale-105 transition-transform duration-300 shadow-lg">
              <CommandLine command={`cat ${proj.title}.js`} />
              <TerminalOutput>
                <RecursiveObject data={proj} />
              </TerminalOutput>
            </TerminalWindow>
          ))}
        </div>
      </div>

      {/* Tech Stack & Contact */}
      <TechStack techStack={techStack} />
      <Contact contact={contact} />
    </div>
  );
}
