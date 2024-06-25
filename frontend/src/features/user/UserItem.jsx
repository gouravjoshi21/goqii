import styled from "styled-components";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import Menus from "../../components/Menus";

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

function UserItem() {
    return (
        <Item>
            <Header>
                <Name>Gourav</Name>
                <Email>GouravJoshi953@gmail.com</Email>
            </Header>
            <Options>
                <Menus>
                    <Menus.Menu>
                        <Menus.Toggle id={1} />

                        <Menus.List id={1}>
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
                    Date of birth: <b>10 Oct 2024</b>
                </p>
            </Footer>
        </Item>
    );
}

export default UserItem;
