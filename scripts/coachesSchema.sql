DROP DATABASE IF EXISTS coachingDB;
CREATE database coachingDB;

USE coachingDB;

CREATE TABLE coaches (
    id INT NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    picture VARCHAR(300) NOT NULL,
    category VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    location VARCHAR(100) NOT NULL,
    fee INT NOT NULL,
    languages VARCHAR(100) NOT NULL,
    linkedin VARCHAR(100) NOT NULL,
    twitter VARCHAR(100) NOT NULL,
    website VARCHAR(100) NOT NULL,
    personalstatement VARCHAR(300) NOT NULL,
    education VARCHAR(300) NOT NULL,
    opendays VARCHAR(100) NOT NULL,
    ratings INT NOT NULL,
    testimonials VARCHAR(500) NOT NULL,
    PRIMARY KEY (id)
);