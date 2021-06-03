use masnaszama;
SET GLOBAL local_infile = true;

DELIMITER //
DROP TRIGGER IF EXISTS customer_person_ai//
CREATE TRIGGER customer_person_ai AFTER INSERT ON customer 

FOR EACH ROW 
BEGIN
	INSERT INTO person(id, first_name, last_name, phonenumber) VALUES(new.id, new.first_name, new.last_name, new.phonenumber);
END 
//


DROP TRIGGER IF EXISTS employee_person_ai//
CREATE TRIGGER employee_person_ai AFTER INSERT ON employee

FOR EACH ROW 
BEGIN
	INSERT INTO person(id, first_name, last_name, phonenumber) VALUES(new.id, new.first_name, new.last_name, new.phonenumber);
END 
//


DROP TRIGGER IF EXISTS courier_employee_ai//
CREATE TRIGGER courier_employee_ai AFTER INSERT ON courier

FOR EACH ROW 
BEGIN
	INSERT INTO employee(id, first_name, last_name, phonenumber) VALUES(new.id, new.first_name, new.last_name, new.phonenumber);
END
//

DROP TRIGGER IF EXISTS cook_employee_ai//
CREATE TRIGGER cook_employee_ai AFTER INSERT ON cook

FOR EACH ROW 
BEGIN
	INSERT INTO employee(id, first_name, last_name, phonenumber) VALUES(new.id, new.first_name, new.last_name, new.phonenumber);
END 
//

DROP TRIGGER IF EXISTS chief_person_ai//
CREATE TRIGGER chief_person_ai AFTER INSERT ON chief

FOR EACH ROW 
BEGIN
	INSERT INTO person(id, first_name, last_name, phonenumber) VALUES(new.id, new.first_name, new.last_name, new.phonenumber);
END 
//

DROP TRIGGER IF EXISTS admin_person_ai//
CREATE TRIGGER admin_person_ai AFTER INSERT ON admin

FOR EACH ROW 
BEGIN
	INSERT INTO person(id, first_name, last_name, phonenumber) VALUES(new.id, new.first_name, new.last_name, new.phonenumber);
END 
//

DROP TRIGGER IF EXISTS coordinator_person_ai//
CREATE TRIGGER coordinator_person_ai AFTER INSERT ON coordinator

FOR EACH ROW 
BEGIN
	INSERT INTO person(id, first_name, last_name, phonenumber) VALUES(new.id, new.first_name, new.last_name, new.phonenumber);
END 
//
DELIMITER ;