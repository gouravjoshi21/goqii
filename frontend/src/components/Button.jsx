import styled, { css } from "styled-components";

const sizes = {
    small: css`
        font-size: 14px;
        padding: 8px 24px;
        font-weight: 400;
        height: 40px;
    `,
    medium: css`
        height: 45px;
        font-size: 14px;
        padding: 0 16px;
        gap: 8px;
    `,
    large: css`
        height: 50px;
        font-size: 16px;
        padding: 0 32px;
        font-weight: 500;
    `,
};

const variations = {
    primary: css`
        color: var(--color-bg-1);
        background-color: var(--color-prim-2);
        font-weight: 500;

        &:hover {
            background-color: var(--color-prim-1);
        }
    `,
    secondary: css`
        color: var(--color-text-2);
        background: var(--color-bg-2);

        &:hover {
            background-color: var(--color-bg-3);
        }
    `,
    tertiary: css`
        color: var(--color-text-2);
        border: 1px solid var(--color-text-1);
        background: none;
        border-radius: 100px;

        &:hover {
            background-color: var(--color-bg-3);
        }
    `,
    danger: css`
        color: var(--color-text-1);
        background-color: var(--color-red-1);

        &:hover {
            background-color: var(--color-red-2);
        }
    `,
};

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    border-radius: 6px;
    box-shadow: var(--shadow-sm);

    ${(props) => sizes[props.size]}
    ${(props) => variations[props.var]}

    &:disabled {
        cursor: not-allowed !important;
        opacity: 0.6;
    }
`;

Button.defaultProps = {
    var: "primary",
    size: "medium",
};

export default Button;
