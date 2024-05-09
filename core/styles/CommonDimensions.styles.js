var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { css } from 'styled-components';
export var CommonDimensionsStyles = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  min-width: ", ";\n  max-width: ", ";\n  width: ", ";\n  min-height: ", ";\n  height: ", ";\n  padding: ", ";\n  margin: ", ";\n  border-radius: ", ";\n  border: ", ";\n"], ["\n  min-width: ", ";\n  max-width: ", ";\n  width: ", ";\n  min-height: ", ";\n  height: ", ";\n  padding: ", ";\n  margin: ", ";\n  border-radius: ", ";\n  border: ", ";\n"])), function (_a) {
    var minWidth = _a.minWidth;
    return minWidth || 'auto';
}, function (_a) {
    var maxWidth = _a.maxWidth;
    return maxWidth || 'auto';
}, function (_a) {
    var width = _a.width, isFullWidth = _a.isFullWidth;
    // eslint-disable-next-line no-nested-ternary
    return isFullWidth ? '100%' : width || 'auto';
}, function (_a) {
    var minHeight = _a.minHeight;
    return minHeight || 'auto';
}, function (_a) {
    var height = _a.height;
    return height || 'auto';
}, function (_a) {
    var padding = _a.padding;
    return padding || 0;
}, function (_a) {
    var margin = _a.margin;
    return margin || 0;
}, function (_a) {
    var borderRadius = _a.borderRadius;
    return borderRadius || 0;
}, function (_a) {
    var border = _a.border;
    return border || 'none';
});
var templateObject_1;
