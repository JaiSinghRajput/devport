import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import HomePage from "./pages/Home";
import { ProjectsPage } from "./pages/ProjectsPage";
import portfolioData from "./data/data.json"
import NotFoundPage from "./pages/NotFound";
import { Footer } from "./components/layout/Footer";
import { Helmet } from "react-helmet-async";

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const { meta, about } = portfolioData;
  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <HomePage aboutData={portfolioData.about} recentProjects={portfolioData.projects} contact={portfolioData.contact} techStack={portfolioData.techStack} education={portfolioData.education} github={portfolioData.github} />;
      case 'Projects':
        return <>
        <ProjectsPage projects={portfolioData.projects} />;
        </>
      default:
        return <NotFoundPage/>;
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-black via-gray-900 to-black p-6 flex flex-col">
      <Helmet>
        <title>{meta?.title || `Portfolio | ${about?.name}`}</title>
        {meta?.description && (
          <meta name="description" content={meta.description} />
        )}
        {meta?.keywords?.length && (
          <meta name="keywords" content={meta.keywords.join(", ")} />
        )}
        {meta?.themeColor && (
          <meta name="theme-color" content={meta.themeColor} />
        )}
        {meta?.siteUrl && <link rel="canonical" href={meta.siteUrl} />}
        {meta?.image && <meta property="og:image" content={meta.image} />}
        {meta?.title && <meta property="og:title" content={meta.title} />}
        {meta?.description && (
          <meta property="og:description" content={meta.description} />
        )}
        {meta?.siteUrl && <meta property="og:url" content={meta.siteUrl} />}
        <meta property="og:type" content="website" />
        {meta?.locale && <meta property="og:locale" content={meta.locale} />}
        {meta?.image && <meta name="twitter:image" content={meta.image} />}
        {meta?.title && <meta name="twitter:title" content={meta.title} />}
        {meta?.description && (
          <meta name="twitter:description" content={meta.description} />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        {meta?.twitterHandle && (
          <meta name="twitter:site" content={meta.twitterHandle} />
        )}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: about?.name,
            jobTitle: about?.role,
            url: meta?.siteUrl,
            image: meta?.image,
            sameAs: [
              portfolioData.contact?.github,
              portfolioData.contact?.linkedin,
              portfolioData.contact?.twitter,
              portfolioData.contact?.website,
            ].filter(Boolean),
          })}
        </script>
      </Helmet>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer details={portfolioData.contact} />
    </div>
  );
}
