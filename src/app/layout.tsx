import './globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google'

const inter = Plus_Jakarta_Sans ({ subsets: ['latin'] })

export const metadata = {
  title: 'Leadster',
  description: 'Teste Leadster',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={"Plus_Jakarta_Sans"}>{children}</body>
    </html>
  )
}
