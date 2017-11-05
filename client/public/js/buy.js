$(document).ready(function() {
    $(".buy-stock").click(function() {
        var amount = $(this).closest("tr").find(".amount").val();
        var stock = $(this).closest("tr").find(".ticker").text();
        var price = $(this).closest("tr").find(".price").text();
        var max = $(this).closest("tr").find(".max").text();

        alert(amount + " " + stock + " " + price + " " + max);       // Outputs the answer
    });
});