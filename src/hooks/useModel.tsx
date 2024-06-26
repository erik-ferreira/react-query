import { useMutation, useQuery } from "@tanstack/react-query"

import { queryClient } from "@/services/query-client"
import { createModel, deleteModel, getModels } from "@/requests/model"

import { modelKeys } from "@/defaults/keys/model"
import { GetModelsParams, ModelProps } from "@/typings/models"

export function useGetModelList(params?: GetModelsParams) {
  const query = useQuery({
    queryFn: () => getModels(params),
    queryKey: [modelKeys.list],
  })

  return query
}

export function useCreateModel() {
  const mutation = useMutation({
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

  return mutation
}

export function useDeleteModel() {
  const mutation = useMutation({
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

  return mutation
}
