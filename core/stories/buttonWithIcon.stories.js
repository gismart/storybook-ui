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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { COMMON_STYLES_CONTROLS } from 'constants/controls';
import { ControlsCategories } from 'constants/rootConstants';
import arrowIcon from 'src/assets/images/arrow-right-icon.svg';
import { ButtonWithIcon } from 'components/ButtonWithIcon';
// eslint-disable-next-line import/no-default-export
export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Components/ButtonWithIcon',
    component: ButtonWithIcon,
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
var Template = function (args) { return (_jsx(ButtonWithIcon, __assign({}, args))); };
// 👇 Each story then reuses that template
export var Regular = Template.bind({});
Regular.args = {
    isFullWidth: true,
    children: (_jsxs("div", { children: ["Continue", _jsx("img", { src: arrowIcon, alt: "" })] })),
    height: '52px',
    lineHeight: '52px',
    borderRadius: '32px',
    padding: '0 16px',
    maxWidth: '320px',
    fontSize: '18px',
    fontWeight: '700',
    backgroundColor: '#628F7B',
    iconHeight: '24px',
    iconWidth: '24px',
    iconPositionRight: '14px',
    style: {
        letterSpacing: '0.2px',
    },
};
