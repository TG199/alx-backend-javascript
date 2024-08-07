import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promises = [uploadPhoto(), createUser()];
  Promise.all(promises)
    .then((results) => {
      const [photoResult, userResult] = results;
      console.log(photoResult.body, userResult.firstName, userResult.lastName);
    }).catch(() => {
      console.error('Signup system offline');
    });
}
