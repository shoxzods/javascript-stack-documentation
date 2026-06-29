// ------------------------------ INSERT INTO  ( Insert Data ) ---------------------------------- //

// INSERT  VALUES 

INSERT INTO table_name ( name , age ) VALUES ( 'primov' , 12 );
<!-- INSERT 0 1 -->

SELECT * FROM DATABASE;
<!-- 
     id |  name   | age
    ----+---------+-----
      1 | shoxzod |  23
    (1 row)
 -->

// INSERTING MULTIPLE VALUES: 
INSERT INTO teachers ( name , age ) VALUES ( 'primov' , 12 ) , ( 'salem' , 45 );
<!-- INSERT 0 2 -->

SELECT * FROM teachers;

 id |  name   | age
----+---------+-----
  1 | shoxzod |  23
  2 | primov  |  12
  3 | salem   |  45
(3 rows)
