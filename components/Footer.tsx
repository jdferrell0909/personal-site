export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} James Ferrell. All rights reserved.
        </p>
        <a
          href="#"
          className="text-sm text-muted transition-colors hover:text-primary"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}
