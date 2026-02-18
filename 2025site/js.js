document.addEventListener('DOMContentLoaded', function () {
    var colors = ['#FF3B30','#FF9500','#FFD60A','#34C759','#0A84FF','#5856D6','#FF2D55','#00C7BE','#FF6B00','#A64BFF',
                  '#FF007A','#00E5FF','#7CFC00','#FFAA00','#FF4D00','#8A2BE2','#00FF7F','#FF1493','#1E90FF','#FFE400'];
    var letters = ['T','M','S'];
    var colorIndex = 0, letterIndex = 0;
    var nav = document.querySelector('.left-nav');
    var heading = document.querySelector('article h1');
    var paragraphLinks = document.querySelectorAll('article p a');
    if (!nav) return;
    
    var badgeLink = document.createElement('a');
    badgeLink.href = 'index.html';
    badgeLink.className = 'left-nav__badge-link';
    
    var badge = document.createElement('div');
    badge.className = 'left-nav__badge';
    badge.setAttribute('aria-hidden', 'true');
    badge.style.background = colors[colorIndex];
    badge.textContent = letters[letterIndex];
    
    badgeLink.appendChild(badge);
    nav.insertBefore(badgeLink, nav.firstChild);
    
    // Set initial link colors
    paragraphLinks.forEach(function(link) {
        link.style.color = colors[colorIndex];
    });
    
    setInterval(function () {
        colorIndex = (colorIndex + 1) % colors.length;
        letterIndex = (letterIndex + 1) % letters.length;
        badge.style.background = colors[colorIndex];
        paragraphLinks.forEach(function(link) {
            link.style.color = colors[colorIndex];
        });
        badge.textContent = letters[letterIndex];
    }, 200);
});
