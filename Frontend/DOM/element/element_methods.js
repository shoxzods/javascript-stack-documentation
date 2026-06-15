// document.element: (methods)
/* 
element.addEventListener("events" , callback) - нужна чтобы добавить event в определенный елемент
element.removeEventListener("events" , callback) - нужна чтобы удалить event

element.after( string | Node Element) - перемешает елемент после себя
element.before( string | Node Element ) - перемешает елемент до себя

element.append( string | Node Element ) - добавляет елмент или string после после последнего child 
element.remove() - удаляет само елемент Node

element.appendChild(Element Node) - добавляет Node Element в конце лемента
element.removeChild(Element Node) - удаляет Node Element

element.replaceChildren('some text' | Node Element) - заменяет все childNodes к другому тексту
elemetn.repalceChild( Node Eleemnt , child Node ) - заменяет child node на другое node Element

element.cloneNode( true || false ) - возвращает копию node елемнет с childNode если ture а если false то  пустой Node Element


element.setAttribute("attributeName",string) - создает аттрибут внутри елемента 
element.getAttribute("attributeName") - возврашает textContent атрибута
element.removeAttribute("attributeName") - удаляет заданный атрибут

element.setAttributeNode(attributeNode) - добавляет аттрибут Node
element.getAttributeNode("attributName") - возврашает attributeNode елемента 
element.removeAttributeNode(attributeNode) - удаляет аттрибут Node

element.hasAttribute("attributeName") - возврашает true еслм данная аттрибут сушествует 
element.hasAttributes() - возвращает true если есть хотябы один аттрибут
element.getAttributeNames() - возврашает массив атрибутов елемента
element.hasChildNodes() - возврашает true если внутри елемента находится хотябы один Node

element.focus() - включает focus елемента
element.blur() - выключает focus елемента
element.click() - включает click event у елемента


element.scrollTo( x , y ):
    element.scrollTo({
        top: number,
        left:number,
        behavior: "instant" | "smooth"
    }) - нужна чтобы управлять со скролом
element.scrollBy( x , y ) - нужна чтобы управлять со скролом
element.scroll( x,  y) - нужна чтобы управлять со скролом



    
    element.showPopover() - открывает модальное окно ( работает у елеимента если включен фтрибут popover )
    element.hidePopover() - закрывает модальное окно ( работает у елеимента если включен фтрибут popover )
    element.togglePopover() - открывает и закрывает модальное окно ( работает у елеимента если включен фтрибут popover )
    element.toggleAttribute() - удаляет если есть аттрибут добавляет если нету.

    element.replaceWidth(string | NodeElement)
    element.cloneNode(booelan) - true:копирует елемент c childElement | false: копирует только сам елемент. 
    element.checkVisibility() - возрвшает true если еоемент виден если нет false
    element.contains(Node) - возваршает true если елемеет имеет данный Node Element
    element.getHTML() - возврашает html как string
    element.prepentd( Node | string ) - добавляет елемент перед первым child елементом.
    element.getRootNode() - возврашает Обьект document.
    element.getAnimations() - возврашает лист анимации принятый для елемента.
    element.matches(Css Selector) - возврашает true если селектор соответсвует к данному елементу. 
    element.normalize() - обединит тексты если онисозданы через createTextNode() по отдельности 
    element.scrollIntoView(boolean | { behavior , block , inline })
    element.requestPointerLock() - исчезает курсор мышы работает только для click елментов.
        
    element.animate(keyframes , options):
            element.animate(
                [
                    {background: "red"},
                    {background:"green"}
                ] , 
                {
                    duration:2000,
                    easing:"ease-in",
                    iterations:Infinity,
                })

        
    element.insertAdjacentText(position , 'text'); - добавляет текст к елементу
    element.insertAdjacentHTML(position , "html element in text") - добавляет елемент к елементу
    element.insertAdjacentElement( position , Node Element )
    
    element.getClientRects() - возврашает размеры квалрата (box model)
    element.getBoundingClientRect() - возврашает размеры квалрата (box model)
            
    element.isEqualNode(Node Element) - возврашает true если елемент совпадает с оригинальным елементом.

    element.text.attachShadow() - создает shadow dom это полезно когда мы не хотим чтобы стили конфликтовали 
            между собой. Мы созхдаем свой уникальный html елемент со своим изолированнм стилем:
                    
                    class MyModal extends HTMLElement {
                            constructor () {
                                super();

                                const shadow = this.attachShadow({mode:"open"});

                                shadow.innerHTML = 
                                `
                                    <style>
                                        p {
                                            color:green;
                                            padding:10px;
                                            border:1px solid red;
                                        }

                                        p:hover {
                                            background:red;
                                        }
                                    </style>

                                        <p>
                                            lorem
                                        </p>
                                `; }}
                    customElements.define("my-modal" , MyModal);

    element.closest("CSS Selector") - возврашает самый близкий родительский елемент

*/

