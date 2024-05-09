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
import { StyledHeader as S } from './Header.styles';
export var Header = function (_a) {
    var headerText = _a.headerText, logoSvg = _a.logoSvg, props = __rest(_a, ["headerText", "logoSvg"]);
    return (_jsx(S.Wrapper, __assign({ logoSvg: logoSvg }, props, { children: _jsxs(S.Logo, { children: [_jsx("img", { src: logoSvg, alt: "logo" }), headerText && _jsx("span", { children: headerText })] }) })));
};
