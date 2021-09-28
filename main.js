const app1 = document.getElementById('typewriter1');
const app2 = document.getElementById('typewriter2');

const typewriter1 = new Typewriter(app1, {
    loop: true,
    delay: 95
});

const typewriter2 = new Typewriter(app2, {
    loop: true,
    delay: 105
});

typewriter1
.typeString('A Video Introduction Of Myself')
.pauseFor(1500)
.start();

typewriter2
.typeString(' My  B I O ')
.pauseFor(3000)
.start();
