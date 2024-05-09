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
import { Button } from 'components/Button';
// eslint-disable-next-line import/no-default-export
export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Components/Button',
    component: Button,
    argTypes: __assign(__assign({}, COMMON_STYLES_CONTROLS), { disabled: {
            table: {
                category: ControlsCategories.INTERACTION,
            },
        }, disableBackgroundColor: {
            control: 'color',
            table: {
                category: ControlsCategories.COLORS,
            },
        }, buttonRef: { control: false } }),
};
// 👇 We create a “template” of how args map to rendering
var Template = function (args) { return _jsx(Button, __assign({}, args)); };
// 👇 Each story then reuses that template
export var Regular = Template.bind({});
Regular.args = {
    isFullWidth: true,
    children: 'Ok, Got it!',
    height: '50px',
    lineHeight: '50px',
    borderRadius: '12px',
    padding: '0 15px',
    maxWidth: '320px',
    fontSize: '17px',
    backgroundColor: 'rgb(255, 130, 118)',
};
export var RegularLuvlyGirlish = Template.bind({});
RegularLuvlyGirlish.args = {
    isFullWidth: true,
    children: 'Sounds great!',
    height: '52px',
    lineHeight: '52px',
    borderRadius: '32px',
    padding: '0 16px',
    maxWidth: '320px',
    fontSize: '18px',
    fontWeight: '700',
    color: '#fff',
    disableBackgroundColor: '#CACACA',
    backgroundColor: '#628F7B',
    style: {
        letterSpacing: '0.2px',
    },
};
export var RegularBook = Template.bind({});
RegularBook.args = {
    isFullWidth: true,
    children: 'Continue',
    height: '60px',
    lineHeight: '60px',
    borderRadius: '30px',
    padding: '0 16px',
    maxWidth: '320px',
    fontSize: '16px',
    fontWeight: '700',
    color: '#fff',
    disableBackgroundColor: '#CACACA',
    backgroundColor: '#EB7F5E',
    style: {
        letterSpacing: '0.2px',
    },
};
