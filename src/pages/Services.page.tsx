import workInProgress from "../assets/images/work-in-prog.jpeg";
import { PagesStyleWrapper } from "../StyledComponets/PagesStyle";

const ServicesPage = () => {
  return (
    <PagesStyleWrapper>
      <h1>Service Page</h1>
      <p>
        "I didn't have any Figma design or any guidance in the given task about
        this page. Please check the API response by looking at the 'View all
        posts' button in Home page."
      </p>
      <div>
        <img src={workInProgress} alt="work in progress" />
      </div>
    </PagesStyleWrapper>
  );
};

export default ServicesPage;
