USE JOURNAL;
CREATE TABLE Users (
    ID VARCHAR (255) PRIMARY KEY NOT NULL,
    UNAME VARCHAR (255) NOT NULL,
    EMAIL VARCHAR (255) NOT NULL UNIQUE,
    UPASSWORD  VARCHAR (255) NOT NULL,
    UROLE VARCHAR(255) NOT NULL, 
    isDeleted INT DEFAULT 0,
)