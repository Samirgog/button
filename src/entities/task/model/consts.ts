import { TTaskTypesEnum } from "@/shared/generated";

import { EmodjiName } from "@/shared/ui/emodji/types";

export const STORAGE_KEY_TASKS = "TASKS";

export const MAP_TASK_TYPES: Record<TTaskTypesEnum, string> = {
  [TTaskTypesEnum.Video]: "watch the video",
  [TTaskTypesEnum.Subscribe]: "subscribe to the channel",
  [TTaskTypesEnum.Join]: "join the group"
};

export const MAP_TASK_EMODJI: Record<TTaskTypesEnum, EmodjiName> = {
  [TTaskTypesEnum.Video]: EmodjiName.EYES,
  [TTaskTypesEnum.Subscribe]: EmodjiName.SELFIE,
  [TTaskTypesEnum.Join]: EmodjiName.SPEECH_BALLOON
};
