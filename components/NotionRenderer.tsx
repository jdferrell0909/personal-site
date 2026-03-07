import type { ContentBlock, RichText } from "@/lib/types";

function RichTextSpan({ segments }: { segments: RichText[] }) {
  return (
    <>
      {segments.map((seg, i) => {
        let el: React.ReactNode = seg.plain_text;

        if (seg.code)
          el = (
            <code className="rounded bg-light px-1.5 py-0.5 text-sm font-mono text-accent">
              {el}
            </code>
          );
        if (seg.bold) el = <strong className="font-semibold">{el}</strong>;
        if (seg.italic) el = <em>{el}</em>;
        if (seg.strikethrough) el = <s>{el}</s>;
        if (seg.underline) el = <u>{el}</u>;
        if (seg.href)
          el = (
            <a
              href={seg.href}
              className="text-accent underline underline-offset-2 hover:text-accent-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              {el}
            </a>
          );

        return <span key={i}>{el}</span>;
      })}
    </>
  );
}

export default function NotionRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="prose-custom">
      {blocks.map((block, i) => {
        const richText = block.richText;

        switch (block.type) {
          case "paragraph":
            if (richText.length === 0) return <br key={i} />;
            return (
              <p key={i} className="mb-5 text-base leading-relaxed text-muted">
                <RichTextSpan segments={richText} />
              </p>
            );

          case "heading_1":
            return (
              <h2
                key={i}
                className="mb-4 mt-10 text-2xl font-bold tracking-tight text-primary sm:text-3xl"
              >
                <RichTextSpan segments={richText} />
              </h2>
            );

          case "heading_2":
            return (
              <h3
                key={i}
                className="mb-3 mt-8 text-xl font-bold tracking-tight text-primary sm:text-2xl"
              >
                <RichTextSpan segments={richText} />
              </h3>
            );

          case "heading_3":
            return (
              <h4
                key={i}
                className="mb-3 mt-6 text-lg font-semibold text-primary"
              >
                <RichTextSpan segments={richText} />
              </h4>
            );

          case "bulleted_list_item":
            return (
              <li
                key={i}
                className="mb-1 ml-6 list-disc text-base leading-relaxed text-muted"
              >
                <RichTextSpan segments={richText} />
              </li>
            );

          case "numbered_list_item":
            return (
              <li
                key={i}
                className="mb-1 ml-6 list-decimal text-base leading-relaxed text-muted"
              >
                <RichTextSpan segments={richText} />
              </li>
            );

          case "quote":
            return (
              <blockquote
                key={i}
                className="my-6 border-l-4 border-accent pl-4 italic text-muted"
              >
                <RichTextSpan segments={richText} />
              </blockquote>
            );

          case "divider":
            return <hr key={i} className="my-8 border-border" />;

          case "code":
            return (
              <pre
                key={i}
                className="my-6 overflow-x-auto rounded-lg bg-primary p-4 text-sm text-white"
              >
                <code>
                  <RichTextSpan segments={richText} />
                </code>
              </pre>
            );

          default:
            if (richText.length > 0) {
              return (
                <p
                  key={i}
                  className="mb-5 text-base leading-relaxed text-muted"
                >
                  <RichTextSpan segments={richText} />
                </p>
              );
            }
            return null;
        }
      })}
    </div>
  );
}
