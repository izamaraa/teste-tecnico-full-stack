import styled from "styled-components";
import background from "../../images/background.jpg";
export const ImageSchedule = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  .cabeçalho {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 5px;
  }
  .contatos {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
  ol {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    overflow: auto;
    height: 60vh;
    gap: 1rem;
  }
  li {
    border: 3px solid grey;

    button {
      margin: 3px;
    }
  }
`;
