import styled from "styled-components";
import Heading from "../ui/Heading";
import Button from "../components/Button";
import UserList from "../features/user/UserList";

const Parent = styled.div`
    padding: 64px 16px;

    & > * {
        max-width: 1200px;
        margin: 0 auto;
    }
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
            <Header>
                <Heading>Users</Heading>
                <Button>Add user</Button>
            </Header>

            <UserList />
        </Parent>
    );
}

export default Home;
