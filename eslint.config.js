module.export = [
    {
        "files": ['**/*.js'],
        "env": {
            "browser": true,
            "es2021": true
        },
        "extends": "eslint:recommended",
        "parserOptions": {
            "ecmaVersion": "latest",
            "sourceType": "module"
        },
        "rules": {
            "no-unused-vars": "warn",
            "no-console": "off"
        },
    }
]