// ENROLL
// PROGRESS
// CERTIFICATE

const enrollSuccess = true;
const mark = 80;

// ENROLMENT
const enroll = (callback) => {
    console.log("Course enrolment is process...");

    setTimeout(() => {
        if (enrollSuccess) {
            callback();
        } else {
            console.log("Enrollment failed")
        };
    }, 2000)
};

// PROGRESS
const progress = (callback) => {
    console.log("Course on progress...");

    setTimeout(() => {
        if (mark >= 80) {
            callback()
        } else {
            console.log("You could not get enough marks to get the certificate.")
        }
    }, 3000);
};

// GET THE CERTIFICATE
const certificate = () => {
    console.log("Preparing your certificate")

    setTimeout(() => {
        console.log("You got the certificate.")
    }, 1000);
};


enroll(() => {
    progress(certificate)
});