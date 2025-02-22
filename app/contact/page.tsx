import { Metadata } from 'next';
import { getMetadata } from '@/lib/metadata';
import ContactComponent from './contact-component';
import RequireAuth from "@/components/auth/RequireAuth";

export const metadata: Metadata = getMetadata({
  title: 'Contact Us',
  description: 'Get in touch with the Stembots team for support, inquiries, or partnership opportunities.',
  openGraph: {
    title: 'Contact Stembots',
    description: 'Reach out to our team for any questions about our AI trading platform.'
  }
});

export default function ContactPage() {
  return (
    <RequireAuth>
      <ContactComponent />
    </RequireAuth>
  );
}
