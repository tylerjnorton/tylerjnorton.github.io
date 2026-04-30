document.addEventListener('DOMContentLoaded', function () {
    var colors = ['#FF3B30','#FF9500','#FFD60A','#34C759','#0A84FF','#5856D6','#FF2D55','#00C7BE','#FF6B00','#A64BFF',
                  '#FF007A','#00E5FF','#7CFC00','#FFAA00','#FF4D00','#8A2BE2','#00FF7F','#FF1493','#1E90FF','#FFE400'];
    var letters = ['T','M','S'];
    var colorIndex = 0, letterIndex = 0;
    var nav = document.querySelector('.left-nav');
    var paragraphLinks = document.querySelectorAll('article p a');
    var loader = document.getElementById('loader');
    var loaderBar = document.getElementById('loader__bar');
    if (!nav) return;

    document.body.classList.add('loading');

    var badgeLink = document.createElement('a');
    badgeLink.href = 'index.html';
    badgeLink.className = 'left-nav__badge-link';

    var badge = document.createElement('div');
    badge.className = 'left-nav__badge';
    badge.setAttribute('aria-hidden', 'true');
    badge.style.background = colors[colorIndex];
    badge.textContent = letters[letterIndex];
    nav.style.setProperty('--badge-color', colors[colorIndex]);

    badgeLink.appendChild(badge);
    nav.insertBefore(badgeLink, nav.firstChild);

    paragraphLinks.forEach(function(link) {
        link.style.color = colors[colorIndex];
    });

    setInterval(function () {
        colorIndex = (colorIndex + 1) % colors.length;
        letterIndex = (letterIndex + 1) % letters.length;
        badge.style.background = colors[colorIndex];
        nav.style.setProperty('--badge-color', colors[colorIndex]);
        if (loaderBar) loaderBar.style.background = colors[colorIndex];
        paragraphLinks.forEach(function(link) {
            link.style.color = colors[colorIndex];
        });
        badge.textContent = letters[letterIndex];
    }, 200);

    // --- Real progress tracking ---
    if (loader && loaderBar) {
        var images = Array.from(document.querySelectorAll('img'));
        var videos = Array.from(document.querySelectorAll('video'));
        var resources = images.concat(videos);
        var total = resources.length;
        var counted = new Set();
        var revealed = false;

        function setBarWidth(pct) {
            // Never go backwards
            var current = parseFloat(loaderBar.style.width) || 0;
            loaderBar.style.width = Math.max(current, pct) + '%';
        }

        function triggerReveal() {
            if (revealed) return;
            revealed = true;
            setBarWidth(100);
            // Brief pause at full color before the wipe
            setTimeout(function () {
                loader.classList.add('reveal');
                document.body.classList.remove('loading');
                setTimeout(function () { loader.style.display = 'none'; }, 750);
            }, 350);
        }

        function countResource(el) {
            if (counted.has(el)) return;
            counted.add(el);
            setBarWidth((counted.size / total) * 100);
            if (counted.size >= total) triggerReveal();
        }

        if (total === 0) {
            // Nothing to track — reveal quickly
            triggerReveal();
        } else {
            resources.forEach(function (el) {
                var isImg = el.tagName === 'IMG';
                // Already done before JS ran (cached)
                if (isImg && el.complete) { countResource(el); return; }
                if (!isImg && el.readyState >= 2) { countResource(el); return; }

                if (isImg) {
                    el.addEventListener('load',  function () { countResource(el); }, { once: true });
                    el.addEventListener('error', function () { countResource(el); }, { once: true });
                } else {
                    el.addEventListener('canplay', function () { countResource(el); }, { once: true });
                    el.addEventListener('error',   function () { countResource(el); }, { once: true });
                }
            });

            // Safety net: window.load fires after everything
            window.addEventListener('load', triggerReveal);
        }
    }
});
