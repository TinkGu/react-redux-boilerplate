module.exports = {
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
        "src/styles/reset.css": "resetCss"
    },
    "completeMessage": "Have Fun!"
};
