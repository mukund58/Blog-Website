+++
title = "Creating our own Database"
[extra]
  toc = true

+++


### What Database Schema ?
  Database schema defines how data is organized within a relational database; this is inclusive of logical constraints such as, table names, fields, data types and the relationships between these entities.

Create database schema
```bash
$ vim schema.sql
```
write in your schema file
```sql
CREATE TABLE IF NOT EXISTS "collection"(
        "id" INTEGER,
        "title" TEXT NOT NULL,
        "accesion_number"  TEXT NOT NULL UNIQUE,
        "acquired" NUMERIC,
        PRIMARY KEY("id")
);
```

Now create database
```bash
$ sqlite3 mfa.db
```
Import schmea in our database
```sql
.read schema.sql
```
To read what's inside schmea file
```sql
.schema
```
So we are ready to to insert our data

### Inserting Data
```sql
INSERT INTO "collection" ("id", "title", "accesion_number", "acquired")
VALUES (1,'art of swordship','32.43','2024-28-09');

```
You can see inserted data by
```sql
SELECT * FROM "collection"
```
output 
```
1|art of swordship|32.43|2024-28-09
```
### Export as .csv

Change mode to csv
```sql
.mode csv
.output mfa.csv
.header on 
SELECT * FROM "collection";
.quit
```
Headers: Use the `.header on` command before the query to include column names as the first row in the CSV file

mfa.csv
```
id,title,accesion_number,acquired
1,"art of swordship",32.43,2024-28-09
2,"art of fighting",22.43,2024-28-02
```

### Import as .csv

we hava mfa.csv 
```
id,title,accesion_number,acquired
3,"art doing hardwork",892.43,2024-18-09
4,"Life is always ok",92.93,2024-29-0
```
To import in our database 
```sql
.import --csv --skip 1 mfa.csv collection
```
`collection` is table name
 
`--csv` is output formate

`--skip 1` is for igonore first row  

To check you datbase is updated  you can use SELECT query

```sql
SELECT * FROM "colllection"
```
#### Import data file (mfa.csv) without id value

mfa.csv
```
title,accesion_number,acquired
"art of swordship",32.43,2024-28-09
"art of fighting",22.43,2024-28-02
"art doing hardwork",892.43,2024-18-09
"Life is always ok",92.93,2024-29-09
```

To import in data file in database
```sql
.import --csv mfa.csv temp
``` 
Here we store in tempoary table after we will insert this data into collection table 
```sql
INSERT INTO "collection" ("title","accesion_number","acquired")
SELECT "title", "accesion_number", "acquired" FROM "temp" ;
```
Now you can check 
```sql
SELECT * FROM "collection"
```
output
```
1|art of swordship|32.43|2024-28-09
2|art of fighting|22.43|2024-28-02
3|art doing hardwork|892.43|2024-18-09
4|Life is always ok|92.93|2024-29-09
```

### Deleting Data 

To delete all rows in table 
```sql
DELETE FROM "collection"
```
To Delete at speific range 
```sql
DELETE FROM "collection" WHERE "id" >2
```
it will delete all rows which is greater than 2 

To Delete Table 
```sql
DROP TABLE "collection"
```

 Consider now an updated schema for the MFA database, containing information not just about artwork but also artists. The two entities Artist and Collection have a many-to-many relationship—a painting can be created by many artists and a single artist can also create many pieces of artwork.

 {{ img(id="https://cs50.harvard.edu/sql/2024/notes/3/images/29.jpg", alt="theme logo") }}


- Here is a database implementing the above ER Diagram

  {{ img(id="https://cs50.harvard.edu/sql/2024/notes/3/images/30.jpg", alt="theme logo") }}

The `artists` and `collections` tables have primary keys. 
The created table references these IDs in its two foreign key columns.

- `ON DELETE RESTRICT`: This restricts us from deleting IDs when the foreign key constraint is violated.
- `ON DELETE NO ACTION`: This allows the deletion of IDs that are referenced by a foreign key and nothing happens.
- `ON DELETE SET NULL`: This allows the deletion of IDs that are referenced by a foreign key and sets the foreign key references to NULL.
- `ON DELETE SET DEFAULT`: This does the same as the previous, but allows us to set a default value instead of NULL.
- `ON DELETE CASCADE`: This allows the deletion of IDs that are referenced by a foreign key and also proceeds to cascadingly delete the referencing foreign key rows. For example, if we used this to delete an artist ID, all the artist’s affiliations with the artwork would also be deleted from the created table.


### Updating Data

Here is the syntax of the update command.
{{ img(id="https://cs50.harvard.edu/sql/2024/notes/3/images/49.jpg", alt="theme logo") }}

There are two ways of writing query
Let’s change this affiliation for “Profusion of flowers” in the created table using the above syntax.
```sql
 UPDATE "created"  SET "artist_id" = '3' WHERE "collection_id" = '3'
```
or 

```sql
UPDATE "created" SET "artist_id"= (
 SELECT "id" FROM "artists"
WHERE "name" = 'Qian Weicheng'
WHERE "collection_id" = (
SELECT "id" FROM "collections"
WHERE "title" = 'Profusion of flowers'
```
output 
```
1|2
3|3
3|1
4|4
```
- ok lets meet  again on another blog 🆗
 
-  Thank You for  reading to the end 🙂

{{ webring(prev="../", webring="#", webringName="Go Top ", next="../introduction-to-database-with-sql") }}


