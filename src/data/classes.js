import {warriorSkills, paladinSkills, rogueSkills, mageSkills, warlockSkills, shamanSkills, druidSkills} from "./skills.js"

const warrior = {
    name: "Warrior",
    life: 130,
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

export {
    warrior,
    paladin,
    rogue,
    mage,
    warlock,
    shaman,
    druid
}