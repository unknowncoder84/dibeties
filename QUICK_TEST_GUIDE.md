# ⚡ Quick Test Guide - 5 Minutes

## 🎯 Fastest Way to Test

### Step 1: Open Website (10 seconds)
```
Open browser: http://localhost:4008
```

### Step 2: Login (20 seconds)
```
Click "Log In"
Email:    priya@example.com
Password: demo123
Click "Sign In"
```

### Step 3: Upload Report (30 seconds)
```
1. Click "Upload & Scan" in sidebar
2. Click "Choose File"
3. Select: demo-files/patient2-priya-singh-report.txt
4. Click "Scan Report"
5. Wait 3 seconds
```

### Step 4: View Results (2 minutes)
```
✅ Dashboard shows:
   - Glucose: 92 mg/dL (Normal)
   - BMI: 22.1 (Healthy)
   - 4 Interactive charts
   - AI health insights
```

### Step 5: Explore (2 minutes)
```
Click through:
- Dashboard (health metrics)
- AI Consultant (chat)
- Appointments (schedule)
- Alerts (notifications)
- Profile (settings)
```

---

## 🎨 Test All 3 Patient Types

### 1️⃣ Healthy Patient
```
Login: priya@example.com / demo123
Upload: patient2-priya-singh-report.txt
Result: All green ✅
```

### 2️⃣ At-Risk Patient
```
Login: rajesh@example.com / demo123
Upload: patient1-rajesh-kumar-report.txt
Result: Yellow warnings ⚠️
```

### 3️⃣ High-Risk Patient
```
Login: arjun@example.com / demo123
Upload: patient3-arjun-mehta-report.txt
Result: Red alerts 🚨
```

### 4️⃣ Doctor View
```
Login: doctor1 / doctor01
View: Patient management dashboard
```

---

## 📁 Demo Files Location

```
demo-files/
├── patient1-rajesh-kumar-report.txt    (Prediabetic)
├── patient2-priya-singh-report.txt     (Normal)
└── patient3-arjun-mehta-report.txt     (Diabetic)
```

---

## ✅ Success Checklist

- [ ] Website opens at localhost:4008
- [ ] Login works
- [ ] File uploads successfully
- [ ] Dashboard shows charts
- [ ] Risk level displays
- [ ] All pages accessible
- [ ] Data persists during session

---

## 🐛 Quick Fixes

**Can't login?**
→ Use: `priya@example.com` / `demo123`

**Upload fails?**
→ Must be logged in as Patient (not Doctor)

**No charts?**
→ Upload a medical report first

**Services not running?**
→ Run: `npm run dev` in terminal

---

## 🎯 What to Look For

### Dashboard Should Show:
✅ 4 metric cards (Glucose, BMI, Heart Rate, BP)
✅ 4 interactive charts with data
✅ Upcoming appointments section
✅ Recent consultations section
✅ AI health insights
✅ Risk level badge

### After Upload:
✅ Risk assessment (Normal/Prediabetic/Diabetic)
✅ Extracted health metrics
✅ Updated charts
✅ AI recommendations

---

## 📞 Quick Reference

| Account | Email | Password | Status |
|---------|-------|----------|--------|
| Priya | priya@example.com | demo123 | Normal |
| Rajesh | rajesh@example.com | demo123 | Prediabetic |
| Arjun | arjun@example.com | demo123 | Diabetic |
| Doctor | doctor1 | doctor01 | Doctor |

---

## 🚀 Start Now!

1. **Open**: http://localhost:4008
2. **Login**: priya@example.com / demo123
3. **Upload**: patient2-priya-singh-report.txt
4. **Done!** ✨

---

**For detailed guide, see: HOW_TO_USE_GUIDE.md**
