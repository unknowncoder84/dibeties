# GlucoVision AI - Local Deployment Guide

Complete setup instructions for running the Diabetes Management System locally.

## Prerequisites

Before starting, ensure you have:

- **Node.js 18+** and **pnpm** installed
- **Python 3.10+** installed
- **Git** (optional, for version control)
- **MongoDB** (optional, for sensor data storage)
- **Supabase** account (optional, for authentication)

## Step-by-Step Setup

### 1. Frontend Setup (Next.js)

```bash
# Install dependencies
pnpm install

# Create environment file
cp .env.local.example .env.local

# Edit .env.local with your configuration
# NEXT_PUBLIC_API_URL=http://localhost:8000
# NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
# NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
```

### 2. Backend Setup (FastAPI)

```bash
# Navigate to backend directory
cd backend

# Create Python virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# Linux/Mac:
source venv/bin/activate

# Install Python dependencies
pip install -r requirements.txt

# Create environment file
cp .env.example .env

# Edit .env with your configuration
# SUPABASE_URL=your_supabase_url
# SUPABASE_ANON_KEY=your_supabase_key
# MONGODB_URI=mongodb://localhost:27017/glucovision
# RESEND_API_KEY=your_resend_key
```

### 3. Running the Application

#### Option A: Manual Start (Recommended for Development)

**Terminal 1 - Backend:**
```bash
cd backend
venv\Scripts\activate  # Windows
# or: source venv/bin/activate  # Linux/Mac
uvicorn main:app --reload
```

**Terminal 2 - Frontend:**
```bash
pnpm dev
```

#### Option B: Automated Start Script

**Windows:**
```bash
start-dev.bat
```

**Linux/Mac:**
```bash
chmod +x start-dev.sh
./start-dev.sh
```

### 4. Access the Application

Once both services are running:

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs
- **Alternative API Docs**: http://localhost:8000/redoc

## Testing the Setup

### 1. Test Backend Health

```bash
curl http://localhost:8000/health
```

Expected response:
```json
{"status": "healthy", "version": "1.0.0"}
```

### 2. Test AI Prediction

```bash
curl -X POST "http://localhost:8000/api/ai/predict" \
  -H "Content-Type: application/json" \
  -d '{"glucose": 128.5, "bmi": 25.3, "heart_rate": 78}'
```

### 3. Test Sensor Data

```bash
curl "http://localhost:8000/api/sensors/readings/test-user?days=7"
```

### 4. Test PDF Scanner

Create a sample PDF with text like:
```
Patient Report
Glucose: 125 mg/dL
BMI: 25.3
Heart Rate: 78 bpm
Blood Pressure: 128/82
```

Then upload:
```bash
curl -X POST "http://localhost:8000/api/pdf/scan" \
  -F "file=@sample_report.pdf"
```

## Features Overview

### 1. Smart Document Scanning
- Upload medical PDFs
- Automatic data extraction using PyMuPDF
- Extracts: glucose, BMI, heart rate, blood pressure

### 2. AI Predictive Analysis
- Risk classification: Normal, Prediabetic, Diabetic
- Confidence scores
- Personalized recommendations
- Model: GlucoVision-LSTM-v3

### 3. Interactive Dashboard
- 7-day glucose trend visualization
- Real-time health metrics
- Color-coded status indicators:
  - 🟢 Green: Normal (< 100 mg/dL)
  - 🟡 Amber: Warning (100-125 mg/dL)
  - 🔴 Red: Danger (> 126 mg/dL)

### 4. Real-time Alerts
- Glucose spike notifications
- Hypoglycemia warnings
- Pattern detection

## Mock Data

The system includes mock data for testing without external services:

- **7-day glucose trends** (mockData.json)
- **Sensor readings** (generated on-demand)
- **Health metrics** (calculated from inputs)

## Troubleshooting

### Backend won't start

1. Check Python version: `python --version` (should be 3.10+)
2. Verify virtual environment is activated
3. Reinstall dependencies: `pip install -r requirements.txt`
4. Check port 8000 is not in use

### Frontend won't start

1. Check Node version: `node --version` (should be 18+)
2. Clear cache: `pnpm store prune`
3. Reinstall: `rm -rf node_modules && pnpm install`
4. Check port 3000 is not in use

### CORS errors

1. Verify backend CORS settings in `main.py`
2. Ensure frontend is running on `localhost:3000`
3. Check `.env.local` has correct `NEXT_PUBLIC_API_URL`

### PDF scanning not working

1. Verify PyMuPDF is installed: `pip show pymupdf`
2. Check PDF contains readable text (not scanned images)
3. Test with sample PDF provided

## Optional Services

### MongoDB Setup (for sensor data)

```bash
# Install MongoDB Community Edition
# Windows: Download from mongodb.com
# Mac: brew install mongodb-community
# Linux: apt-get install mongodb

# Start MongoDB
mongod --dbpath ./data/db

# Update .env
MONGODB_URI=mongodb://localhost:27017/glucovision
```

### Supabase Setup (for authentication)

1. Create account at supabase.com
2. Create new project
3. Copy URL and anon key
4. Update `.env` and `.env.local`

## Next Steps

1. Explore the dashboard at `/dashboard`
2. Upload a medical report at `/dashboard/upload`
3. View AI predictions and trends
4. Test the chat consultant at `/dashboard/chat`
5. Configure alerts at `/dashboard/alerts`

## Production Deployment

See `README.md` for deployment instructions to:
- Vercel (Frontend)
- Railway/Render (Backend)
- Supabase (Database)
- MongoDB Atlas (Sensor data)

## Support

For issues:
- Check API docs: http://localhost:8000/docs
- Review logs in terminal
- Create GitHub issue
- Email: support@glucovision.ai
