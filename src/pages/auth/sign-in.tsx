import {
  AccessIcon,
  ArrowRight02Icon,
  Mail02Icon,
  ViewIcon,
} from 'hugeicons-react'

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
          <div>
            <Label
              className="font-text text-customGray-300 text-xs font-medium uppercase leading-[1.2]"
              htmlFor="email"
            >
              E-mail
            </Label>

            <div className="relative">
              <Mail02Icon className="text-customGray-200 absolute left-[2px] top-1/2 -translate-y-1/2 transform" />
              <Input
                id="email"
                placeholder="Seu e-mail cadastrado"
                className="pl-[34px]"
              />
            </div>
          </div>

          <div className="mt-5">
            <Label
              className="font-text text-customGray-300 text-xs font-medium uppercase leading-[1.2]"
              htmlFor="password"
            >
              Senha
            </Label>

            <div className="relative">
              <AccessIcon className="text-customGray-200 absolute left-[2px] top-1/2 -translate-y-1/2 transform" />
              <Input
                id="password"
                placeholder="Sua senha de acesso"
                className="pl-[34px]"
              />
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
          className="font-text flex justify-between leading-[1.2]"
        >
          Cadastrar
          <ArrowRight02Icon />
        </Button>
      </footer>
    </>
  )
}
