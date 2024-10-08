import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import checkIcon from 'assets/images/check-icon-green.svg'
import crossIcon from 'assets/images/cross-icon.svg'

import {
  InputWithFloatPlaceholder,
  InputWithFloatPlaceholderTheme,
} from 'components/InputWithFloatPlaceholder'
import { COMMON_STYLES_CONTROLS } from 'constants/controls'

// eslint-disable-next-line import/no-default-export
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/InputWithFloatPlaceholder',
  component: InputWithFloatPlaceholder,
  argTypes: {
    ...COMMON_STYLES_CONTROLS,
  },
} as ComponentMeta<typeof InputWithFloatPlaceholder>

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof InputWithFloatPlaceholder> = (args) => (
  <InputWithFloatPlaceholder {...args} />
)

// 👇 Each story then reuses that template
export const Regular = Template.bind({})
Regular.args = {
  maxWidth: '320px',
  width: '260px',
  label: 'Your email',
  isValid: true,
  color: 'rgb(45, 50, 64)',
  fontSize: '15px',
  fontWeight: '500',
  lineHeight: '1px',
  borderRadius: '10px',
  backgroundColor: 'rgb(255, 255, 255)',
  border: '1px solid rgb(129, 132, 140)',
  padding: '32px 52px 8px 16px',
  hasValidationIcon: true,
  value: 'example value',
  checkIconSvg: checkIcon,
  crossIconSvg: crossIcon,
}

export const DancebitInput = Template.bind({})
DancebitInput.args = {
  value: 'example value',
  isValid: true,
  theme: InputWithFloatPlaceholderTheme.DANCEBIT,
}

export const NutrimateInput = Template.bind({})
NutrimateInput.args = {
  value: 'some value',
  isValid: false,
  theme: InputWithFloatPlaceholderTheme.NUTRIMATE,
}

export const CardimateInput = Template.bind({})
CardimateInput.args = {
  value: 'some value',
  isValid: false,
  theme: InputWithFloatPlaceholderTheme.CARDIMATE,
}
