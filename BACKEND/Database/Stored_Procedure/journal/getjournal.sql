USE JOURNAL
GO
CREATE OR ALTER PROCEDURE getJournal(@ID VARCHAR(255))
AS
BEGIN
SELECT * FROM JOURNALS WHERE ID=@ID;
END