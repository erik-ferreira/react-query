import { useRef } from "react"
import { useMutation } from "@tanstack/react-query"

import { Input } from "@/components/ui/input"

import { Button } from "./components/ui/button"

import { queryClient } from "./services/query-client"

import { TypeModel, ModelProps } from "./typings/models"

import { createModel } from "./requests/model"

import { modelKeys } from "./defaults/keys/model"

export function CreateModel() {
  const nameRef = useRef<HTMLInputElement>(null)

  const { mutateAsync: createModelFnc, isPending } = useMutation({
    mutationFn: createModel,
    onSuccess(_, variables) {
      queryClient.setQueryData([modelKeys.list], (data: ModelProps[]) => {
        return [
          ...data,
          {
            id: variables.id,
            name: variables.name,
            tp_model: variables.tp_model,
          },
        ]
      })
    },
  })

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
