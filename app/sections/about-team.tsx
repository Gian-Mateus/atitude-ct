import Image from 'next/image'

export default function AboutTeam() {
  return (
    <section className="flex min-w-full min-h-screen bg-secondary text-background">
      <div className="flex justify-center w-1/2 max-w-[820px]">
        <Image
          className="min-w-full min-h-full object-cover object-right"
          alt="Logo Atitude CT"
          src={'/hands.png'}
          width={1920}
          height={1080}
        />
      </div>
      <div className="flex flex-col justify-center text-end w-full px-12 xl:px-60">
        <h1 className="text-6xl font-bold pb-6">Nossa equipe</h1>
        <p className="text-xl">
          A Atitude CT é composta por uma equipe altamente qualificada e
          experiente, formada por consultores especializados em diversas áreas
          de gestão empresarial. Nossos profissionais possuem amplo conhecimento
          teórico e prático, adquirido através de anos de atuação em projetos de
          sucesso em empresas de diferentes portes e segmentos. Com uma
          abordagem colaborativa e orientada a resultados, nossa equipe trabalha
          em sinergia para identificar oportunidades de melhoria e implementar
          soluções customizadas, alinhadas às necessidades específicas de cada
          cliente.
        </p>
      </div>
    </section>
  )
}
