const db = require('../connection.js');

const getAllItems = () => {
  return db
    .query(`
    SELECT title, price, photo, location_city, location_province, category, status_sold
    FROM items
    WHERE status_AVAILABLE = TRUE
    ORDER BY created_at`)
    .then((result) => {
      console.log("check items:", result)
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = {
  getAllItems
};
