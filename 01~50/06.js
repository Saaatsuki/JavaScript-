// 1. typeof を使った場合（エラーは発生しません）
if (typeof x === 'undefined') {
    console.log('x は未定義です');
}

// 2. x が未定義であることを確認する場合（エラーが発生するので、まず x が定義されているか確認する）
let x; // ここで定義しておかないとエラーになる

if (typeof x !== 'undefined' && x === undefined) {
    console.log('x は undefined です');
}
  