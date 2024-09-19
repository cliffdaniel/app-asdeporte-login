import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import LogoutButton from '@/components/logout-button';

export default async function DashboardPage() {
    const session = await auth();

    if (!session) {
        redirect('/login');
    }

    return (
        <div className="p-6 min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="container mx-auto bg-white shadow-md rounded-lg">
                <h1 className="text-2xl font-bold mb-4 text-gray-800">
                    Dashboard
                </h1>
                <pre className="bg-gray-200 p-4 mb-4 rounded-md text-gray-700 overflow-auto">
                    {JSON.stringify(session, null, 2)}
                </pre>
                <LogoutButton />
            </div>
        </div>
    );
}
