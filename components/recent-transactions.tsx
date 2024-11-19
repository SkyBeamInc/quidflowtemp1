"use client";

import { ScrollArea } from "@/components/ui/scroll-area";

const transactions = [
  {
    id: 1,
    description: "Grocery Store",
    amount: -82.55,
    date: "2024-03-20",
    category: "Food",
  },
  {
    id: 2,
    description: "Monthly Salary",
    amount: 4850.00,
    date: "2024-03-15",
    category: "Income",
  },
  {
    id: 3,
    description: "Netflix Subscription",
    amount: -15.99,
    date: "2024-03-14",
    category: "Entertainment",
  },
  {
    id: 4,
    description: "Gas Station",
    amount: -45.30,
    date: "2024-03-13",
    category: "Transport",
  },
  {
    id: 5,
    description: "Restaurant",
    amount: -65.20,
    date: "2024-03-12",
    category: "Food",
  },
];

export function RecentTransactions() {
  return (
    <ScrollArea className="h-[300px]">
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50"
          >
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                {transaction.description}
              </p>
              <p className="text-xs text-muted-foreground">
                {transaction.date} • {transaction.category}
              </p>
            </div>
            <div className={`text-sm font-medium ${
              transaction.amount > 0 ? "text-green-600" : ""
            }`}>
              {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}