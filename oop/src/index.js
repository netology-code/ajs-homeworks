import Character from './class/Character';
import Bowerman from './class/Bowerman';
import Magician from './class/Magician';
import Daemon from './class/Daemon';
import Undead from './class/Undead';
import Zombie from './class/Zombie';

const hero1 = new Character('Zero', 'Bowerman');
const hero2 = new Bowerman('Max', 'Bowerman');
const hero3 = new Magician('Nick', 'Magician');
const hero4 = new Daemon('Zero', 'Daemon');
const hero5 = new Undead('Goldman', 'Undead');
const hero6 = new Zombie('Pete', 'Zombie');
console.log(hero2, hero3, hero4, hero5, hero6);

hero6.levelUp();
console.log(hero6);

hero5.damage(70);
console.log(hero5);

hero1.health = -1;
hero1.damage(70);
console.log(hero1);
