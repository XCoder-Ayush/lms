import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bloginary",
  description: "The Hub Of Tech And Engineering Courses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      {/* <Head>
        <meta
          name="viewport"
          content="width=1024, initial-scale=1, maximum-scale=1"
        />
        <meta name="viewport" content="width=device-width, initial-scale=0.1" />
      </Head> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
