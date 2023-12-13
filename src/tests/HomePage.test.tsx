import { renderWithProviders } from "./Wrapper";
import HeroSection from "../Components/HeroSection/HeroSection";
import { fireEvent } from "@testing-library/react";
import Header from "../Components/Header/Header";
import { useNavigate } from "react-router-dom";


const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe("Home Page tests", () => {

  it("initial snapshot", () => {
    const container = renderWithProviders(<HeroSection />);
    expect(container).toMatchSnapshot();
  });


  it("Check Learn more how many times is coming in the document", () => {
    const container = renderWithProviders(<HeroSection />);

    expect(container.getAllByText("Learn More")).toHaveLength(2);
  });

  

  it("Should navigate to contact page", () => {
    
    const container = renderWithProviders(<Header />);
    fireEvent.click(container.getByText(/Get In Touch/));
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/contact');
  });
  
});


