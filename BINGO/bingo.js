const inputNum = document.getElementById('numInput');
const comment = document.getElementById('comment');
const bingo = document.getElementById('bingo');
const ranNum = document.getElementById('ranNum');
const startBtn = document.getElementById('startBtn');
const bingoCount = document.getElementById('bingoCount');
const reachCount = document.getElementById('reachCount');


let bingoGrid = [];
let gridSize = 0;
let marked = [];
let drawnNumbers = [];
let availableNumbers = Array.from({length: 99}, (_, i) => i + 1);
let count = 0;
const gameCount = document.getElementById('gameCount');


inputNum.addEventListener('input', () => {
    const num = parseInt(inputNum.value);
    if (isNaN(num) || num < 3 || num > 9 || num % 2 === 0) {
        comment.textContent = '3～9の奇数を入力してください。';
        bingo.innerHTML = '';
        return;
    }

    comment.textContent = 'OK!';
    gridSize = num;
    marked = Array(gridSize).fill(null).map(() => Array(gridSize).fill(false));
    bingoGrid = [];

    // ランダムにgrid用数字を選ぶ
    const gridNums = [];
    const tempNums = [...availableNumbers];
    for (let i = 0; i < gridSize * gridSize; i++) {
        const idx = Math.floor(Math.random() * tempNums.length);
        gridNums.push(tempNums.splice(idx, 1)[0]);
    }

    bingo.innerHTML = '';
    const table = document.createElement('table');
    let idx = 0;
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('tr');
        bingoGrid[i] = [];
        for (let j = 0; j < gridSize; j++) {
            const num = gridNums[idx++];
            const cell = document.createElement('td');
            cell.textContent = num;
            cell.id = `cell-${num}`;
            cell.setAttribute('data-i', i);
            cell.setAttribute('data-j', j);
            row.appendChild(cell);
            bingoGrid[i][j] = num;
        }
        table.appendChild(row);
    }
    bingo.appendChild(table);

    drawnNumbers = [];
    availableNumbers = Array.from({length: 99}, (_, i) => i + 1);
    ranNum.textContent = '';
    bingoCount.textContent = 'ビンゴ数：0';
    reachCount.textContent = 'リーチ数：0';
    gameCount.textContent = `${count}回目`
});

startBtn.addEventListener('click', () => {

    if (availableNumbers.length === 0) {
        ranNum.textContent = 'すべての数字が出ました。';
        return;
    }

    count++;  // クリックごとに増やす
    gameCount.textContent = `${count}回目`;


    // ランダムに1～99からまだ出ていない数字を抽選
    const idx = Math.floor(Math.random() * availableNumbers.length);
    const drawn = availableNumbers.splice(idx, 1)[0];
    drawnNumbers.push(drawn);
    ranNum.textContent = `出た数: ${drawn}`;

    const cell = document.getElementById(`cell-${drawn}`);
    if (cell) {
        cell.classList.add('marked');
        const i = parseInt(cell.getAttribute('data-i'));
        const j = parseInt(cell.getAttribute('data-j'));
        marked[i][j] = true;
    }

    // ビンゴとリーチの計算
    let bingoLine = 0;
    let reachLine = 0;

    // 横・縦
    for (let i = 0; i < gridSize; i++) {
        const row = marked[i];
        const col = marked.map(r => r[i]);

        [row, col].forEach(line => {
            const count = line.filter(Boolean).length;
            if (count === gridSize) {
                bingoLine++;
            } else if (count === gridSize - 1) {
                reachLine++;
            }
        });
    }

    // 斜め
    const diag1 = [], diag2 = [];
    for (let i = 0; i < gridSize; i++) {
        diag1.push(marked[i][i]);
        diag2.push(marked[i][gridSize - 1 - i]);
    }

    [diag1, diag2].forEach(line => {
        const count = line.filter(Boolean).length;
        if (count === gridSize) {
            bingoLine++;
        } else if (count === gridSize - 1) {
            reachLine++;
        }
    });

    bingoCount.textContent = `ビンゴ数：${bingoLine}`;
    reachCount.textContent = `リーチ数：${reachLine}`;
});