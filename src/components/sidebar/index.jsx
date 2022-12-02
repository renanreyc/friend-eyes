import React from 'react'
import { Container, Content } from './styles'
import { 
  FaTimes, 
  FaHome, 
  FaEnvelope, 
  FaRegSun, 
  FaUserFriends, 
  FaRegFileAlt,
  FaAngellist,
  FaPen,
  FaPhoneVolume
  
} from 'react-icons/fa'

import SidebarItem from '../sidebarItem'

const Sidebar = ({ active }) => {
    const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
   
        <SidebarItem Icon={FaAngellist} Text="Bem-vindo" Path="/welcome" />
        <SidebarItem Icon={FaHome} Text="Tela Principal" Path="home"/>
        <SidebarItem Icon={FaPen} Text="Cadastro" Path="registration"/>
        <SidebarItem Icon={FaUserFriends} Text="Login" Path="login"/>
        <SidebarItem Icon={FaPhoneVolume} Text="Sala de Chamada" Path="/"/>

      </Content>
    </Container>
  )
}

export default Sidebar