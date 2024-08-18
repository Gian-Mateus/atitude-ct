import LogoIcon from './svg/logo-icon'

export default function _Header() {
  return (
    <header className="flex min-w-full justify-center bg-primary text-background">
      <nav className="flex w-full max-w-screen-lg justify-between px-12 py-4 font-bold">
        <div className="flex items-center gap-x-4">
          <LogoIcon fill="#fff" opacity="1" width="45" height="45" />
          <h1 className="font-bold text-3xl">
            ATITUDE
            {/* <small className="font-normal text-lg pl-2">
              Consultoria e Treinamento
            </small> */}
          </h1>
        </div>
        <ul className="flex gap-4 items-center font-normal text-xl">
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Soluções</a>
          </li>
          <li>
            <a href="#">Palestras</a>
          </li>
          <li>
            <a href="#">Contatos</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
