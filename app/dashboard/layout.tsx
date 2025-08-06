import { createClient } from '@/lib/supabase';
import { redirect } from 'next/navigation';
import DashboardNavbar from '@/components/dashboard/Navbar';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNavbar />
      <main className="py-6 px-4 sm:px-6 lg:px-8">{children}</main>
    </div>
  );
}