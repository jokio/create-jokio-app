# Create Jokio App
[![engine: jokio](https://img.shields.io/badge/engine-%F0%9F%83%8F%20jokio-44cc11.svg)](https://github.com/jokio/jokio)

The easiest way to create a [jokio](https://github.com/jokio/jokio) app 

## Features:
Those features are out of the box in default template :
* Configured dev environement ([nodemon](https://github.com/remy/nodemon))
* Configured test environement ([jest](https://github.com/facebook/jest))
* Configured [EditorConfig](https://github.com/editorconfig/editorconfig)
* Configured CI/CD ([travis](http://travis-ci.org))
* Configured Linting [TSLint](https://github.com/palantir/tslint)
* Last but not least: 100% type safety! ([TypeScript](https://github.com/Microsoft/TypeScript))


## Additional Options:
* `--nextjs` - To create nextjs project template (all features included)
* `--graphql` - To create graphql project template (all features included)
* `--nextjs --graphql` - To create nextjs + graphql project template (all features included)

Note: Creates default (empty) project template, if there will be no options passed


## How to use:
You don't need to install anything, just you've to use yarn :)
```
yarn create jokio-app myapp
```

## More examples:
```
yarn create jokio-app myapp-ui --nextjs
```
```
yarn create jokio-app myapp-graph --graphql
```


Questions? Feedback? [Please let us know](https://github.com/segmentio/create-next-app/issues/new)
