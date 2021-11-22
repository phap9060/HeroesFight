import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  width: 150px;
  height: 30px;
  color: #fff;
  background-color: red;
  @media (max-width: 1000px) {
    width: 60px;
  }
`;
export const Img = styled.img`
  width: 125px;
  margin-bottom: 20px;
  @media (max-width: 1000px) {
    width: 60px;
  }
`;
export const Div1 = styled.p`
  width: 40vw;
  display: flex;
  justify-content: flex-start;
  @media (max-width: 1000px) {
    width: 100vw;
  } ;
`;
export const Ul = styled.ul`
  text-decoration: none;
  list-style-type: none;
`;
export const Li = styled.li`
  list-style-type: none;
  text-decoration: none;
  @media (max-width: 1000px) {
    font-size: 10px;
  } ;
`;
export const P = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200&family=Shippori+Antique&display=swap");
  font-family: "Shippori Antique", sans-serif;
  font-size: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: green;
  @media (max-width: 1000px) {
    font-size: 25px;
  }
`;
