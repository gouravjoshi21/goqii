import styled from "styled-components";
import Heading from "../../ui/Heading";
import Form from "../../components/Form/Form";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import { useCreateUser } from "./useAddUser";

const Parent = styled.div``;
function AddUserForm({ onCloseModal }) {
    const { createUser, isLoading } = useCreateUser();
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm();

    function onSubmit(data) {
        createUser(data, {
            onSettled: () => {
                onCloseModal();
            },
        });
    }

    return (
        <Parent>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Heading var="2">Add user</Heading>
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
                    <Form.Row label="Email" error={errors?.email?.message}>
                        <Form.Input
                            type="email"
                            placeholder="example@gmail.com"
                            {...register("email", {
                                required: "Email is required!",
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message:
                                        "Please provide a valid email address",
                                },
                            })}
                            disabled={isLoading}
                        />
                    </Form.Row>
                    <Form.Row
                        label="Password"
                        error={errors?.password?.message}
                    >
                        <Form.Input
                            type="password"
                            placeholder="********"
                            {...register("password", {
                                required: "Password is required!",
                                minLength: {
                                    value: 8,
                                    message:
                                        "Password needs a minimum of 8 characters",
                                },
                            })}
                            disabled={isLoading}
                        />
                    </Form.Row>
                    <Form.Row
                        label="Confirm Password"
                        error={errors?.confirmPassword?.message}
                    >
                        <Form.Input
                            type="password"
                            placeholder="********"
                            {...register("confirmPassword", {
                                required: "Password is required!",
                                minLength: {
                                    value: 8,
                                    message:
                                        "Password needs a minimum of 8 characters",
                                },
                                validate: (value) =>
                                    value === getValues().password ||
                                    "Password need to match",
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
                    <Button disabled={isLoading}>Save</Button>
                </Form.Buttons>
            </Form>
        </Parent>
    );
}

export default AddUserForm;
