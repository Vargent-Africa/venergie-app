import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
	appId: "com.venergies.app",
	appName: "Venergies",
	webDir: "dist",
	server: {
		androidScheme: "http",
	},
	plugins: {
		CapacitorHttp: {
			enabled: true,
		},
	},
};

export default config;
