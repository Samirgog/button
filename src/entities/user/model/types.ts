import { TaskItem } from "@/entities/task/model";

export type User = {
  id: number;
  telegramId: number;
  name?: string;
  balance?: number;
  earned?: number;
  referrals?: User[];
  referralParentId?: number;
  referralParent?: User;
  createdTasks?: TaskItem[];
  completedTasks?: TaskItem[];
};
