import Image from "next/image";

export default function AboutTeam() {
  return (
    <section className="flex min-h-screen min-w-full bg-secondary py-6 text-background flex-col md:flex-row">
      <div className="flex sm:w-1/2 max-w-[820px] justify-center">
        <Image
          className="min-h-full min-w-full object-cover object-right mr-48"
          alt="Logo Atitude CT"
          src={"/hands.png"}
          width={1920}
          height={1080}
        />
      </div>
      <div className="flex w-full flex-col justify-center px-12 text-end lg:px-16">
        <h1 className="pb-6 text-6xl font-bold">Nossa equipe</h1>
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
  );
}
