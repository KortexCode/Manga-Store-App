module.exports = {
	'root': true,
	'env': {
		'browser': true,
		'commonjs': true,
		'es2021': true
	},
	'extends': [
		'plugin:react/recommended',
		/* 'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking', */
		'eslint-config-prettier',
		'airbnb',
		'airbnb-typescript',
	],
	'overrides': [
	],
	/* 'parser': '@babel/eslint-parser', */
	'parserOptions': {
		'ecmaVersion': 'latest',
		requireConfigFile: false,
		babelOptions: {
  		presets: ["@babel/preset-react"]
		},
		sourceType: 'module',
		/* "project": ["./tsconfig.json"], */
		/* "requireConfigFile": false */
	},
	'plugins': [
		'react',
		/* '@typescript-eslint' */
	],
	'rules': {
		"import/prefer-default-export": [
			( "off" | "warn" | "error" ),
			{ "target": "any" }
		]
	},
};
