export interface Classes {
  root: string[],
  label: string[],
  labelTitle: string[],
  labelCounter: string[],
  labelCounterNumber: string[],
  labelCounterIcon: string[],
  labelChevronIcon: string[],
  labelChevronIconOpen: string[],
  dropdown: string[],
  options: string[],
  option: string[],
  optionLabel: string[],
  optionIcon: string[],
}

export interface Props {
  multiple?: boolean;
  options: any[];
  title: string;
  modelValue: any;
  optionLabel: string;
  optionValue: string;
  modifyClasses?: (initialClasses: Classes) => Classes;
}
