import AppShell from "../../../packages/design-system/src/appshell/appshell";

export const metadata = {
  title: "Next.js - Home Zone",
  description: "Next.js example for Multi Zones",
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
            headerTitle = "Home"
            headerDescription = "This is the home zone of the workbenches application">
            {children}
        </AppShell>
      </body>
    </html>
  );
}
