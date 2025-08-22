import { motion } from "framer-motion";
import { Code2, Server, Brain, Wrench } from "lucide-react";

const icons = {
  Frontend: Code2,
  Backend: Server,
  "AI & Tools": Brain,
  DevOps: Wrench,
};

export function TechStack({ techStack }) {
  return (
    <section className="w-full py-12">
      <h2 className="text-2xl font-bold text-center mb-8 text-white">⚡ Tech Stack</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {techStack.map((cat, i) => {
          const Icon = icons[cat.category] || Wrench;
          return (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-[#111] border border-gray-800 rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-2 mb-4 text-lg font-semibold text-yellow-400">
                <Icon className="w-5 h-5" />
                {cat.category}
              </div>
              <ul className="space-y-2">
                {cat.technologies.map((tech, idx) => (
                  <li
                    key={idx}
                    className="text-gray-300 hover:text-yellow-400 transition"
                  >
                    • {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
