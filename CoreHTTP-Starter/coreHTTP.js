class coreHTTP {
  /* <<< HTTP GET request >>> */
  async get(url, callback) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`GET Error: ${response.status}`);
      }

      const data = await response.text();
      //console.log(`GET data: ${data}`);
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
          Accept: "application/json",
          "Content-type": "application/json",
        },
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

  /* <<< HTTP PUT request >>> */
  async put(url, data, callback) {
    try {
      const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`PUT Error: ${response.status}`);
      }

      const responseData = await response.text();
      callback(null, responseData);
    } catch (error) {
      callback(error.message);
    }
  }

  /* <<< HTTP DELETE request >>> */
  async delete(url, callback) {
    try {
      const response = await fetch(url, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`DELETE Error: ${response.status}`);
      }
      callback(null, "User Deleted");
    } catch (error) {
      callback(error.message);
    }
  }
}
