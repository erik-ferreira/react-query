import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "./components/ui/button"

export function CreateModel() {
  return (
    <div className="form">
      <Input placeholder="Informe o nome do modelo" />

      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Tipo do modelo" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>

      <Button>Salvar</Button>
    </div>
  )
}
