import Image from "next/image";
import Whatsapp from "./svg/whatsapp";
import Instagram from "./svg/instagram";
import Email from "./svg/email";

export default function _Footer() {
  return (
    <footer className="flex min-w-full flex-col justify-end bg-foreground p-12 font-extralight text-background md:min-h-screen">
      <div className="my-12 flex">
        <div className="max-w-44">
          <Image
            alt="Logo Atitude CT"
            src={"/svg/logo-azul.svg"}
            width={1920}
            height={1080}
          />
          <h4 className="text-center text-4xl font-bold">ATITUDE</h4>
          <h5 className="text-nowrap text-center text-xs">
            Consultoria e Treinamento
          </h5>
        </div>
        <div className="flex w-full justify-end gap-x-12">
          <ul className="font-bold">
            Sobre
            <li className="font-extralight">
              <a href="">Atitude</a>
            </li>
            <li className="font-extralight">
              <a href="">Equipe</a>
            </li>
          </ul>
          <ul className="font-bold">
            Home
            <li className="font-extralight">
              <a href="">Contatos</a>
            </li>
            <li className="font-extralight">
              <a href="">Palestras</a>
            </li>
            <li className="font-extralight">
              <a href="">Soluções</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex w-full flex-col justify-between border-t-2 border-border py-6 md:flex-row">
        <p className="md:order1 order-2 flex items-center">
          &copy; Atitude CT, 2024. Todos os direitos reservados
        </p>
        <div className="order-1 mb-6 flex items-center gap-x-3 md:order-2">
          <h6>Sigam-nos:</h6>
          <ul className="flex">
            <li>
              <a href="wa.me/554791656432">
                <Whatsapp />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/atitude.ct.empresarial/">
                <Instagram />
              </a>
            </li>
            <li>
              <a href="mailto:mailto:consultor@atitudect.com.br">
                <Email />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
