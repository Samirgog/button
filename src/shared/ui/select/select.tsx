import React from "react";

import StateManagedSelect from "react-select";

import { SelectStyled } from "./styled";

export const Select: React.FC<StateManagedSelect> = ({ ...props }) => {
  return <SelectStyled {...props} />;
};
