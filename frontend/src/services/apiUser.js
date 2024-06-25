import Model from "./Model";

export async function gets() {
    let res = await Model({
        request: "GET",
        api: `/user`,
    });

    return res.data;
}

export async function add(data) {
    let res = await Model({
        request: "POST",
        api: `/user`,
        data,
    });

    return res.data;
}

export async function update(data) {
    let res = await Model({
        request: "PATCH",
        api: `/user`,
        data,
    });

    return res.data;
}

export async function deleteUser({ id }) {
    let res = await Model({
        request: "DELETE",
        api: `/user?id=${id}`,
    });

    return res.data;
}
