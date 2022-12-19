window.onload = () => {
  function desctopMethods() {
    cursor()
    openMenu()
    scrollSection()
    infoStickyHeightCalc()
    infoItemHighlight()
    philosophyTextAnimate()
    mutationRotate()
    bubbleRender({
      bubbles: [
        { size: 260 , text: 'Mutants receive 50% of OAYC utilities (50% voting power, 50% community assets share, etc)'},
        { size: 190 , text: '250 unique traits based on original OAYC traits'},
        { size: 190 , text: 'Total supply: 3 000 public sale + up to 10 000 created with OAYC + mutagen'},
        { size: 260 , text: '“How to get MOAYC?” Use your OAYC and any Mutagen to get MOAYC for free or Mint your MOAYC on the public sale'},
      ]
    })
    ecosystemTextAnimate()
    cardScroll()
    mintAnimate()
    calcRoadMap()
    headerDownAnimate()
    teamCarouselInit()
    teamCarouselPaddingInit()
    startEndBlockAnimate({ block_id: 'slogan_desctop' })

    editTheme()
  }

  function mobileMethods() {
    openMenu()
    scrollSection()
    philosophyTextAnimate()
    bubbleRender({
      bubbles: [
        { size: 157 , text: 'Mutants receive 50% of OAYC utilities (50% voting power, 50% community assets share, etc)'},
        { size: 118 , text: '250 unique traits based on original OAYC traits'},
        { size: 157 , text: 'Total supply: 3 000 public sale + up to 10 000 created with OAYC + mutagen'},
        { size: 198 , text: '“How to get MOAYC?” Use your OAYC and any Mutagen to get MOAYC for free or Mint your MOAYC on the public sale'},
      ]
    })
    cardScrollHorizontal()
    calcRoadMap()
    headerDownAnimate()
    startEndBlockAnimate({ block_id: 'slogan_mobile' })
    editTheme({ coff1: 0.8 })
  }

  const document_width = document.documentElement.clientWidth
  /* Desctop methods */
  if (document_width > 600) { desctopMethods() }
  /* Mobile methods */
  if (document_width <= 600) { mobileMethods() }

  addListener({ type_event: 'resize', fn: () => {
    const new_width = document.documentElement.clientWidth
    if (Math.abs(new_width - document_width) >= 50) {
      window.location.reload()
    }
  }})
  
  preloader()
}



/* SCROLL POLYFILL */
function newScroll (to,id, section_selector = '.section'){
  var smoothScrollFeature = 'scrollBehavior' in document.documentElement.style;
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

/**
* @param {num} Текущее число из диапазона
* @param {min} Минимум диапазона
* @param {max} Максимум диапазона
*
* @return Коэфицент прохождения числа по диапазону
* @customfunction
**/
function numberHandler (num, min = 0, max = 10) {
  // console.log(num);
  if (num <= min) return 1
  if (num > min) {
    const result = +(1 - (num) / (max / 100) / 100).toFixed(3)
    return result > 0 ? result : 0
  }
}


function getFrontendDeveloperData() {
  console.log('🦊 FoxDD | https://t.me/fox_dd_official');
  return '🦊 FoxDD | https://t.me/fox_dd_official'
}
window.Data = { getFrontendDeveloperData }