import axios from "axios";
import { Capacitor, CapacitorHttp as Http } from "@capacitor/core";

const isMobile = Capacitor.isNativePlatform();

export const API_URL: string = isMobile
	? import.meta.env.VG_API_BASE_URL_MOBILE || import.meta.env.VG_API_BASE_URL
	: import.meta.env.VG_API_BASE_URL;

const api = axios.create({
	baseURL: API_URL,
	withCredentials: true,
	headers: {
		"Content-Type": "application/json",
	},
});

const apiFile = axios.create({
	baseURL: API_URL,
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
	if (isMobile) {
		const { data } = await Http.get({
			url: `${API_URL}${url}`,
			headers: { "Content-Type": "application/json" },
		});
		return data;
	}
	const { data } = await api.get(url);
	return data;
};

export const postData = async (url: string, post: object) => {
	if (isMobile) {
		const { data } = await Http.post({
			url: `${API_URL}${url}`,
			headers: { "Content-Type": "application/json" },
			data: post,
		});
		return data;
	}
	const { data } = await api.post(url, post);
	return data;
};

export const patchData = async (url: string, post: object) => {
	if (isMobile) {
		const { data } = await Http.patch({
			url: `${API_URL}${url}`,
			headers: { "Content-Type": "application/json" },
			data: post,
		});
		return data;
	}
	const { data } = await api.patch(url, post);
	return data;
};

export const deleteData = async (url: string) => {
	if (isMobile) {
		const { data } = await Http.delete({
			url: `${API_URL}${url}`,
			headers: { "Content-Type": "application/json" },
		});
		return data;
	}
	const { data } = await api.delete(url);
	return data;
};

export const uploadFile = async (url: string, post: FormData) => {
	if (isMobile) {
		const { data } = await Http.post({
			url: `${API_URL}${url}`,
			headers: { "Content-Type": "multipart/form-data" },
			data: post,
		});
		return data;
	}
	const { data } = await apiFile.post(url, post);
	return data;
};

export default api;
