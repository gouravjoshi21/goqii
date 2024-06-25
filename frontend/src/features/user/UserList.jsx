import styled from "styled-components";
import UserItem from "./UserItem";
import { useUsers } from "./useUsers";

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
    const { users, isLoading, error } = useUsers();
    const isEmpty = users.length ? false : true;

    return (
        <List>
            {isLoading && <Empty>Loading...</Empty>}
            {!isLoading && isEmpty && <Empty>No users found 😔!</Empty>}
            {!isLoading &&
                !isEmpty &&
                users.map((user) => <UserItem data={user} key={user.id} />)}
        </List>
    );
}

export default UserList;
