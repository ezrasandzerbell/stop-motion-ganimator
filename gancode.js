// working code for incrementing input value
function incrementGan(x){
	var y = Number(x);
	var z = y + 0.1;
	$(".gene_input_row input").setAttribute('value', z);
}
incrementGan($(".gene_input_row input").value)

//
