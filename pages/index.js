import styled from "styled-components";
import { useWeb3 } from "@3rdweb/hooks";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
export default function Home() {
  const { address, connectWallet } = useWeb3();
  return (
    <Wrapper>
      <SideBar/>
      
      <Maincontainer>
        <Header/>
      </Maincontainer>
      {/* <button onClick={() => connectWallet("injected")}>Connect Wallet</button> */}
      </Wrapper>
  );
}
const Wrapper = styled.div`
display: flex;
height: 100vh;
width: 100vw;
background-color: #0a0b0d;
color: white;
`
const Maincontainer = styled.div`
flex: 1;
`