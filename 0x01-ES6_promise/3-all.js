import { createUser, uploadPhoto } from './utils';

function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const userPromise = createUser();

  Promise.all([photoPromise, userPromise])
    .then((values) => {
      const [photoResponse, userResponse] = values;
      console.log(photoResponse.body.firstName, userResponse.body.lastName);
    })
    .catch(() => {
      console.log("Signup system offline");
    });
}

export default handleProfileSignup;
