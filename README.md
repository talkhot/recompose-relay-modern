recompose-relay-modern
======================


[Recompose](https://github.com/acdlite/recompose) helpers for [Relay](https://facebook.github.io/relay). Adapted from [recompose-relay](https://www.npmjs.com/package/recompose-relay)

```
npm install --save recompose-relay-modern
```

## API

### `createFragmentContainer()`

```js
createFragmentContainer(
  specification: Object,
  BaseComponent: ReactElementType
): ReactElementType
```

A curried, component-last version of `Relay.createFragmentContainer()`. This makes it composable with other Recompose helpers.

If the base component is not a class component, it is converted to one using `toClass()`. This allows Relay to add a ref to the base component without causing React to print a warning. (Function components cannot have refs.) This behavior will be removed once Relay updates to support function components.

Tip: Use `flattenProp()` in combination with `createFragmentContainer()` to flatten fragment props:

```js
const Post = compose(
  createFragmentContainer(
    graphql`
      fragment on Post {
        title,
        content,
        author {
          name
        }
      }
    `
  ),
  flattenProp('post')
)(({ title, content, author }) => (
  <article>
    <h1>{title}</h1>
    <h2>By {author.name}</h2>
    <div>{content}</div>
  </article>
));
```
