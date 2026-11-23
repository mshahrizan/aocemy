import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight, CheckCircle } from "./icons";

export function cx(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cx("mx-auto w-full max-w-[1248px] px-5 sm:px-6", className)}>{children}</div>;
}

type Variant = "primary" | "ghost" | "light" | "gradient" | "outline-light";

const variants: Record<Variant, string> = {
  primary: "bg-navy text-white hover:bg-navy-2",
  ghost: "bg-white text-navy shadow-[inset_0_0_0_1.5px_var(--color-line)] hover:shadow-[inset_0_0_0_1.5px_var(--color-navy)]",
  light: "bg-white text-navy hover:bg-mist",
  gradient: "bg-brand-solid text-white hover:brightness-110",
  "outline-light": "text-white shadow-[inset_0_0_0_1.5px_rgba(255,255,255,0.35)] hover:shadow-[inset_0_0_0_1.5px_white]",
};

type ButtonLinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: Variant;
  size?: "sm" | "md" | "lg";
  arrow?: boolean;
  className?: string;
};

export function ButtonLink({ variant = "primary", size = "md", arrow, className, children, ...rest }: ButtonLinkProps) {
  const sizes = {
    sm: "h-10 px-[18px] text-sm",
    md: "h-12 px-5 text-[15px]",
    lg: "h-14 px-7 text-base",
  };
  return (
    <Link
      {...rest}
      className={cx(
        "group inline-flex items-center justify-center gap-2 rounded-[10px] font-semibold whitespace-nowrap transition",
        sizes[size],
        variants[variant],
        className,
      )}
    >
      {children}
      {arrow && <ArrowRight width={16} height={16} className="transition-transform group-hover:translate-x-0.5" />}
    </Link>
  );
}

export function TextLink({ className, children, ...rest }: ComponentProps<typeof Link>) {
  return (
    <Link {...rest} className={cx("link-gradient font-semibold text-navy", className as string)}>
      {children}
    </Link>
  );
}

export function Eyebrow({ children, className, light }: { children: ReactNode; className?: string; light?: boolean }) {
  return (
    <p
      className={cx(
        "text-[13px] font-semibold tracking-[0.02em]",
        light ? "text-white/70" : "text-muted",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  title,
  intro,
  action,
  className,
}: {
  title: ReactNode;
  intro?: ReactNode;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cx("grid gap-6 md:grid-cols-2 md:items-end md:gap-12", className)}>
      <h2 className="h-section max-w-[16ch]">{title}</h2>
      {(intro || action) && (
        <div className="flex flex-col gap-5 md:items-start md:pb-1">
          {intro && <p className="max-w-[46ch] text-[17px] leading-relaxed text-ink">{intro}</p>}
          {action}
        </div>
      )}
    </div>
  );
}

export function CheckList({ items, light, columns = 2 }: { items: string[]; light?: boolean; columns?: 1 | 2 }) {
  return (
    <ul className={cx("grid gap-x-8 gap-y-3", columns === 2 && "sm:grid-cols-2")}>
      {items.map((item) => (
        <li key={item} className={cx("flex items-start gap-2.5 text-[15.5px] font-medium", light ? "text-white" : "text-navy")}>
          <CheckCircle width={18} height={18} className={cx("mt-[3px] shrink-0", light ? "text-white/80" : "text-[#8d65fd]")} />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Section({
  children,
  className,
  tone = "white",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "white" | "mist" | "navy";
  id?: string;
}) {
  const tones = { white: "bg-white", mist: "bg-mist", navy: "bg-navy text-white" };
  return (
    <section id={id} className={cx("py-20 md:py-28", tones[tone], className)}>
      <Container>{children}</Container>
    </section>
  );
}
