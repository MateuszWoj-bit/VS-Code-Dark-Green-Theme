//Tests for color changer menu

const fs = require("fs");


fs.readFile("example.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }


    const jsonData = JSON.parse(data);
    

  // Modify the data as needed
  jsonData.colors["editor.background"] = "New Value";
  jsonData.colors["editor.foreground"] = 42;

const setting = jsonData?.tokenColors.find(
  (option) => option.name === "Comment" //Name of value changed
  );
setting.settings.foreground = "52"; //New value
  console.log(setting.settings.foreground);
  const updatedJsonData = JSON.stringify(jsonData, null, 2); 



  
  fs.writeFile("example.json", updatedJsonData, "utf8", (err) => {
    if (err) {
      console.error("Error writing the file:", err);
    } else {
      console.log("JSON file has been updated.");
    }
  });
});
