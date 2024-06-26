import { useQuery } from "@tanstack/react-query"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { getModels } from "./requests/model-services"

export function App() {
  const { data, isLoading } = useQuery({
    queryFn: getModels,
    queryKey: ["get-models"],
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
            </TableRow>
          </TableHeader>
          <TableBody>
            {!!data &&
              data.map((model) => (
                <TableRow key={model.id}>
                  <TableCell>{model.id}</TableCell>
                  <TableCell>{model.name}</TableCell>
                  <TableCell>{model.tp_model}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      )}
    </main>
  )
}
