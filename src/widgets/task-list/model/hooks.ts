import { taskModel } from "@/entities/task";

const mock = {
    sections: [
        {
            name: 'Watch Video',
            items: [
                {title: 'Заголовок какого-то видоса', reward: 50, url: 'https://www.youtube.com/watch?v=daWCu1FqDaE'},
                {title: 'Заголовок какого-то видоса', reward: 50, url: 'https://www.youtube.com/watch?v=daWCu1FqDaE'},
                {title: 'Заголовок какого-то видоса', reward: 50, url: 'https://www.youtube.com/watch?v=daWCu1FqDaE'},
                {title: 'Заголовок какого-то видоса', reward: 50, url: 'https://www.youtube.com/watch?v=daWCu1FqDaE'},
                {title: 'Заголовок какого-то видоса', reward: 50, url: 'https://www.youtube.com/watch?v=daWCu1FqDaE'},
                {title: 'Заголовок какого-то видоса', reward: 50, url: 'https://www.youtube.com/watch?v=daWCu1FqDaE'},
            ]
        }
    ]   
}
export function useTaskList() {
    // TODO: реализация запроса списка задач

    return mock;
}