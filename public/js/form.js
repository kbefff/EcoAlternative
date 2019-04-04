$(document).ready(function () {
    $('select').formSelect();


    //When variables captured the data is transformed into a json object upon capture
    $(`#submitButton`).on(`click`, function (event) {
        event.preventDefault();
        var userInput = {
            product_specific: $(`#product_specific`).val(),
            image: $(`#image`).val().trim(),
            external_link: $(`#external_link`).val().trim(),
            source: $(`#source`).val().trim(),
            price: $(`#price`).val().trim(),
            category_name: $(`#category_name option:selected`).val(),
            product_general: $(`#product_general option:selected`).val(),
            ingredients: $(`#ingredients option:selected`).val(),
            plastic_free: $(`#plastic_free option:selected`).val(),
            reusable: $(`#reusable option:selected`).val(),
            stylish: $(`#stylish option:selected`).val(),
            fun_fact: $(`#fun_fact`).val(),
            environmental_impact: $(`#environmental_impact`).val()
        };




        console.log(userInput);

        // logProduct(userInput.product_specific, userInput.image, userInput.external_link, userInput.source, userInput.price, userInput.category_name, userInput.product_general, userInput.ingredients, userInput.plastic_free, userInput.reusable, userInput.stylish, userInput.fun_fact, userInput.environmental_impact);
        // product_specific.val(``);
        // image.val(``);
        // external_link.val(``);
        // source.val(``);
        // price.val(``);
        // category_name.val(``);
        // product_general.val(``);
        // ingredients.val(``);
        // plastic_free.val(``);
        // reusable.val(``);
        // stylish.val(``);
        // fun_fact.val(``);
        // environmental_impact.val(``)

    });

    // function logProduct(product_specific) {
    //     $.post("/api/newproduct", {
    //         product_specific: product_specific,
    //         image: image,
    //         external_link: external_link,
    //         source: source,
    //         price: price,
    //         category_name: category_name,
    //         product_general: product_general,
    //         ingredients: ingredients,
    //         plastic_free: plastic_free,
    //         reusable: reusable,
    //         stylish: stylish,
    //         fun_fact: fun_fact,
    //         environmental_impact: environmental_impact

    //     }).then(function (data) {
    //         window.location.replace(data);
    //         // If there's an error, log the error
    //     }).catch(function (err) {
    //         console.log(err);
    //     });
    // }

});