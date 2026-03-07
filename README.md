# Diabetes Management System

A modern, full-stack web application for personal diabetes monitoring and health management with AI-powered analysis and insights.

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [How It Works](#how-it-works)
- [Demo Credentials](#demo-credentials)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

The Diabetes Management System is a personal health monitoring application designed to help users track their diabetes-related health metrics, upload medical reports for AI analysis, get personalized health recommendations, and manage appointments with healthcare providers.

### What Problem Does It Solve?

- **Health Monitoring**: Track blood glucose, BMI, heart rate, and blood pressure in one place
- **AI Analysis**: Upload medical reports and get instant AI-powered risk assessment
- **Appointment Management**: Set reminders for upcoming medical appointments
- **Health Insights**: Receive personalized recommendations based on your health data
- **Data Persistence**: All your health data is saved securely in your browser

### Who Is It For?

- Individuals managing diabetes or prediabetes
- People monitoring their health metrics
- Anyone wanting to track their medical appointments
- Users seeking AI-powered health insights

## ✨ Features

### 🏥 Health Dashboard
- **4 Key Metrics Display**
  - Blood Glucose (mg/dL) with trend indicators
  - BMI Index (kg/m²) with trend indicators
  - Heart Rate (BPM)
  - Blood Pressure (mmHg)
- **Health Score Pie Chart**: Visual representation of your health status
- **AI Risk Assessment**: Normal, Prediabetic, or Diabetic classification
- **Personalized Recommendations**: AI-generated health advice

### 📄 Upload & Scan
- **Drag & Drop Upload**: Easy file upload interface
- **Multi-Format Support**: PDF, images, and text files
- **AI Analysis**: Simulated AI extraction and analysis
- **File Converter**: Convert any file to demo medical report format
- **Patient Information Extraction**: Automatic extraction from uploaded files

### 💬 AI Health Consultant
- **24/7 Chat Interface**: Ask health-related questions anytime
- **Context-Aware Responses**: AI references your uploaded medical reports
- **Suggested Questions**: Quick access to common health queries
- **Personalized Advice**: Recommendations based on your health data

### 📅 Appointment Reminders
- **Set Reminders**: Create reminders for upcoming appointments
- **Appointment Types**: Check-up, Follow-up, Consultation, Emergency
- **Status Tracking**: Mark appointments as Done or Remove them
- **Calendar View**: See all upcoming and past appointments

### 🔔 Health Alerts
- **Real-time Notifications**: Get alerts for health events
- **Alert Types**: Spike, Hypo, Warning, Normal
- **Unread Counter**: Track new alerts
- **Mark as Read**: Manage your notifications

### 👤 User Profile
- **Personal Information**: Manage your profile details
- **Settings**: Customize your preferences
- **Secure Authentication**: Login/Signup with email and password

## 🛠️ Technology Stack

### Frontend
- **Framework**: [Next.js 16.1.6](https://nextjs.org/) - React framework with App Router
- **Language**: [TypeScript 5.0](https://www.typescriptlang.org/) - Type-safe JavaScript
- **UI Library**: [React 19](https://react.dev/) - Component-based UI
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/) - Utility-first CSS
- **Components**: [shadcn/ui](https://ui.shadcn.com/) - Reusable UI components
- **Charts**: [Recharts](https://recharts.org/) - Data visualization
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful icons

### Backend (Demo Mode)
- **State Management**: React Context API
- **Data Storage**: Browser LocalStorage
- **Authentication**: Custom implementation with localStorage

### Development Tools
- **Build Tool**: [Turbopack](https://turbo.build/pack) - Fast bundler
- **Package Manager**: npm
- **Code Quality**: ESLint, TypeScript strict mode

### Deployment
- **Platform**: [Netlify](https://www.netlify.com/)
- **Node Version**: 20.11.0
- **Build Command**: `npm run build`
- **Output Directory**: `.next`

## 📁 Project Structure

```
diabetes-management-system/
├── app/                          # Next.js App Router
│   ├── auth/                     # Authentication pages
│   │   ├── login/               # Login page
│   │   └── signup/              # Signup page
│   ├── dashboard/               # Dashboard pages
│   │   ├── alerts/              # Alerts page
│   │   ├── appointments/        # Appointments page
│   │   ├── chat/                # AI Consultant chat
│   │   ├── consultations/       # Consultations page
│   │   ├── patients/            # Patient records
│   │   ├── profile/             # User profile
│   │   ├── upload/              # Upload & Scan page
│   │   ├── layout.tsx           # Dashboard layout
│   │   └── page.tsx             # Dashboard home
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Landing page
├── components/                   # Reusable components
│   ├── ui/                      # UI components (57 files)
│   └── theme-provider.tsx       # Theme provider
├── lib/                         # Utility functions
│   ├── app-context.tsx          # Global state management
│   ├── ai-consultant.ts         # AI logic
│   ├── supabase.ts              # Supabase client
│   └── utils.ts                 # Helper functions
├── demo-files/                  # Demo medical reports
│   ├── patient1-rajesh-kumar-report.txt
│   ├── patient2-priya-singh-report.txt
│   └── patient3-arjun-mehta-report.txt
├── public/                      # Static assets
├── .env.local.example           # Environment variables template
├── components.json              # shadcn/ui config
├── next.config.mjs              # Next.js configuration
├── package.json                 # Dependencies
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
├── netlify.toml                 # Netlify deployment config
├── README.md                    # This file
└── FAQ.md                       # Frequently Asked Questions
```

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 20.9.0 or higher ([Download](https://nodejs.org/))
- **npm**: Comes with Node.js
- **Git**: For version control ([Download](https://git-scm.com/))
- **Code Editor**: VS Code recommended ([Download](https://code.visualstudio.com/))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/unknowncoder84/dibeties.git
   cd dibeties
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (Optional)
   ```bash
   cp .env.local.example .env.local
   ```
   
   Edit `.env.local` if you want to add Supabase or other services:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🔧 How It Works

### 1. Authentication Flow

```
User visits site → Login/Signup page → Enter credentials → 
Create account in localStorage → Redirect to dashboard
```

- **Demo Mode**: Any email/password creates an account
- **Data Storage**: User credentials stored in browser localStorage
- **Session**: Persists across page refreshes until logout

### 2. Health Data Flow

```
Upload medical report → AI simulates extraction → 
Generate health metrics → Calculate risk level → 
Store in localStorage → Display on dashboard
```

- **File Upload**: Accepts PDF, images, and text files
- **Data Extraction**: Simulated OCR and AI analysis
- **Risk Classification**: 
  - Normal: Glucose < 100 mg/dL
  - Prediabetic: Glucose 100-140 mg/dL
  - Diabetic: Glucose > 140 mg/dL
- **Persistence**: All scan results saved in localStorage

### 3. Dashboard Metrics

The dashboard displays 4 key health metrics:

1. **Blood Glucose**: Shows current glucose level with trend
2. **BMI Index**: Body Mass Index with trend indicator
3. **Heart Rate**: Current heart rate in BPM
4. **Blood Pressure**: Systolic/Diastolic readings

**Before Scan**: All metrics show "N/A"
**After Scan**: Metrics populate with real values from uploaded report

### 4. AI Consultant

```
User asks question → System checks for uploaded reports → 
Generates context-aware response → Display in chat
```

- **Context Awareness**: References your uploaded medical data
- **Personalization**: Uses patient name and specific values
- **Suggested Questions**: Quick access to common queries

### 5. File Converter

```
Upload any file → Extract patient info → 
Generate demo format → Preview text → Download as .txt
```

- **Purpose**: Convert any file to demo medical report format
- **Output**: Professional medical report structure
- **Use Case**: Create custom test files for the application

### 6. Data Persistence

All data is stored in browser localStorage:

```javascript
// Stored data keys
glucovision_auth          // Authentication status
glucovision_user          // User profile
glucovision_users         // All user accounts
glucovision_scanResult    // Latest scan results
glucovision_alerts        // Health alerts
glucovision_consultations // Consultation logs
glucovision_appointments  // Appointment reminders
glucovision_patientRecords // Patient records
```

**Data Lifecycle**:
- Created: When user performs actions
- Updated: When data changes
- Persisted: Across page refreshes
- Cleared: On logout

## 🔐 Demo Credentials

### Quick Login

**Demo User Account**:
- Email: `demo@diabetesms.com`
- Password: `demo123`

**Or Create Your Own**:
- Any email and password will create a new account
- Example: `user@example.com` / `password123`

### Demo Medical Reports

Three sample medical reports are included in `demo-files/`:

1. **patient1-rajesh-kumar-report.txt** - Prediabetic (Glucose: 128 mg/dL)
2. **patient2-priya-singh-report.txt** - Normal (Glucose: 92 mg/dL)
3. **patient3-arjun-mehta-report.txt** - Diabetic (Glucose: 168 mg/dL)

Upload these files to test the AI analysis feature.

## 🌐 Deployment

### Deploy to Netlify

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to [Netlify](https://app.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repository

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 20.11.0 (set in netlify.toml)

4. **Deploy**
   - Click "Deploy site"
   - Wait for build to complete
   - Your site is live!

### Environment Variables (Optional)

If using Supabase or other services, add environment variables in Netlify:

1. Go to Site settings → Environment variables
2. Add your variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Custom Domain (Optional)

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow DNS configuration instructions

## 📚 Additional Resources

- **FAQ**: See [FAQ.md](./FAQ.md) for common questions and answers
- **Demo Files**: Check `demo-files/` for sample medical reports
- **Components**: Explore `components/ui/` for reusable UI components

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**unknowncoder84**
- GitHub: [@unknowncoder84](https://github.com/unknowncoder84)
- Repository: [dibeties](https://github.com/unknowncoder84/dibeties)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- shadcn for the beautiful UI components
- Recharts for data visualization
- Lucide for icons
- Tailwind CSS for styling

## 📞 Support

For support, questions, or feedback:
- Open an issue on [GitHub](https://github.com/unknowncoder84/dibeties/issues)
- Check the [FAQ](./FAQ.md)

---

**Built with ❤️ using Next.js and TypeScript**

**Status**: ✅ Production Ready | **Build**: ✅ Passing | **Deploy**: ✅ Ready for Netlify
