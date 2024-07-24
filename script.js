let body = document.querySelector('body');

function eyesBall(event) {
    let eyes = document.querySelectorAll('.eye');
    eyes.forEach(function (eye) {
        // Get the bounding rectangle of the eye element
        let rect = eye.getBoundingClientRect();
        // Calculate the center of the eye
        let eyeX = rect.left + eye.clientWidth / 2;
        let eyeY = rect.top + eye.clientHeight / 2;

        // Calculate the angle using Math.atan2
        let radian = Math.atan2(event.pageY - eyeY, event.pageX - eyeX);
        let rotation = (radian * (180 / Math.PI)) + 180; // Adjusting the angle

        // Apply the rotation to the eye element
        eye.style.transform = `rotate(${rotation}deg)`;
    });
}

body.addEventListener('mousemove', eyesBall);
