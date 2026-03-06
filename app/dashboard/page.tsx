"use client"

import {
  Activity,
  Calendar,
  Upload,
  MessageSquare,
  AlertCircle,
  CheckCircle,
  TrendingUp,
} from "lucide-react"
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts"
import { useApp } from "@/lib/app-context"
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

function CustomTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-3 shadow-xl">
      <p className="text-sm font-semibold text-white mb-1">{payload[0].name}</p>
      <p className="text-xs text-gray-400">
        Score: <span className="font-semibold text-white">{payload[0].value}%</span>
      </p>
    </div>
  )
}

export default function DashboardHome() {
  const { scanResult, user, appointments } = useApp()
  
  const riskLevel = scanResult?.riskLevel || null
  const confidence = scanResult?.confidence || 0

  // Create pie chart data based on scan result
  const pieData = scanResult ? [
    { name: "Health Score", value: confidence, color: "#10b981" },
    { name: "Risk Factor", value: 100 - confidence, color: "#ef4444" },
  ] : [
    { name: "No Data", value: 100, color: "#6b7280" },
  ]

  const COLORS = pieData.map(d => d.color)

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Health Dashboard</h1>
          <p className="text-gray-400 mt-1">Monitor your health and manage appointments</p>
        </div>
        {riskLevel && (
          <div className="flex items-center gap-3">
            <StatusBadge level={riskLevel} />
            <span className="text-sm text-gray-400">AI Risk Assessment</span>
          </div>
        )}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Health Score Pie Chart */}
        <div className="bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white">Health Score</h3>
            <p className="text-sm text-gray-400 mt-1">
              {scanResult ? "Based on your latest scan results" : "Upload a medical report to see your health score"}
            </p>
          </div>
          <div className="h-[320px] flex items-center justify-center">
            {scanResult ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="text-center">
                <Upload className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400 font-medium mb-2">No scan data available</p>
                <p className="text-sm text-gray-500 mb-4">Upload a medical report to generate your health score</p>
                <Link href="/dashboard/upload">
                  <Button className="bg-gradient-to-r from-blue-600 to-emerald-500 text-white">
                    Upload Report
                  </Button>
                </Link>
              </div>
            )}
          </div>
          {scanResult && (
            <div className="mt-6 p-4 rounded-lg bg-gradient-to-br from-blue-500/10 to-emerald-500/10 border border-blue-500/30">
              <div className="flex items-start gap-3">
                {riskLevel === "Normal" ? (
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                )}
                <div>
                  <p className="text-sm font-semibold text-white mb-1">AI Assessment</p>
                  <p className="text-xs text-gray-300">
                    {riskLevel === "Normal" && "Your health metrics are within normal range. Keep up the good work!"}
                    {riskLevel === "Prediabetic" && "Your results show prediabetic indicators. Consider lifestyle modifications and consult your doctor."}
                    {riskLevel === "Diabetic" && "Your results indicate diabetic range. Please consult with a healthcare professional for proper management."}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Upcoming Appointments */}
        <div className="bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-500" />
              Appointment Reminders
            </h3>
            <Link href="/dashboard/appointments" className="text-sm text-blue-400 hover:text-blue-300 font-medium">
              Manage →
            </Link>
          </div>
          {appointments.filter((a) => a.status === "scheduled").length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="w-12 h-12 text-gray-600 mx-auto mb-3" />
              <p className="text-sm text-gray-400 mb-4">No upcoming appointments</p>
              <Link href="/dashboard/appointments">
                <Button className="bg-gradient-to-r from-blue-600 to-emerald-500 text-white">
                  Set Reminder
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {appointments
                .filter((a) => a.status === "scheduled")
                .slice(0, 4)
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
      </div>

      {/* Quick Actions */}
      <div className="bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <Activity className="w-5 h-5 text-emerald-500" />
            Quick Actions
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/dashboard/upload">
            <div className="flex items-center gap-4 p-4 rounded-lg border border-[#2a2a2a] hover:border-emerald-500/50 hover:bg-[#222] transition-all cursor-pointer">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <Upload className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Upload Report</p>
                <p className="text-xs text-gray-400 mt-1">Get AI analysis</p>
              </div>
            </div>
          </Link>
          <Link href="/dashboard/chat">
            <div className="flex items-center gap-4 p-4 rounded-lg border border-[#2a2a2a] hover:border-blue-500/50 hover:bg-[#222] transition-all cursor-pointer">
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">AI Consultant</p>
                <p className="text-xs text-gray-400 mt-1">Get health advice</p>
              </div>
            </div>
          </Link>
          <Link href="/dashboard/appointments">
            <div className="flex items-center gap-4 p-4 rounded-lg border border-[#2a2a2a] hover:border-amber-500/50 hover:bg-[#222] transition-all cursor-pointer">
              <div className="w-12 h-12 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Set Reminder</p>
                <p className="text-xs text-gray-400 mt-1">Manage appointments</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Health Recommendations */}
      {scanResult && scanResult.recommendations && scanResult.recommendations.length > 0 && (
        <div className="bg-gradient-to-br from-blue-500/10 to-emerald-500/10 rounded-lg border border-blue-500/30 p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-400" />
            Personalized Recommendations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {scanResult.recommendations.map((rec, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a]"
              >
                <div className="w-2 h-2 rounded-full shrink-0 mt-1.5 bg-blue-400" />
                <p className="text-sm text-gray-300">{rec}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
