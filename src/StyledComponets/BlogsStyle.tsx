import styled from "styled-components";

const BlogsWrapper = styled.section`
  margin-top: 120px;
  background-color: #fbfbfb;
  padding: 50px;

  .main-container {
    width: 80%;
    margin: 0 auto;
  }

  h6 {
    color: ${({ theme }) => theme?.color?.textColor2};
    font-weight: 700;
    font-size: 40px;
    margin-bottom: 20px;
  }

  .card-container {
    display: flex;
    // justify-content:space-between;

    gap: 20px;
    position: relative;
    width: 100%;
  }
  .image-style {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .next-image-style {
    padding: 10px;
    float: right;
    cursor: pointer;
  }
  .card-text {
    padding-top: 19px;
    padding-left: 20px;
    padding-right: 10px;
    height: 260px;
    width: 266px;
    background-color: white;
    position: absolute;

    top: 310px;
    // right:0;
    margin-left: 55px;
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
    margin-top: 210px;
  }
  button {
    width: 155px;
    font-size: ${({ theme }) => theme?.fontSize};
    border-radius: ${({ theme }) => theme?.radius};
    background-color: ${({ theme }) => theme?.color?.bgBtn};
    height: 36px;
    font-weight: ${({ theme }) => theme?.fontWeight?.bold};
    color: white;
    border: none;
    cursor: pointer;
  }
  @media (max-width: 1290px) {
    // .card-container {
    //   width: 100%;
    // }

    .card-text {
      top: 280px;
      margin-left: 28px;
    }
  }
  @media (max-width: 1199px) {
    .btn {
     
      margin-top: 270px;
    }
  }
  @media (max-width: 1099px) {
    .btn {
     
      margin-top: 300px;
    }
  }
  @media (max-width: 999px) {
    .btn {
     
      margin-top: 20px;
    }
  }
`;

export { BlogsWrapper };
