import { TypingProvider } from './contexts/TypingContext';
import TypingInput from './components/TypingInput';
import PromptSelector from './components/PromptSelector';
import styled from 'styled-components';
import './App.css';

// Styled Components for Layout
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #20232a;
  min-height: 100vh;
`;

const Content = styled.div`
  width: 80%;
  max-width: 800px;
`;

function App() {
  return (
    <div className="App">
      <TypingProvider>
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
