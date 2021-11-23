import styled from 'styled-components'

export const Image = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-repeat:no-repeat;
  overflow: hidden;
  color: #fff;
  background-size: cover;
  position: relative;
  height: 91vh;
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.7) 100%) , url('https://images.hdqwalls.com/download/marvel-duel-2020-mobile-pc-1152x864.jpg');
  @media(max-width:900px){
    justify-content: center;
}
`
export const Texto1 = styled.p`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');
font-family: 'Montserrat', sans-serif;
color:#e2e2e2;
width: 50%;
display: flex;
justify-content: center;
font-size: 70px;
font-weight: bolder;
@media(max-width:900px){
  width: 100%;
  font-size:28px;
  margin-left: 7px;
}
`
export const Texto2 = styled(Texto1)`
color: #e4e9e6;
width: 50%;
font-size: 20px;
font-weight: bolder;
@media(max-width:900px){
 width: 100%;
 font-size: 18px;
}
`
