
const qsa = require('..')

qsa('p').forEach(function(e) {
  console.log(e.textContent)
  e.classList.add('background')
})

qsa(document.querySelector('div'), 'p').forEach(function(e) {
  e.classList.add('color')
})
