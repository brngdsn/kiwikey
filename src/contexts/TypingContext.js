// src/contexts/TypingContext.js
import React, { createContext, useReducer, useEffect } from 'react';

// Define a set of prompts with difficulty levels
const predefinedPrompts = [
  {
    id: 1,
    text: 'The quick brown fox jumps over the lazy dog.',
    difficulty: 'Easy',
  },
  {
    id: 2,
    text: 'JavaScript is a versatile programming language.',
    difficulty: 'Medium',
  },
  {
    id: 3,
    text: `const greet = (name) => {\n  console.log(\`Hello, \${name}!\`);\n};\n`,
    difficulty: 'Hard',
  },
  // Add more prompts as needed
];

// Initial State
const initialState = {
  prompts: predefinedPrompts,
  currentPrompt: predefinedPrompts[0],
  userInput: '',
  startTime: null,
  endTime: null,
  status: 'idle', // 'idle' | 'running' | 'completed' | 'interrupted'
  stats: {
    wpm: 0,
    cpm: 0,
    accuracy: 100,
    timeElapsed: 0, // seconds
    typos: 0,
  },
  completedPrompts: [], // Array of prompt IDs
};

// Actions
const ACTIONS = {
  START: 'START',
  STOP: 'STOP',
  INTERRUPT: 'INTERRUPT',
  UPDATE_INPUT: 'UPDATE_INPUT',
  UPDATE_STATS: 'UPDATE_STATS',
  RESET: 'RESET',
  SET_CURRENT_PROMPT: 'SET_CURRENT_PROMPT',
  ADD_COMPLETED_PROMPT: 'ADD_COMPLETED_PROMPT',
  LOAD_COMPLETED_PROMPTS: 'LOAD_COMPLETED_PROMPTS',
};

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.START:
      return { ...state, status: 'running', startTime: Date.now() };
    case ACTIONS.STOP:
      return { ...state, status: 'completed', endTime: Date.now() };
    case ACTIONS.INTERRUPT:
      return { ...state, status: 'interrupted', endTime: Date.now() };
    case ACTIONS.UPDATE_INPUT:
      return { ...state, userInput: action.payload };
    case ACTIONS.UPDATE_STATS:
      return { ...state, stats: { ...state.stats, ...action.payload } };
    case ACTIONS.RESET:
      return {
        ...state,
        userInput: '',
        startTime: null,
        endTime: null,
        status: 'idle',
        stats: {
          wpm: 0,
          cpm: 0,
          accuracy: 100,
          timeElapsed: 0,
          typos: 0,
        },
      };
    case ACTIONS.SET_CURRENT_PROMPT:
      return {
        ...state,
        currentPrompt: action.payload,
        userInput: '',
        startTime: null,
        endTime: null,
        status: 'idle',
        stats: {
          wpm: 0,
          cpm: 0,
          accuracy: 100,
          timeElapsed: 0,
          typos: 0,
        },
      };
    case ACTIONS.ADD_COMPLETED_PROMPT:
      const updatedCompleted = [...state.completedPrompts, action.payload];
      // Save to local storage
      // localStorage.setItem('completedPrompts', JSON.stringify(updatedCompleted));
      return { ...state, completedPrompts: updatedCompleted };
    case ACTIONS.LOAD_COMPLETED_PROMPTS:
      return { ...state, completedPrompts: action.payload };
    default:
      return state;
  }
};

// Create Context
export const TypingContext = createContext();

// Provider Component
export const TypingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Load completed prompts from local storage on initialization
  useEffect(() => {
    // const storedCompleted = localStorage.getItem('completedPrompts');
    // if (storedCompleted) {
    //   dispatch({
    //     type: ACTIONS.LOAD_COMPLETED_PROMPTS,
    //     payload: JSON.parse(storedCompleted),
    //   });
    // }
  }, []);

  return (
    <TypingContext.Provider value={{ state, dispatch }}>
      {children}
    </TypingContext.Provider>
  );
};
