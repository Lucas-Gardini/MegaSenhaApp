export default {
	// Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
	ssr: false,

	// Target: https://go.nuxtjs.dev/config-target
	target: "static",

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "MegaSenhaApp",
		htmlAttrs: {
			lang: "pt-br",
		},
		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{ hid: "description", name: "description", content: "" },
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ["ant-design-vue/dist/antd.css"],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: ["@/plugins/antd-ui"],

	env: {
		NODE_ENV: process.env.NODE_ENV || process.env.VERCEL_ENV,
	},

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		"@nuxtjs/eslint-module",
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		"@nuxtjs/axios",
		"@nuxtjs/firebase",
	],

	firebase: {
		config: {
			apiKey: "AIzaSyApq-rTzmtYwsFzJsDTmt5-VxWqZrrwG1g",
			authDomain: "megasenhaapp.firebaseapp.com",
			projectId: "megasenhaapp",
			storageBucket: "megasenhaapp.appspot.com",
			messagingSenderId: "195856898943",
			appId: "1:195856898943:web:86b03edf414ed0ea33184a",
		},
		services: {
			auth: true,
			firestore: true,
		},
		auth: {
			persistence: "local", // default
			initialize: {
				onAuthStateChangedMutation: "ON_AUTH_STATE_CHANGED_MUTATION",
				onAuthStateChangedAction: "onAuthStateChangedAction",
				subscribeManually: false,
			},
			ssr: false, // default
			emulatorPort: 9099,
			emulatorHost: "http://localhost/",
		},
		firestore: {
			memoryOnly: false,
			chunkName:
				process.env.VERCEL_ENV !== "production"
					? "firebase-auth"
					: "[id]",
			enablePersistence: true,
			emulatorPort: 8080,
			emulatorHost: "http://localhost/",
		},
	},

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},
};
