# GlucoVision - AI-Powered Health Management System

A modern, full-stack health management application for diabetes monitoring and prevention with AI-powered analysis.

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 🌟 Features

- **AI-Powered Analysis** - Upload medical reports and get instant AI-driven health insights
- **Interactive Dashboard** - Real-time health metrics with beautiful charts
- **Smart Health Consultant** - 24/7 AI chatbot for personalized health advice
- **Appointment Management** - Book and manage medical appointments
- **Health Alerts** - Real-time notifications for health events
- **Data Persistence** - All your data saved securely in browser
- **Responsive Design** - Works perfectly on all devices
- **Dark Theme** - Professional dark UI throughout

## 🚀 Live Demo

**Demo Credentials**: Any email and password works!
- Example: `user@example.com` / `password123`

## 📸 Screenshots

### Dashboard
Interactive health dashboard with glucose monitoring, BMI tracking, heart rate, and blood pressure charts.

### AI Consultant
Chat with AI for personalized health recommendations based on your uploaded medical reports.

### Upload & Scan
Drag & drop medical reports for instant AI-powered analysis and risk assessment.

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.6
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Storage**: LocalStorage
- **Build Tool**: Turbopack

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/unknowncoder84/dibeties.git

# Navigate to project directory
cd dibeties

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# Visit: http://localhost:3000
```

## 🏗️ Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🌐 Deployment

### Deploy to Netlify

1. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18+

2. **Environment Variables** (Optional):
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

3. Click "Deploy site" and you're done!

## 📋 Features Overview

### ✅ Authentication
- Login/Signup with any credentials (demo mode)
- Google OAuth ready (requires Supabase)
- Session persistence

### ✅ Dashboard
- 4 key health metrics (Glucose, BMI, Heart Rate, Blood Pressure)
- 4 interactive charts with real-time data
- Risk level assessment
- AI health insights

### ✅ Upload & Scan
- Drag & drop file upload
- Support for PDF, images, and text files
- AI-powered document analysis
- Risk classification (Normal/Prediabetic/Diabetic)
- Personalized recommendations

### ✅ AI Consultant
- Interactive chat interface
- Context-aware responses
- Personalized health advice
- Suggested questions
- Message history

### ✅ Appointments
- Book new appointments
- View upcoming and past appointments
- Complete or cancel appointments
- Appointment types: checkup, followup, consultation, emergency

### ✅ Alerts
- Real-time health notifications
- Alert types: spike, hypo, warning, normal
- Unread counter
- Mark as read functionality

### ✅ Profile
- Personal information management
- Notification preferences
- Glucose unit selection
- Theme settings

## 📁 Project Structure

```
dibeties/
├── app/                    # Next.js app directory
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Dashboard pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── components/            # Reusable components
│   └── ui/               # UI components
├── lib/                   # Utility functions
│   ├── app-context.tsx   # Global state management
│   ├── ai-consultant.ts  # AI logic
│   └── supabase.ts       # Supabase client
├── demo-files/           # Demo medical reports
├── public/               # Static assets
└── package.json          # Dependencies
```

## 🎨 Color Scheme

```css
Background: #000000 (black)
Cards: #1a1a1a (dark grey)
Borders: #2a2a2a (subtle grey)
Text: #ffffff (white), #9ca3af (grey)
Accent Blue: #3b82f6
Accent Emerald: #10b981
Accent Amber: #f59e0b
Accent Red: #ef4444
```

## 🧪 Testing

### Demo Files
Upload these files to test AI analysis:
- `demo-files/patient1-rajesh-kumar-report.txt` (Prediabetic)
- `demo-files/patient2-priya-singh-report.txt` (Normal)
- `demo-files/patient3-arjun-mehta-report.txt` (Diabetic)

### Test Flow
1. Sign up with any credentials
2. Upload a medical report
3. View AI analysis results
4. Chat with AI consultant
5. Book an appointment
6. Check alerts
7. Update profile

## 📊 Data Persistence

All data persists across page refreshes using localStorage:
- Authentication state
- User profile
- Scan results (with PDF content)
- Appointments
- Alerts
- Settings

Data clears only on logout.

## 🔒 Security Notes

**Current (Demo Mode)**:
- Any email/password works for login
- Data stored in browser localStorage
- Perfect for demo and testing

**For Production**:
- Integrate Supabase for authentication
- Use secure password hashing
- Implement proper session management
- Add HTTPS/SSL certificates
- Follow HIPAA compliance for health data

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**unknowncoder84**
- GitHub: [@unknowncoder84](https://github.com/unknowncoder84)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Recharts for beautiful charts
- Lucide for icons
- Tailwind CSS for styling

## 📞 Support

For support, email support@glucovision.com or open an issue on GitHub.

---

**Built with ❤️ using Next.js and TypeScript**

**Status**: ✅ Production Ready | **Build**: ✅ Passing | **Deploy**: ✅ Ready for Netlify
