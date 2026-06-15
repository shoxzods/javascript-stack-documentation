/*

    target – возвращает само елемент который принимался event
    bubbles – возвращает true если event имеет bubble свойство 
    shiftKey – возвращает true если event действовался при удердивании клавиатуры Shift
    type – возвращает event который был реализован
    currentTarget – показывает тот елемент на котором был принят event а не любомоу елементу это и отличается от target та
    altkey – показывает true если event работает при нажатии altKey
    cancelable – показывает true если default состояние event можно изменить к примеру если применится e.preventDefault() то данные event является cancelable.
    ctrKey – возварщает true если event происход при удерживании клавиши Ctrl
    timestamp – выводит время между загрузки страницы до заврешения событияs
    e.defaultPrevented – возврашает если применено e.preventDefault()
    e.isTrusted
*/