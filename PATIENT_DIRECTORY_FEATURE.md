# 🏥 Patient Directory Feature

## Overview

A new patient management system has been added that allows doctors to:
1. View all patients who have uploaded medical reports
2. Click on any patient to view their specific health dashboard
3. Track patient information extracted from uploaded PDFs

---

## How It Works

### For Patients:
When a patient uploads a medical report:
- The system extracts patient information from the PDF (name, ID, age, gender)
- Creates a patient record with their scan results
- Stores this in the patient directory

### For Doctors:
Doctors can now:
- Access the "Patients" page from the sidebar
- See a list of all patients with their health data
- Click on any patient to view their detailed dashboard
- See patient-specific charts and metrics
- Return to the overview with "Back to Overview" button

---

## New Features Added

### 1. Patient Records System
**File:** `lib/app-context.tsx`

Added new data structure:
```typescript
export interface PatientRecord {
  id: string
  patientName: string
  patientId: string
  age: number
  gender: string
  lastScanDate: string
  riskLevel: "Normal" | "Prediabetic" | "Diabetic"
  scanResult: ScanResult
  addedBy: string
  addedDate: string
}
```

New context functions:
- `patientRecords` - Array of all patient records
- `addPatientRecord()` - Add/update a patient record
- `selectedPatient` - Currently selected patient (for doctors)
- `setSelectedPatient()` - Select a patient to view

---

### 2. Patient Information Extraction
**File:** `app/dashboard/upload/page.tsx`

When uploading a PDF, the system now:
- Reads the file content
- Extracts patient information:
  - Patient Name (from filename or content)
  - Patient ID (from content)
  - Age (from content)
  - Gender (from content)
- Creates a patient record automatically
- Updates existing records if patient already exists

Example extraction:
```
Filename: patient1-rajesh-kumar-report.txt
→ Extracts: "Rajesh Kumar"

Content: "Patient Name: Rajesh Kumar"
→ Extracts: "Rajesh Kumar"

Content: "Patient ID: GV-2026-4821"
→ Extracts: "GV-2026-4821"
```

---

### 3. Patients Directory Page
**File:** `app/dashboard/patients/page.tsx`

New page features:
- **Stats Cards**: Show counts by risk level (All, Normal, Prediabetic, Diabetic)
- **Search**: Search by patient name or ID
- **Filter**: Filter by risk level
- **Patient Table**: Shows all patients with:
  - Patient avatar and name
  - Patient ID
  - Risk level badge
  - Average glucose
  - Last scan date
  - "View Dashboard" button

Clicking on any patient:
- Sets them as the selected patient
- Redirects to dashboard
- Shows their specific health data

---

### 4. Updated Navigation
**File:** `app/dashboard/layout.tsx`

Added "Patients" link to sidebar:
- Only visible to Doctors and Admins
- Shows between "Dashboard" and other options
- Uses Users icon

Role-based navigation:
- **Patients see**: Dashboard, Upload & Scan, AI Consultant, Appointments, Alerts, Profile
- **Doctors see**: Dashboard, Patients, Consultations, Appointments, Alerts, Profile

---

### 5. Enhanced Dashboard
**File:** `app/dashboard/page.tsx`

Dashboard now supports two modes:

**Doctor viewing specific patient:**
- Shows patient info banner at top
- Displays patient's name in title
- Shows patient's health metrics
- Shows patient's charts
- Shows "Back to Overview" button
- Displays AI recommendations for that patient

**Doctor overview (no patient selected):**
- Shows all patients summary
- Active patients count (clickable → goes to Patients page)
- Pending consultations
- Upcoming appointments
- High-risk patients count

---

## Usage Guide

### Step 1: Upload Patient Report
1. Login as any user (patient or doctor)
2. Go to "Upload & Scan"
3. Upload a medical report (e.g., `patient1-rajesh-kumar-report.txt`)
4. System extracts patient info and creates record

### Step 2: View Patients (Doctors Only)
1. Login as doctor (`doctor1` / `doctor01`)
2. Click "Patients" in sidebar
3. See list of all patients

### Step 3: View Patient Dashboard
1. Click on any patient in the list
2. OR click "View Dashboard" button
3. See patient-specific health data
4. View their charts and metrics
5. Read AI recommendations

### Step 4: Return to Overview
1. Click "Back to Overview" button
2. Returns to doctor's main dashboard

---

## Demo Workflow

### Test with Demo Files:

**1. Upload Priya Singh (Normal)**
```bash
File: demo-files/patient2-priya-singh-report.txt
Result: Patient "Priya Singh" added to directory
Risk: Normal
```

**2. Upload Rajesh Kumar (Prediabetic)**
```bash
File: demo-files/patient1-rajesh-kumar-report.txt
Result: Patient "Rajesh Kumar" added to directory
Risk: Prediabetic
```

**3. Upload Arjun Mehta (Diabetic)**
```bash
File: demo-files/patient3-arjun-mehta-report.txt
Result: Patient "Arjun Mehta" added to directory
Risk: Diabetic
```

**4. View as Doctor**
```bash
1. Login: doctor1 / doctor01
2. Click: Patients
3. See: All 3 patients listed
4. Click: Any patient name
5. View: Their specific dashboard
```

---

## Key Benefits

### For Doctors:
✅ Centralized patient directory
✅ Quick access to any patient's data
✅ Easy comparison between patients
✅ Filter by risk level
✅ Search functionality
✅ One-click access to patient dashboards

### For Patients:
✅ Automatic record creation
✅ No manual data entry
✅ Information extracted from PDFs
✅ Seamless experience

### For System:
✅ Automatic patient tracking
✅ Data persistence across sessions
✅ Easy patient management
✅ Scalable architecture

---

## Technical Details

### Data Flow:
```
1. User uploads PDF
   ↓
2. System reads file content
   ↓
3. Extract patient info (name, ID, age, gender)
   ↓
4. Create/update patient record
   ↓
5. Store in patientRecords array
   ↓
6. Doctor can view in Patients page
   ↓
7. Click patient → setSelectedPatient()
   ↓
8. Dashboard shows patient-specific data
```

### State Management:
- `patientRecords`: Array of all patients
- `selectedPatient`: Currently viewed patient (null = overview)
- `addPatientRecord()`: Adds or updates patient
- `setSelectedPatient()`: Switches between patients

### Navigation:
- Patients page: `/dashboard/patients`
- Dashboard with patient: `/dashboard` (with selectedPatient set)
- Back to overview: Clear selectedPatient

---

## Screenshots Description

### Patients Directory Page:
- Stats cards showing patient counts by risk level
- Search bar for finding patients
- Filter buttons (All, Normal, Prediabetic, Diabetic)
- Table with patient information
- Clickable rows to view patient details

### Patient-Specific Dashboard:
- Blue banner showing patient info
- "Back to Overview" button
- Patient's name in title
- All health metrics for that patient
- Charts showing patient's data
- AI recommendations for that patient

---

## Future Enhancements

Possible improvements:
- Add patient notes/comments
- Track consultation history per patient
- Export patient reports
- Patient comparison view
- Advanced filtering options
- Patient groups/categories
- Email notifications
- Appointment scheduling per patient

---

## Files Modified

1. `lib/app-context.tsx` - Added patient records system
2. `app/dashboard/upload/page.tsx` - Added patient info extraction
3. `app/dashboard/patients/page.tsx` - NEW: Patient directory page
4. `app/dashboard/layout.tsx` - Added Patients navigation link
5. `app/dashboard/page.tsx` - Added patient-specific dashboard view

---

## Testing

### Test Scenario 1: Patient Upload
```
1. Login as patient
2. Upload medical report
3. Check patient record created
4. Verify info extracted correctly
```

### Test Scenario 2: Doctor View
```
1. Login as doctor
2. Go to Patients page
3. See all uploaded patients
4. Click on a patient
5. View their dashboard
6. Click "Back to Overview"
```

### Test Scenario 3: Search & Filter
```
1. Login as doctor
2. Go to Patients page
3. Search for patient name
4. Filter by risk level
5. Verify results update
```

---

**Last Updated:** March 6, 2026
**Version:** 2.1.0
**Status:** ✅ Fully Implemented

---

## Quick Start

**To test this feature:**
```bash
1. Upload all 3 demo reports (as any user)
2. Login as doctor: doctor1 / doctor01
3. Click "Patients" in sidebar
4. Click on any patient name
5. View their specific dashboard!
```

**That's it! The patient directory is ready to use! 🎉**
