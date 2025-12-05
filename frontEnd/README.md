# Civic Issue Reporting & Tracking Platform

A modern React single-page application (SPA) that allows citizens to report public issues (potholes, broken streetlights, garbage, water leaks, etc.) with photos/videos and location tracking. Features an attractive glassmorphism UI with AI-powered assistance for auto-categorization and priority scoring.

## Features

- 📝 **Report Creation**: Create reports with title, description, media uploads, and precise location
- 🤖 **AI Assistance**: Auto-suggest titles, categories, and priority scores (with graceful fallback to deterministic logic)
- 📍 **Interactive Maps**: View all reports on an interactive map with location markers
- 📊 **Admin Dashboard**: Manage reports, update statuses, assign to teams, and track timelines
- 🎨 **Modern UI**: Glassmorphism design with smooth animations using Framer Motion
- 📱 **Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- 💾 **Offline Support**: LocalStorage persistence for offline-first experience
- 🔔 **Notifications**: Toast notifications for user feedback

## Tech Stack

- **React 18+** - UI framework
- **React Router v6** - Client-side routing
- **Vite** - Build tool and dev server
- **Framer Motion** - Animations and transitions
- **React Leaflet** - Interactive maps
- **Zustand** - State management (via hooks)
- **MSW (Mock Service Worker)** - API mocking for development
- **browser-image-compression** - Client-side image compression

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd "Civic Issue Reporting & Tracking Platform"
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file (optional, for AI features):
```bash
VITE_SIMULATE_AI=true
# VITE_OPENAI_API_KEY=your_key_here  # Uncomment if you have an OpenAI API key
```

4. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

## Project Structure

```
src/
  ├── api/              # Mock API handlers (MSW)
  ├── components/        # React components
  │   ├── common/        # Reusable UI components
  │   └── report/        # Report-specific components
  ├── hooks/             # Custom React hooks
  ├── pages/             # Page components
  ├── styles/            # Global styles
  ├── utils/             # Utility functions
  └── data/              # Demo data
```

## Key Features Explained

### AI Integration

The app includes AI-powered suggestions for:
- **Title generation**: Auto-generates concise titles from descriptions
- **Category prediction**: Suggests appropriate categories (Road, Water, Electricity, etc.)
- **Priority scoring**: Assigns priority scores (1-10) based on issue severity

**Fallback Logic**: If AI is unavailable or fails, the app uses a deterministic keyword-based classifier (`dummyClassifier`) that matches patterns in the description to suggest categories and priorities.

### Report Status Flow

Reports follow this status progression:
1. **New** - Just created
2. **Triaged** - Reviewed and categorized
3. **In Progress** - Being worked on
4. **Resolved** - Issue fixed
5. **Closed** - Completed and archived

### Media Handling

- Supports up to 3 images and 1 video per report
- Automatic client-side image compression
- Preview before upload
- Data URI storage for demo (can be replaced with cloud storage)

### Location Features

- Interactive map for location selection
- "Use My Location" button for quick geolocation
- Reverse geocoding for address auto-completion
- Manual pin drop on map

## Environment Variables

- `VITE_SIMULATE_AI`: Set to `true` to simulate AI responses (default: uses fallback)
- `VITE_OPENAI_API_KEY`: Your OpenAI API key (requires server-side proxy for production)

## Development Notes

### Mock API

The app uses MSW (Mock Service Worker) to simulate API endpoints:
- `GET /api/reports` - Get all reports
- `GET /api/reports/:id` - Get single report
- `POST /api/reports` - Create report
- `PATCH /api/reports/:id` - Update report
- `POST /api/ai/predict` - Get AI predictions

### Data Persistence

Reports are stored in:
1. **MSW mock handlers** (in-memory during session)
2. **localStorage** (persists across page reloads)

For production, replace with a real backend API.

## Future Enhancements

- Real backend integration (Supabase/Firebase/custom API)
- Push notifications and email updates
- Role-based authentication
- Image moderation and content safety
- Public-facing report moderation
- Community voting on issues
- Workflow automation (SLA reminders, escalations)

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

