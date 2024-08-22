import Image from "next/image";

export default function About() {
  return (
    <section className="text-gray flex min-h-screen min-w-full flex-col bg-about bg-contain bg-left bg-no-repeat px-20 py-12 md:flex-row">
      <div className="flex flex-col justify-center md:w-[55%]">
        <h1 className="text-gray pb-6 text-6xl font-bold">
          Sobre a Atitude CT
        </h1>
        <p className="text-xl font-medium">
          Fundada em 2002, a Atitude Consultoria e Treinamento é especializada
          em soluções para organizações de diversos setores.
        </p>
        <h2 className="pb-6 pt-6 text-4xl font-bold">
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
      <div className="flex justify-center md:w-[45%]">
        <Image
          className="object-contain"
          alt="Logo Atitude CT"
          src={"/logo-azul-escrita.png"}
          width={1920}
          height={1080}
          quality={100}
        />
      </div>
    </section>
  );
}
