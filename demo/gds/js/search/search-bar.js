class SearchBar {
  bindEvents(searchBox) {
    searchBox.addEventListener("focus", function () {
      console.log("focus");
    });

    searchBox.addEventListener("keyup", function (e) {
      console.log("keyup", e);
      console.log(this.value);
    });
  }

  constructor(simpleSearch, searchBox) {
    this.search = simpleSearch;
    this.searchBox = searchBox;

    this.bindEvents(this.searchBox);
  }
}
