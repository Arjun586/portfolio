import { Sidebar } from "../components/layout/Sidebar";

export default function Home() {
    return (
        <div className="bg-background h-screen overflow-hidden">
            <div className="grid h-screen grid-cols-[180px_1fr]">
                <Sidebar />

                <main>
                    Main Content
                </main>
            </div>
        </div>
    );
}