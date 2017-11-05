type = ['', 'info', 'success', 'warning', 'danger'];


demo = {
    initDashboardPageCharts: function() {

        dataDailySalesChart = {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            series: [
                [850, 866, 855.5, 831.20, 849.0, 847.38, 861.78]
            ]
        };

        optionsDailySalesChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: 825,
            high: 875, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
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