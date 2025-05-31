  const searchBar = document.querySelector('.searchbar');
  const books = document.querySelectorAll('.book');

  let matches = [];
  let currentIndex = -1;

  searchBar.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    matches = [];
    currentIndex = -1;

    books.forEach(book => {
      const title = book.querySelector('.title')?.textContent.toLowerCase() || '';
      const author = book.querySelector('.author')?.textContent.toLowerCase() || '';

      if (title.includes(searchTerm) || author.includes(searchTerm)) {
        matches.push(book);
      }
    });

    // Clear highlights
    books.forEach(book => book.classList.remove('highlight'));

    // Highlight the first match
    if (matches.length > 0) {
      currentIndex = 0;
      matches[currentIndex].classList.add('highlight');
      matches[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });

  searchBar.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent form submission

      if (matches.length > 0) {
        // Remove highlight from current
        matches[currentIndex].classList.remove('highlight');

        // Move to next match
        currentIndex = (currentIndex + 1) % matches.length;

        // Highlight new current
        matches[currentIndex].classList.add('highlight');
        matches[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  });

  searchBar.addEventListener('blur', function() {
    // Clear highlights when search loses focus
    books.forEach(book => book.classList.remove('highlight'));
    matches = [];
    currentIndex = -1;
  });