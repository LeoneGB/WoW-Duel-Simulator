import { warrior, paladin, rogue, mage, warlock, shaman, druid, deathKnight, hunter, priest } from "./data/classes.js"
import createPlayer from "./entities/player.js"
import { startBattle, battleEngine, winner } from "./services/battle.js"

(async function main() {
    const player1 = await createPlayer("Leone", warrior)
    const player2 = await createPlayer("BOT", mage)

    await startBattle(player1, player2)
    await battleEngine(player1, player2)
    await winner(player1, player2)
})()