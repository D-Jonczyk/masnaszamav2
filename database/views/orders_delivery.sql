DROP VIEW IF EXISTS orders_delivery;

CREATE VIEW orders_delivery AS
SELECT o.order_id, 
	co.courier_id AS 'courier_id', 
	o.order_price, 
	r.restaurant_name AS 'resto_name', 
    CONCAT(ad.street, ', ', ad.flat_number) AS 'customer_address',
    cu.phonenumber,
	DATE_FORMAT(o.ordered_time, "%T") AS 'ordered_time', 
	DATE_FORMAT(o.desired_delivery_time, "%T") AS 'desired_delivery_time'
FROM couriers_orders co
JOIN order_ o ON o.order_id = co.order_id
JOIN status_ s ON o.status_id = s.status_id
JOIN courier c ON co.courier_id = c.id
JOIN restaurant r ON o.restaurant_id = r.restaurant_id
JOIN customer cu ON o.customer_id = cu.id
JOIN address ad ON ad.address_id = o.address_id
WHERE s.status_name LIKE 'delivery';

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

INSERT INTO couriers_orders VALUES(201, FLOOR(RAND()*(1000-0+1))+0);

ALTER TABLE schedule DROP COLUMN week_number;

ALTER TABLE schedule ADD week_number INTEGER
GENERATED ALWAYS AS (WEEK(full_date))
VIRTUAL NOT NULL;