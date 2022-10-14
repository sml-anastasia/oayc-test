function CountUp(el, value, startValue = 0, step = 1, callback) {
  return new Promise((resolve, reject) => {
    try {
      let intervalId
      let i = +startValue
    
      intervalId = setInterval(() => {
        i += step
        el.textContent = currencyFormat(i) + ' %'

        if (callback) {
          callback(i)
        }
        
        if (i >= value) {
          el.textContent = currencyFormat(value) + ' %'
          clearInterval(intervalId)
          return resolve('success')
        }
      }, parseInt(3000 / +value));
    } catch (e) {
      console.log(e);
      return reject('failed')
    }
  })
}

function currencyFormat(value) {
  var n,x, re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
  return value.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$& ');
}