import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Overview } from "@/components/overview";
import { RecentTransactions } from "@/components/recent-transactions";
import { SpendingByCategory } from "@/components/spending-by-category";
import { MonthlyBudget } from "@/components/monthly-budget";
import { GoalsProgress } from "@/components/goals-progress";
import Link from "next/link";
import { PlusCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="container pt-20">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's your financial overview.
          </p>
        </div>
        <Link href="/accounts/connect">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Connect Bank
          </Button>
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-6">
          <h3 className="font-semibold">Total Balance</h3>
          <p className="text-2xl font-bold">$12,450.80</p>
          <p className="text-xs text-muted-foreground">+2.5% from last month</p>
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold">Monthly Income</h3>
          <p className="text-2xl font-bold">$4,850.00</p>
          <p className="text-xs text-muted-foreground">Regular salary</p>
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold">Monthly Spending</h3>
          <p className="text-2xl font-bold">$2,865.20</p>
          <p className="text-xs text-muted-foreground">-12% from last month</p>
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold">Savings Rate</h3>
          <p className="text-2xl font-bold">41%</p>
          <p className="text-xs text-muted-foreground">On track to goals</p>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-4">
        <Card className="col-span-4 p-6">
          <h3 className="font-semibold mb-4">Spending Overview</h3>
          <Overview />
        </Card>
        <Card className="col-span-3 p-6">
          <h3 className="font-semibold mb-4">Spending by Category</h3>
          <SpendingByCategory />
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Monthly Budget</h3>
          <MonthlyBudget />
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Goals Progress</h3>
          <GoalsProgress />
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Recent Transactions</h3>
          <RecentTransactions />
        </Card>
      </div>
    </div>
  );
}