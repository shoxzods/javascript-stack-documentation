// ------------------------------- DROP TABLE --------------------------------------------- //


// dt - дает список таблицы:

\dt 
<!-- 
    Schema |   Name   | Type  |  Owner
    --------+----------+-------+----------
     public | teachers | table | postgres
    (1 row)
-->

// -- 
    DROP TABLE используется чтобы удалить сам table
-- //

DROP TABLE teachers;
<!-- DROP TABLE -->

\dt
<!-- Did not find any relations. -->