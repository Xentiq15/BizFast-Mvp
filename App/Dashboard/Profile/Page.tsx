import { createClient } from '@/lib/supabase';
import ProfileForm from '@/components/dashboard/ProfileForm';

export default async function ProfilePage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user?.id)
    .single();

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Din profil</h1>
      <ProfileForm user={user} profile={profile} />
    </div>
  );
}