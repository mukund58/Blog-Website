+++
title = "Introduction to databse with SQL"
[extra]
  toc = true

+++

### What is Database ? 
 
 Database is way to orginaze data that you can perform below four operation.

1. create
2. read
3. update
4. delete 

DBMS is a way to interact with database  using GUI or textual language 
 
###  What is SQL

Structred  Qurey Language 

It is a language which used to interact with database to do that four operation

- In this blog i am going to use SQLite 

`"Before Doing any change it always recommend to make  backup of it"`

i am using this repo for sample of database 
```
https://github.com/bradleygrant/sakila-sqlite3
```

To open your databse,

Type this in you sql enviroment 
```command
$ sqllite3 master.db
```
After that make backup or clone and it will take around  10 min to load  your sql  
```sql
.clone master_backup.db
.open master_backup.db
.read your_sql_table.sql
```
Once prompt returns,you are ready to write SQL,

# Querying 
Now we can start our Journey by wrirting some query.
### SELECT
To Know what's inside our database. We use a keyword `SELECT` which allow to you select some row or all from the table inside the database.
 
```sql
SELECT * FROM 'actor' ;
SELECT "first_name" FROM "actor" ;
```
output
```
PENELOPE
NICK
ED
JENNIFER
JOHNNY
BETTE
GRACE
MATTHEW
JOE
CHRISTIAN
.
.
.
THORA
```
here actor is table in our database and first_name is name of column.


### LIMIT  
To see  from starting to specific amount row inside our database.We use this  Keyword `LIMIT` Which allow to specify the number of rows in qurey output

```sql
SELECT "first_name" FROM "actor" LIMIT 10 ;
```
output
```
PENELOPE
NICK
ED
JENNIFER
JOHNNY
BETTE
GRACE
MATTHEW
JOE
CHRISTIAN
```

### WHERE 

This Keyword `WHERE` is used to select rows based on condition.It will ouput rows when condition is true 

- if we want to find address of specific postal_code.the below code will print outall off with that postal code.
```sql
SELECT "postal_code","address" FROM "address" WHERE "postal_code" = 71102 ;
```
output
```
71102|1402 Zanzibar Boulevard
```
Here you can use diffrent operator 

for condition `=`(equal to)  `!=`(not equal to ) `<>` (not equal to )

- if you want to find out address having  postal code 
```sql
SELECT "postal_code", "address" FROM "address" WHERE "postal_code" != 0; 
```
output
```
35200|1913 Hanoi Way
17886|1121 Loja Avenue
83579|692 Joliet Street
53561|1566 Inegl Manor
42399|53 Idfu Parkway
.
.
.
27107|1325 Fukuyama Street
```
here you can replace `!=` with `<>` the output will be same.

```sql
SELECT "postal_code", "address" FROM "address" WHERE "postal_code" <> 0;
```
output
```
35200|1913 Hanoi Way
17886|1121 Loja Avenue
83579|692 Joliet Street
53561|1566 Inegl Manor
42399|53 Idfu Parkway
.
.
.
27107|1325 Fukuyama Street
```

- or We can also use a Keyword `NOT`,and result will be the same 
```sql
SELECT "postal_code", "address" FROM "address" WHERE NOT "postal_code" = 0;
```
output
```
35200|1913 Hanoi Way
17886|1121 Loja Avenue
83579|692 Joliet Street
53561|1566 Inegl Manor
42399|53 Idfu Parkway
.
.
.
27107|1325 Fukuyama Street
```

To combine condition we can use Keyword `AND` and `OR`

- `AND`
Here both condition checked if true than it will show an output
```sql
SELECT "customer_id", "first_name", "last_name", "store_id", "active" FROM "customer" WHERE "active" = 0 AND "store_id" = 1 ;
```
output
```
124|SHEILA|WELLS|1|0
271|PENNY|NEAL|1|0
368|HARRY|ARCE|1|0
406|NATHAN|RUNYON|1|0
482|MAURICE|CRAWLEY|1|0
534|CHRISTIAN|JUNG|1|0
558|JIMMIE|EGGLESTON|1|0
592|TERRANCE|ROUSH|1|0
```

here i select a customers those who have store_id 1 and they are not active (active = 0)

- `OR`
Here anyone condition is true than it will show an output
```sql
SELECT "customer_id", "first_name", "last_name", "store_id", "active" FROM "customer" WHERE "active" = 0 OR "store_id" = 1 ;
```
output
```
1|MARY|SMITH|1|1
2|PATRICIA|JOHNSON|1|1
3|LINDA|WILLIAMS|1|1
5|ELIZABETH|BROWN|1|1
7|MARIA|MILLER|1|1
10|DOROTHY|TAYLOR|1|1
12|NANCY|THOMAS|1|1
15|HELEN|HARRIS|1|1
16|SANDRA|MARTIN|2|0
17|DONNA|THOMPSON|1|1
.
.
.
598|WADE|DELVALLE|1|1
```

- To select customer having store_id 1 and first_name is JORDAN

```sql
SELECT "customer_id", "first_name", "last_name", "store_id", "active" FROM "customer" WHERE ("active" = 0 OR "store_id" = 1) AND "first_name" = 'JORDAN';
```
output
```
560|JORDAN|ARCHULETA|1|1
```
Here,paranthese indicate that `OR` clause should to executed first before `AND` clause. 

### NULL
it is possible to have missing data.`NULL` is a type keyword which can indicate to data that does not have a value or does not exit.

For example i have database of address where some table have missing postal code 
- `IS NULL`
  To select the address which does not have postal code 
```sql
SELECT "postal_code","address" FROM "address" WHERE "postal_code" IS NULL;
```
output
```
|47 MySakila Drive
|28 MySQL Boulevard
|23 Workhaven Lane
|1411 Lillydale Drive
```

- `IS NOT NULL`
  To select the address which  have postal code 
```sql
SELECT "postal_code","address" FROM "address" WHERE "postal_code" IS NOT NULL;
```
output
```
35200|1913 Hanoi Way
17886|1121 Loja Avenue
83579|692 Joliet Street
53561|1566 Inegl Manor
42399|53 Idfu Parkway
.
.
.
27107|1325 Fukuyama Street
```
### LIKE 
This Keyword is used to select data that roughly matches the specified string.

`LIKE` is used with operator `%`(match with given string  around them )`_`(match a single character) 


- To select title having word 'love' 
```sql
SELECT "film_id",  "title"  FROM "film" WHERE "title" LIKE '%love%' ;
```
output
```
374|GRAFFITI LOVE
448|IDAHO LOVE
449|IDENTITY LOVER
458|INDIAN LOVE
511|LAWRENCE LOVE
535|LOVE SUICIDES
536|LOVELY JINGLE
537|LOVER TRUMAN
538|LOVERBOY ATTACKS
852|STRANGELOVE DESIRE
```
- To select title start with  word 'love'
```sql
SELECT "film_id",  "title"  FROM "film" WHERE "title" LIKE 'love%' ;
```
output
```
535|LOVE SUICIDES
536|LOVELY JINGLE
537|LOVER TRUMAN
538|LOVERBOY ATTACKS
```
- To select title start with  only word 'love'
```sql
SELECT "film_id",  "title"  FROM "film" WHERE "title" LIKE 'love %' ;
```
output
```
535|LOVE SUICIDE
```


- To select title start with  only word 'D' and know lengeth of the word
```sql
 SELECT "film_id",  "title"  FROM "film" WHERE "title" LIKE 'D____________' ;
```
ouput
```
203|DAISY MENAGERIE
222|DESERT POSEIDON
233|DISCIPLE MOTHER
237|DIVORCE SHINING
243|DOORS PRESIDENT
247|DOWNHILL ENOUGH
249|DRACULA CRYSTAL
256|DROP WATERFRONT
266|DYNAMITE TARZAN
```
- To select title start with  character 'D' and end with 'N' know lengeth of the title
```sql
SELECT "film_id",  "title"  FROM "film" WHERE "title" LIKE 'D______________N' ;
```
output
```
226|DESTINY SATURDAY
```

- To select title start with  w and also contain n but dont know length of the word. 
```sql
SELECT "film_id",  "title"  FROM "film" WHERE "title" LIKE 'w_n_%' ;
```
output
```
956|WANDA CHAMBER
976|WIND PHANTOM
977|WINDOW SIDE
983|WON DARES
984|WONDERFUL DROP
985|WONDERLAND CHRISTMAS
986|WONKA SEA
```
- To select title start with  `w` and also contain `n` and  know the length of word.
```sql
SELECT "film_id",  "title"  FROM "film" WHERE "title" LIKE 'w_n_ %' ;
```
output
```
976|WIND PHANTOM
```
- To select title word end with  `d` and also contain `a` but don't know staring length of word.
```sql
SELECT "film_id",  "title"  FROM "film" WHERE "title" LIKE '%da__' ;
```
output
```
49|BADMAN DAWN
129|CAUSE DATE
328|FOREVER CANDIDATE
386|GUMP DATE
403|HARRY IDAHO
825|SPEAKEASY DATE
890|TIGHTS DAWN
914|TROUBLE DATE
995|YENTL IDAHO
```
- To select title word end with  `d` and also contain `a` and  know length of word.
```sql
SELECT "film_id",  "title"  FROM "film" WHERE "title" LIKE '% da__' ;
```
output
```
49|BADMAN DAWN
129|CAUSE DATE
386|GUMP DATE
825|SPEAKEASY DATE
890|TIGHTS DAWN
914|TROUBLE DATE
```

### Ranges
We can also use the operators `<`, `>`, `<=` and `>=` in our conditions to match a range of values

- To select payment amount between 1 and 3
```sql
SELECT "customer_id","amount", "payment_date"  FROM "payment" WHERE "amount" >=1 AND "amount" <= 3;
```
output 
```
1|2.99|2005-08-22 19:41:37.000
2|2.99|2005-06-17 20:54:58.000
2|2.99|2005-07-10 06:31:24.000
2|2.99|2005-07-29 12:56:59.000
2|2.99|2005-07-31 21:58:56.000
2|2.99|2005-08-02 13:44:53.000
2|2.99|2005-08-17 03:52:18.000
2|2.99|2005-08-19 06:26:04.000
3|1.99|2005-05-27 17:17:09.000
3|2.99|2005-05-29 22:43:55.000
3|2.99|2005-06-19 08:34:53.000
3|2.99|2005-07-29 11:07:04.000
3|1.99|2005-07-30 13:31:20.000
```
- you can get same result  by using a keyword `BETWEEN` and `AND` 
```sql
 SELECT "customer_id","amount", "payment_date"  FROM "payment" WHERE "amount" BETWEEN 1 AND  3;
```
output
```
1|2.99|2005-08-22 19:41:37.000
2|2.99|2005-06-17 20:54:58.000
2|2.99|2005-07-10 06:31:24.000
2|2.99|2005-07-29 12:56:59.000
2|2.99|2005-07-31 21:58:56.000
2|2.99|2005-08-02 13:44:53.000
2|2.99|2005-08-17 03:52:18.000
2|2.99|2005-08-19 06:26:04.000
3|1.99|2005-05-27 17:17:09.000
3|2.99|2005-05-29 22:43:55.000
3|2.99|2005-06-19 08:34:53.000
3|2.99|2005-07-29 11:07:04.000
``` 
- To select payment of 5$ or higher 
```sql
SELECT "customer_id","amount", "payment_date"  FROM "payment" WHERE "amount" > 5;
```
output
```
1|5.99|2005-08-22 20:03:46.000
2|6.99|2005-07-10 12:38:56.000
2|5.99|2005-07-27 15:23:02.000
2|5.99|2005-07-27 18:40:20.000
2|5.99|2005-07-29 00:12:59.000
2|5.99|2005-07-29 17:14:29.000
2|10.99|2005-07-30 13:47:43.000
2|6.99|2005-07-30 16:21:13.000
2|6.99|2005-07-30 22:39:53.000
2|5.99|2005-08-02 07:41:41.000
2|6.99|2005-08-02 10:43:48.000
```
- To further limit payment list of those who having rental id over 10000 and payment amount 5$ or higher .
```sql
SELECT "customer_id","amount", "payment_id", "rental_id"  FROM "payment" WHERE "amount" >
5 AND "rental_id" > 10000;
```
output
```
1|5.99|32|15315
2|5.99|51|11087
2|6.99|52|11177
2|5.99|57|14743
3|5.99|79|10597
3|8.99|81|13403
3|8.99|83|14699
4|8.99|101|12294
4|6.99|104|13807
5|9.99|137|12145
```
- To select payment list amount less than 5
```sql
SELECT "customer_id","amount", "payment_id", "rental_id"  FROM "payment" WHERE "amount"<5;
```
output
```
1|2.99|1|76
1|0.99|2|573
1|0.99|4|1422
1|4.99|6|1725
1|4.99|7|2308
1|0.99|8|2363
1|3.99|9|3284
1|4.99|12|5244
1|4.99|13|5326
```
### ORDER BY
This keyword allows you to orgainze the returned rows in some specificed order.

- The following query selects 10 payment amount  with 0 or less  in our database.
which means `ORDER BY`  chooses ascending order by default. 
```sql
 SELECT "customer_id","amount", "payment_id", "rental_id"  FROM "payment" ORDER BY "amount"  LIMIT 10 ;
```
output 
```
15|0|417|13968
42|0|1178|15407
43|0|1202|15745
53|0|1483|14137
60|0|1671|14741
75|0|2060|14488
75|0|2061|15191
107|0|2902|15497
155|0|4235|12352
163|0|4450|15282
```
- We will get same result by using keyword `ASC` as above for ascending order 
```sql
SELECT "customer_id","amount", "payment_id", "rental_id"  FROM "payment" ORDER BY "amount"ASC  LIMIT 10 ;
```
output
```
15|0|417|13968
42|0|1178|15407
43|0|1202|15745
53|0|1483|14137
60|0|1671|14741
75|0|2060|14488
75|0|2061|15191
107|0|2902|15497
155|0|4235|12352
163|0|4450|15282
```

- To select top 10 highest payment , we use `DESC` keyword  
```sql
SELECT "customer_id","amount", "payment_id", "rental_id"  FROM "payment" ORDER BY "amount"DESC  LIMIT 10 ;
```
output
```
13|11.99|342|8831
116|11.99|3146|14763
195|11.99|5280|16040
196|11.99|5281|106
204|11.99|5550|15415
237|11.99|6409|11479
305|11.99|8272|2166
362|11.99|9803|14759
591|11.99|15821|4383
592|11.99|15850|3973
```

### Aggregate Function

`COUNT`,`AVG`,`MIN`,`MAX`,and `SUM` are called aggregate function.and allow us to performe the correspoing operation over multiple rows of data.

- To find avgrage length of movie from film database table we use `AVG`
```sql
 SELECT "title",AVG("length"),"release_year" FROM "film";
```
output
```
ACADEMY DINOSAUR|115.272|2006
```
- To round the average rating to 2 decimal points 
```sql
SELECT "title",ROUND(AVG("length"),2),"release_year" FROM "film";
```
output 
```
ACADEMY DINOSAUR|115.27|2006
```
- To rename the column in which the results are displayed, we use `AS` keyword to rename column. 
```sql
 SELECT "title",ROUND(AVG("length"),3),"release_year" AS "average length" FROM "film"; 
```
output
```
ACADEMY DINOSAUR|115.27|2006
```
- To select the maximum rating in the database,we use `MAX` 
```sql
SELECT "title",MAX("length"),"release_year" FROM "film";
```
output
```
CHICAGO NORTH|185|2006
```
- To select the minimum rating in the database,we use `MAX` 
``` sql
SELECT "title",MIN("length"),"release_year" FROM "film";
```
output
```
ALIEN CENTER|46|2006
```
- To count the total number of film length in the database 
```sql
 SELECT "title",SUM("length"),"release_year"  FROM "film";
```
output
```
ACADEMY DINOSAUR|115272|2006
```
- To count the number of address in our database 
```sql
SELECT COUNT(*) FROM "address" ;
```
output
```
603
```


 Remember that we used `*` to select every row and column from the database. In this case, we are trying to count every row in the database and hence we use the `*`.

- To count the number of postal code
```sql
SELECT COUNT("postal_code") FROM "address"
```
output
```
599
```
 We observe that the number of postal code is fewer than the number of rows in the database. This is because the `COUNT` function does not count `NULL` values.

- To count the number of payment transtion in the database 
```sql
SELECT COUNT("amount") FROM "payment" ;
```
output
```
16049
```
this query will count the number of payment times values that are not NULL. However, this may include duplicates. Another SQL keyword, DISTINCT, can be used to ensure that only distinct values are counted.

- To get diffrent number of payment amount
```sql
SELECT COUNT(DISTINCT("amount")) FROM "payment" ;
```
output
```
19
```

  {{ webring(prev="../", webring="#", webringName="Go Top ", next="../why-free-software-is-good") }}
