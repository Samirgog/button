import { TaskType } from "./types";
import { EmodjiName } from "@/shared/ui/emodji/types";

export const MAP_TASK_TYPES: Record<TaskType, string> = {
  [TaskType.VIDEO]: "watch the video",
  [TaskType.SUBSCRIBE]: "subscribe to the channel",
  [TaskType.TELEGRAM]: "join the group",
};

export const MAP_TASK_EMODJI: Record<TaskType, EmodjiName> = {
  [TaskType.VIDEO]: EmodjiName.EYES,
  [TaskType.SUBSCRIBE]: EmodjiName.SELFIE,
  [TaskType.TELEGRAM]: EmodjiName.SPEECH_BALLOON,
};
