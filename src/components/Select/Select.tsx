import React, { useRef, FocusEvent } from 'react'
import ReactSelect, { MultiValue, SingleValue } from 'react-select'
import { IColorsProps } from 'models/colors'
import { IFontsProps } from 'models/fonts'
import { IDimensionsProps } from 'models/dimensions'
import { StyledSelect as S, customSelectStyles } from './Select.styles'

export interface IOptions {
  value: any
  label: string
}

export interface IPlaceholder {
  placeholderFontSize?: string
  placeholderLineHeight?: string
  placeholderFontWeight?: string
  placeholderColor?: string
}

export interface ISelectProps
  extends IColorsProps,
    IFontsProps,
    IDimensionsProps,
    IPlaceholder {
  placeholder?: string
  options?: IOptions[]
  defaultValue?: IOptions | undefined | IOptions[]
  isMultiSelect?: boolean
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void
  onChange?: (event: MultiValue<IOptions> | SingleValue<IOptions>) => void
  selectedIcon?: string
  focusedOptionBorder?: string
  optionBoxShadow?: string
  openedBackgroundColor?: string
  closedBackgroundColor?: string
  menuPadding?: string
  optionMinHeight?: string
}

export const Select: React.FC<ISelectProps> = ({
  placeholder = '',
  options = [],
  selectedIcon,
  isMultiSelect = false,
  defaultValue,
  onBlur,
  onChange,
  ...props
}) => {
  const rootRef = useRef<HTMLDivElement>(null)
  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    onBlur && onBlur(event)
  }

  const handleChange = (
    event: MultiValue<IOptions> | SingleValue<IOptions>,
  ) => {
    onChange && onChange(event)
  }

  const CustomOption = ({
    innerProps,
    isDisabled,
    innerRef,
    isSelected,
    isMulti,
    children,
  }: any) =>
    !isDisabled ? (
      <S.Option {...innerProps} {...props} ref={innerRef}>
        {children}
        {isSelected && <S.SelectedIcon selectedIcon={selectedIcon} />}
        {isMulti && !isSelected && <S.CircleMarkIcon />}
      </S.Option>
    ) : null

  const MultiValueContainer = ({ selectProps, data }: any) => {
    const values = selectProps.value
    if (values) {
      return values[values.length - 1].label === data.label ? (
        data.label
      ) : (
        <S.MultiValue {...props}>{`${data.label},`} </S.MultiValue>
      )
    }
    return ''
  }

  const handleMenuOpen = () => {
    setTimeout(() => {
      if (rootRef.current) {
        rootRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'end',
        })
      }
    }, 0)
  }

  return (
    <S.Root ref={rootRef}>
      <S.Placeholder {...props}>{placeholder}</S.Placeholder>
      <ReactSelect
        defaultValue={defaultValue}
        isMulti={isMultiSelect}
        options={options}
        hideSelectedOptions={false}
        styles={customSelectStyles({ ...props })}
        isClearable={false}
        isSearchable={false}
        onBlur={handleBlur}
        closeMenuOnSelect={!isMultiSelect}
        blurInputOnSelect={!isMultiSelect}
        onChange={handleChange}
        placeholder=""
        onMenuOpen={handleMenuOpen}
        components={{
          Option: CustomOption,
          MultiValueContainer,
        }}
        {...props}
      />
    </S.Root>
  )
}
