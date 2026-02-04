//
const { chars } = anime.splitText('p', {
  chars: {
    wrap: 'clip',
    clone: 'bottom'
  },
});

anime.createTimeline()
.add(chars, {
  y: '-100%',
  loop: true,
  loopDelay: 350,
  duration: 750,
  ease: 'inOut(2)',
}, anime.stagger(150, { from: 'center' }));

// Timer
const [ $time ] = anime.utils.$('.time');

anime.createTimer({
  delay: 2000,
  onUpdate: self => $time.innerHTML = self.currentTime
});


//clock
const [ $clock ] = anime.utils.$('.clock');
let bounds = $clock.getBoundingClientRect();
const refreshBounds = () => bounds = $clock.getBoundingClientRect();

const clock = anime.createAnimatable($clock, {
  rotate: { unit: 'rad' }, // Set the unit to 'rad'
  duration: 400,
});

const { PI } = Math;
let lastAngle = 0
let angle = PI / 2;

const onMouseMove = e => {
  const { width, height, left, top } = bounds;
  const x = e.clientX - left - width / 2;
  const y = e.clientY - top - height / 2;
  const currentAngle = Math.atan2(y, x);
  const diff = currentAngle - lastAngle;
  angle += diff > PI ? diff - 2 * PI : diff < -PI ? diff + 2 * PI : diff;
  lastAngle = currentAngle;
  clock.rotate(angle); // Pass the new angle value in rad
}

window.addEventListener('mousemove', onMouseMove);
window.addEventListener('scroll', refreshBounds);