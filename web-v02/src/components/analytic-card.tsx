import { HiArrowTrendingUp, HiMiniEllipsisVertical } from "react-icons/hi2";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface IAnalyticCardProps {
  icon: React.ReactNode;
  label: string;
  amount: number;
  changes: number;
  note: React.ReactNode;
}

export default function AnalyticCard({
  icon,
  label,
  amount,
  changes,
  note,
}: IAnalyticCardProps) {
  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-x-2 text-gray-500">
          <div className="border p-2 rounded-full">{icon}</div>
          <span className="font-normal">{label}</span>
          <Button
            variant="ghost"
            className="ml-auto text-accent-foreground px-0"
          >
            <HiMiniEllipsisVertical size={24} />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex items-center gap-x-2 pb-2">
        <span className="text-4xl font-semibold">RM{amount.toFixed(2)}</span>
        <Badge
          variant="outline"
          className="bg-green-400/20 border-green-400/20 py-1 rounded-full text-green-700 flex items-center gap-1 font-normal"
        >
          <span>{changes.toFixed(2)}%</span>
          <HiArrowTrendingUp />
        </Badge>
      </CardContent>
      <CardFooter>{note}</CardFooter>
    </Card>
  );
}
