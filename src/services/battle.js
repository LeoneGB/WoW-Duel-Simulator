import createPlayer from "../entities/player.js"
import {warrior, paladin, rogue, mage, warlock, shaman, druid} from "../data/classes.js"
import { skillMechanics, processDots, processHots, processBuffs } from "./skillrules.js";

async function startBattle(player1, player2) {
    console.log(`Duelo começando entre:`);
    console.log(`Jogador 1 - ${player1.name} (${player1.class}) (${player1.maxLife} HP)`);
    console.log(`Jogador 2 - ${player2.name} (${player2.class}) (${player2.maxLife} HP)`);
    console.log("\n-----------------------------------------------------")
}

async function battleEngine(player1, player2) {
    for (let round = 1; round <= 5; round++) {
        console.log(`\nRound ${round}:`)

        await processDots(player1)
        await processDots(player2)

        await processHots(player1)
        await processHots(player2)
        
        await processBuffs(player1)
        await processBuffs(player2)

        const skill1 = player1.skills[
            Math.floor(Math.random() * player1.skills.length)
        ];
        
        const skill2 = player2.skills[
            Math.floor(Math.random() * player2.skills.length)
        ];
        
        await skillMechanics(player1, player2, skill1);
        
        if (player2.actualLife <= 0) {
            console.log(`\n${player2.name} morreu! 💀`)
            return
        }
        
        await skillMechanics(player2, player1, skill2);
        
        if (player1.actualLife <= 0) {
            console.log(`\n${player1.name} morreu! 💀`)
            return
        }

        console.log("-----------------------------------------------------")
        console.log(`${player1.name}: ${player1.maxLife}/${player1.actualLife} HP`)
        console.log(`${player2.name}: ${player2.maxLife}/${player2.actualLife} HP`)
        console.log("-----------------------------------------------------")
    }
}

async function winner(player1, player2) {
    if (player1.actualLife > player2.actualLife) {
        console.log(`Vencedor: ${player1.name} 🏆`)
    } else if (player2.actualLife > player1.actualLife) {
        console.log(`Vencedor: ${player2.name} 🏆`)
    } else {
        console.log("Empate!")
    }
}

export { 
    startBattle,
    battleEngine,
    winner
};