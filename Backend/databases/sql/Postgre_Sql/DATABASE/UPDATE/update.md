// --------------------------------------- UPDATE --------------------------------------------------------- //

// -- 
    UPDATE используется если надо изменить существующее данные из таблицы
-- //

UPDATE teachers SET name = 12 WHERE id = 1;
<!-- UPDATE 1  -->

SELECT * FROM teachers;
<!-- 
     id |  name  | groups | phone_number | email
    ----+--------+--------+--------------+-------
      2 | primov |        |              |
      3 | salem  |        |              |
      1 | 12     |        |              |
    (3 rows)
-->

// --
    Если не укзать WHERE он автоматически изменить все данные из table.
-- //

UPDATE teachers SET name = 'shoxzod';
<!-- UPDATE 3 -->

SELECT * FROM teachers;
<!-- 
     id |  name   | groups | phone_number | email
    ----+---------+--------+--------------+-------
      2 | shoxzod |        |              |
      3 | shoxzod |        |              |
      1 | shoxzod |        |              |
    (3 rows)
 -->

 