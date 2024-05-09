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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { Option } from '../Option';
import { StyledAnswer as S } from './Answer.styles';
var themes = {
    girlish: {
        boxShadow: '0px 8px 20px #F2E6E1',
        isFullWidth: true,
        maxWidth: '320px',
        height: '64px',
        backgroundColor: '#ffffff',
        activeBackgroundColor: '#D0DDD7',
        activeColor: '#2C3131',
        color: '#2C3131',
        fontSize: '18px',
        lineHeight: '24px',
        borderRadius: '20px',
        margin: '0 0 16px',
        padding: '0 16px',
    },
    book: {
        boxShadow: '0px 8px 20px #E8E8E8',
        isFullWidth: true,
        maxWidth: '320px',
        height: '64px',
        backgroundColor: '#ffffff',
        activeBackgroundColor: '#83BAB3',
        activeColor: '#FFFFFF',
        color: '#17202A',
        fontSize: '16px',
        lineHeight: '24px',
        borderRadius: '20px',
        margin: '0 0 16px',
        padding: '0 16px',
    },
};
export var Answer = function (_a) {
    var theme = _a.theme, children = _a.children, type = _a.type, value = _a.value, name = _a.name, checked = _a.checked, disabled = _a.disabled, onChange = _a.onChange, style = _a.style, props = __rest(_a, ["theme", "children", "type", "value", "name", "checked", "disabled", "onChange", "style"]);
    return (_jsx(Option, __assign({ value: value, name: name, type: type, checked: checked, disabled: disabled, onChange: onChange }, { children: _jsx(S.Root, __assign({ style: style }, (theme && themes[theme]), props, { children: _jsx("div", { children: children }) })) })));
};
