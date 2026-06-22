import { Suspense, useEffect, useState, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { PageLoader } from "./PageLoader";

type LoadingGateProps = {
    children: ReactNode;
};

function RouteReadySignal({
    pathname,
    onReady,
}: {
    pathname: string;
    onReady: () => void;
}) {
    useEffect(() => {
        onReady();
    }, [pathname, onReady]);

    return null;
}

export function LoadingGate({ children }: LoadingGateProps) {
    const { pathname } = useLocation();
    const [barComplete, setBarComplete] = useState(false);
    const [contentReady, setContentReady] = useState(false);

    useEffect(() => {
        setBarComplete(false);
        setContentReady(false);
    }, [pathname]);

    const showOverlay = !barComplete || !contentReady;

    return (
        <>
            {showOverlay && (
                <div className="fixed inset-0 z-50 bg-background">
                    <PageLoader
                        key={pathname}
                        onComplete={() => setBarComplete(true)}
                    />
                </div>
            )}

            <div className={showOverlay ? "invisible" : undefined} aria-hidden={showOverlay}>
                <Suspense fallback={null}>
                    <RouteReadySignal
                        pathname={pathname}
                        onReady={() => setContentReady(true)}
                    />
                    {children}
                </Suspense>
            </div>
        </>
    );
}
