// ------------------ DELETE ----------------------------------------------- //

// -- 
    DELETE используется для удаления row в table;
-- //

DELETE FROM teachers WHERE id = 4;
<!-- DELETE 1 -->

SELECT * FROM teachers;
<!-- 
      id |  name  | groups | phone_number | email
    ----+--------+--------+--------------+-------
      5 | primov | 309043 |              |
    (1 row)
-->


// --
    DELETE FROM table_name - если пропустить WHERE то он удали весть дату из table.
    TRUNCATE TABLE - альтернатива на DELETE TABLE
-- //

DELETE FROM teachers;
<!-- DELETE 1 -->

SELECT * FROM teachers;
<!-- 
    id | name | groups | phone_number | email
    ----+------+--------+--------------+-------
    (0 rows)
-->