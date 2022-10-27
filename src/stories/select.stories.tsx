import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Select } from 'components/Select'
import checkIcon from 'assets/images/check-icon-green.svg'

// eslint-disable-next-line import/no-default-export
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Select',
  component: Select,
} as ComponentMeta<typeof Select>

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

// 👇 Each story then reuses that template
export const Multi = Template.bind({})
Multi.args = {
  color: 'rgb(45, 50, 64)',
  fontSize: '15px',
  fontWeight: '600',
  padding: '0 51px 0 21px',
  menuPadding: '22px 16px 6px 20px',
  borderRadius: '10px',
  backgroundColor: 'white',
  border: '1px solid rgb(129, 132, 140)',
  isMultiSelect: true,
  focusedOptionBorder: '1px solid #000000',
  optionBoxShadow: '0px 8px 20px #dfe3f3',
  placeholder: 'Target areas',
  placeholderFontSize: '13px',
  placeholderLineHeight: '15px',
  placeholderFontWeight: '400',
  placeholderColor: '#2d3240',
  options: [
    { value: 'mouth', label: 'mouth' },
    { value: 'chin', label: 'chin' },
    { value: 'neck', label: 'neck' },
    {
      value: 'neckline',
      label: 'neckline',
    },
  ],
  optionMinHeight: '40px',
  selectedIcon: checkIcon,
  defaultValue: [{ value: 'chin', label: 'chin' }],
}

export const Single = Template.bind({})
Single.args = {
  color: 'rgb(45, 50, 64)',
  fontSize: '15px',
  fontWeight: '600',
  padding: '0 51px 0 21px',
  menuPadding: '22px 16px 6px 20px',
  borderRadius: '10px',
  backgroundColor: 'white',
  border: '1px solid rgb(129, 132, 140)',
  isMultiSelect: false,
  focusedOptionBorder: '1px solid #000000',
  optionBoxShadow: '0px 8px 20px #dfe3f3',
  placeholder: 'Target areas',
  placeholderFontSize: '13px',
  placeholderLineHeight: '15px',
  placeholderFontWeight: '400',
  placeholderColor: '#2d3240',
  options: [
    { value: 'mouth', label: 'mouth' },
    { value: 'chin', label: 'chin' },
    { value: 'neck', label: 'neck' },
    {
      value: 'neckline',
      label: 'neckline',
    },
  ],
  optionMinHeight: '40px',
  defaultValue: { value: 'chin', label: 'chin' },
}
