const printScore = (mat, sci, eng) => {
    const avg = ((mat + sci + eng) / 3).toFixed(2);
    const grade = avg >= 90 ? "A"
                : avg >= 80 ? "B"
                : avg >= 70 ? "C"
                : "F";

    // HTMLに表示
    document.getElementById("result").innerText =
        `평균 점수: ${avg}점\n학점은 ${grade}입니다.`;
};

// ボタン押下時に呼ばれる関数
function handleScore() {
    const mat = parseFloat(document.getElementById("math").value);
    const eng = parseFloat(document.getElementById("engl").value);
    const sci = parseFloat(document.getElementById("scie").value);

    if (isNaN(mat) || isNaN(eng) || isNaN(sci)) {
        document.getElementById("result").innerText = "모든 과목 점수를 입력해주세요.";
        return;
    }

    printScore(mat, sci, eng);
}
