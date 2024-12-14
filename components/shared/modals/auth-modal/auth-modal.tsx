'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';

import { Button } from '@/components/ui';
import { Dialog, DialogContent } from '@/components/ui/dialog';

import { LoginForm, SignUpForm } from '@/components/shared/modals/auth-modal';

type AuthModalProps = {
  open: boolean;
  onClose: () => void;
};

export const AuthModal = ({ open, onClose }: AuthModalProps) => {

  const [type, setType] = useState<'login' | 'signup'>('login');

  const onSwitchType = () => {
    setType(type === 'login' ? 'signup' : 'login');
  };

  const handleClose = () => {
    onClose();
    setType('login');
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="p-10 w-[450px] bg-white ">
        {type === 'login' ? (
          <LoginForm onClose={handleClose} />
        ) : (
          <SignUpForm onClose={handleClose} />
        )}

        <hr />

        <div className="flex gap-2">
          <Button
            variant="secondary"
            onClick={() =>
              signIn('github', {
                callbackUrl: '/',
                redirect: true,
              })
            }
            type="button"
            className="p-2 h-12 flex-1 gap-2">
            <img className="w-6 h-6" src="https://github.githubassets.com/favicons/favicon.svg" />
            GitHub
          </Button>

          <Button
            variant="secondary"
            onClick={() =>
              signIn('google', {
                callbackUrl: '/',
                redirect: true,
              })
            }
            type="button"
            className="p-2 h-12 flex-1 gap-2">
            <img
              className="w-6 h-6"
              src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
            />
            Google
          </Button>
        </div>

        <Button variant="outline" onClick={onSwitchType} type="button" className="h-12 text-lg font-medium">
          {type !== 'login' ? 'Sign in' : 'Sign up'}
        </Button>
      </DialogContent>
    </Dialog>
  );
};