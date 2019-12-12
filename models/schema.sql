DROP DATABASE IF EXISTS storeDB;
CREATE database storeDB;

USE storeDB;

--  CREATE TABLE store_table (
--   id INT NOT NULL AUTO_INCREMENT,
--    type VARCHAR(100) NOT NULL,
--    name VARCHAR(100) NOT NULL,
--    ppu DECIMAL(4,2) NOT NULL, 
--    quantity INT(5) NOT NULL,
--   PRIMARY KEY (id)
--  );

-- SELECT * FROM store_table;

 SELECT * FROM storedb.stores;
 
 INSERT INTO stores (name, type, ppu, quantity, createdAt, updatedAt)
VALUES ("Doritos NACHO", "FOOD", 1.25, 100, now(), now()),
("Doritos COOL RANCH", "FOOD", 1.25, 100, now(), now()),
("Doritos SWEET CHILI", "FOOD", 1.25, 100, now(), now()),
("Pretzels SNYDERS", "FOOD", 1.25, 100, now(), now()),
("Lays SOURCREAM ONION", "FOOD", 1.25, 100, now(), now()),
("Lays BBQ", "FOOD", 1.25, 100, now(), now()),
("Combos PIZZA", "FOOD", 1.25, 100, now(), now()),
("Pop Tarts BLUEBERRY", "FOOD", 1.25, 100, now(), now()),
("Pop Tarts Strawberry", "FOOD", 1.25, 100, now(), now()),
("Pop Tarts SMORES", "FOOD", 1.25, 100, now(), now()),
("Water 16oz", "DRINK", .95, 50, now(), now()),
("Water 24oz", "DRINK", 1.50, 50, now(), now()),
("Water Gallon", "DRINK", 2.50, 25, now(), now()),
("Coke 16oz", "DRINK", 1.50, 50, now(), now()),
("Pepsi 16oz", "DRINK", 1.50, 50, now(), now()),
("Sprite 16oz", "DRINK", 1.50, 50, now(), now()),
("Fanta ORANGE 16oz", "DRINK", 1.50, 50, now(), now()),
("Fanta GRAPE 16oz", "DRINK", 1.50, 50, now(), now()),
("Gatorade ORANGE 24oz", "DRINK", 2.50, 25, now(), now()),
("Gatorade FRUIT PUNCH 24oz", "DRINK", 2.50, 25, now(), now()),
("Gatorade FROST 24oz", "DRINK", 2.50, 25, now(), now()),
("Arizona ORIGINAL", "DRINK", .99, 25, now(), now()),
("Arizona PEACH", "DRINK", .99, 25, now(), now()),
("Arizona GREEN TEA", "DRINK", .99, 25, now(), now()),
("SNICKERS BAR", "CANDY", 1.25, 25, now(), now()),
("MILKYWAY BAR", "CANDY", 1.25, 25, now(), now()),
("JOLLY RANCHERS BAG", "CANDY", 2.25, 25, now(), now()),
("AIRHEADS BAG", "CANDY", 2.25, 25, now(), now()),
("REESES 4PCK", "CANDY", 2.25, 25, now(), now()),
("SKITTLES BAG", "CANDY", 2.25, 25, now(), now()),
("STARBURST BAG", "CANDY", 2.25, 25, now(), now());