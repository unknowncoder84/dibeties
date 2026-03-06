# 🚀 Getting Started with GlucoVision AI

Welcome! This guide will get you up and running with the Diabetes Management System in minutes.

## 📋 What You're Building

GlucoVision AI is a complete diabetes management platform featuring:

- 🎨 **Professional Glassmorphism UI** - Medical-blue gradient with blur effects
- 📄 **Smart PDF Scanning** - Extract health data from medical reports
- 🧠 **AI Risk Prediction** - LSTM/CNN models for diabetes classification
- 📊 **Interactive Dashboards** - 7-day glucose trends with Recharts
- 💬 **AI Health Consultant** - 24/7 chatbot for health advice
- 🔔 **Real-time Alerts** - Glucose spike and pattern notifications

## ⚡ Quick Start (5 Minutes)

### 1. Install Dependencies

```bash
# Frontend
pnpm install

# Backend
cd backend
python -m venv venv
venv\Scripts\activate  # Windows
pip install -r requirements.txt
cd ..
```

### 2. Configure Environment

```bash
# Frontend
cp .env.local.example .env.local

# Backend
cp backend/.env.example backend/.env
```

### 3. Start Development Servers

**Option A - Automated (Windows):**
```bash
start-dev.bat
```

**Option B - Manual (2 terminals):**

Terminal 1:
```bash
cd backend
venv\Scripts\activate
uvicorn main:app --reload
```

Terminal 2:
```bash
pnpm dev
```

### 4. Open Your Browser

- Frontend: http://localhost:3000
- Backend API: http://localhost:8000/docs

## 🎯 What to Try First

### 1. Explore the Landing Page
Visit http://localhost:3000 to see:
- Animated hero section
- Feature showcase
- Glassmorphism design
- Smooth scroll animations

### 2. Test the Backend API
Visit http://localhost:8000/docs to see:
- Interactive API documentation
- All available endpoints
- Request/response schemas
- Try out the endpoints

### 3. Test AI Prediction
```bash
curl -X POST http://localhost:8000/api/ai/predict \
  -H "Content-Type: application/json" \
  -d '{"glucose":128.5,"bmi":25.3,"heart_rate":78}'
```

Expected response:
```json
{
  "risk_level": "Prediabetic",
  "confidence": 0.934,
  "glucose_avg": 128.5,
  "bmi": 25.3,
  "recommendation": "Lifestyle modification recommended...",
  "model_version": "GlucoVision-LSTM-v3"
}
```

### 4. Test Sensor Data
```bash
curl http://localhost:8000/api/sensors/readings/test-user?days=7
```

This returns mock 7-day glucose readings with timestamps.

### 5. Navigate the Dashboard
Visit http://localhost:3000/dashboard to see:
- Health metrics overview
- Glucose trend charts
- Status indicators (Green/Amber/Red)
- Quick action buttons

## 📁 Project Structure

```
glucovision-ai/
├── app/                    # Next.js pages
│   ├── auth/              # Login/Signup
│   ├── dashboard/         # Dashboard pages
│   └── page.tsx           # Landing page
├── backend/               # FastAPI backend
│   ├── routes/            # API endpoints
│   ├── models/            # ML models
│   └── main.py            # FastAPI app
├── components/            # React components
│   └── ui/               # shadcn/ui components
└── public/               # Static assets
```

## 🎨 UI Features

### Glassmorphism Design
The entire UI uses a professional glassmorphism effect:
- Semi-transparent backgrounds
- Backdrop blur (20px)
- Subtle borders
- Medical-blue gradient (#040d1a base)

### Color System
- **Primary**: #00d4ff (Cyan) - Main actions
- **Accent**: #00e676 (Green) - Success states
- **Warning**: #ffb300 (Amber) - Warnings
- **Danger**: #ff4c6a (Red) - Critical alerts

### Status Indicators
- 🟢 **Green**: Normal (< 100 mg/dL)
- 🟡 **Amber**: Warning (100-125 mg/dL)
- 🔴 **Red**: Danger (> 126 mg/dL)

## 🔧 Backend Features

### PDF Scanning
Upload medical PDFs to extract:
- Glucose levels
- BMI
- Heart rate
- Blood pressure

Uses PyMuPDF with regex pattern matching.

### AI Prediction
Risk classification based on:
- Glucose levels
- BMI
- Heart rate
- Age
- Blood pressure

Returns:
- Risk level (Normal/Prediabetic/Diabetic)
- Confidence score
- Personalized recommendations

### Sensor Data
Mock data generation for:
- 7-day glucose trends
- Heart rate monitoring
- Temperature tracking

Ready for MongoDB integration.

## 📚 Documentation

- **README.md** - Main documentation
- **SETUP.md** - Detailed setup guide
- **QUICKSTART.md** - Quick reference
- **PROJECT_STRUCTURE.md** - Architecture overview
- **DEPLOYMENT_CHECKLIST.md** - Production deployment
- **backend/README.md** - Backend documentation

## 🧪 Testing

### Test All Endpoints
```bash
cd backend
python test_api.py
```

### Test Individual Endpoints
```bash
# Health check
curl http://localhost:8000/health

# AI model info
curl http://localhost:8000/api/ai/model-info

# Sensor data
curl http://localhost:8000/api/sensors/test

# PDF parser
curl http://localhost:8000/api/pdf/test
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill port 3000 (frontend)
npx kill-port 3000

# Kill port 8000 (backend)
npx kill-port 8000
```

### Backend Won't Start
1. Check Python version: `python --version` (need 3.10+)
2. Activate virtual environment
3. Reinstall dependencies: `pip install -r requirements.txt`

### Frontend Won't Start
1. Check Node version: `node --version` (need 18+)
2. Clear cache: `rm -rf .next node_modules`
3. Reinstall: `pnpm install`

### CORS Errors
1. Verify backend is running on port 8000
2. Check `.env.local` has `NEXT_PUBLIC_API_URL=http://localhost:8000`
3. Restart both servers

## 🎓 Learning Path

### Day 1: Setup & Exploration
- ✅ Get everything running
- ✅ Explore the landing page
- ✅ Test API endpoints
- ✅ Review documentation

### Day 2: Frontend Development
- Customize landing page
- Modify dashboard layout
- Add new components
- Adjust styling

### Day 3: Backend Development
- Enhance AI model
- Add new endpoints
- Integrate MongoDB
- Test PDF scanning

### Day 4: Integration
- Connect frontend to backend
- Add authentication (Supabase)
- Implement real-time updates
- Add email notifications

### Day 5: Deployment
- Deploy frontend to Vercel
- Deploy backend to Railway
- Configure databases
- Test production

## 🚀 Next Steps

1. **Customize the UI**
   - Modify colors in `app/globals.css`
   - Update landing page content
   - Add your logo

2. **Enhance the AI Model**
   - Train your own LSTM/CNN model
   - Place model files in `backend/models/`
   - Update `backend/routes/ai_model.py`

3. **Add Authentication**
   - Set up Supabase project
   - Configure auth in frontend
   - Protect dashboard routes

4. **Integrate Databases**
   - Set up MongoDB Atlas
   - Configure Supabase tables
   - Update connection strings

5. **Deploy to Production**
   - Follow `DEPLOYMENT_CHECKLIST.md`
   - Configure environment variables
   - Test thoroughly

## 💡 Tips & Best Practices

1. **Keep Backend Running**: The frontend needs the backend API
2. **Check Logs**: Terminal output shows errors and requests
3. **Use API Docs**: http://localhost:8000/docs is your friend
4. **Test Often**: Run `python backend/test_api.py` regularly
5. **Read Documentation**: Each major directory has a README

## 🆘 Getting Help

- **API Documentation**: http://localhost:8000/docs
- **Check Logs**: Review terminal output
- **Review Code**: All code is well-commented
- **Email Support**: support@glucovision.ai

## 🎉 You're Ready!

You now have a fully functional diabetes management system running locally. Start exploring, customizing, and building!

**Happy coding! 🚀**

---

**Version:** 1.0.0  
**Last Updated:** March 1, 2026
