import { Container, Description, ImageContainer, Img, TextContainer, Title } from "./styles/home";
import Charizard from '../../public/images/charizard.png'
import localFont from 'next/font/local'
import Button from "@/components/Button";
import AnimatedText from "@/components/AnimatedText";

const myFont = localFont({
  src: './POKEMON.ttf',
})

const text = [
  {type: 'heading', text: 'Bem vindo ao Nextdex'},
  {type: 'paragraph', text: 'A sua melhor fonte de informações sobre pokemons.'},
  {type: 'paragraph', text: 'Aqui você encontra informações sobre os pokemons,'},
  {type: 'paragraph', text: 'como o seu tipo, fraquezas, habilidades e muito mais.'},
]

const container = {
  visible: {
    transition: {
      staggerChildren: 0.025,
      delayChildren: 1
    }
  }
}

const textVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200
    }
  }
}

export default function Home() {
  return (
    <Container>
      <TextContainer>
        <AnimatedText text="Bem vindo a Nextdex" replay={true} className={myFont.className}/>
        <Description
          variants={textVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 2 }}
        >
          Uma pokedex totalmente interativa construida com Next.JS
          <br />
          Aperte no botao abaixo para começar a sua jornada
        </Description>
        <Button text="Comece agora" onClick={() => {}}/>
      </TextContainer>
      <ImageContainer>
        <Img src={Charizard} width={500} height={500} alt="Charizard"/>
      </ImageContainer>
    </Container>
  )
}
