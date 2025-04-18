import { Playfair, Lexend } from "next/font/google";
import "./globals.css";

export const playfair = Playfair({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const lexend = Lexend({
  display: "swap",
  subsets: ["latin"],
});
