import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Atitude Consultoria e Treinamento',
  description:
    'A Atitude Consultoria e Treinamento é uma empresa especializada em soluções empresariais, oferecendo consultoria e treinamentos personalizados com foco em produtividade, gestão de pessoas, finanças e qualidade. Com mais de 15 anos de experiência, nosso Programa ENGAJAR proporciona um ciclo de palestras diversificadas para o desenvolvimento contínuo de equipes. Transforme desafios em resultados e impulsione o crescimento sustentável da sua organização. Entre em contato e descubra como podemos ajudar sua empresa a alcançar novos patamares de sucesso!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <link
        rel="shortcut icon"
        href="/svg/logo-icon-white.svg"
        type="image/x-icon"
      />
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
