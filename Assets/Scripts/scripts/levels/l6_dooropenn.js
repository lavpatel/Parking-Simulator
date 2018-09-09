var Door : Transform;
var isOpen = false;
function OnTriggerExit (col: Collider) {
	if(!isOpen){
		Door.transform.position.y-=11;
		isOpen = true;
	}
}
