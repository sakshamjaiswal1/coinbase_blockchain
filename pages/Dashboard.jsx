import React, { useEffect } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Main from "../components/Main";
import SideBar from "../components/SideBar";

const Dashboard = ({address}) => {
const [sanityTokens,setSanityTokens]=useState()
    useEffect(()=>{


},[])
    return (
    <Wrapper>
      <SideBar />
      <MainContainer>
        <Header  address={address} />
        <Main />
      </MainContainer>
    </Wrapper>
  );
};

export default Dashboard;
const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #0a0b0d;
  color: white;
`;

const MainContainer = styled.div`
  flex: 1;
`;
