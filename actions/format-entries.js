/**
 * Format the Cloudant documents to be consumed by the user interface
 */
const md5 = require('spark-md5');

function main(params) {
  // params contain the "rows" coming from Cloudant including the full documents
  return {
    entries: params.rows.map((row) => { return {
      city: row.doc.city,
	    latitude: row.doc.latitude,
	    longitude: row.doc.longitude,
	    createdAt: row.doc.createdAt,
	    icon: (row.doc.latitude ? `https://secure.gravatar.com/avatar/${md5.hash(row.doc.latitude.trim().toLowerCase())}?s=64` : null)
    }})
	};
}
