const ALL_LISTENNER = [] // { type_event: string, fn: function}

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


function cursor() {
  let maxHeight = document.documentElement.offsetHeight

  ALL_LISTENNER.push({ type_event: 'resize', fn: () => maxHeight = document.documentElement.offsetHeight })

  const cursor = document.querySelector('#cursor')
  document.documentElement.addEventListener('mousemove', (e) => {
    const current_scroll = document.documentElement.scrollTop 
    if ((e.pageY + 20) > maxHeight) {
      cursor.style.top = e.pageY - 20 - current_scroll + 'px'
    } else {
      cursor.style.top = e.pageY - 10 - current_scroll + 'px'
    }

    // add big class
    if (e.target && e.target.closest('[data-cursor_pointer]')) {
      cursor.classList.add('pointer')
    } else {
      cursor.classList.remove('pointer')
    }

    cursor.style.left = e.pageX - 10 + 'px'
  })
}

function openMenu() {
  const menu_block = document.querySelector('.menu_wrapper')
  const menu_open = document.querySelector('#menu_open')
  const menu_close = document.querySelector('#menu_close')

  menu_open.addEventListener('click', open)
  menu_close.addEventListener('click', close)

  function open() {
    menu_block.style.display = 'block'
    setTimeout(() => { menu_block.classList.add('open') }, 300);
  }

  function close() {
    menu_block.classList.remove('open')
    setTimeout(() => { menu_block.style.display = 'none' }, 300);
  }

  return { open, close }
}


function scrollSection() {
  window.addEventListener("hashchange", scroll)

  scroll()

  function scroll() {
    const hash = window.location.hash
    if (!hash || hash.length == 1) return

    const section_id = hash ? hash.slice(1) : ''
    if (!section_id) return

    const menu_block = document.querySelector('.menu_wrapper')
    if (menu_block) {
      menu_block.classList.remove('open')
      setTimeout(() => { menu_block.style.display = 'none' }, 300);
    }
    
    newScroll('elem', section_id)
  }
}


function headerDownAnimate() {
  const document_height = document.documentElement.clientHeight
  const full_document_height = document.documentElement.offsetHeight

  const header_down_block = document.querySelector('.header__down')
  header_down_block.classList.add('up_page')

  ALL_LISTENNER.push({ type_event: 'scroll', fn: (current_scroll) => {
      if (document_height < current_scroll) {
        header_down_block.classList.remove('up_page')
      } else {
        header_down_block.classList.add('up_page')
      }

      if (full_document_height - document_height * 1.2 < current_scroll) {
        header_down_block.classList.add('down_page')
      } else {
        header_down_block.classList.remove('down_page')
      }
    }
  })
}


function philosophyTextAnimate() {
  const document_height = document.documentElement.clientHeight

  const philosophy_title_block = document.querySelector('.lore__title')

  ALL_LISTENNER.push({ type_event: 'scroll', fn: (current_scroll) => {
      const philosophy_title_block_top = getCoords(philosophy_title_block).top
      if (philosophy_title_block_top - document_height / 1.5 < current_scroll) {
        philosophy_title_block.classList.add('visible')
      } else if (philosophy_title_block_top + document_height / 1.5 > current_scroll) {
        philosophy_title_block.classList.remove('visible')
      }
    }
  })
}


function cardScroll() {
  const document_height = document.documentElement.clientHeight

  const card_section = document.querySelector('section.cards')

  const card_blocks = document.querySelectorAll('.card_wrapper')
  if (!card_blocks.length) return

  const card_array = []

  function cardBlockHandler() {
    const parent_block = document.querySelector('section.cards')
    const scroll_top = getCoords(parent_block).top // + document_height * index   // + (document_height) * index // (card_blocks.length - index)

    card_blocks.forEach((card, index) => {
      card_array.push({ index, scroll_top: scroll_top + document_height * index, element: card })
    })
  }
  cardBlockHandler()
  ALL_LISTENNER.push({ type_event: 'resize', fn: cardBlockHandler })


  const scroll = (current_scroll) => {
    card_array.forEach(obj => {
      const { index, scroll_top, element } = obj

      // document.getElementById(index).style.top = scroll_top + 'px'

      const value_opacity = numberHandler(-(scroll_top + element.offsetHeight / 2) + current_scroll, 0, element.offsetHeight,)
      element.style.opacity = value_opacity

      const value_scale = numberHandler(-(scroll_top + element.offsetHeight / 3) + current_scroll, 0, element.offsetHeight,)
      // console.log(Math.round( 50 - ((1 - value_scale) * 50) ));
      let scale = Math.round( 50 - ((1 - value_scale) * 50) )
      scale = String(scale).length < 2 ? `0${scale}` : scale

      element.style.transform = `scale(1.0${scale})`
    })
    
    let value_background_invisible = numberHandler(-(card_section.offsetTop) + current_scroll, 0, card_section.offsetHeight / 4,)

    const card_section_scroll_bottom = getCoords(card_section).bottom

    let scroll_to_visible = card_section_scroll_bottom - document_height * 1.5

    if (scroll_to_visible < current_scroll) {
      value_background_invisible = numberHandler(-(scroll_to_visible) + current_scroll, 0, document_height * 0.5,)
      card_section.style.backgroundColor = `rgba(68, 68, 68, ${value_background_invisible})`
    } else {
      card_section.style.backgroundColor = `rgba(68, 68, 68, ${1 - value_background_invisible})`
    }
  }

  ALL_LISTENNER.push({ type_event: 'scroll', fn: scroll })
}


function supplyAndMintAnimate() {
  const block = document.querySelector('section.supply_and_mint')
  const block_height = block.offsetHeight

  const left_animate_blocks = [ block.querySelector('#text_1'), block.querySelector('#text_3'), block.querySelector('#text_5'), ]
  const right_animate_blocks = [ block.querySelector('#text_2'), block.querySelector('#text_4'), block.querySelector('#text_6'), ]

  const animate = (current_scroll) => {
    const value_opacity = numberHandler(-(block.offsetTop + block.offsetHeight / 2) + current_scroll, 0, block.offsetHeight / 2.5,)
    block.style.opacity = value_opacity

    const value_scroll = numberHandler(-(block.offsetTop - block.offsetHeight / 1.5) + current_scroll, 0, block.offsetHeight / 1.5,)

    left_animate_blocks.forEach((b, i) => b.style.transform = `translateX(-${100 * (value_scroll / (1 + i) )}%)`)
    right_animate_blocks.forEach((b, i) => b.style.transform = `translateX(${100 * (value_scroll / (1 + i) )}%)`)
  }
  ALL_LISTENNER.push({ type_event: 'scroll', fn: animate })

}


function calcRoadMap() {
  const container_width = document.querySelector('.team .container').offsetWidth
  const document_width = document.documentElement.clientWidth
  const padding = (document_width - container_width) / 2

  let block_position = 0
  let block_height = 0

  const parent_block = document.querySelector('section.roadmap')
  const roadmap_block = document.querySelector('.roadmap__wrapper')

  function calc() {
    block_height = roadmap_block.offsetWidth - document_width + padding
    parent_block.style.height = roadmap_block.offsetWidth + 'px'
    block_position = parent_block.offsetTop
  }
  calc()
  ALL_LISTENNER.push({ type_event: 'resize', fn: calc })

  ALL_LISTENNER.push({ 
    type_event: 'scroll', 
    fn: (current_scroll) => roadmap_block.style.transform = `translateX(${ block_height < Math.abs(block_position - current_scroll) ? -block_height : block_position - current_scroll}px)` 
  })
}


function teamCarouselInit() {
  const team_carousel_block = document.querySelector('.team__carousel')
  const team_carousel_item = team_carousel_block.querySelectorAll('.team__carousel__item')

  const document_width = document.documentElement.clientWidth
  const item_width = team_carousel_item[0].offsetWidth
  let x1 = 0
  let x2 = 0

  team_carousel_block.addEventListener('mousedown', (e) => {
    x1 = e.clientX
  })
  team_carousel_block.addEventListener('mouseup', (e) => {
    x2 = e.clientX
    scrollItem()
  })

  function scrollItem() {
    let left = 0
    let scrollLeft = team_carousel_block.scrollLeft
    if (x1 > x2 + item_width / 10) { // left
      left = scrollLeft + item_width
      console.log('left');
    } else if (x1 < x2 - item_width / 10) { // right
      console.log('right');
      left = scrollLeft - item_width
    }

    if (left) {
      team_carousel_block.scroll({ left , behavior: 'smooth' });

    }
  }
}


function teamCarouselPaddingInit() {
  const document_width = document.documentElement.clientWidth
  const container_block = document.querySelector('.team .container')
  const team_carousel_block = document.querySelector('.team__carousel')

  team_carousel_block.style.paddingLeft = container_block.offsetLeft / (document_width / 100) + '%'
}


function startEndBlockAnimate() {
  const block = document.querySelector('section.end')
  const block_top_position = getCoords(block).top - block.offsetHeight / 2

  new Vivus('slogan', { type: 'delayed', duration: 100, start: 'inViewport' }) 
}


function preloader() {
  const preloader_block = document.querySelector('.preloader')
  const svg_circle = preloader_block.querySelectorAll('circle')[1]
  
  const stroke_dasharray = svg_circle.clientWidth * Math.PI
  svg_circle.style.strokeDasharray = stroke_dasharray

  const start_animate = [
    document.querySelector('header'),
    document.querySelector('.main__text_up'),
    document.querySelector('.main__text_down'),
    document.querySelector('.main__monkey'),
  ]

  const status = CountUp(
    preloader_progress, // result block
    +preloader_progress.textContent.match(/\d+/)[0], // finaly value
    0, // start value
    1.5, // step value
    (current_value) => { // callback
      svg_circle.style.strokeDashoffset = stroke_dasharray - (stroke_dasharray / 100 * current_value)
    }
  );
  status.then(result => {
    if (result == 'success') {
      preloader_block.classList.remove('open')
      setTimeout(() => {
        preloader_block.style.display = 'none'
      }, 500);
      setTimeout(() => {        
        start_animate.forEach((el) => { el.classList.add('start_animate') })
      }, 0);
    } else {

    }
  })
}


window.onload = () => {
  cursor()
  openMenu()
  scrollSection()
  philosophyTextAnimate()
  cardScroll()
  supplyAndMintAnimate()
  calcRoadMap()
  headerDownAnimate()
  teamCarouselInit()
  teamCarouselPaddingInit()
  startEndBlockAnimate()
  preloader()
}


/* SCROLL POLYFILL */
function newScroll (to,id, section_selector = '.section'){
  var smoothScrollFeature = 'scrollBehavior' in document.documentElement.style;
  var articles = document.querySelectorAll(section_selector), i;
  // articles ?
  console.log(`[data-section_id="${id}"]`);
  if (to == 'elem') to = getCoords(document.querySelector(`[data-section_id="${id}"]`)).top;
  var i = parseInt(window.pageYOffset);

  if ( i != to ) {
      if (!smoothScrollFeature) {
          to = parseInt(to);
          if (i < to) {
              var int = setInterval(function() {
                  if (i > (to-20)) i += 1;
                  else if (i > (to-40)) i += 3;
                  else if (i > (to-80)) i += 8;
                  else if (i > (to-160)) i += 18;
                  else if (i > (to-200)) i += 24;
                  else if (i > (to-300)) i += 40;
                  else i += 60;
                  window.scroll(0, i);
                  if (i >= to) clearInterval(int);
              }, 15);
          }
          else {
              var int = setInterval(function() {
                  if (i < (to+20)) i -= 1;
                  else if (i < (to+40)) i -= 3;
                  else if (i < (to+80)) i -= 8;
                  else if (i < (to+160)) i -= 18;
                  else if (i < (to+200)) i -= 24;
                  else if (i < (to+300)) i -= 40;
                  else i -= 60;
                  window.scroll(0, i);
                  if (i <= to) clearInterval(int);
              }, 15);
          }
      }
      else {
          window.scroll({
              top: to,
              // left: 0,
              behavior: 'smooth'
          });
      }
  }
};


function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset,
    right: box.right + window.pageXOffset,
    bottom: box.bottom + window.pageYOffset,
    left: box.left + window.pageXOffset
  };
}

function numberHandler (num, min = 0, max = 10) {
  // console.log(num);
  if (num <= min) return 1
  if (num > min) {
    const result = +(1 - (num) / (max / 100) / 100).toFixed(3)
    return result > 0 ? result : 0
  }
}


function getFrontendDeveloperData() {
  return '🦊 FoxDD | https://t.me/fox_dd_official'
}
window.Data = { getFrontendDeveloperData }