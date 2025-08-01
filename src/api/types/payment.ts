import { Order } from "./order";

export enum PaymentGateway {
	KLUMP = "Klump",
}

export type Payment = {
	guid: string;
	payment_gateway: PaymentGateway;
	payment_gateway_status: string;
	total_payment: number;
	payment_meta: Record<string, any>;
	order_payment_ref: string;
	order: Order;
	created_at: Date;
	updated_at: Date;
};

export type PaymentInput = {
	payment_gateway: PaymentGateway;
	payment_gateway_status: string;
	payment_gateway_ref: string;
	payment_meta: Record<string, any>;
};
