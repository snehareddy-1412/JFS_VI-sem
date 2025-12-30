<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Student Form</title>
</head>
<body>

<center>
    <h2>Student Details</h2>

    <form action="saveStudent" method="post">
        Name: <input type="text" name="name" required><br><br>
        Department: <input type="text" name="dept" required><br><br>
        Marks: <input type="number" name="marks" required><br><br>
        <input type="submit" value="Save">
    </form>
</center>

</body>
</html>

