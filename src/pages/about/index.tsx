import { AboutCard, AboutContainer, CardSubtitle, CardText, CardTitle, Container, GitHub, IconContainer, ImageContainer, Img } from './style'
import Image from 'next/image'
import Icon from '@/components/Icon'

const About = () => {
  return (
    <Container>

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
        {/* <CardTitle>
          Sobre mim
        </CardTitle>
        <CardText>
          Me chamo Lucas, tenho 23 anos e sou desenvolvedor Front-End. Atualmente trabalho como Estagiário na empresa <a href="https://mindtech.com.br/" target="_blank">Mindtech</a>, onde desenvolvo aplicações web utilizando React.JS e Next.JS.
        </CardText>
        <CardSubtitle>
          Minhas Redes Sociais:
        </CardSubtitle> */}
      </AboutCard>
      <ImageContainer>
      <Img src="/images/PokedexWebsite.png" width="800" height="400" alt="Pokedex Website"/>
      </ImageContainer>
    </AboutContainer>
    <AboutContainer>

      <AboutCard>
      <CardTitle>
          Sobre mim
        </CardTitle>
        <CardText>
          Me chamo Lucas, tenho 23 anos e sou desenvolvedor Front-End. Atualmente trabalho como Estagiário na empresa <a href="https://mindtech.com.br/" target="_blank">Mindtech</a>, onde desenvolvo aplicações web utilizando React.JS e Next.JS.
        </CardText>
        
      </AboutCard>
      <AboutCard>
        <CardTitle>
          Minhas Redes Sociais
        </CardTitle>
          <IconContainer>
            <Icon icon={<GitHub />}/>
            <Icon icon={<GitHub />}/>
            <Icon icon={<GitHub />}/>
          </IconContainer>
      </AboutCard>
    </AboutContainer>
    </Container>

  )
}

export default About