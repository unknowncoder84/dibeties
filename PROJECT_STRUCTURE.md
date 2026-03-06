# GlucoVision AI - Project Structure

Complete overview of the project architecture and file organization.

## 📁 Directory Structure

```
glucovision-ai/
├── app/                          # Next.js App Router
│   ├── auth/                     # Authentication pages
│   │   ├── login/
│   │   │   └── page.tsx         # Login page
│   │   └── signup/
│   │       └── page.tsx         # Sign up page
│   ├── dashboard/               # Dashboard pages
│   │   ├── alerts/
│   │   │   └── page.tsx         # Alerts management
│   │   ├── appointments/
│   │   │   └── page.tsx         # Appointments
│   │   ├── chat/
│   │   │   └── page.tsx         # AI health consultant
│   │   ├── consultations/
│   │   │   └── page.tsx         # Consultations
│   │   ├── profile/
│   │   │   └── page.tsx         # User profile
│   │   ├── upload/
│   │   │   └── page.tsx         # Document upload
│   │   ├── layout.tsx           # Dashboard layout
│   │   └── page.tsx             # Dashboard home
│   ├── globals.css              # Global styles + glassmorphism
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Landing page
│
├── backend/                      # FastAPI Backend
│   ├── routes/                   # API endpoints
│   │   ├── __init__.py
│   │   ├── ai_model.py          # AI prediction endpoints
│   │   ├── pdf_parser.py        # PDF scanning endpoints
│   │   └── sensor_data.py       # Sensor data endpoints
│   ├── models/                   # ML models directory
│   │   └── .gitkeep
│   ├── main.py                   # FastAPI app entry
│   ├── requirements.txt          # Python dependencies
│   ├── requirements-dev.txt      # Dev dependencies
│   ├── test_api.py              # API test suite
│   ├── mockData.json            # Mock data for testing
│   ├── sample_report.txt        # Sample medical report
│   ├── .env                     # Environment variables (local)
│   ├── .env.example             # Environment template
│   └── README.md                # Backend documentation
│
├── components/                   # React components
│   ├── ui/                      # shadcn/ui components (57 files)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── dialog.tsx
│   │   └── ... (53 more)
│   └── theme-provider.tsx       # Theme context
│
├── hooks/                        # Custom React hooks
│   ├── use-mobile.ts
│   └── use-toast.ts
│
├── lib/                          # Utilities
│   ├── app-context.tsx          # App context provider
│   └── utils.ts                 # Utility functions
│
├── public/                       # Static assets
│   ├── apple-icon.png
│   ├── icon-dark-32x32.png
│   ├── icon-light-32x32.png
│   ├── icon.svg
│   ├── placeholder-logo.png
│   ├── placeholder-logo.svg
│   ├── placeholder-user.jpg
│   ├── placeholder.jpg
│   └── placeholder.svg
│
├── styles/                       # Additional styles
│   └── globals.css
│
├── .env.local                    # Frontend environment (local)
├── .env.local.example           # Frontend env template
├── .gitignore                   # Git ignore rules
├── components.json              # shadcn/ui config
├── next.config.mjs              # Next.js configuration
├── package.json                 # Node dependencies
├── pnpm-lock.yaml              # pnpm lock file
├── postcss.config.mjs          # PostCSS config
├── tsconfig.json               # TypeScript config
├── start-dev.sh                # Linux/Mac startup script
├── start-dev.bat               # Windows startup script
├── README.md                   # Main documentation
├── SETUP.md                    # Setup guide
├── QUICKSTART.md               # Quick start guide
├── DEPLOYMENT_CHECKLIST.md     # Deployment checklist
└── PROJECT_STRUCTURE.md        # This file
```

## 🏗️ Architecture Overview

### Frontend (Next.js 16)
- **Framework**: Next.js with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.2 with custom glassmorphism
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Charts**: Recharts for data visualization
- **State Management**: React Context + Hooks
- **Theme**: Dark mode with medical-blue gradient

### Backend (FastAPI)
- **Framework**: FastAPI 0.115
- **Language**: Python 3.10+
- **Server**: Uvicorn with auto-reload
- **PDF Processing**: PyMuPDF (fitz)
- **AI Models**: LSTM/CNN (placeholder for actual models)
- **Database**: Motor (MongoDB async driver)
- **Validation**: Pydantic v2

### Database Architecture
- **PostgreSQL (Supabase)**: User data, authentication
- **MongoDB**: Real-time sensor data, time-series
- **File Storage**: Supabase Storage (medical documents)

### External Services
- **Authentication**: Supabase Auth
- **Email**: Resend API
- **Deployment**: Vercel (frontend), Railway/Render (backend)

## 🔄 Data Flow

```
User Upload PDF
    ↓
Frontend (Next.js)
    ↓
POST /api/pdf/scan
    ↓
Backend (FastAPI)
    ↓
PyMuPDF Parser
    ↓
Extract Health Data
    ↓
POST /api/ai/predict
    ↓
AI Model (LSTM/CNN)
    ↓
Risk Assessment
    ↓
Save to Database
    ↓
Return to Frontend
    ↓
Display Dashboard
```

## 📊 Key Features by File

### Landing Page (`app/page.tsx`)
- Hero section with animations
- Feature showcase
- Contact form
- Glassmorphism design
- Scroll animations

### Dashboard (`app/dashboard/page.tsx`)
- Health metrics overview
- 7-day glucose trends
- Status indicators (Green/Amber/Red)
- Quick actions

### Upload (`app/dashboard/upload/page.tsx`)
- PDF drag-and-drop
- File validation
- Progress tracking
- Data extraction preview

### AI Prediction (`backend/routes/ai_model.py`)
- Health data input validation
- Risk scoring algorithm
- Confidence calculation
- Recommendation generation

### PDF Parser (`backend/routes/pdf_parser.py`)
- PDF text extraction
- Regex pattern matching
- Health metric extraction
- Error handling

### Sensor Data (`backend/routes/sensor_data.py`)
- Mock data generation
- Time-series data
- MongoDB integration (ready)
- Real-time updates

## 🎨 Styling System

### CSS Variables (app/globals.css)
```css
--background: #040d1a          /* Deep blue-black */
--primary: #00d4ff             /* Cyan */
--accent: #00e676              /* Green */
--glass-bg: rgba(10,25,47,0.55) /* Glassmorphism */
--glass-blur: 20px             /* Backdrop blur */
```

### Utility Classes
- `.glass` - Glassmorphism effect
- `.glass-card` - Card with glass effect
- `.text-gradient` - Cyan to green gradient
- `.glow-cyan` - Cyan glow effect
- `.animate-float` - Floating animation

## 🔌 API Endpoints

### Health & Info
- `GET /` - Root endpoint
- `GET /health` - Health check

### PDF Processing
- `POST /api/pdf/scan` - Scan medical PDF
- `GET /api/pdf/test` - Test endpoint

### AI Predictions
- `POST /api/ai/predict` - Predict diabetes risk
- `GET /api/ai/model-info` - Model information
- `GET /api/ai/test` - Test endpoint

### Sensor Data
- `GET /api/sensors/readings/{user_id}` - Get readings
- `POST /api/sensors/readings/{user_id}` - Add reading
- `GET /api/sensors/test` - Test endpoint

## 🔐 Environment Variables

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
```

### Backend (.env)
```env
SUPABASE_URL=your_url
SUPABASE_ANON_KEY=your_key
MONGODB_URI=mongodb://localhost:27017/glucovision
RESEND_API_KEY=your_key
ENVIRONMENT=development
DEBUG=True
```

## 📦 Dependencies

### Frontend (package.json)
- **Core**: next, react, react-dom
- **UI**: @radix-ui/*, lucide-react
- **Forms**: react-hook-form, zod
- **Charts**: recharts
- **Styling**: tailwindcss, clsx
- **Utils**: date-fns, sonner

### Backend (requirements.txt)
- **Core**: fastapi, uvicorn
- **PDF**: pymupdf
- **Database**: motor (MongoDB)
- **Validation**: pydantic
- **Utils**: python-dotenv, numpy

## 🚀 Development Commands

```bash
# Frontend
pnpm dev              # Start dev server
pnpm build            # Build for production
pnpm start            # Start production server
pnpm lint             # Run linter

# Backend
uvicorn main:app --reload    # Start dev server
python test_api.py           # Run API tests
pip install -r requirements.txt  # Install deps

# Both
./start-dev.sh        # Start both (Linux/Mac)
start-dev.bat         # Start both (Windows)
```

## 📝 File Naming Conventions

- **Pages**: `page.tsx` (Next.js App Router)
- **Layouts**: `layout.tsx`
- **Components**: `kebab-case.tsx`
- **Utilities**: `kebab-case.ts`
- **Python**: `snake_case.py`
- **Config**: `lowercase.config.ext`

## 🔍 Code Organization Principles

1. **Separation of Concerns**: Frontend/Backend clearly separated
2. **Feature-based**: Routes organized by feature
3. **Reusability**: Shared components in `/components/ui`
4. **Type Safety**: TypeScript + Pydantic validation
5. **Environment Config**: All secrets in .env files
6. **Documentation**: README in each major directory

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [FastAPI Documentation](https://fastapi.tiangolo.com)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)
- [PyMuPDF Documentation](https://pymupdf.readthedocs.io)

---

**Last Updated:** March 1, 2026
**Version:** 1.0.0
