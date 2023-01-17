import styled from 'styled-components'

type TOptionContainerProps = {
  fullWidth?: boolean
  disabled?: boolean
}

export const StyledOption = {
  OptionContainer: styled.label<TOptionContainerProps>`
    cursor: pointer;
    display: block;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
    pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

    & > input {
      display: none;
    }

    &:last-child {
      margin-bottom: 0;
    }
  `,
}
