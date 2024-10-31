# Kiwikey

A responsive and feature-rich typing tutor application built with React. Enhance your typing skills by practicing with various prompts categorized by difficulty levels. Track your performance in real-time and monitor your progress over time.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Multiple Prompts with Difficulty Levels**: Choose from a variety of prompts categorized as Easy, Medium, and Hard.
- **Real-Time Statistics**: Monitor your typing speed (WPM & CPM), accuracy, typos, and elapsed time as you type.
- **Prompt Selection**: Easily select different prompts to practice your typing skills.
- **Completion Tracking**: Completed prompts are saved to local storage, preventing re-selection and allowing you to track your progress.
- **Responsive Design**: Optimized for various screen sizes, ensuring a seamless experience across devices.
- **Fullscreen Mode**: Toggle fullscreen to minimize distractions and focus solely on your typing practice.
- **Accessibility Enhancements**: ARIA labels and keyboard navigability ensure the application is accessible to all users.

## Demo

![Typing Tutor Demo](./screenshots/demo.gif)

*Note: Replace the above placeholder with an actual screenshot or GIF of your application.*

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Ensure you have **Node.js** and **npm** installed on your machine. You can download them from [Node.js Official Website](https://nodejs.org/).

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/kiwikey.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd kiwikey
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

4. **Start the Development Server**

   ```bash
   npm start
   ```

   The application will run at `http://localhost:3000` by default.

## Usage

1. **Select a Prompt**

   - Choose a prompt from the **Prompt Selector** categorized by difficulty levels.
   - Completed prompts are marked and cannot be re-selected to encourage progression.

2. **Start Typing**

   - Click on the typing area to focus and begin typing the displayed prompt.
   - Real-time statistics will update as you type, including WPM, CPM, accuracy, typos, and elapsed time.

3. **Fullscreen Mode**

   - Click the **Fullscreen** button to toggle fullscreen mode for an immersive typing experience.

4. **Interrupting a Session**

   - Press `Ctrl-C` at any time to interrupt the current typing session. The status will update accordingly.

5. **Completion Tracking**

   - Once you complete a prompt accurately, it will be marked as **Completed** and saved to local storage.
   - Completed prompts remain marked even after refreshing the page, allowing you to track your progress over time.

## Project Structure

```
kiwikey/
├── src/
│   ├── components/
│   │   ├── PromptSelector.js
│   │   └── TypingInput.js
│   ├── contexts/
│   │   └── TypingContext.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── public/
│   └── index.html
├── package.json
├── README.md
└── .gitignore
```

- **components/**: Contains all React components used in the application.
  - **PromptSelector.js**: Component for selecting typing prompts.
  - **TypingInput.js**: Core typing component that handles user input and displays statistics.
- **contexts/**: Contains Context API setup for state management.
  - **TypingContext.js**: Manages global state, including prompts, current prompt, user input, statistics, and completed prompts.
- **App.js**: Main application component that integrates all other components.
- **index.js**: Entry point of the React application.
- **index.css**: Global CSS styles.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Styled-Components**: For writing CSS in JavaScript and managing component-level styles.
- **React Icons**: For incorporating scalable vector icons.
- **Local Storage**: To persist completed prompts across sessions.

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. **Fork the Repository**

   Click the **Fork** button at the top-right corner of the repository page to create a copy of this project under your GitHub account.

2. **Clone the Forked Repository**

   ```bash
   git clone https://github.com/your-username/kiwikey.git
   ```

3. **Navigate to the Project Directory**

   ```bash
   cd kiwikey
   ```

4. **Create a New Branch**

   ```bash
   git checkout -b feature/YourFeatureName
   ```

5. **Make Your Changes**

   Implement your feature or fix.

6. **Commit Your Changes**

   ```bash
   git commit -m "Add feature: YourFeatureName"
   ```

7. **Push to the Branch**

   ```bash
   git push origin feature/YourFeatureName
   ```

8. **Create a Pull Request**

   Go to the original repository and click **Compare & pull request**. Provide a clear description of your changes and submit the pull request.

## License

This project is licensed under the [MIT License](./LICENSE).

---

*Feel free to customize this README to better fit your project's specifics, add more sections as needed, and include screenshots or GIFs to showcase your application.*