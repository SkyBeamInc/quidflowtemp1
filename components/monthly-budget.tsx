"use client";

import { Progress } from "@/components/ui/progress";

const budgets = [
  { category: "Housing", spent: 1200, limit: 1500, progress: 80 },
  { category: "Food", spent: 500, limit: 600, progress: 83 },
  { category: "Transport", spent: 300, limit: 400, progress: 75 },
  { category: "Entertainment", spent: 200, limit: 300, progress: 67 },
];

export function MonthlyBudget() {
  return (
    <div className="space-y-4">
      {budgets.map((budget) => (
        <div key={budget.category} className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>{budget.category}</span>
            <span>${budget.spent} / ${budget.limit}</span>
          </div>
          <Progress value={budget.progress} />
        </div>
      ))}
    </div>
  );
}