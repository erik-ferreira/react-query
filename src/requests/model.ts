import { ModelProps } from "@/typings/models"

export async function getModels(): Promise<ModelProps[]> {
  // delay 2 seconds to simulate request to backend
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return [
    { id: 1, name: "Plataforma 1", tp_model: "driver" },
    { id: 2, name: "Plataforma 2", tp_model: "driver" },
    { id: 3, name: "Plataforma 3", tp_model: "order" },
    { id: 4, name: "Plataforma 4", tp_model: "order" },
    { id: 5, name: "Plataforma 5", tp_model: "stop" },
  ]
}

export async function createModel(data: ModelProps) {
  // delay 2 seconds to simulate request to backend
  await new Promise((resolve) => setTimeout(resolve, 2000))

  console.log("data", data)
}
