import { IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["300", "600", "700"],
});

export const metadata = {
  title: "Közbeszerzési tanácsadás Szeged - Tender Control Kft",
  description: "Közbeszerzési tanácsadással foglalkozó cégünk közbeszerzési jogi szolgáltatást nyújt ajánlatkérők és ajánlattevők számára, felelős akkreditált közbeszerzési szaktanácsadói közreműködéssel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
