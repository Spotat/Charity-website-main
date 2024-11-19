
document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.style.padding = "0 18px"
            } else {
                headers.forEach(otherHeader => {
                    if (otherHeader !== this) {
                        otherHeader.nextElementSibling.maxHeight = null
                        otherHeader.nextElementSibling.padding = "0 18px"
                    }
                });
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.padding = "18px"
            }

        })
    })
})
