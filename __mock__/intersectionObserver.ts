export const mockIntersectionObserver = class {
  constructor(callback, options) {
    this.viewPort = options.root;
    this.entries = [];
    this.viewPort.addEventListener("scroll", () => {
      this.entries.map((entry) => {
        entry.isIntersecting = this.isInViewPort(entry.target);
      });
      callback(this.entries, this);
    });
  }

  isInViewPort(target) {
    // const rect = target.getBoundingClientRect()
    // const viewPortRect = this.viewPort.getBoundingClientRect()
    // return (
    //     rect.left >= viewPortRect.x &&
    //     rect.top >= viewPortRect.y &&
    //     rect.right <= viewPortRect.right &&
    //     rect.bottom <= viewPortRect.bottom
    // )
    return true;
  }

  observe(target) {
    this.entries.push({ isIntersecting: false, target });
  }

  unobserve(target) {
    this.entries = this.entries.filter((ob) => ob.target !== target);
  }

  disconnect() {
    this.entries = [];
  }
};

// https://junhyunny.github.io/javascript/jest/testing-library/test-driven-development/how-to-test-intersection-observer/
