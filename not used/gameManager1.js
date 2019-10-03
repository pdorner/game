//creating gamemanager for the control for each stage - regular object
//regular object gets createt property und meth werden hier übergeben
let GameManager ={
//only example why we make let player in the player.js
//	name: function(){  //Meth for new Player object diverent if we use here let player, don´t do it!!!
//		player = new Player(); // now we can get let player object, look player.js
//	}

//choose a player Meth one of many ways to set player 

//first start Meth do start the game character with classType import
	setGameStart: function(classType){
		this.resetPlayer(classType);
		this.setPreFight(classType);
	}, 
	//uThe next 2 Meth need to run when we choose a character so we use it in gameStart Meth
	// next meth for creat my player in the game
	resetPlayer: function(classType){
		//now we set the player do the character what is choosen
		//now we set the player do the character what is choosen
		switch(classType){
			case "pirat":
			player = new Player(classType, 200, 0, 200, 100, 50);
			break;
			case "baby":
			player = new Player(classType, 100, 0, 100, 150, 200);
			break;
			case "cool":
			player = new Player(classType, 80, 0, 50, 200, 50);
			break;
			case "hunter":
			player = new Player(classType, 200, 0, 50, 200, 100);
			break;
			}
			//get Interface section field and delet it for new contant 
			let getInterface = document.querySelector(".interface");
    		getInterface.innerHTML = '<img src="img/characters/' + classType.toLowerCase()+ '.jpg"><div><h3>' + classType + '</h3><p class="health-player">Health: ' + player.health + '</p><p>Mana: ' + player.mana + '</p><p>Strength: ' + player.strength + '</p><p>Agility: ' + player.agility + '</p><p>Speed: ' + player.speed + '</p></div>';
  			},

			//set first Stage of the game
			setPreFight: function(classType){
				let getHeader = document.querySelector(".header");
				let getActions = document.querySelector(".actions");
				let getArena = document.querySelector(".arena");
				getHeader.innerHTML = '<p>Task: Choose your next step"</p>';
				getActions.innerHTML = '<a href="#" class="enemy" onclick = setFight()> Search for enemy</a>' + 
				'<a href="#" class="enemy" onclick = setSearch()> Search </a>' +
				'<a href="#" class="enemy" onclick = setCute()> Do something cut </a>';			 
				getArena.style.visibility = "visible";
				},
				setFight: function (){
				// get a enemy
				let getHeader = document.querySelector(".header");
				let getActions = document.querySelector(".actions");
				let getEnemy = document.querySelector(".enemy");
				//Creat Enemy
				let enemy00 = new Enemy("mouse", 100, 0, 50, 100, 100);
				let enemy01 = new Enemy("Dog", 200, 0, 150, 80, 100);
				// Math methode for random enemy
				//search for a number between 0 and 1
				let chooseRandomEnemy = Math.floor(Math.random() *Math.floor(2));
				switch (chooseRandomEnemy){
					case 0:
					enemy = enemy00;
					a="mouse";
					break;
					case 1:
					enemy = enemy01;
					b = "dog"
					break;
				}
				getHeader.innerHTML = '<p> Task: Choose your move!</p>';
				getActions.innerHTML = '<a href="#" class="enemy" onclick = "PlayerMoves.calcAttack()"> Attack!</a>';
				getEnemy.innerHTML = '<img src="./img/enemies/mouse.jpg" alt="' + enemy.enemyType + '" class="enemy"><div><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Mana: ' + enemy.mana + '</p><p>Strength: ' + enemy.strenght + '</p><p>Agilit<: ' + enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p></div>';


				
   				

			}

<script>


			function setGameStart (classType){
			resetPlayer(classType);
			setPreFight(classType);
			}

			function resetPlayer(classType){
		//now we set the player do the character what is choosen
		switch(classType){
			case "pirat":
			player = new Player(classType, 200, 0, 200, 100, 50);
			break;
			case "baby":
			player = new Player(classType, 100, 0, 100, 150, 200);
			break;
			case "cool":
			player = new Player(classType, 80, 0, 50, 200, 50);
			break;
			case "hunter":
			player = new Player(classType, 200, 0, 50, 200, 100);
			break;
			}
			//get Interface section field and delet it for new contant 
			let getInterface = document.querySelector(".interface");
    		getInterface.innerHTML = '<img src="img/characters/' + classType.toLowerCase()+ '.jpg"><div><h3>' + classType + '</h3><p class="health-player">Health: ' + player.health + '</p><p>Mana: ' + player.mana + '</p><p>Strength: ' + player.strength + '</p><p>Agility: ' + player.agility + '</p><p>Speed: ' + player.speed + '</p></div>';
  			}

			//set first Stage of the game
			function setPreFight(classType){
				let getHeader = document.querySelector(".header");
				let getActions = document.querySelector(".actions");
				let getArena = document.querySelector(".arena");
				getHeader.innerHTML = '<p>Task: Choose your next step"</p>';
				getActions.innerHTML = '<a href="#" class="enemy" onclick = setFight()> Search for enemy</a>' + 
				'<a href="#" class="enemy" onclick = setSearch()> Search </a>' +
				'<a href="#" class="enemy" onclick = setCute()> Do something cut </a>';			 
				getArena.style.visibility = "visible";
			}
			function setFight(){
				// get a enemy
				let getHeader = document.querySelector(".header");
				let getActions = document.querySelector(".actions");
				let getEnemy = document.querySelector(".enemy");
				//Creat Enemy
				let enemy00 = new Enemy("mouse", 100, 0, 50, 100, 100);
				let enemy01 = new Enemy("Dog", 200, 0, 150, 80, 100);
				// Math methode for random enemy
				//search for a number between 0 and 1
				let chooseRandomEnemy = Math.floor(Math.random() *Math.floor(2));
				switch (chooseRandomEnemy){
					case 0:
					enemy = enemy00;
					a="mouse";
					break;
					case 1:
					enemy = enemy01;
					b = "dog"
					break;
				}
				getHeader.innerHTML = '<p> Task: Choose your move!</p>';
				getActions.innerHTML = '<a href="#" class="enemy" onclick = "PlayerMoves.calcAttack()"> Attack!</a>';
				getEnemy.innerHTML = '<img src="./img/enemies/mouse.jpg" alt="' + enemy.enemyType + '" class="enemy"><div><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Mana: ' + enemy.mana + '</p><p>Strength: ' + enemy.strenght + '</p><p>Agilit<: ' + enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p></div>';


				
   				

			}
			</script>

}