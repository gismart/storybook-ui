var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { CommonAnswerStyles } from '../../styles';
export var StyledAnswerWithCheckbox = {
    Root: styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", ";\n    flex-wrap: nowrap;\n    flex-direction: ", ";\n\n    input:checked + & > span {\n      background-color: ", ";\n      border: ", ";\n      background-image: ", ";\n      background-repeat: no-repeat;\n      background-size: ", ";\n    }\n\n    input:checked + & > * > * {\n      color: ", ";\n    }\n  "], ["\n    ", ";\n    flex-wrap: nowrap;\n    flex-direction: ", ";\n\n    input:checked + & > span {\n      background-color: ", ";\n      border: ", ";\n      background-image: ", ";\n      background-repeat: no-repeat;\n      background-size: ", ";\n    }\n\n    input:checked + & > * > * {\n      color: ", ";\n    }\n  "])), CommonAnswerStyles, function (_a) {
        var reverse = _a.reverse;
        return (reverse ? 'row-reverse' : 'row');
    }, function (_a) {
        var checkboxBackgroundActiveColor = _a.checkboxBackgroundActiveColor;
        return checkboxBackgroundActiveColor;
    }, function (_a) {
        var checkboxActiveBorder = _a.checkboxActiveBorder;
        return checkboxActiveBorder;
    }, function (_a) {
        var iconSrc = _a.iconSrc;
        return "url(".concat(iconSrc, ")");
    }, function (_a) {
        var iconSize = _a.iconSize;
        return iconSize || 'contain';
    }, function (_a) {
        var activeColor = _a.activeColor;
        return activeColor || '#fff';
    }),
    Checkbox: styled.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width: ", ";\n    height: ", ";\n    border-radius: 50%;\n    background-position: center;\n    background-color: ", ";\n    mix-blend-mode: normal;\n    border: ", ";\n    box-sizing: border-box;\n    transition: 0.2s ease-out;\n  "], ["\n    width: ", ";\n    height: ", ";\n    border-radius: 50%;\n    background-position: center;\n    background-color: ", ";\n    mix-blend-mode: normal;\n    border: ", ";\n    box-sizing: border-box;\n    transition: 0.2s ease-out;\n  "])), function (_a) {
        var checkboxWidth = _a.checkboxWidth;
        return checkboxWidth || '20px';
    }, function (_a) {
        var checkboxHeight = _a.checkboxHeight;
        return checkboxHeight || '20px';
    }, function (_a) {
        var checkboxBackgroundColor = _a.checkboxBackgroundColor;
        return checkboxBackgroundColor;
    }, function (_a) {
        var checkboxBorder = _a.checkboxBorder;
        return checkboxBorder || '1px solid rgba(85, 89, 101, 0.5)';
    }),
    Content: styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: flex;\n    flex-wrap: wrap;\n    flex-grow: 1;\n    justify-content: ", ";\n    align-items: center;\n    align-content: center;\n    margin: ", ";\n  "], ["\n    display: flex;\n    flex-wrap: wrap;\n    flex-grow: 1;\n    justify-content: ", ";\n    align-items: center;\n    align-content: center;\n    margin: ", ";\n  "])), function (_a) {
        var contentHorizontalAlign = _a.contentHorizontalAlign;
        return contentHorizontalAlign || 'flex-start';
    }, function (_a) {
        var spacingBetweenCheckboxAndContent = _a.spacingBetweenCheckboxAndContent;
        return spacingBetweenCheckboxAndContent || 0;
    }),
};
var templateObject_1, templateObject_2, templateObject_3;
