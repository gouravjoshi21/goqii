import { useQuery } from "@tanstack/react-query";
import { gets } from "../../services/apiUser";

export function useUsers() {
    const {
        isLoading,
        data: users,
        error,
    } = useQuery({
        queryKey: ["users"],
        queryFn: gets,
    });

    return { isLoading, error, users };
}
