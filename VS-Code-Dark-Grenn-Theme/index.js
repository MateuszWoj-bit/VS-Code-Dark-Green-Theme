//Tests for color changer menu

const fs = require("fs");

// Read the JSON file
fs.readFile("example.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  // Parse the JSON data into a JavaScript object
    const jsonData = JSON.parse(data);
    console.log(jsonData);

  // Modify the data as needed
  jsonData.colors["editor.background"] = "New Value";
  jsonData.colors["editor.foreground"] = 42;

  // Convert the modified object back to JSON
  const updatedJsonData = JSON.stringify(jsonData, null, 2); 

  
  fs.writeFile("example.json", updatedJsonData, "utf8", (err) => {
    if (err) {
      console.error("Error writing the file:", err);
    } else {
      console.log("JSON file has been updated.");
    }
  });
});
