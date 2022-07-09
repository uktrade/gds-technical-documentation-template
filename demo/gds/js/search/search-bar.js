class SearchBar {
  displaySearchResults(results) {
    const html = [];
    results.forEach((r) => {
      html.push(`
<dt><a href="/${r.location}">${r.title}</a></dt>
<dd>${r.text}</dd>`);
    });

    const items = html.join("\n");
    const innerHTML = `<dl>${items}</dl>`;
    console.log(innerHTML);
    this.resultsContainer.innerHTML = innerHTML;
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

  constructor(simpleSearch, searchBox, searchResultsContainer) {
    this.search = simpleSearch;
    this.searchBox = searchBox;
    this.resultsContainer = searchResultsContainer;

    this.bindEvents(this.searchBox);
  }
}
