"use client";

import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export interface CurrencyRatesProps {
  currencyPairs: string[];
  rates: Record<string, number>;
  marketType: string;
}

export function CurrencyRatesLoading(): JSX.Element {
  return (
    <Card className="w-[325px] max-w-[325px] p-4 h-[300px] max-h-[300px] flex flex-col text-gray-50 bg-black">
      <div className="flex justify-between items-center mb-1">
        <Skeleton className="h-[16px] w-[100px]" />
        <Skeleton className="h-[16px] w-[75px]" />
      </div>
      <div className="text-left mb-4">
        <Skeleton className="h-[16px] w-[125px]" />
      </div>
      <div className="flex-grow flex flex-col justify-center items-center mb-8">
        <Skeleton className="h-[20px] w-[80px]" />
        <Skeleton className="h-[20px] w-[80px]" />
        <Skeleton className="h-[20px] w-[80px]" />
        <Skeleton className="h-[20px] w-[80px]" />
      </div>
    </Card>
  );
}

export function CurrencyRates(props: CurrencyRatesProps): JSX.Element {
  return (
    <Card className="w-[325px] max-w-[325px] p-4 h-[300px] max-h-[300px] flex flex-col text-gray-50 bg-black">
      <div className="flex justify-between items-center mb-1">
        <p className="font-medium"> {props.marketType} Currency Rates</p>
      </div>
      <div className="text-left mb-4">
        <p className="font-medium">Latest Rates</p>
      </div>
      <div className="flex-grow flex flex-col justify-center items-center mb-8">
        {props.currencyPairs.map((pair) => (
          <div key={pair} className="flex justify-between w-full mb-2">
            <p className="font-medium">{pair}</p>
            <p className="font-medium">{props.rates[pair]?.toFixed(4) || "0"}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
