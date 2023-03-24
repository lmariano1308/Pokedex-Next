import React, { FC } from 'react'
import { Container } from './style'

interface Props {
  icon: JSX.Element;
  onClick?: () => void;
}

const Icon:FC<Props> = ({icon, onClick}) => {
  return (
    <Container onClick={onClick} >
      {icon}
    </Container>
  )
}

export default Icon