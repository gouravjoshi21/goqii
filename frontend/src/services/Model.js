import axios from "axios";

async function Model({ request, url = null, api = null, data = {} }) {
    try {
        let response;
        let headers = {};
        let serverApi = "http://goqii.local/api/v1";
        let fullUrl = api ? `${serverApi}${api}` : url;

        switch (request) {
            case "GET":
                response = await axios.get(fullUrl, { headers });
                break;
            case "POST":
                response = await axios.post(fullUrl, data, { headers });
                break;
            case "PUT":
                response = await axios.put(fullUrl, data, { headers });
                break;
            case "PATCH":
                response = await axios.patch(fullUrl, data, { headers });
                break;
            case "DELETE":
                response = await axios.delete(fullUrl, { headers });
                break;
            default:
                throw new Error("Invalid request type!");
        }

        const res = response.data;

        if (res.status !== "success")
            throw new Error(res.message ?? "Something went wrong!");

        return res;
    } catch (error) {
        throw new Error(error?.response?.data?.message ?? error);
    }
}

export default Model;
