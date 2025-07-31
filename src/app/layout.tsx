import { ThemeProvider } from "next-themes";
import "./globals.css";
import ThemeSwitcher from "@/component/common/ThemeSwitcher";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="bg-white dark:bg-gray-800 duration-500">
            <ThemeSwitcher />

            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
