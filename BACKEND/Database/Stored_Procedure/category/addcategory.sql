USE JOURNAL;
GO
CREATE OR ALTER PROCEDURE addCategory(@ID VARCHAR(255), @NAME VARCHAR(255))
AS
BEGIN
INSERT INTO CATEGORIES(ID,CNAME) VALUES(@ID,@NAME)
END