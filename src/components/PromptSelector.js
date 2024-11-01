// src/components/PromptSelector.js
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { TypingContext } from '../contexts/TypingContext';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

// Styled Components
const SelectorContainer = styled.div`
  padding: 20px;
  color: #61dafb;
  border-radius: 8px;
  margin-bottom: 20px;
  transition: all 0.3s ease-in-out;
`;

const Header = styled.div`
  display: none;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    display: flex;
    cursor: pointer;
  }
`;

const HeaderTitle = styled.h3`
  margin: 0;
  font-size: 1em;
`;

const PromptList = styled.ul`
  list-style: none;
  padding: 0;

  @media (max-width: 600px) {
    display: ${(props) => (props.$isOpen ? 'block' : 'none')};
  }
`;

const PromptItem = styled.li`
  padding: 10px;
  margin-bottom: 8px;
  background-color: ${(props) =>
    props.$completed
      ? '#61dafb'
      : props.$isCurrent
      ? '#313a49'
      : '#20232a'};
  color: ${(props) =>
      props.$completed
        ? '#20232a'
        : props.$isCurrent
        ? '#61dafb'
        : '#f7f7f7'};
  border-radius: 4px;
  cursor: ${(props) => (props.$completed ? 'not-allowed' : 'pointer')};
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: ${(props) =>
      props.$completed
        ? '#61dafb'
        : props.$isCurrent
        ? '#3a3f47'
        : '#3a3f47'};
  }
`;

const DifficultyBadge = styled.span`
  background-color: #61dafb;
  color: #282c34;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.8em;
  margin-right: 8px;
`;

const StatusBadge = styled.span`
  background-color: ${(props) =>
    props.$completed ? '#4caf50' : '#f44336'};
  color: #fff;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.8em;
`;

const PromptSelector = () => {
  const { state, dispatch } = useContext(TypingContext);
  const { prompts, currentPrompt, completedPrompts } = state;
  const [isOpen, setIsOpen] = useState(false); // For mobile toggle

  const handleSelectPrompt = (prompt) => {
    if (completedPrompts.includes(prompt.id)) return; // Do not allow re-selection
    if (prompt.id === currentPrompt.id) return; // Do not re-select the same prompt
    dispatch({ type: 'SET_CURRENT_PROMPT', payload: prompt });
    setIsOpen(false); // Close the list on selection (mobile)
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SelectorContainer className="SelectorContainer">
      <Header className="Header" onClick={toggleOpen} aria-label="Toggle Prompt Selector">
        <HeaderTitle>Select a Prompt</HeaderTitle>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </Header>
      <PromptList className="PromptList" $isOpen={isOpen}>
        {prompts.map((prompt) => (
          <PromptItem
            className="PromptItem"
            key={prompt.id}
            onClick={() => handleSelectPrompt(prompt)}
            $completed={completedPrompts.includes(prompt.id)}
            $isCurrent={prompt.id === currentPrompt.id}
            aria-label={`Prompt: ${prompt.text}, Difficulty: ${prompt.difficulty}`}
          >
            <span>{prompt.text}</span>
            <div>
              <DifficultyBadge>{prompt.difficulty}</DifficultyBadge>
              {completedPrompts.includes(prompt.id) && (
                <StatusBadge $completed>
                  Completed
                </StatusBadge>
              )}
              {prompt.id === currentPrompt.id && (
                <StatusBadge>
                  Current
                </StatusBadge>
              )}
            </div>
          </PromptItem>
        ))}
      </PromptList>
    </SelectorContainer>
  );
};

export default PromptSelector;
