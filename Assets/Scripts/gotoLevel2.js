import UnityEngine.SceneManagement;

function Start () {
	
}

function OnTriggerEnter (col: Collider) {
    deathmonitor.time=20*60*2-200;
	var sceneCurrent = SceneManager.GetActiveScene().buildIndex;
	SceneManager.LoadScene(sceneCurrent+1);
}