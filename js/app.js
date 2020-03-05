
// https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&format=json&jscmd=data
//var baseUrl = https://openlibrary.org/api/books?




function getData(isbn){
    //"https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&format=json&jscmd=data"
    // https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&format=json&jscmd=data
    
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
                result[firstKey].cover.medium
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
}


var data = getData("0451526538");
