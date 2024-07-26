import React, { useState } from "react";

import { TTaskTypesEnum } from "@/shared/generated";
import { Button, Select, selectModel, Stack } from "@/shared/ui";
import { Input } from "@/shared/ui/input";

const optionsSelectType: selectModel.OptionSelect[] = [
  { label: "Watch video", value: TTaskTypesEnum.Video },
  { label: "Subscribe channel", value: TTaskTypesEnum.Subscribe },
  { label: "Join telegram chat", value: TTaskTypesEnum.Join }
];

export const CreateTasks: React.FC = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState<selectModel.OptionSelect>();
  const [url, setUrl] = useState("");
  const [reward, setReward] = useState(0);
  const [auditory, setAuditory] = useState(0);

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event?.target?.value);
  };

  const handleSelectType = (selected: selectModel.OptionSelect) => {
    setType(selected);
  };

  const handleChangeUrl = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event?.target?.value);
  };

  const handleChangeReward = (value: number) => {
    setReward(value);
  };

  const handleChangeAuditory = (value: number) => {
    setAuditory(value);
  };

  const handleChangeNumberInput = (onChange: (value: number) => void) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      // eslint-disable-next-line no-implicit-coercion
      if (!Number.isNaN(+event?.target?.value)) {
        onChange(Number(event?.target?.value));
      }
    };
  };

  const handleClickCreate = () => {
    console.log({ title, type, url, reward, auditory });
  };

  const isDisabledButton = !title || !type?.value || !url || !reward || !auditory;

  return (
    <Stack direction="column" gap={24}>
      <Input label="Title" value={title} onChange={handleChangeTitle} />
      <Select label="Type" options={optionsSelectType} onSelectValue={handleSelectType} />
      <Input label="URL" value={url} onChange={handleChangeUrl} />
      <Stack justify="space-between">
        <Input
          label="Reward"
          value={reward}
          onChange={handleChangeNumberInput(handleChangeReward)}
        />
        <Input
          label="Auditory"
          value={auditory}
          onChange={handleChangeNumberInput(handleChangeAuditory)}
        />
      </Stack>
      <Button size="md" disabled={isDisabledButton} onClick={handleClickCreate}>
        Create and pay
      </Button>
    </Stack>
  );
};
