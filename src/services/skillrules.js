import {warrior, paladin, rogue, mage, warlock, shaman, druid} from "../data/classes.js"

async function skillMechanics(attacker, target, skill) {
    if (skill.type === "execute") {
        console.log(`${attacker.name} tentou usar ${skill.symbol} ${skill.name}`)
        if (target.actualLife > target.maxLife * 0.3) {
            console.log(`${skill.name} falhou. O alvo precisa estar com menos de 30% de HP!`)
        } else {
            const [min, max] = skill.value
            let executeDamage = Math.floor(Math.random() * (max - min + 1)) + min
            target.actualLife -= executeDamage

            console.log(`${skill.symbol} ${skill.name} causou ${executeDamage} de dano!`)
        }
    }

    if (skill.type.includes("damage")) {
        const [min, max] = skill.value
        let skillDamage = Math.floor(Math.random() * (max - min + 1)) + min

        console.log(`${attacker.name} usou ${skill.symbol} ${skill.name}`)
        console.log(`${skill.symbol} ${skill.name} de ${attacker.name} causou ${skillDamage} de dano!`)

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
        attacker.actualLife += heal

        console.log(`${attacker.name} usou ${skill.symbol} ${skill.name}`)

        if (attacker.actualLife > attacker.maxLife) {
            attacker.actualLife = attacker.maxLife;
        }

        console.log(`${skill.symbol} ${skill.name} de ${attacker.name} curou ${heal} HP 💚`);
    }

    if (skill.type.includes("dot")) {
    const existingDot = target.activeDots.find(dot => dot.name === skill.name);

    if (existingDot) {
        existingDot.duration = skill.dot.duration;

        console.log(`${attacker.name} renovou ${skill.symbol} ${skill.name}`);
    } else {
        const dotInstance = {
            name: skill.name,
            symbol: skill.symbol,
            damage: skill.dot.value,
            duration: skill.dot.duration,
            source: attacker.name
        };

        target.activeDots.push(dotInstance);

        console.log(`${attacker.name} aplicou ${skill.symbol} ${skill.name}`);
        }
    }

    if (skill.type.includes("hot")) {
    const existingHot = attacker.activeHots.find(hot => hot.name === skill.name)

    if (existingHot) {
        existingHot.duration = skill.hot.duration

        console.log(`${attacker.name} renovou ${skill.symbol} ${skill.name}`)
    } else {
        const hotInstance = {
            name: skill.name,
            symbol: skill.symbol,
            healing: skill.hot.value,
            duration: skill.hot.duration
        }

        attacker.activeHots.push(hotInstance)

        console.log(`${attacker.name} usou ${skill.symbol} ${skill.name}`)
        }
    }

    if (skill.type.includes("lifesteal")) {
        const [min, max] = skill.value
        let skillDamage = Math.floor(Math.random() * (max - min + 1)) + min
        target.actualLife -= skillDamage

        let lifeSteal = Math.floor(skillDamage * skill.ratio)
        attacker.actualLife += lifeSteal

        if (attacker.actualLife > attacker.maxLife) {
            attacker.actualLife = attacker.maxLife
        }

        console.log(`${attacker.name} usou ${skill.name}`);
        console.log(`${skill.symbol} ${skill.name} causou ${skillDamage} de dano`);
        console.log(`${skill.symbol} ${skill.name} curou ${lifeSteal} 💚`)
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
}

async function processDots(player) {
    for (let i = player.activeDots.length - 1; i >= 0; i--) {
        const dot = player.activeDots[i]
        let damage = dot.damage

        console.log(`${dot.symbol} ${dot.name} de ${player.name} causou ${dot.damage} de dano`)

        const divine = player.activeBuffs.find(b => b.name === "Divine Shield");

        if (divine) {
            const reduced = Math.floor(damage * divine.reduce)
            damage -= reduced

            console.log(`${divine.symbol} ${player.name} reduziu ${reduced} de dano do ${dot.symbol} ${dot.name} de ${dot.source}`)
        }

        player.actualLife -= damage

        dot.duration--

        if (dot.duration <= 0) {
            console.log(`${dot.symbol} ${dot.name} de ${player.name} acabou`)
            player.activeDots.splice(i, 1)
        }
    }
}

async function processHots(player) {
    for (let i = player.activeHots.length - 1; i >= 0; i--) {
        const hot = player.activeHots[i]

        player.actualLife += hot.healing

        if (player.actualLife > player.maxLife) {
            player.actualLife = player.maxLife
        }

        console.log(`${hot.symbol} ${hot.name} de ${player.name} regenerou ${hot.healing} de vida`);

        hot.duration--

        if (hot.duration <= 0) {
            console.log(`${hot.symbol} ${hot.name} de ${player.name} acabou`)
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

export {
    skillMechanics,
    processDots,
    processHots,
    processBuffs
}