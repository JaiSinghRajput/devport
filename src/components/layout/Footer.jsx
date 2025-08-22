import React from 'react';
import { Github, Linkedin, Twitter, Globe } from 'lucide-react';

export function Footer({details}) {
  return (
    <div className="mt-12 p-6 text-gray-400 font-mono text-sm border-t border-gray-700 text-center">
      <div className="flex justify-center space-x-4 mb-2">
        <a href={`${details.github}`} target="_blank" rel="noreferrer" className="hover:text-green-400">
          <Github size={20} />
        </a>
        <a href={`${details.linkedin}`} target="_blank" rel="noreferrer" className="hover:text-green-400">
          <Linkedin size={20} />
        </a>
        <a href={`${details.twitter}`} target="_blank" rel="noreferrer" className="hover:text-green-400">
          <Twitter size={20} />
        </a>
        <a href={`${details.website}`} target="_blank" rel="noreferrer" className="hover:text-green-400">
          <Globe size={20} />
        </a>
      </div>
      <p>© 2025 Jai Singh — All rights reserved</p>
    </div>
  );
}