/* 
    e.getModifierState(‘keyboard key’) – возвращает true если включен специальные клавиши:
    При удердивании работают данные клавиши:
    Alt , AltGraph , Control , Meta , Shift
    При нажатии на данные клавиши:
    CapsLock , NumLock , ScrollLock
    
    e.preventDefault() – отключает дефолтные евенты.
    e.stopPropogation() – уберет автоматического запуска евента родительского и соседнего элементов.
    e.stopImmidiatePropogation() – останавливает одинаковые евенты и запускает тот который имеет данную event и при этом работает только с eventListener
*/