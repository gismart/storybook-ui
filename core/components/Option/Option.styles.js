var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
export var StyledOption = {
    OptionContainer: styled.label(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    cursor: pointer;\n    display: block;\n    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n    width: ", ";\n    pointer-events: ", ";\n\n    & > input {\n      display: none;\n    }\n\n    &:last-child {\n      margin-bottom: 0;\n    }\n  "], ["\n    cursor: pointer;\n    display: block;\n    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n    width: ", ";\n    pointer-events: ", ";\n\n    & > input {\n      display: none;\n    }\n\n    &:last-child {\n      margin-bottom: 0;\n    }\n  "])), function (_a) {
        var fullWidth = _a.fullWidth;
        return (fullWidth ? '100%' : 'auto');
    }, function (_a) {
        var disabled = _a.disabled;
        return (disabled ? 'none' : 'auto');
    }),
};
var templateObject_1;
