module.exports = (api) => {
	api.cache(true)
	return {
		"presets": ["react-native"],
		"plugins": [
			"@babel/plugin-syntax-dynamic-import",
			["module-resolver", {
				"root": ["./src"],
				"alias": {
					"navigation": "./src/navigation",
					"container": "./src/container",
					"screens": "./src/screens",
					"theme": "./src/theme",
					"utils": "./src/utils",
					"boot": "./src/boot",
					"reducers": "./src/reducers",
					"components": "./src/components",
					"i18n": "./src/i18n",
					"assets": "./assets"
				}
			}]
		]
	}
}