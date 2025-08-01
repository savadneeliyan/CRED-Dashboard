"use client";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import ThemeSwitcher from "@/component/common/ThemeSwitcher";
import { Provider } from "react-redux";
import { store } from "./store";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Provider store={store}>
            <div className="bg-white dark:bg-gray-800 duration-500">
              <ThemeSwitcher />

              {children}
            </div>
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
