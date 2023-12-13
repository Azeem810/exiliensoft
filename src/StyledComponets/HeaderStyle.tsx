import styled from "styled-components";

const Wrapper = styled.section`
  height: 30px;
  width: 80%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  .logo {
    display: flex;
    gap: 10px;
    cursor: pointer;
  }
  p {
    font-weight: 700;
    font-size: 24px;
  }
  nav {
    display: flex;
    gap: 30px;
    margin-top: 5px;
  }
  ul {
    display: flex;
    gap: 30px;
    margin-top: 5px;
  }
  ul li {
    list-style-type: none;
  }
  ul li a {
    text-decoration: none;
    font-size: 16px;
    color: #2d3748;
    font-weight: 400;
  }
  button {
    width: ${({ theme }) => theme?.btnWidth};
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

export { Wrapper };
