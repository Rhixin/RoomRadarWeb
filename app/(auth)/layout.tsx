import Navbar from "@/components/navbar/navbar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white w-full">
      <Navbar />
      {children}
    </div>
  );
}