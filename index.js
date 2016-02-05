
module.exports = qsa

function qsa(el, selectors) {
  if (arguments.length == 1) {
    selectors = el
    el = document
  }

  return Array.prototype.slice.call(el.querySelectorAll(selectors))
}
