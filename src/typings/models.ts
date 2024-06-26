export type TypeModel = "driver" | "order" | "stop"

export interface ModelProps {
  id: number
  name: string
  tp_model: TypeModel
}
