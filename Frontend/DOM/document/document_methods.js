// DOM NAVIGATION:

/* 
Element Node:  
attribute Node
Text Node
*/

// docuemnt Selection methods
/*
    docuemnt.getElementById("idname");
    docuemtn.querySelector("all selectors") // #id , .className , tagName , attibutesName 
*/

/*
HTMLCollection: is Not Array it is a native code
    document.getElementByClassName("className")
    docuemnt.getElementbyTagName("tagname") // taganme
    document.getElementbyName("name - аттрибт ") // атрибут name
NodeList:
    document.querySelectorAll("selectors") // #id , .className , tagName , attibutesName 
*/

// methods
/*
document.createElement("Node Element")
document.createComment("...some comments")
document.createAttribute("Attribute Node")
document.createTextNode("Text Node")
document.createFragment();  <></>
document.createRange(); работает с selection
document.hasStorageAccess() - вернет true если документ имеет доступ к локалной памяти
document.elementsFromPoint( x , y ) - возвращает елемент который расположен на данном координате 
document.elementFromPoint( x , y ) - возвращает елемент который расположен на данном координате
document.startViewTransition(callback) - браузер сам анимирует style 
*/