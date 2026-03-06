# Supabase Setup Guide

Complete guide to setting up Supabase for GlucoVision AI.

## 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project"
3. Sign in with GitHub
4. Click "New Project"
5. Fill in:
   - **Name**: glucovision-ai
   - **Database Password**: (generate strong password)
   - **Region**: Choose closest to you
6. Click "Create new project"
7. Wait 2-3 minutes for setup

## 2. Get Your Credentials

1. Go to **Project Settings** (gear icon)
2. Click **API** in sidebar
3. Copy these values:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 3. Update Environment Variables

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### Backend (backend/.env)
```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here
MONGODB_URI=mongodb://localhost:27017/glucovision
RESEND_API_KEY=re_test_key_local
ENVIRONMENT=development
DEBUG=True
```

## 4. Create Database Tables

Go to **SQL Editor** in Supabase dashboard and run these commands:

### Users Table (handled by Supabase Auth automatically)

### Health Records Table
```sql
CREATE TABLE health_records (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  glucose DECIMAL(5,2) NOT NULL,
  bmi DECIMAL(4,2) NOT NULL,
  heart_rate INTEGER,
  blood_pressure VARCHAR(20),
  risk_level VARCHAR(20),
  confidence DECIMAL(4,3),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE health_records ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only see their own records
CREATE POLICY "Users can view own health records"
  ON health_records FOR SELECT
  USING (auth.uid() = user_id);

-- Policy: Users can insert their own records
CREATE POLICY "Users can insert own health records"
  ON health_records FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Create index for faster queries
CREATE INDEX idx_health_records_user_id ON health_records(user_id);
CREATE INDEX idx_health_records_created_at ON health_records(created_at DESC);
```

### Sensor Readings Table
```sql
CREATE TABLE sensor_readings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  glucose DECIMAL(5,2) NOT NULL,
  heart_rate INTEGER,
  temperature DECIMAL(4,2),
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE sensor_readings ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only see their own readings
CREATE POLICY "Users can view own sensor readings"
  ON sensor_readings FOR SELECT
  USING (auth.uid() = user_id);

-- Policy: Users can insert their own readings
CREATE POLICY "Users can insert own sensor readings"
  ON sensor_readings FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Create indexes
CREATE INDEX idx_sensor_readings_user_id ON sensor_readings(user_id);
CREATE INDEX idx_sensor_readings_timestamp ON sensor_readings(timestamp DESC);
```

### User Profiles Table (Optional)
```sql
CREATE TABLE user_profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  full_name VARCHAR(255),
  age INTEGER,
  gender VARCHAR(20),
  height DECIMAL(5,2),
  weight DECIMAL(5,2),
  medical_conditions TEXT[],
  medications TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- Policy: Users can view their own profile
CREATE POLICY "Users can view own profile"
  ON user_profiles FOR SELECT
  USING (auth.uid() = id);

-- Policy: Users can update their own profile
CREATE POLICY "Users can update own profile"
  ON user_profiles FOR UPDATE
  USING (auth.uid() = id);

-- Policy: Users can insert their own profile
CREATE POLICY "Users can insert own profile"
  ON user_profiles FOR INSERT
  WITH CHECK (auth.uid() = id);
```

## 5. Enable Authentication

1. Go to **Authentication** → **Providers**
2. Enable **Email** provider
3. Configure settings:
   - **Enable email confirmations**: Optional (disable for testing)
   - **Enable email change confirmations**: Optional
   - **Secure email change**: Recommended

## 6. Test the Connection

### Test in Browser Console
```javascript
// Open http://localhost:3000 and run in console
const { data, error } = await supabase.auth.signUp({
  email: 'test@example.com',
  password: 'testpassword123'
})
console.log('Sign up result:', data, error)
```

### Test Backend Connection
```python
# In backend directory
python
>>> from supabase import create_client
>>> url = "your-supabase-url"
>>> key = "your-anon-key"
>>> supabase = create_client(url, key)
>>> print("Connected!")
```

## 7. Verify Tables

1. Go to **Table Editor** in Supabase
2. You should see:
   - `health_records`
   - `sensor_readings`
   - `user_profiles` (if created)
3. Click each table to verify structure

## 8. Insert Test Data (Optional)

```sql
-- Insert test health record (replace user_id with actual user ID)
INSERT INTO health_records (user_id, glucose, bmi, heart_rate, risk_level, confidence)
VALUES (
  'your-user-id-here',
  128.5,
  25.3,
  78,
  'Prediabetic',
  0.934
);

-- Insert test sensor reading
INSERT INTO sensor_readings (user_id, glucose, heart_rate, temperature)
VALUES (
  'your-user-id-here',
  125.0,
  75,
  36.8
);
```

## 9. Security Best Practices

### Row Level Security (RLS)
- ✅ Enabled on all tables
- ✅ Users can only access their own data
- ✅ Policies enforce user_id matching

### API Keys
- ✅ Use `anon` key for client-side
- ⚠️ Never expose `service_role` key
- ✅ Keep keys in environment variables

### Authentication
- ✅ Email verification (optional)
- ✅ Password requirements (min 6 chars)
- ✅ Session management

## 10. Common Issues

### "relation does not exist"
- Run the SQL commands to create tables
- Check table names match exactly

### "new row violates row-level security policy"
- Ensure user is authenticated
- Check RLS policies are correct
- Verify user_id matches auth.uid()

### "Invalid API key"
- Check environment variables are set
- Restart development servers
- Verify keys are correct in Supabase dashboard

## 11. Next Steps

1. ✅ Update `.env.local` with your credentials
2. ✅ Update `backend/.env` with your credentials
3. ✅ Restart both servers
4. ✅ Test sign up at `/auth/signup`
5. ✅ Test login at `/auth/login`
6. ✅ Upload health data
7. ✅ View dashboard with real data

## 12. Useful Supabase Features

### Realtime Subscriptions
```typescript
// Listen to new sensor readings
supabase
  .channel('sensor_readings')
  .on('postgres_changes', {
    event: 'INSERT',
    schema: 'public',
    table: 'sensor_readings'
  }, (payload) => {
    console.log('New reading:', payload.new)
  })
  .subscribe()
```

### Storage for PDFs
```typescript
// Upload medical report
const { data, error } = await supabase.storage
  .from('medical-reports')
  .upload(`${userId}/report.pdf`, file)
```

### Edge Functions
- Deploy serverless functions
- Process data on the edge
- Integrate with AI models

## 13. Monitoring

1. Go to **Database** → **Logs**
2. Monitor queries and performance
3. Check **API** → **Logs** for requests
4. View **Auth** → **Users** for user activity

## 14. Backup

1. Go to **Database** → **Backups**
2. Enable automatic backups
3. Download manual backups as needed

---

**Need Help?**
- [Supabase Docs](https://supabase.com/docs)
- [Supabase Discord](https://discord.supabase.com)
- [GitHub Issues](https://github.com/supabase/supabase/issues)
