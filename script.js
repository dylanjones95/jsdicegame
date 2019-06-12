let totalScore = 0

document.getElementById("button").addEventListener("click", () => {

const diceGenerate1 = Math.floor(Math.random() * 6) + 1
const diceImage1 = `img/dice${diceGenerate1}.png`
totalScore = diceGenerate1+totalScore
const diceNum1 = `Score: ${totalScore}`
document.getElementById('p1').setAttribute('src', diceImage1)
document.getElementById('p1text').innerHTML = diceNum1

if (totalScore >= 21) {
   alert(`Winner! You reached ${totalScore}`)
   window.location.reload()
   totalScore = 0
} else if (diceGenerate1 == 1) {
   alert(`Game Over! You only reached ${totalScore}`)
   window.location.reload()
   totalScore = 0
}



// const diceGenerate2 = Math.floor(Math.random() * 6) + 1
// const diceImage2 = `img/dice${diceGenerate2}.png`
// document.getElementById('p2').setAttribute('src', diceImage2)
})