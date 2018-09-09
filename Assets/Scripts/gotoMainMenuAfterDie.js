//import UnityEngine.SceneManagement;

function Start () {
	yield WaitForSeconds (5);
	deathmonitor.lifeCar = 3;
	Application.LoadLevel(0);
}

