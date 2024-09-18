export default function Dashboard() {
    return (
        <div className="flex items-center justify-center h-screen bg-brand-4">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-brand-8 mb-4">
                    Dashboard
                </h1>
                <p className="text-gray-7">
                    Welcome to the dashboard! Customize this page with your
                    content.
                </p>
                <button className="mt-4 px-4 py-2 bg-brand-8 text-white rounded hover:bg-brand-9">
                    Click Me
                </button>
            </div>
        </div>
    );
}
