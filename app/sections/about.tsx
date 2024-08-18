import Image from 'next/image'

export default function About() {
  return (
    <section className="flex min-w-full min-h-screen text-gray px-20 bg-about bg-no-repeat bg-left bg-contain">
      <div className="w-[55%] flex flex-col justify-center">
        <h1 className="text-6xl text-gray font-bold pb-6">
          Sobre a Atitude CT
        </h1>
        <p className="text-xl font-medium">
          Fundada em 2002, a Atitude Consultoria e Treinamento é especializada
          em soluções para organizações de diversos setores.
        </p>
        <h2 className="text-4xl font-bold pt-6 pb-6">
          Missão, Visão e Valores
        </h2>
        <p className="text-xl font-medium">
          Na Atitude CT, nossa missão é transformar desafios em resultados
          tangíveis para nossos clientes, através de soluções inovadoras e uma
          abordagem personalizada. Nossa visão é ser reconhecida como a
          consultoria de referência em excelência empresarial, promovendo a
          melhoria contínua e a competitividade de nossos parceiros. Nossos
          valores fundamentais incluem integridade, comprometimento, inovação e
          foco no cliente, guiando todas as nossas ações e decisões.
        </p>
      </div>
      <div className="w-[45%] flex justify-center">
        <Image
          className="object-contain"
          alt="Logo Atitude CT"
          src={'/logo-azul-escrita.png'}
          width={1920}
          height={1080}
          quality={100}
        />
      </div>
    </section>
  )
}
