import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import PublicLayoutPage from "../Layouts/PublicLayoutPage";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Services from "../Pages/ServicesPage/Services";
import Pricing from "../Pages/Pricing/Pricing";
import OurTeam from "../Pages/OurTeam/OurTeam";
import Faq from "../Pages/FAQ/Faq";
import ComingSoon from "../Pages/ComingSoon";
import Page404 from "../Pages/Page404";
import Blog from "../Pages/Blog";
import SinglePost from "../Pages/SinglePost";
import Contact from "../Pages/Contact";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<PublicLayoutPage />}>
                <Route path="/" element={<Home />} />,
                <Route path="/about" element={<AboutUs />} />,
                <Route path="/services" element={<Services />} />,
                <Route path="/pricing" element={<Pricing />} />,
                <Route path="/ourteam" element={<OurTeam />} />,
                <Route path="/faq" element={<Faq />} />,
                <Route path="/comingsoon" element={<ComingSoon />} />,
                <Route path="/page404" element={<Page404 />} />,
                <Route path="/blog" element={<Blog />} />,
                <Route path="/singlepost" element={<SinglePost />} />,
                <Route path="/contact" element={<Contact />} />,
            </Route>
        </>
    )
)