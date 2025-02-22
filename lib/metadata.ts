import { Metadata } from 'next';

const defaultMetadata: Metadata = {
  title: {
    default: 'Stembots - AI-Powered Trading Assistant',
    template: '%s | Stembots'
  },
  description: 'Advanced AI trading assistant helping you make better trading decisions with real-time market analysis, personalized strategies, and automated insights.',
  keywords: [
    'trading bot',
    'AI trading',
    'cryptocurrency trading',
    'automated trading',
    'market analysis',
    'trading assistant',
    'crypto bot',
    'trading platform',
    'AI assistant',
    'financial technology'
  ],
  authors: [{ name: 'Stembots Team' }],
  creator: 'Stembots',
  publisher: 'Stembots',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://stembots.com',
    siteName: 'Stembots',
    title: 'Stembots - AI-Powered Trading Assistant',
    description: 'Advanced AI trading assistant helping you make better trading decisions with real-time market analysis and personalized strategies.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Stembots Trading Platform'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stembots - AI-Powered Trading Assistant',
    description: 'Advanced AI trading assistant helping you make better trading decisions.',
    images: ['/twitter-image.png']
  }
};

export const getMetadata = (props?: Partial<Metadata>): Metadata => {
  return {
    ...defaultMetadata,
    ...props
  };
}; 