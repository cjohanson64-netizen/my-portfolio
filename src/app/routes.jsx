import { createBrowserRouter } from "react-router-dom";
import PageShell from "../components/layout/PageShell";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ResumePage from "../pages/ResumePage";
import ProjectsPage from "../pages/ProjectsPage";
import SightLineCaseStudyPage from "../pages/SightLineCaseStudyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageShell />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "resume", element: <ResumePage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "projects/sightline", element: <SightLineCaseStudyPage /> },
    ],
  },
]);

export default router;