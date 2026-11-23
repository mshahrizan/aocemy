import { ButtonLink, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="hero-rings text-white">
      <Container className="py-28 md:py-40">
        <p className="text-[14px] font-semibold text-white/60">404</p>
        <h1 className="h-display mt-4 max-w-[16ch] text-[clamp(2.6rem,1.6rem+3.4vw,4rem)]">
          This page is off the critical path.
        </h1>
        <p className="mt-6 max-w-[48ch] text-[18px] text-white/75">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/" variant="light" arrow>
            Back to home
          </ButtonLink>
          <ButtonLink href="/events" variant="outline-light">
            Upcoming events
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
