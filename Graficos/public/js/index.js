$(document).ready(function() {
       $("#cargar").click(function(){
        //$(".grafico").toggle();
        insertarGraficos();
    });
       	
	});

    

    function insertarGraficos(){
         $.getJSON('datos', {}, function(json) {
            var data = [];
            for (var i = 0; i < json.length; i++) {
                data.push([json[i].nombre, parseInt(json[i].numero)]); 
            };


            cargar_grafico($('#grafico'), data, 'Grafico 1','pie');
            graficoSemiCirculo($('#grafico2'), data, 'Grafico 2','pie');
            graficoTres($('#grafico3'), data, 'Grafico 3','pie');
        });
    }




    function graficoTres(selector, data, titulo,tipoGrafico){
        // Make monochrome colors and set them as default for all pies
    Highcharts.getOptions().plotOptions.pie.colors = (function () {
        var colors = [],
            base = Highcharts.getOptions().colors[0],
            i;

        for (i = 0; i < 10; i += 1) {
            // Start out with a darkened base color (negative brighten), and end
            // up with a much brighter color
            colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
        }
        return colors;
    }());

    // Build the chart
    selector.highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: titulo
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            type: tipoGrafico,
            name: 'Browser share',
            data: data
        }]
    });


    }


    function graficoSemiCirculo(selector, data, titulo,tipoGrafico){

           selector.highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: titulo,
            align: 'center',
            verticalAlign: 'middle',
            y: 50
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
            series: [{
            type: tipoGrafico,
            name: 'Browser share',
            innerSize: '50%',
            data: data
        }]
    });


    }
  



	function cargar_grafico (selector, data, titulo,tipoGrafico) {
		selector.highcharts({
        chart: {
            type: tipoGrafico,
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        title: {
            text: titulo
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
        series: [{
            type: tipoGrafico,
            name: 'Browser share',
            data: data
        }]
    });
	
	}
