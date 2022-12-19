function cursor() {
  document.querySelector('body').classList.add('noCursor')

  let maxHeight = document.documentElement.offsetHeight

  addListener({ type_event: 'resize', fn: () => maxHeight = document.documentElement.offsetHeight })

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


function scrollSection(e) {
  addListener({ type_event: 'click', fn: (e) => {
    e.preventDefault()
    const el = e.target.closest('.menu__navigations__nav a')
    if (!el) return

    const section_id = el.href.match(/(?:#)(\w+)$/)?.[1]

    const menu_block = document.querySelector('.menu_wrapper')
    if (menu_block) {
      menu_block.classList.remove('open')
      setTimeout(() => { menu_block.style.display = 'none' }, 300);
    }
    
    newScroll('elem', section_id)
  }})
}


async function editTheme({ coff1 = 0, coff2 = 0.6 } = {}) {
  const document_block = document.documentElement
  const favicon_block = document.querySelector('link[rel="shortcut icon"]')

  const first_green_block = document.querySelector('.mutation')
  const first_green_block_top = getCoords(first_green_block).top - document_block.clientHeight * coff1
  
  const last_green_block = document.querySelector('.roadmap')
  const last_green_block_top = getCoords(last_green_block).bottom - document_block.clientHeight * coff2

  const red_favicon_base64 = await getLogoBase64('red')
  const green_favicon_base64 = await getLogoBase64('green')

  addListener({
    type_event: 'scroll',
    fn: (current_scroll) => {
      if (current_scroll > first_green_block_top && last_green_block_top > current_scroll) {
        document_block.classList.add('green')
        favicon_block.href = green_favicon_base64
      } else {
        document_block.classList.remove('green')
        favicon_block.href = red_favicon_base64
      }
    }
  }) 
}


function headerDownAnimate() {
  const document_height = document.documentElement.clientHeight
  const full_document_height = document.documentElement.offsetHeight

  const header_down_block = document.querySelector('.header__down')
  header_down_block.classList.add('up_page')

  addListener({ 
    type_event: 'scroll', 
    fn: (current_scroll) => {
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


function infoStickyHeightCalc() {
  const start_block = document.querySelector('.main__markup_block_up')
  const start_block_top = getCoords(start_block).top

  const end_block = document.querySelector('.info')
  const end_block_bottom = getCoords(end_block).bottom

  const sticky_wrapper_block = document.querySelector('.main__sticky_wrapper')
  const sticky_block = document.querySelector('.main__sticky')

  const height = end_block_bottom - start_block_top
  sticky_wrapper_block.style.height = height + 'px'

  const translateY = getCoords(sticky_block).top - start_block_top
  sticky_block.style.transform = `translateY(-${translateY}px)`

  const down_text = document.querySelector('.main__text_down')
  const down_text_span = down_text.querySelector('span')

  addListener({
    type_event: 'scroll',
    fn: (current_scroll) => {
      if (current_scroll > translateY / 2) {
        down_text.classList.remove('start_animate')
        sticky_block.classList.add('arrow_visible')
      } else {
        down_text.classList.add('start_animate')
        sticky_block.classList.remove('arrow_visible')
      }

      const value_translate = numberHandler(-start_block_top + current_scroll, 0, height * 0.5)
      sticky_block.style.transform = `translateY(-${translateY * value_translate}px)`
    }
  }) 

}


function infoItemHighlight() {
  const sticky_block = document.querySelector('.main__sticky')

  const items_array = Array
    .from(document.querySelectorAll('.info__item'))
    .map(item => {
      const upper_bound = getCoords(item).top
      const lower_bound = getCoords(item).bottom
      return { upper_bound, lower_bound, item }
    })

    addListener({
    type_event: 'scroll',
    fn: (current_scroll) => {
      const sticky_block_middle = getCoords(sticky_block).top + sticky_block.offsetHeight / 2

      items_array.forEach(obj => {
        const { upper_bound, lower_bound, item } = obj
        if (upper_bound < sticky_block_middle && sticky_block_middle < lower_bound) {
          item.classList.add('active')
        } else {
          item.classList.remove('active')
        }
      })
    }
  }) 
}


function philosophyTextAnimate() {
  const document_height = document.documentElement.clientHeight

  const philosophy_title_block = document.querySelector('.lore__title')

  addListener({
    type_event: 'scroll',
    fn: (current_scroll) => {
      const philosophy_title_block_top = getCoords(philosophy_title_block).top
      if (philosophy_title_block_top - document_height / 1.5 < current_scroll) {
        philosophy_title_block.classList.add('visible')
      } else if (philosophy_title_block_top + document_height / 1.5 > current_scroll) {
        philosophy_title_block.classList.remove('visible')
      }
    }
  })
}


function mutationRotate() {
  const document_height = document.documentElement.clientHeight

  const mutation_block = document.querySelector('.mutation')
  const mutation_block_top = getCoords(mutation_block).top

  addListener({
    type_event: 'scroll',
    fn: (current_scroll) => {
      const value_rotate = numberHandler(-(mutation_block_top - document_height * 0.8) + current_scroll, 0, document_height * 0.8)

      mutation_block.style.transform = `rotate(-${50 * value_rotate}deg)`
    }
  })
}


function bubbleRender({ bubbles = [] }) {
  const mutation_block = document.querySelector('.mutation')

  const template = ({ size, text }) => {
    return `<button class="gradient_border bubble mutation_bubble" data-size="${size}">
      <i class="b-16 b-12_mobile color_green_gradient bubble_name">CLICK ME</i>
      <i class="b-14 b-12_mobile color_dark bubble_description"><p>${text}</p></i>
      <div class="bubble_liquid">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" width="693" height="220" xml:space="preserve"> <pattern id="water" width=".25" height="1.1" patternContentUnits="objectBoundingBox"> <path fill="url(#gradient)" d="M0.25,1H0c0,0,0-0.659,0-0.916c0.083-0.303,0.158,0.334,0.25,0C0.25,0.327,0.25,1,0.25,1z" /> </pattern> <g id="eff"> <rect class="water-fill" fill="url(#water)" x="-300" y="5" width="1200" height="120" opacity="0.7"> <animate attributeType="xml" attributeName="x" from="-300" to="0" repeatCount="indefinite" dur="3s" /> </rect> <rect class="water-fill" fill="url(#water)" y="10" width="1600" height="120" opacity="0.3"> <animate attributeType="xml" attributeName="x" from="-400" to="0" repeatCount="indefinite" dur="4s" /> </rect> <rect class="water-fill" fill="url(#water)" y="0" width="800" height="120" opacity="0.3"> <animate attributeType="xml" attributeName="x" from="-200" to="0" repeatCount="indefinite" dur="2.4s" /> </rect> <rect class="water-fill" fill="url(#water)" y="0" width="2000" height="120" opacity="0.3"> <animate attributeType="xml" attributeName="x" from="-500" to="0" repeatCount="indefinite" dur="3.8s" /> </rect> </g> <defs> <linearGradient id="gradient" x1="-36.0259" y1="-64.2029" x2="141.73" y2="416.197" gradientUnits="userSpaceOnUse"> <stop offset="0.153796" stop-color="#B4D109"/> <stop offset="0.684991" stop-color="#87CC00"/> </linearGradient> </defs> </svg>
      </div>
    </button>`
  }

  const bubbles_html = bubbles.map(bubble_config => template(bubble_config))
  mutation_block.insertAdjacentHTML("afterbegin", bubbles_html.join('\n'))


  const bubles_blocks = document.querySelectorAll('.bubble')
  bubles_blocks.forEach(buble => {
    let size = +buble.dataset.size


    const base_width = 1500
    const document_width = document.documentElement.clientWidth
    if (document_width > 600) {
      size = Math.round(document_width / base_width * size)
    }

    buble.style.setProperty('--size', size + 'px')

    const rects = buble.querySelectorAll('rect')
    rects.forEach(rect => {
      const width = rect.getAttribute('width')
      const height = rect.getAttribute('height')
      const new_width = width / (height / size)
      rect.setAttribute('width', new_width)

      const animate = rect.querySelector('animate')
      const from = animate.getAttribute('from')
      animate.setAttribute('from', from / (height / size))

      const dur = animate.getAttribute('dur')
      animate.setAttribute('dur', new_width / (width / parseFloat(dur)))
    })
  })

  addListener({ type_event: 'click', fn: (e) => {
    const el = e.target.closest('.bubble')
    if (!el) return
    bubles_blocks.forEach(b => b.classList.remove('active'))
    el.classList.add('active')
  }})
}


function bubbleAnimate() {
  const bubles_blocks = document.querySelectorAll('.bubble')
  
}


function ecosystemTextAnimate() {
  const document_height = document.documentElement.clientHeight

  const ecosystem_title_block = document.querySelector('.card__title')

  addListener({
    type_event: 'scroll',
    fn: (current_scroll) => {
      const ecosystem_title_block_top = getCoords(ecosystem_title_block).top
      if (ecosystem_title_block_top - document_height / 1.5 < current_scroll) {
        ecosystem_title_block.classList.add('visible')
      } else if (ecosystem_title_block_top + document_height / 1.5 > current_scroll) {
        ecosystem_title_block.classList.remove('visible')
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

  const scroll = (current_scroll) => {
    card_array.forEach(obj => {
      const { index, scroll_top, element } = obj

      const value_opacity = numberHandler(-(scroll_top + element.offsetHeight / 2) + current_scroll, 0, element.offsetHeight,)
      element.style.opacity = value_opacity

      const value_scale = numberHandler(-(scroll_top + element.offsetHeight / 3) + current_scroll, 0, element.offsetHeight,)
      // console.log(Math.round( 50 - ((1 - value_scale) * 50) ));
      let scale = Math.round( 50 - ((1 - value_scale) * 50) )
      scale = String(scale).length < 2 ? `0${scale}` : scale

      element.style.transform = `scale(1.0${scale})`
    })
    
    let value_background_invisible = numberHandler(-(card_section.offsetTop) + current_scroll, 0, card_section.offsetHeight / 4,)
    // console.log('value_background_invisible: ', value_background_invisible);

    const card_section_scroll_bottom = getCoords(card_section).bottom

    let scroll_to_visible = card_section_scroll_bottom - document_height * 1.5

    if (scroll_to_visible < current_scroll) {
      value_background_invisible = numberHandler(-(scroll_to_visible) + current_scroll, 0, document_height * 0.5,)
      card_section.style.backgroundColor = `rgba(0, 0, 0, ${value_background_invisible})`
    } else {
      card_section.style.backgroundColor = `rgba(0, 0, 0, ${1 - value_background_invisible})`
    }
  }

  addListener({ type_event: 'scroll', fn: scroll })
}


function cardScrollHorizontal() {
  const document_width = document.documentElement.clientWidth

  const cards_block = document.querySelector('.cards')
  cards_block.scrollLeft = document_width / 2
}


function mintAnimate() {
  const document_height = document.documentElement.clientHeight
  const mint_block = document.querySelector('.mint')
  const mint_block_top = getCoords(mint_block).top - document_height * 0.2
  const mint_block_bottom = getCoords(mint_block).bottom
  const mint_liquid = mint_block.querySelector('.mint__liquid')

  addListener({
    type_event: 'scroll',
    fn: (current_scroll) => {
      if (mint_block_top < current_scroll && current_scroll < mint_block_bottom) {
        mint_liquid.classList.add('animate')
      } else {
        mint_liquid.classList.remove('animate')
      }
    }
  })
}


function calcRoadMap() {
  const container_width = document.querySelector('.lore .container').offsetWidth // Random block comtainer
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

  addListener({ 
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


function startEndBlockAnimate({ block_id = 'slogan_desctop' }) {
  new Vivus(block_id, { type: 'delayed', duration: 100, start: 'inViewport' }) 
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