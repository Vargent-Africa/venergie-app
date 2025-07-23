import axios from "axios";

const baseURL: string = import.meta.env.VG_API_BASE_URL;

const api = axios.create({
	baseURL,
	withCredentials: true,
	headers: {
		"Content-Type": "application/json",
	},
});

const apiFile = axios.create({
	baseURL,
	headers: {
		"Content-Type": "multipart/form-data",
	},
});
/**
 intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired or user is no longer
 authenticated.
 logout the user if the token has expired
**/

api.interceptors.response.use(
	(res) => res,
	(err) => {
		if (err.response?.status === 401) {
			console.clear();
		}
		return Promise.reject(err);
	}
);

export const getData = async (url: string) => {
	const { data } = await api.get(url);
	return data;
};

// export const getData = async (url: string, controller?: AbortController) => {
// 	const response = await fetch(`http://localhost:3000/v1${url}`);
// 	const resp = await response.json();
// 	console.log("dataaa", resp);
// 	return resp;
// };

export const postData = async (url: string, post: object) => {
	const { data } = await api.post(url, post);
	return data;
};

export const patchData = async (url: string, post: object) => {
	const { data } = await api.patch(url, post);
	return data;
};

export const deleteData = async (url: string) => {
	const { data } = await api.delete(url);
	return data;
};

export const uploadFile = async (url: string, post: object) => {
	const { data } = await apiFile.post(url, post);
	return data;
};

export default api;
