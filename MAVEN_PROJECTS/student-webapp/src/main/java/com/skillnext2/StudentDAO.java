package com.skillnext2;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class StudentDAO {

    public static void save(Student stu) {

        String url = "jdbc:mysql://localhost:3306/skillnext_db";
        String user = "root";
        String password = "sneha";

        String sql = "INSERT INTO student(name, dept, marks) VALUES (?, ?, ?)";

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");

            try (Connection con = DriverManager.getConnection(url, user, password);
                 PreparedStatement ps = con.prepareStatement(sql)) {

                ps.setString(1, stu.getName());
                ps.setString(2, stu.getDept());
                ps.setInt(3, stu.getMarks());

                ps.executeUpdate();
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
