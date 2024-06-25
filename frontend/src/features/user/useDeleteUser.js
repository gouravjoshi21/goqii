import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { update } from "../../services/apiUser";

export function useDelete() {
    const queryClient = useQueryClient();

    const { mutate: updateUser, isPending: isLoading } = useMutation({
        mutationFn: update,
        onSuccess: (data) => {
            queryClient.invalidateQueries(["users"]);

            toast.success("User Updated successfully!");
        },
        onError: (err) => toast.error(err.message),
    });

    return { isLoading, updateUser };
}
