INSERT INTO departments (department_name)
VALUES 
('Engineering'),
('Finance'),
('Legal'),
('Sales');

INSERT INTO roles (title, department_id, salary)
VALUES 
('Sales Lead', 4, 100000),
('Salesperson', 4, 80000),
('Lead Engineer', 1, 150000),
('Sofeware Engineer', 1, 120000),
('Account Manager', 2, 160000),
('Accountant', 2, 125000),
('Legal Team Lead', 3, 250000),
('Lawyer', 3, 190000);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
('John', 'Doe', 4, 1),
('Mike', 'Chan', 3, 2),
('Ashley', 'Rodriguez', 4, 2),
('Kevin', 'Tupik', 4, 2),
('Kunal', 'Singh', 4, 2),
('Malia', 'Brown', 4, 2),
('Sara', 'Lourd', 4, 2),
('Tom', 'Allen', 4, 2);

