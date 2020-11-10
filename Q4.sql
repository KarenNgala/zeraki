--  MySQL query that displays the number of students per course per institution



-- 1. create db and tables
CREATE DATABASE education;
USE education;


CREATE TABLE institution (
    institutionid INT(11) NOT NULL,
    name VARCHAR(250) NOT NULL,
    PRIMARY KEY (institutionid)
) ENGINE InnoDB;


CREATE TABLE course (
    courseid INT(11) NOT NULL,
    name VARCHAR(250) NOT NULL,
    institution INT(11) NOT NULL,
    PRIMARY KEY (courseid),
    CONSTRAINT institution FOREIGN KEY (institution) REFERENCES education.institution (institutionid)
) ENGINE InnoDB;


CREATE TABLE student (
    studentid INT(11) NOT NULL,
    name VARCHAR(250) NOT NULL,
    course INT(11) NOT NULL,
    PRIMARY KEY (studentid),
    CONSTRAINT course FOREIGN KEY (course) REFERENCES education.course (courseid)
) ENGINE InnoDB;


-- 2. populate tables
INSERT INTO institution (institutionid, name) VALUES (1112, "Dublin College"), (111, "London College");
INSERT INTO course (courseid, name, institution) VALUES (11, "Acturial Science", 8481), (12, "Genomics", 111);
INSERT INTO student (studentid, name, course) VALUES (10, "Phylis", 1), (21, "Maina", 11), (32, "CocoTea", 11);


-- 3. QUERY
SELECT institution.name AS "INSTITUTION NAME", course.name AS "COURSE NAME", COUNT(studentid) AS "NUMBER OF STUDENTS" 
    FROM institution 
    JOIN course ON course.institution = institution.institutionid 
    JOIN student ON student.course = course.courseid GROUP BY course;