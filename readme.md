# qsa

> querySelectorAll that returns an array

## Install

```bash
npm i jeromedecoster/qsa
```

## API

#### qsa(selectors)

```js
const qsa = require('qsa')

// all `p` of the document
qsa('p').forEach(function(e) {
  console.log(e.textContent)
})
```

#### qsa(el, selectors)

```js
const qsa = require('qsa')

var el = document.querySelector('.here')

// all `p` from `el`
qsa(el, 'p').forEach(function(e) {
  console.log(e.textContent)
})
```

## License

MIT
