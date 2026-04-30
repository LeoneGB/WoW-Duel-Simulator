# Patch notes - v1.1.0

This patch introduces three new classes and expands the combat system with deeper mechanics and counterplay. I also refined class balance to create clearer strengths and weaknesses across matchups.

This update aims to move the game closer to a true class-based combat experience.

---

## ⚔️ NEW CLASSES

### 💀 Death Knight
A sustain-based bruiser focused on lifesteal and damage over time.

- 🪓 **Death Strike** *(7–13 damage | 90% lifesteal)*  
  Deals damage and heals for a high percentage of damage dealt.

- ❄️ **Icy Touch** *(8–12 damage | DoT: 6 for 3 turns)*  
  Deals damage and applies a damage over time effect.

- 🗡️ **Scourge Strike** *(13–19 damage)*  
  High direct damage ability to pressure opponents.

---

### 🏹 Hunter
A damage dealer with anti-healing and burst.

- 🎯 **Aimed Shot** *(10–13 damage | 30% anti-heal for 2 turns)*  
  Deals damage and applies an anti-heal debuff, reducing healing received.

- 🐍 **Serpent Sting** *(DoT: 5 for 3 turns)*  
  Applies a damage over time effect.

- 🏹 **Chimera Shot** *(13–18 damage | +60% chance to deal a bonus damage based on damage of your first Chimera Shot)*  
  Deals a high amount of damage.

---

### 🧿 Priest
A damage-over-time class with healing capabilities.

- 👹 **Vampiric Touch** *(13–16 damage | DoT: 4 for 3 turns)*  
  Deals damage and applies a damage over time effect.

- 🟣 **Shadow Word: Pain** *(DoT: 5 for 4 turns)*  
  Applies a long-duration damage over time effect.

- ✨ **Flash Heal** *(14–20 heal)*  
  Restores a moderate amount of health.

---

## 🛠️ SYSTEM CHANGES

### ⚙️ Console Changes

The messages on console were a bit confusing when it was about Dot effects, so I added the word (DOT) after a dot interaction, making reading easier and less confusing.

Before:
```bash
Round 1:
Leone aplicou 🩸 Rend
-----------------------------------------------------
Round 2:
🩸 Rend de Leone causou 6 de dano
-----------------------------------------------------
```
After:
```bash
Round 1:
Leone aplicou 🩸 Rend (DOT)
-----------------------------------------------------
Round 2:
🩸 Rend de Leone causou 6 de dano (DOT)
-----------------------------------------------------
```

---

### ⚙️ Debuff
- Debuff is a new type of skill added, which causes the player to be affected by a negative effect.

---

## ⚖️ CLASS ADJUSTMENTS

### ⚔️ Warrior

I finally fixed Warrior's Execute, it was causing the Warrior to lose an opportunity to deals damage, resulting in frustrating moments.

- **Execute**
  - Now only becomes available when the target is below 30% HP
  - No longer wastes a turn when unusable

---

## 📉 Nerfs

### ⚔️ Warrior

With the Execute fix, Warrior now attacks every round. Execute is only available when the target is below 30% health, meaning Warrior will otherwise rely on Mortal Strike and Rend.

Rend’s duration has been reduced to prevent constant refreshing. Warrior’s health has also been lowered, as it was previously higher to compensate for turns lost when Execute could fail.

- ❤ HP
Amount: 130 ⇒ 120

- 🩸 Rend  
Duration: 3 ⇒ 2

---

### ✝ Paladin

The Paladin has a lot of health and a buff to reduce damage taken by 50%, making it a very annoying class to kill, considering that, I reduced its healing to make it more fragile.

- 🎇Holy Light
Healing: [16, 20] ⇒ [12, 16]

---

### 🕯 Warlock

Warlock has been a very strong class lately. It's a class which have damage, dot and lifesteal, its Shadow Bolt was with a insane damage considering Warlock also has dot.

- 🟣Shadow Bolt
Damage: [16, 24] ⇒ [13, 18]

---

## 🐞 BUG FIXES

- Fixed bug where DoT damage displayed the wrong player name in the console  

---

I'll continue monitoring class performance and make adjustments in future updates.
Found a bug? 👉 [Report it here](https://github.com/LeoneGB/WoW-Duel-Simulator/issues/new)