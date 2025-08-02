declare module "klump-react";

type Item = {
	image_url: string;
	item_url: string;
	name: string;
	quantity: number;
	unit_price: number;
};

type KlumpDataPayload = {
	amount: number;
	shipping_fee: number;
	currency: string;
	first_name: string;
	last_name: string;
	email: string;
	phone: string;
	redirect_url?: string;
	merchant_reference: string;
	meta_data?: Record<string, any>;
	items: Item[];
};

type KlumpPayload = {
	publicKey: string;
	data: KlumpDataPayload;
	onSuccess?: (data: any) => void;
	onError?: (data: any) => void;
	onLoad?: (data: any) => void;
	onOpen?: (data: any) => void;
	onClose?: (data: any) => void;
};

type KlumpData = {
	data: {
		status: boolean;
		type: string;
	};
};

type KlumpError = {
	data: {
		message: string;
		type: string;
	};
};

type KlumpSuccessData = {
	data: {
		status: boolean;
		type: string;
		data: {
			status: string;
			data: {
				reference: string;
				redirect_url: boolean | string;
			};
		};
	};
};

declare class Klump {
	constructor(payload: KlumpPayload);
}

// eslint-disable-next-line no-undef
// @ts-ignore
// declare function Klump(payload: KlumpPayload): any;
