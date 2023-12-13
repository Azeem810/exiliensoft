import styled from "styled-components";

const TestimonialWrapper = styled.section`
  width: 80%;
  margin: 0 auto;
  margin-top: 200px;
  display: flex;
  justify-content: space-between;
  gap: 80px;
  position: relative;

  .client-message {
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    color: #47536b;
  }
  .about-client {
    margin-top: 40px;
    font-weight: ${({ theme }) => theme?.fontWeight?.semiBold};
    font-size: 20px;
    line-height: 25px;
    color: #47536b;
  }
  span {
    font-weight: 500;
  }

  .container {
    position: relative;
  }

  .next-previous-icons {
    display: flex;
    gap: 20px;
    // float:right;
    position: absolute;
    bottom: 0;
    right: 0;
    cursor: pointer;
  }
  .image-container {
    display: flex;
  }
  .image-text {
    font-size: 80px;
    font-weight: 600;
    margin-top: -50px;
  }
`;

export { TestimonialWrapper };
