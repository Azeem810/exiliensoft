import styled from "styled-components";

const HeroSectionWrapper = styled.section`
  width: 80%;
  margin: 0 auto;
  margin-top: 200px;
  display: flex;
  justify-content: space-between;
  gap: 100px;
  margin-bottom: 10px;

  h1 {
    font-size: 50px;
    font-weight: 700;
  }
  span {
    color: #6153cd;
  }
  .hero-image-container {
    // position: relative;
  }
  .hero-image {
    width: 523px;
    height: 361px;
    radius: 50px;
  }
  .project-image {
    position: absolute;
    top: 560px;
    right: 58px;
  }

  p {
    margin-top: 20px;
    font-weight: 500;
    font-size: 18px;
    color: #47536b;
    line-height: 28px;
  }

  button {
    margin-top: 20px;
    width: 135px;
    font-size: ${({ theme }) => theme?.fontSize};
    border-radius: ${({ theme }) => theme?.radius};
    background-color: ${({ theme }) => theme?.color?.bgBtn};
    height: 36px;
    font-weight: 700;
    color: white;
    border: none;
    cursor: pointer;
  }
`;

const HeroSectionCompany = styled.div`
  margin-top: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 30px;
  }
`;

export { HeroSectionWrapper, HeroSectionCompany };
