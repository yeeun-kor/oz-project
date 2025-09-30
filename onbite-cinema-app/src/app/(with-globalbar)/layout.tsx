export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>GlobalBar Layout</div>
      {children}
    </div>
  );
}
