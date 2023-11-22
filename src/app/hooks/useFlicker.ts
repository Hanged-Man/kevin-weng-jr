import { RefObject, useEffect, useRef } from 'react';
import anime, { random } from 'animejs';

const useFlicker = (refs: RefObject<HTMLHeadingElement>[]) => {
  const isAnimatingRef = useRef(false);

  useEffect(() => {

    // wrap each letter of each h1 tag in a span element
    refs.forEach(ref => {
      if (ref.current) {
        const text = ref.current.textContent || '';
        const newText = text.replace(/\S/g, "<span class='letter'>$&</span>");
        ref.current.innerHTML = newText;
      }
    });

    const animateRandomLetter = async () => {
      if (isAnimatingRef.current) return;
      const animations: anime.AnimeInstance[] = [];

      // random letter index common across all h1 tags (based on refs[0]!)
      let randomIndex = -1;
      if (refs[0].current) {
        const letters = refs[0].current.querySelectorAll('.letter');
        randomIndex = Math.floor(Math.random() * letters.length);
      }

      // Create animations only for valid refs and indices
      refs.forEach(ref => {
        if (ref.current && randomIndex !== -1) {
          const letters = ref.current.querySelectorAll('.letter');
          if (letters.length > randomIndex) { // Check if the letter exists
            const randomLetter = letters[randomIndex];
            const animation = anime({
              targets: randomLetter,
              opacity: [1, 0],
              direction: 'alternate',
              duration: 50,
              easing: "easeOutExpo",
              autoplay: false
            });
            animations.push(animation);
          }
        }
      });

      animations.forEach(animation => animation.play()); // play all anims
      await Promise.all(animations.map(a => a.finished));

      // Reset the flag to allow the next animation
      isAnimatingRef.current = false;

      // call animateRandomLetter again after all animations are complete
      setTimeout(animateRandomLetter, 1000); //delay of 1 sec
    };
    animateRandomLetter();
  }, [refs]); // pass in an array of refs
};

export default useFlicker;