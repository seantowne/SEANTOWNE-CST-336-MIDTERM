
// https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&format=json&jscmd=data
//var baseUrl = https://openlibrary.org/api/books?




function getData(isbn){
    //var test = "https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&format=json&jscmd=data"
    var baseUrl = "https://openlibrary.org/api/books?"
    var urlToUse = baseUrl + "bibkeys=ISBN:" + isbn + "&format=json&jscmd=data";
    $.ajax({
        method: "GET",
        url: urlToUse,
        dataType: "json",
        success: function(result, status){
            alert("success");
            return result;
        },
        error: function(status, error){
            alert("failure");
        }
    });
}
console.log(getData("0451526538"));