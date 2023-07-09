DROP DATABASE IF EXISTS organization_db;
CREATE DATABASE organization_db;

USE organization_db;

CREATE TABLE department (
  id INT NOT NULL,
  dept_name VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL,
  role_title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  dept_id INT,
  PRIMARY KEY (id)
  FOREIGN KEY (dept_id)
  REFERENCES department(id)
);

CREATE TABLE employee (
  id INT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT, 
  manager_id INT,
  PRIMARY KEY (id)
  FOREIGN KEY (role_id)
  REFERENCES role(id)
);
