
--TODO: REMOVE DROP DATABASE LATER
DROP DATABASE IF EXISTS eco_alternative;
CREATE DATABASE eco_alternative;
USE eco_alternative;
DROP TABLE IF EXISTS category;
DROP TABLE IF EXISTS product;
DROP TABLE IF EXISTS productOption;


CREATE TABLE category(
   id INTEGER  NOT NULL PRIMARY KEY AUTO_INCREMENT
  ,category_name VARCHAR
(24) NOT NULL
  ,icon VARCHAR
(24) NOT NULL
);


CREATE TABLE product(
   id INTEGER  NOT NULL PRIMARY KEY AUTO_INCREMENT
  ,product_name VARCHAR
(18) NOT NULL
  ,categoryI_id INTEGER  NOT NULL
);

CREATE TABLE productOption
(
  id INTEGER NOT NULL
  AUTO_INCREMENT PRIMARY KEY 
  ,product_name         VARCHAR
  (18) NOT NULL
  ,productOption_name   VARCHAR
  (56) NOT NULL
  ,product_Id           INTEGER  NOT NULL
  ,ingredients          VARCHAR
  (5) NOT NULL
  ,plastic_free         VARCHAR
  (5) NOT NULL
  ,reusable             VARCHAR
  (5) NOT NULL
  ,price                VARCHAR
  (5) NOT NULL
  ,stylish              VARCHAR
  (5) NOT NULL
  ,environmental_impact VARCHAR
  (688) NOT NULL
  ,image                VARCHAR
  (211) NOT NULL
  ,external_link        VARCHAR
  (287) NOT NULL
  ,fun_fact             VARCHAR
  (678) NOT NULL
  ,source               VARCHAR
  (274) NOT NULL
);


-- CATEGORY AND PRODUCT CONNECTION
-- left joing because all results have a category
-- left join means only display products that have a matching catgeory id
-- SELECT * FROM category
-- LEFT JOIN product
-- on category.categoryId = product.categoryId;

-- PRODUCT AND PRODUCT OPTION CONNECTION
-- SELECT * from product
-- LEFT JOIN productOption
-- on product.categoryId + product.product_generalId = productOption.categoryId + product.product_generalId;
