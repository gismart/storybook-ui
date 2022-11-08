import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { OptionType } from 'components/Option'
import { COMMON_STYLES_CONTROLS } from 'constants/controls'
import { ControlsCategories } from 'constants/rootConstants'
import { ComplexAnswerContent } from 'content/ComplexAnswerContent'

import { Answer } from 'components/Answer'

// eslint-disable-next-line import/no-default-export
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Answer',
  component: Answer,
  argTypes: {
    ...COMMON_STYLES_CONTROLS,
    textAlign: {
      control: false,
      table: {
        category: ControlsCategories.ALIGNMENT,
      },
    },
    contentHorizontalAlign: {
      table: {
        category: ControlsCategories.ALIGNMENT,
      },
    },
    activeBackgroundColor: {
      control: 'color',
      table: {
        category: ControlsCategories.COLORS,
      },
    },
    activeColor: {
      control: 'color',
      table: {
        category: ControlsCategories.COLORS,
      },
    },
    activeBackgroundGradientColor: {
      control: 'text',
      table: {
        category: ControlsCategories.COLORS,
      },
    },
    checked: {
      table: {
        category: ControlsCategories.INTERACTION,
      },
    },
    disabled: {
      table: {
        category: ControlsCategories.INTERACTION,
      },
    },
    activeBorder: {
      control: 'text',
      table: {
        category: ControlsCategories.SIZES,
      },
    },
  },
} as ComponentMeta<typeof Answer>

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Answer> = (args) => <Answer {...args} />

// 👇 Each story then reuses that template
export const SimpleLuvly = Template.bind({})
SimpleLuvly.args = {
  children: 'Answer',
  type: OptionType.CHECKBOX,
  boxShadow: 'rgb(223 227 243) 0px 8px 20px;',
  isFullWidth: true,
  maxWidth: '320px',
  height: '64px',
  backgroundColor: '#ffffff',
  activeBackgroundColor: '#ff8276',
  color: 'rgb(45, 50, 64)',
  fontSize: '17px',
  borderRadius: '20px',
  padding: '0 15px',
  value: 'User answer',
}

export const ComplexLuvly = Template.bind({})
ComplexLuvly.args = {
  children: <ComplexAnswerContent />,
  type: OptionType.CHECKBOX,
  boxShadow: 'rgb(223 227 243) 0px 8px 20px;',
  isFullWidth: true,
  maxWidth: '320px',
  height: '64px',
  backgroundColor: '#ffffff',
  activeBackgroundColor: '#ff8276',
  color: 'rgb(45, 50, 64)',
  fontSize: '17px',
  borderRadius: '20px',
  padding: '0 15px',
  value: 'User answer',
}

export const SimpleDanceBit = Template.bind({})
SimpleDanceBit.args = {
  children: 'Answer',
  type: OptionType.CHECKBOX,
  isFullWidth: true,
  maxWidth: '320px',
  height: '64px',
  backgroundColor: 'rgb(245, 246, 247)',
  color: 'rgb(19, 29, 48);',
  fontSize: '16px',
  fontWeight: 'regular',
  borderRadius: '16px',
  padding: '0 15px',
  value: 'User answer',
  activeBackgroundColor: 'rgb(3, 170, 245)',
}
