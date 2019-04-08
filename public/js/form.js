$(document).ready(function () {
    $('select').formSelect();


    // When variables captured the data is transformed into a json object upon capture
    $(`#submitButton`).on(`click`, function (event) {
        event.preventDefault();
        var newProduct = {
            productOption_name: $(`#productOption_name`).val(),
            image: $(`#image`).val().trim(),
            external_link: $(`#external_link`).val().trim(),
            source: $(`#source`).val().trim(),
            price: $(`#price`).val().trim(),
            product_Id: $(`#product_Id option:selected`).val(),
            product_name: $(`#product_name option:selected`).text(),
            ingredients: $(`#ingredients option:selected`).text(),
            plastic_free: $(`#plastic_free option:selected`).text(),
            reusable: $(`#reusable option:selected`).text(),
            stylish: $(`#stylish option:selected`).text(),
            fun_fact: $(`#fun_fact`).val(),
            environmental_impact: $(`#environmental_impact`).val()
        };
        console.log(newProduct);
        $.ajax("api/newproduct", {
            type: "POST",
            data: newProduct
        }).then(
            function () {
                console.log("New Product Added!!!");
                location.reload();
            }

        )
    });
});