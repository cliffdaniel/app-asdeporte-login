import React from 'react';
import Link from 'next/link';

const Page = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <p className="text-xl font-semibold text-gray-700 mb-4">
                ¿Quieres iniciar sesión?
            </p>
            <Link
                href="/login"
                className="text-blue-600 hover:text-blue-800 font-bold underline"
            >
                Iniciar sesión
            </Link>
        </div>
    );
};

export default Page;
