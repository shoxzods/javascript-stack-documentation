/* 
window.getSelection() - возврашает выделенный область
window.close() – закрывает окно 
window.open("url" , "_target" , "features: css") – открывает окно бланки
window.focus() – фокусирует бразуер
scrollTo(x, y) / scrollBy(x, y): - используется для настройки scrolling
    window.scrollTo({
        behavior:"smooth",
        top:100,
        left:200
    })
  
        window.scrollBy({
        behavior:"smooth",
        top:400,
    })
print() – выводит print инструмент
getComputedStyle(element) — вычисленные стили  для элемнетов
window.atob - перкодирование простого текста на ASCII
window.btoa - перекодирование ASCII  на простого текта
window.encodeURI - заполняет пустое место query
window.encodeURIComponent - заполняет полный url
requestIdleCallback(callback) - работает когда браузер полностю освбодится от rendering
requestAnimationFrame(callback) - отлично работает для анимации вместе с экранным кадром 60fps не логает 
const x = () => {
	elem.style.color = “red”;   requestAnimationFrame( x )
}
requestAnimationFrame(x)
cancelAnimationFrame(id) - он его останавливает
let id = null;
const x = () => {
	elem.style.color = “red”;   
id = requestAnimationFrame( x );
}
id = requestAnimationFrame(x);

cancelAnimaitonFrame( id ) ;

*/