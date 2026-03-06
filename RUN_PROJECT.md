# 🚀 Quick Start Guide

## Running the Diabetes Management System

Your project is now configured to run on **PORT 4008** with all components working together.

### Prerequisites

1. **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
2. **pnpm** - Install with: `npm install -g pnpm`
3. **Python** (v3.8 or higher) - [Download](https://www.python.org/)

### 🎯 Quick Start (Recommended)

#### On Windows:
```bash
start-dev.bat
```

#### On Mac/Linux:
```bash
chmod +x start-dev.sh
./start-dev.sh
```

This will:
- Install all dependencies automatically
- Start the backend API on port 8000
- Start the frontend on port 4008
- Open your browser automatically

### 📍 Access Points

- **Frontend Application**: http://localhost:4008
- **Backend API**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs

### 🔧 Manual Setup (Alternative)

If you prefer to run services separately:

#### 1. Install Frontend Dependencies
```bash
pnpm install
```

#### 2. Setup Backend
```bash
cd backend
python -m venv venv

# On Windows:
venv\Scripts\activate

# On Mac/Linux:
source venv/bin/activate

pip install -r requirements.txt
cd ..
```

#### 3. Start Backend (Terminal 1)
```bash
cd backend
# Activate venv first (see step 2)
uvicorn main:app --reload --port 8000
```

#### 4. Start Frontend (Terminal 2)
```bash
pnpm dev
```

### ✅ Verify Everything Works

1. Open http://localhost:4008 - You should see the landing page
2. Open http://localhost:8000/docs - You should see the API documentation
3. Test the API health: http://localhost:8000/health

### 🧪 Test API Endpoints

```bash
# Test PDF parser
curl http://localhost:8000/api/pdf/test

# Test AI model
curl http://localhost:8000/api/ai/test

# Test sensor data
curl http://localhost:8000/api/sensors/test
```

### 📦 Project Structure

```
├── app/                    # Next.js frontend pages
│   ├── auth/              # Login/Signup pages
│   └── dashboard/         # Dashboard pages
├── backend/               # FastAPI backend
│   ├── routes/           # API endpoints
│   └── main.py           # Backend entry point
├── components/           # React components
└── lib/                  # Utilities and configs
```

### 🔥 Features Available

1. **Authentication** - Login/Signup pages
2. **Dashboard** - Main dashboard with health metrics
3. **PDF Upload** - Upload and parse medical reports
4. **AI Predictions** - Diabetes risk assessment
5. **Sensor Data** - Real-time glucose monitoring
6. **Appointments** - Schedule consultations
7. **Chat** - Healthcare provider communication
8. **Alerts** - Health notifications

### 🐛 Troubleshooting

**Port already in use:**
```bash
# On Windows:
netstat -ano | findstr :4008
taskkill /PID <PID> /F

# On Mac/Linux:
lsof -ti:4008 | xargs kill -9
```

**Backend not starting:**
- Make sure Python virtual environment is activated
- Check if all dependencies are installed: `pip list`
- Verify Python version: `python --version`

**Frontend not starting:**
- Clear Next.js cache: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && pnpm install`

### 📝 Environment Variables

The `.env.local` file is already configured with:
- Backend API URL: http://localhost:8000
- Demo Supabase credentials (optional)

### 🎨 Development Tips

- Frontend hot-reloads automatically on file changes
- Backend auto-reloads with `--reload` flag
- Use http://localhost:8000/docs for interactive API testing
- Check browser console for frontend errors
- Check terminal for backend errors

### 🚀 Next Steps

1. Customize the dashboard pages in `app/dashboard/`
2. Add more API endpoints in `backend/routes/`
3. Configure real Supabase credentials for authentication
4. Deploy to production when ready

---

**Need Help?** Check the other documentation files:
- `SETUP.md` - Detailed setup instructions
- `PROJECT_STRUCTURE.md` - Code organization
- `DEPLOYMENT_CHECKLIST.md` - Production deployment guide
