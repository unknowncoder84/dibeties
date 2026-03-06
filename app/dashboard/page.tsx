"use client"

import {
  Activity,
  Heart,
  Droplets,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Calendar,
  Weight,
  Gauge,
  Upload,
  MessageSquare,
} from "lucide-react"
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ComposedChart,
} from "recharts"
import { useApp, DEMO_READINGS } from "@/lib/app-context"
import Link from "next/link"
import { Button } from "@/components/ui/button"

function StatusBadge({ level }: { level: string }) {
  const config: Record<string, { bg: string; text: string; label: string }> = {
    Normal: { bg: "bg-emerald-500/20", text: "text-emerald-400", label: "Normal" },
    Prediabetic: { bg: "bg-amber-500/20", text: "text-amber-400", label: "Prediabetic" },
    Diabetic: { bg: "bg-red-500/20", text: "text-red-400", label: "Diabetic" },
  }
  const c = config[level] || config.Normal
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${c.bg} ${c.text}`}>
      {c.label}
    </span>
  )
}

function MetricCard({
  icon: Icon,
  label,
  value,
  unit,
  trend,
  trendValue,
  color,
  bgColor,
}: {
  icon: React.ElementType
  label: string
  value: string | number
  unit: string
  trend?: "up" | "down"
  trendValue?: string
  color: string
  bgColor: string
}) {
  return (
    <div className="bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] p-6 hover:shadow-xl hover:border-blue-500/50 transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-lg ${bgColor} flex items-center justify-center`}>
          <Icon className="w-6 h-6" style={{ color }} />
        </div>
        {trend && trendValue && (
          <div className={`flex items-center gap-1 text-xs font-medium ${trend === "up" ? "text-emerald-400" : "text-red-400"}`}>
            {trend === "up" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            {trendValue}
          </div>
        )}
      </div>
      <p className="text-3xl font-bold text-white">
        {value}
        <span className="text-base font-normal text-gray-400 ml-1">{unit}</span>
      </p>
      <p className="text-sm text-gray-400 mt-1">{label}</p>
    </div>
  )
}

function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-3 shadow-xl">
      <p className="text-sm font-semibold text-white mb-2">{label}</p>
      {payload.map((p: any) => (
        <p key={p.name} className="text-xs" style={{ color: p.color }}>
          {p.name}: <span className="font-semibold">{p.value}</span>
        </p>
      ))}
    </div>
  )
}

export default function DashboardHome() {
  const { scanResult, user, appointments } = useApp()
  
  const readings = scanResult?.readings || DEMO_READINGS
  const latestReading = readings[readings.length - 1]
  const riskLevel = scanResult?.riskLevel || "Prediabetic"

  // Calculate trends
  const glucoseTrend = readings.length > 1 
    ? ((latestReading.glucose - readings[readings.length - 2].glucose) / readings[readings.length - 2].glucose * 100).toFixed(1)
    : "0"
  const bmiTrend = readings.length > 1 && latestReading.bmi && readings[readings.length - 2].bmi
    ? (((latestReading.bmi - readings[readings.length - 2].bmi!) / readings[readings.length - 2].bmi!) * 100).toFixed(1)
    : "0"

  // User health dashboard view
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Health Dashboard</h1>
          <p className="text-gray-400 mt-1">Real-time monitoring of your health metrics</p>
        </div>
        <div className="flex items-center gap-3">
          <StatusBadge level={riskLevel} />
          <span className="text-sm text-gray-400">AI Risk Assessment</span>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          icon={Droplets}
          label="Blood Glucose"
          value={latestReading.glucose}
          unit="mg/dL"
          trend={parseFloat(glucoseTrend) < 0 ? "down" : "up"}
          trendValue={`${Math.abs(parseFloat(glucoseTrend))}%`}
          color="#3b82f6"
          bgColor="bg-blue-500/20"
        />
        <MetricCard
          icon={Weight}
          label="BMI Index"
          value={latestReading.bmi?.toFixed(1) || "N/A"}
          unit={latestReading.bmi ? "kg/m²" : ""}
          trend={parseFloat(bmiTrend) < 0 ? "down" : "up"}
          trendValue={`${Math.abs(parseFloat(bmiTrend))}%`}
          color="#10b981"
          bgColor="bg-emerald-500/20"
        />
        <MetricCard
          icon={Heart}
          label="Heart Rate"
          value={latestReading.heartRate || "N/A"}
          unit={latestReading.heartRate ? "BPM" : ""}
          color="#f59e0b"
          bgColor="bg-amber-500/20"
        />
        <MetricCard
          icon={Gauge}
          label="Blood Pressure"
          value={`${latestReading.systolic}/${latestReading.diastolic}`}
          unit="mmHg"
          color="#ef4444"
          bgColor="bg-red-500/20"
        />
      </div>

      {/* Main Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Glucose Trend with Reference Lines */}
        <div className="bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white">Glucose Monitoring</h3>
            <p className="text-sm text-gray-400 mt-1">Blood glucose levels with target ranges</p>
          </div>
          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={readings}>
                <defs>
                  <linearGradient id="glucoseGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
                <XAxis dataKey="date" tick={{ fill: "#9ca3af", fontSize: 12 }} stroke="#2a2a2a" />
                <YAxis tick={{ fill: "#9ca3af", fontSize: 12 }} stroke="#2a2a2a" domain={[70, 200]} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: "12px" }} />
                <Area type="monotone" dataKey={() => 140} fill="#10b98120" stroke="none" name="Target Max" />
                <Area type="monotone" dataKey={() => 100} fill="#00000000" stroke="none" name="Target Min" />
                <Line type="monotone" dataKey={() => 140} stroke="#10b981" strokeWidth={1} strokeDasharray="5 5" name="Upper Limit" dot={false} />
                <Line type="monotone" dataKey={() => 100} stroke="#10b981" strokeWidth={1} strokeDasharray="5 5" name="Lower Limit" dot={false} />
                <Area
                  type="monotone"
                  dataKey="glucose"
                  name="Glucose"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  fill="url(#glucoseGrad)"
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Heart Rate Variability */}
        <div className="bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white">Heart Rate Variability</h3>
            <p className="text-sm text-gray-400 mt-1">Resting heart rate measurements</p>
          </div>
          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={readings}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
                <XAxis dataKey="date" tick={{ fill: "#9ca3af", fontSize: 12 }} stroke="#2a2a2a" />
                <YAxis tick={{ fill: "#9ca3af", fontSize: 12 }} stroke="#2a2a2a" domain={[60, 100]} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: "12px" }} />
                <Line
                  type="monotone"
                  dataKey="heartRate"
                  name="Heart Rate (BPM)"
                  stroke="#f59e0b"
                  strokeWidth={3}
                  dot={{ fill: "#f59e0b", r: 4 }}
                  activeDot={{ r: 6, fill: "#f59e0b" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Secondary Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* BMI Tracking */}
        <div className="bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white">BMI Tracking</h3>
            <p className="text-sm text-gray-400 mt-1">Body Mass Index progression</p>
          </div>
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={readings}>
                <defs>
                  <linearGradient id="bmiGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="#10b981" stopOpacity={0.3} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
                <XAxis dataKey="date" tick={{ fill: "#9ca3af", fontSize: 12 }} stroke="#2a2a2a" />
                <YAxis tick={{ fill: "#9ca3af", fontSize: 12 }} stroke="#2a2a2a" domain={[20, 30]} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: "12px" }} />
                <Bar dataKey="bmi" name="BMI (kg/m²)" fill="url(#bmiGrad)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Blood Pressure */}
        <div className="bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white">Blood Pressure</h3>
            <p className="text-sm text-gray-400 mt-1">Systolic and diastolic readings</p>
          </div>
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={readings}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
                <XAxis dataKey="date" tick={{ fill: "#9ca3af", fontSize: 12 }} stroke="#2a2a2a" />
                <YAxis tick={{ fill: "#9ca3af", fontSize: 12 }} stroke="#2a2a2a" domain={[60, 150]} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: "12px" }} />
                <Line type="monotone" dataKey="systolic" name="Systolic" stroke="#ef4444" strokeWidth={3} dot={{ fill: "#ef4444", r: 3 }} />
                <Line type="monotone" dataKey="diastolic" name="Diastolic" stroke="#f59e0b" strokeWidth={3} dot={{ fill: "#f59e0b", r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Appointments and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-500" />
              Upcoming Appointments
            </h3>
            <Link href="/dashboard/appointments" className="text-sm text-blue-400 hover:text-blue-300 font-medium">
              View All →
            </Link>
          </div>
          {appointments.filter((a) => a.status === "scheduled").length === 0 ? (
            <div className="text-center py-8">
              <Calendar className="w-12 h-12 text-gray-600 mx-auto mb-3" />
              <p className="text-sm text-gray-400 mb-4">No upcoming appointments</p>
              <Link href="/dashboard/appointments">
                <Button className="bg-gradient-to-r from-blue-600 to-emerald-500 text-white">
                  Book Appointment
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {appointments
                .filter((a) => a.status === "scheduled")
                .slice(0, 3)
                .map((a) => (
                  <div key={a.id} className="flex items-center gap-4 p-4 rounded-lg border border-[#2a2a2a] hover:border-blue-500/50 hover:bg-[#222] transition-all">
                    <div className="w-14 h-14 rounded-lg bg-blue-500/20 flex flex-col items-center justify-center">
                      <span className="text-lg font-bold text-blue-400">{a.date.split("-")[2]}</span>
                      <span className="text-[10px] text-gray-400 uppercase font-medium">
                        {new Date(a.date + "T00:00:00").toLocaleDateString("en-US", { month: "short" })}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-white">{a.doctorName}</p>
                      <p className="text-xs text-gray-400 mt-1">{a.time} • {a.notes || a.type}</p>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>

        <div className="bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Activity className="w-5 h-5 text-emerald-500" />
              Quick Actions
            </h3>
          </div>
          <div className="space-y-3">
            <Link href="/dashboard/upload">
              <div className="flex items-center gap-4 p-4 rounded-lg border border-[#2a2a2a] hover:border-emerald-500/50 hover:bg-[#222] transition-all cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <Upload className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Upload Medical Report</p>
                  <p className="text-xs text-gray-400 mt-1">Get AI analysis instantly</p>
                </div>
              </div>
            </Link>
            <Link href="/dashboard/chat">
              <div className="flex items-center gap-4 p-4 rounded-lg border border-[#2a2a2a] hover:border-blue-500/50 hover:bg-[#222] transition-all cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Ask AI Consultant</p>
                  <p className="text-xs text-gray-400 mt-1">Get personalized health advice</p>
                </div>
              </div>
            </Link>
            <Link href="/dashboard/appointments">
              <div className="flex items-center gap-4 p-4 rounded-lg border border-[#2a2a2a] hover:border-amber-500/50 hover:bg-[#222] transition-all cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-amber-500/20 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Book Appointment</p>
                  <p className="text-xs text-gray-400 mt-1">Schedule with a doctor</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-gradient-to-br from-blue-500/10 to-emerald-500/10 rounded-lg border border-blue-500/30 p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Activity className="w-5 h-5 text-blue-400" />
          AI Health Insights
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { text: "Glucose levels showing improving trend over the last 2 weeks", type: "positive" },
            { text: "BMI slightly elevated - consider increasing daily activity", type: "warning" },
            { text: "Heart rate variability is within normal range", type: "positive" },
            { text: "Blood pressure readings suggest monitoring for hypertension risk", type: "warning" },
          ].map((insight, i) => (
            <div
              key={i}
              className={`flex items-start gap-3 p-4 rounded-lg ${
                insight.type === "positive" ? "bg-emerald-500/10 border border-emerald-500/30" : "bg-amber-500/10 border border-amber-500/30"
              }`}
            >
              <div
                className="w-2 h-2 rounded-full shrink-0 mt-1.5"
                style={{ background: insight.type === "positive" ? "#10b981" : "#f59e0b" }}
              />
              <p className="text-sm text-gray-300">{insight.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
