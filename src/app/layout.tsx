import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { crAIte } from "~/constants";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { Schibsted_Grotesk } from "next/font/google";
import { type Metadata } from "next";
import { type ReactNode } from "react";
import { TRPCClientProvider } from "./TRPCClient";

export const metadata: Metadata = {
  title: crAIte.name,
  description: crAIte.description.en,
  icons: [
    {
      url: "/favicon/dark.svg",
      rel: "icon",
      type: "image/svg+xml",
    },
  ],
};

// https://nextjs.org/docs/pages/building-your-application/optimizing/fonts#google-fonts
// https://nextjs.org/docs/app/api-reference/components/font#subsets
const schibstedGroteskFont = Schibsted_Grotesk({
  display: "swap",
  subsets: ["latin"],
  preload: true,
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <TRPCClientProvider>
      <ClerkProvider>
        <html lang="en">
          <body
            className={`${schibstedGroteskFont.className} flex min-h-screen  flex-col justify-between items-center w-full bg-gradient-to-b from-[#15162c] to-[#040209]`}
          >
            <Header />
            <div className="container my-8 w-full flex max-w-xl md:max-w-3xl flex-1 flex-col items-center gap-12 mb-16 px-4 lg:px-0">
              {children}
            </div>
            <Footer />
          </body>
        </html>
      </ClerkProvider>
    </TRPCClientProvider>
  );
}
