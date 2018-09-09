using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class gamePause : MonoBehaviour {
	public Transform canvas;
	
	// Update is called once per frame
	public void Update () {
		if (Input.GetKeyDown (KeyCode.Escape)) {
			if (!canvas.gameObject.activeInHierarchy) {
				canvas.gameObject.SetActive (true);
				Time.timeScale = 0;
			} else {
				canvas.gameObject.SetActive (false);
				Time.timeScale = 1;	
			}
		}
	}
	public void closeMenuPause() {
		canvas.gameObject.SetActive (false);
	}
}
