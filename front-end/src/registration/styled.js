import styled from "styled-components";
import background from "../../images/background.jpg";

export const ImageBackground = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  input {
    margin: 10px;
    border-radius: 3px solid #f0f4f5;
  }
  span {
    color: red;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .div {
    margin: 10px;
  }
`;
