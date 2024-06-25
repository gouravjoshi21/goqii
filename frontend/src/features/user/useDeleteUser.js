import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { deleteUser as deleteUserApi } from "../../services/apiUser";

export function useDeleteUser() {
    const queryClient = useQueryClient();

    const { mutate: deleteUser, isPending: isLoading } = useMutation({
        mutationFn: deleteUserApi,
        onSuccess: (data) => {
            queryClient.invalidateQueries(["users"]);

            toast.success("User Deleted successfully!");
        },
        onError: (err) => toast.error(err.message),
    });

    return { isLoading, deleteUser };
}
