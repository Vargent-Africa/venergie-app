export enum AvailabilityStatus {
	IN_STOCK = "in stock",
	OUT_OF_STOCK = "out of stock",
	PRE_ORDER = "pre order",
}

export enum PromotionalStatus {
	ON_SALE = "on sale",
	FEATURED = "featured",
	BEST_SELLER = "best seller",
}

export enum VisibilityStatus {
	DRAFT = "draft",
	PUBLIC = "public",
	PRIVATE = "private",
}

export type Item = {
	guid: string;
	user_guid: string;
	name: string;
	price: number;
	currency: string;
	availability_status: AvailabilityStatus;
	promotional_status: PromotionalStatus;
	visibility_status: VisibilityStatus;
	quantity: number;
	item_details: string;
	images: string[];
	created_at: Date;
	updated_at: Date;
};
