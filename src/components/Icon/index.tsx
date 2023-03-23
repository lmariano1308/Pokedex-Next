import React, { FC } from 'react'
import { Container } from './style'

interface Props {
  icon: JSX.Element
}

const Icon:FC<Props> = ({icon}) => {
  return (
    <Container>
      {icon}
    </Container>
  )
}

export default Icon