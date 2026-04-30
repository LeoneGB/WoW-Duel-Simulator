async function createPlayer(name, playerClass) {
    return {
        name,
        class: playerClass.name,
        maxLife: playerClass.life,
        actualLife: playerClass.life,
        skills: playerClass.skills,
        activeBuffs: [],
        activeDots: [],
        activeHots: [],
        activeDebuffs: []
    };
}

export default createPlayer;