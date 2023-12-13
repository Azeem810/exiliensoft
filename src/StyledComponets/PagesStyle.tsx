import styled from "styled-components";

const PagesStyleWrapper = styled.section`
  padding: 70px 0 0 0;

  h1 {
    color: ${({ theme }) => theme?.color?.textColor2};
    font-weight: ${({ theme }) => theme?.fontWeight?.bold};
    font-size: 40px;
    text-align: center;
    padding-bottom: 20px;
  }

  img {
    width: 100%;
  }
  p {
    color: red;
    font-size: 14px;
    text-align: center;
    padding-bottom: 10px;
  }
`;

export { PagesStyleWrapper };
