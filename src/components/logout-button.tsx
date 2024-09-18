'use client';

import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';

const LogoutButton = () => {
    const handleClick = async () => {
        await signOut({
            callbackUrl: '/login',
        });
    };

    return (
        <Button
            onClick={handleClick}
            className="bg-brand-8 text-white py-2 px-4 rounded-md hover:bg-brand-9 focus:outline-none focus:ring-2 focus:ring-brand-8 focus:ring-opacity-50"
        >
            Cerrar sesión
        </Button>
    );
};

export default LogoutButton;
