module.exports = {
  "extends": ["airbnb", "prettier"],
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "rules": {
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        "components": ["Link"],
        "specialLink": ["to", "hrefLeft", "hrefRight"],
        "aspects": ["noHref", "invalidHref", "preferButton"]
      }
    ],
  },
  "plugins": ["jsx-a11y"]
}
