# 🚀 Complete Setup Guide - Diabetes Management System

## ✅ What's Been Updated

### 1. Indian Names & Demo Credentials
- ✅ All doctor/patient names changed to Indian origin
- ✅ Demo login credentials: `doctor1` / `doctor01`
- ✅ Doctors: Dr. Priya Sharma, Dr. Amit Patel
- ✅ Patients: Rajesh Kumar, Priya Singh, Arjun Mehta

### 2. Demo Medical Reports
- ✅ Created 3 demo files in `demo-files/` folder:
  - `patient1-rajesh-kumar.txt` - Prediabetic case
  - `patient2-priya-singh.txt` - Diabetic case
  - `patient3-arjun-mehta.txt` - Normal case

### 3. Theme Updates
- ✅ Dashboard changed to black/grey theme
- ✅ Removed neon cyan/green colors
- ✅ Clean, professional dark theme
- ✅ Subtle grid background (no bright effects)

### 4. Backend Integration Ready
- ✅ Supabase configuration added
- ✅ OpenRouter API key support for AI
- ✅ SQL schema file created
- ✅ Environment variables configured

### 5. AI Consultant
- ✅ Pre-configured responses for common questions
- ✅ OpenRouter integration ready
- ✅ Indian diet-specific advice
- ✅ Quick response suggestions

---

## 🔐 Demo Login Credentials

### Doctor Account
```
Username: doctor1
Password: doctor01
Role: Doctor
Name: Dr. Priya Sharma
```

### Patient Account (Any email/password works in demo mode)
```
Email: patient@example.com
Password: anything
Role: Patient
```

---

## 📁 Demo Files Location

Upload these files to test the PDF scanning feature:

```
demo-files/
├── patient1-rajesh-kumar.txt    (Prediabetic - Glucose: 128 mg/dL)
├── patient2-priya-singh.txt     (Diabetic - Glucose: 156 mg/dL)
└── patient3-arjun-mehta.txt     (Normal - Glucose: 92 mg/dL)
```

---

## 🗄️ Supabase Setup

### Step 1: Create Supabase Project
1. Go to https://supabase.com
2. Create a new project
3. Wait for database to initialize

### Step 2: Run SQL Schema
1. Open SQL Editor in Supabase Dashboard
2. Copy content from `SUPABASE_SQL_SCHEMA.sql`
3. Paste and run the entire script
4. This creates all tables, indexes, and RLS policies

### Step 3: Create Demo Doctor Account
1. Go to Authentication > Users
2. Click "Add User"
3. Email: `doctor1@hospital.com`
4. Password: `doctor01`
5. Confirm email automatically
6. Copy the User ID

### Step 4: Set Doctor Profile
Run this SQL (replace YOUR_USER_ID):
```sql
INSERT INTO public.profiles (id, full_name, role, phone, gender)
VALUES (
    'YOUR_USER_ID_FROM_AUTH',
    'Dr. Priya Sharma',
    'Doctor',
    '+91-9876543210',
    'Female'
);
```

### Step 5: Enable Google OAuth (Optional)
1. Go to Authentication > Providers
2. Enable Google provider
3. Add your Google OAuth credentials
4. Add authorized redirect URLs

### Step 6: Get API Keys
1. Go to Settings > API
2. Copy `Project URL` → Add to `.env.local` as `NEXT_PUBLIC_SUPABASE_URL`
3. Copy `anon public` key → Add to `.env.local` as `NEXT_PUBLIC_SUPABASE_ANON_KEY`

---

## 🤖 OpenRouter AI Setup

### Step 1: Get API Key
1. Go to https://openrouter.ai
2. Sign up / Log in
3. Go to Keys section
4. Create a new API key
5. Copy the key

### Step 2: Add to Environment
Add to `.env.local`:
```env
NEXT_PUBLIC_OPENROUTER_API_KEY=your-actual-key-here
```

### Step 3: Test AI Consultant
1. Go to Dashboard > Chat
2. Try these questions:
   - "hello"
   - "glucose"
   - "diet"
   - "exercise"
   - "symptoms"
   - "food"

---

## 🎨 Theme Changes

### New Color Scheme
- Background: Pure black (#0a0a0a)
- Cards: Dark grey (rgba(20, 20, 20, 0.8))
- Text: Light grey (#e5e5e5)
- Primary: Blue (#3b82f6)
- Accent: Green (#10b981)
- No neon effects or glowing borders

### Updated Components
- ✅ Dashboard layout
- ✅ All cards and panels
- ✅ Navigation
- ✅ Forms and inputs
- ✅ Charts and graphs

---

## 📤 File Upload Feature

### How It Works
1. Go to Dashboard > Upload
2. Click "Upload Medical Report"
3. Select a file from `demo-files/`
4. System extracts:
   - Glucose levels
   - BMI
   - Heart rate
   - Blood pressure
5. AI analyzes and provides risk assessment

### Supported Formats
- PDF files (`.pdf`)
- Text files (`.txt`) - for demo

### What Gets Extracted
- Patient name
- Glucose (fasting)
- BMI
- Heart rate
- Blood pressure (systolic/diastolic)
- HbA1c
- Cholesterol levels

---

## 🔄 Making Everything Dynamic

### Current Status
- ✅ Login system functional
- ✅ Demo credentials work
- ✅ Navigation between pages
- ✅ Data display from context
- ⏳ Supabase integration (needs your keys)
- ⏳ File upload to storage (needs Supabase)
- ⏳ AI responses (needs OpenRouter key)

### To Make Fully Dynamic
1. Add Supabase keys to `.env.local`
2. Add OpenRouter key to `.env.local`
3. Run SQL schema in Supabase
4. Create demo doctor account
5. Test all features

---

## 🧪 Testing Checklist

### Authentication
- [ ] Login with doctor1/doctor01
- [ ] Login with any email/password (patient)
- [ ] Logout functionality
- [ ] Google OAuth (if configured)

### Dashboard
- [ ] View health metrics
- [ ] See glucose trends chart
- [ ] Check appointments list
- [ ] View consultations

### Upload Feature
- [ ] Upload patient1-rajesh-kumar.txt
- [ ] See extracted data
- [ ] Get AI risk assessment
- [ ] View results in dashboard

### AI Consultant
- [ ] Send "hello" message
- [ ] Ask about "glucose"
- [ ] Ask about "diet"
- [ ] Try custom questions (with OpenRouter)

### Appointments
- [ ] View scheduled appointments
- [ ] See appointment details
- [ ] Filter by status

### Alerts
- [ ] View alert notifications
- [ ] Mark alerts as read
- [ ] See different alert types

---

## 📝 Environment Variables Summary

### `.env.local` (Frontend)
```env
# Backend API
NEXT_PUBLIC_API_URL=http://localhost:8000

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here

# OpenRouter AI
NEXT_PUBLIC_OPENROUTER_API_KEY=your-openrouter-key-here
```

### `backend/.env` (Backend)
```env
# Supabase
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_KEY=your-service-key-here

# OpenRouter
OPENROUTER_API_KEY=your-openrouter-key-here

# MongoDB (Optional)
MONGODB_URI=mongodb://localhost:27017/diabetes_management

# Settings
ENVIRONMENT=development
DEBUG=True
```

---

## 🚀 Quick Start Commands

### Start Everything
```bash
START_ALL.bat
```

### Check Status
```bash
CHECK_STATUS.bat
```

### Test Demo Login
1. Open http://localhost:4008
2. Click "Log In"
3. Enter: doctor1 / doctor01
4. Access doctor dashboard

---

## 📊 Database Tables Created

1. **profiles** - User information
2. **health_records** - Glucose readings and health data
3. **sensor_readings** - Continuous monitoring data
4. **appointments** - Doctor appointments
5. **consultations** - Medical consultations
6. **alerts** - Health notifications
7. **medical_documents** - Uploaded files
8. **chat_messages** - AI consultant history

---

## 🎯 Next Steps

1. **Add Supabase Keys**
   - Get keys from Supabase dashboard
   - Add to `.env.local`
   - Restart frontend

2. **Add OpenRouter Key**
   - Get key from OpenRouter
   - Add to `.env.local`
   - Test AI consultant

3. **Test Demo Files**
   - Upload each demo file
   - Verify data extraction
   - Check AI analysis

4. **Configure Google Login**
   - Set up OAuth in Supabase
   - Add credentials
   - Test login flow

5. **Customize Further**
   - Add more demo data
   - Customize AI responses
   - Add more features

---

## 🆘 Troubleshooting

### Issue: Login doesn't work
**Solution**: Check if demo credentials are exactly `doctor1` / `doctor01`

### Issue: AI gives generic responses
**Solution**: Add OpenRouter API key to `.env.local`

### Issue: File upload fails
**Solution**: Ensure backend is running on port 8000

### Issue: Theme still shows neon colors
**Solution**: Clear browser cache (Ctrl+Shift+Delete) and hard refresh

### Issue: Supabase connection fails
**Solution**: Verify API keys in `.env.local` are correct

---

## 📞 Support

For issues or questions:
1. Check `SERVICES_RUNNING.txt` for service status
2. Run `CHECK_STATUS.bat` to verify everything is running
3. Check browser console (F12) for errors
4. Check terminal logs for backend errors

---

## ✅ Completion Checklist

- [x] Indian names implemented
- [x] Demo credentials (doctor1/doctor01)
- [x] 3 demo files created
- [x] Black/grey theme applied
- [x] Neon effects removed
- [x] Supabase SQL schema created
- [x] OpenRouter integration ready
- [x] AI consultant with pre-answers
- [x] File upload functionality
- [x] Google login preparation
- [ ] Add your Supabase keys
- [ ] Add your OpenRouter key
- [ ] Test all features
- [ ] Deploy to production

---

**Your Diabetes Management System is ready! Just add your API keys and start testing! 🎉**
