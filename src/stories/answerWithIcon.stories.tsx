import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { OptionType } from 'components/Option'
import { COMMON_STYLES_CONTROLS } from 'constants/controls'
import { ControlsCategories } from 'constants/rootConstants'
import { ComplexAnswerContent } from 'content/ComplexAnswerContent'

import { AnswerWithIcon } from 'components/AnswerWithIcon'

// eslint-disable-next-line import/no-default-export
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/AnswerWithIcon',
  component: AnswerWithIcon,
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
    iconSrc: {
      table: {
        category: ControlsCategories.ADDON,
      },
    },
    iconWidth: {
      control: 'text',
      table: {
        category: ControlsCategories.ADDON,
      },
    },
    iconHeight: {
      control: 'text',
      table: {
        category: ControlsCategories.ADDON,
      },
    },
    reverse: {
      table: {
        category: ControlsCategories.ADDON,
      },
    },
    spacingBetweenIconAndContent: {
      control: 'text',
      table: {
        category: ControlsCategories.ADDON,
      },
    },
    activeBorder: {
      control: 'text',
      table: {
        category: ControlsCategories.SIZES,
      },
    },
  },
} as ComponentMeta<typeof AnswerWithIcon>

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof AnswerWithIcon> = (args) => (
  <AnswerWithIcon {...args} />
)

// 👇 Each story then reuses that template
export const Simple = Template.bind({})
Simple.args = {
  children: 'Answer with big amount of words and letters',
  type: OptionType.CHECKBOX,
  boxShadow: 'rgb(223 227 243) 0px 8px 20px;',
  isFullWidth: true,
  maxWidth: 320,
  height: 64,
  backgroundColor: '#ffffff',
  color: 'rgb(45, 50, 64)',
  fontSize: 17,
  lineHeight: 22,
  borderRadius: '20px',
  padding: '0 15px',
  value: 'User answer',
  iconSrc: 'https://cdn-icons-png.flaticon.com/512/1791/1791311.png',
  iconHeight: '24px',
  spacingBetweenIconAndContent: '12px',
}

export const Complex = Template.bind({})
Complex.args = {
  children: <ComplexAnswerContent />,
  type: OptionType.CHECKBOX,
  boxShadow: 'rgb(223 227 243) 0px 8px 20px;',
  isFullWidth: true,
  maxWidth: 320,
  backgroundColor: '#ffffff',
  color: 'rgb(45, 50, 64)',
  fontSize: 17,
  lineHeight: 22,
  borderRadius: '20px',
  padding: '10px 15px',
  value: 'User answer',
  iconSrc: 'https://cdn-icons-png.flaticon.com/512/1791/1791311.png',
  iconHeight: '24px',
  spacingBetweenIconAndContent: '12px',
}
