const db = require("./db_connect");

const getAssets = (request, response) => {
  db.query("SELECT * FROM COACH ORDER BY coach_id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getAssetById = (request, response) => {
  const coach_id = parseInt(request.params.coach_id);

  db.query(
    "SELECT * FROM coach WHERE coach_id = $1",
    [coach_id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const createAsset = (request, response) => {
  const { first_name, last_name, description, email } = request.body;

  db.query(
    "INSERT INTO coach VALUES (DEFAULT, $1, $2, $3, $4)",
    [first_name, last_name, description, email],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Coach added with ID: ${results}`);
    }
  );
};

const deleteAsset = (request, response) => {
  const coach_id = parseInt(request.params.coach_id);

  db.query(
    "DELETE FROM coach WHERE coach_id = $1",
    [coach_id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Coach deleted with ID: ${coach_id}`);
    }
  );
};

module.exports = {
  getCoaches,
  getCoachById,
  createCoach,
  updateCoachDescription,
  updateCoachEmail,
  deleteCoach,
};
