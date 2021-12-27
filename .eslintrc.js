module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        strict: ['error', 'global'], // Use Strict mode, (means define every variable before use)
        'multiline-comment-style': ['error', 'starred-block'], // Enforce to use star style comment (/* * <comment1> * <comment2> */), instead of consecutive single line comment or bare-block comment (/* <comment> */)
        'spaced-comment': ['error', 'always'], // Add a space after single comment sign (//) and before comment text
        semi: ['error', 'always'], // End each statement with a semi-colon
        'semi-spacing': 'error', // No extra space between semicolon & previous text
        'no-extra-semi': 'error', // No extra semicolon at the end of each statement
        'no-unexpected-multiline': 'error', // Not allow multilines which make ambiguity
        'max-len': ['error', { 'code': 80 }], // Define max length for a code line
        'comma-style': ['error', 'last'], // Where to place comma, in a multiline list (last / first)
        'comma-dangle': ['error', 'always-multiline'], // Add a comma after the last item of a multiline list
        indent: ['error', 2], // Define the indent size
        'space-infix-ops': 'error', // Add spaces before and after inline operators
        'space-before-blocks': 'error', // Add space before blocks (before brace symbol "{" )
        'brace-style': 'error', // Place brace symbol right after the last keyword, instead of the next line
        'keyword-spacing': 'error', // Add Space before or after keywords (if, else, ...)
        'arrow-spacing': 'error', // Add Space before or after arrow sign (=>)
        'space-before-function-paren': [ // Add a space before parenthesis in anonymous or arrow functions, but not in named functions
        'error', 
        { 
            'anonymous': 'always', 
            'named': 'never', 
            'asyncArrow': 'always', 
        },
        ],
        'newline-per-chained-call': 'error', // Need a new line for each chained call
        'space-in-parens': ['error', 'never'], // Prevent inner space in parenthesis ()
        'array-bracket-spacing': ['error', 'never'], // Prevent inner space in bracket []
        'object-curly-spacing': ['error', 'always'], // Add inner space in braces {}
        'comma-spacing': ['error', { 'before': false, 'after': true }], // Add space only afte commas, not before
        'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 1 }], // Prevent consecutive empty lines
    }
};
