import { uploadPhoto, createUser } from './utils';

/*
* Promise.all(): allows you to efficiently handle multiple asynchronous
* operations concurrently and process their results together.
* The type of the result returned by Promise.all() is an array. This array contains the resolved
* values of all the promises passed to Promise.all() in 'the same order' as they were provided.
*/

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      console.log(`${results[0].body} ${results[1].firstName} ${results[1].lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
