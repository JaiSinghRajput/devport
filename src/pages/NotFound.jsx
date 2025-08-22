import React from "react";
import { TerminalWindow } from "../components/layout/TerminalWindow";
import CommandLine from "../components/UI/CommandLine";
import TerminalOutput from "../components/UI/TerminalOutput";

// ASCII Art for 404
const ascii404 = `                                                 
     m@@   m@@**@@m      m@@  
    @@@@  @@*    *@@    @@@@  
  m@* @@  @@      !@  m@* @@  
m@*   @@  @!      !@m@*   @@  
  !!* @!  @!      !!  !!* @!  
!!*   !!  !!!    !!!!!*   !!  
: : : : :  :!: : :! : : : : : 
     ::                  ::   
     ::                  ::   
`;

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 px-4 bg-black text-gray-200">
      
      {/* ASCII 404 Banner */}
      <pre className="text-red-500 md:text-4xl text-2xl font-mono text-center select-none">
        {ascii404}
      </pre>

      {/* Main Terminal Window */}
      <TerminalWindow className="max-w-4xl w-full hover:scale-105 transition-transform duration-300 shadow-xl">
        <CommandLine command="$ cd ~/portfolio" />
        <TerminalOutput>
          <span className="text-red-400">// Error 404: Page Not Found</span>
          <br />
          <span className="text-gray-400">// The page you are looking for does not exist.</span>
          <br />
          <span className="text-green-400">// Navigate back to Home or use the menu above.</span>
        </TerminalOutput>
      </TerminalWindow>

      {/* Optional Mini Terminal Windows */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl">
        <TerminalWindow height="20vh">
          <CommandLine command="ls ~/pages" />
          <TerminalOutput>
            <span className="text-gray-400">// home.jsx</span>
            <br />
            <span className="text-gray-400">// projects.jsx</span>
          </TerminalOutput>
        </TerminalWindow>

        <TerminalWindow height="30vh">
          <CommandLine command="git status" />
          <TerminalOutput>
            <span className="text-green-400">On branch main</span>
            <br />
            <span className="text-gray-400">Your branch is up to date with 'origin/main'.</span>
            <br />
            <span className="text-red-400">nothing to commit, working tree clean</span>
          </TerminalOutput>
        </TerminalWindow>
      </div>

      {/* Blinking Cursor */}
      <div className="mt-6 font-mono text-green-400 text-xl">
        <span className="animate-blink">_</span>
      </div>

      <style>{`
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-start infinite;
        }
      `}</style>
    </div>
  );
}
