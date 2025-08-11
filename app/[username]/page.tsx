import { createClient } from '@supabase/supabase-js';
import ServiceCard from '@/components/public/serviceCard';

export default async function UserPage({
  params,
}: {
  params: { username: string };
}) {
  // Initiera Supabase-klient
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_KEY!
  );

  // Hämta användardata (exempel)
  const { data: user, error } = await supabase
    .from('users')
    .select('*')
    .eq('username', params.username)
    .single();

  if (error) {
    return <div>Kunde inte hitta användaren</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold">{user.username}s profil</h1>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <ServiceCard
          title="Grundläggande konsultation"
          description="30-minuters videochatt"
          price={499}
        />
        {/* Lägg till fler tjänster här */}
      </div>
    </div>
  );
}