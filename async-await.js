// ENROLL
// PROGRESS
// CERTIFICATE

const enrollSuccess = true;
const mark = 90;

// ENROLMENT
const enroll = (callback) => {
    console.log("Course enrolment is process...");

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (enrollSuccess) {
                resolve();
            } else {
                reject("Enrollment failed")
            };
        }, 2000)
    });

    return promise;
};


// PROGRESS
const progress = (callback) => {
    console.log("Course on progress...");

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (mark >= 80) {
                resolve()
            } else {
                reject("You could not get enough marks to get the certificate.")
            }
        }, 3000);
    });

    return promise;
};

// GET THE CERTIFICATE
const certificate = () => {
    console.log("Preparing your certificate")

    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("You got the certificate.")
        }, 1000);
    })

    return promise;
};


const course = async () => {
    try {
        await enroll();
        await progress();
        const message = await certificate();
        console.log(message)
    } catch (error) {
        console.log(error)
    }
};

course();