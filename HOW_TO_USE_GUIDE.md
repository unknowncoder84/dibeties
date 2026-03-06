# 🚀 Complete Guide: How to Use GlucoVision

## 📋 Table of Contents
1. [Quick Start](#quick-start)
2. [Demo Accounts](#demo-accounts)
3. [Step-by-Step Testing](#step-by-step-testing)
4. [Features Guide](#features-guide)
5. [Troubleshooting](#troubleshooting)

---

## 🎯 Quick Start

### Step 1: Check Services are Running
Both services should already be running:
- **Frontend**: http://localhost:4008
- **Backend**: http://127.0.0.1:8000

If not running, open terminal and run:
```bash
npm run dev
```

In another terminal:
```bash
cd backend
python -m uvicorn main:app --reload --port 8000
```

---

## 👥 Demo Accounts

### 🏥 Patient Accounts (3 Different Health Profiles)

#### 1. **Priya Singh** - Healthy Patient ✅
```
Email:    priya@example.com
Password: demo123
Status:   Normal/Healthy
Report:   demo-files/patient2-priya-singh-report.txt
```
**What to expect:**
- All green indicators
- Normal glucose levels (92 mg/dL)
- Healthy BMI (22.1)
- No alerts or warnings

---

#### 2. **Rajesh Kumar** - Prediabetic Patient ⚠️
```
Email:    rajesh@example.com
Password: demo123
Status:   Prediabetic/At-Risk
Report:   demo-files/patient1-rajesh-kumar-report.txt
```
**What to expect:**
- Yellow warning indicators
- Elevated glucose (128 mg/dL)
- Slightly overweight BMI (25.3)
- Lifestyle modification recommendations

---

#### 3. **Arjun Mehta** - Diabetic Patient 🚨
```
Email:    arjun@example.com
Password: demo123
Status:   Diabetic/High-Risk
Report:   demo-files/patient3-arjun-mehta-report.txt
```
**What to expect:**
- Red critical indicators
- High glucose (168 mg/dL)
- Obese BMI (31.2)
- Urgent medical intervention needed
- Multiple complications detected

---

#### 4. **Doctor Account** 👨‍⚕️
```
Email:    doctor1
Password: doctor01
Role:     Doctor
```
**What to expect:**
- Patient overview dashboard
- All consultations access
- Appointment management
- No upload/scan features

---

## 📝 Step-by-Step Testing

### 🧪 Test 1: Healthy Patient (Priya)

**Step 1: Login**
1. Open browser: http://localhost:4008
2. Click "Log In" button
3. Enter:
   - Email: `priya@example.com`
   - Password: `demo123`
4. Click "Sign In"

**Step 2: View Empty Dashboard**
- You'll see the dashboard with demo data
- No appointments or consultations yet
- Charts showing sample health data

**Step 3: Upload Medical Report**
1. Click "Upload & Scan" in sidebar
2. Click "Choose File" or drag and drop
3. Select: `demo-files/patient2-priya-singh-report.txt`
4. Click "Scan Report"
5. Wait for AI analysis (simulated)

**Step 4: View Results**
- Risk Level: **Normal** (Green badge)
- Glucose: 92 mg/dL ✅
- BMI: 22.1 ✅
- Blood Pressure: 118/76 ✅
- All charts show healthy trends

**Step 5: Explore Features**
- **Dashboard**: View all health metrics with graphs
- **AI Consultant**: Chat with AI for health advice
- **Appointments**: Schedule a doctor visit
- **Alerts**: Check health notifications
- **Profile**: Update personal information

---

### 🧪 Test 2: At-Risk Patient (Rajesh)

**Step 1: Logout & Login**
1. Click "Sign Out" at bottom of sidebar
2. Login with:
   - Email: `rajesh@example.com`
   - Password: `demo123`

**Step 2: Upload Report**
1. Go to "Upload & Scan"
2. Upload: `demo-files/patient1-rajesh-kumar-report.txt`
3. Click "Scan Report"

**Step 3: View Results**
- Risk Level: **Prediabetic** (Yellow badge)
- Glucose: 128 mg/dL ⚠️
- BMI: 25.3 (Overweight) ⚠️
- Blood Pressure: 132/86 ⚠️
- Recommendations for lifestyle changes

**Step 4: Check AI Insights**
- Dashboard shows yellow warning indicators
- AI suggests diet modifications
- Exercise recommendations
- Monitoring schedule

---

### 🧪 Test 3: High-Risk Patient (Arjun)

**Step 1: Logout & Login**
1. Sign out
2. Login with:
   - Email: `arjun@example.com`
   - Password: `demo123`

**Step 2: Upload Report**
1. Go to "Upload & Scan"
2. Upload: `demo-files/patient3-arjun-mehta-report.txt`
3. Click "Scan Report"

**Step 3: View Critical Results**
- Risk Level: **Diabetic** (Red badge) 🚨
- Glucose: 168 mg/dL (High)
- BMI: 31.2 (Obese)
- Blood Pressure: 148/94 (Stage 2 Hypertension)
- Multiple complications detected

**Step 4: Review Alerts**
- Click "Alerts" in sidebar
- See critical health warnings
- Urgent intervention recommendations
- Medication requirements

---

### 🧪 Test 4: Doctor View

**Step 1: Login as Doctor**
1. Sign out from patient account
2. Login with:
   - Email: `doctor1`
   - Password: `doctor01`

**Step 2: View Doctor Dashboard**
- See patient overview
- Active patients count
- Pending consultations
- Upcoming appointments
- Patient risk distribution

**Step 3: Manage Consultations**
1. Click "Consultations" in sidebar
2. Click "New Log" button
3. Fill in:
   - Patient Name: "Test Patient"
   - Risk Level: Select from dropdown
   - Notes: "Initial consultation notes"
4. Click "Save Log"

**Step 4: Manage Appointments**
1. Click "Appointments" in sidebar
2. Click "Book Appointment"
3. Fill in:
   - Patient Name: "Test Patient"
   - Type: Check-up
   - Date: Select future date
   - Time: Select time
4. Click "Schedule"

---

## 🎨 Features Guide

### 📊 Dashboard
**What you see:**
- 4 Key metric cards (Glucose, BMI, Heart Rate, Blood Pressure)
- 4 Interactive charts:
  - Glucose monitoring with target ranges
  - Heart rate variability
  - BMI tracking
  - Blood pressure trends
- Upcoming appointments
- Recent consultations
- AI health insights

**How to use:**
- Hover over charts to see detailed values
- Click "View All" links to see full lists
- Check trend indicators (up/down arrows)

---

### 📤 Upload & Scan (Patients Only)
**What you can do:**
- Upload medical reports (.txt files)
- AI extracts health data automatically
- Get instant risk assessment
- View detailed analysis

**How to use:**
1. Click "Upload & Scan"
2. Choose file or drag & drop
3. Click "Scan Report"
4. Wait for analysis
5. View results on dashboard

---

### 💬 AI Consultant (Patients Only)
**What you can do:**
- Chat with AI health assistant
- Get personalized recommendations
- Ask health-related questions
- Receive diet and exercise advice

**How to use:**
1. Click "AI Consultant"
2. Type your question
3. Press Enter or click Send
4. Read AI response
5. Continue conversation

---

### 📋 Consultations
**Patient View:**
- View your consultation history
- See doctor notes
- Check risk assessments

**Doctor View:**
- View all patient consultations
- Create new consultation logs
- Track patient progress

**How to use:**
1. Click "Consultations"
2. Click "New Log" (if doctor)
3. Fill in details
4. Save consultation

---

### 📅 Appointments
**What you can do:**
- Schedule appointments
- View upcoming visits
- See past appointments
- Cancel or complete appointments

**How to use:**
1. Click "Appointments"
2. Click "Book Appointment"
3. Fill in details:
   - Doctor/Patient name
   - Type (Check-up, Follow-up, etc.)
   - Date and time
   - Notes (optional)
4. Click "Schedule"

---

### 🔔 Alerts
**What you see:**
- Health notifications
- Glucose spikes
- Critical warnings
- Normal check confirmations

**How to use:**
1. Click "Alerts"
2. View all notifications
3. Click to mark as read
4. Check priority levels

---

### 👤 Profile
**What you can do:**
- Update personal information
- Change password
- View account details
- Manage settings

---

## 🎯 Testing Checklist

### ✅ Patient Testing
- [ ] Login with patient account
- [ ] View empty dashboard
- [ ] Upload medical report
- [ ] View AI analysis results
- [ ] Check dashboard graphs
- [ ] Chat with AI consultant
- [ ] Schedule appointment
- [ ] View alerts
- [ ] Update profile
- [ ] Logout

### ✅ Doctor Testing
- [ ] Login with doctor account
- [ ] View patient overview
- [ ] Create consultation log
- [ ] Schedule appointment
- [ ] View patient list
- [ ] Check pending consultations
- [ ] Logout

### ✅ Different Health Profiles
- [ ] Test normal patient (Priya)
- [ ] Test prediabetic patient (Rajesh)
- [ ] Test diabetic patient (Arjun)
- [ ] Compare dashboard differences
- [ ] Check risk indicators

---

## 🐛 Troubleshooting

### Problem: Can't Login
**Solution:**
- Check credentials are correct
- Try: `priya@example.com` / `demo123`
- Clear browser cache
- Refresh page

### Problem: Upload Not Working
**Solution:**
- Ensure you're logged in as Patient
- Check file is .txt format
- File should be from demo-files folder
- Try refreshing page

### Problem: No Data Showing
**Solution:**
- Upload a medical report first
- Check you're on correct page
- Refresh browser
- Check console for errors

### Problem: Services Not Running
**Solution:**
```bash
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend
cd backend
python -m uvicorn main:app --reload --port 8000
```

### Problem: Charts Not Displaying
**Solution:**
- Upload medical report first
- Wait for analysis to complete
- Refresh page
- Check browser console

---

## 📁 File Locations

### Demo Reports:
```
demo-files/
├── patient1-rajesh-kumar-report.txt    (Prediabetic)
├── patient2-priya-singh-report.txt     (Normal)
└── patient3-arjun-mehta-report.txt     (Diabetic)
```

### Documentation:
```
DEMO_ACCOUNTS.md           - Login credentials
HOW_TO_USE_GUIDE.md       - This file
COMPLETE_FIXES_SUMMARY.md - Technical changes
```

---

## 🎓 Tips for Best Experience

1. **Start with Priya** (Normal patient) to see healthy baseline
2. **Then try Rajesh** (Prediabetic) to see warnings
3. **Finally Arjun** (Diabetic) to see critical alerts
4. **Test Doctor view** to see management features
5. **Upload reports** to see AI analysis in action
6. **Explore all features** in each account
7. **Check different pages** to see role-based access

---

## 📞 Quick Reference

### URLs:
- **Frontend**: http://localhost:4008
- **Backend**: http://127.0.0.1:8000

### Default Password:
All patient accounts: `demo123`
Doctor account: `doctor01`

### Demo Files:
Located in: `demo-files/` folder

---

## ✨ What Makes This Special

1. **Role-Based Access**: Different views for patients and doctors
2. **AI Analysis**: Automatic health data extraction
3. **Real-Time Charts**: Interactive health visualizations
4. **Risk Assessment**: AI-powered diabetes prediction
5. **Professional Design**: Black and grey theme
6. **Zero Data Handling**: Works even with no data
7. **Comprehensive Reports**: Detailed medical analysis

---

## 🎉 Success Indicators

You'll know it's working when:
- ✅ Login successful
- ✅ Dashboard loads with charts
- ✅ Upload processes file
- ✅ Risk level displays correctly
- ✅ Charts show health data
- ✅ AI insights appear
- ✅ Appointments can be created
- ✅ Consultations can be logged

---

## 📝 Notes

- All data is stored in browser (no database required)
- Refresh will reset data
- Demo reports are realistic but fictional
- AI analysis is simulated for demo
- All features are fully functional

---

**Need Help?**
1. Check this guide
2. Review DEMO_ACCOUNTS.md
3. Check browser console for errors
4. Verify both services are running

---

**Last Updated**: March 6, 2026
**Version**: 2.0.0
**Status**: ✅ Ready to Use

---

## 🚀 Ready to Start?

1. Open: http://localhost:4008
2. Login: `priya@example.com` / `demo123`
3. Upload: `demo-files/patient2-priya-singh-report.txt`
4. Explore: All features!

**Enjoy testing GlucoVision! 🎉**
