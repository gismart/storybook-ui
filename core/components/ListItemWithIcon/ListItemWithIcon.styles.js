var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { CommonFontsStyles } from '../../styles/CommonFonts.styles';
import { CommonDimensionsStyles } from '../../styles/CommonDimensions.styles';
export var StyledListItemWithIcon = styled.li(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n  ", ";\n\n  color: ", ";\n  position: relative;\n  list-style: none;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 0;\n    transform: translateY(-50%);\n    display: block;\n    width: ", ";\n    height: ", ";\n    background: ", ";\n    background-size: contain;\n  }\n"], ["\n  ", ";\n  ", ";\n\n  color: ", ";\n  position: relative;\n  list-style: none;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 0;\n    transform: translateY(-50%);\n    display: block;\n    width: ", ";\n    height: ", ";\n    background: ", ";\n    background-size: contain;\n  }\n"])), CommonFontsStyles, CommonDimensionsStyles, function (_a) {
    var color = _a.color;
    return color || '#ffffff';
}, function (_a) {
    var iconWidth = _a.iconWidth;
    return "".concat(iconWidth || 24, "px");
}, function (_a) {
    var iconHeight = _a.iconHeight;
    return "".concat(iconHeight || 24, "px");
}, function (_a) {
    var iconSrc = _a.iconSrc;
    return "url(".concat(iconSrc, ") center no-repeat");
});
var templateObject_1;
