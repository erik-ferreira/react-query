import { useState } from "react"
import { useMutation } from "@tanstack/react-query"

import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "./components/ui/button"

import { TypeModel } from "./typings/models"
import { createModel } from "./requests/model"

export function CreateModel() {
  const [name, setName] = useState<string>("")
  const [type, setType] = useState<TypeModel>("driver")

  const { mutateAsync: createModelFnc } = useMutation({
    mutationFn: createModel,
  })

  function handleSaveModel() {
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
      <Input
        placeholder="Informe o nome do modelo"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <Select value={type} onValueChange={(val) => setType(val as TypeModel)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Tipo do modelo" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="driver">Motorista</SelectItem>
          <SelectItem value="stop">Parada</SelectItem>
          <SelectItem value="order">Pedido</SelectItem>
        </SelectContent>
      </Select>

      <Button type="button" onClick={handleSaveModel}>
        Salvar
      </Button>
    </div>
  )
}
