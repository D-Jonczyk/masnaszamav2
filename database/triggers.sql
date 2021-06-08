use masnaszama;
SET GLOBAL local_infile = true;

DELIMITER //

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

DELIMITER ;