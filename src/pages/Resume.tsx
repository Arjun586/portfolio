import { MobileHeader } from "../components/ui/MobileHeader";

const RESUME_PDF = "/resume.pdf";

export default function Resume() {
    return (
        <>
            <MobileHeader />

            <section className="border-b border-border-default">
                <div className="pad-hero xl:pad-hero-lg">
                    <span className="font-body text-body text-accent italic xl:text-subheading">
                        CREDENTIALS
                    </span>

                    <h1 className="font-heading text-hero-display leading-[0.9] tracking-tight">
                        RESUME
                    </h1>

                    <div className="divider-strong mt-4 max-w-xs" />

                    <p className="mt-4 max-w-2xl text-body leading-relaxed">
                        View my experience, skills, and background below, or download a copy
                        for your records.
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-4 xl:mt-8">
                        <a href={RESUME_PDF} download className="btn-primary">
                            DOWNLOAD RESUME
                            <span aria-hidden>→</span>
                        </a>
                        <a
                            href={RESUME_PDF}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                        >
                            OPEN IN NEW TAB
                            <span aria-hidden>→</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* <section className="pad-section xl:pad-section-lg">
                <div className="overflow-hidden border border-border-default bg-background/40">
                    <iframe
                        src={RESUME_PDF}
                        title="Arjun resume"
                        className="h-[70vh] min-h-[28rem] w-full"
                    />
                </div>
            </section> */}
        </>
    );
}
