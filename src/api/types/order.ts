import { CartItemApi } from "./cart";
import { User } from "./user";

export enum OrderStatus {
	SUCCESS = "success",
	FAILED = "failed",
	PENDING = "pending",
}

export type Order = {
	guid: string;
	user_guid: string;
	guest_token: string;
	payment_guid: string;
	cart_item: CartItemApi[];
	sum_price: number;
	delivery_details: Record<string, any>;
	status: OrderStatus;
	failure_reason: string;
	user: User;
	// payment: Payment;
	created_at: Date;
	updated_at: Date;
};
