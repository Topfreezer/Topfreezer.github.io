function stopCursorBlinking() {
    document.querySelectorAll('.typed-cursor').forEach(cursor => cursor.classList.add('fade-out'));
}

var cursor1 = document.querySelector('.cursor-1');
var cursor2 = document.querySelector('.cursor-2');

var typed1 = new Typed('.typed-text-1', {
    strings: ["Topfreezer"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: false,
    showCursor: false,
    onStart: function() {
        cursor1.style.display = 'inline';
        cursor2.style.display = 'none';
    },
    onComplete: function() {
        cursor1.style.display = 'none';
        cursor2.style.display = 'inline';
        var typed2 = new Typed('.typed-text-2', {
            strings: ["A kid chasing a dream"],
            typeSpeed: 60,
            backSpeed: 50,
            loop: false,
            showCursor: false,
            onStart: function() {
                cursor1.style.display = 'none';
                cursor2.style.display = 'inline';
            },
            onComplete: function() {
                setTimeout(stopCursorBlinking, 3000);
            }
        });
    }
});

var clickCount = 0;
var clickTimer;

document.querySelector('.big-title').addEventListener('click', function() {
    clickCount++;
    if (clickCount === 3) {
        createFallingFridges();
        clickCount = 0;
    }
    clearTimeout(clickTimer);
    clickTimer = setTimeout(function() {
        clickCount = 0;
    }, 500);
});