export default function Navbar({ currentPage, setCurrentPage }) {
  const items = [
    { name: 'Home', command: 'whoami' },
    { name: 'Projects', command: 'cat projects.json' },
    { name: `don't click`, command: 'echo hehe' },
  ];

  return (
    <div className="flex justify-center space-x-6 py-4 bg-gray-900 border-b border-gray-700">
      {items.map((item) => (
        <button
          key={item.name}
          onClick={() => setCurrentPage(item.name)}
          className={`font-mono text-sm px-3 py-1 rounded hover:bg-gray-800 transition-colors ${
            currentPage === item.name ? 'text-green-400' : 'text-gray-300'
          }`}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}
