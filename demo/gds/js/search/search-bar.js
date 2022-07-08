class SearchBar {
  displaySearchResults(results) {
    results.forEach((r) => {
      console.log(r);
    });
  }

  bindEvents(searchBox) {
    searchBox.addEventListener("focus", function () {
      console.log("focus");
    });

    searchBox.addEventListener("keyup", (e) => {
      console.log("keyup");
      const results = this.search.search(e.target.value);
      this.displaySearchResults(results);
    });
  }

  constructor(simpleSearch, searchBox) {
    this.search = simpleSearch;
    this.searchBox = searchBox;

    this.bindEvents(this.searchBox);
  }
}
