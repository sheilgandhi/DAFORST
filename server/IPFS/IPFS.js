const db = require('../db_connect');

const projectId = '2DQAO76Gm3Nh4wMcSXfjnEtPMke';
const projectSecret = 'accc80441dad8d852bae8624ba48e856';
const auth =
  'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

const getIPFS = async (request, response) => {
  db.query(
    'SELECT * FROM IPFS ORDER BY ipfs_cid ASC',
    async (error, results) => {
      if (error) {
        throw error;
      }
      const res = await buildJson(results.rows);
      response.status(200).json(res);
    },
  );
};

const buildJson = async rows => {
  const { create } = await import('ipfs-http-client');
  const { CID } = await import('multiformats/cid');
  let array = [];
  const client = create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
      authorization: auth,
    },
  });
  for (let i = 0; i < rows.length; i++) {
    const id = rows[i].ipfs_cid;
    const result = await client.dag.get(CID.parse(id), {
      codec: 'dag-cbor',
      hashAlg: 'sha2-512',
    });
    array.push(result.value);
  }
  return array;
};

const buildJsonForCid = async rows => {
  const { create } = await import('ipfs-http-client');
  const { CID } = await import('multiformats/cid');
  const client = create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
      authorization: auth,
    },
  });
  const id = rows[0].ipfs_cid;
  const result = await client.dag.get(CID.parse(id), {
    codec: 'dag-cbor',
    hashAlg: 'sha2-512',
  });
  return result.value;
};

const getIPFSById = async (request, response) => {
  const ipfs_cid = request.params.ipfs_cid;

  db.query(
    'SELECT * FROM IPFS WHERE ipfs_cid = $1',
    [ipfs_cid],
    async (error, results) => {
      if (error) {
        throw error;
      }
      const res = await buildJsonForCid(results.rows);
      response.status(200).json(res);
    },
  );
};

const createIPFS = async (request, response) => {
  const { arcore_id, name, owner, description } = request.body;
  const { create } = await import('ipfs-http-client');

  console.log(request.body);
  const client = create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
      authorization: auth,
    },
  });
  const obj = {
    arcore_id,
    name,
    owner,
    description,
  };
  const cid = await client.dag.put(obj, {
    storeCodec: 'dag-cbor',
    hashAlg: 'sha2-512',
  });
  console.log(cid.toString());
  await new Promise(resolve => {
    setTimeout(resolve, 0);
  });
  db.query(
    'INSERT INTO IPFS VALUES ($1)',
    [cid.toString()],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`IPFS added`);
    },
  );
};

const deleteIPFS = (request, response) => {
  const ipfs_cid = request.params.ipfs_cid;

  db.query(
    'DELETE FROM IPFS WHERE ipfs_cid = $1',
    [ipfs_cid],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`IPFS deleted with ID: ${ipfs_cid}`);
    },
  );
};

module.exports = {
  getIPFS,
  getIPFSById,
  createIPFS,
  deleteIPFS,
};
