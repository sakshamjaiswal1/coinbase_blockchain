import React from 'react'
import Portfolio from './Portfolio'
import Proms from './Proms'
import styled from 'styled-components'

const Main = () => {
  return (
    <Wrapper>
        <Portfolio/>
        <Proms/>
    </Wrapper>
  )
}

export default Main

const Wrapper=styled.div`
     display: flex;
  & div {
    border-radius: 0.4rem;
  }
`