import SectionTitle from "../components/UI/SectionTitle";
import TerminalOutput from "../components/UI/TerminalOutput";
import CommandLine from "../components/UI/CommandLine";
import { TerminalWindow } from "../components/layout/TerminalWindow";

export function ProjectsPage({ projects }) {
  return (
    <div className="grid gap-8 w-full lg:grid-cols-2">
      {projects.map((project, idx) => (
        <TerminalWindow
          key={idx}
          className="hover:scale-[1.02] transition-transform duration-300 shadow-lg"
        >
          <div className="flex flex-col gap-3 p-4">
            {/* Title */}
            <SectionTitle>{`> ${project.title}`}</SectionTitle>

            {/* Description */}
            <TerminalOutput className="text-green-300 text-sm">
              {project.description}
            </TerminalOutput>

            {/* Tech Stack */}
            {project.tech?.length > 0 && (
              <TerminalOutput className="text-blue-300 text-xs">
                Tech: {project.tech.join(", ")}
              </TerminalOutput>
            )}

            {/* Features */}
            {project.features?.length > 0 && (
              <TerminalOutput className="text-yellow-300 text-xs">
                Features:
                <ul className="list-disc ml-5 mt-1">
                  {project.features.map((feat, i) => (
                    <li key={i}>{feat}</li>
                  ))}
                </ul>
              </TerminalOutput>
            )}
          </div>
        </TerminalWindow>
      ))}
    </div>
  );
}
