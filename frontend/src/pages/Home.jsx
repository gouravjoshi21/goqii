import styled from "styled-components";
import Heading from "../ui/Heading";
import Button from "../components/Button";
import UserList from "../features/user/UserList";
import Modal from "../components/Modal";
import AddUserForm from "../features/user/AddUserForm";
import Head from "../ui/Head";
import Mixins from "../styles/Mixins";

const Parent = styled.div`
    padding: 64px 16px;

    & > * {
        max-width: 1200px;
        margin: 0 auto;
    }

    ${Mixins.tabPort`
        padding: 32px 16px;
    `}
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
`;

function Home() {
    return (
        <Parent>
            <Head
                data={{
                    title: "Users Listing",
                    description:
                        "Here you can create, update, edit, delete a user which is made by Gourav Joshi",
                }}
            />
            <Header>
                <Heading>Users</Heading>
                <Modal>
                    <Modal.Open opens="remove-movie">
                        <Button>Add user</Button>
                    </Modal.Open>
                    <Modal.Window type="popup" name="remove-movie">
                        <AddUserForm />
                    </Modal.Window>
                </Modal>
            </Header>

            <UserList />
        </Parent>
    );
}

export default Home;
