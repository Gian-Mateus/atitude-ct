import { Button } from '@/components/ui/button'

export default function Solutions() {
  return (
    <section className="flex flex-col justify-center min-w-full min-h-screen bg-solutions bg-no-repeat bg-right bg-contain px-24">
      <h1 className="text-7xl font-bold pb-24">Soluções</h1>
      <div className="grid grid-cols-2 gap-x-20 gap-y-12">
        <div className="max-h-48">
          <h3 className="text-3xl font-bold pb-5">Diagnóstico e Implantação</h3>
          <p className="pb-5 text-lg">
            Identificamos e implementamos soluções para melhorar a eficiência e
            a produtividade de sua empresa.
          </p>
          <Button className="text-lg">Ver mais</Button>
        </div>
        <div className="max-h-48">
          <h3 className="text-3xl font-bold pb-5">
            Produtividade em Processos
          </h3>
          <p className="pb-5 text-lg">
            Aumente a produtividade e reduza custos com estratégias pensadas
            para o seu negócio.
          </p>
          <Button className="text-lg">Ver mais</Button>
        </div>
        <div className="max-h-48">
          <h3 className="text-3xl font-bold pb-5">Gestão de Pessoas</h3>
          <p className="pb-5 text-lg">
            Melhore a gestão de pessoas e tenha uma equipe unida e engajada
          </p>
          <Button className="text-lg">Ver mais</Button>
        </div>
        <div className="max-h-48">
          <h3 className="text-3xl font-bold pb-5">Finanças</h3>
          <p className="pb-5 text-lg">
            Entenda a saúde da sua operação e tenha controle total das suas
            finanças e planejamento voltado para o futuro.
          </p>
          <Button className="text-lg">Ver mais</Button>
        </div>
      </div>
    </section>
  )
}
