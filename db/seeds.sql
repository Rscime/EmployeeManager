INSERT INTO department (id, dept_name)
VALUES  (001, 'HR'),
        (002, 'Feild Science'),
        (003, 'Geospatial'),
        (004, 'Marketing');

INSERT INTO roles (id, role_title, salary, dept_id)
VALUES  (001, 'HR Manager', 75000.00, 001),
        (002, 'HR Representative', 55000.00, 001),
        (003, 'Lead Feild Scientist', 75000.00, 002),
        (004, 'Feild Scientist 2', 63000.00, 002),
        (005, 'Feild Scientist 1', 52000.00, 002),
        (006, 'Lead Geospatial Analyst', 85000.00, 003),
        (007, 'Geospatial Analyst', 75000.00, 003),
        (008, 'Junior Geospatial Analyst', 65000.00, 003),
        (009, 'Lead Marketing Agent', 65000.00, 004),
        (010, 'Marketing Agent', 48000.00, 004);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES  (001, 'Lisa', 'Turner', 001, NULL),
        (002, 'Trisha', 'Lee', 002, 001),
        (003, 'Aaron', 'Smith', 003, NULL),
        (004, 'Robert', 'Crash', 004, 003),
        (005, 'Cindy', 'Cheng', 005, 003),
        (006, 'Emitt', 'Lang', 006, NULL),
        (007, 'Alicia', 'Roberts', 007, 006),
        (008, 'Timothy', 'Crickett', 008, 006),
        (009, 'Patty', 'Reign', 009, NULL),
        (010, 'Francis', 'Map', 010, 009);
