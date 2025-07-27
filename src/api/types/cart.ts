export type CartItemApi = {
	item_guid: string;
	item_name: string;
	quantity: number;
	unit_price: number;
};

// type DeliveryData = {
// 	[key: string]: any;
// };

export type Cart = {
	guid: string;
	user_guid: string;
	guest_token: string;
	cart_item: CartItemApi[];
	sum_price: number;
	delivery_details: Record<string, any>;
	created_at: Date;
	updated_at: Date;
};

export type CreateCartInput = {
	cart_item: CartItemApi[];
	first_name: string;
	last_name: string;
	email: string;
	address: string;
	phone_number: string;
	guest_token: string;
	user_guid: string | null;
};
