export class FadeObserver {
  private observer: IntersectionObserver;

  constructor(private fade_elements: NodeListOf<Element>) {
    this.observer = new IntersectionObserver(this.observer_entries);
    this.fade_elements.forEach((element) => {
      this.observer.observe(element);
    });
  }

  private observer_entries(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        return entry.target.classList.add("fade-show");
      }
      return entry.target.classList.remove("fade-show");
    });
  }
}
