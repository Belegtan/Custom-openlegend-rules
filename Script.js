function rollStats() {
    const stats = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];
    let output = '<h3>Stats:</h3><ul>';
    stats.forEach(stat => {
        let rolls = [0,0,0,0].map(() => Math.floor(Math.random() * 6) + 1).sort((a,b) => a - b);
        let total = rolls.slice(1).reduce((a,b) => a+b, 0); // Drop lowest
        output += `<li>\( {stat}: \){total}</li>`;
    });
    output += '</ul>';
    document.getElementById('stats').innerHTML = output;
}

function generateSheet() {
    const name = document.getElementById('name').value;
    const race = document.getElementById('race').value;
    const cls = document.getElementById('class').value;
    document.getElementById('sheet').innerHTML = `
        <h3>Character Sheet</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Race:</strong> ${race}</p>
        <p><strong>Class:</strong> ${cls}</p>
        <p>Full stats above. Print or save this!</p>
    `;
}

function toggleSection(id) {
    const el = document.getElementById(id);
    el.style.display = el.style.display === 'block' ? 'none' : 'block';
}
