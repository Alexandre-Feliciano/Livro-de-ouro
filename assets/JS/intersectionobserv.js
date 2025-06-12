const div_title = document.getElementById("section-secundary");
const div_message = document.getElementById("message");

const titlecomand = new IntersectionObserver((entries, titlecomand) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.dispatchEvent(new Event("titlecomandos"));
            titlecomand.unobserve(entry.target);
        }
    });
}, {
    threshold: 0
});

const message = new IntersectionObserver((entries, message) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.dispatchEvent(new Event("messagecomandos"));
            message.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.7
});


if (div_title) titlecomand.observe(div_title);

if (div_message) message.observe(div_message);

