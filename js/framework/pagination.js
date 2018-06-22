const newPages = () => {
  let pages = new Object();
  pages.length = 0;
  pages.current = 0;
  pages.previous = false;
  pages.next = false;
  pages.page = new Object();
  pages.params = new Object();
  return pages;
};
