// Добавить анимацию для элемента: Напишите функцию, которая добавляет анимацию для элемента на веб-странице, 
// например, плавное изменение его положения или размера.


// Функция animate имеет три аргумента, которые описывают анимацию:
// duration - продолжительность анимации, 
// timing(timeFraction) - функция расчёта времени, 
// которая будет вычислять прогресс анимации в зависимости от прошедшего времени (0 в начале, 1 в конце),
// draw(progress) - функция отрисовки, которая получает аргументом значение прогресса анимации и отрисовывает его. 
// Значение progress=0 означает, что анимация находится в начале, и значение progress=1 – в конце.
function animate({timing, draw, duration}) {

    // метод возвращает время. Он возвращает метку времени с точностью до микросекунды.
    let start = performance.now();
  
    requestAnimationFrame(function animate(time) {
      // timeFraction изменяется от 0 до 1
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
  
      // вычисление текущего состояния анимации
      let progress = timing(timeFraction);
  
      draw(progress); // отрисовать анимацию
  
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
  
    });
}

animate({
    duration: 1000, // продолжительность анимации
    timing(timeFraction) { // функция расчёта времени по параболе
        return Math.pow(timeFraction, 2);
    },
    draw(progress) { // функция отрисовки для заголовка h1
      const elem = document.querySelector('h1');
      elem.style.width = progress * 100 + '%';
    }
});