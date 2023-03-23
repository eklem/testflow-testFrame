// get viewport size
let viewport = {
  height: window.innerHeight,
  width: window.innerWidth,
}

// resize iframe
const reSize = function (maxHeight, elementID) {
  let height = window.innerHeight
  let width = window.innerWidth
  let element = document.getElementById(elementID)
  // console.dir(elementID)
  // console.dir(element)

  if ((window.innerHeight - 20) < maxHeight) {
    element.style.height = ((window.innerHeight - 20) + 'px')
  }

  if ((window.innerHeight -20 ) >= maxHeight) {
    element.style.height = (maxHeight + 'px')
  }
  console.log('## Viewport - Height: ' + height + ' Width: ' + width)
  console.log('## Iframe   - Height: ' + document.getElementById(elementID).style.height)
}

// event listeners on page loaded
onload = (event) => {
  reSize(800, 'testflowPrototype')
};

// event listeners on viewport resized
window.onresize = function() {
  reSize(800, 'testflowPrototype')
};