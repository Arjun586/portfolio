import { Suspense, useEffect, useState, type ReactNode } from "react";
import { PageLoader } from "./PageLoader";

type InitialLoadGateProps = {
    children: ReactNode;
};

let initialLoadComplete = false;

function ContentReadySignal({ onReady }: { onReady: () => void }) {
    useEffect(() => {
        onReady();
    }, [onReady]);

    return null;
}

export function InitialLoadGate({ children }: InitialLoadGateProps) {
    const [isReady, setIsReady] = useState(initialLoadComplete);
    const [barComplete, setBarComplete] = useState(initialLoadComplete);
    const [contentReady, setContentReady] = useState(initialLoadComplete);

    useEffect(() => {
        if (barComplete && contentReady) {
            initialLoadComplete = true;
            setIsReady(true);
        }
    }, [barComplete, contentReady]);

    if (isReady) {
        return <Suspense fallback={null}>{children}</Suspense>;
    }

    const showOverlay = !barComplete || !contentReady;

    return (
        <>
            {showOverlay && (
                <div className="fixed inset-0 z-50 bg-background">
                    <PageLoader onComplete={() => setBarComplete(true)} />
                </div>
            )}

            <div className={showOverlay ? "invisible" : undefined} aria-hidden={showOverlay}>
                <Suspense fallback={null}>
                    <ContentReadySignal onReady={() => setContentReady(true)} />
                    {children}
                </Suspense>
            </div>
        </>
    );
}
