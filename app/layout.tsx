import './globals.css';
import NavBar from "./component/navbar/NavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <header>
          <NavBar />
        </header>
        {children}
      </body>
    </html>
  )
}
