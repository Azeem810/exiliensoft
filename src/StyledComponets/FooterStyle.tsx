import styled from "styled-components";

const FooterWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 50px 100px;
  background-color: black;
  color: white;
  width: 100%;
  // position:fixed;
  // bottom:0;

  img {
    cursor: pointer;
  }
  .list-one {
    width: 45%;
  }
  h6 {
    font-weight: ${({ theme }) => theme?.fontWeight?.bold};
    font-size: 16px;
    margin-bottom: 30px;
  }
  p {
    font-weight: ${({ theme }) => theme?.fontWeight?.semiBold};
    font-size: 14px;
    margin-bottom: 30px;
    line-height: 22px;
  }
  .list-one-child {
    display: flex;
    gap: 30px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 17px;
  }

  ul li {
    list-style-type: none;
  }
  ul li a {
    text-decoration: none;
    font-size: 14px;
    font-weight: ${({ theme }) => theme?.fontWeight?.semiBold};
    color: white;
  }
`;

export { FooterWrapper };
