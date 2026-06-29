// --------------------- DROP COLUMN ----------------------------------- //

// -- 
    DROP COLUMN удаляет COLUMN из table
--//

ALTER TABLE teachers DROP COLUMN age;
<!-- ALTER TABLE  -->

SELECT * FROM teachers;
<!-- 
    id |  name   | groups | phone_number | email
    ----+---------+--------+--------------+-------
      2 | primov  |        |              |
      3 | salem   |        |              |
      1 | shoxzod |        |              |
    (3 rows)
 -->