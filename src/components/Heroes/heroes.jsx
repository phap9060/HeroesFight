import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ModalContext } from "../../context/context";
import CustomizedDialogs from "../Modal/modal";
import {
  Section,
  Title,
  ButtonErased,
  Img,
  Input,
  Imagens,
  Div1,
  Imagem,
  Texto,
  Div2,
} from "./style";

const Heroes = () => {
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState({});
  const [search, setSearch] = useState("");
  const [heroes, setHeroes] = useState(false);

  const ctx = useContext(ModalContext);
  useEffect(() => {
    axios
      .get("http://homologacao3.azapfy.com.br/api/ps/metahumans")
      .then((res) => {
        setApiData(res.data);
        setLoading(true);
      })
      .catch((error) => {
        alert("Erro na api");
      });
  }, []);

  const reset = () => {
    ctx.setSelectChamp([]);
    setHeroes(false);
  };
  const heroesSelected = (name, powerStats) => {
    if (ctx.selectChamp.length < 1) {
      ctx.setSelectChamp([...ctx.selectChamp, name]);
      ctx.setPower1([Object.values(powerStats)]);
      setHeroes(true);
    } else if (ctx.selectChamp.length > 0 && ctx.selectChamp.length < 2) {
      ctx.setSelectChamp([...ctx.selectChamp, name]);
      ctx.setPower2([Object.values(powerStats)]);
      setHeroes(true);
    }
  };

  return (
    <Section>
      <Title>Heroes List</Title>
      <Div2>
        <ButtonErased onClick={() => reset()} type="button">
          Erase
        </ButtonErased>
        {heroes &&
          ctx.selectChamp.map((data, index) => <Img key={index} src={data} />)}
        {ctx.selectChamp.length >= 2 && <CustomizedDialogs />}
      </Div2>

      <Input
        placeholder="Type a hero name..."
        type="text"
        name="name"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Imagens>
        {loading &&
          apiData
            .filter((hero) =>
              hero.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((data, index) => (
              <Div1
                onClick={() => heroesSelected(data.images.md, data.powerstats)}
                key={index}
              >
                <Imagem src={data.images.md} />
                <Texto>{data.name}</Texto>
              </Div1>
            ))}
      </Imagens>
    </Section>
  );
};

export default Heroes;
