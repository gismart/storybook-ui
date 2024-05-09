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
import { StyledAnswerWithIcon as S } from './AnswerWithIcon.styles';
var answerWithIconThemes = {
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
        contentHorizontalAlign: 'flex-start',
        margin: '0 0 16px',
        padding: '0 16px',
        iconHeight: '77px',
        spacingBetweenIconAndContent: '8px',
    },
};
var AnswerWithIconBase = function (_a) {
    var children = _a.children, type = _a.type, value = _a.value, name = _a.name, checked = _a.checked, disabled = _a.disabled, onChange = _a.onChange, iconSrc = _a.iconSrc, iconWidth = _a.iconWidth, iconHeight = _a.iconHeight, spacingBetweenIconAndContent = _a.spacingBetweenIconAndContent, iconAlignSelf = _a.iconAlignSelf, props = __rest(_a, ["children", "type", "value", "name", "checked", "disabled", "onChange", "iconSrc", "iconWidth", "iconHeight", "spacingBetweenIconAndContent", "iconAlignSelf"]);
    return (_jsx(Option, __assign({ value: value, name: name, type: type, checked: checked, disabled: disabled, onChange: onChange }, { children: _jsxs(S.Root, __assign({}, props, { children: [_jsx(S.Icon, { src: iconSrc, alt: "", style: {
                        width: iconWidth,
                        height: iconHeight,
                        alignSelf: iconAlignSelf,
                    } }), _jsx(S.Content, __assign({ spacingBetweenIconAndContent: spacingBetweenIconAndContent }, { children: _jsx("div", { children: children }) }))] })) })));
};
export var AnswerWithIcon = function (_a) {
    var theme = _a.theme, props = __rest(_a, ["theme"]);
    return (_jsx(AnswerWithIconBase, __assign({}, (theme && answerWithIconThemes[theme]), props)));
};
