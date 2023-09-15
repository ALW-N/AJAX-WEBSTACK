$(document).ready(function(){
    $("#fetchBooks").click(function(){
        $.getJSON("books.json", function(data){
            var books = "";
            console.log("gooo..")
            $.each(data, function(key, value){
                books += "<p>";
                books += "<strong>Title:</strong> " + value.title + "<br>";
                books += "<strong>Author:</strong> " + value.author + "<br>";
                books += "<strong>Year:</strong> " + value.year;
                books += "</p>";
            });
            $("#bookList").html(books);
        });
    });
});