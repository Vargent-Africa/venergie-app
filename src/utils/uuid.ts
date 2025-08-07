import ShortUUID from "short-uuid";

import { uuidRegex } from "./regex";

export const translator = ShortUUID();

export const toShortUUID = (uuid: string): string => {
	try {
		return translator.fromUUID(uuid);
	} catch (err) {
		throw new Error(`Invalid UUID: ${uuid}`);
	}
};

export const fromShortUUID = (shortId: string): string => {
	const isUUID = uuidRegex.test(shortId);
	if (isUUID || !shortId) return shortId;

	try {
		return translator.toUUID(shortId);
	} catch (err) {
		throw new Error(`Invalid UUID: ${shortId}`);
	}
};
