import { Inter } from 'next/font/google';
import { Geist, Geist_Mono, Lusitana } from "next/font/google";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({weight: ["400","700"]})

export const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
  });
  
export const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
  });
