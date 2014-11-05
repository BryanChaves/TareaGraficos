<!DOCTYPE html>
<html>
<head>
	<title>Graficos</title>
	{{HTML::style('bootstrap/css/bootstrap.min.css')}}
</head>
<body>
	<h1>Graficos</h1>
	<button id="cargar">Cargar</button>
	

	<div class="grafico" id="grafico">
		
	</div>
	<div class="grafico" id="grafico2">
		
	</div>

	<div class="grafico" id="grafico3">
		
	</div>



	{{HTML::script('js/jquery-2.1.1.min.js')}}
    {{HTML::script('js/index.js')}}
	{{HTML::script('js/highcharts/highcharts.js')}}
	{{HTML::script('js/highcharts/highcharts-3d.js')}}
	{{HTML::script('js/highcharts/exporting.js')}}
	
</body>
</html>