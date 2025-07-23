declare global {
	type SelectOptions = {
		key: string;
		value: string;
		opt: string;
	};

	type MessageResponse = {
		msg: string;
	};

	type PaginationResult<T> = {
		page: number;
		pages: number;
		limit: number;
		total?: number;
		data: T[];
	};

	type PaginationOptions = {
		page?: number;
		limit?: number;
		query?: string;
	};
}

// This line is required to make this a module (avoid isolatedModules error)
export {};
