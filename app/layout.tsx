import ToasterProvider from './providers/ToasterProvider'
import ClientOnly from './components/ClientOnly'
import RegisterModal from './components/Modals/RegisterModal'
import LoginModal from './components/Modals/LoginModal'
import './globals.css'
import { Nunito } from 'next/font/google'
import getCurrentUser from './action/getCurrentUser'
import Navbar from './components/Navbar/Navbar'
import RentModal from './components/Modals/RentModal'
import SearchModal from './components/Modals/SearchModal'

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
          <SearchModal />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className='pb-20 pt-28'>
          {children}
        </div>
      </body>
    </html>
  )
}
