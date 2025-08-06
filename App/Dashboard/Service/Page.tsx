import { createClient } from '@/lib/supabase';
import ServiceForm from '@/components/dashboard/ServiceForm';

export default async function ServicePage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: service } = await supabase
    .from('services')
    .select('*')
    .eq('user_id', user?.id)
    .single();

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Din tjänst</h1>
      <ServiceForm userId={user?.id} service={service} />
    </div>
  );
}