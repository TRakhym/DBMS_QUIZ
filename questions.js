const questionsData = [
    {
        "page": 1,
        "questions": [
            {
                "question": "What do double diamonds represent in an ER diagram?",
                "options": [
                    "They link entity sets to relationship sets",
                    "Total participation of an entity in a relationship set",
                    "Relationship sets are linked to weak entity sets",
                    "None of the mentioned"
                ],
                "correct": 2
            },
            {
                "question": "Consider a directed line (→) from the relationship set advisor to both entity sets, instructor and student. This indicates cardinality",
                "options": [
                    "One-to-many",
                    "One-to-one",
                    "Many to one",
                    "Many to many",
                    "Many to two",
                    "Two to one"
                ],
                "correct": 1
            },
            {
                "question": "If A→B then A - B has trivial functional dependency.",
                "options": [
                    "A is a subset of A",
                    "B is not a subset of A",
                    "A is a subset of B",
                    "B is a subset of B'",
                    "B is not the subset of A"
                ],
                "correct": 1
            },
            {
                "question": "Specifying the order in which key values are stored in an index is useful when queries referencing the table have",
                "options": [
                    "ORDER BY clauses",
                    "SORT clauses",
                    "WHERE clauses",
                    "GROUP BY clauses",
                    "HAVING clauses",
                    "IN clauses",
                    "None of the mentioned"
                ],
                "correct": 0
            },
            {
                "question": "If each cell contains only one definite value, which normal form is it?",
                "options": [
                    "First Normal Form",
                    "Second Normal Form",
                    "3NF",
                    "Boyce-Codd Normal Form",
                    "INF",
                    "BCNF",
                    "Third Normal Form"
                ],
                "correct": 0
            },
            {
                "question": "If the table has a previous NF and not every key attribute is functionally dependent on the primary key only – is:",
                "options": [
                    "BCNF",
                    "First Normal Form",
                    "3NF",
                    "2NF",
                    "Boyce-Codd Normal Form",
                    "INF",
                    "Second Normal Form",
                    "Third Normal Form"
                ],
                "correct": 3
            },
            {
                "question": "What do we call tables that are the result of actions that meet certain established rules and are in certain normal forms?",
                "options": [
                    "Fleshing",
                    "Generalizations",
                    "Normalization",
                    "Denormalization",
                    "Decomposition",
                    "Redundancy",
                    "Composition"
                ],
                "correct": 2
            },
            {
                "question": "The 'Having' clause is used with",
                "options": [
                    "GROUP BY",
                    "ORDER BY",
                    "WHERE",
                    "IN",
                    "BETWEEN",
                    "DISTINCT"
                ],
                "correct": 0
            },
            {
                "question": "Which of the following statements are true about the COUNT function",
                "options": [
                    "The COUNT function counts the number of rows",
                    "The COUNT() function counts the number of rows with duplicates and NULL values",
                    "The COUNT(DISTINCT) function counts the number of distinct rows",
                    "COUNT() is equivalent to COUNT(ALL)",
                    "None of the above"
                ],
                "correct": [0, 2, 3]
            },
            {
                "question": "Foreign key is one in which the _____ of one relation is referenced in another relation.",
                "options": [
                    "Foreign key",
                    "Primary key",
                    "Composite key",
                    "Relationship",
                    "Check constraint"
                ],
                "correct": 1
            },
            {
                "question": "Returns a relation containing all tuples that appear in both of two specified relations.",
                "options": [
                    "Intersection",
                    "Union",
                    "Difference",
                    "Join",
                    "Selection"
                ],
                "correct": 0
            },
            {
                "question": "Returns a relation containing all possible tuples that are a combination of two tuples, one from each of two specified relations, such that the two tuples contributing to any given result tuple have common values for the common attributes of the two relations (and those common values appear just once, not twice, in that result tuple).",
                "options": [
                    "Selection",
                    "Division",
                    "Projection",
                    "Intersection",
                    "Union",
                    "Join"
                ],
                "correct": 5
            },
            {
                "question": "__ is used to return rows from both tables that satisfy the given condition. It is the most widely used join operation and can be considered as a default join-type.",
                "options": [
                    "Theta join",
                    "Inner join",
                    "Equi join",
                    "Natural join"
                ],
                "correct": 1
            },
            {
                "question": "To include integrity constraint in an existing relation use:",
                "options": [
                    "Create table",
                    "Modify table",
                    "Alter table",
                    "After table"
                ],
                "correct": 2
            },
            {
                "question": "A table T_COUNT has 12 number values as: 1, 2, 3, 3, 1, 1, null, 24, 2, 12, null, 32, null. Predict the output of the following: SELECT COUNT(num) FROM t_count;",
                "options": [
                    "12",
                    "6",
                    "9",
                    "5",
                    "3"
                ],
                "correct": 2
            },
            {
                "question": "Which of the following SELECT query returns the department number with maximum salary to an employee, by department?",
                "options": [
                    "SELECT department_id, max(salary) FROM employees;",
                    "SELECT department_id, max(salary) FROM employees GROUP BY department_id;",
                    "SELECT salary FROM employees GROUP BY department_id;",
                    "SELECT max(salary) FROM employees;",
                    "SELECT DISTINCT department_id, max(salary) FROM employees GROUP BY department_id;",
                    "SELECT department_id, min(salary) FROM employees GROUP BY department_id;",
                    "SELECT department_id FROM employees GROUP BY department_id;",
                    "SELECT max(salary) FROM employees GROUP BY salary;",
                    "None of the mentioned"
                ],
                "correct": 1
            },
            {
                "question": "Which of the following is correct?",
                "options": [
                    "Select * from tblA A, tblB B on(A.colA = B.colB)",
                    "Select * from tblA A, tblB B Where A.colA = B.colB",
                    "Select * from tblA A natural join tblB B on(A.colA = B.colB)",
                    "Select * from tblA A join tblB B on A.colA = B.colB",
                    "Select * from tblA A, tblB B on A.colA = B.colB",
                    "Select * from tblA, tblB on A.colA = B.colB"
                ],
                "correct": 3
            },
            {
                "question": "Double Rectangle represent",
                "options": [
                    "Derived attributes",
                    "Multi-valued Attributes",
                    "Weak entity sets",
                    "Total participation of an entity in a relationship set"
                ],
                "correct": 2
            },
            {
                "question": "Which statement is used to get all data from the student table whose name starts with ‘L’?",
                "options": [
                    "SELECT * FROM student WHERE name LIKE '%L%'",
                    "SELECT * FROM student WHERE name LIKE 'L%'",
                    "SELECT * FROM student WHERE name LIKE 'L*%'",
                    "SELECT * FROM student WHERE name LIKE '%L'",
                    "SELECT * FROM student WHERE name LIKE 'L%'",
                    "SELECT * FROM student WHERE name LIKE '%L%L%'",
                    "SELECT * FROM student WHERE name LIKE '%L%'"
                ],
                "correct": 1
            },
            {
                "question": "What command is used to save changes invoked by a transaction to the database?",
                "options": [
                    "ROLLBACK",
                    "START TRANSACTION",
                    "SAVE",
                    "COMMIT",
                    "UPDATE",
                    "SAVEPOINT",
                    "INSERT",
                    "SET TRANSACTION"
                ],
                "correct": 3
            }
        ]
    }
];
