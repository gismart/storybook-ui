var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { CommonAnswerStyles } from '../../styles';
export var StyledAnswerWithIcon = {
    Root: styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", ";\n    flex-wrap: nowrap;\n    flex-direction: ", ";\n\n    input:checked + & > * > * {\n      color: ", ";\n    }\n  "], ["\n    ", ";\n    flex-wrap: nowrap;\n    flex-direction: ", ";\n\n    input:checked + & > * > * {\n      color: ", ";\n    }\n  "])), CommonAnswerStyles, function (_a) {
        var reverse = _a.reverse;
        return (reverse ? 'row-reverse' : 'row');
    }, function (_a) {
        var activeColor = _a.activeColor;
        return activeColor || '#fff';
    }),
    Content: styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    align-content: center;\n    margin: ", ";\n  "], ["\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    align-content: center;\n    margin: ", ";\n  "])), function (_a) {
        var spacingBetweenIconAndContent = _a.spacingBetweenIconAndContent;
        return spacingBetweenIconAndContent ? "0 ".concat(spacingBetweenIconAndContent) : 0;
    }),
    Icon: styled.img(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    max-width: 100%;\n    height: auto;\n  "], ["\n    max-width: 100%;\n    height: auto;\n  "]))),
};
var templateObject_1, templateObject_2, templateObject_3;
