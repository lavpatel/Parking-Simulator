#pragma strict
var Floor : Transform;

function OnTriggerExit (col: Collider) {
	WaitForSeconds(1);
	while(Floor.transform.position.y>= -4.9)
		Floor.transform.position.y -=0.7;
	Floor.transform.position.x-=1.1;
}
