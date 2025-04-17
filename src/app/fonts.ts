import { Merriweather_Sans, Lexend } from "next/font/google";
import "./globals.css";

export const merriweatherSans = Merriweather_Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-merriweather-sans",
});

export const lexend = Lexend({
  display: "swap",
  subsets: ["latin"],
});
