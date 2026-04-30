## 📌 Version

Current version: v1.1.0

# WoW Duel Simulator

A fan-made turn-based battle simulator game built with Node.js, with classes, skills and all inspired by World of Warcraft Wrath of the Lich King.

Each class has unique abilities, including damage, damage over-time (DoT), healing, heal over-time (HoT), buffs and debuffs.

> ⚠️ **This project is under active development**  
> New features and improvements are continuously being added. Classes may receives buffs and nerfs in the future, also new mechanics may be added.

## 📃 Features

- All actions are determined by dice rolls, meaning you can't control your own character. In other words, you only choose your class and wait for the responses in the terminal, an automatic battle flow.
- Turn-based combat system.
- A total of 5 rounds.
- If a player dies before 5 rounds, the battle automatically ends and the terminal shows who died and the winner.
- If both players don't die until the last round, the winner is the player who has more HP.
- 10 playable classes.
- 3 unique abilities per class.
- Damage, healing, lifesteal, buff and debuff system.
- Effects over time (DoT / HoT).

## 🧙‍♂️ Classes and Skills

## 🛡️ Warrior (120 HP)
- 🪓 Mortal Strike → Damage (15–25)
- 🩸 Rend → DoT (6/turn, 2 turns)
- 💀 Execute → Damage (25–40), If target is below 30% HP

---

## ✝️ Paladin (110 HP)
- ⚜️ Judgement → Damage (12–20)
- 🎇 Holy Light → Heal (12–16)
- 🛡️ Divine Shield → Buff (50% damage reduction, 2 turns)

---

## 🗡️ Rogue (90 HP)
- 🔪 Sinister Strike → Damage (15–26)
- ⚔️ Eviscerate → Damage (11–18)
- 🩸 Rupture → DoT (6/turn, 3 turns)

---

## 🔥 Mage (80 HP)
- 🔥 Fireball → Damage + DoT (14–22 + 6/turn, 2 turns)
- 💥 Fire Blast → Damage (15–25)
- 🛡️ Molten Armor → Buff (5-10 dmg, 3 turns), If mage is attacked while Molten Armor is up, attacker receives 5-10 damage.

---

## 🕯️ Warlock (95 HP)
- 🟣 Shadow Bolt → Damage (13–18)
- 👾 Corruption → DoT (5/turn, 4 turns)
- 💜 Drain Life → Lifesteal (8–14 damage, 50% heal based on damage)

---

## ⚡ Shaman (100 HP)
- ⚡ Lightning Bolt → Damage (12–20)
- 🌎 Earth Shock → Damage (10–16)
- 💚 Healing Wave → Heal (10–18)

---

## 🌙 Druid (105 HP)
- 🌙 Wrath → Damage (12–18)
- ☄️ Moonfire → Damage + DoT (10–16 + 4/turn, 2 turns)
- 💚 Rejuvenation → HoT (6/turn, 3 turns)

---

## 💀 Death Knight (110 HP)

- 🪓 Death Strike → Damage + Lifesteal (7–13, 90% heal based on damage ) 
- ❄️ Icy Touch → Damage + DoT (8-12 + 6/turn, 3 turns)
- 🗡️ Scourge Strike → Damage (13–19)

---

## 🏹 Hunter (110 HP)

- 🎯 Aimed Shot → Damage (10–13) 30% anti-heal for 2 turns
- 🐍 Serpent Sting → DoT (5/turn, 3 turns)
- 🏹 Chimera Shot → Damage (13–18) 60% chance to deal a bonus damage based on damage of your first Chimera Shot

---

## 🧿 Priest (110 HP)

- 👹 Vampiric Touch → Damage + DoT (13–16, 4/turn, 3 turns)
- 🟣 Shadow Word: Pain → DoT (5/turn, 4 turns)
- ✨ Flash Heal → Heal (14–20)

---

## 💻 Battle Flow

```bash
Duelo começando entre:
Jogador 1 - NAME (CLASS) (CLASS HP)
Jogador 2 - NAME (CLASS) (CLASS HP)

-----------------------------------------------------
Round number:
1. Resolve active effects (DoT/HoT)
2. Player 1 uses a skill
3. Check if Player 2 is defeated
4. Player 2 uses a skill
5. Check if Player 1 is defeated

-----------------------------------------------------
Jogador 1: MAXHP/ACTUALHP HP
Jogador 2: MAXHP/ACTUALHP HP
-----------------------------------------------------
...
```

## 🎮 Example Simulation

```bash
Duelo começando entre:
Jogador 1 - Leone (Rogue) (90 HP)
Jogador 2 - BOT (Paladin) (120 HP)

-----------------------------------------------------

Round 1:
Leone usou 🔪 Sinister Strike
🔪 Sinister Strike de Leone causou 24 de dano!
BOT ativou 🛡️  Divine Shield
-----------------------------------------------------
Leone: 90/90 HP
BOT: 120/96 HP
-----------------------------------------------------

Round 2:
Leone usou ⚔️ Eviscerate
⚔️  Eviscerate de Leone causou 14 de dano!
🛡️  BOT recebeu 7 de dano reduzido de ⚔️  Eviscerate de Leone
BOT usou 🎇 Holy Light
🎇 Holy Light de BOT curou 20 HP 💚
-----------------------------------------------------
Leone: 90/90 HP
BOT: 120/109 HP
-----------------------------------------------------

Round 3:
🛡️  Divine Shield de BOT acabou
Leone aplicou 🩸 Rupture
BOT usou ⚜️ Judgement
⚜️ Judgement de BOT causou 12 de dano!
-----------------------------------------------------
Leone: 90/78 HP
BOT: 120/109 HP
-----------------------------------------------------

Round 4:
🩸 Rupture de BOT causou 6 de dano
Leone usou ⚔️  Eviscerate
⚔️  Eviscerate de Leone causou 13 de dano!
BOT usou ⚜️  Judgement
⚜️  Judgement de BOT causou 18 de dano!
-----------------------------------------------------
Leone: 90/60 HP
BOT: 120/90 HP
-----------------------------------------------------

Round 5:
🩸 Rupture de BOT causou 6 de dano
Leone usou 🔪 Sinister Strike
🔪 Sinister Strike de Leone causou 26 de dano!
BOT ativou 🛡️  Divine Shield
-----------------------------------------------------
Leone: 90/60 HP
BOT: 120/58 HP
-----------------------------------------------------
Vencedor: Leone 🏆
```

## 📥 How to run

### 1 . Requirements

Make sure you have installed:

- Node.js: v18+
- npm: 9+'

---

### 2. Configure players (optional)

You can customize the fighters inside `index.js`:

```js
const player1 = await createPlayer("NAME", CLASSNAME)
const player2 = await createPlayer("NAME2", CLASSNAME)
```

- Names must be strings
- Class names must exist in the system
- Class names are always lowercase

---

### 3 . Executing:

Open the terminal and execute:

```bash
node .src/index.js
```

---
