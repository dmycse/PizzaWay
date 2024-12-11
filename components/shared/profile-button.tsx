import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { Button } from '../ui/button';
import { CircleUser, User } from 'lucide-react';

type ProfileButtonProps = {
  onClickSignIn?: () => void;
  className?: string;
};

/**
 * A button that displays either a "Sign in" button when the user is not
 * authenticated, or a "Profile" button that links to the user's profile page
 * when the user is authenticated.
 * 
 * Parent: Header -> /components/layout/header.tsx
 */
export const ProfileButton = ({ className, onClickSignIn }: ProfileButtonProps) => {
  
  const { data: session } = useSession();

  return (
    <div className={className}>
      {!session ? (
        <Button 
          variant="outline"
          className="flex items-center gap-1"
          onClick={onClickSignIn}
        >
          <User size={16} />
          Sign in
        </Button>
      ) : (
          <Button 
            variant="outline" 
            className="flex items-center gap-2"
            asChild
          >
            <Link href="/profile">
              <CircleUser size={18} />
              Profile
            </Link>
          </Button>
      )}
    </div>
  );
};