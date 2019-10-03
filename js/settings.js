
				let settings = {

		//creating gamemanager for the control for each stage - regular object
//regular object gets createt property und meth werden hier übergeben
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
			player = new Player(classType, 300, 0, 200, 100, 50);			
			break;
			case "baby":
			player = new Player(classType, 200, 0, 100, 150, 200);
			break;
			case "cool":
			player = new Player(classType, 160, 0, 50, 200, 50);
			break;
			case "hunter":
			player = new Player(classType, 280, 0, 50, 200, 100);
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
				getActions.innerHTML = '<a href="#" class="btn-prefight" onclick = "settings.setFight()"> Search for enemy</a>' + 
				'<a href="#" class="btn-prefight" onclick = "settings.setSearch()"> Look around </a>' +
				'<a href="#" class="btn-prefight" onclick = "settings.setDo()"> 😍 Do something cut! 😍</a>';			 
				getArena.style.visibility = "visible";
				},
			
			//settings for Player, option setting fight creat enemy
			setFight: function (){
				// get a enemy
				let getHeader = document.querySelector(".header");
				let getActions = document.querySelector(".actions");
				let getArena = document.querySelector(".arena");
				let getEnemy = document.querySelector(".enemy");
				//Creat Enemy
				let enemy00 = new Enemy("Mouse", 100, 0, 50, 100, 100);
				let enemy01 = new Enemy("El Rato", 200, 0, 150, 80, 100);
				let enemy02 = new Enemy("Alf", 600, 0, 200, 100, 100);
				let enemy03 = new Enemy("Crazy Dog", 150, 50, 100, 50, 120);
				let enemy04	= new Enemy("Hipo", 450, 200, 50, 100, 100);
				let enemy05 = new Enemy("Wolf", 250, 0, 50, 100, 100);

				// Math methode for random enemy
				//search for a number between 0 and 1
				let chooseRandomEnemy = Math.floor(Math.random() *Math.floor(6));
				switch (chooseRandomEnemy){
					case 0:
					enemy = enemy00;
					break;
					case 1:
					enemy = enemy01;
					break;
					case 2:
					enemy = enemy02;
					break
					case 3:
					enemy = enemy03;
					break;
					case 4:
					enemy = enemy04;
					break;
					case 5: 
					enemy = enemy05;
					break;
				}
				getHeader.innerHTML = '<p> Task: Choose your move!</p>';
				getActions.innerHTML = '<a href="#" class="btn-prefight" onclick = "PlayerMoves.calcAttack()"> Attack!</a>' + 
				'<a href="#" class="btn-prefight" onclick = "PlayerMoves.special()"> Special Move </a>' +
				'<a href="#" class="btn-prefight" onclick = "PlayerMoves1.run()"> Run </a>';
				getArena.innerHTML = null;
	
				getEnemy.innerHTML = 

        `<img src="./img/enemies/${enemy.enemyType.toLowerCase()}.jpg" alt="${enemy.enemyType}" class="enemies">

        <div>

        <h3>${enemy.enemyType}</h3>

        <p class="health-enemy">Health: ${enemy.health}</p>

        <p>Mana: ${enemy.mana}</p>

        <p>Strength: ${enemy.strength}</p>

        <p>Agility: ${enemy.agility}</p>

        <p>Speed: ${enemy.speed}</p>

        </div>`;

			},
		setnoRNGFight: function (a){
				// get a enemy
				let getHeader = document.querySelector(".header");
				let getActions = document.querySelector(".actions");
				let getArena = document.querySelector(".arena");
				let getEnemy = document.querySelector(".enemy");
				//Creat Enemy
				let enemy00 = new Enemy("Mouse", 100, 0, 50, 100, 100);
				let enemy01 = new Enemy("El Rato", 200, 0, 150, 80, 100);
				let enemy02 = new Enemy("Alf", 600, 0, 200, 100, 100);
				let enemy03 = new Enemy("Crazy Dog", 150, 50, 100, 50, 120);
				let enemy04	= new Enemy("Hipo", 450, 200, 50, 100, 100);
				let enemy05 = new Enemy("Wolf", 250, 0, 50, 100, 100);


				// Math methode for random enemy
				//search for a number between 0 and 1
				let chooseRandomEnemy = a;
				switch (chooseRandomEnemy){
					case 0:
					enemy = enemy00;
					break;
					case 1:
					enemy = enemy01;
					break;
					case 2:
					enemy = enemy02;
					case 3:
					enemy = enemy03;
					break;
					case 4:
					enemy = enemy04;
					break;
					case 5: 
					enemy = enemy05;
					break;
				}
				getHeader.innerHTML = '<p> Task: Choose your move!</p>';
				getActions.innerHTML = '<a href="#" class="btn-prefight" onclick = "PlayerMoves.calcAttack()"> Attack!</a>' + 
				'<a href="#" class="btn-prefight" onclick = "settings.Defend()"> Special Move </a>' +
				'<a href="#" class="btn-prefight" onclick = "PlayerMoves1.run()"> Run </a>';
				getArena.innerHTML = null;
	
				getEnemy.innerHTML = 

        `<img src="./img/enemies/${enemy.enemyType.toLowerCase()}.jpg" alt="${enemy.enemyType}" class="enemies">

        <div>

        <h3>${enemy.enemyType}</h3>

        <p class="health-enemy">Health: ${enemy.health}</p>

        <p>Mana: ${enemy.mana}</p>

        <p>Strength: ${enemy.strength}</p>

        <p>Agility: ${enemy.agility}</p>

        <p>Speed: ${enemy.speed}</p>

        </div>`;

		},

		setSearch: function(){
			
			let getHeader = document.querySelector(".header");
			let getActions = document.querySelector(".actions");
			let getArena = document.querySelector(".arena");
			let getEnemy = document.querySelector(".enemy");
			let getPlayerHealth = document.querySelector(".health-player");

			getEnemy.innerHTML = null;
			getArena.innerHTML = null;
			let chooseRandomNumber = Math.floor(Math.random() * 5) +1;;

			if(chooseRandomNumber == 1){
				alert("Grab some health! You found some yami Food in the backjard, after that you got attackt");
				player.health += 40;
				getPlayerHealth.innerHTML = 'Health: ' + player.health;
				settings.setFight();	
				
			}else if (chooseRandomNumber ==2){
				alert("You rest a bit and get 20 health, after that you got attackt");
				player.health += 20;
				getPlayerHealth.innerHTML = 'Health: ' + player.health;
				settings.setFight();		
			}
			else if (chooseRandomNumber ==3){
				alert("ALF is behind you, RUN!!!!!!!!!");
				settings.setnoRNGFight(2);
			}
			else if (chooseRandomNumber==4){
				alert("NOOOOO, I think this dog is crazy!");
				settings.setnoRNGFight(3);
			}else if (chooseRandomNumber==5){
				alert("You see the best animal on the planet and get a 50 hp boost. You are so lucky, bad thing is the Hipo is attacking you");
				player.health += 50;
				getPlayerHealth.innerHTML = 'Health: ' + player.health;
				settings.setnoRNGFight(4)
			}else{

			}
		},

		setDo: function(){
			let getHeader = document.querySelector(".header");
			let getActions = document.querySelector(".actions");
			let getArena = document.querySelector(".arena");
			let getEnemy = document.querySelector(".enemy");
			
			let chooseRandomEnemy = Math.floor(Math.random() * 3) +1;
			getEnemy.innerHTML = null;
			

				switch (player.classType){
					case "pirat":
					if(chooseRandomEnemy ==1){
					getArena.innerHTML =`<center><div><img src="http://gif-finder.com/wp-content/uploads/2015/10/Pirate-Cat.gif" alt="something"></div></center>`;
				} else if (chooseRandomEnemy == 2){
					getArena.innerHTML =`<center><div><img src="https://media.giphy.com/media/BMR4cgypuglVu/giphy.gif" alt="something"></div></center>`

				} 
				else{
					getArena.innerHTML =`<center><div><img src="https://media.giphy.com/media/t8dgAcwIMa5dZzNhqU/giphy.gif" alt="something"></div></center>`

				}
					break;
					case "baby":
				//getarena.style.backgroundImage = "url(./img/somthing/do1.gif)"; 
					if(chooseRandomEnemy ==1){
					getArena.innerHTML =`<center><div><img src="https://media.giphy.com/media/uWYjSbkIE2XIMIc7gh/giphy.gif" alt="something"></div></center>`;
				} else if (chooseRandomEnemy == 2){
					getArena.innerHTML =`<center><div><img src="https://media.giphy.com/media/liTCwet0Uckyk/giphy.gif" alt="car"></div></center>`

				}else{
					getArena.innerHTML =`<center><div><img src="https://media.giphy.com/media/hDHHqEyHT88mY/giphy.gif" alt="something"></div></center>`

				}
					break;
					case "cool":
				//getarena.style.backgroundImage = "url(./img/somthing/do1.gif)"; 
					if(chooseRandomEnemy ==1){
					getArena.innerHTML =`<center><div><img src="https://media.giphy.com/media/CjmvTCZf2U3p09Cn0h/giphy.gif" alt="something"></div></center>`;
				} else if (chooseRandomEnemy == 2){
					getArena.innerHTML =`<center><div><img src="https://media.giphy.com/media/107Cw30HO5u5gI/giphy.gif" alt="something"></div></center>`

				}else{
					getArena.innerHTML =`<center><div><img src="https://media.giphy.com/media/PeGwnUOC4Qqhq/giphy.gif" alt="something"></div></center>`

				}
					break;
					case "hunter":
				//getarena.style.backgroundImage = "url(./img/somthing/do1.gif)"; 
					if(chooseRandomEnemy ==1){
					getArena.innerHTML =`<center><div><img src="https://media.giphy.com/media/l0ExeOIlvUnbkcQko/giphy.gif" alt="something"></div></center>`;
				} else if (chooseRandomEnemy == 2){
					getArena.innerHTML =`<center><div><img src="https://media.giphy.com/media/x4qIpDsSdk1t6/giphy.gif" alt="something"></div></center>`

				}else{
					getArena.innerHTML =`<center><div><img src="https://media.giphy.com/media/11bV8o4fJ3vpOE/giphy.gif" alt="something"></div></center>`

				}
					break;

				}
			
		},


		

			
		}