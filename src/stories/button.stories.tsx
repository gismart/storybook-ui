import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { COMMON_STYLES_CONTROLS } from '../constants/controls'
import { ControlsCategories } from '../constants/root-constants'

import { Button } from '../components/Button'

// eslint-disable-next-line import/no-default-export
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Button',
  component: Button,
  argTypes: {
    ...COMMON_STYLES_CONTROLS,
    disabled: {
      table: {
        category: ControlsCategories.INTERACTION,
      },
    },
    disableBackgroundColor: {
      control: 'color',
      table: {
        category: ControlsCategories.COLORS,
      },
    },
    buttonRef: { control: false },
  },
} as ComponentMeta<typeof Button>

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

// 👇 Each story then reuses that template
export const Regular = Template.bind({})
Regular.args = {
  isFullWidth: true,
  children: 'Ok, Got it!',
  height: 50,
  lineHeight: 50,
  borderRadius: '12px',
  padding: '0 15px',
  maxWidth: 320,
  fontSize: 17,
  backgroundColor: 'rgb(255, 130, 118)',
}