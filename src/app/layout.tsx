import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";


const inter = Roboto({ weight: ['500'],
  subsets:['latin']
 });

export const metadata: Metadata = {
  title: "Nossa Calha e Telhas",
  description: "Comercio de telas fibrocimento e fabricação de telhas metálicas e termoacustica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div style={{zIndex:"-1", position:"fixed", width:"100vw", height:"100vh"}}>
            <Image
            src="/telhadoEscola.jpg"
            alt="telhado da escola "
            layout="fill"
            objectFit="cover"

            />
        </div>

      <nav className="menuBar">
        <Image
        src="/logoSimples.png"
        width={100}
        height={60}
        alt="logotipo nossa calha"
        className="menuBarLogo"
        priority
        />
        <h1 style={{fontSize:"25px", color:"#fff"}}>A marca da sua cobertura</h1>
        <div className="menuBarLink">
          <li><Link href="/">Telhas</Link></li>
          <li><Link href="/calhas">Calhas</Link></li>
          <li><Link href="/acessorios">Acessórios</Link></li>
        </div>
        
      </nav>
      {children}
      <footer style={{background:"#fff", paddingTop:"2rem", paddingBottom:"2rem", textAlign:"center"}}>
        <h1 style={{fontSize:"20px"}}>Av. Pacaembú, 836 - Jardim Paulista - Várzea Paulista - SP | Fones: 11 99786-5848 - 4596-1448 - 4596-1270 </h1>
      </footer>
      </body>
    </html>
  );
}
