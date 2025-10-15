"use client"

import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"

const dailyData = [
  { day: "Mon", minutes: 120 },
  { day: "Tue", minutes: 135 },
  { day: "Wed", minutes: 98 },
  { day: "Thu", minutes: 142 },
  { day: "Fri", minutes: 110 },
  { day: "Sat", minutes: 95 },
  { day: "Sun", minutes: 80 },
]

const appData = [
  { app: "Browser", minutes: 62 },
  { app: "Video", minutes: 38 },
  { app: "Social", minutes: 45 },
  { app: "Mail", minutes: 20 },
  { app: "Docs", minutes: 28 },
]

export function DashboardWidgets() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Screen Time (Daily)</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              minutes: { label: "Minutes", color: "hsl(var(--primary))" },
            }}
            className="w-full h-64"
          >
            <AreaChart data={dailyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip content={<ChartTooltipContent />} />
              <Legend />
              <Area
                type="monotone"
                dataKey="minutes"
                stroke="var(--color-minutes)"
                fill="var(--color-minutes)"
                fillOpacity={0.15}
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Top Apps (Today)</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              minutes: { label: "Minutes", color: "hsl(var(--accent))" },
            }}
            className="w-full h-64"
          >
            <BarChart data={appData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="app" />
              <YAxis />
              <Tooltip content={<ChartTooltipContent />} />
              <Bar dataKey="minutes" fill="var(--color-minutes)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
