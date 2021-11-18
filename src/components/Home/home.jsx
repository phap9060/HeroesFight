import React,{Fragment} from 'react'
import {
Image,
Texto1,
Texto2
} from './style'

const Home = () => {
  return (
  <Fragment>
    <Image>
      <Texto1>
        Heroes Fight
      </Texto1>
      <Texto2>
        Dou you have curiosity about who hero won a fight against another hero?
        Click in "heroes" in a NavBar and find it out!!       
      </Texto2>
    </Image> 
  </Fragment>
  )
}

export default Home
