import React from 'react'

import { IThemedComponent } from 'models/common'
import { IAnswerButtonProps } from 'models/answer'
import { Option } from '../Option'
import { IOptionProps } from '../Option/Option'
import { StyledAnswerWithIcon as S } from './AnswerWithIcon.styles'

export interface IAnswerWithIconContentProps {
  spacingBetweenIconAndContent?: string
}

export interface IAnswerWithIconProps
  extends IAnswerButtonProps,
    IAnswerWithIconContentProps {
  /**
   * Icon path
   */
  iconSrc?: string
  /**
   * Icon width
   */
  iconWidth?: string
  /**
   * Icon min width
   */
  iconMinWidth?: string
  /**
   * Icon height
   */
  iconHeight?: string
  /**
   * Icon min height
   */
  iconMinHeight?: string
  /**
   * Should icon render on the left side
   */
  reverse?: boolean
  /**
   * Define vertical alignment for icon
   */
  iconAlignSelf?: 'flex-start' | 'center' | 'flex-end' | 'stretch'
}

export const enum answerWithIconTheme {
  DANCEBIT = 'dancebit',
}

const answerWithIconThemes: Record<string, Record<string, string | boolean>> = {
  dancebit: {
    type: 'radio',
    isFullWidth: true,
    height: '100px',
    backgroundColor: '#f5f6f7',
    activeBackgroundColor: '#eaf7ff',
    boxShadow: '0 0 0 1px#E9E9E9',
    color: '#17202A',
    activeColor: '#17202A',
    fontSize: '17px',
    fontWeight: '700',
    lineHeight: '24px',
    borderRadius: '16px',
    contentHorizontalAlign: 'flex-start',
    padding: '0 16px 0 8px',
    iconHeight: '100px',
    iconMinHeight: '100px',
    iconMinWidth: '100px',
    spacingBetweenIconAndContent: '16px',
    iconAlignSelf: 'flex-end',
    activeBoxShadow: ' 0 0 0 2px #03AAF5',
  },
}

const AnswerWithIconBase: React.FC<IAnswerWithIconProps & IOptionProps> = ({
  children,
  type,
  value,
  name,
  checked,
  disabled,
  onChange,
  iconSrc,
  iconWidth,
  iconMinWidth,
  iconMinHeight,
  iconHeight,
  spacingBetweenIconAndContent,
  iconAlignSelf,
  ...props
}) => (
  <Option
    value={value}
    name={name}
    type={type}
    checked={checked}
    disabled={disabled}
    onChange={onChange}
  >
    <S.Root {...props}>
      {iconSrc && (
        <S.Icon
          src={iconSrc}
          alt=""
          style={{
            width: iconWidth,
            height: iconHeight,
            alignSelf: iconAlignSelf,
            minHeight: iconMinHeight,
            minWidth: iconMinWidth,
          }}
        />
      )}
      <S.Content spacingBetweenIconAndContent={spacingBetweenIconAndContent}>
        <div>{children}</div>
      </S.Content>
    </S.Root>
  </Option>
)

export const AnswerWithIcon: React.FC<
  IAnswerWithIconProps & IOptionProps & IThemedComponent
> = ({ theme, ...props }) => (
  <AnswerWithIconBase {...(theme && answerWithIconThemes[theme])} {...props} />
)
