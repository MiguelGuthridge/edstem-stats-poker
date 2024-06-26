import { Infer, enums } from 'superstruct';

/** Regions for EdStem servers */
const Region = enums(['au', 'us']);

/** Region type for EdStem servers */
export type TRegion = Infer<typeof Region>;

/** HTTP request method */
export type HttpVerb = 'GET' | 'POST' | 'PUT' | 'DELETE';

/** String representing a time stamp */
export type TimeString = string & { __timeString: '__timeString' };

/**
 * String representing thread content.
 *
 * This uses an XML dialect to represent information.
 */
export type ContentString = string & { __contentString: '__contentString' };
