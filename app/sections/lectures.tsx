import Image from "next/image";

export default function Palestras() {
  return (
    <section className="flex min-h-screen min-w-full flex-col items-center justify-center bg-secondary text-background md:flex-row">
      <div className="my-6 px-8">
        <h1 className="text-2xl font-bold">
          Aumente o conhecimento da sua equipe com nossos cursos e palestras.
        </h1>
        <p>
          O Programa ENGAJAR é uma iniciativa projetada para capacitar sua
          equipe através de uma seleção diversificada de palestras.
          <b> Clique no card para saber mais.</b>
        </p>
      </div>
      <div className="mx-8 mb-6 max-w-sm rounded-3xl bg-background md:max-w-[30%]">
        <button className="grid gap-y-4 rounded-3xl p-8 text-center text-foreground ring-input hover:ring">
          <Image
            alt="Logo programa Engajar"
            src={"/svg/logo-engajar.svg"}
            width={1920}
            height={1080}
          />
          <h3 className="text-xl font-bold">PROGRAMA ENGAJAR</h3>
          <p>
            Impulsionando o Sucesso Empresarial: Um Ciclo de Conhecimento
            Transformador
          </p>
        </button>
      </div>
    </section>
  );
}
