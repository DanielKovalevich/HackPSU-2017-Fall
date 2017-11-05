$(document).ready(function() {
    getCurrentUserData();

});

function getCurrentUserData() {
    $.ajax({
        url: "defaultUser",
        type: "get",
        // Manipulate data here.
        success: function(data) {
            console.log(data);
            $('#userTitle').html(data.username);
            var stocks = data.stocks.split(",");
            var shares = data.stock_shares.split(",");
            
            for(var i = 0; i < stocks.length; i++) {
                var html1 = '<tr><td class="ticker">' + stocks[i] + '</td><td class="price">$10</td><td>$5</td><td>5.4%</td> <td class="max">' + shares[i] + '</td>'
                var html2 = '<td>$'+ shares[i] * 10 + '</td><td>N/A</td></tr>'
                $('#profile-body').append(html1 + html2);
            }
        },
        error: function (req, text_status, error) {
            console.log('Error: ' + error.message);
        }
    });
}