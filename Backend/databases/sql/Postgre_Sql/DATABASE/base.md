<!-- Simple Commmands for SQL -->


\! cls - для очистки консоли.

<!-- DATABASE COMMANDS: -->
\ l - показывает список всех базы данных.
SELECT current_database(); - показывает на какой датабазе мы находимся
CREATE DATABASE database_name - создает датабазу
DROP DATABASE database_name - удаляет датабазу

<!-- TABLE COMMANDS -->
\ dt - показывает все созданные табдицы базы данных.
CREATE TABLE tablename ( id SERIAL PRIMARY KEY , age INT , ful_name VARCHAR(100) ); - создает новую таблицу , SERIAL - autoincrement , PRIMARY KEY - unique number , INT 
- целое число , VARCHAR() - строка с определнным длиной.

SELECT * FROM tablename - чтобы увидеть таблиу.
SELECT name FROM tablename - чтобы бать таблицу с определенными параметрами.


ALTER TABLE tablename ADD phone INT -  тчобы добавить новый column;
ALTER TABLE tablename DROP COLUMN full_name - чтобы удалиьт специальный колумн; если надо удалить несколько значений то тогда надо каждый раз писать DROP TABLE к каждоиу елементу.
ALTER TABLE newtable ALTER COLUMN age TYPE VARCHAR(100); - изменяет тип данный в колумне.


<!-- TABLE DATA COMMANDS: -->
INSERT INTO tablename ( emial , age ) VALUES( 'some text' , 23 ); - нужна чтобы добавть новую дату.
UPDATE tablename SET age = 12 WHERE id = 1; - чтобы изменить данные , есди не указать WHERE то он будет изменять данные везде.
DELETE FROM tablename WHERE id = 1 - удаляет таблицу по заданным параметрам , если не указать WHERE то он удалит все данные из table.