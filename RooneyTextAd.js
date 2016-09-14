//things to do//
//find way to log all comments to a div on screen//
//check if player is still alive//
//get the potion and bomb to work//
//set up attack buttons//
//story exposition//
//display enemy stats//



//-----------------------------------------Player info------------------------------------------//

var alive = true;
var player = {
	hp: 40,
	enemiesKilled: 0
};
var inventory = {};
inventory.sword = {
	count: 12
};

inventory.lance = {
	count: 10
};

inventory.axe = {
	count: 8
};

inventory.potion = {
	count: 3
};

inventory.bomb = {
	count: 2
};

//-------------------------------------------Enemies-----------------------------------------------//

function enemy(hp, killsNeeded, weapon, damage, accuracy) {
	this.hp = hp;
	this.killsNeeded = killsNeeded;
	this.weapon = weapon;
	this.damage = damage;
	this.accuracy = accuracy;
}

var enemy1 = new enemy(8, 0, "SWORD", 2, "80%");
var enemy2 = new enemy(8, 1, "LANCE", 4, "65%");
var enemy3 = new enemy(8, 1, "AXE", 6, "50%");
var enemy4 = new enemy(8, 2, "AXE", 6, "50%");
var enemy5 = new enemy(8, 2, "SWORD", 2, "80%");
var enemy6 = new enemy(8, 2, "LANCE", 4, "65%");
var enemy7 = new enemy(8, 2, "SWORD", 2, "80%");
var enemy8 = new enemy(8, 3, "LANCE", 4, "65%");
var enemy9 = new enemy(8, 3, "AXE", 6, "50%");
var enemy10 = new enemy(8, 3, "LANCE", 4, "65%");
var enemy11 = new enemy(8, 3, "AXE", 6, "50%");
var enemy12 = new enemy(26, 4, "HAMMER", 12, "60%");
var enemy13 = new enemy(18, 4, "LONGSWORD", 9, "80%");
var enemy14 = new enemy(30, 5, "SCYTHE", 14, "65%");


//----------------------------------------The enemies attack-----------------------------------------------//
var enemyAttack = function(enemyNum) {
	if(enemyNum.weapon === "SWORD") {
		if(Math.random() > .2) {
			player.hp -= 2;
			addTextToLog("Enemy did 2 damage!");
			changeHpButton();
			if(player.hp < 1) {
				addTextToLog("You have been killed!");
			}
		}
		else {
			addTextToLog("Enemy Missed!");
		}
	}
	else if(enemyNum.weapon === "LANCE") {
		if(Math.random() > .35) {
			player.hp -= 4;
			addTextToLog("Enemy did 4 damage!");
			changeHpButton();
		}
		else {
			addTextToLog("Enemy Missed!");
		}
	}
	else if(enemyNum.weapon === "AXE") {
		if(Math.random() > .5) {
			player.hp -= 6;
			addTextToLog("Enemy did 6 damage!");
			changeHpButton();
		}
		else {
			addTextToLog("Enemy Missed!");
		}
	}
	else if(enemyNum.weapon === "HAMMER") {
		if(Math.random() > .4) {
			player.hp -= 12;
			addTextToLog("Enemy did 12 damage!");
			changeHpButton();
		}
		else {
			addTextToLog("Enemy Missed!");
		}
	}
	else if(enemyNum.weapon === "LONGSWORD") {
		if(Math.random() > .2) {
			player.hp -= 9;
			addTextToLog("Enemy did 10 damage!");
			changeHpButton();
		}
		else {
			addTextToLog("Enemy Missed!");
		}
	}
	else {
		if(Math.random() > .35) {
			player.hp -= 14;
			addTextToLog("Enemy did 14 damage!");
			changeHpButton();
		}
		else {
			addTextToLog("Enemy Missed!");
		}
	}
};

//----------------------------------------Attacks/actions for player-------------------------------------------//

var weaponType;


	var fight = function(enemyNum) { 
		if(player.hp > 1) {
			if(player.enemiesKilled === enemyNum.killsNeeded) {
				if(weaponType === "SWORD") 
					if(inventory.sword.count >= 1)
						if(Math.random() > .2){
							enemyNum.hp -= 2;
							addTextToLog("You dealt 2 damage to the enemy!");
							addTextToLog("Enemy has " + enemyNum.hp + " hp remaining.");
							inventory.sword.count -= 1;
							changeSwordButton();
							if(enemyNum.hp < 1){
								clearTextLog();
								addTextToLog("You dealt 2 damage to the enemy!");
								addTextToLog("You have defeated the enemy!");
								player.enemiesKilled += 1;
								if(player.enemiesKilled === 6) {
									addTextToLog("Congratulations! You have defeated the king and saved your homeland. Your village " +
											"welcomes you back as a hero, and soon you are able to return to your normal life in " +
											"your normal village. Until theres another invasion that is... (click the 'Reset Game' button " +
											"to play again.)");
								}
							}
							else {
								enemyAttack(enemyNum);
								color();
							}//End of enemy attack//
						}
						else{
							addTextToLog("You Missed!");
							enemyAttack(enemyNum);
							color();
						}
					else {
						addTextToLog("This weapon has no more uses.");
					}
				
				else if(weaponType === "LANCE") 
					if(inventory.lance.count >= 1)
						if(Math.random() > .35){
							enemyNum.hp -= 4;
							addTextToLog("You dealt 4 damage to the enemy!");
							addTextToLog("Enemy has " + enemyNum.hp + " hp remaining.");
							inventory.lance.count -= 1;
							changeLanceButton();
							if(enemyNum.hp < 1){
								clearTextLog();
								addTextToLog("You dealt 4 damage to the enemy!");
								addTextToLog("You have defeated the enemy!");
								player.enemiesKilled += 1;
								if(player.enemiesKilled === 6) {
									addTextToLog("Congratulations! You have defeated the king and saved your homeland. Your village " +
											"welcomes you back as a hero, and soon you are able to return to your normal life in " +
											"your normal village. Until theres another invasion that is... (click the 'Reset Game' button " +
											"to play again.)");
								}
							}
							else {
								enemyAttack(enemyNum);
								color();
							}//End of enemy attack//
						}
						else{
							addTextToLog("You Missed!");
							enemyAttack(enemyNum);
							color();
						}
					else {
						addTextToLog("This weapon has no more uses.")
					}
					
				else if(weaponType === "AXE")
					if(inventory.axe.count >= 1)
						if(Math.random() > .5){
							enemyNum.hp -= 6;
							addTextToLog("You dealt 6 damage to the enemy!");
							addTextToLog("Enemy has " + enemyNum.hp + " hp remaining.");
							inventory.axe.count -= 1;
							changeAxeButton();
							if(enemyNum.hp < 1){
								clearTextLog();
								addTextToLog("You dealt 6 damage to the enemy!");
								addTextToLog("You have defeated the enemy!");
								player.enemiesKilled += 1;
								if(player.enemiesKilled === 6) {
									addTextToLog("Congratulations! You have defeated the king and saved your homeland. Your village " +
											"welcomes you back as a hero, and soon you are able to return to your normal life in " +
											"your normal village. Until theres another invasion that is... (click the 'Reset Game' button " +
											"to play again.)");
								}
							}
							else {
								enemyAttack(enemyNum);
								color();
							}//End of enemy attack//
							}
						else{
							addTextToLog("You Missed!");
							enemyAttack(enemyNum);
							color();
						}
					else {
						addTextToLog("This weapon has no more uses.")
					}
				
				else if(weaponType === "BOMB") //Bomb//
					if(inventory.bomb.count > 0)
						if(Math.random() > .000000001){
							enemyNum.hp -= 8;
							addTextToLog("You dealt 8 damage to the enemy!");
							addTextToLog("Enemy has " + enemyNum.hp + " hp remaining.");
							inventory.bomb.count -= 1;
							changeBombButton();
							if(enemyNum.hp < 1){
								clearTextLog();
								addTextToLog("You dealt 8 damage to the enemy!");
								addTextToLog("You have defeated the enemy!");
								player.enemiesKilled += 1;
								if(player.enemiesKilled === 6) {
									addTextToLog("Congratulations! You have defeated the king and saved your homeland. Your village " +
											"welcomes you back as a hero, and soon you are able to return to your normal life in " +
											"your normal village. Until theres another invasion that is... (click the 'Reset Game' button " +
											"to play again.)");
								}
							}
							else {
								enemyAttack(enemyNum);
								color();
							}//End of enemy attack//
						}
					else {
						
					}
					else{
						addTextToLog("This weapon has no more uses.");
					}
			} //End of fight round//
			
			else if(player.enemiesKilled < enemyNum.killsNeeded) {
				addTextToLog("You haven't defeated enough enemies to challenge this enemy!")
			}
			else if(player.enemiesKilled > enemyNum.killsNeeded) {
				addTextToLog("You don't need to fight this enemy!")
			}
			/*
			else { //remains of a trouble shooting method//
				console.log("something else!");
				console.log(weaponType);
				console.log(player.enemiesKilled);
				console.log(enemyNum.killsNeeded);
			}
			*/
		}
		else{
			addTextToLog("You have been killed!");
			var playAgain = alert("Click the 'Reset Game' button to play again.")
		}
	}

//-----------------------------------------------HP restore-----------------------------------------------//
	
	var hpCheck = function() {
		if(inventory.potion.count > 0) {
				player.hp += 30;
				inventory.potion.count -= 1;
				changePotionButton();
				changeHpButton();
				color();
		}
		else{
			addTextToLog("You have no more potions!")
		}
	}
	



//----------------------------------User interface (buttons) and info display-------------------------------------//

var changeLanceButton = function(){
	var str = document.getElementById("lanceButton").innerHTML;
	str = "Lance " + inventory.lance.count;
	document.getElementById("lanceButton").innerHTML = str;
}
var changeSwordButton = function(){
	var str = document.getElementById("swordButton").innerHTML;
	str = "Sword " + inventory.sword.count;
	document.getElementById("swordButton").innerHTML = str;
}
var changeAxeButton = function(){
	var str = document.getElementById("axeButton").innerHTML;
	str = "Axe " + inventory.axe.count;
	document.getElementById("axeButton").innerHTML = str;
}
var changeBombButton = function(){
	var str = document.getElementById("bombButton").innerHTML;
	str = "Bomb " + inventory.bomb.count;
	document.getElementById("bombButton").innerHTML = str;
}
var changePotionButton = function(){
	var str = document.getElementById("elixir").innerHTML;
	str = "Elixir " + inventory.potion.count;
	document.getElementById("elixir").innerHTML = str;
}
var changeHpButton = function(){
	var str = document.getElementById("hpRemaining").innerHTML;
	str = "HP: " + player.hp;
	document.getElementById("hpRemaining").innerHTML = str;
}


var color = function(){
	if(player.hp < 15){
		document.getElementById("hpRemaining").style.background= "#ff1a1a";
	}
	else {
		document.getElementById("hpRemaining").style.background= "#009900";
	}
}

var addTextToLog = function(text) {
	var str = document.getElementById("textLogText").innerHTML;
	str = document.getElementById("textLogText").innerHTML += text;
	str = document.getElementById("textLogText").innerHTML += "<br>";
	document.getElementById("textLogText").innerHTML = str;
}

var clearTextLog = function() {
	document.getElementById("textLogText").innerHTML = "";
}

var statsDisplay = function(enemyNum) {
	var hpE = "HP: " + enemyNum.hp;
	var weaponE = "Weapon: " + enemyNum.weapon;
	var damageE = "Damage: " + enemyNum.damage;
	var accuracyE = "Accuracy: " + enemyNum.accuracy;

	document.getElementById("statBox").innerHTML += hpE;
	document.getElementById("statBox").innerHTML += "<br>";
	document.getElementById("statBox").innerHTML += weaponE;
	document.getElementById("statBox").innerHTML += "<br>";
	document.getElementById("statBox").innerHTML += damageE;
	document.getElementById("statBox").innerHTML += "<br>";
	document.getElementById("statBox").innerHTML += accuracyE;
}

var statsDisplayClear = function() {
	document.getElementById("statBox").innerHTML = "";
}

//remains of a button styling attempt
//var choiceButtonHighlight = function() {
//	document.getElementsByClassName("changeWeaponButton").style.background = "red";
//}





