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
import { Header } from 'components/Header';
import logo from 'src/assets/images/logo.svg';
// eslint-disable-next-line import/no-default-export
export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Components/Header',
    component: Header,
    argTypes: __assign(__assign({}, COMMON_STYLES_CONTROLS), { headerText: {
            control: 'text',
        } }),
};
// 👇 We create a “template” of how args map to rendering
var Template = function (args) { return _jsx(Header, __assign({}, args)); };
// 👇 Each story then reuses that template
export var Regular = Template.bind({});
Regular.args = {
    padding: '13px 0',
    height: '50px',
    margin: '0 auto 15px',
    boxShadow: '0 5px 20px #dfe3f3',
    backgroundColor: '#fff',
    fontSize: '14px',
    fontWeight: '700',
    lineHeight: '18px',
    color: '#2d3240',
    logoSvg: logo,
    marginRight: '10px',
    headerText: '',
};
