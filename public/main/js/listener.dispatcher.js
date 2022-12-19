function listenerDispatcher() {
  let ALL_LISTENNER = [] // { ?id: number, type_event: string, fn: function}

  window.addEventListener('click', (event) => {
    ALL_LISTENNER.forEach(obj => {
      if (obj.type_event == 'click') { obj.fn(event) }
    })
  })

  window.addEventListener('scroll', () => {
    const current_scroll = document.documentElement.scrollTop
    ALL_LISTENNER.forEach(obj => {
      if (obj.type_event == 'scroll') { obj.fn(current_scroll) }
    })
  })

  window.addEventListener('resize', () => {
    ALL_LISTENNER.forEach(obj => {
      if (obj.type_event == 'resize') { obj.fn() }
    })
  })

  function add(listener_object) {
    ALL_LISTENNER.push(listener_object)
  }
  function clear() {
    ALL_LISTENNER = []
  }

  return { add, clear }
}

const listener_dispatcher = listenerDispatcher()

window.addListener = listener_dispatcher.add
window.clearListener = listener_dispatcher.clear