'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function BookingForm({ serviceId }: { serviceId: string }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from('bookings').insert([{
      service_id: serviceId,
      customer_name: name,
      customer_email: email,
      customer_phone: phone,
      booking_date: date,
      message,
      status: 'pending'
    }]);

    if (!error) {
      router.push(`/booking-confirmation`);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-6">
      {/* Form fields här */}
      <Button type="submit" disabled={loading} className="w-full">
        {loading ? 'Skickar...' : 'Boka nu'}
      </Button>
    </form>
  );
}