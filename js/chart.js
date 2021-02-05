function drawChart() {
    var ctx = document.getElementById('marketingChart').getContext('2d');

    var marketingChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: getDataPoints(),
                backgroundColor: getChartColors()
            }],
            labels: getDataLabels()
        },
        options: {
            responsive: false
        }
    });
}

function getDataPoints() {
    var dataPoints = [];
    for (var product of pageData.productCatalog) {
        dataPoints.push(product.timesClicked);
    }
    return dataPoints;
}

function getChartColors() {
    var chartColors = [];
    for (var product of pageData.productCatalog) {
        chartColors.push(product.chartColor);
    }
    return chartColors;
}

function getDataLabels() {
    var dataLabels = [];
    for (var product of pageData.productCatalog) {
        dataLabels.push(product.name);
    }

    return dataLabels;
}
