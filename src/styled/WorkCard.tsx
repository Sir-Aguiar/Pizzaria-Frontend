import styled from "styled-components";
export const WorkCard = styled.div`
  height: 200px;
  background-color: #f5f5f5;
  text-align: center;
  padding: 8px 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  transition: all 0.5s;
  h1 {
    font-size: 14px;
  }
  p {
    font-size: 12px;
    width: 50%;
    text-align: left;
  }
`;
