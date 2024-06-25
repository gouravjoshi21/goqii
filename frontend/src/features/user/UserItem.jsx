import styled from "styled-components";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import Menus from "../../components/Menus";
import { formatDate, ucfirst } from "../../services/helpers";
import Modal from "../../components/Modal";
import AddUserForm from "./AddUserForm";
import Confirm from "../../components/Confirm";
import EditUserForm from "./EditUserform";
import { useDeleteUser } from "./useDeleteUser";
import Mixins from "../../styles/Mixins";

const Item = styled.div`
    padding: 24px;
    border-radius: var(--border-radius-lr);
    background-color: var(--color-glass-2);

    display: grid;
    grid-template-columns: 1fr max-content;
    grid-template-areas:
        "header options"
        "footer footer";
    gap: 16px;
`;
const Header = styled.div``;
const Footer = styled.div`
    font-size: 14px;
`;
const Options = styled.div``;

const Name = styled.div`
    font-size: 24px;
    color: var(--color-text-1);

    ${Mixins.mediumTab`
        font-size: 18px;
    `};
`;
const Email = styled.div`
    font-size: 14px;
`;

function UserItem({ data }) {
    const { id, name, email, dob } = data;
    const { deleteUser, isLoading } = useDeleteUser();

    function handleDelete() {
        deleteUser({ id });
    }

    return (
        <Item>
            <Header>
                <Name>
                    <b>{ucfirst(name)}</b>
                </Name>
                <Email>{ucfirst(email)}</Email>
            </Header>
            <Options>
                <Modal>
                    <Menus>
                        <Menus.Menu>
                            <Menus.Toggle id={id} />

                            <Menus.List id={id}>
                                <Modal.Open opens="edit-user">
                                    <Menus.Button icon={<FiEdit2 />}>
                                        Edit
                                    </Menus.Button>
                                </Modal.Open>
                                <Modal.Open opens="remove-user">
                                    <Menus.Button icon={<AiOutlineDelete />}>
                                        Delete
                                    </Menus.Button>
                                </Modal.Open>
                            </Menus.List>
                        </Menus.Menu>

                        <Modal.Window type="popup" name="edit-user">
                            <EditUserForm data={data} />
                        </Modal.Window>

                        <Modal.Window type="popup" name="remove-user">
                            <Confirm
                                title="Remove"
                                type="danger"
                                label="Remove"
                                disabled={isLoading}
                                onConfirm={handleDelete}
                            >
                                Do you want to remove {ucfirst(name)}'s account?
                            </Confirm>
                        </Modal.Window>
                    </Menus>
                </Modal>
            </Options>
            <Footer>
                <p>
                    Date of birth: <b>{formatDate(dob)}</b>
                </p>
            </Footer>
        </Item>
    );
}

export default UserItem;
