import { useEffect, useMemo, useState } from "react";
import { Star, GitFork, CircleDot } from "lucide-react";

export default function TopRepos({ github }) {
  const {
    username,
    topReposCount = 6,
    excludeForks = true,
    sortBy = "stars",
  } = github || {};

  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const apiUrl = useMemo(() => {
    if (!username) return null;
    return `https://api.github.com/users/${encodeURIComponent(
      username
    )}/repos?per_page=100&sort=updated`;
  }, [username]);

  useEffect(() => {
    let isMounted = true;
    if (!apiUrl) return;

    setStatus("loading");
    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load repositories");
        }
        return res.json();
      })
      .then((data) => {
        if (!isMounted) return;
        setRepos(Array.isArray(data) ? data : []);
        setStatus("success");
      })
      .catch((err) => {
        if (!isMounted) return;
        setError(err?.message || "Something went wrong");
        setStatus("error");
      });

    return () => {
      isMounted = false;
    };
  }, [apiUrl]);

  if (!username) return null;

  const prepared = repos
    .filter((repo) => (excludeForks ? !repo.fork : true))
    .sort((a, b) => {
      if (sortBy === "updated") {
        return new Date(b.updated_at) - new Date(a.updated_at);
      }
      return b.stargazers_count - a.stargazers_count;
    })
    .slice(0, topReposCount);

  return (
    <section className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-white">🚀 Top Repositories</h2>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-300 hover:text-green-400 transition"
        >
          @{username}
        </a>
      </div>

      {status === "loading" && (
        <div className="text-gray-400">Loading repositories...</div>
      )}
      {status === "error" && (
        <div className="text-red-400">{error}</div>
      )}

      {status === "success" && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {prepared.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#111] border border-gray-800 rounded-2xl p-5 shadow-lg hover:shadow-xl hover:border-gray-600 transition"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition">
                  {repo.name}
                </h3>
                {repo.private && (
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300">
                    Private
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-400 mt-2">
                {repo.description || "No description provided."}
              </p>

              <div className="flex items-center gap-4 text-xs text-gray-400 mt-4">
                {repo.language && (
                  <span className="inline-flex items-center gap-1">
                    <CircleDot className="w-3 h-3 text-green-400" />
                    {repo.language}
                  </span>
                )}
                <span className="inline-flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-400" />
                  {repo.stargazers_count}
                </span>
                <span className="inline-flex items-center gap-1">
                  <GitFork className="w-3 h-3 text-purple-400" />
                  {repo.forks_count}
                </span>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
