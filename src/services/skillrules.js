import {warrior, paladin, rogue, mage, warlock, shaman, druid, deathKnight, hunter, priest } from "../data/classes.js"

async function skillMechanics(attacker, target, skill) {
    if (skill.type.includes("damage")) {
        const [min, max] = skill.value
        let skillDamage = Math.floor(Math.random() * (max - min + 1)) + min

        console.log(`${attacker.name} usou ${skill.symbol} ${skill.name}`)
        console.log(`${skill.symbol} ${skill.name} de ${attacker.name} causou ${skillDamage} de dano!`)

        if (skill.name === "Chimera Shot") {
            let extraChimera = skillDamage * skill.ratio
            extraChimera = Math.floor(extraChimera)
            target.actualLife -= extraChimera

            console.log(`${target.name} sofreu ${extraChimera} de dano do segundo ${skill.symbol} ${skill.name}!`)
        }

        const molten = target.activeBuffs.find(b => b.name === "Molten Armor")
        const divine = target.activeBuffs.find(b => b.name === "Divine Shield")

        if (molten) {
            attacker.actualLife -= molten.damage;

            console.log(`🔥 ${attacker.name} sofreu ${molten.damage} de dano do Molten Armor!`)
        }

        if (divine) {
            const reduced = Math.floor(skillDamage * divine.reduce)
            skillDamage -= reduced

            console.log(`${divine.symbol} ${target.name} recebeu ${reduced} de dano reduzido de ${skill.symbol} ${skill.name} de ${attacker.name}`)
        }

        target.actualLife -= skillDamage
    }

    if (skill.type.includes("heal")) {
        const [min, max] = skill.value
        let heal = Math.floor(Math.random() * (max - min + 1)) + min

        console.log(`${attacker.name} usou ${skill.symbol} ${skill.name}`)
        
        const antiHealing = attacker.activeDebuffs.find(debuff => debuff.name === "Aimed Shot")

        if (antiHealing) {
            let varSub = Math.floor(heal * antiHealing.antiheal)
            let antiHealDebuff = heal - varSub
            attacker.actualLife += antiHealDebuff 

            console.log(`${attacker.name} iria curar ${heal} 💚`)
            console.log(`${skill.symbol} ${skill.name} teve a cura cortada em ${antiHealing.antiheal * 100}% (-${varSub}) por ${antiHealing.symbol} ${antiHealing.name} e curou ${antiHealDebuff} HP 💚`)
        } else {
            attacker.actualLife += heal
            console.log(`${skill.symbol} ${skill.name} de ${attacker.name} curou ${heal} HP 💚`);
        }

        if (attacker.actualLife > attacker.maxLife) {
            attacker.actualLife = attacker.maxLife
        }
    }

    if (skill.type.includes("dot")) {
    const existingDot = target.activeDots.find(dot => dot.name === skill.name);

    if (existingDot) {
        existingDot.duration = skill.dot.duration;

        console.log(`${attacker.name} renovou ${skill.symbol} ${skill.name} (DOT)`);
    } else {
        const dotInstance = {
            name: skill.name,
            symbol: skill.symbol,
            damage: skill.dot.value,
            duration: skill.dot.duration,
            source: attacker.name
        };

        target.activeDots.push(dotInstance);

        console.log(`${attacker.name} aplicou ${skill.symbol} ${skill.name} (DOT)`);
        }
    }

    if (skill.type.includes("hot")) {
        const existingHot = attacker.activeHots.find(hot => hot.name === skill.name)
        
        if (existingHot) {
            existingHot.duration = skill.hot.duration
            
            console.log(`${attacker.name} renovou ${skill.symbol} ${skill.name} (HOT)`)
        } else {
            const hotInstance = {
                name: skill.name,
                symbol: skill.symbol,
                healing: skill.hot.value,
                duration: skill.hot.duration
            }
            attacker.activeHots.push(hotInstance)
        }
    }

    if (skill.type.includes("lifesteal")) {
        const [min, max] = skill.value
        let skillDamage = Math.floor(Math.random() * (max - min + 1)) + min
        target.actualLife -= skillDamage

        console.log(`${skill.symbol} ${skill.name} causou ${skillDamage} de dano`);

        let lifeSteal = Math.floor(skillDamage * skill.ratio)
        const antiHealing = attacker.activeDebuffs.find(debuff => debuff.name === "Aimed Shot")
        
        if (antiHealing) {
            let varsub = Math.floor(lifeSteal * antiHealing.antiheal)
            let antiHealDebuff = lifeSteal - varsub
            attacker.actualLife += antiHealDebuff 

            console.log(`${attacker.name} iria curar ${lifeSteal} 💚`)
            console.log(`${skill.symbol} ${skill.name} teve a cura cortada em ${antiHealing.antiheal * 100}% (-${varsub}) por ${antiHealing.symbol} ${antiHealing.name} e curou ${antiHealDebuff} HP 💚`)
        } else {          
            attacker.actualLife += lifeSteal
            console.log(`${attacker.name} usou ${skill.name}`);
            console.log(`${skill.symbol} ${skill.name} curou ${lifeSteal} 💚`)
        }

        if (attacker.actualLife > attacker.maxLife) {
            attacker.actualLife = attacker.maxLife
        }
    }

    if (skill.type.includes("buff")) {
        if (skill.name === "Molten Armor") {
            const [min, max] = skill.buff.value
            let skillDamage = Math.floor(Math.random() * (max - min + 1)) + min

            attacker.activeBuffs.push({
                name: skill.name,
                symbol: skill.symbol,
                damage: skillDamage,
                duration: skill.buff.duration
            })
        }

        if (skill.name === "Divine Shield") {
            const divineValue = skill.buff.value
            let skillReduceDamage = skill.buff.value

            attacker.activeBuffs.push({
                name: skill.name,
                symbol: skill.symbol,
                reduce: skill.buff.value,
                duration: skill.buff.duration
            })
        }

        console.log(`${attacker.name} ativou ${skill.symbol} ${skill.name}`)
    }

    if (skill.type.includes("debuff")) {
        if (skill.name === "Aimed Shot") {
            const existingDebuff = target.activeDebuffs.find(debuff => debuff.name === "Aimed Shot")

            if (existingDebuff) {
                existingDebuff.duration = skill.debuff.duration

                console.log(`${target.name} teve debuff ${skill.symbol} ${skill.name} renovado`)
            } else {
                target.activeDebuffs.push({
                    name: skill.name,
                    symbol: skill.symbol,
                    antiheal: skill.debuff.value,
                    duration: skill.debuff.duration,
                    source: attacker.name
                })
            }
        }
    }
}

async function processDots(player) {
    for (let i = player.activeDots.length - 1; i >= 0; i--) {
        const dot = player.activeDots[i]
        let damage = dot.damage

        console.log(`${dot.symbol} ${dot.name} de ${dot.source} causou ${dot.damage} de dano (DOT)`)

        const divine = player.activeBuffs.find(b => b.name === "Divine Shield");

        if (divine) {
            const reduced = Math.floor(damage * divine.reduce)
            damage -= reduced

            console.log(`${divine.symbol} ${player.name} reduziu ${reduced} de dano do ${dot.symbol} ${dot.name} de ${dot.source}`)
        }

        player.actualLife -= damage

        dot.duration--

        if (dot.duration <= 0) {
            console.log(`${dot.symbol} ${dot.name} de ${player.name} acabou (DOT)`)
            player.activeDots.splice(i, 1)
        }
    }
}

async function processHots(player) {
    for (let i = player.activeHots.length - 1; i >= 0; i--) {
        const hot = player.activeHots[i]
        const antiHealing = player.activeDebuffs.find(debuff => debuff.name === "Aimed Shot")

        if (antiHealing) {
            let varSub = Math.floor(hot.healing * antiHealing.antiheal)
            let antiHealDebuff = hot.healing - varSub
            player.actualLife += antiHealDebuff 

            console.log(`${player.name} iria curar ${hot.healing} 💚`)
            console.log(`${hot.symbol} ${hot.name} teve a cura cortada em ${antiHealing.antiheal * 100}% (-${varSub}) por ${antiHealing.symbol} ${antiHealing.name} e curou ${antiHealDebuff} HP 💚`)
        } else {           
            player.actualLife += hot.healing
            console.log(`${hot.symbol} ${hot.name} de ${player.name} regenerou ${hot.healing} de vida (HOT)`);
        }

        if (player.actualLife > player.maxLife) {
            player.actualLife = player.maxLife
        }

        hot.duration--

        if (hot.duration <= 0) {
            console.log(`${hot.symbol} ${hot.name} de ${player.name} acabou (HOT)`)
            player.activeHots.splice(i, 1)
        }
    }
}

async function processBuffs(player) {
    for (let i = player.activeBuffs.length - 1; i >= 0; i--) {
        const buff = player.activeBuffs[i]

        buff.duration--

        if (buff.duration <= 0) {
            console.log(`${buff.symbol} ${buff.name} de ${player.name} acabou`)
            player.activeBuffs.splice(i, 1)
        }
    }
}

async function processDebuffs(player) {
    for (let i = player.activeDebuffs.length - 1; i>= 0; i--) {
        const debuff = player.activeDebuffs[i]

        debuff.duration--

        if (debuff.duration <= 0) {
            console.log(`${debuff.symbol} ${debuff.name} de ${debuff.source} acabou`)
            player.activeDebuffs.splice(i, 1)
        }
    }
}

export {
    skillMechanics,
    processDots,
    processHots,
    processBuffs,
    processDebuffs
}