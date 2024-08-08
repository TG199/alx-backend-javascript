import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const [photoResult, userResult] = await Promise.all([
      uploadPhoto(),
      createUser(),
    ]);
    return {
      photo: {
        status: photoResult.status,
        body: photoResult.body,
      },
      user: {
        firstName: userResult.firstName,
        lastName: userResult.lastName,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      photo: null,
      user: null,
    };
  }
}
