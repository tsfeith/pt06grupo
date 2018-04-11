var numero1=prompt("Escreve o número que estas a pensar aqui:","");
var numero2=2;
var numero3;
var numero4 = true;
	while(numero2<numero1)
	{
		numero3=numero1%numero2;
		if (numero3==0)
	{
		numero4 = false;
		break;
	}
		numero2++;
	}

	if (numero4)
		{
			alert("O teu número é primo");
		}
		else
		{
			alert("O teu número não é primo");
		}
