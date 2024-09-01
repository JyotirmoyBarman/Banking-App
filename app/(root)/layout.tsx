import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedInc = { firstName: "Jyotirmoy", lastName: "Barman" };

  return (
    <main className="flex h-screen w-full font inter">
      <Sidebar user={loggedInc} />
      {children}
    </main>
  );
}
