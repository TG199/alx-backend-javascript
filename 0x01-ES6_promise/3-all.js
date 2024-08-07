import uploadPhoto from "./utils"
import createUser from "./utils"

export default function handleProfileSignup() {
    const promise = Promise.all([uploadPhoto, createUser]);
    promise.then(([uploadPhoto, createUser]) => {
        console.log(`${uploadPhoto} ${createUser}`)
    }).catch((error)=> {
        console.error(error)
        console.log("Signup system offline");
    })
}