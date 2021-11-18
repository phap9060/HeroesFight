import styled from 'styled-components'

export const Section = styled.section`
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #0c1423;
`
export const Title = styled.p`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');
font-family: 'Montserrat', sans-serif;
font-size: 50px;
color: white;
`
export const Input = styled.input`
margin-bottom: 10px;
width: 250px;
height: 4vh;
border-radius: 15px;

`
export const Imagens = styled.div`
display: flex;
justify-content: space-between;
height:90% ;
width: 90%;
flex-wrap: wrap;
`
export const Div = styled.div`
`
export const Imagem = styled.img`
width: 200px;
height: 240px;
transition: all 0.3s;
:hover {
  -webkit-transform: scale(1.5);
  transform: scale(1.5);
  position: relative;
  z-index: 5;
} 
@media(max-width:1000px){
  width: 90px;
  height: auto;
  :hover{
    display: none;
}
}
`
export const Texto = styled.p`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');
font-family: 'Montserrat', sans-serif;
font-size: 20px;
color: white;
@media(max-width:1000px){
  font-size: 10px;
  
}

`