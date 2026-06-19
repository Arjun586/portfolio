import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export function PageLayout() {
    return (
        <div className="min-h-screen bg-background">
            <div className="mx-auto grid min-h-screen max-w-[1600px] grid-cols-1 lg:grid-cols-[180px_1fr]">
                <Sidebar />

                <main className="border-border lg:border-l">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
