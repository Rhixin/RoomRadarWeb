import CreateListingForm from "@/components/createListing/createlistingform";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen w-full bg-white">{children}</div>;
}
