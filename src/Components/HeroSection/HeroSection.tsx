import {
  HeroSectionCompany,
  HeroSectionWrapper,
} from "../../StyledComponets/HeroSectionStyle";
import HeroImage from "../../assets/images/hero-section-image.png";
import ProjectImage from "../../assets/images/projects.png";
import CustomerLogos from "../../assets/images/customer-logos.png";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import Blogs from "../Blogs/Blogs";
const HeroSection = () => {
  return (
    <>
      <HeroSectionWrapper>
        <div>
          <h1>
            Building Brands in the <span>Digital Age</span>
          </h1>
          <p>
            Your partner in navigating the ever-evolving landscape of digital
            marketing. From conceptualization to execution, we craft tailored
            solutions that drive results and elevate your brand to new heights.
          </p>
          <button>Learn More</button>
        </div>
        <div className="hero-image-container">
          <img
            src={HeroImage}
            alt="Hero section image"
            className="hero-image"
          />
          <img
            src={ProjectImage}
            alt="Project image"
            className="project-image"
          />
        </div>
      </HeroSectionWrapper>
      <HeroSectionCompany>
        <div>
          <p>Powering next-gen companies</p>

          <img src={CustomerLogos} alt="customers logos" />
        </div>
      </HeroSectionCompany>
      <Services />
      <Testimonial />
      <Blogs />
    </>
  );
};

export default HeroSection;
