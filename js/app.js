
$("#queryButton").on('click', function(){
    var isbn = $("isbnInput").val();
    getData(isbn);
});



function getData(isbn){
    
    var firstKey = "ISBN:"+isbn;
    var baseUrl = "https://openlibrary.org/api/books?"
    var urlToUse = baseUrl + "bibkeys=ISBN:" + isbn + "&format=json&jscmd=data";
    $.ajax({
        method: "GET",
        url: urlToUse,
        dataType: "json",
        success: function(result, status){
            console.log(result);
            handleData(
                result[firstKey].title,
                result[firstKey].authors[0].name,
                result[firstKey].publish_date,
                result[firstKey].publishers[0].name,
                isbn,
                result[firstKey].number_of_pages,
                result[firstKey].cover.large
            );
        },
        error: function(status, error){
            alert("failure");
        }
    });
}

function handleData(title, author, published, publisher, isbn, pages, coverUrl){
    console.log(title);
    console.log(author);
    console.log(published);
    console.log(publisher);
    console.log(isbn);
    console.log(pages);
    console.log(coverUrl);
    
    $("#result").html(title)
}



