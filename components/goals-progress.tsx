"use client";

import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";

const goals = [
  {
    name: "Emergency Fund",
    current: 8000,
    target: 10000,
    progress: 80,
  },
  {
    name: "New Car",
    current: 5000,
    target: 20000,
    progress: 25,
  },
  {
    name: "Vacation",
    current: 2000,
    target: 5000,
    progress: 40,
  },
];

export function GoalsProgress() {
  return (
    <div className="space-y-4">
      {goals.map((goal) => (
        <div key={goal.name} className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>{goal.name}</span>
            <span>${goal.current} / ${goal.target}</span>
          </div>
          <Progress value={goal.progress} />
        </div>
      ))}
    </div>
  );
}