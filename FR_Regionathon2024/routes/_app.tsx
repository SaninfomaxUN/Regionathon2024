import { type PageProps } from "$fresh/server.ts";
import Navbar from "../islands/Navbar.tsx";
import Footer from "../components/Footer.tsx";
export default function App({ Component }: PageProps) {
  return (
    <html>
    <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>FR_Regionathon2024</title>
        <link rel="stylesheet" href="/styles.css"/>
        <link rel="stylesheet" href="/ButtonCustom.css"/>
    </head>
    <body>
    <div className="flex flex-col min-h-screen">
        <Navbar/>
        <main className="flex-grow flex justify-center items-center">
            <Component/>
        </main>
        <Footer/>
    </div>
    </body>

    </html>
  );
}
