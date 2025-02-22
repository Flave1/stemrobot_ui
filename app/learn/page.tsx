import { Metadata } from 'next';
import { getMetadata } from '@/lib/metadata';
import LearnComponent from './learn-component';

export const metadata: Metadata = getMetadata({
  title: 'Learn More',
  description: 'Discover how Stembots is revolutionizing trading with AI-powered insights and real-time analysis.',
});

export default function LearnPage() {
  return <LearnComponent />;
} 