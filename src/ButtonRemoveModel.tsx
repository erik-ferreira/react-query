import { useMutation } from "@tanstack/react-query"

import { Button } from "./components/ui/button"

import { deleteModel } from "./requests/model"
import { modelKeys } from "./defaults/keys/model"
import { queryClient } from "./services/query-client"
import { ModelProps } from "./typings/models"

interface ButtonRemoveModelProps {
  id: number
}

export function ButtonRemoveModel({ id }: ButtonRemoveModelProps) {
  const { mutateAsync: deleteModelFnc } = useMutation({
    mutationFn: deleteModel,
    onSuccess(_, model_id) {
      const cachedListModels: ModelProps[] =
        queryClient.getQueryData([modelKeys.list]) || []

      const newModels = cachedListModels.filter(
        (model) => model.id !== model_id
      )

      queryClient.setQueryData([modelKeys.list], () => newModels)
    },
  })

  return <Button onClick={() => deleteModelFnc(id)}>X</Button>
}
