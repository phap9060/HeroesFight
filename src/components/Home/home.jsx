import React, { Fragment } from "react";
import { Image, Texto1, Texto2 } from "./style";

const Home = () => {
  return (
    <Fragment>
      <Image>
        <Texto1>Heroes Fight</Texto1>
        <Texto2>
          Do you wanna know whos gonna win this fight? Spider Man or Super Man?
          Batman or Black Panther? Choose your heros and find out!!!
        </Texto2>
      </Image>
    </Fragment>
  );
};

export default Home;
