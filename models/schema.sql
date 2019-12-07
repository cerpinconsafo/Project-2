DROP DATABASE IF EXISTS storeDB;
CREATE database storeDB;

USE storeDB;

 CREATE TABLE store_table (
  id INT NOT NULL AUTO_INCREMENT,
   type VARCHAR(100) NOT NULL,
   name VARCHAR(100) NOT NULL,
   ppu DECIMAL(4,2) NOT NULL, 
   quantity INT(5) NOT NULL,
  PRIMARY KEY (id)
 );

-- SELECT * FROM store_table;

INSERT INTO store_table (type, name, ppu, quantity)
VALUES ("Doritos NACHO", "FOOD", 1.25, 100),
("Doritos COOL RANCH", "FOOD", 1.25, 100),
("Doritos SWEET CHILI", "FOOD", 1.25, 100),
("Pretzels SNYDERS", "FOOD", 1.25, 100),
("Lays SOURCREAM ONION", "FOOD", 1.25, 100),
("Lays BBQ", "FOOD", 1.25, 100),
("Combos PIZZA", "FOOD", 1.25, 100),
("Pop Tarts BLUEBERRY", "FOOD", 1.25, 100),
("Pop Tarts Strawberry", "FOOD", 1.25, 100),
("Pop Tarts SMORES", "FOOD", 1.25, 100),
("Water 16oz", "DRINK", .95, 50),
("Water 24oz", "DRINK", 1.50, 50),
("Water Gallon", "DRINK", 2.50, 25),
("Coke 16oz", "DRINK", 1.50, 50),
("Pepsi 16oz", "DRINK", 1.50, 50),
("Sprite 16oz", "DRINK", 1.50, 50),
("Fanta ORANGE 16oz", "DRINK", 1.50, 50),
("Fanta GRAPE 16oz", "DRINK", 1.50, 50),
("Gatorade ORANGE 24oz", "DRINK", 2.50, 25),
("Gatorade FRUIT PUNCH 24oz", "DRINK", 2.50, 25),
("Gatorade FROST 24oz", "DRINK", 2.50, 25),
("Arizona ORIGINAL", "DRINK", .99, 25),
("Arizona PEACH", "DRINK", .99, 25),
("Arizona GREEN TEA", "DRINK", .99, 25),
("SNICKERS BAR", "CANDY", 1.25, 25),
("MILKYWAY BAR", "CANDY", 1.25, 25),
("JOLLY RANCHERS BAG", "CANDY", 2.25, 25),
("AIRHEADS BAG", "CANDY", 2.25, 25),
("REESES 4PCK", "CANDY", 2.25, 25),
("SKITTLES BAG", "CANDY", 2.25, 25),
("STARBURST BAG", "CANDY", 2.25, 25);

SELECT * FROM store_table;
