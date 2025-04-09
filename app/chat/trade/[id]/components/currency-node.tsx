// frontend/app/chat/trade/[id]/components/currency-chart.tsx
"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUp, ArrowDown, Loader2 } from "lucide-react";
import { AgentState, CurrencyResponse } from "../agent-types";

interface CurrencyChartProps {
  nodeState: Partial<AgentState>;
}

export function CurrencyNode({ nodeState }: CurrencyChartProps) {

  const response = nodeState.currency_result?.[0]
  const [currencyData, setCurrencyData] = useState<CurrencyResponse | null>(
    null
  );
  // const [lastUpdate, setLastUpdate] = useState<string>("");
  useEffect(() => {
    try {
      console.log("response", response);
      // setLastUpdate(response?.result.data?.last_updated_at || "");
      setCurrencyData(response?.result || null)
    } catch (error) {
      console.error("Error parsing currency data:", error);
    }
  }, [response]);

  if (nodeState?.currency_result?.[0]?.search_status) {
    return (
      <div className="flex justify-end">
        <Card className="inline-block">
          <CardContent className="p-2">
            <div className="flex items-center gap-2">
              <Loader2 className="w-6 h-6 animate-spin" />
              <div className="text-sm">{nodeState?.currency_result?.[0]?.search_status}</div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!currencyData) return null;

  const currencies = Object.entries(currencyData.data).map(([code, data]) => ({
    code,
    value: data.value,
  }));

  return (
    <Card className="p-4 my-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-semibold">Forex Rates</h3>
          <p className="text-sm text-muted-foreground">
            Last updated: {nodeState.currency_result?.[0].result.meta.last_updated_at}
          </p>
        </div>
      </div>

      <div className="grid gap-4">
        {currencies.map((currency) => (
          <div
            key={currency.code}
            className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted/80 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <div className="font-mono text-lg font-semibold">
                {currency.code}
              </div>
              <div className="text-sm text-muted-foreground">
                {currency.value.toFixed(4)}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {/* Simulated price change - you can replace with actual data */}
              <div className="flex items-center text-green-500">
                <ArrowUp className="h-4 w-4 mr-1" />
                <span className="text-sm">+0.12%</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Bid: {currency.value.toFixed(4)}
              </div>
              <div className="text-sm text-muted-foreground">
                Ask: {(currency.value * 1.0001).toFixed(4)}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t">
        <div className="flex justify-between text-sm text-muted-foreground">
          <div>Spread: 0.0001</div>
          <div>Volume: 1.2M</div>
          <div>High: 82,850.00</div>
          <div>Low: 82,750.00</div>
        </div>
      </div>
    </Card>
  );
}
