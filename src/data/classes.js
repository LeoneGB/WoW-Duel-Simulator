import {warriorSkills, paladinSkills, rogueSkills, mageSkills, warlockSkills, shamanSkills, druidSkills, deathKnightSkills, hunterSkills, priestSkills} from "./skills.js"

const warrior = {
    name: "Warrior",
    life: 120,
    skills: [
        warriorSkills.mortalStrike,
        warriorSkills.rend,
        warriorSkills.execute
    ]
}

const paladin = {
    name: "Paladin",
    life: 110,
    skills: [
        paladinSkills.judgement,
        paladinSkills.holyLight,
        paladinSkills.divineShield
    ]
}

const rogue = {
    name: "Rogue",
    life: 90,
    skills: [
        rogueSkills.sinisterStrike,
        rogueSkills.eviscerate,
        rogueSkills.rupture
    ]
}

const mage = {
    name: "Mage",
    life: 80,
    skills: [
        mageSkills.fireball,
        mageSkills.fireBlast,
        mageSkills.moltenArmor
    ]
}

const warlock = {
    name: "Warlock",
    life: 95,
    skills: [
        warlockSkills.shadowBolt,
        warlockSkills.corruption,
        warlockSkills.drainLife
    ]
}

const shaman = {
    name: "Shaman",
    life: 100,
    skills: [
        shamanSkills.lightningBolt,
        shamanSkills.earthShock,
        shamanSkills.healingWave
    ]
}

const druid = {
    name: "Druid",
    life: 105,
    skills: [
        druidSkills.wrath,
        druidSkills.moonfire,
        druidSkills.rejuvenation
    ]
}

const deathKnight = {
    name: "Death Knight",
    life: 110,
    skills: [
        deathKnightSkills.deathStrike,
        deathKnightSkills.icyTouch,
        deathKnightSkills.scourgeStrike
    ]
}

const hunter = {
    name: "Hunter",
    life: 90,
    skills: [
        hunterSkills.aimedShot,
        hunterSkills.serpentSting,
        hunterSkills.chimeraShot
    ]
}

const priest = {
    name: "Priest",
    life: 75,
    skills: [
        priestSkills.vampiricTouch,
        priestSkills.shadowWordPain,
        priestSkills.flashHeal
    ]
}

export {
    warrior,
    paladin,
    rogue,
    mage,
    warlock,
    shaman,
    druid,
    deathKnight,
    hunter,
    priest
}