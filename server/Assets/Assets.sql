CREATE TABLE ASSETS(
    asset_id SERIAL UNIQUE,
    arcore_id varchar(255) UNIQUE,
    arcore_location varchar(255),
    ipfs_cid varchar(255) NOT NULL,
    name varchar(255) NOT NULL,
    owner varchar(255) NOT NULL,
    description varchar(255) NOT NULL,
	CONSTRAINT assets_primary_key PRIMARY KEY (asset_id) 
);
CREATE SEQUENCE sequence_assets_id;
ALTER SEQUENCE sequence_assets_id restart with 1;
-- To make arcore information not null after its development
ALTER TABLE ASSETS DROP CONSTRAINT assets_arcore_id_key;
ALTER TABLE ASSETS ADD CONSTRAINT no_empty_ipfs_cid_strings CHECK (length(ipfs_cid)>0);