function generateNewSection() {
    return `
    <main>
    <p> information about dogs <p> 
    </main>`
    console.log('generateNewSection' ran)
}

function renderNewSection() {
    $(body).append(generateNewSection)
    console.log('renderNewSection' ran)
}




function testing () {
    generateNewSection();
}