// ## get viewport size
let viewport = {
  height: window.innerHeight,
  width: window.innerWidth,
}

// ## function draw iframe
const drawIframe = function(testURL, elementID) {
  // create iframe 
  let iframe = document.createElement('iframe')
  iframe.id = elementID
  iframe.src = testURL

  // append to 
  document.body.appendChild(iframe)
  console.log('testURL: ' + testURL + ' ' + iframe.id + ' ' + iframe.src )

  // call resize to resize iframe if necessary 
  reSize(800, elementID)
}

// ## function resize iframe
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



// ## And action:

// event listeners on page loaded
onload = (event) => {
  drawIframe('./index.html', 'testflowPrototype')
}

// event listeners on viewport resized
window.onresize = function() {
  reSize(800, 'testflowPrototype')
}
