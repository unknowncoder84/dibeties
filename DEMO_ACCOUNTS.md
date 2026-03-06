# Demo Accounts & Login Credentials

## Quick Access

### Patient Accounts

#### 1. Priya Singh (Healthy Patient)
```
Email:    priya@example.com
Password: demo123
Role:     Patient
Status:   Normal/Healthy
```
**Use Case:** Test normal health monitoring, preventive care features

---

#### 2. Rajesh Kumar (Prediabetic Patient)
```
Email:    rajesh@example.com
Password: demo123
Role:     Patient
Status:   Prediabetic/At-Risk
```
**Use Case:** Test lifestyle modification recommendations, monitoring features

---

#### 3. Arjun Mehta (Diabetic Patient)
```
Email:    arjun@example.com
Password: demo123
Role:     Patient
Status:   Diabetic/High-Risk
```
**Use Case:** Test critical alerts, intensive monitoring, complication tracking

---

### Doctor Account

#### Dr. Priya Sharma
```
Email:    doctor1
Password: doctor01
Role:     Doctor
```
**Access:**
- View all patient consultations
- Create consultation logs
- Manage appointments
- Patient dashboard overview
- No upload/scan features (doctor-specific interface)

---

## Role-Based Access

### Patient Features
✓ Dashboard with health metrics and charts
✓ Upload & Scan medical reports
✓ AI Health Consultant (chatbot)
✓ Appointments management
✓ Alerts and notifications
✓ Profile settings

### Doctor Features
✓ Dashboard with patient overview
✓ Consultations management (all patients)
✓ Appointments management
✓ Alerts and notifications
✓ Profile settings
✗ Upload & Scan (not available for doctors)
✗ AI Consultant (patient-specific feature)

---

## Demo Medical Reports

Each patient account has a corresponding medical report in the `demo-files/` folder:

1. **patient2-priya-singh-report.txt** - Normal health markers
2. **patient1-rajesh-kumar-report.txt** - Prediabetic indicators
3. **patient3-arjun-mehta-report.txt** - Diabetic with complications

---

## Demo Data Included

### Consultations (Pre-loaded)
1. **Demo User** - Feb 28, 2026 - Prediabetic screening
2. **Alice Johnson** - Feb 25, 2026 - Routine check-up (Normal)
3. **Bob Martinez** - Feb 22, 2026 - Diabetes management (Diabetic)

### Appointments (Pre-loaded)
1. **Demo User** - Mar 15, 2026, 10:00 AM - Follow-up
2. **Alice Johnson** - Mar 20, 2026, 2:30 PM - Annual check-up
3. **Bob Martinez** - Mar 10, 2026, 11:00 AM - Medication review

---

## How to Login

### Method 1: Use Demo Accounts
1. Go to http://localhost:4008
2. Click "Log In"
3. Enter credentials from above
4. Click "Sign In"

### Method 2: Create New Account
1. Go to http://localhost:4008
2. Click "Get Started"
3. Fill in your details
4. Select role (Patient/Doctor)
5. Click "Create Account"

---

## Testing Workflow

### For Patients:
1. Login with patient credentials
2. Go to "Upload & Scan"
3. Upload corresponding medical report
4. View AI analysis results
5. Explore dashboard with charts
6. Chat with AI consultant
7. Check alerts and recommendations

### For Doctors:
1. Login with doctor credentials
2. View patient dashboard overview
3. Go to "Consultations"
4. Create new consultation logs
5. Manage patient appointments
6. Review patient health data

---

## Default Password

All demo accounts use the same password for easy testing:
```
Password: demo123
```

**Note:** In production, use strong, unique passwords for each account.

---

## Features by Role

| Feature | Patient | Doctor | Admin |
|---------|---------|--------|-------|
| Dashboard | ✓ Personal | ✓ Overview | ✓ Full |
| Upload & Scan | ✓ | ✗ | ✓ |
| AI Consultant | ✓ | ✗ | ✓ |
| Consultations | ✓ View Own | ✓ View All | ✓ View All |
| Appointments | ✓ Manage Own | ✓ Manage All | ✓ Manage All |
| Alerts | ✓ Personal | ✓ All Patients | ✓ System |
| Profile | ✓ | ✓ | ✓ |

---

## Quick Start Guide

### Test Normal Patient Flow:
```bash
1. Login: priya@example.com / demo123
2. Upload: patient2-priya-singh-report.txt
3. View: Normal health dashboard
4. Result: All green indicators
```

### Test At-Risk Patient Flow:
```bash
1. Login: rajesh@example.com / demo123
2. Upload: patient1-rajesh-kumar-report.txt
3. View: Prediabetic warnings
4. Result: Yellow indicators, lifestyle recommendations
```

### Test High-Risk Patient Flow:
```bash
1. Login: arjun@example.com / demo123
2. Upload: patient3-arjun-mehta-report.txt
3. View: Critical health alerts
4. Result: Red indicators, urgent interventions
```

### Test Doctor Flow:
```bash
1. Login: doctor1 / doctor01
2. View: All patient consultations
3. Create: New consultation log
4. Manage: Patient appointments
```

---

## Troubleshooting

### Can't Login?
- Verify you're using correct credentials
- Check if services are running (frontend + backend)
- Clear browser cache and try again

### Upload Not Working?
- Ensure you're logged in as a Patient
- Check file size (should be < 10MB)
- Verify file format (.txt files)

### Features Missing?
- Check your role (Patient vs Doctor)
- Some features are role-specific
- Refresh the page

---

## Security Note

These are **demo accounts** for testing only. In production:
- Use strong passwords
- Enable two-factor authentication
- Implement proper user management
- Follow HIPAA/data protection guidelines

---

## Support

For issues or questions:
1. Check the main README.md
2. Review COMPLETE_SETUP_GUIDE.md
3. Check browser console for errors
4. Verify both services are running

---

**Last Updated:** March 6, 2026
**Version:** 1.0.0
