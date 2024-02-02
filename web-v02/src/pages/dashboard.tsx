import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  HiArrowTrendingUp,
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
          {/* Balance Card */}
          <Card className="w-full">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-x-2 text-gray-500">
                <div className="border p-2 rounded-full">
                  <HiOutlineCurrencyDollar size={24} />
                </div>
                <span className="font-normal">Balance</span>
                <Button
                  variant="ghost"
                  className="ml-auto text-accent-foreground px-0"
                >
                  <HiMiniEllipsisVertical size={24} />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-x-2 pb-2">
              <span className="text-4xl font-semibold">RM262.00</span>
              <Badge
                variant="outline"
                className="bg-green-400/20 border-green-400/20 py-1 rounded-full text-green-700 flex items-center gap-1 font-normal"
              >
                <span>36.81%</span>
                <HiArrowTrendingUp />
              </Badge>
            </CardContent>
            <CardFooter>
              <span className="text-sm text-gray-500">
                You made an extra
                <span className="text-green-700"> RM20.00</span> this month.
              </span>
            </CardFooter>
          </Card>

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
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-x-2 font-normal">
                  <div className="flex flex-col">
                    <p className="text-lg">Dinner</p>
                    <span className="text-gray-500 text-sm">
                      26 January 2024
                    </span>
                  </div>
                  <div className="ml-auto flex items-center gap-x-2">
                    <p className="text-red-700 font-normal flex items-center gap-x-1">
                      <HiMinus size={18} />
                      <span className="text-xl">RM59.80</span>
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
