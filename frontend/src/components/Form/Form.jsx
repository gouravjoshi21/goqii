import styled from "styled-components";
import FormRow from "./FormRow";
import Input from "./Input";

const StyledForm = styled.form`
    display: grid;
    grid-template-columns: minmax(0, 350px);
    justify-content: center;
    flex-direction: column;
    gap: 24px;
`;

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

function Form({ children, ...props }) {
    return <StyledForm {...props}>{children}</StyledForm>;
}

Form.Wrapper = FormWrapper;
Form.Row = FormRow;
Form.Input = Input;
Form.Buttons = Buttons;

export default Form;
