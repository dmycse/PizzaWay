import { redirect } from 'next/navigation';
import { prisma } from '@/prisma/prisma-client';
import { ProfileForm } from '@/components/form-components';
import { getUserSession } from '@/lib';

export default async function ProfilePage() {

  const session = await getUserSession();

  if (!session) {
    return redirect('/not-auth');
  }

  const user = await prisma.user.findFirst({ where: { id: Number(session?.id) } });

  if (!user) {
    return redirect('/not-auth');
  }

  return <ProfileForm data={user} />;
}