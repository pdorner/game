//enemy Object same constructor as 
//many instanses with constructor for all classes!!!
//Properties und Methode for the player, Speed Health und Meth for Attack and moves

//also here Object constractor to use it, like player
let enemy;

function Enemy (enemyType, health, mana, strength, agility, speed){
	//Only Player Objects here ++ information abaut class choosen
	this.enemyType = enemyType;
	this.health = health;
	this.mana = mana;
	this.strength = strength;
	this.agility = agility;
	this.speed = speed;
}