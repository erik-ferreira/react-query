import { useRef } from "react"

import { Input } from "@/components/ui/input"

import { Button } from "./components/ui/button"

import { TypeModel } from "./typings/models"

import { useCreateModel } from "./hooks/useModel"

export function CreateModel() {
  const nameRef = useRef<HTMLInputElement>(null)

  const { mutateAsync: createModelFnc, isPending } = useCreateModel()

  function handleSaveModel(type: TypeModel) {
    const name = nameRef.current?.value

    if (!name || !type) {
      return alert("Preencha os campos e tente novamente")
    }

    createModelFnc({
      id: Math.random() * 10000,
      name,
      tp_model: type,
    })
  }

  return (
    <div className="form">
      <Input placeholder="Informe o nome do modelo" ref={nameRef} />

      {isPending ? (
        <span>Carregando....</span>
      ) : (
        <>
          <Button type="button" onClick={() => handleSaveModel("driver")}>
            Salvar modelo de motorista
          </Button>
          <Button type="button" onClick={() => handleSaveModel("order")}>
            Salvar modelo de pedido
          </Button>
          <Button type="button" onClick={() => handleSaveModel("stop")}>
            Salvar modelo de parada
          </Button>
        </>
      )}
    </div>
  )
}
