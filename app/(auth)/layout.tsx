import Navbar from "@/components/navbar/navbar";
import ShowMapFooter from "@/components/showmapfooter/showmapfooter";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white w-full">
      <Navbar />
      {children}
      <ShowMapFooter></ShowMapFooter>
    </div>
  );
}
