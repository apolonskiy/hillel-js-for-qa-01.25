const nonIIFE = function() {
    const message = "Це локальна змінна";
    console.log(message);
}
nonIIFE();

(function() {
    const message = "Це локальна змінна";
    console.log(message);
})();
