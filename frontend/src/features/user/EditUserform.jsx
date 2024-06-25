import styled from "styled-components";
import Heading from "../../ui/Heading";
import Form from "../../components/Form/Form";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import { useUpdateUser } from "./useUpdateUser";

const Parent = styled.div``;
function EditUserForm({ onCloseModal, data }) {
    const { updateUser, isLoading } = useUpdateUser();
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm({ defaultValues: data });

    function onSubmit(data) {
        updateUser(data, {
            onSettled: () => {
                onCloseModal();
            },
        });
    }

    return (
        <Parent>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Heading var="2">Edit user</Heading>
                <Form.Wrapper>
                    <Form.Row label="Name" error={errors?.name?.message}>
                        <Form.Input
                            type="text"
                            {...register("name", {
                                required: "Name is required!",
                            })}
                            disabled={isLoading}
                        />
                    </Form.Row>
                    <Form.Row
                        label="Date of birth"
                        error={errors?.dob?.message}
                    >
                        <Form.Input
                            type="date"
                            {...register("dob", {
                                required: "DOB is required!",
                            })}
                            disabled={isLoading}
                        />
                    </Form.Row>
                </Form.Wrapper>
                <Form.Buttons>
                    <Button disabled={isLoading}>
                        {isLoading ? "Updating...." : "Update"}
                    </Button>
                </Form.Buttons>
            </Form>
        </Parent>
    );
}

export default EditUserForm;
