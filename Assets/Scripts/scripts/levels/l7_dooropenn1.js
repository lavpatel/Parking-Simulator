var Door : Transform;
var isOpen = false;
var  count = 0;
function OnTriggerExit (col: Collider) {
	if(!isOpen && count>=3){
		Door.transform.position.y-=18;
		isOpen = true;
	}else{
		count++;
	}
}
