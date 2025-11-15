import AppShell from "@repo/design-system/appshell/appshell";

export const metadata = {
  title: "Astro",
  description: "This is the Astro zone of the AIFE application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppShell
            headerTitle="Astro"
            headerDescription="This is the Astro zone of the AIFE application">
            {children}
        </AppShell>
      </body>
    </html>
  );
}
