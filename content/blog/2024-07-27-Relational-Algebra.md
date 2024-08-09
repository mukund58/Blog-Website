+++
title = "Relational Algebra"
[extra]
  toc = true


### Fundamental Operator
1. Select (σ)
2. Project (π)
3. Union (U)
4. Set Difference (-)
5. Cartesian Product (X)
6. Rename (ρ)
#### Select (σ)
- Select tuples that satisfy a given predicate.
- It is denoted by lowercase Greek letter sigma (σ).
    ```sql
    Syntax: σ<selection_condition> (Relation).
    ```    

    Example: σD_ID = 2 (Employee).
- Comparison operators: =, #, <, ≤, >, and ≥.
- Connectives: AND (^), OR (v) and NOT (-).
#### Project (π) 
- Projects a relation to include only specified attributes.
    ```sql
    Syntax: π_attribute1, attribute2, ...(R)
    ```
- It is a unary operator.
- Basically a relation is a set.
   
   Example: π_name, age(Employees) selects only the name and age columns from the Employees relation.
#### Union (U)
-  Any relation is a set.
- Similar to union operation in Set Theory.
- It is a binary operator.
- It is a set of all objects that are a member of A, or B, or both
- Like project, the duplicate rows are eliminated.
   
   ```sql
    Syntax: π Column (Relation_1) U π Column (Relation_2)
    ```
  Two important conditions For R US to be valid,

 1. R and S must be of same arity.(no of R colums = no of S colums )
 2. For all i,Domain of the ith attribute of R = Domain of ith attribute of S.

   Example - University Database

    ```
    Instructor (ID, Name, Dept_Name, Salary)
    Course (Course_ID, Title, Dept_Name, Credits)
    Department (Dept-Name, Building, Budget)
    Section (Course_ID, Sec_ID, Semester, Year, Building, Room_No, Time_slot_ID)
    Teaches (ID, Course_ID, Sec_ID, Semester, Year)
    Student (ID, Name, Dept_Name, Tot_Cred)
    Advisor (S_ID, I_ID)
    Takes (ID, Course_ID, Sec_ID, Semester, Year, Grade)
    Classroom (Building, Room Number, Capacity)
    Time Slot (Time Slot_ID, Day, Start-Time, End-Time)
 
    ```
#### Set Difference (-) 
- It is like the same set difference in Set Theory.
- It is a binary operation.
- To find tuples that are in one relation but are not in another.
- R - S = Tuples in R but not in S.
-
Two important conditions For R - S to be valid,

1. R and S must be of same arity.

2. For all i,
Domain of the ith attribute auf R = Domain of ith attribute of S.


#### Cartesian Product (X)
Cartesian product associates every tuple of R, with every tuple
of R2.
- It is a binary operation.
- It is denoted by cross (X) symbol.
- R₁ X R₂ = All possible pairing.
- Same attribute may appear in R₁ and R₂.
- R = Depositor X Borrower.

#### Rename (ρ)
Relations in the database have names.
- The results of relational-algebra expressions do not have a name.
- It is useful to be able to give them names.
- It is a unary operation.
- It is denoted by the lowercase Greek letter rho (ρ).
    ```sql
    Syntax:ρx (E)
    ```
### Additional operations:
#### Set Intersection (∩)
The intersection operation returns the set of all tuples that are present in both relations.
- Any relation is a set.
- Similar to intersection operation in Set Theory.
- It is a binary operator.
- If R and S are two relations, then R ∩ S will give the tuples common to both R and S.
- `R ∩ S = R - ( R - S )`
    
    ```
    Syntax: π column (Relation_1) ∩ π column (Relation_2)
    ```
 Two important conditions For R ∩ S to be valid,

 1. R and S must be of same arity.(no of R colums = no of S colums )
 2. For all i,Domain of the ith attribute of R = Domain of ith attribute of S.


#### Assignment Operation (=)
The assignment operation allows storing the result of a relational algebra expression in a temporary relation variable.

- It is denoted by `(←)` or `(=)`.
- It is binary operator.
- the databse is might be modified if assigment to a permanent relation is made.

    Example : 
    
        R = S ∩ P

       temp ← R ⋈ S

#### Natural Join (⋈)
A natural join is a type of join operation in relational databases that automatically combines tables based on all columns with the same name and datatype in both tables.

- Only columns that exist in both tables are used for the join condition, and only rows with matching values in these columns are included in the result.
#### Inner join 
An inner join is a fundamental relational database operation that combines rows from two tables based on a related column between them.

- Requires explicit specification of the join condition. Can join on any column(s), not just those with matching names.
- Rows from either table that do not have a matching row in the other table are excluded.

        Employees ⋈ Departments


#### Division Operation (÷)
#### Outer Join
##### Left Outer Join (⟕)
Returns all rows from the left table, and the matched rows from the right table
- If there is no match, NULL values are returned for columns from the right table.
- Useful when you want all records from the primary table and only the related records from the secondary table.

        Syntax: R ⋉ S

##### Right Outer Join (⟖)
Returns all rows from the right table, and the matched rows from the left table
- If there is no match, NULL values are returned for columns from the left table.
- Useful when you want all records from the secondary table and only the related records from the primary table.

        Synatx: R ⋊ S

##### Full Outer Join (⟗)
Returns all rows when there is a match in either left or right table.
- Rows that do not have a match in the other table will have NULL values for the columns from that table.
- Useful when you want to combine all records from both tables, showing how they relate to each other, including non-matching records.



        Syntax: R ⋉ S ∪ R ⋊ S



- {{ webring(prev="../", webring="#", webringName="Go Top ", next="#") }}
+++
