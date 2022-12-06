import styled from "styled-components";
import oldphone from "../../images/oldphone.jpg";
export const ImageOldPhone = styled.div`
  background-image: url(${oldphone});
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
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: stretch;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
`;
