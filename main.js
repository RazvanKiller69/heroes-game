class Hero {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
    this.canFly = false;
    this.shield = false;
  }
  attacked(damage) {
    //daca zboara 50% sa nu isi ia dmg
    if (this.canFly) {
      let chance = Math.random();
      if (chance > 0.5) {
        console.log(this.name + " flew away.");
        damage = 0;
      }
    }
    //daca are scut dmg redus cu 20%
    if (this.shield) {
      console.log(this.name + " defends with a shield.");
      damage *= 0.8; //dmg=dmg*0.8/20%
    }
    this.hp -= damage;
    console.log(this.name + " has been atacked. Hp Reduced by " + damage);
  }
}
class Symbiot extends Hero {
  constructor(name, hp) {
    super(name, hp);
    this.shield = true;
  }
  attack(otherHero) {
    let damage = 10;
    console.log(this.name + " attacked with damage: " + damage + ".");
    otherHero.attacked(damage);
  }
}
class Goblin extends Hero {
  constructor(name, hp) {
    super(name, hp);
    this.canFly = true;
  }
  attack(otherHero) {
    let damage = 15;
    console.log(this.name + " attacked with damage: " + damage + ".");
    otherHero.attacked(damage);
  }
}
class Dragon extends Hero {
  constructor(name, hp) {
    super(name, hp);
    this.canFly = true;
    this.shield = true;
  }
  attack(otherHero) {
    let damage = 5;
    console.log(this.name + " attacked with damage: " + damage + ".");
    otherHero.attacked(damage);
  }
}
class Spider extends Hero {
  constructor(name, hp) {
    super(name, hp);
  }
  attack(otherHero) {
    let damage = 25;
    console.log(this.name + " attacked with damage: " + damage + ".");
    otherHero.attacked(damage);
  }
}

//Clasa Fight conduce batalia dintre eroi
class Fight {
  constructor(hero1, hero2) {
    this.hero1 = hero1;
    this.hero2 = hero2;
    //this.turn este folosit in determinarea a cui tura este si poate avea valori numai de 0 sau 1
    this.turn = 0;
  }

  //se executa un singur atac
  performAttack() {
    if (this.turn === 0) {
      this.hero1.attack(this.hero2);
      //this.turn += 1;
    } else {
      this.hero2.attack(this.hero1);
      //this.turn -= 1;
    }
  }

  changeTurn() {
    this.turn = 1 - this.turn;
  }
  findWinner() {
    let findWinner = "";
    if (this.hero1.hp > 0) {
      findWinner = this.hero1.name + " won with " + this.hero1.hp + " HP.";
      console.log(findWinner);
      return findWinner;
    } else if (this.hero2.hp > 0) {
      findWinner = this.hero2.name + " won with " + this.hero2.hp + " HP.";
      console.log(findWinner);
      return findWinner;
    } else {
      findWinner = "No her left alive";
      console.log(findWinner);
      return findWinner;
    }
  }
  go() {
    do {
      this.performAttack();
      this.changeTurn();
    } while (this.hero1.hp > 0 && this.hero2.hp > 0);

    this.findWinner();
  }
}
let symbiot = new Symbiot("Venom", 50);
let goblin = new Goblin("Green Goblin", 35);
let spider = new Spider("Spiderman", 75);
let dragon = new Dragon("Aphat, The Pun Dragon", 60);
//cream o lupta noua si ii dam drumul
let epicFight = new Fight(goblin, spider);
epicFight.go();
