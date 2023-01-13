/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import styled from 'styled-components'
import { GroupBase, StylesConfig } from 'react-select'

import { CommonColorsStyles } from '../../styles/CommonColors.styles'
import { IFontsProps } from '../../models/fonts'
import {
  IOptions,
  IPlaceholder,
  ISelectProps,
} from '../../components/Select/Select'
import { CommonFontsStyles } from '../../styles/CommonFonts.styles'

export const customSelectStyles = ({
  focusedOptionBorder,
  optionBoxShadow,
  openedBackgroundColor,
  closedBackgroundColor,
  fontSize,
  fontWeight,
  minHeight,
  menuPadding,
  borderRadius,
  border,
}: ISelectProps): StylesConfig<IOptions, boolean, GroupBase<IOptions>> => ({
  menu: () => ({
    border: focusedOptionBorder,
    borderRadius: borderRadius || '10px',
    padding: '7px 0',
    marginTop: '8px',
  }),
  control: (_, state) => ({
    // none of react-select's styles are passed to <Control />
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: state.selectProps.menuIsOpen
      ? focusedOptionBorder
      : border || '1px solid transparent',
    borderRadius: borderRadius || '10px',
    padding: menuPadding,
    minHeight,
    backgroundColor: state.selectProps.menuIsOpen
      ? openedBackgroundColor
      : closedBackgroundColor,
    boxShadow: state.selectProps.menuIsOpen ? 'none' : optionBoxShadow,
  }),
  valueContainer: (provided) => ({
    ...provided,
    margin: 0,
    padding: 0,
    overflow: 'visible',
    position: 'relative',
    alignSelf: 'flex-end',
    fontWeight,
    fontSize,
  }),
  multiValue: (provided) => ({
    ...provided,
    margin: 0,
    padding: 0,
    backgroundColor: 'transparent',
    marginRight: 5,
  }),

  multiValueRemove: () => ({
    display: 'none',
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    marginTop: '-16px',
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: '#17202a',
    padding: 0,
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  input: (provided) => ({
    ...provided,
    display: 'none',
  }),
  singleValue: (provided) => ({
    ...provided,
    margin: 0,
    padding: 0,
  }),
})

export const StyledSelect = {
  Root: styled.div`
    position: relative;
  `,
  Option: styled.div<ISelectProps>`
    ${CommonColorsStyles};
    display: flex;
    align-items: center;
    min-height: ${({ minHeight }) => minHeight || '0'};
    height: ${({ height }) => height || 'auto'};
    padding: ${({ padding }) => padding || 0};
    min-height: ${({ optionMinHeight }) => optionMinHeight || '40px'};
    cursor: pointer;
    position: relative;
    border-bottom: 1px solid #dadadd;

    &:last-child {
      border-bottom: 0;
    }
  `,
  SelectedIcon: styled.span<{ selectedIcon: any }>`
    width: 20px;
    height: 20px;
    background: ${({ selectedIcon }) =>
      `url(${selectedIcon}) no-repeat center`};
    background-size: contain;
    position: absolute;
    right: 21px;
    top: calc(50% - 10px);
  `,
  CircleMarkIcon: styled.span`
    width: 20px;
    height: 20px;
    opacity: 0.5;
    border: 1px solid #555965;
    border-radius: 50%;
    position: absolute;
    top: calc(50% - 10px);
    right: 20px;
  `,
  MultiValue: styled.span<IFontsProps>`
    ${CommonFontsStyles};
    margin-right: 4px;

    &:last-child {
      margin-right: 0;
    }
  `,
  Placeholder: styled.span<IPlaceholder>`
    font-weight: ${({ placeholderFontWeight }) => placeholderFontWeight || 400};
    font-size: ${({ placeholderFontSize }) => placeholderFontSize || '13px'};
    line-height: ${({ placeholderLineHeight }) =>
      placeholderLineHeight || '15px'};
    color: ${({ placeholderColor }) => placeholderColor || '#2d3240'};
    position: absolute;
    z-index: 1;
    top: 6px;
    left: 21px;
    pointer-events: none;
  `,
}
