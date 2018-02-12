module.exports = {
    "env": {
        "browser": true,
        // "commonjs": true,
        "es6": true
    },
    parser: "babel-eslint",
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "standard"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module",
        ecmaversion: 6
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-console": [2, { allow: ["warn", "error"] }],
        "comma-dangle": [2, "always-multiline"],
        "semi": [2, "never"],
        "no-extra-semi": 2,
        "jsx-quotes": [2, "prefer-single"],
        "react/jsx-boolean-value": [2, "always"],
        "react/jsx-closing-bracket-location": [2, { selfClosing: "after-props", nonEmpty: "after-props" }],
        "react/jsx-max-props-per-line": [2, { maximum: 3 }],
        "react/self-closing-comp": 2,
        "react/sort-comp": 2,
        "no-console": 0,
    },

    "settings": {
        "react": {
            "createClass": "createReactClass", // Regex for Component Factory to use,
            // default to "createReactClass"
            "pragma": "React",  // Pragma to use, default to "React"
            "version": "15.0", // React version, default to the latest React stable release
            "flowVersion": "0.53" // Flow version
        },
        "propWrapperFunctions": ["forbidExtraProps"] // The names of any functions used to wrap the
        // propTypes object, e.g. `forbidExtraProps`.
        // If this isn't set, any propTypes wrapped in
        // a function will be skipped.
    }

};