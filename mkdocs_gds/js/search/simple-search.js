class SiteSearch {
  index = {};
  documents = {};

  loadSearchIndex() {
    return new Promise((resolve, reject) => {
      fetch(`${base_url}/search/search_index.json`)
        .then((response) => {
          if (response.status == 200) return response.json();

          throw `Error loading site search`;
        })
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          console.error(err);
          reject(err);
        });
    });
  }

  async asyncCtor() {
    const data = await this.loadSearchIndex();
    // Create a hash from the documents so we can find based on location
    data.docs.forEach((d) => {
      this.documents[d.location] = d;
    });

    this.index = lunr(function () {
      this.ref("location");
      this.field("title");
      this.field("text");

      data.docs.forEach(function (d) {
        this.add(d);
      }, this);

      console.log("loaded search");
    });
  }

  search(searchTerm) {
    const searchResults = this.index.search(searchTerm);
    const matchedDocuments = [];
    searchResults.forEach((r) => {
      if (this.documents.hasOwnProperty(r.ref)) {
        matchedDocuments.push(this.documents[r.ref]);
      }
    });

    return matchedDocuments;
  }

  constructor() {
    this.asyncCtor()
      .then()
      .catch((err) => {
        console.error(err);
      });
  }
}
