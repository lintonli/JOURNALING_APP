USE JOURNAL;
GO 
CREATE OR ALTER PROCEDURE getUser (@EMAIL VARCHAR(255))
AS
BEGIN
    SELECT * FROM Users WHERE EMAIL = @EMAIL;
END;

-- EXECUTE getUser @EMAIL ='lintonli162@gmail.com';