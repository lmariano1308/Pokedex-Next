import { Container, Description, ImageContainer, Img, TextContainer, Title } from "./styles/home";
import Charizard from '../../public/images/charizard.png'
import localFont from 'next/font/local'

const myFont = localFont({
  src: './POKEMON.ttf',
})

export default function Home() {
  return (
    <Container>
      <TextContainer>
        <Title className={myFont.className}>Bem vindo ao Nextdex</Title>
        <Description>
          A sua melhor fonte de informações sobre pokemons.
          <br />
          Aqui você encontra informações sobre os pokemons,
          <br />
          como o seu tipo, fraquezas, habilidades e muito mais.
        </Description>
      </TextContainer>
      <ImageContainer>
        <Img src={Charizard} width={500} height={500} alt="Charizard"/>
      </ImageContainer>
    </Container>
  )
}
