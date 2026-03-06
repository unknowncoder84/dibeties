# 🚀 START HERE - GlucoVision Testing Guide

## ⚡ Quick Start (2 Minutes)

### Step 1: Open Website
```
http://localhost:4008
```

### Step 2: Login (Choose One)
```
Healthy Patient:     priya@example.com / demo123
At-Risk Patient:     rajesh@example.com / demo123
High-Risk Patient:   arjun@example.com / demo123
Doctor:              doctor1 / doctor01
```

### Step 3: Upload Report (Patients Only)
1. Click "Upload & Scan" in sidebar
2. Choose file from `demo-files/` folder:
   - `patient2-priya-singh-report.txt` (Normal)
   - `patient1-rajesh-kumar-report.txt` (Prediabetic)
   - `patient3-arjun-mehta-report.txt` (Diabetic)
3. Click "Scan Report"
4. Wait for AI analysis

### Step 4: Explore Dashboard
- View health metrics with interactive charts
- Check AI insights and recommendations
- Explore all features in sidebar

---

## 📋 What You'll See

### Patient Dashboard:
✅ 4 Key Metrics (Glucose, BMI, Heart Rate, Blood Pressure)
✅ 4 Interactive Charts (Glucose, Heart Rate, BMI, Blood Pressure)
✅ Upcoming Appointments
✅ Recent Consultations
✅ AI Health Insights

### Doctor Dashboard:
✅ Patient Overview
✅ Active Patients Count
✅ Pending Consultations
✅ Upcoming Appointments
✅ Patient Risk Distribution

---

## 🎯 Test All 3 Patient Types

### 1. Priya Singh (Healthy) ✅
```
Login:  priya@example.com / demo123
Upload: patient2-priya-singh-report.txt
Result: Green indicators, all normal
```

### 2. Rajesh Kumar (Prediabetic) ⚠️
```
Login:  rajesh@example.com / demo123
Upload: patient1-rajesh-kumar-report.txt
Result: Yellow warnings, lifestyle changes needed
```

### 3. Arjun Mehta (Diabetic) 🚨
```
Login:  arjun@example.com / demo123
Upload: patient3-arjun-mehta-report.txt
Result: Red alerts, urgent intervention needed
```

---

## 🎨 Features to Test

### For Patients:
- **Dashboard** - Health metrics with charts
- **Upload & Scan** - Upload medical reports
- **AI Consultant** - Chat with AI for advice
- **Appointments** - Schedule doctor visits
- **Alerts** - Health notifications
- **Profile** - Personal settings

### For Doctors:
- **Dashboard** - Patient overview
- **Consultations** - Manage all patients
- **Appointments** - Schedule management
- **Alerts** - System notifications
- **Profile** - Account settings

---

## 📁 Demo Files Location

All medical reports are in the `demo-files/` folder:
```
demo-files/
├── patient1-rajesh-kumar-report.txt    (Prediabetic)
├── patient2-priya-singh-report.txt     (Normal)
└── patient3-arjun-mehta-report.txt     (Diabetic)
```

---

## 🐛 Troubleshooting

**Can't login?**
- Use exact credentials: `priya@example.com` / `demo123`
- Clear browser cache

**Upload not working?**
- Must be logged in as Patient (not Doctor)
- Use .txt files from demo-files folder

**No charts showing?**
- Upload a medical report first
- Refresh the page

**Services not running?**
```bash
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend
cd backend
python -m uvicorn main:app --reload --port 8000
```

---

## 📖 More Documentation

- **DEMO_ACCOUNTS.md** - All login credentials
- **HOW_TO_USE_GUIDE.md** - Complete guide (15 min)
- **START_TESTING_NOW.md** - Quick reference
- **demo-files/README.md** - Report details

---

## ✅ System Status

✅ Frontend Running: http://localhost:4008
✅ Backend Running: http://127.0.0.1:8000
✅ Demo Accounts Ready
✅ Medical Reports Ready
✅ Professional Black/Grey Theme
✅ Role-Based Navigation
✅ Zero Data Handling
✅ All Features Working

---

## 🎉 Ready to Test!

**Copy & Paste:**
```
1. Open: http://localhost:4008
2. Login: priya@example.com / demo123
3. Click: Upload & Scan
4. Upload: demo-files/patient2-priya-singh-report.txt
5. Explore: Dashboard and all features!
```

---

**Last Updated:** March 6, 2026
**Status:** ✅ Ready to Use
**Version:** 2.0.0

**Happy Testing! 🚀**
