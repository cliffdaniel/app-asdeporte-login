import React from 'react';

const AuthLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="p-6 grid place-items-center h-screen">{children}</div>
    );
};

export default AuthLayout;
