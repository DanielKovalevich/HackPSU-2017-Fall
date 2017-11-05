$(document).ready(function() {


    $(".buy-stock").click(function() {
        var amount = $(this).closest("tr").find(".amount").val();
        var stock = $(this).closest("tr").find(".ticker").text();
        var price = $(this).closest("tr").find(".price").text();
        var max = $(this).closest("tr").find(".max").text();

        alert(amount + " " + stock + " " + price + " " + max);       // Outputs the answer
    });

    $(".sell-stock").click(function() {
        var amount = $(this).closest("tr").find(".amount").val();
        var stock = $(this).closest("tr").find(".ticker").text();
        var price = $(this).closest("tr").find(".price").text();
        var max = $(this).closest("tr").find(".max").text();

        alert(amount + " " + stock + " " + price + " " + max);       // Outputs the answer
    });
});

function getCurrentUserData() {
    $.ajax({
        url: "defaultUser",
        type: "get",
        // Manipulate data here.
        success: function(data) {
            $('#userTitle').html(data.username);

            var button = '<td><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent sell-stock">Sell</button></td>';
            var stocks = data.stocks.split(",");
            var shares = data.stock_shares.split(",");

            for(var i = 0; i < stocks.length; i++) {
                $('#sell-body').append('<tr><td class="ticker">' + stocks[i] + '</td><td class="price">TEST</td><td class="max">' + shares[i] + '</td>' + button + '</tr>');
            }
        },
        error: function (req, text_status, error) {
            console.log('Error: ' + error.message);
        }
    });
}