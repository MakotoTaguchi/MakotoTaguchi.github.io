function* myGeneration() {
    yield 'あいうえお';
    yield 'かきくけこ';
    yield 'さしすせそ';
}

for (let t of myGeneration()) {
    console.log(t);
}