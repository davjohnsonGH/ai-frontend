import AppShell from "@repo/design-system/appshell/appshell";

export const metadata = {
  title: 'Astronomical',
  description: 'This is the Astronomical zone of the AIFE application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AppShell
            headerTitle = "Astronomical"
            headerDescription = "This is the Astronomical zone of the AIFE application">
            {children}
        </AppShell>
      </body>
    </html>
  )
}
