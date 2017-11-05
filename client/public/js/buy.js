$(document).ready(function() {
    getCurrentUserData();

    $("#sell-body").on('click', '.selling', function() {
        var amount = $(this).closest("tr").find(".amount").val();
        var stock = $(this).closest("tr").find(".ticker").text();
        var price = $(this).closest("tr").find(".price").text();
        var max = $(this).closest("tr").find(".max").text();

        sellStock(max, stock, price);
    });

    $(".buy-stock").click(function() {
        var amount = $(this).closest("tr").find(".amount").val();
        var stock = $(this).closest("tr").find(".ticker").text();
        var price = $(this).closest("tr").find(".price").text();
        var max = $(this).closest("tr").find(".max").text();

        buyStock(amount, stock, price);
    });
    
});

function getCurrentUserData() {
    $.ajax({
        url: "defaultUser",
        type: "get",
        // Manipulate data here.
        success: function(data) {
            console.log(data);
            $('#userTitle').html(data.username);
            var button = '<td><button class="selling mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Sell</button></td>';
            var stocks = data.stocks.split(",");
            var shares = data.stock_shares.split(",");

            for(var i = 0; i < stocks.length; i++) {
                $('#sell-body').append('<tr><td class="ticker">' + stocks[i] + '</td><td class="price">'+ shares[i] * .43 +'</td><td class="max">' + shares[i] + '</td>'+ button + '</tr>');
            }
        },
        error: function (req, text_status, error) {
            console.log('Error: ' + error.message);
        }
    });
}

function buyStock(amount, stock, price) {
    myKeyVals = JSON.stringify({
        amount: amount,
        stock: stock,
        price: price
    });

    $.ajax({
        url: "updateUser",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        type: "POST",
        // Manipulate data here.
        data: myKeyVals,
        success: function(data) {
            console.log(data);
            if (data.redirect) {
                document.location.href = data.redirect;
            }
        },
        error: function (req, text_status, error) {
            console.log('Error: ' + error.message);
        }
    });
}

function sellStock(amount, stock, price) {
    myKeyVals = JSON.stringify({
        amount: amount,
        stock: stock,
        price: price
    });

    $.ajax({
        url: "delete",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        type: "POST",
        // Manipulate data here.
        data: myKeyVals,
        success: function(data) {
            console.log(data);
            if (data.redirect) {
                document.location.href = data.redirect;
            }
        },
        error: function (req, text_status, error) {
            console.log('Error: ' + error.message);
        }
    });
}