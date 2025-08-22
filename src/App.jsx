import { useState } from "react";
import Footer from "./components/layout/Footer";

import Navbar from "./components/layout/Navbar";
import HomePage from "./pages/Home";
import { ProjectsPage } from "./pages/ProjectsPage";
import portfolioData from "./data/data.json"
import NotFoundPage from "./pages/NotFound";

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <HomePage aboutData={portfolioData.about} recentProjects={portfolioData.projects} contact={portfolioData.contact} techStack={portfolioData.techStack} education={portfolioData.education} />;
      case 'Projects':
        return <>
        <ProjectsPage projects={portfolioData.projects} />;
        </>
      default:
        return <NotFoundPage/>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black p-6 flex flex-col">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}
