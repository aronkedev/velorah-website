import LibrarySidebar from '@/components/library/LibrarySidebar';

export default function LibraryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-sky-500/30">
      <LibrarySidebar />
      <main className="flex-1 overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}
