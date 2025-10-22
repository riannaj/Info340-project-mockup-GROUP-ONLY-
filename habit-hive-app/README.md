# Habit Hive

A habit tracking app mockup with a bee mascot. Built with React and styled to match Figma designs.

## Features

- **Habit Buddy**: Bee avatar with clothing options
- **Habit Tracking**: Daily habits with toggle switches
- **Calendar Integration**: Visual calendar for habit scheduling
- **Community**: Social features for sharing progress
- **Gamification**: Points and streaks to keep you motivated
- **Mobile-First Design**: Responsive design optimized for mobile devices

## Screens Included

1. **Login Screen**: Email/password authentication
2. **Home Page**: Dashboard with habit buddy, stats, and quick access
3. **Habit Buddy**: Avatar customization with clothing options
4. **Community**: Social feed with posts and interactions
5. **Habit Creator**: Form to create new habits with scheduling
6. **Calendar**: Date picker for habit planning
7. **Habit Page**: List of habits with toggle switches

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd habit-hive-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

## Project Structure

```
habit-hive-app/
├── src/
│   ├── components/
│   │   ├── Login.jsx          # Login screen
│   │   ├── Home.jsx           # Home dashboard
│   │   ├── HabitBuddy.jsx     # Avatar customization
│   │   ├── Community.jsx      # Social feed
│   │   ├── HabitCreator.jsx   # Habit creation form
│   │   ├── Calendar.jsx       # Date picker
│   │   └── HabitPage.jsx      # Habit management
│   ├── App.jsx               # Main app component
│   ├── App.css              # Global styles
│   └── main.jsx             # Entry point
├── package.json             # Dependencies
├── vite.config.js          # Vite configuration
├── index.html              # HTML template
└── README.md               # This file
```

## Design Features

- **Mobile-First**: Optimized for mobile devices (375px width)
- **Status Bar**: Realistic mobile status bar with time and icons
- **Navigation**: Bottom navigation bar for easy access
- **Cards**: Purple-themed cards for content organization
- **Bee Avatar**: Custom CSS bee with clothing customization
- **Toggle Switches**: Interactive habit completion toggles
- **Responsive**: Adapts to different screen sizes

## Customization

The app is fully customizable:

- **Colors**: Modify the CSS variables in `App.css`
- **Bee Avatar**: Customize the bee design in the `.bee-*` classes
- **Clothing Items**: Add more items in `HabitBuddy.jsx`
- **Habits**: Extend the habit data structure as needed

## Technologies Used

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **CSS3**: Custom styling with flexbox and grid
- **JavaScript ES6+**: Modern JavaScript features
