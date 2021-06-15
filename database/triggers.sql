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

DROP TRIGGER IF EXISTS update_phone//
CREATE TRIGGER update_phone BEFORE UPDATE ON courier

FOR EACH ROW 
BEGIN
	UPDATE user SET phonenumber = new.phonenumber;
END 
//

SET SQL_SAFE_UPDATES = 0;

DELIMITER //
DROP TRIGGER IF EXISTS update_phone//
CREATE TRIGGER update_phone 
BEFORE UPDATE ON courier
FOR EACH ROW 
BEGIN
	UPDATE user SET phonenumber = new.phonenumber WHERE user.phonenumber = old.phonenumber;
END 
//

DELIMITER ;