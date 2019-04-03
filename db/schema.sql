DROP DATABASE IF EXISTS eco_alternative;
CREATE DATABASE eco_alternative;
USE eco_alternative;

CREATE TABLE category(
   categoryId    INTEGER  NOT NULL PRIMARY KEY 
  ,category_name VARCHAR(24)
);


CREATE TABLE product(
   categoryId        INTEGER  NOT NULL
  ,product_generalId INTEGER  NOT NULL
  ,product_general   VARCHAR(22) NOT NULL
id PRIMARY KEY (categoryId, product_generalId)

);

CREATE TABLE productOption(
   categoryId           INTEGER  NOT NULL
  ,category_name        VARCHAR(24) NOT NULL
  ,product_generalId    INTEGER  NOT NULL
  ,product_general      VARCHAR(18) NOT NULL
  ,product_specificId   INTEGER  NOT NULL
  ,product_specific     VARCHAR(56) NOT NULL
  ,ingredients          VARCHAR(5) NOT NULL
  ,plastic_free         VARCHAR(5) NOT NULL
  ,reusable             VARCHAR(5) NOT NULL
  ,price                VARCHAR(5) NOT NULL
  ,stylish              VARCHAR(5) NOT NULL
  ,environmental_impact VARCHAR(688) NOT NULL
  ,image                VARCHAR(211) NOT NULL
  ,external_link        VARCHAR(287) NOT NULL
  ,fun_fact             VARCHAR(678) NOT NULL
  ,source               VARCHAR(274) NOT NULL
    id PRIMARY KEY (categoryId, product_generalId , product_specificId)

);

-- CREATE TABLE productOption(
--     productOptionId INTEGER,





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
