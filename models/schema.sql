DROP DATABASE IF EXISTS eco_alternative;
CREATE DATABASE eco_alternative;

CREATE TABLE category(
    categoryId INTEGER  NOT NULL PRIMARY KEY, 
    category   VARCHAR(26) NOT NULL
);

CREATE TABLE product(
    categoryId INTEGER,
    productId INTEGER,
    product   VARCHAR(33),
    PRIMARY KEY (categoryId, productId)
);

CREATE TABLE productOption(
    productOptionId INTEGER,
    PRIMARY KEY (categoryId, productId, productOptionId)
);


SELECT * FROM category
LEFT JOIN product
on category.categoryId = product.categoryId;