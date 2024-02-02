import AnalyticCard from "@/components/analytic-card";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  HiEye,
  HiMiniEllipsisVertical,
  HiMinus,
  HiOutlineCurrencyDollar,
  HiPlus,
} from "react-icons/hi2";

export default function DashboardPage() {
  return (
    <div className="flex h-full">
      <div style={{ flex: 1 }}>
        <div className="flex flex-col gap-y-4 border-b border-dashed p-8">
          <div className="flex gap-x-2">
            <AnalyticCard
              amount={262.0}
              changes={36.81}
              icon={<HiOutlineCurrencyDollar size={24} />}
              label="Balance"
              note={
                <span className="text-sm text-gray-500">
                  You made an extra
                  <span className="text-green-700"> RM20.00</span> this month.
                </span>
              }
            />
          </div>

          <Button size="lg" className="flex items-center gap-x-1">
            <HiPlus size={20} />
            <span>Add Earning / Spending</span>
          </Button>
        </div>
        <div className="p-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-2xl">Recent Transactions</h2>
            <Button
              variant="outline"
              className="shadow-none flex items-center gap-x-2"
            >
              <span>View All</span>
              <HiEye size={20} />
            </Button>
          </div>
          <div className="flex flex-col gap-y-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-x-2 font-normal">
                  <div className="flex flex-col">
                    <p className="text-lg">Lalamove</p>
                    <span className="text-gray-500 text-sm">
                      28 January 2024
                    </span>
                  </div>
                  <div className="ml-auto flex items-center gap-x-2">
                    <p className="text-green-700 font-normal flex items-center gap-x-1">
                      <HiPlus size={18} />
                      <span className="text-xl">RM16.90</span>
                    </p>
                    <Button
                      variant="ghost"
                      className="text-accent-foreground px-0"
                    >
                      <HiMiniEllipsisVertical size={24} />
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-x-2 font-normal">
                  <div className="flex flex-col">
                    <p className="text-lg">Lunch</p>
                    <span className="text-gray-500 text-sm">
                      28 January 2024
                    </span>
                  </div>
                  <div className="ml-auto flex items-center gap-x-2">
                    <p className="text-red-700 font-normal flex items-center gap-x-1">
                      <HiMinus size={18} />
                      <span className="text-xl">RM27.80</span>
                    </p>
                    <Button
                      variant="ghost"
                      className="text-accent-foreground px-0"
                    >
                      <HiMiniEllipsisVertical size={24} />
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-x-2 font-normal">
                  <div className="flex flex-col">
                    <p className="text-lg">Car Loan</p>
                    <span className="text-gray-500 text-sm">
                      28 January 2024
                    </span>
                  </div>
                  <div className="ml-auto flex items-center gap-x-2">
                    <p className="text-red-700 font-normal flex items-center gap-x-1">
                      <HiMinus size={18} />
                      <span className="text-xl">RM458.00</span>
                    </p>
                    <Button
                      variant="ghost"
                      className="text-accent-foreground px-0"
                    >
                      <HiMiniEllipsisVertical size={24} />
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-x-2 font-normal">
                  <div className="flex flex-col">
                    <p className="text-lg">Lalamove</p>
                    <span className="text-gray-500 text-sm">
                      27 January 2024
                    </span>
                  </div>
                  <div className="ml-auto flex items-center gap-x-2">
                    <p className="text-green-700 font-normal flex items-center gap-x-1">
                      <HiPlus size={18} />
                      <span className="text-xl">RM108.00</span>
                    </p>
                    <Button
                      variant="ghost"
                      className="text-accent-foreground px-0"
                    >
                      <HiMiniEllipsisVertical size={24} />
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
      <div className="h-full" style={{ flex: 2 }}>
        <div className="border-l h-full p-8">Main graph</div>
      </div>
    </div>
  );
}
