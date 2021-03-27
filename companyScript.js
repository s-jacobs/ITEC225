var d1 = "https://raw.githubusercontent.com/s-jacobs/ITEC225/main/amzn_open_data.csv";

Plotly.d3.csv(d1, function(err, rows){
    function unpack(rows, key){
        return rows.map(function(row){ return row[key]; });
    }
    
    var t1 = {
        type: "scatter",
        mode: "lines",
        name: 'AMZN Open',
        x: unpack(rows, 'date'),
        y: unpack(rows, 'open'),
        line: {color: 'red'}
    }
    
    var data = [t1];
    var layout = {
        title: {
            text: 'AMZN Open Price'
        },
        xaxis: {
            title: {
                text: 'Dates'
            }
        },
        yaxis: {
            title: {
                text: 'Open Price'
            }
        }
    };
    
    Plotly.newPlot('myplot', data, layout);
    
})
