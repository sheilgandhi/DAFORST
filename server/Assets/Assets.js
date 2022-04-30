const db = require("../db_connect");

const getAssets = (request, response) => {
  db.query("SELECT * FROM ASSETS ORDER BY asset_id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getAssetById = (request, response) => {
  const asset_id = parseInt(request.params.asset_id);

  db.query(
    "SELECT * FROM ASSETS WHERE asset_id = $1",
    [asset_id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const createAsset = (request, response) => {
  const { arcore_id, arcore_location, ipfs_cid, name, owner, description } =
    request.body;

  db.query(
    "INSERT INTO ASSETS VALUES (DEFAULT, $1, $2, $3, $4, $5, $6)",
    [arcore_id, arcore_location, ipfs_cid, name, owner, description],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Asset added`);
    }
  );
};

const deleteAsset = (request, response) => {
  const asset_id = parseInt(request.params.asset_id);

  db.query(
    "DELETE FROM ASSETS WHERE asset_id = $1",
    [asset_id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Asset deleted with ID: ${asset_id}`);
    }
  );
};

module.exports = {
  getAssets,
  getAssetById,
  createAsset,
  deleteAsset,
};
