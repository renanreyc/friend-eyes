import React from 'react'
import { Container } from './styles'
import { Link } from 'react-router-dom'

const SidebarItem = ({ Icon, Text, Path }) => {
  return (
    <Link to={ Path }>
      <Container>
      <Icon />
        { Text }
    </Container>
    </Link>

  )
}

export default SidebarItem