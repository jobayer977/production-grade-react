import jwt_decode from 'jwt-decode';

export const concatFilterQuery = (options: any): string => {
	return Object.keys(options)
		.map((x) => {
			return `${x}=${options[x]}`;
		})
		.join('&');
};

const storagePrefix = 'jd_react_';
export const storage = {
	getToken: (): string | false => {
		let item: any = localStorage.getItem(`${storagePrefix}token`);
		return JSON.parse(item) as string;
	},
	getDecodedToken: (): any => {
		let item: any = localStorage.getItem(`${storagePrefix}token`);
		return jwt_decode(item);
	},
	setToken: (token: string) => {
		localStorage.setItem(`${storagePrefix}token`, JSON.stringify(token));
	},
	clear: () => {
		localStorage.clear();
	},
	setData(data: any, key: string) {
		localStorage.setItem(key, JSON.stringify(data));
	},
	getDate(key: string) {
		let item = localStorage.getItem(key);
		if (!item) {
			return;
		}
		return JSON.parse(item);
	},
	removeData(key: string) {
		localStorage.removeItem(key);
	},
};

export const toSafeArray = (data: any) => {
	if (
		!data &&
		!Array.isArray(data) &&
		data?.length === 0 &&
		data?.length === undefined &&
		data?.length === null &&
		data?.length === ''
	) {
		return [];
	}
	return data;
};

export const removeIFrameInRootHtml = () => {
	const iframe = document.getElementById('iframe');
	if (iframe) {
		iframe.remove();
	}
};
