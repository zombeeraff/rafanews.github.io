export function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Raf. All rights reserved.
      </div>
    </footer>
  );
}
