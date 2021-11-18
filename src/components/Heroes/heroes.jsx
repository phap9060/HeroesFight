import React,{useState,useEffect,useContext} from 'react'
import axios from 'axios'
import context from '../../context/context'
import {
  Section,
  Title,
  Input,
  Imagens,
  Div,
  Imagem,
  Texto
} from './style'

const Heroes = () => {
  const [loading,setLoading] = useState(false)
  const [apiData,setApiData] = useState({})
  const [search, setSearch] = useState('')
  const ctx = useContext(context)
  useEffect(() => {
    axios.get('http://homologacao3.azapfy.com.br/api/ps/metahumans')
    .then(res => {
    setApiData(res.data)
    setLoading(true)
}) .catch(error => {
    alert("Erro na api")
})
}, [])

    return (
    <Section>
    <Title>
     Heroes List
    </Title>
    <Input placeholder="Type a hero name..." type="text"  
          name="name" onChange={e => setSearch(e.target.value)}  />
    <Imagens>
    {loading &&  apiData.filter(hero => hero.name.toLowerCase().
                  includes(search.toLowerCase())).map(data => (
          <Div key={data.id} >
            <Imagem src = {data.images.md}/>
            <Texto>{data.name}</Texto>
          </Div> 
         ))}
    </Imagens> 

  </Section>
  )
}

export default Heroes
