document.addEventListener("DOMContentLoaded", () => {
    const bouncingImages = [
        { id: 'bouncingImage1', link: '눈웃음.html' },
        { id: 'bouncingImage2', link: '입웃음.html' }
    ];

    function getRandomDirection() {
        return (Math.random() < 0.5 ? -1 : 1) * (Math.random() * 2 + 1);
    }

    function moveImage(image, speed) {
        let xDirection = getRandomDirection();
        let yDirection = getRandomDirection();
        let x = Math.random() * (window.innerWidth - 50); // 이미지 너비 200px
        let y = Math.random() * (window.innerHeight - 50); // 이미지 높이 200px

        function updatePosition() {
            x += xDirection * speed;
            y += yDirection * speed;

            if (x <= 0 || x + 50 >= window.innerWidth) { // 이미지 너비 200px
                xDirection *= -1;
            }
            if (y <= 0 || y + 50 >= window.innerHeight) { // 이미지 높이 200px
                yDirection *= -1;
            }

            image.style.left = `${x}px`;
            image.style.top = `${y}px`;

            requestAnimationFrame(updatePosition);
        }

        updatePosition();
    }

    bouncingImages.forEach(bouncingImage => {
        const imageElement = document.getElementById(bouncingImage.id);
        imageElement.style.width = '100px'; // 이미지 너비 설정
        imageElement.style.height = '100px'; // 이미지 높이 설정
        imageElement.style.pointerEvents = 'auto'; // 클릭 가능하게 설정
        imageElement.style.cursor = 'pointer';
        imageElement.addEventListener('click', () => {
            window.location.href = bouncingImage.link;
        });
        moveImage(imageElement, 0.5); // 속도 설정
    });
});
