import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/router';

export default function HomePage() {
  const router = useRouter();

  // Option selection state
  const [selectedOption, setSelectedOption] = useState(null);

  // Handle Option 1 (Shopping for Services)
  const handleOption1 = () => {
    router.push('/services'); // Redirect to the Services page
  };

  // Handle Option 2 (Ready to Book)
  const handleOption2 = () => {
    router.push('/booking'); // Redirect to the Booking page
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 space-y-10">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-3xl font-bold">Welcome to Premier Notary & Apostille Services</h1>
        <p className="mt-2 text-lg">Your trusted partner for fast, professional, and reliable notary services</p>
      </header>

      {/* Option 1: Shopping for Services */}
      <section className="text-center space-y-8">
        <h2 className="text-2xl font-semibold">Option 1: Shopping for Services</h2>
        <p className="text-lg">Explore all our services and find the best solution for your needs.</p>
        <Button className="mt-4" onClick={handleOption1}>Explore Services</Button>
      </section>

      {/* Option 2: Ready to Book */}
      <section className="text-center space-y-8">
        <h2 className="text-2xl font-semibold">Option 2: Ready to Book a Service Today</h2>
        <p className="text-lg">Choose your service and book right now for immediate assistance.</p>
        <Button className="mt-4" onClick={handleOption2}>Book Now</Button>
      </section>
    </div>
  );
}
