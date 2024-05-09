var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { css } from 'styled-components';
export var CommonColorsStyles = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  background-image: ", ";\n  color: ", ";\n  box-shadow: ", ";\n"], ["\n  background-color: ", ";\n  background-image: ", ";\n  color: ", ";\n  box-shadow: ", ";\n"])), function (_a) {
    var backgroundColor = _a.backgroundColor;
    return backgroundColor || '#000000';
}, function (_a) {
    var backgroundGradientColor = _a.backgroundGradientColor;
    return backgroundGradientColor;
}, function (_a) {
    var color = _a.color;
    return color || '#ffffff';
}, function (_a) {
    var boxShadow = _a.boxShadow;
    return boxShadow || 'none';
});
var templateObject_1;
