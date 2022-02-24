export const getYOffset = (el: HTMLElement) => {
  const box = el.getBoundingClientRect();
  const body = document.body;
  const docEl = document.documentElement;
  const scrollTop = window.scrollY || docEl.scrollTop || body.scrollTop;
  const clientTop = docEl.clientTop || body.clientTop || 0;
  const top = box.top + scrollTop - clientTop;
  return Math.round(top);
};

export const smoothScroll = (
  e: React.MouseEvent | React.KeyboardEvent,
  target: string,
  navHeight: number,
  isMobile?: boolean,
  mobileCallback?: (props?: any) => void
) => {
  if (e.type === 'click') e.preventDefault();
  const targetEl = document.getElementById(target);
  if (targetEl) {
    const top = getYOffset(targetEl) - navHeight;
    setTimeout(() => {
      if (isMobile && mobileCallback) {
        mobileCallback();
      }
      window.scrollTo({ behavior: 'smooth', top: top });
    }, 1);
  }
};
