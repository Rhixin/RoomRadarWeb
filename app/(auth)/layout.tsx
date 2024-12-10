import MenuBar from "@/components/menubar/menubar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-white w-full">{children}</div>;
}
