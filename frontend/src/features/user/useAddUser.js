import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { add } from "../../services/apiUser";

export function useCreateUser() {
    const queryClient = useQueryClient();

    const { mutate: createUser, isPending: isLoading } = useMutation({
        mutationFn: add,
        onSuccess: (data) => {
            queryClient.invalidateQueries(["users"]);

            toast.success("User Added successfully!");
        },
        onError: (err) => toast.error(err.message),
    });

    return { isLoading, createUser };
}
