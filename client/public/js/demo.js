type = ['', 'info', 'success', 'warning', 'danger'];


demo = {
    initDashboardPageCharts: function() {

        /* ---------==========      Prepare the information for the latest stock totals =====--- */

        var historicalArray = [];
        var historicalList = tickerHandler.getHistoricalTickerInformation('aapl', (data) => {

            console.log(data);

            //We're going to need the first seven, for the first seven days of the week
            for (i = 0; i <= 7; i++) {

                historicalArray[i] = data[i];
            }

            console.log(data);
        /* ----------==========     Daily Sales Chart initialization    ==========---------- */

        dataDailySalesChart = {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            series: [
                [-12, 17, 7, 17, 23, 18, 38]
            ]
        };

        });

        optionsDailySalesChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: -50,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: {
                top: 20,
                right: 20,
                bottom: 0,
                left: 20
            },
        }

        var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

        md.startAnimationForLineChart(dailySalesChart);
    },

    showNotification: function(from, align) {
        color = Math.floor((Math.random() * 4) + 1);

        $.notify({
            icon: "notifications",
            message: "Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer."

        }, {
            type: type[color],
            timer: 4000,
            placement: {
                from: from,
                align: align
            }
        });
    }



}