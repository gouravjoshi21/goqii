import styled from "styled-components";

const Input = styled.input`
    width: 100%;
    height: 45px;
    padding: 0 16px;
    border: none;
    background: var(--color-glass-1);
    border-radius: 6px;
    font-size: 14px;
    border: 1px solid var(--color-bg-3);

    /* &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px var(--color-bg-1) inset !important;
        -webkit-text-fill-color: var(--color-text-1) !important;
    } */
`;

export default Input;
