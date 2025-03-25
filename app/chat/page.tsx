'use client'

import { useChatStore } from "@/stores/chat-store"
import { useRouter } from "next/navigation"
import { 
  LineChart, 
  Wallet, 
  BarChart3, 
  TrendingUp, 
  Globe, 
  Coins,
  ArrowRightCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function WelcomePage() {
  const { addChat } = useChatStore()
  const router = useRouter()

  const handleAddChat = (message: string) => {
    const newChat = addChat()
    if(message !== "")
      router.push(`/chat/trade/${newChat.id}&message=${message}`)
    else
      router.push(`/chat/trade/${newChat.id}`)
  }

  const tradingFeatures = [
    {
      icon: <Globe className="h-6 w-6 text-blue-500" />,
      title: "Forex Analysis",
      description: "Real-time currency pair analysis and market insights",
      examples: ["EUR/USD trend analysis", "JPY volatility check"]
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-green-500" />,
      title: "Stock Market",
      description: "Comprehensive stock market analysis and predictions",
      examples: ["S&P 500 outlook", "Tech sector analysis"]
    },
    {
      icon: <Coins className="h-6 w-6 text-yellow-500" />,
      title: "Crypto Trading",
      description: "Cryptocurrency market analysis and trading signals",
      examples: ["BTC/USD price analysis", "Crypto market sentiment"]
    },
    {
      icon: <LineChart className="h-6 w-6 text-purple-500" />,
      title: "Technical Analysis",
      description: "Advanced technical indicators and chart patterns",
      examples: ["RSI divergence scan", "Support/Resistance levels"]
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-red-500" />,
      title: "Market Insights",
      description: "Deep market analysis and trading opportunities",
      examples: ["Market sentiment analysis", "Economic calendar impact"]
    },
    {
      icon: <Wallet className="h-6 w-6 text-indigo-500" />,
      title: "Portfolio Management",
      description: "Trade execution and portfolio tracking",
      examples: ["Position sizing calculator", "Risk management setup"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/80 to-primary/5">
      {/* Hero Section */}
      <div className="container px-4 py-12 mx-auto">
        <div className="text-center space-y-4 max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            AI Trading Assistant
          </h1>
          <p className="text-xl text-muted-foreground">
            Your intelligent companion for forex, stocks, and crypto trading
          </p>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tradingFeatures.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-background border">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground mb-4">{feature.description}</p>
                    <div className="space-y-2">
                      {feature.examples.map((example, i) => (
                        <button
                          key={i}
                          onClick={() => handleAddChat(example)}
                          className="text-sm text-primary hover:text-primary/80 flex items-center gap-2 group-hover:translate-x-1 transition-transform"
                        >
                          <ArrowRightCircle className="h-4 w-4" />
                          {example}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-semibold">Ready to start trading?</h2>
          <Button 
            size="lg"
            onClick={() => handleAddChat("")}
            className="bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300 px-8 py-6 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl"
          >
            Start Trading Analysis
          </Button>
        </div>
      </div>
    </div>
  )
}

