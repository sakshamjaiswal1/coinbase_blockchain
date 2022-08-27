import React,{useState} from 'react'
import styled from 'styled-components'
import CoinbaseLogo from '../assets/cb-logo.png'
import {navItems} from '../static/navItems'
import Image from 'next/image'

const SideBar = () => {
const [activeIcon,setActiveIcon]=useState(navItems[0].title)
  return (
    <Wrapper>
<LogoContainer>
  <Logo>
  <Image src={CoinbaseLogo} alt='Coinbase Logo' ></Image>
  </Logo>

</LogoContainer>
<NavItemsContainer>
{
  navItems.map((item)=><NavItem key={item.title} onClick={()=>setActiveIcon(item.title)} >
<NavIcon style={{ color: item.title === activeIcon && '#3773f5' }}>
               {item.icon}</NavIcon>
<NavTitle style={{ color: item.title === activeIcon && '#3773f5' }} >{item.title}</NavTitle>
  </NavItem>)
}
</NavItemsContainer>
    </Wrapper>
    
  )
}


export default SideBar
const Wrapper = styled.div`
  height: calc(100vh - 2rem);
  border-right: 1px solid #282b2f;
  width: calc(22rem - 16px - 16px);
  /* TRouBLe */
  padding: 0 1rem;
`
const LogoContainer = styled.div`
margin:1.5rem 0;
`

const Logo = styled.div`
width: 44%;
object-fit: contain;
margin-left: 1.5rem;
`

const NavItemsContainer= styled.div`
  margin-top: 3rem;
  &:hover{
    cursor: pointer;
  }
`
const NavItem=styled.div`
   display: flex;
   align-items: center;
   margin: 0 0 1.5rem 0;
   font-weight: 500;
   font-size: 1.3rem;
   height: 4rem;
   border-radius: 0.5rem;
   &:hover {
    background-color: #141519;
  }
`
const NavIcon=styled.div`
   background-color: #141519;
   display: contents;
   justify-content:center;
   align-items: center;
   padding: 0.7rem;
   /* margin: 2rem 1rem; */
`
const NavTitle=styled.div`
  margin: 0 1rem;
`