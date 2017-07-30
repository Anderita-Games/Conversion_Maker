#pragma strict
import System;

var Input_Number : UnityEngine.UI.InputField;
var Input_Conversion : UnityEngine.UI.Dropdown;
var Export_Conversion : UnityEngine.UI.Dropdown;
var Export_Number : UnityEngine.UI.Text;
var Converted_Number : float;

function Start () {
	//Debug.Log(float.Parse("5") / 12);
}

function Update () {
	Convert();
	Export_Number.text = (Mathf.Round(Converted_Number * 100f) / 100f).ToString();
	Debug.Log(Input_Conversion.value);
}

function Convert () {
	if (Input_Conversion.value == 0) {
		if (Export_Conversion.value == 0) {
			Converted_Number = float.Parse(Input_Number.text) * 1;
		}else if (Export_Conversion.value == 1) {
			Converted_Number = float.Parse(Input_Number.text) / 12;
		}else if (Export_Conversion.value == 2) {
			Converted_Number = float.Parse(Input_Number.text) / 36;
		}else if (Export_Conversion.value == 3) {
			Converted_Number = float.Parse(Input_Number.text) / 198;
		}else if (Export_Conversion.value == 4) {
			Converted_Number = float.Parse(Input_Number.text) / 7920.02;
		}else if (Export_Conversion.value == 5) {
			Converted_Number = float.Parse(Input_Number.text) / 63360;
		}else if (Export_Conversion.value == 6) {
			Converted_Number = float.Parse(Input_Number.text) / 218740;
		}else if (Export_Conversion.value == 7) {
			Converted_Number = float.Parse(Input_Number.text) / 72913.4;
		}
	}else if (Input_Conversion.value == 1) {
		if (Export_Conversion.value == 0) {
			Converted_Number = float.Parse(Input_Number.text) * 12;
		}else if (Export_Conversion.value == 1) {
			Converted_Number = float.Parse(Input_Number.text) * 1;
		}else if (Export_Conversion.value == 2) {
			Converted_Number = float.Parse(Input_Number.text) / 3;
		}else if (Export_Conversion.value == 3) {
			Converted_Number = float.Parse(Input_Number.text) / 16.5;
		}else if (Export_Conversion.value == 4) {
			Converted_Number = float.Parse(Input_Number.text) / 660.001;
		}else if (Export_Conversion.value == 5) {
			Converted_Number = float.Parse(Input_Number.text) / 5280;
		}else if (Export_Conversion.value == 6) {
			Converted_Number = float.Parse(Input_Number.text) / 18228.3;
		}else if (Export_Conversion.value == 7) {
			Converted_Number = float.Parse(Input_Number.text) / 6076.12;
		}
	}else if (Input_Conversion.value == 2) {
		if (Export_Conversion.value == 0) {
			Converted_Number = float.Parse(Input_Number.text) * 36;
		}else if (Export_Conversion.value == 1) {
			Converted_Number = float.Parse(Input_Number.text) * 3;
		}else if (Export_Conversion.value == 2) {
			Converted_Number = float.Parse(Input_Number.text) * 1;
		}else if (Export_Conversion.value == 3) {
			Converted_Number = float.Parse(Input_Number.text) / 5.5;
		}else if (Export_Conversion.value == 4) {
			Converted_Number = float.Parse(Input_Number.text) / 220;
		}else if (Export_Conversion.value == 5) {
			Converted_Number = float.Parse(Input_Number.text) / 1760;
		}else if (Export_Conversion.value == 6) {
			Converted_Number = float.Parse(Input_Number.text) / 6076.12;
		}else if (Export_Conversion.value == 7) {
			Converted_Number = float.Parse(Input_Number.text) / 2025.37;
		}
	}else if (Input_Conversion.value == 3) {
		if (Export_Conversion.value == 0) {
			Converted_Number = float.Parse(Input_Number.text) * 198;
		}else if (Export_Conversion.value == 1) {
			Converted_Number = float.Parse(Input_Number.text) * 16.5;
		}else if (Export_Conversion.value == 2) {
			Converted_Number = float.Parse(Input_Number.text) * 5.5;
		}else if (Export_Conversion.value == 3) {
			Converted_Number = float.Parse(Input_Number.text) * 1;
		}else if (Export_Conversion.value == 4) {
			Converted_Number = float.Parse(Input_Number.text) / 40.0001;
		}else if (Export_Conversion.value == 5) {
			Converted_Number = float.Parse(Input_Number.text) / 320;
		}else if (Export_Conversion.value == 6) {
			Converted_Number = float.Parse(Input_Number.text) / 1104.75;
		}else if (Export_Conversion.value == 7) {
			Converted_Number = float.Parse(Input_Number.text) / 368.249;
		}
	}else if (Input_Conversion.value == 4) {
		if (Export_Conversion.value == 0) {
			Converted_Number = float.Parse(Input_Number.text) * 7920.02;
		}else if (Export_Conversion.value == 1) {
			Converted_Number = float.Parse(Input_Number.text) * 660.001;
		}else if (Export_Conversion.value == 2) {
			Converted_Number = float.Parse(Input_Number.text) * 220;
		}else if (Export_Conversion.value == 3) {
			Converted_Number = float.Parse(Input_Number.text) * 40.0001;
		}else if (Export_Conversion.value == 4) {
			Converted_Number = float.Parse(Input_Number.text) * 1;
		}else if (Export_Conversion.value == 5) {
			Converted_Number = float.Parse(Input_Number.text) / 7.99998;
		}else if (Export_Conversion.value == 6) {
			Converted_Number = float.Parse(Input_Number.text) / 27.6187;
		}else if (Export_Conversion.value == 7) {
			Converted_Number = float.Parse(Input_Number.text) / 9.20622;
		}
	}else if (Input_Conversion.value == 5) {
		if (Export_Conversion.value == 0) {
			Converted_Number = float.Parse(Input_Number.text) * 63360;
		}else if (Export_Conversion.value == 1) {
			Converted_Number = float.Parse(Input_Number.text) * 5280;
		}else if (Export_Conversion.value == 2) {
			Converted_Number = float.Parse(Input_Number.text) * 1760;
		}else if (Export_Conversion.value == 3) {
			Converted_Number = float.Parse(Input_Number.text) * 320;
		}else if (Export_Conversion.value == 4) {
			Converted_Number = float.Parse(Input_Number.text) * 7.99998;
		}else if (Export_Conversion.value == 5) {
			Converted_Number = float.Parse(Input_Number.text) * 1;
		}else if (Export_Conversion.value == 6) {
			Converted_Number = float.Parse(Input_Number.text) * 3.45234;
		}else if (Export_Conversion.value == 7) {
			Converted_Number = float.Parse(Input_Number.text) * 1.15078;
		}
	}else if (Input_Conversion.value == 6) {
		if (Export_Conversion.value == 0) {
			Converted_Number = float.Parse(Input_Number.text) * 218740;
		}else if (Export_Conversion.value == 1) {
			Converted_Number = float.Parse(Input_Number.text) * 18228.3;
		}else if (Export_Conversion.value == 2) {
			Converted_Number = float.Parse(Input_Number.text) * 6076.12;
		}else if (Export_Conversion.value == 3) {
			Converted_Number = float.Parse(Input_Number.text) * 1104.75;
		}else if (Export_Conversion.value == 4) {
			Converted_Number = float.Parse(Input_Number.text) * 27.6187;
		}else if (Export_Conversion.value == 5) {
			Converted_Number = float.Parse(Input_Number.text) * 3.45234;
		}else if (Export_Conversion.value == 6) {
			Converted_Number = float.Parse(Input_Number.text) * 1;
		}else if (Export_Conversion.value == 7) {
			Converted_Number = float.Parse(Input_Number.text) * 3;
		}
	}else if (Input_Conversion.value == 7) {
		if (Export_Conversion.value == 0) {
			Converted_Number = float.Parse(Input_Number.text) * 72913.4;
		}else if (Export_Conversion.value == 1) {
			Converted_Number = float.Parse(Input_Number.text) * 6076.12;
		}else if (Export_Conversion.value == 2) {
			Converted_Number = float.Parse(Input_Number.text) * 2025.37;
		}else if (Export_Conversion.value == 3) {
			Converted_Number = float.Parse(Input_Number.text) * 368.249;
		}else if (Export_Conversion.value == 4) {
			Converted_Number = float.Parse(Input_Number.text) * 9.20622;
		}else if (Export_Conversion.value == 5) {
			Converted_Number = float.Parse(Input_Number.text) * 1.15078;
		}else if (Export_Conversion.value == 6) {
			Converted_Number = float.Parse(Input_Number.text) / 3;
		}else if (Export_Conversion.value == 7) {
			Converted_Number = float.Parse(Input_Number.text) * 1;
		}
	}
}
