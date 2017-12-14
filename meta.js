module.exports = {
    "helpers": {
        "if_or": function (v1, v2, options) {
            if (v1 || v2) {
                return options.fn(this)
            }

            return options.inverse(this);
        },
        "_not": function (x, options) {
            return x ? options.inverse(this) : options.fn(this)
        }
    },
    "prompts": {
        "name": {
            "type": "string",
            "required": true,
            "message": "Project name"
        },
        "description": {
            "type": "string",
            "required": false,
            "message": "Project description",
            "default": "A React project"
        },
        "keywords": {
            "type": "string",
            "required": false,
            "message": "Product keywords",
            "default": ""
        },
        "author": {
            "type": "string",
            "message": "Author"
        },
        "redux": {
            "type": "confirm",
            "message": "Use Redux?"
        },
        "resetCss": {
            "type": "confirm",
            "message": "Normalize the default style?"
        },
        "eslint": {
            "type": "confirm",
            "message": "Support ESLint?"
        },
    },
    "filters": {
        ".eslintignore": "eslint",
        ".eslintrc.js": "eslint",
        "src/styles/reset.css": "resetCss",
        "src/App/asyncImport.js": "redux",
        "src/App/ducks.js": "redux",
        "src/App/store.js": "redux",
        "src/Counter": "redux"
    },
    "completeMessage": "Have Fun!"
};
