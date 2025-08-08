export type CartItemApi = {
	item_guid: string;
	item_name: string;
	quantity: number;
	unit_price: number;
	item_img?: string | null;
};

interface DeliveryData {
	first_name: string;
	last_name: string;
	email: string;
	address: string;
	phone_number: string;
	[key: string]: any;
}

interface OrderCost {
	sub_total: number;
	shipping_fee: number;
}

export type Cart = {
	guid: string;
	user_guid: string;
	guest_token: string;
	cart_item: CartItemApi[];
	order_cost: OrderCost;
	delivery_details: DeliveryData;
	order_payment_ref: string;
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
