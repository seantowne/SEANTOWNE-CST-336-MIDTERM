
// https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&format=json&jscmd=data
//var baseUrl = https://openlibrary.org/api/books?




function getData(isbn){
    //"https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&format=json&jscmd=data"
    // https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&format=json&jscmd=data
    
    var baseUrl = "https://openlibrary.org/api/books?"
    var urlToUse = baseUrl + "bibkeys=ISBN:" + isbn + "&format=json&jscmd=data";
    $.ajax({
        method: "GET",
        url: urlToUse,
        dataType: "json",
        success: function(result, status){
            handleData(result);
        },
        error: function(status, error){
            alert("failure");
        }
    });
}

function handleData(data){
    var firstKey = Object.keys(data)[0];
    var title = data[firstKey].title;
    console.log(firstKey);
    console.log(title);
}


var data = getData("0451526538");
handleData(data);