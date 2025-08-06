import { Profile } from '@/lib/types';

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center space-x-4">
        <div className="bg-gray-200 rounded-full h-16 w-16 flex items-center justify-center">
          <span className="text-xl font-bold text-gray-600">
            {profile.full_name?.charAt(0)}
          </span>
        </div>
        <div>
          <h1 className="text-2xl font-bold">{profile.full_name}</h1>
          <p className="text-gray-600">{profile.city}</p>
          <p className="text-gray-600">{profile.phone}</p>
        </div>
      </div>
    </div>
  );
}