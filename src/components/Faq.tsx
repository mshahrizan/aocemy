import type { Faq as FaqItem } from "@/lib/content";
import { Plus } from "./icons";

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="border-t border-hair">
      {items.map((item, i) => (
        <details key={item.q} className="group border-b border-hair" open={i === 0}>
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-6 text-left font-display text-[19px] leading-snug font-semibold tracking-[-0.01em] text-navy sm:text-[21px]">
            {item.q}
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full shadow-[inset_0_0_0_1.5px_var(--color-line)] transition-transform duration-200 group-open:rotate-45">
              <Plus width={16} height={16} />
            </span>
          </summary>
          <p className="max-w-[62ch] pb-7 text-[16.5px] leading-relaxed text-ink">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
