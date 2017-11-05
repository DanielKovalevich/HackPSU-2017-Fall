$(document).ready(function() {
    getCurrentUserData();
    demo.initDashboardPageCharts();

    var d = new Date();
    var date = d.getMonth().toString() + '/' + d.getDay().toString() + '/' + d.getFullYear().toString();
    $("#time").html("<i class=\"material-icons\">access_time</i> " + new Date().toString() + "");
    $("#time2").html(date);

    $('.loggout').click(function() {window.location = "./login.html";});

    $('#myModal').modal('show');
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
                $('#stock-body').append('<tr><td>' + stocks[i] + '</td><td> TESTING </td><td>' + shares[i] + '</td></tr>');
            }
        },
        error: function (req, text_status, error) {
            console.log('Error: ' + error.message);
        }
    });
}