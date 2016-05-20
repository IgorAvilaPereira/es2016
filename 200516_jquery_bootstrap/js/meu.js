$(document).ready(function(){
	
	$("#valeria").click(function(){		
		//alert($(this).html());
		//$(this).html($(this).html() + "oioioi...");
		//$(this).html("Marcos tá namorando....");
		//$(this).css("background-color","red");
		//$(this).fadeOut();
		$(this).animate({left: '250px'});
		//$(this).append("oi....<br>");
	});	

	$("#valeria").dblclick(function(){		
		//alert($(this).html());
		//$(this).html("Marcos tá namorando....");
		//$(this).css("background-color","red");
		//$(this).fadeOut();
		//$(this).animate({left: '10px'});
	});	

	$("#botao_addClasse").click(function(){
		$("#ops").addClass("camisetaJennifer");
	});

	$("#botao_removeClasse").click(function(){
		$("#ops").removeClass("camisetaJennifer");	
	});

	$("#calcular").click(function(){
		var a = parseFloat($("#a").val());
		if (a != 0) {
			var b = parseFloat($("#b").val());
			var c = parseFloat($("#c").val());

			var delta = b*b - 4.0*a*c;

			if (delta < 0){
				alert("xabum...");
			} else {
				var x1 = ((-1) * b + Math.sqrt(delta))/2*a;
				var x2 = ((-1) * b - Math.sqrt(delta))/2*a;
				alert("x1:"+x1 +" e x2:"+x2);
			}
		} else {
			alert("a zero ... nada dá...");
		}
	});	
});