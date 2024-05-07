function declaration() {
  let expression = function () {
    let arrowExpression = () => {
      (function () {
        let forCallback = (first, callback) => {
          console.log(first + callback())
        }
        forCallback('это', function () {
          return ' анонимная функция'
        })
        console.log('инициативная функция')
      })()
      console.log('функцтя переводящая стрелки')
    }
    return arrowExpression()
  }
  return expression()
}
declaration()