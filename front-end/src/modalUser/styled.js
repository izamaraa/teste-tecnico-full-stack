import styled from "styled-components";
export const DivModal = styled.div`
  display: flex;
  justify-content: space-around;
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  top: 20%;
`;

export const Modal = styled.form`
  width: 270px;
  height: 342px;
  background: #212529;
  box-shadow: 0px 4px 40px -10px rgb(0 0 0 / 25%);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-around;
  justify-content: space-around;
  input {
    text-align: center;
    height: 40.11px;

    background: #343b41;
    border-radius: 4px;
    color: #f8f9fa;
    border-style: none;
  }
  p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #f8f9fa;
    button {
      margin-left: 10px;
      width: 50px;
    }
  }
  button {
    width: 50px;
  }
`;
