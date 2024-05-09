var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { COMMON_STYLES_CONTROLS } from 'constants/controls';
import { ControlsCategories } from 'constants/rootConstants';
import girlishCheckIcon from 'assets/images/check-white-girlish.svg';
import { AnswerWithCheckbox } from 'components/AnswerWithCheckbox';
// eslint-disable-next-line import/no-default-export
export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Components/AnswerWithCheckbox',
    component: AnswerWithCheckbox,
    argTypes: __assign(__assign({}, COMMON_STYLES_CONTROLS), { textAlign: {
            control: 'select',
            table: {
                category: ControlsCategories.ALIGNMENT,
            },
        }, contentHorizontalAlign: {
            table: {
                category: ControlsCategories.ALIGNMENT,
            },
        }, activeBackgroundColor: {
            control: 'color',
            table: {
                category: ControlsCategories.COLORS,
            },
        }, activeColor: {
            control: 'color',
            table: {
                category: ControlsCategories.COLORS,
            },
        }, activeBackgroundGradientColor: {
            control: 'text',
            table: {
                category: ControlsCategories.COLORS,
            },
        }, checked: {
            table: {
                category: ControlsCategories.INTERACTION,
            },
        }, disabled: {
            table: {
                category: ControlsCategories.INTERACTION,
            },
        }, activeBorder: {
            control: 'text',
            table: {
                category: ControlsCategories.SIZES,
            },
        }, checkboxWidth: {
            control: 'text',
            table: {
                category: ControlsCategories.ADDON,
            },
        }, checkboxHeight: {
            control: 'text',
            table: {
                category: ControlsCategories.ADDON,
            },
        }, checkboxBorder: {
            control: 'text',
            table: {
                category: ControlsCategories.ADDON,
            },
        }, checkboxActiveBorder: {
            control: 'text',
            table: {
                category: ControlsCategories.ADDON,
            },
        }, checkboxBackgroundColor: {
            control: 'text',
            table: {
                category: ControlsCategories.ADDON,
            },
        }, checkboxBackgroundActiveColor: {
            control: 'text',
            table: {
                category: ControlsCategories.ADDON,
            },
        }, iconSrc: {
            control: 'text',
            table: {
                category: ControlsCategories.ADDON,
            },
        }, iconSize: {
            control: 'text',
            table: {
                category: ControlsCategories.ADDON,
            },
        }, reverse: {
            control: 'boolean',
            table: {
                category: ControlsCategories.ADDON,
            },
        }, spacingBetweenCheckboxAndContent: {
            control: 'text',
            table: {
                category: ControlsCategories.ADDON,
            },
        } }),
};
// 👇 We create a “template” of how args map to rendering
var Template = function (args) { return (_jsx(AnswerWithCheckbox, __assign({}, args))); };
// 👇 Each story then reuses that template
export var Simple = Template.bind({});
Simple.args = {
    children: 'Answer',
    type: 'checkbox',
    boxShadow: 'rgb(223 227 243) 0px 8px 20px;',
    isFullWidth: true,
    maxWidth: '320px',
    height: '64px',
    backgroundColor: '#ffffff',
    color: 'rgb(45, 50, 64)',
    fontSize: '17px',
    borderRadius: '20px',
    padding: '0 15px',
    value: 'User answer',
    spacingBetweenCheckboxAndContent: '0 0 0 12px',
    checkboxActiveBorder: '1px solid #fff',
    checkboxBackgroundActiveColor: '#fff',
    iconSize: '12px',
    iconSrc: 'https://face-yoga-ws.gidev.xyz/c19aab03cca9301d1739a4cd33e62b6f.svg',
};
export var Girlish = Template.bind({});
Girlish.args = {
    children: 'Answer',
    type: 'checkbox',
    boxShadow: '0px 8px 20px #F2E6E1',
    isFullWidth: true,
    maxWidth: '320px',
    height: '64px',
    backgroundColor: '#ffffff',
    activeBackgroundColor: '#D0DDD7',
    color: '#2C3131',
    activeColor: '#2C3131',
    fontSize: '18px',
    lineHeight: '24px',
    borderRadius: '20px',
    reverse: true,
    padding: '0 16px',
    value: 'User answer',
    spacingBetweenCheckboxAndContent: '0',
    checkboxWidth: '24px',
    checkboxHeight: '24px',
    checkboxActiveBorder: 'none',
    checkboxBackgroundActiveColor: '#628F7B',
    iconSize: '14px',
    iconSrc: girlishCheckIcon,
};
export var Book = Template.bind({});
Book.args = {
    children: 'Answer',
    type: 'checkbox',
    boxShadow: '0px 8px 20px #F2E6E1',
    isFullWidth: true,
    maxWidth: '320px',
    height: '64px',
    backgroundColor: '#ffffff',
    activeBackgroundColor: '#83BAB3',
    color: '#17202A',
    activeColor: '#ffffff',
    fontSize: '16px',
    lineHeight: '24px',
    borderRadius: '20px',
    reverse: true,
    padding: '0 16px',
    value: 'User answer',
    spacingBetweenCheckboxAndContent: '0',
    checkboxWidth: '24px',
    checkboxHeight: '24px',
    checkboxActiveBorder: 'none',
    checkboxBackgroundActiveColor: '#ffffff',
    checkboxBackgroundColor: '#ffffff',
    iconSize: '14px',
    iconSrc: girlishCheckIcon,
    checkboxBorder: '1.5px solid #CACACA',
};
