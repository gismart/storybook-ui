var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { CommonFontsStyles } from '../../styles/CommonFonts.styles';
import { CommonColorsStyles } from '../../styles/CommonColors.styles';
import { CommonDimensionsStyles } from '../../styles/CommonDimensions.styles';
export var StyledHeader = {
    Wrapper: styled.header(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", ";\n    ", ";\n    position: relative;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n\n    span {\n      ", "\n    }\n\n    img {\n      margin-right: ", ";\n    }\n  "], ["\n    ", ";\n    ", ";\n    position: relative;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n\n    span {\n      ", "\n    }\n\n    img {\n      margin-right: ", ";\n    }\n  "])), CommonDimensionsStyles, CommonColorsStyles, CommonFontsStyles, function (_a) {
        var marginRight = _a.marginRight;
        return marginRight || '0px';
    }),
    Logo: styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n\n    svg {\n      flex-shrink: 0;\n      height: 30px;\n      width: 30px;\n      margin-right: 10px;\n    }\n  "], ["\n    display: flex;\n    align-items: center;\n\n    svg {\n      flex-shrink: 0;\n      height: 30px;\n      width: 30px;\n      margin-right: 10px;\n    }\n  "]))),
};
var templateObject_1, templateObject_2;
