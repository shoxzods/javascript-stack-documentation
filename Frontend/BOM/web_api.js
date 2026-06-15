// Timing:
/*
    window.setTimeout( callback , timer ) – работает  для запуска callback функции после поредленного таймера
    window.setInterval( callack , timer ) – работает каждый запуска таймера и до бескоечности 
    window.clearInterval( variable ) – останавливает setInterval
    window.clearTimeout( variable ) - останавливает setTImeout
*/

// PopUp Alert:
/* 
    window.alert(‘some text’) - показывает popup box 
    window.confirm(‘some text’) – показывает cоnfirm box
    window.propmpt(‘some text’) – показывает промтовое окно
*/

// Consoles:
/* 
    window.console.log(‘some text’) – вывоит инфо в консоль
    window.console.error(‘some text’) – выводит инфо в консоль в виде ошибки
    window.console.clear()  - очистит конслоль
    window.console.table(‘some text’) – выводит обекты в виде табилицы
    window.console.warn(‘some text’) – выводит текст в предупреждение
    window.console.time() -  используется с timeEnd который покахывает за сколько времени запускался console
    window.console.timeEnd() 
    window.console.count() – вычисляет сколько раз использовааль консоль
    window.console.assert( ) – выводит ошибку если неправильно
    window.console.group() – группирует консоли
    window.console.info() – выводит просто инфо 
    window.console.dir() – выводит инфо ввиде details
    window.console.trace() – выводит место где находится trace
*/

// Storage: ( хранит временные данные ) Browser Storage
/* 
    localStorage:  setItem( “dataName”,  “data” ) , getItem(“dataName”,  “data”) , removeItem(“dataName”,  “data”) , clear() , length , key (number) – хранит до момента пока мы сами не удалим ( 5 – 10мб )
    sessionStorage: setItem( “dataName”,  “data” ) , getItem(“dataName”,  “data”) , removeItem(“dataName”,  “data”) , clear() , length , key (number) – данные удалится после того как мы закроем вкалдку нашено браузера ( 100bytes )
*/

// Navigation: (новый подход к навигации )
/* 
	back() – обработается кнопка назад
	forward() – обработается кнопка перед
	reload() – перезагружается страница
	cangoBack – возврашает true если страница может идти назад
	cangoForward - возврашает true если страница может идти вперед
    activation -  возвращает обьект который сообщает какой навигация была применена.
	navigate( ‘ url ’ ) – можно перейти к другим страницам 
	currentEntry – возврашает текуший url 
    traverseTo( window.navigation.currentEntry.key ) – используется для перехода на страницу через его ключ
*/

// History:	
/* 
    window.history.back();
    window.history.forward();
    window.history.length - показывает число истории
    window.history.scrollRestoration - показывает auto если браузер сохраняет свое состояние скроллинга
    window.history.go(n) - отвечает за шаг переходов страницы: 0 - перезагрузка данной страницы, 1 перезод на одну страницу , переход на -1 страницу
    window.history.pushState({ page: 2 }, "", "/salem"); созлает новую страницу 
    window.history.replaceState({ page: 2 }, "", "/privet") заменяет страницк не создавая новую 
*/


// Location: ( нужен чтобы работать с url аддреса браузера )
/* 
	protocol: window.location.protocol  ( http / https ) – возвращает protocol сайта
	port: window.loaction.port ( 5500 , 3300 ) – возвращает port вебсайта
	host: window.loaction.host ( localhost:5173 ) – возвращает host вебсайта
    hostname: window.loaction.hostname (  localhost ) – возвращеь название host вебсайта.
    href: window.location.href – возвращает полный url вебсайта ( http://localhost:5173 )
    pathname: window.loaction.pathname – возврашает путь страницы для навигации ( /src/salom.html ) 
    hash: window.location.hash возвращает # ссылку который было сделано через  href
    origin: window.loaction.origin возвращает оригинальный url сайта
    reload() – window.location.reload() данный метод перезагружает страницу
    replace() – window.location.replace() заменяет текуший сайт на другую.
    search – используется для получения url параметров вебсайта используется вместе с объектом  
    ( new URLSearchParams(window.location.search) ); -> special methods
*/


// Screen: (  Нужна чтобы взять реальные данные экарна девайса а не браузера  )
/*  
    width: window.screen.width – дает размер  экрана устройств
	height: window.screen.height – дает размер  экрана устройств
    availWidth: window.screen.availWidth – дает размер предназначенное для     браузера  экрана устройств
    awailHeight: window.screen.availHeight – дает размер предназначенное для     браузера  экрана устройств
    orientation: window.screen.orientation {
	lock() – блокирует ориентации
	unlock() – разюлокирует ориентации
	type – дает тип ориентации
	angle – дает угол ориентации
}
*/



// Fullscreen: ( нужен чтобы елемент поставить в fullScreenMode )
/*
    document.fullscreenEnabled - вернет true если браузер подерживает fullScreenMOde
    document.requestFullscreen() - сделсет html елемент full screen
    document.exitFullscreen() - отключает fullScreen
    
    requirements:
    chrome / safari / opera - webkit
    edge -  ms
    firefox - moz 
*/ 


// Pointer: (Events)

/* 
	pointerdown / onpointerdown – работает когда указательмышки держит press
 	pointerup / onpointerup – работает когда указатель мышки отпускет press
    pointerenter / onpointerenter – работает когда указатель мышки заходит в область 
    pointerleave /  onpointerleave - работает когда указатель мышки выходит в область
    pointermove / onpointermove – работает когда указатель мышки ходит внутри элемента
    pointerout / onpointerout - работает когда указатель мышки выходит внутри элемента
    pointerrawupdate / onpointerrowupdate – работает как pointermove но он дает точно значение координаты мышки в олчия от pointemove который ради производительности может обрезать координаты
    gotpointercapture / ongotpointercapture – работает когда pointer event соверщается и работает даже если pointer вышел из предела
    lostpointercapture / onlostpointercapture - работает когда pointer event соверщается и работает даже если pointer вышел из предела и пользователь завершил данный event.

    Pointer Events properties:
	e.pointerId – дает id pointer event
	e.pointerType – дает тип pointer
 	e.isPrimary – выдает true если было использовано первый палец
	pressure – дает шкалу силы нажатия который мы нажимали 

    Pointer Events Methods:
    Element.setPointerCapture(e.pointerId) – дает возможность работы event даже если  pointer покинул поле event та.
    Element.hasPointerCapture(e.pointerId) – возврашает true если есть capture.
    Element.releasePointerCapture(e.pointerId) – отпускает capture.
*/


// Validation:
/* 
document.checkValidity() - выводит true если елемент пройдет валидацию
document.validationMessage - выводит название ошибки 
document.setCustomValidity("some text") - можно поставить свою кастомную ошибку
documetn.villValidate - выводит true что елемент будещ может иммет валидацию , false при disabled / readon;y

validity - properties:
    rangeOverflow - работает true когда номера больше чем max
    rangeUnderflow - работает true когда номера меньше чем min
    tooLong - работает true когда не подходит в дипазон minlength
    tooShort - работает true когда превочходит maxlenthg
    valid - работает true когда все тербования выполняется
    badInput - покажет true если type не соответсвует к input
    valueMissing - показывает true если поле пустое
    stepMismatch - покажет true если step от номеров не соответсвует
    typeMismatch - показывает true если тип не был введен кооректно
    customError - покажет true если настроено кастомная валидация
*/


// Web Worker: ( нужна чтобы запустить тяжелые вычисления вне браузера чтобы не мешать работе браузера )
/* 
new Worker("js");
    methods:
        terminate(); - для остановки web worker / new Worker(“worker.js”).terminate()
       postMessage(); - для отправки message / 
       new Worker(“worker.js”).postMessage(“smth”)
    events:
       message / onmessage - event для взятия ланных / 
new Worker(‘worker.js’).onmessage    
        event properties:   e.data - дата которых можно взять черех onmessage  
*/


//  Fetch: ( нужен чтобы подключить данные из сервера )
/* 
   window.fetch('http / https запрос' , {
    method:"POST", // "DELETE" , "PUT" , "PATCH"
   // Body 
   headers: {
        "Content-Type":"application/json",
         Authorization:"Bearer accessToken"
    },
   // Response Body
    body:JSON.stringify({
        name:"Shoxa",
        password:"Salom"
    })
})
// Method GET,
window.fetch(“http / https”);
*/

// MediaQueryList: ( нужна чтобы проверить подходит ли экран к данному медиа листу ):
/*
    matchMedia("(@mediaquery)").matches – возврашает true если данная медия совпадает с текущим размером девайса
*/

// Cookies:
/*
    document.cookie:  
    create: window.document.cookie = “name=shoxzod; path=/”
    delete: window.document.cookie = "name=shoxzod; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;”
    rename: window.document.cookie = “name=prompt;  path=/;” 
*/ 



// Navigator: