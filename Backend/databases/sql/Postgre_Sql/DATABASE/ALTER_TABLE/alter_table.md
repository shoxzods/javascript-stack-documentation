// ------------------------------- ALTER TABLE -------------------------------------- //

// ALTER TABLE - используется чтобы добавлять , удалять , изменить названия columns.


ALTER TABLE teachers ALTER COLUMN age TYPE VARCHAR(100);
<!-- ALTER TABLE -->

UPDATE teachers SET age = 'opeorpeor' WHERE id = 1;
<!-- UPDATE 1  -->

SELECT * FROM teachers;
<!-- 
     id |  name   |    age    | groups | phone_number | email
    ----+---------+-----------+--------+--------------+-------
      2 | primov  | 12        |        |              |
      3 | salem   | 45        |        |              |
      1 | shoxzod | opeorpeor |        |              |
    (3 rows)
 -->

// -- 
    изменить number к string можно
    но изменить string к number нельзя.
-- //