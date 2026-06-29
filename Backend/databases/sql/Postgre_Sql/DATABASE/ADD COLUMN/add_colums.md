// ---------------------------- ADD COLUMNS -------------------------------------------------- //

<!-- 
    Также можно добавить column к существующему таблицу.
 -->

ALTER TABLE teachers ADD groups VARCHAR(50);

<!-- ALTER TABLE -->


SELECT * FROM teachers;
<!-- 
    id |  name   | age | groups
    ----+---------+-----+--------
      1 | shoxzod |  23 |
      2 | primov  |  12 |
      3 | salem   |  45 |
    (3 rows)
 -->


// А если хотим несколько то каждому надо доабвить ADD

ALTER TABLE teachers ADD phone_number VARCHAR(9) , ADD email VARCHAR( 100 );
<!-- ALTER TABLE -->

SELECT * FROM teachers;
<!-- 
    id |  name   | age | groups | phone_number | email
    ----+---------+-----+--------+--------------+-------
      1 | shoxzod |  23 |        |              |
      2 | primov  |  12 |        |              |
      3 | salem   |  45 |        |              |
    (3 rows)
 -->