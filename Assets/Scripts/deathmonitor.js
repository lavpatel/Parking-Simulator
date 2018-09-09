static var lifeCar : int = 3;
static var time : int = 60*20*2-200;
var lfPlr : int;
var lifeTextbox : GameObject;

function Start () {
	
}

function Update () {
	lfPlr = lifeCar;
	lifeTextbox.GetComponent.<UnityEngine.UI.Text>().text = "LIFE : " + lfPlr + "\n Time : " + time/100;
	time--;
	if(lifeCar<=0 || time<0){
		Application.LoadLevel(1);
	}
}
