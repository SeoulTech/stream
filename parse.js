var markdown = marked

getMd(
  './pages/main-landing.md',
  '.js-landing'
)

getMd(
  './pages/main-about.md',
  '.js-about'
)

getMd(
  './pages/workshops.md',
  '.js-workshops'
)

getMd(
  './pages/lectures.md',
  '.js-lectures'
)



function getMd(path, selector) {
  var r = new XMLHttpRequest()
  r.open('get', path, true);
  r.onreadystatechange = function () {
    if (r.readyState != 4 || r.status != 200) return
      document.querySelector(selector).innerHTML = markdown(r.responseText)
  }
  r.send()
}

