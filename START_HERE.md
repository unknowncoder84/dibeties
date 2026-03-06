# 🚀 START HERE - GlucoVision AI

## ⚡ 3-Step Quick Start

### Step 1: Install Dependencies (5 minutes)

```bash
# Frontend
pnpm install

# Backend
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
cd ..
```

### Step 2: Configure Environment (1 minute)

```bash
cp .env.local.example .env.local
cp backend/.env.example backend/.env
```

### Step 3: Start Development (1 command)

**Windows:**
```bash
start-dev.bat
```

**Linux/Mac:**
```bash
chmod +x start-dev.sh
./start-dev.sh
```

## 🎯 Access Your Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs

## ✅ Verify Everything Works

```bash
# Test backend
curl http://localhost:8000/health

# Test AI prediction
curl -X POST http://localhost:8000/api/ai/predict \
  -H "Content-Type: application/json" \
  -d '{"glucose":128.5,"bmi":25.3}'
```

## 📚 What to Read Next

1. **[GETTING_STARTED.md](GETTING_STARTED.md)** - Complete getting started guide
2. **[INDEX.md](INDEX.md)** - Documentation index
3. **[README.md](README.md)** - Full documentation

## 🎉 You're Ready!

Your Diabetes Management System is now running locally with:

✅ Professional glassmorphism UI  
✅ AI-powered predictions  
✅ PDF medical report scanning  
✅ Interactive dashboards  
✅ Real-time sensor data  

**Start exploring at http://localhost:3000**

---

Need help? Check [GETTING_STARTED.md](GETTING_STARTED.md) or [INDEX.md](INDEX.md)
