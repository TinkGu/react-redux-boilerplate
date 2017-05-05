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
        "author": {
            "type": "string",
            "message": "Author"
        },
        "cssModules": {
            "type": "confirm",
            "message": "Support css-modules?"
        },
        "antd": {
            "type": "confirm",
            "message": "Install ant.design?"
        },
        "resetCss": {
            "type": "confirm",
            "message": "Normalize the default style?"
        },
        "needExample": {
            "type": "confirm",
            "message": "Need some example files?"
        }
    },
    "filters": {
        "build/modifyAntdTheme.js": "antd",
        "src/styles/antdTheme.less": "antd",
        "src/styles/reset.css": "resetCss",
        "src/actions/books.js": "needExample",
        "src/actions/notification.js": "needExample",
        "src/apis/books.js": "needExample",
        "src/reducers/books.js": "needExample",
        "src/components/BookList/*": "needExample"
    },
    "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm start"
};
