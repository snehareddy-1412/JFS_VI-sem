package com.skillnext2;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/saveStudent")
public class StudentServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {

        resp.setContentType("text/html");
        resp.getWriter().println("<h2>Student Servlet is WORKING</h2>");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {

        String name = req.getParameter("name");
        String dept = req.getParameter("dept");
        int marks = Integer.parseInt(req.getParameter("marks"));

        Student stu = new Student();
        stu.setName(name);
        stu.setDept(dept);
        stu.setMarks(marks);

        StudentDAO.save(stu);

        res.sendRedirect("success.jsp");
    }
}
