alert('Punto 1')
alert (`Indica el tipo de motor: los valores posibles son: 0, 1, 2, 3, 4`)
let numTipoMotor = parseInt(prompt ('Introduce el precio sin impuestos: '));

function TipoMotor(numTipoMotor) {
  switch (numTipoMotor) {
		case 0:
			alert (`No hay establecido un valor definido para el tipo de bomba`)
			break;
		case 1:
			alert (`La bomba es una bomba de agua`)
			break;
		case 2:
			alert (`La bomba es una bomba de gasolina.`)
			break;
		case 3:
			alert (`La bomba es una bomba de hormigón`)
			break;
		case 4:
			alert (`La bomba es una bomba de pasta alimenticia`)
			break;
		default:
			alert (` No existe un valor válido para tipo de bomba`)
	}
}

TipoMotor(numTipoMotor)
