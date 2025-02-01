export interface DemoGithubProps {
    owner: string;
    repo: string;
    description: string;
    stars: number;
    language: string;
  }

  export interface InvoiceProps {
    orderId: string;
    lineItems: LineItem[];
    shippingAddress?: ShippingAddress;
    customerInfo?: CustomerInfo;
    paymentInfo?: PaymentInfo;
  }


export type LineItem = {
    id: string;
    name: string;
    quantity: number;
    price: number;
  };
  
  export type ShippingAddress = {
    name: string;
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  
  export type CustomerInfo = {
    name: string;
    email?: string;
    phone?: string;
  };
  
  export type PaymentInfo = {
    cardType: string;
    cardNumberLastFour: string;
  };

  export interface CurrentWeatherProps {
    temperature: number;
    city: string;
    state: string;
  }
  
  export interface CurrencyRatesProps {
    currencyPairs: string[];
    rates: Record<string, number>;
    marketType: string;
  }