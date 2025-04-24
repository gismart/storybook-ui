import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { COMMON_STYLES_CONTROLS } from 'constants/controls'
import { ControlsCategories } from 'constants/rootConstants'

import { AnswerWithIconAndCheckbox } from 'components/AnswerWithIconAndCheckbox'

import checkIconWhite from '../assets/images/check-icon-white.svg'

// eslint-disable-next-line import/no-default-export
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/AnswerWithIconAndCheckbox',
  component: AnswerWithIconAndCheckbox,
  argTypes: {
    ...COMMON_STYLES_CONTROLS,
    textAlign: {
      control: 'select',
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
    checkboxWidth: {
      control: 'text',
      table: {
        category: ControlsCategories.ADDON,
      },
    },
    checkboxHeight: {
      control: 'text',
      table: {
        category: ControlsCategories.ADDON,
      },
    },
    checkboxBorder: {
      control: 'text',
      table: {
        category: ControlsCategories.ADDON,
      },
    },
    checkboxActiveBorder: {
      control: 'text',
      table: {
        category: ControlsCategories.ADDON,
      },
    },
    checkboxBackgroundColor: {
      control: 'text',
      table: {
        category: ControlsCategories.ADDON,
      },
    },
    checkboxBackgroundActiveColor: {
      control: 'text',
      table: {
        category: ControlsCategories.ADDON,
      },
    },
    iconSrc: {
      control: 'text',
      table: {
        category: ControlsCategories.ADDON,
      },
    },
    iconSize: {
      control: 'text',
      table: {
        category: ControlsCategories.ADDON,
      },
    },
    reverse: {
      control: 'boolean',
      table: {
        category: ControlsCategories.ADDON,
      },
    },
    spacingBetweenCheckboxAndContent: {
      control: 'text',
      table: {
        category: ControlsCategories.ADDON,
      },
    },
  },
} as ComponentMeta<typeof AnswerWithIconAndCheckbox>

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof AnswerWithIconAndCheckbox> = (args) => (
  <AnswerWithIconAndCheckbox {...args} />
)

// 👇 Each story then reuses that template
export const Dancebit = Template.bind({})
Dancebit.args = {
  children: <span>Busy family life</span>,
  type: 'checkbox',
  isFullWidth: true,
  maxWidth: '343px',
  height: '80px',
  backgroundColor: '#F5F6F7',
  color: '#17202A',
  fontSize: '17px',
  fontWeight: '700',
  lineHeight: '24px',
  borderRadius: '6px',
  padding: '0 16px',
  value: 'lose_belly_fat',
  spacingBetweenCheckboxAndContent: '0 16px',
  checkboxWidth: '24px',
  checkboxHeight: '24px',
  checkboxBorderRadius: '8px',
  checkboxBorder: '1.5px solid #CACACA',
  checkboxBackgroundActiveColor: '#03AAF5',
  reverse: true,
  activeBackgroundColor: '#EAF7FF',
  activeColor: '#17202A',
  border: '2px solid transparent',
  iconSrc: checkIconWhite,
  boxShadow: '0 0 0 1px #E9E9E9',
  activeBoxShadow: '0 0 0 2px #03AAF5',
  checkboxActiveBorder: '1px solid transparent',
  imageSrc: 'https://i.ibb.co/C8zTW2k/break-up-1.png',
  imageWidth: '40px',
  imageHeight: '40px',
  imageAlignSelf: 'center',
}
export const DancebitJapanese = Template.bind({})
DancebitJapanese.args = {
  children: <span>Busy family life</span>,
  type: 'checkbox',
  isFullWidth: true,
  maxWidth: '343px',
  height: '106px',
  backgroundColor: '#FFF',
  color: '#17202A',
  fontSize: '17px',
  fontWeight: '700',
  lineHeight: '24px',
  borderRadius: '6px',
  padding: '0 16px',
  value: 'lose_belly_fat',
  spacingBetweenCheckboxAndContent: '0 16px',
  checkboxWidth: '24px',
  checkboxHeight: '24px',
  checkboxBorderRadius: '8px',
  checkboxBorder: '2px solid #CACACA',
  checkboxBackgroundActiveColor: '#03AAF5',
  reverse: true,
  activeBackgroundColor: '#EAF7FF',
  activeColor: '#17202A',
  iconSrc: checkIconWhite,
  activeBorder: '3px solid #03AAF5',
  border: '3px solid transparent',
  borderGradientColor:
    'linear-gradient(to right, white, white), linear-gradient(to right, #C6E2FF, #F8DAFB)',
  checkboxActiveBorder: '1px solid transparent',
  imageSrc: 'https://i.ibb.co/C8zTW2k/break-up-1.png',
  imageWidth: '40px',
  imageHeight: '40px',
  imageAlignSelf: 'center',
}
export const DancebitSexyFlow = Template.bind({})
DancebitSexyFlow.args = {
  children: <span>Busy family life</span>,
  type: 'checkbox',
  isFullWidth: true,
  height: '100px',
  backgroundColor: 'rgba(255, 255, 255, 0.12)',
  color: '#fff',
  fontSize: '17px',
  fontWeight: '700',
  lineHeight: '24px',
  padding: '0 16px',
  spacingBetweenCheckboxAndContent: '0 16px',
  checkboxWidth: '24px',
  checkboxHeight: '24px',
  checkboxBorderRadius: '8px',
  imageWidth: '40px',
  imageHeight: '40px',
  imageAlignSelf: 'center',
  checkboxBorder: '1.5px solid #CACACA',
  checkboxBackgroundActiveColor: '#C61371',
  reverse: true,
  activeBackgroundColor: 'rgba(188, 25, 110, 0.25)',
  activeColor: '#fff',
  iconSrc: checkIconWhite,
  checkboxActiveBorder: '1px solid #C61371',
  borderRadius: `16px`,
  border: `2px solid transparent`,
  boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.25)',
  activeBoxShadow: '0 0 0 2px #C61371',
  backdropFilter: `blur(8px)`,
  imageSrc: 'https://i.ibb.co/C8zTW2k/break-up-1.png',
}

export const Nutrimate = Template.bind({})
Nutrimate.args = {
  activeBackgroundColor: 'rgba(169, 205, 80, 0.2)',
  activeBorder: '1px solid #a9cd50',
  activeColor: '#2c3131',
  backgroundColor: '#fff',
  border: '1px solid #e9e9e9',
  borderRadius: '48px',
  children: 'I like my wine',
  checkboxActiveBorder: '1px solid #a9cd50',
  checkboxBackgroundActiveColor: '#a9cd50',
  checkboxBackgroundColor: '#fff',
  checkboxBorder: '1px solid #E9E9E9',
  checkboxBorderRadius: '8px',
  checkboxHeight: '24px',
  checkboxWidth: '24px',
  color: '#2c3131',
  spacingBetweenCheckboxAndContent: '0 16px',
  fontSize: '17px',
  fontWeight: '600',
  height: '80px',
  iconSrc: checkIconWhite,
  imageSrc: 'https://i.ibb.co/C8zTW2k/break-up-1.png',
  imageWidth: '40px',
  imageHeight: '40px',
  imageAlignSelf: 'center',
  isFullWidth: true,
  lineHeight: '24px',
  maxWidth: '343px',
  padding: '0 16px',
  reverse: true,
  value: 'i_like_my_wine',
  type: 'checkbox',
}

export const Fitme = Template.bind({})
Fitme.args = {
  height: '80px',
  isFullWidth: true,
  maxWidth: '343px',
  fontSize: '17px',
  lineHeight: '24px',
  fontWeight: '600',
  color: '#17202A',
  activeColor: '#17202A',
  padding: '0 16px',
  reverse: true,
  backgroundColor: '#fff',
  activeBackgroundColor: '#F0ECFF',
  border: '2px solid transparent',
  activeBorder: '2px solid #8378EF',
  borderRadius: '16px',
  boxShadow: '0px 4px 14px 0px rgba(8, 4, 23, 0.03);',
  activeBoxShadow: 'none',
  iconSrc:
    'https://cdn-prod-unified-content.gismart.xyz/95a0f4aac157ae778464868301bbc89a757bbd8234362ef568be31e6d6bf9e38/check-icon-white.webp',
  spacingBetweenCheckboxAndContent: '0 0 0 16px',
  checkboxBorder: '1px solid #CACACA',
  checkboxBorderRadius: '50%',
  checkboxActiveBorder: 'none',
  checkboxBackgroundColor: '#fff',
  checkboxBackgroundActiveColor: '#8378EF',
  checkboxHeight: '24px',
  checkboxWidth: '24px',
  imageSrc:
    'https://cdn-prod-unified-content.gismart.xyz/9549c572d41fa1ace57a00b0494242d596edf1b52f29534285e9ae278735f1b2/FitMe+main+senior+flow+%28fitme_senior_3%29/Icons/advanced.png',
  imageWidth: '40px',
  imageHeight: '40px',
  imageAlignSelf: 'center',
  value: 'i_like_my_wine',
  children: 'I like my wine',
  type: 'checkbox',
}
export const FitmeDark = Template.bind({})
FitmeDark.args = {
  height: '80px',
  isFullWidth: true,
  maxWidth: '343px',
  fontSize: '17px',
  lineHeight: '24px',
  fontWeight: '600',
  color: '#fff',
  activeColor: '#fff',
  padding: '0 16px',
  reverse: true,
  backgroundColor: '#3E3C48',
  activeBackgroundColor: '#25214D',
  border: '2px solid transparent',
  activeBorder: '2px solid #8378EF',
  borderRadius: '16px',
  activeBoxShadow: 'none',
  iconSrc:
    'https://cdn-prod-unified-content.gismart.xyz/95a0f4aac157ae778464868301bbc89a757bbd8234362ef568be31e6d6bf9e38/check-icon-white.webp',
  spacingBetweenCheckboxAndContent: '0 0 0 16px',
  checkboxBorder: '1px solid #CACACA',
  checkboxBorderRadius: '50%',
  checkboxActiveBorder: 'none',
  checkboxBackgroundColor: '#3E3C48',
  checkboxBackgroundActiveColor: '#8378EF',
  checkboxHeight: '24px',
  checkboxWidth: '24px',
  imageSrc:
    'https://cdn-prod-unified-content.gismart.xyz/9549c572d41fa1ace57a00b0494242d596edf1b52f29534285e9ae278735f1b2/FitMe+main+senior+flow+%28fitme_senior_3%29/Icons/advanced.png',
  imageWidth: '40px',
  imageHeight: '40px',
  imageAlignSelf: 'center',
  value: 'with_checkbox_and_icon',
  children: 'Answer with checkbox and icon',
  type: 'checkbox',
}
export const Cardimate = Template.bind({})
Cardimate.args = {
  height: '100px',
  isFullWidth: true,
  maxWidth: '343px',
  fontSize: '17px',
  lineHeight: '24px',
  fontWeight: '700',
  color: '#2C3131',
  activeColor: '#2C3131',
  padding: '0 16px 0 8px',
  reverse: true,
  backgroundColor: '#F2F3F5',
  activeBackgroundColor: 'rgba(53, 179, 229, 0.12)',
  border: '1px solid #E9E9E9',
  activeBorder: '1px solid #35B3E5',
  borderRadius: '16px',
  iconSrc: checkIconWhite,
  spacingBetweenCheckboxAndContent: '0 16px',
  checkboxBorder: '1.5px solid #CACACA',
  checkboxBorderRadius: '6px',
  checkboxActiveBorder: '1.5px solid transparent',
  checkboxBackgroundColor: '#F2F3F5',
  checkboxBackgroundActiveColor: '#35B3E5',
  checkboxHeight: '21px',
  checkboxWidth: '21px',
  imageSrc:
    'https://cdn-prod-unified-content.gismart.xyz/03df34be4965496c6da922b4a6ec6b446fcb268aea40296954b01bd8af25b272/deli-meat.png',
  imageWidth: '100px',
  imageHeight: '100px',
  imageAlignSelf: 'center',
  type: 'checkbox',
  value: 'deli_meat',
  children: 'Cold cuts / Deli meat',
}

export const LuvlySolid = Template.bind({})
LuvlySolid.args = {
  children: <span>Busy family life</span>,
  type: 'checkbox',
  isFullWidth: true,
  maxWidth: '343px',
  height: '80px',
  backgroundColor: '#fff',
  color: '#17202A',
  fontSize: '17px',
  fontWeight: '700',
  lineHeight: '24px',
  borderRadius: '16px',
  padding: '0 16px',
  value: 'lose_belly_fat',
  spacingBetweenCheckboxAndContent: '0 16px',
  checkboxWidth: '24px',
  checkboxHeight: '24px',
  checkboxBorderRadius: '50%',
  checkboxBorder: '1.5px solid #CACACA',
  checkboxBackgroundActiveColor: '#FF7262',
  reverse: true,
  activeBackgroundColor: 'rgba(255, 130, 118, 0.12)',
  activeColor: '#17202A',
  border: '2px solid transparent',
  activeBorder: '2px solid #FF7262',
  iconSrc: checkIconWhite,
  boxShadow: '0px 4px 14px 0px rgba(8, 4, 23, 0.03)',
  checkboxActiveBorder: '1.5px solid transparent',
  imageSrc: 'https://i.ibb.co/C8zTW2k/break-up-1.png',
  imageWidth: '40px',
  imageHeight: '40px',
  imageAlignSelf: 'center',
}
