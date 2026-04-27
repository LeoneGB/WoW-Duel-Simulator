const warriorSkills = {
    mortalStrike: {
        name: "Mortal Strike",
        symbol: "🪓",
        type: "damage",
        value: [15, 25]
    },
    rend: {
        name: "Rend",
        symbol: "🩸",
        type: "dot",
        dot: {value: 6, duration: 3}
    },
    execute: {
        name: "Execute",
        symbol: "💀",
        type: "execute",
        value: [25, 40],
    }
}

const paladinSkills = {
    judgement: {
        name: "Judgement",
        symbol: "⚜️ ",
        type: "damage",
        value: [12, 20]
    },
    holyLight: {
        name: "Holy Light",
        symbol: "🎇",
        type: "heal",
        value: [16, 20]
    },
    divineShield: {
        name: "Divine Shield",
        symbol: "🛡️ ",
        type: "buff",
        buff: {value: 0.50, duration: 2}
    }
}

const rogueSkills = {
    sinisterStrike: {
        name: "Sinister Strike",
        symbol: "🔪",
        type: "damage",
        value: [15, 26]
    },
    eviscerate: {
        name: "Eviscerate",
        symbol: "⚔️ ",
        type: "damage",
        value: [11, 18] //30% chance of damage being doubled
    },
    rupture: {
        name: "Rupture",
        symbol: "🩸",
        type: "dot",
        dot: {value: 6, duration: 3}
    }
}

const mageSkills = {
    fireball: {
        name: "Fireball",
        symbol: "🔥",
        type: ["damage", "dot"],
        value: [14, 22],
        dot: {value: 6, duration: 2}
    },
    moltenArmor: {
        name: "Molten Armor",
        symbol: "🛡️ ",
        type: "buff",
        buff: {value: [5, 10], duration: 3}
    },
    fireBlast: {
        name: "Fire Blast",
        symbol: "💥",
        type: "damage",
        value: [15, 25] // if fire blast is casted while the target is being burned by fireball, fire blast has 30% chance to double its damage
    }
}

const warlockSkills = {
    shadowBolt: {
        name: "Shadow Bolt",
        symbol: "🟣",
        type: "damage",
        value: [16, 24]
    },
    corruption: {
        name: "Corruption",
        symbol: "👾",
        type: "dot",
        dot: {value: 5, duration: 4}
    },
    drainLife: {
        name: "Drain Life",
        symbol: "💜",
        type: "lifesteal",
        value: [8, 14],
        ratio: 0.5
    }
}

const shamanSkills = {
    lightningBolt: {
        name: "Lightning Bolt",
        symbol: "⚡",
        type: "damage",
        value: [12, 20]
    },
    healingWave: {
        name: "Healing Wave",
        symbol: "💚",
        type: "heal",
        value: [10, 18]
    },
    earthShock: {
        name: "Earth Shock",
        symbol: "🌎",
        type: "damage",
        value: [10, 16]
    }
}

const druidSkills = {
    wrath: {
        name: "Wrath",
        symbol: "⚡",
        type: "damage",
        value: [12, 18]
    },
    moonfire: {
        name: "Moonfire",
        symbol: "☄️ ",
        type: ["damage", "dot"],
        value: [10, 16],
        dot: {value: 4, duration: 2}
    },
    rejuvenation: {
        name: "Rejuvenation",
        symbol: "💚",
        type: "hot",
        hot: {value: 6, duration: 3}
    }
}

export {
    warriorSkills,
    paladinSkills,
    rogueSkills,
    mageSkills,
    warlockSkills,
    shamanSkills,
    druidSkills
}