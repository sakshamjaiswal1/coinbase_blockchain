import React from 'react'
import styled from 'styled-components'

const Header = ({address}) => {
  return (
   <Wrapper>
    <Title>
        Assets
    </Title>
    <ButtonsContainer>
    {address ? (
          <WalletLink>
            <WalletLinkTitle>Wallet Connected</WalletLinkTitle>
            <WalletAddress>
              {address.slice(0, 7)}...{address.slice(35)}
            </WalletAddress>
          </WalletLink>
        ) : (
          <Button onClick={() => connectWallet('injected')}>
            Connect Wallet
          </Button>
        )}
        <Button  style={{ backgroundColor: '#3773f5', color: '#000' }} >Buy/Sell</Button>
        <Button>Send/Receive</Button>
    </ButtonsContainer>
    <Separator/>
    <ProfileIcon/>
   </Wrapper>
  )
}

export default Header
const Wrapper=styled.div`
    display: flex;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #282b2f;
    width: calc(100%-3rem);
    align-items: center;
`
const Title=styled.div`
      font-size: 2rem;
  font-weight: 600;
  flex: 1;
`
const ButtonsContainer=styled.div`
    display: flex;
`

const Button= styled.div`
     border: 1px solid #282b2f;
  padding: 0.8rem;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 0.4rem;
  margin-right: 1rem;
  &:hover {
    cursor: pointer;
  }
`
const WalletLink = styled.div`
  font-size: 0.8rem;
  border: 1px solid #282b2f;
  border-radius: 10%;
  font-size: 1.2rem;
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

const WalletLinkTitle = styled.div`
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
  color: #27ad75;
  font-weight: 600;
`
const WalletAddress = styled.div`
  font-size: 0.8rem;
  /* color: #8a919e; */
`



const Separator= styled.div``
const ProfileIcon=styled.div``
