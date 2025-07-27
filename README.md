# Smart Goal Planner

A modern React application for tracking financial goals and savings progress. Built with Vite and React, featuring a beautiful UI and full CRUD operations for managing goals and deposits.

## Features

- 📊 **Goal Overview Dashboard** - View summary statistics and recent activity
- 🎯 **Create Financial Goals** - Set target amounts and deadlines
- 💰 **Track Deposits** - Add deposits to goals and monitor progress
- 📈 **Progress Visualization** - Visual progress bars and completion percentages
- ⏰ **Deadline Tracking** - Color-coded urgency indicators for approaching deadlines
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🎨 **Modern UI** - Beautiful gradient backgrounds and smooth animations

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

### Step 1: Start the JSON Server
The application uses json-server to simulate a backend API. Start it on port 3001:

```bash
npm run server
```

This will start the server and watch the `db.json` file for changes.

### Step 2: Start the React Development Server
In a new terminal window, start the Vite development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Usage

### Creating Goals
1. Click the "Create New Goal" button
2. Fill in the goal details:
   - **Title**: Name of your financial goal
   - **Target Amount**: The amount you want to save
   - **Deadline**: When you want to reach your goal
3. Click "Create Goal"

### Adding Deposits
1. Click "Add Deposit" on any goal card
2. Enter the deposit amount and date
3. Click "Add Deposit" to save

### Managing Goals
- **View Deposits**: Click "Show Deposits" to see all deposits for a goal
- **Delete Goals**: Click "Delete" to remove a goal (with confirmation)
- **Progress Tracking**: Monitor your progress with visual progress bars

## Data Structure

The application uses the following data structure in `db.json`:

```json
{
  "goals": [
    {
      "id": 1,
      "title": "Emergency Fund",
      "targetAmount": 1000,
      "currentAmount": 300,
      "deadline": "2025-08-30",
      "deposits": [
        {
          "id": 1,
          "amount": 100,
          "date": "2025-07-20"
        }
      ]
    }
  ]
}
```

## API Endpoints

The application communicates with the following endpoints:

- `GET /goals` - Fetch all goals
- `POST /goals` - Create a new goal
- `PATCH /goals/:id` - Update a goal
- `DELETE /goals/:id` - Delete a goal

## Technologies Used

- **Frontend**: React 19, Vite
- **Styling**: CSS3 with modern gradients and animations
- **Backend**: json-server (for development)
- **State Management**: React Hooks (useState, useEffect)

## Project Structure

```
src/
├── Components/
│   ├── DepositeForm.jsx    # Form for adding deposits
│   ├── GoalCard.jsx        # Individual goal display
│   ├── GoalForm.jsx        # Form for creating goals
│   ├── Overview.jsx        # Dashboard overview
│   └── ProgressBar.jsx     # Progress visualization
├── api.js                  # API service functions
├── App.jsx                 # Main application component
├── App.css                 # Application styles
├── index.css               # Global styles
└── main.jsx                # Application entry point
```

## Available Scripts

- `npm run dev` - Start the Vite development server
- `npm run server` - Start the JSON server on port 3001
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint for code quality

## Troubleshooting

### Common Issues

1. **"Failed to load goals" error**
   - Make sure json-server is running on port 3001
   - Run `npm run server` in a separate terminal

2. **Port conflicts**
   - If port 3001 is in use, modify the server script in package.json
   - If port 5173 is in use, Vite will automatically use the next available port

3. **CORS errors**
   - The application is configured to work with json-server on localhost:3001
   - Ensure both servers are running simultaneously

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.
