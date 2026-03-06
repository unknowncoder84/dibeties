# 🗄️ Supabase Integration Guide for GlucoVision

## 📋 Overview

This guide will help you integrate Supabase database with your GlucoVision application.

---

## 🚀 Quick Setup (5 Minutes)

### Step 1: Setup Environment Variables

1. **Copy the environment file:**
```bash
copy .env.local.supabase .env.local
```

2. **Get your Supabase password:**
   - Go to https://supabase.com/dashboard
   - Select your project: `ccpmyfhgzayjkjmcbwwq`
   - Go to Settings → Database
   - Find your database password

3. **Update .env.local:**
   - Open `.env.local`
   - Replace `[YOUR-PASSWORD]` with your actual password
   - Save the file

### Step 2: Run SQL Setup

1. **Open Supabase SQL Editor:**
   - Go to https://supabase.com/dashboard
   - Select your project
   - Click "SQL Editor" in the left sidebar

2. **Run the setup script:**
   - Open `SUPABASE_SETUP.sql` file
   - Copy ALL the SQL code
   - Paste into Supabase SQL Editor
   - Click "Run" button

3. **Verify tables created:**
   - Go to "Table Editor" in Supabase
   - You should see these tables:
     - users
     - patient_records
     - scan_results
     - glucose_readings
     - consultations
     - appointments
     - alerts
     - chat_messages

### Step 3: Install Dependencies

```bash
npm install @supabase/supabase-js
```

### Step 4: Restart Your App

```bash
# Stop the current server (Ctrl+C)
npm run dev
```

---

## ✅ What's Included

### Database Tables:

1. **users** - User accounts (patients, doctors, admins)
2. **patient_records** - Patient information and metadata
3. **scan_results** - AI scan analysis results
4. **glucose_readings** - Time-series glucose data
5. **consultations** - Doctor-patient consultations
6. **appointments** - Scheduled appointments
7. **alerts** - Health notifications
8. **chat_messages** - AI consultant chat history

### Demo Data:

- ✅ 4 demo users (3 patients + 1 doctor)
- ✅ 3 demo consultations
- ✅ 3 demo appointments
- ✅ All with proper relationships

### Security:

- ✅ Row Level Security (RLS) enabled
- ✅ Policies for patient/doctor access
- ✅ Secure authentication
- ✅ Password hashing

---

## 🔐 Your Supabase Credentials

```
Project URL: https://ccpmyfhgzayjkjmcbwwq.supabase.co

Anon Key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNjcG15ZmhnemF5amtqbWNid3dxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4MTE3ODgsImV4cCI6MjA4ODM4Nzc4OH0.iqV8if9KV_mxxvFzOa__8ZzRLgqCbLIkD5xEffWlWv8

Service Role: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNjcG15ZmhnemF5amtqbWNid3dxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MjgxMTc4OCwiZXhwIjoyMDg4Mzg3Nzg4fQ.X77gBF-ZtE_A7JRZCYAxt2IH4BD8croYQW8JwHS2RFc

Database: postgresql://postgres:[YOUR-PASSWORD]@db.ccpmyfhgzayjkjmcbwwq.supabase.co:5432/postgres
```

---

## 📊 Database Schema

### Users Table
```sql
- id (UUID, Primary Key)
- email (TEXT, Unique)
- name (TEXT)
- password_hash (TEXT)
- role (TEXT: Patient, Doctor, Admin)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
```

### Patient Records Table
```sql
- id (UUID, Primary Key)
- patient_name (TEXT)
- patient_id (TEXT, Unique)
- age (INTEGER)
- gender (TEXT)
- last_scan_date (DATE)
- risk_level (TEXT: Normal, Prediabetic, Diabetic)
- added_by (TEXT)
- user_id (UUID, Foreign Key → users)
- created_at (TIMESTAMP)
```

### Consultations Table
```sql
- id (UUID, Primary Key)
- patient_name (TEXT)
- doctor_name (TEXT)
- date (TEXT)
- notes (TEXT)
- status (TEXT: completed, pending, cancelled)
- risk_level (TEXT)
- patient_id (UUID, Foreign Key → users)
- doctor_id (UUID, Foreign Key → users)
- created_at (TIMESTAMP)
```

### Appointments Table
```sql
- id (UUID, Primary Key)
- patient_name (TEXT)
- doctor_name (TEXT)
- date (DATE)
- time (TEXT)
- type (TEXT: checkup, followup, emergency, consultation)
- status (TEXT: scheduled, completed, cancelled)
- notes (TEXT)
- patient_id (UUID, Foreign Key → users)
- doctor_id (UUID, Foreign Key → users)
- created_at (TIMESTAMP)
```

---

## 🔒 Security Policies

### Row Level Security (RLS):

**Users:**
- Users can view their own data
- Users can update their own data

**Patient Records:**
- Doctors can view all patient records
- Patients can view their own records
- Anyone can insert records (for uploads)

**Consultations:**
- Doctors can view all consultations
- Patients can view their own consultations
- Doctors can create consultations

**Appointments:**
- Users can view their own appointments
- Anyone can create appointments
- Users can update their own appointments

---

## 🧪 Testing the Integration

### Test 1: Check Database Connection
```bash
# Open browser console on your app
# Run:
console.log(supabase)
# Should show Supabase client object
```

### Test 2: Verify Demo Data
1. Go to Supabase Dashboard
2. Click "Table Editor"
3. Open "consultations" table
4. Should see 3 demo consultations

### Test 3: Test Authentication
1. Try logging in with demo account
2. Check if user data loads
3. Verify role-based access

---

## 📝 Usage Examples

### Fetch Patient Records:
```typescript
import { supabase } from '@/lib/supabase'

const { data, error } = await supabase
  .from('patient_records')
  .select('*')
  .order('created_at', { ascending: false })
```

### Save Consultation:
```typescript
const { data, error } = await supabase
  .from('consultations')
  .insert([{
    patient_name: 'John Doe',
    doctor_name: 'Dr. Smith',
    date: '2026-03-10',
    notes: 'Follow-up visit',
    status: 'completed',
    risk_level: 'Normal'
  }])
```

### Update Appointment:
```typescript
const { data, error } = await supabase
  .from('appointments')
  .update({ status: 'completed' })
  .eq('id', appointmentId)
```

---

## 🔧 Troubleshooting

### Issue: "Invalid API key"
**Solution:** Check your `.env.local` file has correct keys

### Issue: "Table does not exist"
**Solution:** Run `SUPABASE_SETUP.sql` in SQL Editor

### Issue: "Permission denied"
**Solution:** Check RLS policies are enabled

### Issue: "Cannot connect to database"
**Solution:** Verify your database password in `.env.local`

---

## 📚 Files Reference

### Configuration Files:
- `.env.local.supabase` - Template with your credentials
- `.env.local` - Your actual environment file (create from template)
- `SUPABASE_SETUP.sql` - Database schema and demo data
- `lib/supabase.ts` - Supabase client and helper functions

### Integration Points:
- `lib/app-context.tsx` - Can be updated to use Supabase
- `app/dashboard/upload/page.tsx` - Save scan results
- `app/dashboard/patients/page.tsx` - Fetch patient records
- `app/dashboard/consultations/page.tsx` - Manage consultations
- `app/dashboard/appointments/page.tsx` - Manage appointments

---

## 🚀 Next Steps

### Phase 1: Basic Integration (Current)
- ✅ Database schema created
- ✅ Demo data loaded
- ✅ Supabase client configured
- ⏳ Connect app to database

### Phase 2: Full Integration
- Replace local state with Supabase queries
- Implement real authentication
- Add real-time subscriptions
- Enable data persistence

### Phase 3: Advanced Features
- Add file storage for PDFs
- Implement real-time notifications
- Add data analytics
- Enable multi-user collaboration

---

## 📖 Documentation Links

- Supabase Docs: https://supabase.com/docs
- Supabase JS Client: https://supabase.com/docs/reference/javascript
- Row Level Security: https://supabase.com/docs/guides/auth/row-level-security
- Database Functions: https://supabase.com/docs/guides/database/functions

---

## ✅ Checklist

Before going live:
- [ ] Run SUPABASE_SETUP.sql
- [ ] Update .env.local with password
- [ ] Install @supabase/supabase-js
- [ ] Test database connection
- [ ] Verify demo data loaded
- [ ] Test authentication
- [ ] Check RLS policies
- [ ] Test CRUD operations
- [ ] Verify role-based access
- [ ] Test on production

---

## 🎯 Quick Commands

```bash
# Install Supabase
npm install @supabase/supabase-js

# Copy environment file
copy .env.local.supabase .env.local

# Start development server
npm run dev

# Check Supabase connection
# (In browser console)
console.log(supabase)
```

---

## 💡 Pro Tips

1. **Always use RLS policies** - Never disable Row Level Security
2. **Use prepared statements** - Prevent SQL injection
3. **Index frequently queried columns** - Improve performance
4. **Use transactions** - For related operations
5. **Monitor query performance** - Use Supabase dashboard
6. **Backup regularly** - Enable automatic backups
7. **Use TypeScript types** - For type safety
8. **Test policies thoroughly** - Ensure proper access control

---

## 🆘 Support

If you need help:
1. Check Supabase Dashboard logs
2. Review SQL Editor for errors
3. Check browser console for client errors
4. Verify environment variables
5. Test with Supabase API directly

---

**Last Updated:** March 6, 2026
**Version:** 1.0.0
**Status:** ✅ Ready to Use

---

## 🎉 You're All Set!

Your Supabase database is configured and ready to use. Follow the Quick Setup steps above to get started!
