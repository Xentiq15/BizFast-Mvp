import AuthForm from '@/components/auth/AuthForm';

export default function LoginPage() {
  return (
    <div>
      <h2 className="text-center text-2xl font-bold text-gray-900">
        Logga in på ditt konto
      </h2>
      <AuthForm type="login" />
    </div>
  );
}