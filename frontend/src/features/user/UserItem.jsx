import styled from "styled-components";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import Menus from "../../components/Menus";
import { formatDate, ucfirst } from "../../services/helpers";

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
`;
const Email = styled.div`
    font-size: 14px;
`;

function UserItem({ data: { id, name, email, dob } }) {
    return (
        <Item>
            <Header>
                <Name>{ucfirst(name)}</Name>
                <Email>{ucfirst(email)}</Email>
            </Header>
            <Options>
                <Menus>
                    <Menus.Menu>
                        <Menus.Toggle id={id} />

                        <Menus.List id={id}>
                            <Menus.Button icon={<FiEdit2 />}>Edit</Menus.Button>
                            <Menus.Button icon={<AiOutlineDelete />}>
                                Delete
                            </Menus.Button>
                        </Menus.List>
                    </Menus.Menu>
                </Menus>
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
