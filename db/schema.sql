DROP DATABASE IF EXISTS eco_alternative;
CREATE DATABASE eco_alternative;
USE eco_alternative;


CREATE TABLE categories(
    categoryId INTEGER  NOT NULL PRIMARY KEY, 
    category   VARCHAR(26) NOT NULL
);

CREATE TABLE product(
    categoryId INTEGER,
    productId INTEGER,
    product   VARCHAR(33),
    PRIMARY KEY (categoryId, productId)
);

-- CREATE TABLE productOption(
--     productOptionId INTEGER,





--     PRIMARY KEY (categoryId, productId, productOptionId)
-- );



-- CATEGORY AND PRODUCT CONNECTION
-- left joing because all results have a category
-- left join means only display products that have a matching catgeory id

SELECT * FROM categories
LEFT JOIN product
on categories.categoryId = product.categoryId;

-- PRODUCT AND PRODUCT OPTION CONNECTION
-- SELECT * from product
-- LEFT JOIN productOption
-- on product.categoryId + product.productId = productOption.categoryId + product.productId;
