//$(evento).acao()
$(function(){
	$('#azul').click(function(){
		$('p').css("color", "blue");
		$('p').fadeOut();

	});

	$('#vermelho').click(function(){
		$('p').css("color", "red");
		$('#mensagem').text("cor alterada");
		$('#mensagem').css("border", "solid 1px red");
		$('#mensagem').delay(3000);
		$('#mensagem').fadeOut();

		
	});
});