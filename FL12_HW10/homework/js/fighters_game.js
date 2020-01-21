let Fighter = function(achievement) {
  let Fighter = {
    Name: achievement.name,
    damage: achievement.damage,
    max_hp: 100,
    current_hp: achievement.hp,
    strength: achievement.strength,
    agility: achievement.agility,
    Wins: 0,
    Losses: 0
  };

  return {
    getName: () => Fighter.Name,
    getDamage: () => Fighter.damage,
    getHealth: () => Fighter.current_hp,
    getStrength: () => Fighter.strength,
    getAgility: () => Fighter.agility,
    logCombatHistory: () =>
      console.log(
        `Name: ${Fighter.Name}, ` +
          `Wins: ${Fighter.Wins},` +
          `Losses: ${Fighter.Losses}`
      ),

    heal: health => {
      Fighter.current_hp += health ? 
      Fighter.current_hp > Fighter.max_hp : Fighter.current_hp = Fighter.max_hp
    },
    dealDamage: health => {
      Fighter.current_hp -= health ? 
      Fighter.current_hp < 0 : Fighter.current_hp = 0
    },
    addWin: () => Fighter.Wins++,
    addLose: () => Fighter.Losses++,
    attack: (attacker) => {
      if (attacker.getHealth() === 0) {
        console.log(`${attacker.getName()} is dead and can't fight`);
        return;
      }
      const My_life = 100;
      let chance = My_life - (attacker.getStrength() + attacker.getAgility());
      if (chance > getRandomInt(0, My_life)) {
        attacker.dealDamage(this.getDamage());
        console.log(
          `${this.getName()} makes ${this.getDamage()} damage to ${attacker.getName()}`
        );
        if (attacker.getHealth() === 0) {
          console.log(`${this.getName()} has won`);
          attacker.addLose();
          attacker.addWin();
          return;
        }
      } else {
        console.log(`${this.getName()} attack missed`);
      }
    }
  };
};

function battle(fighterOne, fighterTwo) {
   if (fighterOne.getHealth() === 0 || fighterTwo.getHealth() === 0) {
    fighterOne.getHealth() === 0 ?
    console.log(`${fighterOne.getName()} is dead and can't fight`) :
    console.log(`${fighterTwo.getName()} is dead and can't fight`);
    return;
  }
  while (fighterOne.getHealth() !== 0 || fighterTwo.getHealth() !== 0) {
    fighterOne.attack(fighterTwo);
    if (fighterTwo.getHealth() > 0) {
        fighterTwo.attack(fighterOne);
        if (fighterOne.getHealth() === 0) {
            fighterTwo.addWin();
            fighterOne.addLoss();
            console.log(`${fighterTwo.getName()} has won!`);
        }
    } else {
        fighterOne.addWin();
        fighterTwo.addLoss();
        console.log(`${fighterOne.getName()} has won!`);
    }
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const fighterOne = new Fighter({
  name: 'Duncan MacLeod',
  damage: 25,
  hp: 100,
  strength: 20,
  agility: 25
});
const fighterTwo = new Fighter({
  name: 'Priest',
  damage: 5,
  hp: 50,
  strength: 10,
  agility: 85
});

battle(fighterOne, fighterTwo);
