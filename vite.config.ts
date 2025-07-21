import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			components: `${__dirname}/src/components`,
			containers: `${__dirname}/src/containers`,
			styles: `${__dirname}/src/styles`,
			assets: `${__dirname}/src/assets`,
			utils: `${__dirname}/src/utils`,
			contexts: `${__dirname}/src/contexts`,
			api: `${__dirname}/src/api`,
			hooks: `${__dirname}/src/hooks`,
		},
	},
	envPrefix: "VG_",
});
