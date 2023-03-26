import React, { FC } from 'react'
import { Container, Text } from './style'

interface Props {
    text: string;
    onClick: () => void;
}

const Button: FC<Props> = ({
    text,
    onClick
}) => {
  return (
    <Container onClick={onClick}>
        <Text>{text}</Text>
    </Container>
  )
}

export default Button