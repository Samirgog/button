export enum TaskType {
    'VIDEO'='VIDEO',
    'SUBSCRIBE' = 'SUBSCRIBE',
    'TELEGRAM' = 'TELEGRAM'
}

// TODO: Поправить модель если надо
export type TaskItem = {
    id: number;
    title: string;
    reward: number;
    url: string;
    type: TaskType;
    emodji?: string;
    completed?: boolean;
}
