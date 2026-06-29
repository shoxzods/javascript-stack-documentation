// создание TABLE:

CREATE TABLE teachers ( 
    id SERIAL PRIMARY KEY , 
    name VARCHAR(100) , 
    age INT );


VARCHAR - тип данных для хранения строк , указывает на максиальное число символов.
INT - тип данных для хранения целых чисел.
SERIAL - ставит автоматический increment.
PRIMARY KEY - стваит униакльные номера не null.


// для просмотра существующего TABLE:

SELECT * FROM tablename;

<!-- 

    id | name | age
    ----+------+-----
    (0 rows)
 
 -->