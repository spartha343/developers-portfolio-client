import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Projects from "../pages/projects/Projects";
import Skills from "../pages/skills/Skills";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Blogs from "../pages/blogs/Blogs";
import ProjectDetails from "../pages/projectDetails/ProjectDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/projects',
                element: <Projects />
            },
            {
                path: '/project-details/:id',
                element: <ProjectDetails></ProjectDetails>
            },
            {
                path: '/skills',
                element: <Skills />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
        ]
    }
]);

export default router;