import { createClient } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import ProfileHeader from '@/components/public/profileHeader';
import ServiceCard from '@/components/public/serviceCard';
import BookingForm from '@/components/public/bookingForm';

export default async function PublicProfilePage({
  params,
}: {
  params: { username: string };
}) {
  const supabase = createClient();

  // Hämta användaren baserat på användarnamn
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('username', params.username)
    .single();

  if (!profile) {
    notFound();
  }

  // Hämta användarens tjänst
  const { data: service } = await supabase
    .from('services')
    .select('*')
    .eq('user_id', profile.id)
    .single();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <ProfileHeader profile={profile} />
        
        {service && (
          <>
            <ServiceCard service={service} className="mt-6" />
            <BookingForm serviceId={service.id} className="mt-8" />
          </>
        )}
      </div>
    </div>
  );
}