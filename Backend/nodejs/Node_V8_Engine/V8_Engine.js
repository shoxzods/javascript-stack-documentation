// ------------------------------------ V8 Engine -------------------------------------- //

/*
    V8 Engine google open-source engine который используется с Node js и Chrome.
*/

/*
   Origin: был разработан в 2008.
   Integration: Node js использует V8 для работы с серверной части.
   Features: Just-In-Time compilation, efficient garbage collection, ES6+ support
*/

// Почему V8 делает Nodejs быстрым ?
/*
    Just-in-Time( Compilation ) - конвертирует js в оптимищированный машинный код вместо интерпретации.
    Hidden Classes - оптимизирует доступ к proprty обьектов
    Efficient Garbage Collection - контролирует память чтобы он не имел memory leaks и оптимизирует prefomance.
    Inline Caching - ускоряет доступ к property зная где находить обьекты.
*/

// Основной роль V8 в NodeJS:
/*
    Используе javaScript вне браузера
    имет доступ к оперцаионным системный функционалам ( file , OS , networkin )
    использует одинаковый javascript engine как и chrome который подерживает для стибильности.
*/

