export default function Footer() {
  return (
    <footer className="border-t border-background-200/30 py-8">
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-foreground-600 font-body">
          &copy; {new Date().getFullYear()} K.Y. All rights reserved.
        </p>
      </div>
    </footer>
  );
}