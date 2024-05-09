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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Option } from '../Option';
import { StyledAnswerWithCheckbox as S } from './AnswerWithCheckbox.styles';
var answerWithCheckboxThemes = {
    girlish: {
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
        margin: '0 0 16px',
        padding: '0 16px',
        spacingBetweenCheckboxAndContent: '0',
        checkboxWidth: '24px',
        checkboxHeight: '24px',
        checkboxActiveBorder: 'none',
        checkboxBackgroundActiveColor: '#628F7B',
        iconSize: '14px',
    },
    book: {
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
        spacingBetweenCheckboxAndContent: '0',
        checkboxWidth: '24px',
        checkboxHeight: '24px',
        checkboxActiveBorder: 'none',
        checkboxBackgroundActiveColor: '#ffffff',
        checkboxBackgroundColor: '#ffffff',
        iconSize: '14px',
        checkboxBorder: '1.5px solid #CACACA',
    },
};
var AnswerWithCheckboxBase = function (_a) {
    var children = _a.children, type = _a.type, value = _a.value, name = _a.name, checked = _a.checked, disabled = _a.disabled, onChange = _a.onChange, checkboxWidth = _a.checkboxWidth, checkboxHeight = _a.checkboxHeight, checkboxBackgroundColor = _a.checkboxBackgroundColor, checkboxBorder = _a.checkboxBorder, spacingBetweenCheckboxAndContent = _a.spacingBetweenCheckboxAndContent, contentHorizontalAlign = _a.contentHorizontalAlign, props = __rest(_a, ["children", "type", "value", "name", "checked", "disabled", "onChange", "checkboxWidth", "checkboxHeight", "checkboxBackgroundColor", "checkboxBorder", "spacingBetweenCheckboxAndContent", "contentHorizontalAlign"]);
    return (_jsx(Option, __assign({ value: value, name: name, type: type, checked: checked, disabled: disabled, onChange: onChange }, { children: _jsxs(S.Root, __assign({}, props, { children: [_jsx(S.Checkbox, { checkboxWidth: checkboxWidth, checkboxHeight: checkboxHeight, checkboxBackgroundColor: checkboxBackgroundColor, checkboxBorder: checkboxBorder }), _jsx(S.Content, __assign({ spacingBetweenCheckboxAndContent: spacingBetweenCheckboxAndContent, contentHorizontalAlign: contentHorizontalAlign }, { children: _jsx("div", { children: children }) }))] })) })));
};
export var AnswerWithCheckbox = function (_a) {
    var theme = _a.theme, props = __rest(_a, ["theme"]);
    return (_jsx(AnswerWithCheckboxBase, __assign({}, (theme && answerWithCheckboxThemes[theme]), props)));
};
