Dialexa Javascript Style Guide
---

# Installation

```
 npm install --save-dev @dialexa/eslint-config-dialexa
```

Lastly, make sure you have [eslint](http://eslint.org) installed in your project

```
npm install eslint@2.2.0 --save-dev
npm install babel-eslint@5.0.0 --save-dev
npm install eslint-plugin-react@4.0.0 --save-dev
```


# Usage

Add one of the following to your project's `.eslintrc` file (based on your project type).

### ES5

```json
{
  "extends": "@dialexa/eslint-config-dialexa"
}
```

### ES6

```json
{
  "extends": "@dialexa/eslint-config-dialexa/es6"
}
```

### Node 4.x +

```json
{
  "extends": "@dialexa/eslint-config-dialexa/node-es6"
}
```

### Ember
```json
{
  "extends": "@dialexa/eslint-config-dialexa/ember"
}
```

### React
```json
{
  "extends": "@dialexa/eslint-config-dialexa/react"
}
```
