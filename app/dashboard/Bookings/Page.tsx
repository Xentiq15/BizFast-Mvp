import { createClient } from '@/lib/supabase';
import BookingList from '@/components/dashboard/BookingList';

export default async function BookingsPage() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const { data: bookings } = await supabase
    .from('bookings')
    .select('*')
    .eq('service_id', 
      (await supabase.from('services').select('id').eq('user_id', user?.id).single()
    ).data?.id);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Dina bokningar</h1>
      <BookingList bookings={bookings || []} />
    </div>
  );
}