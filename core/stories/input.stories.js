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
import { Input } from 'components/Input';
import { COMMON_STYLES_CONTROLS } from 'constants/controls';
// eslint-disable-next-line import/no-default-export
export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Components/Input',
    component: Input,
    argTypes: __assign({}, COMMON_STYLES_CONTROLS),
};
// 👇 We create a “template” of how args map to rendering
var Template = function (args) { return _jsx(Input, __assign({}, args)); };
// 👇 Each story then reuses that template
export var Regular = Template.bind({});
Regular.args = {
    maxWidth: '320px',
    width: '260px',
    validationTextSize: '13px',
    validationTextLineHeight: '20px',
    isContentCentered: false,
    validationTextColor: '#ea5873',
    label: 'Your email',
    hasVisibilityControl: false,
    isValid: true,
    validationText: 'Please enter a valid email address',
    color: 'rgb(45, 50, 64)',
    fontSize: '15px',
    fontWeight: '500',
    lineHeight: '1px',
    borderRadius: '10px',
    backgroundColor: 'rgb(255, 255, 255)',
    border: '1px solid rgb(129, 132, 140)',
    padding: '32px 52px 8px 16px',
    leftLabelPosition: '16px',
    labelColor: 'rgb(129, 132, 140)',
    labelFontSize: '16px',
    focusedLabelFontSize: '13px',
    focusedLabelColor: 'rgb(45, 50, 64)',
};
export var Number = Template.bind({});
Number.args = {
    maxWidth: '320px',
    width: '260px',
    height: '48px',
    isValid: true,
    color: 'rgb(45, 50, 64)',
    fontSize: '15px',
    fontWeight: '500',
    lineHeight: '1px',
    borderRadius: '10px',
    backgroundColor: 'rgb(255, 255, 255)',
    border: '1px solid rgb(129, 132, 140)',
    padding: '8px 25px',
    type: 'number',
    allowFloatNumbers: false,
    isContentCentered: true,
};
