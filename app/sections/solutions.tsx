import { Button } from "@/components/ui/button";

export default function Solutions() {
  return (
    <section className="flex min-h-screen min-w-full flex-col justify-center bg-solutions bg-contain bg-right bg-no-repeat px-24 py-6">
      <h1 className="mb-24 mt-8 text-7xl font-bold">Soluções</h1>
      <div className="mb-9 grid grid-cols-1 gap-x-20 gap-y-12 lg:grid-cols-2">
        <div className="md:max-h-48">
          <h3 className="pb-5 text-3xl font-bold">Diagnóstico e Implantação</h3>
          <p className="pb-5 text-lg">
            Identificamos e implementamos soluções para melhorar a eficiência e
            a produtividade de sua empresa.
          </p>
          <Button className="text-lg">Ver mais</Button>
        </div>
        <div className="md:max-h-48">
          <h3 className="pb-5 text-3xl font-bold">
            Produtividade em Processos
          </h3>
          <p className="pb-5 text-lg">
            Aumente a produtividade e reduza custos com estratégias pensadas
            para o seu negócio.
          </p>
          <Button className="text-lg">Ver mais</Button>
        </div>
        <div className="md:max-h-48">
          <h3 className="pb-5 text-3xl font-bold">Gestão de Pessoas</h3>
          <p className="pb-5 text-lg">
            Melhore a gestão de pessoas e tenha uma equipe unida e engajada
          </p>
          <Button className="text-lg">Ver mais</Button>
        </div>
        <div className="md:max-h-48">
          <h3 className="pb-5 text-3xl font-bold">Finanças</h3>
          <p className="pb-5 text-lg">
            Entenda a saúde da sua operação e tenha controle total das suas
            finanças e planejamento voltado para o futuro.
          </p>
          <Button className="text-lg">Ver mais</Button>
        </div>
      </div>
    </section>
  );
}
