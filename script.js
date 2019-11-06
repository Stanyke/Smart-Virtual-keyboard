// Get comment-box with it's id
let commentBox = document.getElementById('comment');


// icon for cap lock
let cAp_btn = document.getElementById('cAp_btn');
let cap_icON = document.getElementById('my_Cap_LocK');



// Functions below are written in es6 (javascript) arrow function

Q_makeit = () =>
{
	commentBox.focus(); // This is keep the comment box focused
	
	if(cAp_btn.className === "cAp_btn false") // Checks if cap-button is not enabled
	{
		var addToCommentValue = commentBox.value += 'q'; // Gets current value(s) in the comment-box before adding new value
	}
	else
	{
		var addToCommentValue = commentBox.value += 'Q';
	}
}


W_makeit = () =>
{
	commentBox.focus();
	
	if(cAp_btn.className === "cAp_btn false")
	{
		var addToCommentValue = commentBox.value += 'w';
	}
	else
	{
		var addToCommentValue = commentBox.value += 'W';
	}
}


E_makeit = () =>
{
	commentBox.focus();
	
	if(cAp_btn.className === "cAp_btn false")
	{
		var addToCommentValue = commentBox.value += 'e';
	}
	else
	{
		var addToCommentValue = commentBox.value += 'E';
	}
}


R_makeit = () =>
{
	commentBox.focus();
	
	if(cAp_btn.className === "cAp_btn false")
	{
		var addToCommentValue = commentBox.value += 'r';
	}
	else
	{
		var addToCommentValue = commentBox.value += 'R';
	}
}


T_makeit = () =>
{
	commentBox.focus();
	
	if(cAp_btn.className === "cAp_btn false")
	{
		var addToCommentValue = commentBox.value += 't';
	}
	else
	{
		var addToCommentValue = commentBox.value += 'T';
	}
}


Y_makeit = () =>
{
	commentBox.focus();
	
	if(cAp_btn.className === "cAp_btn false")
	{
		var addToCommentValue = commentBox.value += 'y';
	}
	else
	{
		var addToCommentValue = commentBox.value += 'Y';
	}
}


U_makeit = () =>
{
	commentBox.focus();
	
	if(cAp_btn.className === "cAp_btn false")
	{
		var addToCommentValue = commentBox.value += 'u';
	}
	else
	{
		var addToCommentValue = commentBox.value += 'u';
	}
}


I_makeit = () =>
{
	commentBox.focus();
	
	if(cAp_btn.className === "cAp_btn false")
	{
		var addToCommentValue = commentBox.value += 'i';
	}
	else
	{
		var addToCommentValue = commentBox.value += 'I';
	}
}


O_makeit = () =>
{
	commentBox.focus();
	
	if(cAp_btn.className === "cAp_btn false")
	{
		var addToCommentValue = commentBox.value += 'o';
	}
	else
	{
		var addToCommentValue = commentBox.value += 'O';
	}
}


P_makeit = () =>
{
	commentBox.focus();
	
	if(cAp_btn.className === "cAp_btn false")
	{
		var addToCommentValue = commentBox.value += 'p';
	}
	else
	{
		var addToCommentValue = commentBox.value += 'P';
	}
}


A_makeit = () =>
{
	commentBox.focus();
	
	if(cAp_btn.className === "cAp_btn false")
	{
		var addToCommentValue = commentBox.value += 'a';
	}
	else
	{
		var addToCommentValue = commentBox.value += 'A';
	}
}


S_makeit = () =>
{
	commentBox.focus();
	
	if(cAp_btn.className === "cAp_btn false")
	{
		var addToCommentValue = commentBox.value += 's';
	}
	else
	{
		var addToCommentValue = commentBox.value += 'S';
	}
}


D_makeit = () =>
{
	commentBox.focus();
	
	if(cAp_btn.className === "cAp_btn false")
	{
		var addToCommentValue = commentBox.value += 'd';
	}
	else
	{
		var addToCommentValue = commentBox.value += 'D';
	}
}


F_makeit = () =>
{
	commentBox.focus();
	
	if(cAp_btn.className === "cAp_btn false")
	{
		var addToCommentValue = commentBox.value += 'f';
	}
	else
	{
		var addToCommentValue = commentBox.value += 'F';
	}
}


G_makeit = () =>
{
	commentBox.focus();
	
	if(cAp_btn.className === "cAp_btn false")
	{
		var addToCommentValue = commentBox.value += 'g';
	}
	else
	{
		var addToCommentValue = commentBox.value += 'G';
	}
}


H_makeit = () =>
{
	commentBox.focus();
	
	if(cAp_btn.className === "cAp_btn false")
	{
		var addToCommentValue = commentBox.value += 'h';
	}
	else
	{
		var addToCommentValue = commentBox.value += 'H';
	}
}


J_makeit = () =>
{
	commentBox.focus();
	
	if(cAp_btn.className === "cAp_btn false")
	{
		var addToCommentValue = commentBox.value += 'j';
	}
	else
	{
		var addToCommentValue = commentBox.value += 'J';
	}
}


K_makeit = () =>
{
	commentBox.focus();
	
	if(cAp_btn.className === "cAp_btn false")
	{
		var addToCommentValue = commentBox.value += 'k';
	}
	else
	{
		var addToCommentValue = commentBox.value += 'K';
	}
}


L_makeit = () =>
{
	commentBox.focus();
	
	if(cAp_btn.className === "cAp_btn false")
	{
		var addToCommentValue = commentBox.value += 'l';
	}
	else
	{
		var addToCommentValue = commentBox.value += 'L';
	}
}


deLete_btn_makeit = () =>
{
	commentBox.focus();
	
	
	var commentBoxValue = commentBox.value; // Gets current comment-box value
	document.getElementById('comment').value = commentBoxValue.substring(0,commentBoxValue.length-1); // Removes last character from the string or value from the comment-box value
}


cAp_btn_makeit = () =>
{
	commentBox.focus();


	if(cAp_btn.className === "cAp_btn false") // Checks if cap-button's class value is false which is default
	{
		cAp_btn.className = 'cAp_btn truth'; // Changes the class value to cAp_btn truth
		cap_icON.style.color = 'white'; // Changes the cap-button's icon to white instead of default 'transparent'
		

		var letter_Q = document.getElementById('letter_Q').innerHTML = 'Q'; // This changes keyboard values are cap button is being toggled
		var letter_W = document.getElementById('letter_W').innerHTML = 'W';
		var letter_E = document.getElementById('letter_E').innerHTML = 'E';
		var letter_R = document.getElementById('letter_R').innerHTML = 'R';
		var letter_T = document.getElementById('letter_T').innerHTML = 'T';
		var letter_Y = document.getElementById('letter_Y').innerHTML = 'Y';
		var letter_U = document.getElementById('letter_U').innerHTML = 'U';
		var letter_I = document.getElementById('letter_I').innerHTML = 'I';
		var letter_O = document.getElementById('letter_O').innerHTML = 'O';
		var letter_P = document.getElementById('letter_P').innerHTML = 'P';
		var letter_A = document.getElementById('letter_A').innerHTML = 'A';
		var letter_S = document.getElementById('letter_S').innerHTML = 'S';
		var letter_D = document.getElementById('letter_D').innerHTML = 'D';
		var letter_F = document.getElementById('letter_F').innerHTML = 'F';
		var letter_G = document.getElementById('letter_G').innerHTML = 'G';
		var letter_H = document.getElementById('letter_H').innerHTML = 'H';
		var letter_J = document.getElementById('letter_J').innerHTML = 'J';
		var letter_K = document.getElementById('letter_K').innerHTML = 'K';
		var letter_L = document.getElementById('letter_L').innerHTML = 'L';
		var letter_Z = document.getElementById('letter_Z').innerHTML = 'Z';
		var letter_X = document.getElementById('letter_X').innerHTML = 'X';
		var letter_C = document.getElementById('letter_C').innerHTML = 'C';
		var letter_V = document.getElementById('letter_V').innerHTML = 'V';
		var letter_B = document.getElementById('letter_B').innerHTML = 'B';
		var letter_N = document.getElementById('letter_N').innerHTML = 'N';
		var letter_M = document.getElementById('letter_M').innerHTML = 'M';
	}
	else
	{
		cAp_btn.className = 'cAp_btn false';
		cap_icON.style.color = 'transparent';


		var letter_Q = document.getElementById('letter_Q').innerHTML = 'q';
		var letter_W = document.getElementById('letter_W').innerHTML = 'w';
		var letter_E = document.getElementById('letter_E').innerHTML = 'e';
		var letter_R = document.getElementById('letter_R').innerHTML = 'r';
		var letter_T = document.getElementById('letter_T').innerHTML = 't';
		var letter_Y = document.getElementById('letter_Y').innerHTML = 'y';
		var letter_U = document.getElementById('letter_U').innerHTML = 'u';
		var letter_I = document.getElementById('letter_I').innerHTML = 'i';
		var letter_O = document.getElementById('letter_O').innerHTML = 'o';
		var letter_P = document.getElementById('letter_P').innerHTML = 'p';
		var letter_A = document.getElementById('letter_A').innerHTML = 'a';
		var letter_S = document.getElementById('letter_S').innerHTML = 's';
		var letter_D = document.getElementById('letter_D').innerHTML = 'd';
		var letter_F = document.getElementById('letter_F').innerHTML = 'f';
		var letter_G = document.getElementById('letter_G').innerHTML = 'g';
		var letter_H = document.getElementById('letter_H').innerHTML = 'h';
		var letter_J = document.getElementById('letter_J').innerHTML = 'j';
		var letter_K = document.getElementById('letter_K').innerHTML = 'k';
		var letter_L = document.getElementById('letter_L').innerHTML = 'l';
		var letter_Z = document.getElementById('letter_Z').innerHTML = 'z';
		var letter_X = document.getElementById('letter_X').innerHTML = 'x';
		var letter_C = document.getElementById('letter_C').innerHTML = 'c';
		var letter_V = document.getElementById('letter_V').innerHTML = 'v';
		var letter_B = document.getElementById('letter_B').innerHTML = 'b';
		var letter_N = document.getElementById('letter_N').innerHTML = 'n';
		var letter_M = document.getElementById('letter_M').innerHTML = 'm';
	}
}


Z_makeit = () =>
{
	commentBox.focus();
	
	if(cAp_btn.className === "cAp_btn false")
	{
		var addToCommentValue = commentBox.value += 'z';
	}
	else
	{
		var addToCommentValue = commentBox.value += 'Z';
	}
}


X_makeit = () =>
{
	commentBox.focus();
	
	if(cAp_btn.className === "cAp_btn false")
	{
		var addToCommentValue = commentBox.value += 'x';
	}
	else
	{
		var addToCommentValue = commentBox.value += 'X';
	}
}


C_makeit = () =>
{
	commentBox.focus();
	
	if(cAp_btn.className === "cAp_btn false")
	{
		var addToCommentValue = commentBox.value += 'c';
	}
	else
	{
		var addToCommentValue = commentBox.value += 'C';
	}
}


V_makeit = () =>
{
	commentBox.focus();
	
	if(cAp_btn.className === "cAp_btn false")
	{
		var addToCommentValue = commentBox.value += 'v';
	}
	else
	{
		var addToCommentValue = commentBox.value += 'V';
	}
}


B_makeit = () =>
{
	commentBox.focus();
	
	if(cAp_btn.className === "cAp_btn false")
	{
		var addToCommentValue = commentBox.value += 'b';
	}
	else
	{
		var addToCommentValue = commentBox.value += 'B';
	}
}


N_makeit = () =>
{
	commentBox.focus();
	
	if(cAp_btn.className === "cAp_btn false")
	{
		var addToCommentValue = commentBox.value += 'n';
	}
	else
	{
		var addToCommentValue = commentBox.value += 'N';
	}
}


M_makeit = () =>
{
	commentBox.focus();
	
	if(cAp_btn.className === "cAp_btn false")
	{
		var addToCommentValue = commentBox.value += 'm';
	}
	else
	{
		var addToCommentValue = commentBox.value += 'M';
	}
}


enTer_btn_makeit = () =>
{
	document.getElementById('submit_button').click(); // Gets id of submit-button and clicks on it
}


// Number AND Symbols

nuMber_symbOl_makeit = () =>
{
	commentBox.focus();
	
	var alphaKeyBoard_User = document.getElementById('alphabet_keys'); // Gets id of all alphabet keys
	var numericKeyBoard_User = document.getElementById('numeric_symbols_keys'); // Gets id of all numeric and symbol keys
	
	alphaKeyBoard_User.style.display = ('none');
	numericKeyBoard_User.style.display = ('block');
}


smiLey_symbOl_makeit = () =>
{
	commentBox.focus();
	
	commentBox.value += '&#xf118';
}


Space_bTn_makeit = () =>
{
	commentBox.focus();
	
	commentBox.value += ' ';
}


fullStop_bTn_makeit = () =>
{
	commentBox.focus();
	
	commentBox.value += '.';
}


number1 = () =>
{
	commentBox.focus();
	
	commentBox.value += '1';
}


number2 = () =>
{
	commentBox.focus();
	
	commentBox.value += '2';
}


number3 = () =>
{
	commentBox.focus();
	
	commentBox.value += '3';
}


number4 = () =>
{
	commentBox.focus();
	
	commentBox.value += '4';
}


number5 = () =>
{
	commentBox.focus();
	
	commentBox.value += '5';
}


number6 = () =>
{
	commentBox.focus();
	
	commentBox.value += '6';
}


number7 = () =>
{
	commentBox.focus();
	
	commentBox.value += '7';
}


number8 = () =>
{
	commentBox.focus();
	
	commentBox.value += '8';
}


number9 = () =>
{
	commentBox.focus();
	
	commentBox.value += '9';
}


number0 = () =>
{
	commentBox.focus();
	
	commentBox.value += '0';
}


firstsymbol1 = () =>
{
	commentBox.focus();
	
	commentBox.value += '~';
}


firstsymbol2 = () =>
{
	commentBox.focus();
	
	commentBox.value += '`';
}


firstsymbol3 = () =>
{
	commentBox.focus();
	
	commentBox.value += '!';
}


firstsymbol4 = () =>
{
	commentBox.focus();
	
	commentBox.value += '@';
}


firstsymbol5 = () =>
{
	commentBox.focus();
	
	commentBox.value += '#';
}


firstsymbol6 = () =>
{
	commentBox.focus();
	
	commentBox.value += '£';
}


firstsymbol7 = () =>
{
	commentBox.focus();
	
	commentBox.value += '€';
}


firstsymbol8 = () =>
{
	commentBox.focus();
	
	commentBox.value += '$';
}


firstsymbol9 = () =>
{
	commentBox.focus();
	
	commentBox.value += '¢';
}


firstsymbol10 = () =>
{
	commentBox.focus();
	
	commentBox.value += '¥';
}


secondsymbol1 = () =>
{
	commentBox.focus();
	
	commentBox.value += '§';
}


secondsymbol2 = () =>
{
	commentBox.focus();
	
	commentBox.value += '%';
}


secondsymbol3 = () =>
{
	commentBox.focus();
	
	commentBox.value += '°';
}


secondsymbol4 = () =>
{
	commentBox.focus();
	
	commentBox.value += '^';
}


secondsymbol5 = () =>
{
	commentBox.focus();
	
	commentBox.value += '&';
}


secondsymbol6 = () =>
{
	commentBox.focus();
	
	commentBox.value += '*';
}


secondsymbol7 = () =>
{
	commentBox.focus();
	
	commentBox.value += '(';
}


secondsymbol8 = () =>
{
	commentBox.focus();
	
	commentBox.value += ')';
}


secondsymbol9 = () =>
{
	commentBox.focus();
	
	commentBox.value += '-';
}


secondsymbol10 = () =>
{
	commentBox.focus();
	
	commentBox.value += '_';
}


thirdsymbol1 = () =>
{
	commentBox.focus();
	
	commentBox.value += '+';
}


thirdsymbol2 = () =>
{
	commentBox.focus();
	
	commentBox.value += '=';
}


thirdsymbol3 = () =>
{
	commentBox.focus();
	
	commentBox.value += '{';
}


thirdsymbol4 = () =>
{
	commentBox.focus();
	
	commentBox.value += '}';
}


thirdsymbol5 = () =>
{
	commentBox.focus();
	
	commentBox.value += '[';
}


thirdsymbol6 = () =>
{
	commentBox.focus();
	
	commentBox.value += ']';
}


thirdsymbol7 = () =>
{
	commentBox.focus();
	
	commentBox.value += '|';
}


thirdsymbol8 = () =>
{
	commentBox.focus();
	
	commentBox.value += String.raw`\\`; // Adds double backward slash since ne cant just be added
	
	var newCommentBoxValue = commentBox.value; // Gets current comment-box's value after addition
	document.getElementById('comment').value = newCommentBoxValue.substring(0,newCommentBoxValue.length-1); // Removes last character from comment-box's value to leave just one backward slash
}


thirdsymbol9 = () =>
{
	commentBox.focus();
	
	commentBox.value += '/';
}


thirdsymbol10 = () =>
{
	commentBox.focus();
	
	commentBox.value += ':';
}


fourthalphabet_makeit = () =>
{
	commentBox.focus();
	
	var alphaKeyBoard_User = document.getElementById('alphabet_keys'); // Gets id of all alphabet keys
	var numericKeyBoard_User = document.getElementById('numeric_symbols_keys'); // Gets id of all numeric and symbol keys
	
	alphaKeyBoard_User.style.display = ('block');
	numericKeyBoard_User.style.display = ('none');
}


fourthsymbol1 = () =>
{
	commentBox.focus();
	
	commentBox.value += ';';
}


fourthsymbol2 = () =>
{
	commentBox.focus();
	
	commentBox.value += '"';
}


fourthsymbol3 = () =>
{
	commentBox.focus();
	
	commentBox.value += "'";
}


fourthsymbol4 = () =>
{
	commentBox.focus();
	
	commentBox.value += "<";
}


fourthsymbol5 = () =>
{
	commentBox.focus();
	
	commentBox.value += ">";
}


fourthsymbol6 = () =>
{
	commentBox.focus();
	
	commentBox.value += ",";
}


fourthsymbol7 = () =>
{
	commentBox.focus();
	
	commentBox.value += ".";
}


fourthsymbol8 = () =>
{
	commentBox.focus();
	
	commentBox.value += "?";
}
