import { InfoBlock } from '@/components/shared';

export default function UnauthorizedPage() {

  return (
    <div className="mt-20 flex justify-center items-center">
      <InfoBlock
        title="Access denied..."
        text="You are not authorized to access this page."
        imageUrl="/images/auth/lock.png"
      />
    </div>
  );
}