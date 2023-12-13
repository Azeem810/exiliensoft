import { TestimonialWrapper } from "../../StyledComponets/TestimonialStyle";
import TestimonialImage from "../../assets/images/testimonial-image.png";
import Previous from "../../assets/images/previous.png";
import Next from "../../assets/images/next.png";
const Testimonial = () => {
  return (
    <>
      <TestimonialWrapper>
        <div className="image-container">
          <span className="image-text">“</span>
          <img
            src={TestimonialImage}
            alt="Testimonial Image"
            className="hero-image"
          />
        </div>

        <div className="container">
          <p className="client-message">
            “The results have been incredible. With Power Digital, it feels like
            they’re in our trench, supporting and understanding us. They’re like
            a partner and mentor in helping us get where we want to be.”
          </p>
          <p className="about-client">
            <span>David Calathan-</span> Director of Design Operations, New York
          </p>
          <div className="next-previous-icons">
            <img src={Previous} alt={"Previous image"} />
            <img src={Next} alt={"Next image"} />
          </div>
        </div>
      </TestimonialWrapper>
    </>
  );
};

export default Testimonial;
