export function GridBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" />
      <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[500px] rounded-full bg-indigo-600/8 blur-[100px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface" />
    </div>
  );
}
