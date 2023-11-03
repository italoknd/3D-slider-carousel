const fs = require("fs");

export const get_all_images = () => {
  const folderPath = "./assets";
  const all_images = [];

  fs.readdirSync(folderPath).forEach((file) => {
    if (file.endsWith(".jpg") || file.endsWith(".png")) {
      all_images.push(file);
    }
  });
  return all_images;
};
