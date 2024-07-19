export enum TaskType {
  "VIDEO" = "VIDEO",
  "SUBSCRIBE" = "SUBSCRIBE",
  "TELEGRAM" = "TELEGRAM"
}

// TODO: Поправить модель если надо
export type TaskItem = {
  id: number;
  title: string;
  reward: number;
  url: string;
  type: TaskType;
  total: number;
  remaining: number;
  emodji?: string;
  completed?: boolean;
};

export type StorageTask = {
  id: number;
  timestamp: Date;
};
