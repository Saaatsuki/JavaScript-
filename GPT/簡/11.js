function printArray(argArray) {
    argArray.forEach((val, idx) => {
        console.log(`${idx + 1} : ${val}`);
    });
}

printArray(["りんご", "ばなな", "みかん"]);
