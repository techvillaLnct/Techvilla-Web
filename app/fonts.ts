import { Inter, Michroma } from "next/font/google";
import localFont from 'next/font/local'
export const michroma = Michroma({
    weight: "400", 
    subsets: ["latin"], 
});

export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})


export const GeistMonoVF = localFont({
    src: './fonts/GeistMonoVF.woff',
    display: 'swap',
})
export const geistVF = localFont({
    src: './fonts/GeistVF.woff',
    display: 'swap',
})