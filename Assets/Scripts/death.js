import UnityEngine.SceneManagement;

function OnTriggerEnter (col: Collider) {
	var sceneCurrent = SceneManager.GetActiveScene().buildIndex;
	Time.timeScale = 0;
	deathmonitor.lifeCar -= 1;


	if (deathmonitor.lifeCar<=0) {
		SceneManager.LoadScene(3);
	} else {
		SceneManager.LoadScene(sceneCurrent);
	}

	Time.timeScale = 1;
	deathmonitor.time=60*2*20-200;
}

function Update () {
	
}
