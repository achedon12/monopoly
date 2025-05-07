# 🎲 Monopoly Game

![Monopoly Logo](public/icon.png)

Play the classic board game Monopoly in a digital format! This project is a web-based implementation of the iconic Monopoly game, built with React and Docker.

---

## 📊 Badges

<p>
  <a href="https://github.com/achedon12/monopoly">
    <img src="https://img.shields.io/github/repo-size/achedon12/monopoly?style=for-the-badge" alt="Repo Size">
  </a>
  <a href="https://github.com/achedon12/monopoly/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/achedon12/monopoly?style=for-the-badge" alt="Contributors">
  </a>
  <a href="https://github.com/achedon12/monopoly/commits/main">
    <img src="https://img.shields.io/github/last-commit/achedon12/monopoly?style=for-the-badge" alt="Last Commit">
  </a>
  <a href="https://github.com/achedon12/monopoly/issues">
    <img src="https://img.shields.io/github/issues/achedon12/monopoly?style=for-the-badge" alt="Issues">
  </a>
  <a href="https://github.com/achedon12/monopoly/pulls">
    <img src="https://img.shields.io/github/issues-pr/achedon12/monopoly?style=for-the-badge" alt="Pull Requests">
  </a>
  <a href="https://github.com/achedon12/monopoly/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/achedon12/monopoly?style=for-the-badge" alt="License">
  </a>
</p>

<p align="center">
  <a href="https://github.com/achedon12/monopoly/stargazers">
    <img src="https://img.shields.io/github/stars/achedon12/monopoly?style=social" alt="Stars">
  </a>
  <a href="https://github.com/achedon12/monopoly/network/members">
    <img src="https://img.shields.io/github/forks/achedon12/monopoly?style=social" alt="Forks">
  </a>
  <a href="https://github.com/achedon12/monopoly/watchers">
    <img src="https://img.shields.io/github/watchers/achedon12/monopoly?style=social" alt="Watchers">
  </a>
</p>

---

## 📜 Description

This project is a digital adaptation of the iconic Monopoly game, allowing players to engage in a fun and interactive experience. The game features a user-friendly interface, real-time gameplay mechanics, and a responsive design that works seamlessly across various devices.

The game is designed to be played by multiple players, where they can roll dice, buy properties, and manage their assets. The project utilizes modern web technologies to ensure a smooth and enjoyable gaming experience.

The game is built with a focus on modularity and maintainability, making it easy to extend and add new features in the future.

The project is structured to follow best practices in React development, utilizing components for the game board, player management, and game logic. The use of Docker allows for easy setup and deployment, ensuring that the development environment is consistent across different machines.

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

---

## 📌 Table of Contents

- [🎯 Features](#-features)
- [🛠️ Technologies Used](#-technologies-used)
- [🚀 Getting Started](#-getting-started)
    - [Development Setup](#development-setup)
    - [Production Build](#production-build)
- [📁 Project Structure](#-project-structure)
- [📄 License](#-license)

---

## 🎯 Features

- **User Registration**: Players can sign up with a username, age, and avatar.
- **Interactive Game Board**: A dynamic Monopoly board rendered using React components.
- **Real-Time Gameplay**: Turn-based mechanics with dice rolls, property management, and chance cards.
- **Responsive Design**: Seamless experience across desktops, tablets, and mobile devices.
- **Persistent State**: Game progress is saved, allowing players to resume games.

---

## 🛠️ Technologies Used

- **Frontend**:
    - [React](https://reactjs.org/)
    - [Vite](https://vitejs.dev/)
    - [React Router](https://reactrouter.com/)
    - [Tailwind CSS](https://tailwindcss.com/)

- **Containerization**:
    - [Docker](https://www.docker.com/)
    - [Docker Compose](https://docs.docker.com/compose/)

---

## 🚀 Getting Started

### Development Setup

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/achedon12/monopoly.git
   cd monopoly
   ```

2. **Start the Development Environment**:

   ```bash
   docker-compose -f docker-compose.dev.yml up --build
   ```

3. **Access the Application**:

   Open your browser and navigate to [http://localhost:5173](http://localhost:5173)

### Production Build

1. **Build and Run the Production Container**:

   ```bash
   docker-compose -f docker-compose.yml up --build -d
   ```

2. **Access the Application**:

   Open your browser and navigate to [http://localhost](http://localhost)

---

## 📁 Project Structure

```
monopoly/
├── public/                 # Static assets
├── src/                    # React components and pages
├── .dockerignore           # Docker ignore rules
├── .gitignore              # Git ignore rules
├── docker-compose.yml      # Production Docker Compose configuration
├── docker-compose.dev.yml  # Development Docker Compose configuration
├── Dockerfile              # Dockerfile with multi-stage builds
├── package.json            # Project metadata and scripts
├── vite.config.js          # Vite configuration
└── README.md               # Project documentation
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

Happy Gaming! 🎉
