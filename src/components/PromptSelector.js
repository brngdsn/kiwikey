// src/components/PromptSelector.js
import React, { useContext } from 'react';
import styled from 'styled-components';
import { TypingContext } from '../contexts/TypingContext';

// Styled Components
const SelectorContainer = styled.div`
  padding: 20px;
  background-color: #20232a;
  color: #61dafb;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const PromptList = styled.ul`
  list-style: none;
  padding: 0;
`;

const PromptItem = styled.li`
  padding: 10px;
  margin-bottom: 8px;
  background-color: ${(props) =>
    props.$completed
      ? '#61dafb'
      : props.$isCurrent
      ? '#3a3f47'
      : '#282c34'};
  color: ${(props) =>
    props.$completed || props.$isCurrent ? '#282c34' : '#f7f7f7'};
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

  const handleSelectPrompt = (prompt) => {
    if (completedPrompts.includes(prompt.id)) return; // Do not allow re-selection
    if (prompt.id === currentPrompt.id) return; // Do not re-select the same prompt
    dispatch({ type: 'SET_CURRENT_PROMPT', payload: prompt });
  };

  return (
    <SelectorContainer>
      <PromptList>
        {prompts.map((prompt) => (
          <PromptItem
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
