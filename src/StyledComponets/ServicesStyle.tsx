import styled from "styled-components";

const ServiceWrapper = styled.section`
  margin-top: 140px;
  background-color: #fbfbfb;
  padding: 50px;

  div {
    width: 92%;
    margin: 0 auto;
  }
  h2 {
    color: ${({ theme }) => theme?.color?.textColor2};
    font-weight: ${({ theme }) => theme?.fontWeight?.bold};
    font-size: 40px;
    text-align: center;
  }
  h3 {
    margin-top: 25px;
    color: #47536b;
    font-weight: ${({ theme }) => theme?.fontWeight?.semiBold};
    font-size: 18px;
    line-height: 28px;
    text-align: center;
  }

  h4 {
    margin-top: 20px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme?.color?.textColor2};
    font-weight: 500;
    font-size: 20px;
  }
  .card-container {
    display: flex;
    gap: 70px;
    margin-top: 70px;
  }
  .card {
    height: 200px;
    width: 300px;
  }
  p {
    font-size: 16px;
    font-weight: ${({ theme }) => theme?.fontWeight?.semiBold};
    line-height: 20px;
    color: ${({ theme }) => theme?.color?.textColor2};
  }

  .btn {
    display: flex;
    justify-content: center;
    margin-top: 130px;
  }
  button {
    width: 135px;
    font-size: ${({ theme }) => theme?.fontSize};
    border-radius: ${({ theme }) => theme?.radius};
    background-color: ${({ theme }) => theme?.color?.bgBtn};
    height: 36px;
    font-weight: ${({ theme }) => theme?.fontWeight?.bold};
    color: white;
    border: none;
    cursor: pointer;
  }
`;

export { ServiceWrapper };
