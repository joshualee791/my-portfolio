// app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import ApolloWrapper from "../components/ApolloWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "joshualeegarza",
  description: "I like to keep this handy for close encounters",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
