var isUp = true;

function Start () {
	
}

function Update () {
	if(isUp)
		transform.position.y = transform.position.y - 0.04;
	else
		transform.position.y += 0.04;
	if (transform.position.y >= 12){
		isUp = true;
		WaitForSeconds(0.5);
	}
	else if (transform.position.y <=8){
		WaitForSeconds(0.5);
		isUp = false;
	}
}
