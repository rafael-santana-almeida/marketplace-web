import {
  AccessIcon,
  ArrowRight02Icon,
  Mail02Icon,
  ViewIcon,
} from 'hugeicons-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function SignIn() {
  return (
    <>
      <div>
        <header className="flex flex-col gap-2">
          <h1 className="font-title text-customGray-500 text-2xl font-bold leading-[1.2]">
            Acesse sua conta
          </h1>
          <span className="font-text text-customGray-300 text-sm leading-[1.2]">
            Informe seu e-mail e senha para entrar
          </span>
        </header>

        <form className="mt-12 flex flex-col">
          <div className="group relative">
            <Label
              className="font-text text-customGray-300 group-focus-within:text-orange-base text-xs font-medium uppercase leading-[1.2]"
              htmlFor="email"
            >
              E-mail
            </Label>

            <div className="relative">
              <Input
                id="email"
                type="email"
                placeholder="Seu e-mail cadastrado"
                className="group-focus-within:caret-orange-base peer pl-[34px]"
              />
              <Mail02Icon className="group-focus-within:text-orange-base peer-[:not(:placeholder-shown)]:text-orange-base text-customGray-200 absolute left-[2px] top-1/2 -translate-y-1/2 transform" />
            </div>
          </div>

          <div className="group relative mt-5">
            <Label
              className="group-focus-within:text-orange-base font-text text-customGray-300 text-xs font-medium uppercase leading-[1.2]"
              htmlFor="password"
            >
              Senha
            </Label>

            <div className="relative">
              <Input
                id="password"
                placeholder="Sua senha de acesso"
                className="group-focus-within:caret-orange-base peer pl-[34px]"
                type="password"
              />
              <AccessIcon className="peer-[:not(:placeholder-shown)]:text-orange-base text-customGray-200 group-focus-within:text-orange-base absolute left-[2px] top-1/2 -translate-y-1/2 transform" />
              <ViewIcon className="text-customGray-200 absolute right-[2px] top-1/2 -translate-y-1/2 transform" />
            </div>
          </div>

          <Button className="mt-12 flex justify-between leading-[1.2]">
            Acessar
            <ArrowRight02Icon />
          </Button>
        </form>
      </div>

      <footer className="mt-auto flex flex-col gap-5">
        <span className="font-text text-customGray-300 text-base font-normal leading-[1.2]">
          Ainda não tem uma conta?
        </span>
        <Button
          variant="outline"
          asChild
          className="font-text flex justify-between leading-[1.2]"
        >
          <Link to="/sign-up">
            Cadastrar
            <ArrowRight02Icon />
          </Link>
        </Button>
      </footer>
    </>
  )
}
