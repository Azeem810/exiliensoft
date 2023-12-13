import styled from "styled-components";

const AllBlogsWrapper = styled.section`
  padding: 70px 0 0 0;
  width: 100%;

  h1 {
    color: ${({ theme }) => theme?.color?.textColor2};
    font-weight: ${({ theme }) => theme?.fontWeight?.bold};
    font-size: 40px;
    text-align: center;
    padding-bottom: 20px;
  }

  .main {
    display: flex;
    flex-wrap: wrap;
    gap: 20px; /* Add gap between cards */
    width: 100%;
  }

  div {
    width: calc(
      25.333% - 20px
    ); /* Adjust the width and gap according to your needs */
    border: 2px solid black;
    padding: 20px;
    box-sizing: border-box;
    margin-bottom: 20px; /* Add margin at the bottom for better spacing */
  }

  h2 {
    padding: 20px 0;
  }
  p {
    padding: 20px 0;
  }
  img {
    border: 1px solid gray;
    width: 100%;
    max-height: 200px; /* Set a maximum height for the image */
    object-fit: cover; /* Maintain the aspect ratio and cover the container */
  }

  @media (max-width: 768px) {
    div {
      width: calc(50% - 20px); /* Adjust the width for smaller screens */
    }
  }

  @media (max-width: 480px) {
    div {
      width: 100%; /* Full width for even smaller screens */
    }
  }
`;

export { AllBlogsWrapper };
