import styled from "styled-components";

const StyledFormRow = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: max-content 1fr;
    grid-template-areas:
        "label error"
        "input input";
    gap: 4px;
`;

const Label = styled.label`
    font-size: 12px;
    color: var(--color-text-2);
    font-weight: 500;
    grid-area: label;
`;

const Error = styled.span`
    font-size: 12px;
    color: var(--color-red-1);
    grid-area: error;
    text-align: right;
`;
const Body = styled.div`
    grid-area: input;
`;

function FormRow({ label, error, children }) {
    return (
        <StyledFormRow>
            {label && <Label htmlFor={children.props.id}>{label}</Label>}
            {error && <Error>{error}</Error>}
            <Body>{children}</Body>
        </StyledFormRow>
    );
}

export default FormRow;
