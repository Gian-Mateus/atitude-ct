import Image from "next/image";

export default function Engajar() {
  return (
    <section className="flex min-h-screen min-w-full flex-col items-center bg-secondary p-6 text-background">
      <header className="mb-4">
        <h1 className="text-3xl">
          <b>ATITUDE CT</b> promove:
        </h1>
      </header>
      <div className="max-w-[70%] rounded-xl bg-background p-6">
        <Image
          className="px-20"
          alt="Logo programa engajar"
          src={"/svg/logo-engajar.svg"}
          width={1920}
          height={1080}
        />
        <div className="p-4 text-center text-foreground">
          <h3 className="font-bold">PROGRAMA ENGAJAR</h3>
          <p>
            Impulsionando o Sucesso Empresarial: Um Ciclo de Conhecimento
            Transformador
          </p>
        </div>
      </div>
    </section>
  );
}
