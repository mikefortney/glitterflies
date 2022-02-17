import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { useScroll } from 'react-scroll-hooks';

const useHeroScroll = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [oldScrollY, setOldScrollY] = useState(0);

  const scrollSpeed = 30;
  const { scrollToElement, scrollToY } = useScroll({ scrollSpeed });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const winHeight = window.innerHeight;
      if (scrollY > oldScrollY && scrollY < winHeight) {
        scrollToElement(contentRef as MutableRefObject<HTMLElement>);
      } else if (scrollY < oldScrollY && scrollY < winHeight) {
        scrollToY(0);
      }
      setOldScrollY(scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [oldScrollY, scrollToElement, scrollToY]);

  return {
    contentRef
  };
};

export default useHeroScroll;
