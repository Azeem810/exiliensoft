import { lazy, Suspense } from "react";
import RouteFallback from "./fallback.routes";
import AllBlogsPage from "../pages/AllBlogs.page";
const HeroSection = lazy(() => import("../Components/HeroSection/HeroSection"));
const About = lazy(() => import("../pages/About.page"));
const Services = lazy(() => import("../pages/Services.page"));
const Projects = lazy(() => import("../pages/Projects.page"));
const Contact = lazy(() => import("../pages/Contact.page"));

const RoutesConfig = {
  privateRoute: [
    {
      path: "/",
      exact: true,
      restricted: true,
      element: (
        <Suspense fallback={<RouteFallback />}>
          <HeroSection />
        </Suspense>
      ),
    },
    {
      path: "/about",
      exact: true,
      restricted: false,
      element: (
        <Suspense fallback={<RouteFallback />}>
          <About />
        </Suspense>
      ),
    },
    {
      path: "/services",
      exact: true,
      restricted: false,
      element: (
        <Suspense fallback={<RouteFallback />}>
          <Services />
        </Suspense>
      ),
    },
    {
      path: "/projects",
      exact: true,
      restricted: false,
      element: (
        <Suspense fallback={<RouteFallback />}>
          <Projects />
        </Suspense>
      ),
    },
    {
      path: "/contact",
      exact: true,
      restricted: false,
      element: (
        <Suspense fallback={<RouteFallback />}>
          <Contact />
        </Suspense>
      ),
    },
    {
      path: "/allposts",
      exact: true,
      restricted: false,
      element: (
        <Suspense fallback={<RouteFallback />}>
          <AllBlogsPage />
        </Suspense>
      ),
    },
  ],
};

export default RoutesConfig;
