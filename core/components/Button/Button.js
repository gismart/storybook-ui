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
import { StyledButton } from './Button.styles';
var themes = {
    girlish: {
        isFullWidth: true,
        height: '52px',
        lineHeight: '52px',
        borderRadius: '32px',
        padding: '0 16px',
        maxWidth: '320px',
        fontSize: '18px',
        fontWeight: '700',
        color: '#fff',
        disableBackgroundColor: '#cacaca',
        backgroundColor: '#628f7b',
        style: {
            letterSpacing: '0.2px',
        },
    },
    book: {
        isFullWidth: true,
        height: '60px',
        lineHeight: '60px',
        borderRadius: '30px',
        padding: '0 16px',
        maxWidth: '320px',
        fontSize: '16px',
        fontWeight: '700',
        color: '#fff',
        disableBackgroundColor: '#cacaca',
        backgroundColor: '#EB7F5E',
        style: {
            letterSpacing: '0.2px',
        },
    },
};
export var Button = function (_a) {
    var children = _a.children, buttonRef = _a.buttonRef, textAlign = _a.textAlign, disabled = _a.disabled, disableBackgroundColor = _a.disableBackgroundColor, style = _a.style, theme = _a.theme, props = __rest(_a, ["children", "buttonRef", "textAlign", "disabled", "disableBackgroundColor", "style", "theme"]);
    return (_jsx(StyledButton, __assign({ ref: buttonRef, textAlign: textAlign, disabled: disabled, disableBackgroundColor: disableBackgroundColor, style: style }, (theme && themes[theme]), props, { children: children })));
};
