import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

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
    iconAlignSelf: {
      table: {
        category: ControlsCategories.ALIGNMENT,
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
  type: 'checkbox',
  boxShadow: 'rgb(223 227 243) 0px 8px 20px;',
  isFullWidth: true,
  maxWidth: '320px',
  height: '64px',
  backgroundColor: '#ffffff',
  color: 'rgb(45, 50, 64)',
  fontSize: '17px',
  lineHeight: '22px',
  borderRadius: '20px',
  padding: '0 15px',
  value: 'User answer',
  iconSrc: 'https://cdn-icons-png.flaticon.com/512/1791/1791311.png',
  iconHeight: '24px',
  spacingBetweenIconAndContent: '12px',
}

export const SimpleNutrimate = Template.bind({})
SimpleNutrimate.args = {
  activeBackgroundColor: 'rgba(169, 205, 80, 0.2)',
  activeBorder: '1px solid #a9cd50',
  activeColor: '#2c3131',
  backgroundColor: '#ffffff',
  border: '1px solid #e9e9e9',
  borderRadius: '48px',
  children: 'Female',
  color: '#2c3131',
  fontSize: '17px',
  fontWeight: '600',
  height: '80px',
  iconHeight: '24px',
  iconSrc: 'https://cdn-icons-png.flaticon.com/512/1791/1791311.png',
  isFullWidth: true,
  lineHeight: '24px',
  maxWidth: '343px',
  padding: '0 16px',
  spacingBetweenIconAndContent: '16px',
  type: 'checkbox',
  value: 'Female',
}

export const Complex = Template.bind({})
Complex.args = {
  children: <ComplexAnswerContent />,
  type: 'checkbox',
  boxShadow: 'rgb(223 227 243) 0px 8px 20px;',
  isFullWidth: true,
  maxWidth: '320px',
  backgroundColor: '#ffffff',
  color: 'rgb(45, 50, 64)',
  fontSize: '17px',
  lineHeight: '22px',
  borderRadius: '20px',
  padding: '10px 15px',
  value: 'User answer',
  iconSrc: 'https://cdn-icons-png.flaticon.com/512/1791/1791311.png',
  iconHeight: '24px',
  spacingBetweenIconAndContent: '12px',
}

export const DancebitImage = Template.bind({})
DancebitImage.args = {
  children: 'Mid-sized',
  type: 'radio',
  isFullWidth: true,
  maxWidth: '343px',
  height: '100px',
  backgroundColor: '#F5F6F7',
  activeBackgroundColor: '#EAF7FF',
  boxShadow: '0 0 0 1px#E9E9E9',
  color: '#2C3131',
  activeColor: '#2C3131',
  fontSize: '17px',
  fontWeight: '700',
  lineHeight: '24px',
  borderRadius: '16px',
  contentHorizontalAlign: 'flex-start',
  padding: '0 16px 0 8px',
  value: 'mid',
  iconHeight: '100px',
  spacingBetweenIconAndContent: '16px',
  iconSrc: 'https://i.ibb.co/yBpRY8q/mid-size.png',
  iconAlignSelf: 'flex-end',
  activeBoxShadow: ' 0 0 0 2px #03AAF5',
}
