function showInventor() {
    const inventor = document.getElementById("inventorList").value;

    const data = {
        gosling: {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/James_Gosling_2008.jpg/640px-James_Gosling_2008.jpg",
            info: "James Gosling is the creator of Java, developed at Sun Microsystems in 1995."
        },
        rossum: {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Guido_van_Rossum_PyCon_2013_%288564955009%29.jpg/640px-Guido_van_Rossum_PyCon_2013_%288564955009%29.jpg",
            info: "Guido van Rossum created Python in 1991 and is known as the 'Benevolent Dictator For Life' of Python."
        },
        ritchie: {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Dennis_Ritchie.jpg/640px-Dennis_Ritchie.jpg",
            info: "Dennis Ritchie created the C programming language at Bell Labs in 1972."
        },
        stroustrup: {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Bjarne-stroustrup_%28cropped%29.jpg/640px-Bjarne-stroustrup_%28cropped%29.jpg",
            info: "Bjarne Stroustrup developed C++ as an extension of C beginning in 1979."
        },
        eich: {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Brendan_Eich_Mozilla_Foundation_official_photo.jpg/640px-Brendan_Eich_Mozilla_Foundation_official_photo.jpg",
            info: "Brendan Eich created JavaScript in 1995 while working at Netscape."
        },
        lerdorf: {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Rasmus_Lerdorf_August_2014_%28cropped%29.JPG/1200px-Rasmus_Lerdorf_August_2014_%28cropped%29.JPG?20140828100738",
            info: "Rasmus Lerdorf created PHP in 1994 originally as CGI scripts."
        },
        matsumoto: {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Yukihiro_Matsumoto_EuRuKo_2011.jpg/1241px-Yukihiro_Matsumoto_EuRuKo_2011.jpg?20110729071434",
            info: "Yukihiro 'Matz' Matsumoto created Ruby in 1995 focusing on simplicity and productivity."
        },
        hejlsberg: {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Anders_Hejlsberg.jpg/640px-Anders_Hejlsberg.jpg",
            info: "Anders Hejlsberg developed C# for Microsoft in 2000."
        },
        hopper: {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg/960px-Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg?20141006162240",
            info: "Grace Hopper created COBOL and pioneered compiler technology."
        },
        mccarthy: {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Joseph_McCarthy.jpg/1134px-Joseph_McCarthy.jpg?20211010113122",
            info: "John McCarthy created Lisp in 1958 and is considered one of the founders of AI."
        }
    };

    if (inventor === "") {
        document.getElementById("inventorImage").src = "";
        document.getElementById("infoBox").innerText = "Select an inventor to view details";
    } else {
        document.getElementById("inventorImage").src = data[inventor].img;
        document.getElementById("infoBox").innerText = data[inventor].info;
    }
}
