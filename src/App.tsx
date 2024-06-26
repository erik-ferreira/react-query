import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function App() {
  return (
    <main>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Nome do modelo</TableHead>
            <TableHead>Tipo de modelo</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>Plataforma 1</TableCell>
            <TableCell>Driver</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>Plataforma 2</TableCell>
            <TableCell>Driver</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  )
}
