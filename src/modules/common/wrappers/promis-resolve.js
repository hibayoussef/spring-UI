/**
 *
 * @param {Promise} promise
 * @returns {Promise}
 * @description it resolves a promise to either a data object or null
 */
export const resolvePromiseForObjectOrNull = (promise) => {
    return new Promise((resolve, reject) => {
      promise
        .then((reply) => {
          resolve({
            data: reply.data.data,
            totalRecords: reply.data.total_records,
            msg: reply.data.msg,
          });
        })
        .catch((err) => {
          console.error("axios err: ", err);
          reject(null);
        });
    });
  };
  