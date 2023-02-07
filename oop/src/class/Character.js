export default class Character {
  constructor(name, heroType) {
    this.health = 100
    this.level = 1

    this.attack = 0
    this.defence = 0

    this._name = name
    this._type = heroType
    //this._attack = 0

    this.typeVariant = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie']

    this.nameValidation(name)
    this.typeValidation(heroType)
  }

  get name() {
    return this._name
  }

  get type() {
    return this._type
  }

  nameValidation(value) {
    if (value.length >= 2 && value.length <= 10 && typeof value === 'string'){
      return value
    }
    else throw new Error('Неверный тип данных или превышение длины имени')
  }

  typeValidation(value) {
    if (this.typeVariant.some((item) => item === value)) {
      this.setCharacteristics(value)
      return value
    }
    else throw new Error('Неверный тип героя')
  }

  levelUp() {
    if (this.health > 0) {
      this.level++
      this.attack = this.attack + this.attack * 0.2
      this.defence = this.defence + this.defence * 0.2
      this.health = 100
      return [this.attack, this.defence, this.health]
    } else throw new Error('Нельзя повысить левел умершего')
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100)
      return this.health
    } else throw new Error('Герой умер')
  }

  setCharacteristics (heroType) {
    switch (heroType) {
      case 'Bowman':
        this.attack = 25
        this.defence = 25
        return [this.attack, this.defence, heroType]
      case 'Swordsman':
        this.attack = 40
        this.defence = 10
        return [this.attack, this.defence, heroType]
      case 'Magician':
        this.attack = 10
        this.defence = 40
        return [this.attack, this.defence, heroType]
      case 'Undead':
        this.attack = 25
        this.defence = 25
        return [this.attack, this.defence, heroType]
      case 'Zombie':
        this.attack = 40
        this.defence = 10
        return [this.attack, this.defence, heroType]
      case 'Daemon':
        this.attack = 10
        this.defence = 40
        return [this.attack, this.defence, heroType]
    }
  }
}