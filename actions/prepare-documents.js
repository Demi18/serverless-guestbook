/**
 * Prepare the guestbook entry to be persisted
 */
function main(params) {
  if (!params.city || !params.longitude) {
    return Promise.reject({error: 'no city or longitude'});
  }

	return {
    doc: {
      createdAt: new Date(),
	    city: params.city,
	    latitude: params.latitude,
	    longitude: params.longitude,
	  }
  };
}
