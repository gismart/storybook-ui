var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { css } from 'styled-components';
import { CommonFontsStyles } from './CommonFonts.styles';
import { CommonColorsStyles } from './CommonColors.styles';
import { CommonDimensionsStyles } from './CommonDimensions.styles';
export var CommonAnswerStyles = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n  ", ";\n  ", ";\n  display: inline-flex;\n  flex-wrap: wrap;\n  align-items: center;\n  align-content: center;\n  justify-content: ", ";\n\n  cursor: pointer;\n  transition: background-color 0.2s ease-out;\n  position: relative;\n  font-family: sans-serif;\n  overflow-wrap: break-word;\n\n  input:checked + & {\n    background-color: ", ";\n    background-image: ", ";\n    color: ", ";\n    border: ", ";\n    box-shadow: ", ";\n  }\n  input:checked + & > * {\n    color: ", ";\n  }\n"], ["\n  ", ";\n  ", ";\n  ", ";\n  display: inline-flex;\n  flex-wrap: wrap;\n  align-items: center;\n  align-content: center;\n  justify-content: ", ";\n\n  cursor: pointer;\n  transition: background-color 0.2s ease-out;\n  position: relative;\n  font-family: sans-serif;\n  overflow-wrap: break-word;\n\n  input:checked + & {\n    background-color: ", ";\n    background-image: ", ";\n    color: ", ";\n    border: ", ";\n    box-shadow: ", ";\n  }\n  input:checked + & > * {\n    color: ", ";\n  }\n"])), CommonFontsStyles, CommonColorsStyles, CommonDimensionsStyles, function (_a) {
    var contentHorizontalAlign = _a.contentHorizontalAlign;
    return contentHorizontalAlign || 'flex-start';
}, function (_a) {
    var activeBackgroundColor = _a.activeBackgroundColor, activeBackgroundGradientColor = _a.activeBackgroundGradientColor;
    return !activeBackgroundGradientColor && (activeBackgroundColor || '#ff8276');
}, function (_a) {
    var activeBackgroundGradientColor = _a.activeBackgroundGradientColor;
    return activeBackgroundGradientColor;
}, function (_a) {
    var activeColor = _a.activeColor;
    return activeColor || '#fff';
}, function (_a) {
    var border = _a.border, activeBorder = _a.activeBorder;
    return activeBorder || border;
}, function (_a) {
    var activeBoxShadow = _a.activeBoxShadow;
    return activeBoxShadow || 'none';
}, function (_a) {
    var activeColor = _a.activeColor;
    return activeColor || '#fff';
});
var templateObject_1;
