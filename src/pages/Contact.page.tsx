import workInProgress from "../assets/images/work-in-prog.jpeg";
import { PagesStyleWrapper } from "../StyledComponets/PagesStyle";

const ContactPage = () => {
  return (
    <PagesStyleWrapper>
      <h1>Contact Page</h1>
      <p>
        "I didn't have any Figma design or any guidance in the given task about
        this page. Please check the API response by looking at the 'View all
        posts' button in Home page."
      </p>
      <img src={workInProgress} alt="work in progress" />
    </PagesStyleWrapper>
  );
};

export default ContactPage;
