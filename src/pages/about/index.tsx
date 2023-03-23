import { AboutCard, AboutContainer, CardText, CardTitle, ImageContainer, Img } from './style'
import Image from 'next/image'

const About = () => {
  return (
    <AboutContainer>
      <AboutCard>
        <CardTitle>
            Sobre o Projeto
        </CardTitle>
        <CardText>
          Quando iniciei meus estudos em Front-End, um dos primeiros projetos no qual tive a confiança de executar foi uma Pokedex. 
        </CardText>
        <CardText>
          Inicialmente a Pokedex foi desenvolvida inteiramente em HTML, CSS e JavaScript. E após a conclusão do projeto, dei início nos estudos em React.JS, e após alguns meses de estudo, consegui o meu primeiro estágio na área, e deixei em segundo plano os projetos que executava pessoalmente.
        </CardText>
        <CardText>
          Após alguns meses de estudo e experiência na área com React.JS, Sempre estive na busca de obter mais conhecimento, e após conhecer o framework Next.JS
          iniciei esse projeto com o intuito de aprimorar meus conhecimentos em Next e React, usando o mesmo como playground para testar novas funcionalidades e ferramentas que o Next oferece.
        </CardText>
        <CardTitle>
          Sobre mim
        </CardTitle>
      </AboutCard>
      <ImageContainer>
      <Img src="/images/PokedexWebsite.png" width="1000" height="500" alt="Pokedex Website"/>
      </ImageContainer>
    </AboutContainer>
  )
}

export default About