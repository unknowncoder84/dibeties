# GlucoVision AI - Quick Start Guide

Get up and running in 5 minutes!

## 🚀 Fast Setup

### 1. Install Frontend Dependencies
```bash
pnpm install
```

### 2. Setup Backend
```bash
cd backend
python -m venv venv
venv\Scripts\activate  # Windows
pip install -r requirements.txt
cd ..
```

### 3. Configure Environment
```bash
# Frontend
cp .env.local.example .env.local

# Backend
cp backend/.env.example backend/.env
```

### 4. Start Development Servers

**Windows:**
```bash
start-dev.bat
```

**Linux/Mac:**
```bash
chmod +x start-dev.sh
./start-dev.sh
```

**Or manually in 2 terminals:**

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

## 🎯 Access Points

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **API Docs**: http://localhost:8000/docs

## ✅ Quick Test

Test the backend is working:
```bash
curl http://localhost:8000/health
```

Test AI prediction:
```bash
curl -X POST http://localhost:8000/api/ai/predict \
  -H "Content-Type: application/json" \
  -d "{\"glucose\":128.5,\"bmi\":25.3}"
```

## 📱 Features to Try

1. **Landing Page** - http://localhost:3000
2. **Sign Up** - http://localhost:3000/auth/signup
3. **Dashboard** - http://localhost:3000/dashboard
4. **Upload Reports** - http://localhost:3000/dashboard/upload
5. **View Trends** - Check glucose charts
6. **AI Chat** - http://localhost:3000/dashboard/chat

## 🎨 UI Features

- **Glassmorphism Design** - Professional medical-blue gradient
- **Real-time Charts** - 7-day glucose trends with Recharts
- **Status Indicators** - Green/Amber/Red health alerts
- **Responsive Layout** - Works on all devices

## 🔧 Troubleshooting

**Port already in use?**
```bash
# Kill process on port 3000 (frontend)
npx kill-port 3000

# Kill process on port 8000 (backend)
npx kill-port 8000
```

**Python virtual environment issues?**
```bash
cd backend
rm -rf venv
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

**Node modules issues?**
```bash
rm -rf node_modules
pnpm install
```

## 📚 Next Steps

- Read full documentation: `README.md`
- Detailed setup guide: `SETUP.md`
- Backend API docs: `backend/README.md`

## 🆘 Need Help?

- Check API documentation at http://localhost:8000/docs
- Review terminal logs for errors
- Ensure all prerequisites are installed
- Email: support@glucovision.ai
