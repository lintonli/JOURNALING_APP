USE JOURNAL
GO
CREATE OR ALTER PROCEDURE getCategory(@ID VARCHAR(255))
AS
BEGIN
SELECT * FROM CATEGORIES WHERE ID=@ID
END