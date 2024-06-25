import styled from "styled-components";
import UserItem from "./UserItem";

const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
`;
const Empty = styled.p`
    font-size: 16px;
    text-align: center;
`;

function UserList() {
    return (
        <List>
            <Empty>No User Found 😔</Empty>
            <UserItem />
            <UserItem />
            <UserItem />
        </List>
    );
}

export default UserList;
