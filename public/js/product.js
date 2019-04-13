$(function () {
    $(".browser-default").change(function () {
        var selectedText = $(this).find("option:selected").text().trim();
        var selectedValue = $(this).val();
        alert("Selected Text: " + selectedText + " Value: " + selectedValue);





        
        console.log("/api/" + selectedText + "/" + selectedValue);
        $.get("/api/product/" + selectedValue, function (data) {
            console.log(data);
            
        });


    });

});