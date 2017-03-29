;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-jiantouxia" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M964.442162 315.495534 903.606163 255.993349 511.999488 647.667889 120.392814 255.993349 59.557838 315.495534 511.999488 768.004605Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-jiantouzuo" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M652.8 32 179.2 512 652.8 32Z"  ></path>'+
      ''+
      '<path d="M179.2 512 652.8 992 179.2 512Z"  ></path>'+
      ''+
      '<path d="M243.2 544c-6.4 0-19.2 0-25.6-6.4-12.8-12.8-12.8-32 0-44.8l480-480c12.8-12.8 32-12.8 44.8 0s12.8 32 0 44.8L262.4 537.6C256 544 249.6 544 243.2 544z"  ></path>'+
      ''+
      '<path d="M716.8 1024c-6.4 0-19.2 0-25.6-6.4L217.6 537.6c-12.8-12.8-12.8-32 0-44.8s32-12.8 44.8 0l480 480c12.8 12.8 12.8 32 0 44.8C736 1017.6 729.6 1024 716.8 1024z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
