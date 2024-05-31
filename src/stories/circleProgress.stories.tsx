import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { CircleProgress } from 'components/CircleProgress'
import { ControlsCategories } from 'constants/rootConstants'

// eslint-disable-next-line import/no-default-export
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/CircleProgress',
  component: CircleProgress,
  argTypes: {
    color: {
      control: 'color',
      table: {
        category: ControlsCategories.COLORS,
      },
    },
    strokeColorEmpty: {
      control: 'color',
      table: {
        category: ControlsCategories.COLORS,
      },
    },
    strokeColorFilled: {
      control: 'color',
      table: {
        category: ControlsCategories.COLORS,
      },
    },
  },
} as ComponentMeta<typeof CircleProgress>

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof CircleProgress> = (args) => (
  <CircleProgress {...args} />
)

// 👇 Each story then reuses that template
export const Dancebit = Template.bind({})
Dancebit.args = {
  value: 50,
  strokeColorFilled: '#03AAF5',
  strokeColorEmpty: '#F2F3F5',
}
