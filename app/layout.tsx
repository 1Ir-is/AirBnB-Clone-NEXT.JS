import ToasterProvider from './providers/ToasterProvider'
import ClientOnly from './components/ClientOnly'
import RegisterModal from './components/Modals/RegisterModal'
import LoginModal from './components/Modals/LoginModal'
import NavBar from './components/Navbar/Navbar'
import './globals.css'
import { Nunito } from 'next/font/google'
import getCurrentUser from './action/getCurrentUser'

const font = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'AirBnB',
  description: 'AirBnB Clone',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <NavBar currentUser = {currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
