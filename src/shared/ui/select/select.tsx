import React, { useState } from "react";

import { Radio } from "./radio";
import { ModalSelectStyled, SelectLabelStyled, SelectStyled, SelectWrapper } from "./styled";
import { OptionSelect } from "./types";

type Props = {
  label?: string;
  options: OptionSelect[];
  onSelectValue: (option: OptionSelect) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

type PropsModal = {
  open: boolean;
  options: OptionSelect[];
  onCheck: (option: OptionSelect) => void;
};

const ModalSelect: React.FC<PropsModal> = ({ options, onCheck, open = false }) => {
  const [checked, setChecked] = useState(false);

  const getHandleCheck = (value: OptionSelect) => () => {
    setChecked((prev) => !prev);
    onCheck(value);
  };

  if (!open) {
    return null;
  }

  return (
    <ModalSelectStyled>
      {options?.map((option, index) => (
        <Radio
          onClick={getHandleCheck(option)}
          key={index}
          label={option.label}
          checked={checked}
        />
      ))}
    </ModalSelectStyled>
  );
};

export const Select: React.FC<Props> = ({ label, options, onSelectValue, ...props }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selected, setSelected] = useState<OptionSelect>();

  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    event?.stopPropagation();
    event?.preventDefault();
    setOpenModal(true);
  };

  const handleSelect = (option: OptionSelect) => {
    setSelected(option);
    onSelectValue(option);
    setOpenModal(false);
  };

  return (
    <div style={{ position: "relative" }}>
      <ModalSelect open={openModal} options={options} onCheck={handleSelect} />
      <SelectWrapper>
        <SelectLabelStyled>{label}</SelectLabelStyled>
        <SelectStyled {...props} onClick={handleClick} value={selected?.label} />
      </SelectWrapper>
    </div>
  );
};
