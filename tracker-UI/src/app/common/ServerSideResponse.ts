/**
 * Response from server
 */
export interface ServerSideResponse {
	/**
	 * the data returned
	 */
	data: {
        status: number,
        message: string
    };

	/**
	 * last Row
	 */
	// lastRow: number;
}
