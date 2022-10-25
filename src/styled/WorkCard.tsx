import styled from "styled-components";
export const WorkCard = styled.div`
  height: 150px;
  width: 250px;
  background-color: #f5f5f5;
  text-align: center;
  padding: 4px 16px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transition: all 0.5s;
  font-family: "Montserrat Alternates", "sans-serif";
  button {
    height: 30px;
    width: 184px;
    border-radius: 25px;
    font-family: Poppins, "sans-serif";
    background-color: #f82a68;
    color: #f5f5f5;
    font-size: 12px;
    margin-top: auto;
    margin-bottom: 3px;
  }
  p {
    color: #222;
    font-size: 12px;
    text-align: center;
    margin: auto 0;
  }

`;
