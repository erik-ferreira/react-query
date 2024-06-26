import { Button } from "./components/ui/button"

import { useDeleteModel } from "./hooks/useModel"

interface ButtonRemoveModelProps {
  id: number
}

export function ButtonRemoveModel({ id }: ButtonRemoveModelProps) {
  const { mutateAsync: deleteModelFnc } = useDeleteModel()

  return <Button onClick={() => deleteModelFnc(id)}>X</Button>
}
