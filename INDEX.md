# 📚 GlucoVision AI - Documentation Index

Complete guide to all documentation and resources.

## 🚀 Getting Started (Start Here!)

1. **[GETTING_STARTED.md](GETTING_STARTED.md)** ⭐ **START HERE**
   - 5-minute quick start
   - What to try first
   - Learning path
   - Troubleshooting basics

2. **[QUICKSTART.md](QUICKSTART.md)**
   - Fast setup commands
   - Access points
   - Quick tests
   - Common issues

3. **[SETUP.md](SETUP.md)**
   - Detailed setup instructions
   - Step-by-step guide
   - Testing procedures
   - Optional services

## 📖 Core Documentation

4. **[README.md](README.md)**
   - Project overview
   - Architecture
   - Features
   - API endpoints
   - Development guide

5. **[PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)**
   - Complete file structure
   - Architecture overview
   - Data flow diagrams
   - Code organization
   - Dependencies

6. **[backend/README.md](backend/README.md)**
   - Backend-specific docs
   - API endpoints
   - Setup instructions
   - Project structure

## 🚢 Deployment

7. **[DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)**
   - Pre-deployment checklist
   - Frontend deployment (Vercel)
   - Backend deployment (Railway/Render)
   - Database setup
   - Security checklist
   - Post-deployment verification

## 📁 Project Files

### Configuration Files
- `.env.local` - Frontend environment variables (local)
- `.env.local.example` - Frontend environment template
- `backend/.env` - Backend environment variables (local)
- `backend/.env.example` - Backend environment template
- `package.json` - Node.js dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `next.config.mjs` - Next.js configuration
- `components.json` - shadcn/ui configuration

### Startup Scripts
- `start-dev.bat` - Windows startup script
- `start-dev.sh` - Linux/Mac startup script

### Backend Files
- `backend/main.py` - FastAPI application entry point
- `backend/requirements.txt` - Python dependencies
- `backend/requirements-dev.txt` - Development dependencies
- `backend/test_api.py` - API test suite
- `backend/mockData.json` - Mock data for testing
- `backend/sample_report.txt` - Sample medical report

### Backend Routes
- `backend/routes/ai_model.py` - AI prediction endpoints
- `backend/routes/pdf_parser.py` - PDF scanning endpoints
- `backend/routes/sensor_data.py` - Sensor data endpoints

## 🎯 Quick Reference

### Start Development
```bash
# Windows
start-dev.bat

# Linux/Mac
./start-dev.sh

# Manual (2 terminals)
# Terminal 1: cd backend && venv\Scripts\activate && uvicorn main:app --reload
# Terminal 2: pnpm dev
```

### Access Points
- Frontend: http://localhost:3000
- Backend: http://localhost:8000
- API Docs: http://localhost:8000/docs

### Test Commands
```bash
# Health check
curl http://localhost:8000/health

# AI prediction
curl -X POST http://localhost:8000/api/ai/predict \
  -H "Content-Type: application/json" \
  -d '{"glucose":128.5,"bmi":25.3}'

# Full test suite
cd backend && python test_api.py
```

## 🏗️ Architecture

### Frontend Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.2 + Glassmorphism
- **UI**: shadcn/ui (57 components)
- **Charts**: Recharts
- **Port**: 3000

### Backend Stack
- **Framework**: FastAPI 0.115
- **Language**: Python 3.10+
- **Server**: Uvicorn
- **PDF**: PyMuPDF
- **Database**: Motor (MongoDB)
- **Port**: 8000

### Database
- **PostgreSQL**: Supabase (user data, auth)
- **MongoDB**: Sensor data, time-series
- **Storage**: Supabase Storage (documents)

## 📊 Features

### 1. Smart Document Scanning
- Upload medical PDFs
- Extract glucose, BMI, heart rate, blood pressure
- PyMuPDF with regex pattern matching
- Endpoint: `POST /api/pdf/scan`

### 2. AI Predictive Analysis
- Risk classification: Normal/Prediabetic/Diabetic
- Confidence scores
- Personalized recommendations
- Endpoint: `POST /api/ai/predict`

### 3. Interactive Dashboards
- 7-day glucose trends
- Real-time health metrics
- Color-coded status indicators
- Recharts visualization

### 4. AI Health Consultant
- 24/7 chatbot
- Diet recommendations
- Lifestyle advice
- Page: `/dashboard/chat`

### 5. Real-time Alerts
- Glucose spike notifications
- Hypoglycemia warnings
- Pattern detection
- Page: `/dashboard/alerts`

## 🎨 Design System

### Colors
- **Primary**: #00d4ff (Cyan)
- **Accent**: #00e676 (Green)
- **Warning**: #ffb300 (Amber)
- **Danger**: #ff4c6a (Red)
- **Background**: #040d1a (Deep blue-black)

### Glassmorphism
- Background: `rgba(10, 25, 47, 0.55)`
- Blur: `20px`
- Border: `rgba(255, 255, 255, 0.12)`
- Classes: `.glass`, `.glass-card`

### Status Indicators
- 🟢 Green: Normal (< 100 mg/dL)
- 🟡 Amber: Warning (100-125 mg/dL)
- 🔴 Red: Danger (> 126 mg/dL)

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

## 🧪 Testing

### Backend Tests
```bash
cd backend
python test_api.py
```

Tests:
- ✅ Health check
- ✅ AI prediction
- ✅ Sensor data
- ✅ Model info

### Manual Tests
```bash
# Health
curl http://localhost:8000/health

# AI prediction
curl -X POST http://localhost:8000/api/ai/predict \
  -H "Content-Type: application/json" \
  -d '{"glucose":128.5,"bmi":25.3,"heart_rate":78}'

# Sensor data
curl http://localhost:8000/api/sensors/readings/test-user?days=7

# Model info
curl http://localhost:8000/api/ai/model-info
```

## 🐛 Troubleshooting

### Common Issues

**Port in use:**
```bash
npx kill-port 3000  # Frontend
npx kill-port 8000  # Backend
```

**Backend won't start:**
1. Check Python version (3.10+)
2. Activate virtual environment
3. Reinstall dependencies

**Frontend won't start:**
1. Check Node version (18+)
2. Clear cache: `rm -rf .next node_modules`
3. Reinstall: `pnpm install`

**CORS errors:**
1. Verify backend on port 8000
2. Check `.env.local` API URL
3. Restart both servers

## 📦 Dependencies

### Frontend (package.json)
- next, react, react-dom
- @radix-ui/* (UI primitives)
- recharts (charts)
- tailwindcss (styling)
- lucide-react (icons)

### Backend (requirements.txt)
- fastapi (web framework)
- uvicorn (server)
- pymupdf (PDF processing)
- motor (MongoDB)
- pydantic (validation)

## 🚀 Deployment

### Frontend (Vercel)
1. Push to GitHub
2. Connect to Vercel
3. Set environment variables
4. Deploy

### Backend (Railway/Render)
1. Create project
2. Connect GitHub
3. Set root to `backend/`
4. Configure environment
5. Deploy

See [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md) for details.

## 📞 Support

- **Technical**: support@glucovision.ai
- **Security**: security@glucovision.ai
- **General**: info@glucovision.ai

## 🎓 Learning Resources

- [Next.js Docs](https://nextjs.org/docs)
- [FastAPI Docs](https://fastapi.tiangolo.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)
- [PyMuPDF](https://pymupdf.readthedocs.io)

## 📝 Documentation Map

```
Documentation/
├── INDEX.md (this file)          # Documentation index
├── GETTING_STARTED.md            # Start here!
├── QUICKSTART.md                 # Quick reference
├── SETUP.md                      # Detailed setup
├── README.md                     # Main docs
├── PROJECT_STRUCTURE.md          # Architecture
├── DEPLOYMENT_CHECKLIST.md       # Deployment
└── backend/
    └── README.md                 # Backend docs
```

## ✅ Checklist for New Developers

- [ ] Read GETTING_STARTED.md
- [ ] Install prerequisites (Node, Python, pnpm)
- [ ] Clone/download project
- [ ] Run `pnpm install`
- [ ] Setup backend virtual environment
- [ ] Configure .env files
- [ ] Start both servers
- [ ] Test API endpoints
- [ ] Explore frontend
- [ ] Read PROJECT_STRUCTURE.md
- [ ] Review API documentation
- [ ] Try making changes

## 🎉 You're All Set!

You now have access to complete documentation for GlucoVision AI. Start with [GETTING_STARTED.md](GETTING_STARTED.md) and work your way through!

---

**Version:** 1.0.0  
**Last Updated:** March 1, 2026  
**Maintained by:** GlucoVision AI Team
