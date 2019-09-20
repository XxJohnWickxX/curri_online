import React from 'react';
import Main from './components/Main';
import About from './components/About';
import Sidebar from './components/Sidebar';
import Info from './components/Info';
import Educacion from './components/Educacion';
import Experiencia from './components/Experiencia';
import Certificaciones from './components/Certificaciones';
import Habilidades from './components/Habilidades';
import useGetData from '../src/hooks/useGetData';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import spinn from '../src/icon_software.png'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
    background: #f5f5f5;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;



const App = () => {
  
  const data = useGetData()
  console.log(data);
  
    return data.length === 0 ? 
    <Rotate> 
      <img src={spinn} alt=""/> 
    </Rotate>  : (

         <Main>
          <GlobalStyle />
            <Sidebar>
              <About 
                avatar = {data.avatar}
                name = {data.name}
                profession = {data.profession}
                bio = {data.bio}
                address = {data.address}
                social = {data.social}             
              />
            </Sidebar>
            <Info>
              <Educacion 
                data = {data.education}
              />
              <Experiencia 
                data = {data.experience}
              />
              <Certificaciones 
                data = {data.certificate}
              />
              <Habilidades 
                data = {data.skills}
              /> 
            </Info>

        </Main>
    )
}
  

export default App;
