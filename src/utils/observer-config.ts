const setFader = (fade_elements: NodeListOf<HTMLElement>) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        return entry.target.classList.add("fade-show");
      }
    });
  });
  fade_elements.forEach((entry) => {
    observer.observe(entry);
  });
};
export { setFader };
