const obj = {
    key: 'aa',
    key2: 'bb'
}

for (key in obj) {
    if (obj.hasOwnProperty(key)){
        console.log(key,obj[key]);
    }
}