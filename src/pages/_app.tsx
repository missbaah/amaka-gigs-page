import { ResultsContextProvider } from "@/context/ResultsContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const neueMontreal = localFont({
  src: [
    {
      path: "../../public/Fonts/PPNeueMontreal-Thin.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/Fonts/PPNeueMontreal-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/Fonts/PPNeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/Fonts/PPNeueMontreal-SemiBolditalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/Fonts/PPNeueMontreal-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/Fonts/PPNeueMontreal-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

const canela = localFont({
  src: "../../public/Fonts/CanelaDeck-Regular-Trial.otf",
  display: "swap",
  variable: "--font-canela",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ResultsContextProvider>
      <main className={`${neueMontreal.className} ${canela.variable}`}>
        <Component {...pageProps} />
      </main>
    </ResultsContextProvider>
  );
}
