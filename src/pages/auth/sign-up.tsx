import {
  AccessIcon,
  ArrowRight02Icon,
  CallIcon,
  ImageDownload02Icon,
  Mail02Icon,
  UserIcon,
  ViewIcon,
} from 'hugeicons-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function SignUp() {
  return (
    <>
      <div>
        <header className="flex flex-col gap-2">
          <h1 className="font-title text-customGray-500 text-2xl font-bold leading-[1.2]">
            Crie sua conta
          </h1>
          <span className="font-text text-customGray-300 text-sm leading-[1.2]">
            Informe os seus dados pessoais e de acesso
          </span>
        </header>

        <form className="mt-12 flex flex-col gap-12">
          <div>
            <h2 className="text-customGray-500 font-title text-lg font-bold leading-[1.2]">
              Perfil
            </h2>

            <div className="mt-5">
              <label
                htmlFor="profile-image"
                className="bg-shape group relative flex h-[7.5rem] w-[7.5rem] items-center justify-center rounded-xl hover:bg-black hover:opacity-60"
              >
                <ImageDownload02Icon className="text-orange-base h-8 w-8 group-hover:text-white" />
              </label>
              <input id="profile-image" type="file" className="hidden" />
            </div>

            <div className="group relative mt-5">
              <Label
                className="font-text text-customGray-300 group-focus-within:text-orange-base text-xs font-medium uppercase leading-[1.2]"
                htmlFor="name"
              >
                Nome
              </Label>

              <div className="relative">
                <Input
                  id="name"
                  placeholder="Seu nome completo"
                  className="group-focus-within:caret-orange-base peer pl-[34px]"
                />
                <UserIcon className="text-customGray-200 group-focus-within:text-orange-base peer-[:not(:placeholder-shown)]:text-orange-base absolute left-[2px] top-1/2 -translate-y-1/2 transform" />
              </div>
            </div>

            <div className="group relative mt-5">
              <Label
                className="font-text text-customGray-300 group-focus-within:text-orange-base text-xs font-medium uppercase leading-[1.2]"
                htmlFor="phone"
              >
                Telefone
              </Label>

              <div className="relative">
                <Input
                  id="phone"
                  placeholder="(00) 00000-0000"
                  className="group-focus-within:caret-orange-base peer pl-[34px]"
                />
                <CallIcon className="text-customGray-200 peer-[:not(:placeholder-shown)]:text-orange-base group-focus-within:text-orange-base absolute left-[2px] top-1/2 -translate-y-1/2 transform" />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-customGray-500 font-title text-lg font-bold leading-[1.2]">
              Acesso
            </h2>

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
                <Mail02Icon className="peer-[:not(:placeholder-shown)]:text-orange-base text-customGray-200 group-focus-within:text-orange-base absolute left-[2px] top-1/2 -translate-y-1/2 transform" />
              </div>
            </div>

            <div className="group relative mt-5">
              <Label
                className="font-text text-customGray-300 group-focus-within:text-orange-base text-xs font-medium uppercase leading-[1.2]"
                htmlFor="password"
              >
                Senha
              </Label>

              <div className="relative">
                <Input
                  id="password"
                  type="password"
                  placeholder="Senha de acesso"
                  className="group-focus-within:caret-orange-base peer pl-[34px]"
                />
                <AccessIcon className="peer-[:not(:placeholder-shown)]:text-orange-base text-customGray-200 group-focus-within:text-orange-base absolute left-[2px] top-1/2 -translate-y-1/2 transform" />
                <ViewIcon className="text-customGray-200 absolute right-[2px] top-1/2 -translate-y-1/2 transform" />
              </div>
            </div>

            <div className="group relative mt-5">
              <Label
                className="font-text text-customGray-300 group-focus-within:text-orange-base text-xs font-medium uppercase leading-[1.2]"
                htmlFor="password-confirm"
              >
                Confirmar senha
              </Label>

              <div className="relative">
                <Input
                  id="password-confirm"
                  type="password"
                  placeholder="Confirme a senha"
                  className="group-focus-within:caret-orange-base peer pl-[34px]"
                />
                <AccessIcon className="peer-[:not(:placeholder-shown)]:text-orange-base text-customGray-200 group-focus-within:text-orange-base absolute left-[2px] top-1/2 -translate-y-1/2 transform" />
                <ViewIcon className="text-customGray-200 absolute right-[2px] top-1/2 -translate-y-1/2 transform" />
              </div>
            </div>
          </div>

          <Button className="flex justify-between leading-[1.2]">
            Cadastrar
            <ArrowRight02Icon />
          </Button>
        </form>
      </div>

      <footer className="mt-20 flex flex-col gap-5">
        <span className="font-text text-customGray-300 text-base font-normal leading-[1.2]">
          Já tem uma conta?
        </span>
        <Button
          variant="outline"
          asChild
          className="font-text flex justify-between leading-[1.2]"
        >
          <Link to="/sign-in">
            Acessar
            <ArrowRight02Icon />
          </Link>
        </Button>
      </footer>
    </>
  )
}
