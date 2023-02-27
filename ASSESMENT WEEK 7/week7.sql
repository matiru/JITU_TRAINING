-- Week 7 

-- 1.Query all columns (attributes) for every row in the CITY table
SELECT 
       LEN(ID) AS id_len,
       DATALENGTH(ID) AS data_length_id,
       LEN(NAME) AS name_len,
       DATALENGTH(NAME) AS data_length_name,       
       LEN(COUNTRYCODE) AS countrycode_len,
       DATALENGTH(COUNTRYCODE) AS data_length_ countrycode,
       LEN(DISTRICT) AS district_len,
       DATALENGTH(N(DISTRICT) AS data_length_ district,
       LEN(POPULATION) AS population _len,
       DATALENGTH((POPULATION) AS data_length_population

FROM CITY;

-- 2Write a query that prints a list of employee names (i.e.: the name attribute) for employees in Employee having a salary greater than  per month who have been employees for less than  months. Sort your result by ascending employee_id	
SELECT name
FROM Employee
WHERE salary > 2000
  AND months < 10
ORDER BY employee_id ASC;

-- 3Query the Name of any student in STUDENTS who scored higher than  Marks. Order your output by the last three characters of each name. If two or more students both have names ending in the same last three characters (i.e.: Bobby, Robby, etc.), secondary sort them by ascending ID.

SELECT Name
FROM STUDENTS
WHERE Marks > 75
ORDER BY RIGHT(Name, 3), ID ASC


-- 4Query the list of CITY names from STATION that either do not start with vowels or do not end with vowels. Your result cannot contain duplicates.
 SELECT DISTINCT Name
FROM employees
WHERE  
Name  NOT LIKE '%[aeiou]'
  and Name NOT LIKE '[aeiou]%';
 ;
-- 5 Find the difference between the total number of CITY entries in the table and the number of distinct CITY entries in the table.
-- The STATION table is described as follows:
SELECT COUNT(CITY) - COUNT(DISTINCT CITY) AS difference
FROM STATION;



