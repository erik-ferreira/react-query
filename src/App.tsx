import { useQuery } from "@tanstack/react-query"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ButtonRemoveModel } from "./ButtonRemoveModel"

import { CreateModel } from "./CreateModel"

import { getModels } from "./requests/model"

import { modelKeys } from "./defaults/keys/model"

export function App() {
  const { data, isLoading } = useQuery({
    queryFn: getModels,
    queryKey: [modelKeys.list],
  })

  return (
    <main>
      {isLoading ? (
        <span>Carregando...</span>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Nome do modelo</TableHead>
              <TableHead>Tipo de modelo</TableHead>
              <TableHead>Remover</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {!!data &&
              data.map((model) => (
                <TableRow key={model.id}>
                  <TableCell>{model.id}</TableCell>
                  <TableCell>{model.name}</TableCell>
                  <TableCell>{model.tp_model}</TableCell>
                  <TableCell>
                    <ButtonRemoveModel id={model.id} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      )}

      <CreateModel />
    </main>
  )
}
