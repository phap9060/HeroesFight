import styled from "styled-components";

export const Section = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #0c1423;
`;
export const Title = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap");
  font-family: "Montserrat", sans-serif;
  font-size: 50px;
  color: white;
`;
export const Div2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 50px;
  margin: 50px 0px;
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  } ;
`;
export const ButtonErased = styled.button`
  cursor: pointer;
  width: 150px;
  height: 30px;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  background-color: #235556;
  @media (max-width: 1000px) {
    width: 70px;
  }
`;

export const Img = styled.img`
  width: 80px;
  margin-bottom: 20px;
  @media (max-width: 1000px) {
    margin-right: 10px;
    margin-left: 10px;
  }
`;
export const Input = styled.input`
  margin-bottom: 10px;
  width: 250px;
  height: 4vh;
  border-radius: 5px;
`;
export const Imagens = styled.div`
  display: flex;
  justify-content: space-between;
  height: 90%;
  width: 90%;
  flex-wrap: wrap;
`;
export const Div1 = styled.div`
  cursor: pointer;
`;
export const Imagem = styled.img`
  width: 200px;
  height: 240px;
  transition: all 0.3s;
  :hover {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
    position: relative;
    z-index: 5;
  }
  @media (max-width: 1000px) {
    width: 90px;
    height: auto;
    :hover {
      display: none;
    }
  }
`;
export const Texto = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap");
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  color: white;
  @media (max-width: 1000px) {
    font-size: 10px;
  }
`;
