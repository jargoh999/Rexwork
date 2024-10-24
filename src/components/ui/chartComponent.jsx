"use client";
import { Activity, TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "project completion rate";


const chartData = [];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let currentDate = new Date();

for (let i = 0; i < 7; i++) {
  let month = months[currentDate.getMonth()];
  let completedProject = Math.floor(Math.random() * 100) + 50; // Random value between 50 and 149

  chartData.push({
    month,
    completed_project: completedProject,
  });

  currentDate.setMonth(currentDate.getMonth() + 1);
}



const chartConfig = {
  project_completed: {
    label: "completed_project",
    color: "hsl(var(--chart-1))",
    icon: Activity,
  },
};

export default function Component() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Rexwork's Project Completion Chart</CardTitle>
        <CardDescription>
          Showing Project completion rate for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3).toUpperCase()}
            />
            <ChartTooltip
              cursor={true}
              content={<ChartTooltipContent hideLabel />}
            />
            <Area
              dataKey="completed_project"
              type="step"
              fill="var(--color-project_completed)"
              fillOpacity={0.5}
              stroke="var(--color-project_completed)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
