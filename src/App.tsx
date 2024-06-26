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
import { useGetModelList } from "./hooks/useModel"

export function App() {
  const { data, isLoading } = useGetModelList()

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
