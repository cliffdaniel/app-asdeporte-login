import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import LogoutButton from '@/components/logout-button';

export default async function DashboardPage() {
    const session = await auth();

    if (!session) {
        redirect('/login');
        return;
    }

    return (
        <div className="container">
            <pre>{JSON.stringify(session, null, 2)}</pre>
            <LogoutButton />
        </div>
    );
}
