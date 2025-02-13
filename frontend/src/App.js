// import logo from './logo.svg';
// import './App.css';
import styled from "styled-components";
import bg from './img/bgpink.jpg'
import { MainLayout } from "./styles/Layouts";
import Orb from "./Components/Orb/Orb";

function App() {
  return (
    <AppStyled bg={bg} className="App"> 
    <Orb />
     <MainLayout> 

     </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
	height:100vh;
  background-image: url(${props => props.bg});
  /* background-size:cover; //cover- full container  contain- no cropping 
  background-position:center; //remains center
  background-repeat:no-repeat; //does not repeat */
  position: relative; 
`;

export default App; 
