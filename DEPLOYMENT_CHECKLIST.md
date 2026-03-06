# GlucoVision AI - Deployment Checklist

Complete checklist for local development and production deployment.

## ✅ Local Development Setup

### Prerequisites
- [ ] Node.js 18+ installed (`node --version`)
- [ ] pnpm installed (`pnpm --version`)
- [ ] Python 3.10+ installed (`python --version`)
- [ ] Git installed (optional)

### Frontend Setup
- [ ] Run `pnpm install`
- [ ] Copy `.env.local.example` to `.env.local`
- [ ] Update `NEXT_PUBLIC_API_URL=http://localhost:8000`
- [ ] Test with `pnpm dev`
- [ ] Verify at http://localhost:3000

### Backend Setup
- [ ] Navigate to `backend/` directory
- [ ] Create virtual environment: `python -m venv venv`
- [ ] Activate venv: `venv\Scripts\activate` (Windows) or `source venv/bin/activate` (Linux/Mac)
- [ ] Install dependencies: `pip install -r requirements.txt`
- [ ] Copy `backend/.env.example` to `backend/.env`
- [ ] Test with `uvicorn main:app --reload`
- [ ] Verify at http://localhost:8000/docs

### Verification Tests
- [ ] Health check: `curl http://localhost:8000/health`
- [ ] AI prediction test: `curl -X POST http://localhost:8000/api/ai/test`
- [ ] Sensor data test: `curl http://localhost:8000/api/sensors/test`
- [ ] PDF parser test: `curl http://localhost:8000/api/pdf/test`
- [ ] Run full test suite: `python backend/test_api.py`

### Features to Test
- [ ] Landing page loads with glassmorphism UI
- [ ] Navigation works (About, Features, Contact)
- [ ] Sign up page accessible
- [ ] Dashboard loads (may need mock auth)
- [ ] Upload page accessible
- [ ] Charts render correctly
- [ ] API calls work from frontend

## 🚀 Production Deployment

### Frontend (Vercel)
- [ ] Push code to GitHub
- [ ] Connect repository to Vercel
- [ ] Set environment variables:
  - `NEXT_PUBLIC_API_URL` (production backend URL)
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- [ ] Deploy and verify
- [ ] Test production URL

### Backend (Railway/Render)
- [ ] Create new project on Railway/Render
- [ ] Connect GitHub repository
- [ ] Set root directory to `backend/`
- [ ] Set build command: `pip install -r requirements.txt`
- [ ] Set start command: `uvicorn main:app --host 0.0.0.0 --port $PORT`
- [ ] Set environment variables:
  - `SUPABASE_URL`
  - `SUPABASE_ANON_KEY`
  - `MONGODB_URI`
  - `RESEND_API_KEY`
  - `ENVIRONMENT=production`
  - `DEBUG=False`
- [ ] Deploy and verify
- [ ] Test API endpoints

### Database Setup

#### Supabase (PostgreSQL)
- [ ] Create Supabase project
- [ ] Enable authentication
- [ ] Create tables for user data
- [ ] Copy URL and anon key
- [ ] Update environment variables

#### MongoDB Atlas (Sensor Data)
- [ ] Create MongoDB Atlas account
- [ ] Create cluster
- [ ] Create database user
- [ ] Whitelist IP addresses (0.0.0.0/0 for development)
- [ ] Copy connection string
- [ ] Update `MONGODB_URI` in environment

### Email Service (Resend)
- [ ] Create Resend account
- [ ] Verify domain (optional)
- [ ] Generate API key
- [ ] Update `RESEND_API_KEY` in environment

### Post-Deployment Verification
- [ ] Frontend loads correctly
- [ ] Backend API responds
- [ ] CORS configured properly
- [ ] Authentication works
- [ ] PDF upload works
- [ ] AI predictions work
- [ ] Sensor data saves/retrieves
- [ ] Email notifications work
- [ ] Charts render with real data
- [ ] Mobile responsive
- [ ] Performance acceptable

## 🔒 Security Checklist

### Environment Variables
- [ ] No secrets in code
- [ ] `.env` files in `.gitignore`
- [ ] Production keys different from development
- [ ] API keys have appropriate permissions

### Backend Security
- [ ] CORS properly configured
- [ ] Rate limiting enabled (optional)
- [ ] Input validation on all endpoints
- [ ] File upload size limits
- [ ] SQL injection prevention
- [ ] XSS protection

### Frontend Security
- [ ] No sensitive data in client code
- [ ] API keys use `NEXT_PUBLIC_` prefix only when needed
- [ ] Authentication tokens stored securely
- [ ] HTTPS enforced in production

## 📊 Monitoring & Maintenance

### Logging
- [ ] Backend logs configured
- [ ] Error tracking setup (Sentry, optional)
- [ ] API usage monitoring

### Performance
- [ ] Frontend build optimized
- [ ] Images optimized
- [ ] API response times acceptable
- [ ] Database queries optimized

### Backups
- [ ] Database backup strategy
- [ ] Code in version control
- [ ] Environment variables documented

## 🐛 Troubleshooting

### Common Issues

**Frontend won't build:**
- Check Node version
- Clear `.next/` directory
- Reinstall dependencies

**Backend won't start:**
- Check Python version
- Verify virtual environment activated
- Check port 8000 availability
- Review environment variables

**CORS errors:**
- Verify backend CORS settings
- Check frontend API URL
- Ensure both services running

**Database connection fails:**
- Verify connection strings
- Check network access
- Confirm credentials

**PDF parsing fails:**
- Verify PyMuPDF installed
- Check file format
- Review error logs

## 📝 Documentation

- [ ] README.md updated
- [ ] API documentation current
- [ ] Environment variables documented
- [ ] Deployment process documented
- [ ] Architecture diagram created (optional)

## 🎯 Launch Checklist

- [ ] All tests passing
- [ ] Documentation complete
- [ ] Security review done
- [ ] Performance acceptable
- [ ] Monitoring configured
- [ ] Backup strategy in place
- [ ] Team trained
- [ ] Support process defined

## 📞 Support Contacts

- Technical Issues: support@glucovision.ai
- Security Issues: security@glucovision.ai
- General Inquiries: info@glucovision.ai

---

**Last Updated:** March 1, 2026
**Version:** 1.0.0
