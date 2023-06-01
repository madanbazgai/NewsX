import Header from "./components/Header";
import "./globals.css";
import Providers from "./Provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="bg-gray-100 text-black dark:text-white dark:bg-zinc-900 transition-all duration-700">
        <Providers>
          <Header />
          <div className="max-w-6xl mx-auto">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
