// Events for Printers:
/*
    afterprint / onafterprint – работает после отключения printer браузера. 
    beforeprint / onbeforeprint  - работает до включения Printer браузера.
*/ 

// Events for Forms:
/* 
    submit – работает когда нажимается form submit / onsubmit 
    change – работает когда изменяется value в input / onchange
    input / oninput – работает когда что то вводится в input
    select / onselect – работает когда выделяется текст 
    reset / onreset – очишает value из всех input – овcopy / oncopy – работает при копирлвании елемента через Ctr + C , при надатии на копировании
    invalid / oninvalid – работает когда input не пройдет валидацию
*/

// ClipBoard Events
/* 
    cut / oncut – работает только при удалении елемента через нажатие на cut
    paste / onpaste – работает когда что то ставим через Paste ( Ctrl + V )
    copy / oncopy – работает при копирлвании елемента через Ctr + C , при надатии на копировании
*/

// Events for focus:
/* 
    focus / onfocus – работает когда демент фокуисруется
    focusin / none  - работает когда focus включается
    focusout  / none - работает когда focus отключается
    blur / onblur – работает когда теряется focus в отличие от focusout у него нет event bubblig
*/

// Events for animations:
/* 
    animationend / onanimationend  – работает когда закончится css анимация
    animationiteration / onanimationiteration – работает когда css анимация безконечная 
    animationstart / onanimationstart – работает когда css анимация начнется 
    transitionend / ontransitionend – работает когда заканчивается время css transition
    transitionstart / ontransitionstart - работает когда начинается время css transition
*/

// Events for Keyboards:
/* 
    keydown / onkeydown – работает при нажатии на клавишу только если не отпустим работает при фокусе.
    keyup / onkeyup – работает после отпускания клавиши но при этом работает когда есть фокус.
*/

// Browser Loading Events:
/* 
    load / onload – работает если вся ресурс загружена ( img , script files , css files ,   )
    beforeunload / onbeforeunload – работает когда сайт перезагружается / закрывается / или переходит на другую страницу выведет опросноик confirm box
    DomContentLoaded / none – работает когда страница загрузит html элементов не включая внешние ресурсы и после грузится внешние ресурсы.
    pageshow / onpageshow – работает когда страница один раз перезагружается и когда страница отображатеся 
    pagehide / onpagehide – работает когда пользовтель ушел от страницы лучше использовать с localstorage.
*/

// Mouse Events:
/* 
click / onclick – работает при нажатии на елемент
oncontextmenu / contextmenu – рабоает при нажатии на елемент с правой мышкой
ondbclick / dbclick – работает при двойной кликании на мышку
onmousedown  / mousedown – работает при удердивании кнопки мышы
onmouseup / mouseup -  раragботает при отпускании кнопки мыши
onmouseenter / mouseenter –  работает при наведении курсора на елемент но у него нет bubbling нет e.propogation 
onmouseleave / mouseleave - работает после наведении курсора на елемент но у него нет bubbling нет e.propogation
onmouseover / mouseover –  работает при наведении курсора на елемент
у него происходит event bubbling 
onmouseout / mouseout - работает после наведении курсора на елемент у него происходит event bubbling
onmousemove / mouseover – работает когда мышка наводится ходит на границе елемента
*/

// Touch Events: ( работает только на touch screen: телефоны и планшетах  )
/* 
    touchstart / ontouchstart– работает при нажатии на экран
    touchmove / ontouchmove – работает когда  двинем палец нажимая на кнопку
    touchend  / ontouchend- работает когда мы отпускаем палец от экрана
    touchcancel / ontouchcancel – работает когда другой event мешает к завершению других евентов.
*/

// Scroll Events:
/* 
    scroll / onscroll – она работает если есть scrolling wheel
    wheel  / onwheel – она работает только при scrolling мышки ( touchpad )
*/

// other events:
/* 
    resize / onresize – работает при изменении размера браузера
    toggle / ontoggle – работает когда диалоговое окно открывается и закрывается
    hashchange / onhashchange – работает когда изменияеь hashname // href name
    fullscreenchange / none – работает когда изменяется состояние fullscreen / для разных браузеров есть свле event
    chrome , Safari  Opera  – webkit
    edge – ms
    FireFox – moz
*/

// Drag & Drop:
/* 
drag / ondrag – работает когда drag срабатвывает 
dragstart / ondragstart – работает когда когда drag event начинается e.dataTransfer.setData(“dataname” , data );
dragend / ondragend – работает когда drag event завершится
dragenter / ondragenter – работает когда drag елемент переходит в drop зону
dragleave / ondragleave - работает когда drag елемент покидает drop зону
dragover / ondragover – дает возможность положить drag елемент в drop 
чтобы сделать так надо отключить default event
drop / ondrop  - помогает отображать drag елемент в drop зоне после заверщения drag чтобы реализовать надо использовать: e.dataTransfer.getData( ‘dataname’ , data );

** Drag & Drop properties and methods
dataTransfer.getData() – работает вместе с drag / drop
dataTransfer.setData() – работает вместе с drag / drop
dataTransfer.clearData() - работает вместе с drag / drop
Работает для клавиатруы:
key – возврашает ключи от keyboard при нажатии на клавиши
location – возвращает номера которые были нажаты на клавиши:
0 – [ keys from [ a - z ]  , CapsLock , Tab , правые номера  , space , Enter , Backspace , лквый Shift , Esc]
2 – правый Ctrl , Alt , Shift ,
1 – левый Ctrl , Alt , Shift
3 -  правильная стороона номеров , Enter , NumLock
Работает только для input:
inputType – она работает если event ялвялется ( input / oninput ) она возвращает insertText если что то водим в поле , deleteContentBackward если удаляем контент.
*/

// Audio and Video Events: