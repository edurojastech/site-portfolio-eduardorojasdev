import "@testing-library/jest-dom";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});

// jsdom não implementa estas APIs; framer-motion (useInView), Radix e o
// Embla dependem delas para montar.
class MockObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}
Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  value: MockObserver,
});
Object.defineProperty(window, "ResizeObserver", {
  writable: true,
  value: MockObserver,
});
window.scrollTo = () => {};
