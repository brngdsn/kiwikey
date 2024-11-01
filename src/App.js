import { TypingProvider } from './contexts/TypingContext';
import NavBar from './components/NavBar';
import TypingInput from './components/TypingInput';
import PromptSelector from './components/PromptSelector';
import styled from 'styled-components';
import './App.css';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4rem; /* Space for the fixed NavBar */
  padding-bottom: 2rem;
`;

const Content = styled.div`
  width: 80%;
  max-width: 800px;

  @media (max-width: 600px) {
    width: 95%;
  }
`;

function App() {
  return (
    <div className="App">
      <TypingProvider>
        <NavBar />
        <AppContainer>
          <Content>
            <PromptSelector />
            <TypingInput />
          </Content>
        </AppContainer>
      </TypingProvider>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
