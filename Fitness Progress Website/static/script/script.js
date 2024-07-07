





















































// const paragraphs = [
//     "Push-ups are a foundational bodyweight exercise that targets the chest, shoulders, and triceps while also engaging the core muscles for stability. They can be modified to suit various fitness levels and goals, making them a versatile addition to any workout routine.",
//     "The chest press, whether performed with dumbbells, a barbell, or a machine, primarily targets the pectoral muscles (chest). It's effective for building upper body strength and muscle mass, and variations like incline and decline presses help target different areas of the chest.",
//     "Chest flies isolate the chest muscles and are excellent for developing muscle definition and strength. By performing the movement in a controlled manner, you can effectively target the chest while minimizing stress on the shoulders.",
//     "Barbell curls are a classic biceps exercise that targets the front of the upper arm. They're effective for building size and strength in the biceps and can be varied by changing grip width or using an EZ-curl bar.",
//     "Biceps curls with dumbbells allow for a greater range of motion and unilateral training, helping to address strength imbalances between the arms. By focusing on a full range of motion and controlling the weight, you can maximize muscle engagement and growth.",
//     "Preacher curls isolate the biceps by eliminating momentum and stabilizing the upper arms. This seated or standing exercise is excellent for targeting the peak of the biceps and developing overall arm strength.",
//     "Deadlifts are a compound exercise that targets multiple muscle groups, including the hamstrings, glutes, lower back, and grip strength. They're essential for building functional strength and power and can be adapted for various fitness levels with different equipment.",
//     "Pull-ups are a challenging bodyweight exercise that primarily targets the back muscles, including the latissimus dorsi and rhomboids, as well as the biceps. They're excellent for building upper body strength and improving grip strength and can be modified with different grip widths.",
//     "Seated rows target the muscles of the upper back, including the rhomboids, traps, and rear deltoids. By retracting the shoulder blades and pulling the handle towards the torso, you can effectively strengthen and sculpt the back muscles.",
//     "Dips primarily target the triceps, chest, and shoulders and are excellent for building upper body strength and muscle mass. By adjusting body position and hand placement, you can emphasize different muscle groups and increase or decrease resistance.",
//     "Tricep rope pushdowns isolate the triceps and are effective for building muscle definition and strength in the back of the arms. By maintaining tension throughout the movement and focusing on the contraction at the bottom, you can maximize triceps activation.",
//     "Triceps kickbacks target the triceps and are excellent for developing muscle definition and strength in the back of the arms. By keeping the upper arm stationary and extending the forearm backward, you can effectively isolate the triceps.",
//     "Shoulder presses target the deltoid muscles of the shoulders and are essential for building upper body strength and muscle mass. By using dumbbells or a barbell and maintaining proper form, you can effectively target the shoulders while minimizing stress on the joints.",
//     "Behind-the-back shoulder presses target the rear deltoids and are excellent for developing overall shoulder strength and stability. By using proper form and controlling the weight, you can effectively target the muscles of the shoulders and upper back.",
//     "Shoulder press machines provide stability and support, making them suitable for beginners or those with joint issues. By adjusting the seat and hand positions, you can target different areas of the shoulders and upper body.",
//     "Squats are a compound exercise that targets the quadriceps, hamstrings, glutes, and core muscles. They're essential for building lower body strength and power and can be performed with bodyweight or additional resistance.",
//     "Sumo squats target the inner thigh muscles (adductors) and are excellent for building lower body strength and muscle mass. By using a wide stance and keeping the knees aligned with the toes, you can effectively target the muscles of the inner thighs.",
//     "Lunges are a unilateral exercise that targets the quadriceps, hamstrings, glutes, and core muscles. They're excellent for improving balance, stability, and coordination and can be performed with bodyweight or additional resistance."
// ];
// const imagePaths = [
//     "D:\\programing\\minor project\\static\\images\\push-up.jpg",
//     "D:\\programing\\minor project\\static\\images\\chest-press.jpg",
//     "D:\\programing\\minor project\\static\\images\\chest-fly.jpg",
//     "D:\\programing\\minor project\\static\\images\\barbell-curl.jpg",
//     "D:\\programing\\minor project\\static\\images\\biceps-curl.jpg",
//     "D:\\programing\\minor project\\static\\images\\preacher-curl.jpg",
//     "D:\\programing\\minor project\\static\\images\\deadlift.jpg",
//     "D:\\programing\\minor project\\static\\images\\pull-ups.jpg",
//     "D:\\programing\\minor project\\static\\images\\seated-row.jpg",
//     "D:\\programing\\minor project\\static\\images\\dips.jpg",
//     "D:\\programing\\minor project\\static\\images\\tricep-rope-pushdown.jpg",
//     "D:\\programing\\minor project\\static\\images\\triceps-kickback.jpg",
//     "D:\\programing\\minor project\\static\\images\\shoulderpress.jpg",
//     "D:\\programing\\minor project\\static\\images\\behindback-shouolder-press.jpg",
//     "D:\\programing\\minor project\\static\\images\\shoulder-press-machine.jpg",
//     "D:\\programing\\minor project\\static\\images\\squat.jpg",
//     "D:\\programing\\minor project\\static\\images\\sumo-squat.jpg",
//     "D:\\programing\\minor project\\static\\images\\lunges.jpg"
// ];

// document.addEventListener("DOMContentLoaded", function() {
//     function getQueryParam (param) {
//         const urlParams = new URLSearchParams(window.location.search);
//         return urlParams.get(param);
//     }

//     const data1 = getQueryParam('data');
//     const index = getQueryParam('index');

//     const data1Display = document.getElementById('headTitle');
//     if (data1) {
//         data1Display.textContent = data1;
//     }

//     const data2Display = document.getElementById('dataDisplay');
//     if (index) {
//         if (!isNaN(index) && index >= 0 && index < paragraphs.length) {
//             data2Display.textContent = paragraphs[index];
//         } else {
//             data2Display.textContent = "Invalid index or no index specified.";
//         }
//     }
//     const displayImage = document.getElementById('displayImage');
//     if (index) {
//         if (!isNaN(index) && index >= 0 && index < imagePaths.length) {
//             const image = new Image();
//             image.src = imagePaths[index];
//             displayImage.appendChild(image);
//         } else {
//             displayImage.textContent = "Invalid index or no index specified.";
//         }
//     }

// });
