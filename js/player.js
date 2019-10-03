//player Object
//many instances with constructor for all classes!!!
//Properties und Methode for the player, Speed Health und Meth for Attack and moves

//creat this here that we can acces the object fromm the gameManager
//very important to declair it here for the global scop so it´s availabel everywhere
//no we can use it everywhere
let player;

function Player (classType, health, mana, strength,agility,speed){
	//Only Player Objects here ++ information abaut class choosen
	this.classType = classType;
	this.health = health;
	this.mana = mana;
	this.strength = strength;
	this.agility = agility;
	this.speed = speed
}
// Actions for the player
let PlayerMoves1 = {

	run : function(){
		let getPlayerSpeed = player.speed;
		let getPlayerAgility = player.agility;
		console.log("Hallo")

		chooseRunRandom = Math.floor(Math.random() * 600) +1;
		getDodge = getPlayerSpeed + getPlayerAgility;
		console.log(getDodge);
		console.log(chooseRunRandom);
			if(chooseRunRandom <= getDodge){
				alert("You get away")
				settings.setPreFight(this.classType);
			}else{
				alert("You can´t get away, you lose 10HP")
				player.health -= 10;
				getPlayerHealth.innerHTML = 'Health: ' + player.health;
				if (player.health <= 0) {
					alert("You lose! Refresh brooser to play again.");
				getPlayerHealth.innerHTML = 'Health: ' + player.health;
				getPlayerHealth.innerHTML = 'Health: 0';			
			}
		}
	}
}
let PlayerMoves = {

	calcAttack : function(){
		//who attacks first?
		let getPlayerSpeed = player.speed;
		let getEnemySpeed  = enemy.speed;

		//player attacks with this function
	let playerAttack = function(){
	//if player has mana attack is stronger
	let calcBaseDamage;
	if(player.mana > 0){
		calcBaseDamage = player.strength * player.mana / 1000;
	}else{
				calcBaseDamage = player.strength * player.agility / 1000;

	}
	let offsetDamage = Math.floor(Math.random() * Math.floor(10));
	let calcOutputDamage = calcBaseDamage + offsetDamage;
	//Number of hits +1 for min 1 attack
	let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) /2) + 1;
	//array for Infomation 
	let attackValues = [calcOutputDamage, numberOfHits]
	return attackValues;
	}
	//Enemy attacks with this function
	let enemyAttack = function(){
	//if player has mana attack is stronger
	let calcBaseDamage;
	if(enemy.mana > 0){
		calcBaseDamage = enemy.strength * enemy.mana / 1000;
	}else{
				calcBaseDamage = enemy.strength * enemy.agility / 1000;

	}
	let offsetDamage = Math.floor(Math.random() * Math.floor(10));
	let calcOutputDamage = calcBaseDamage + offsetDamage;
	//Number of hits +1 for min 1 attack
	let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10) /2) + 1;
	//array for Infomation 
	let attackValues = [calcOutputDamage, numberOfHits]
	return attackValues;
	}
	//get Health form Enemy and Player and get new value of health
	let getPlayerHealth = document.querySelector(".health-player");
	let getEnemyHealth = document.querySelector(".health-enemy");
	//who is faster, the faster char attack first
	//initiate attacks!
	if(getPlayerSpeed >= getEnemySpeed){
		let playerAttackValues = playerAttack();
		//calculatin total Damage get dmg and totalHealth - dmg
		let totalDmage = playerAttackValues [0] * playerAttackValues[1];
		enemy.health = enemy.health - totalDmage;
		alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");
		//checking if the Enemy is dead
		if (enemy.health <= 0) {
			alert("You win! ");
			getPlayerHealth.innerHTML = 'Health: ' + player.health;
			getPlayerHealth.innerHTML = 'Health: 0';
			settings.setPreFight(this.classType);
		}else{
			getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
			//Enemy attacks
			let enemyAttackValues = enemyAttack();
			let totalDmage = enemyAttackValues [0] * enemyAttackValues[1];
				player.health = player.health - totalDmage;
			alert("Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
		//checking if the Enemy is dead
		if (player.health <= 0) {
			alert("You Lose! Refresh brooser to play again.");
			getPlayerHealth.innerHTML = 'Health: 0';
			getPlayerHealth.innerHTML = 'Health: ' + enemy.health;
		}else{
			getPlayerHealth.innerHTML = 'Health: ' + player.health;
		}
		}
	}	if(getEnemySpeed >= getPlayerSpeed){
		let enemyAttackValues = enemyAttack();
		//calculatin total Damage get dmg and totalHealth - dmg
		let totalDmage = enemyAttackValues [0] * enemyAttackValues[1];
		player.health = player.health - totalDmage;
		alert("Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
		//checking if the Enemy is dead
		if (player.health <= 0) {
			alert("You lose! Refresh brooser to play again.");
			getPlayerHealth.innerHTML = 'Health: ' + player.health;
			getPlayerHealth.innerHTML = 'Health: 0';
		}else{
			getPlayerHealth.innerHTML = 'Health: ' + player.health;
			//Enemy attacks
			let playerAttackValues = playerAttack();
			let totalDmage = playerAttackValues [0] * playerAttackValues[1];
				enemy.health = enemy.health - totalDmage;
			alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");
		//checking if the Enemy is dead
		if (enemy.health <= 0) {
			alert("You win! ");
			getEnemyHealth.innerHTML = 'Health: 0';
			getPlayerHealth.innerHTML = 'Health: ' + player.health;
			settings.setPreFight(this.classType);
			
		}else{
			getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
		}
		}
	}

	}
	
}
