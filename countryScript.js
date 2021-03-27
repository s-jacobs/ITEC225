var d1 = "https://raw.githubusercontent.com/s-jacobs/ITEC225/main/fra_case_data.csv";
var d2 = "https://raw.githubusercontent.com/s-jacobs/ITEC225/main/fra_death_data.csv";

Plotly.d3.csv(d1, function(err, rows){
    function unpack(rows, key){
        return rows.map(function(row){ return row[key]; });
    }
    
    var t1 = {
        type: "scatter",
        mode: "lines",
        name: 'France Covid Cases',
        x: unpack(rows, 'date'),
        y: unpack(rows, 'cases'),
        line: {color: 'orange'}
    }
    
    
//    var t2 = {
//        type: "scatter",
//        mode: "lines",
//        name: 'France Covid Deaths',
//        x: unpack(rows, 'date'),
//        y: unpack(rows, 'deaths'),
//        line: {color: 'red'}
//    }
    
    var data = [t1];
    
    var layout = {
        title: {
            text: 'France Covid Cases'
        },
        xaxis: {
            title: {
                text: 'Dates'
            }
        },
        yaxis: {
            title: {
                text: 'Cases'
            }
        }
    };
    
    
    
    Plotly.newPlot('plot1', data, layout);
});






Plotly.d3.csv(d2, function(err, rows){
    function unpack(rows, key){
        return rows.map(function(row){ return row[key]; });
    }
    
    var t2 = {
        type: "scatter",
        mode: "lines",
        name: 'France Covid Cases',
        x: unpack(rows, 'date'),
        y: unpack(rows, 'deaths'),
        line: {color: 'red'}
    }
    
    
    var data = [t2];
    var layout = {
        title: {
            text: 'France Covid Deaths'
        },
        xaxis: {
            title: {
                text: 'Dates'
            }
        },
        yaxis: {
            title: {
                text: 'Deaths'
            }
        }
    };
    Plotly.newPlot('plot2', data, layout);
});
