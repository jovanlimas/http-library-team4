class coreHTTP {
  /* <<< HTTP GET request >>> */
  async get(url, callback) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`GET Error: ${response.status}`);
      }

      const data = await response.text();
      callback(null, data);

    } catch (error) {
      callback(error.message);
    }
  }

  /* <<< HTTP POST request >>> */
  async post(url, data, callback) {
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          "Content-type": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error(`POST Error: ${response.status}`);
      }

      const responseData = await response.text();
      callback(null, responseData);

    } catch (error) {
      callback(error.message);
    }
  }
}

// TODO: Migrate PUT and DELETE requests to the JavaScript Fetch API.
// Below code are not yet changed.

/* <<< HTTP PUT request >>> */
coreHTTP.prototype.put = function(url, data, callback) {
  this.http.open("PUT", url);
  this.http.setRequestHeader("content-type","application/json");

  this.http.onload = () => {
    if (this.http.status >= 200 && this.http.status <= 299) {
      callback(null, this.http.responseText);
    } else {
      callback(`PUT Error: ${this.http.status}`);
    }
  }

  this.http.send(JSON.stringify(data));
}

/* <<< HTTP DELETE request >>> */
coreHTTP.prototype.delete = function(url, callback) {
  this.http.open("DELETE", url);
  
  this.http.onload = () => {
    if (this.http.status >= 200 && this.http.status <= 299) {
      callback(null, "User Deleted");
    } else {
      callback(`DELETE Error: ${this.http.status}`);
    }
  }

  this.http.send();  
}
