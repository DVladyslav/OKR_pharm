// Реалізована функція «Діалог з користувачем» із застосованими змінними, умовними розгалуженнями, циклами
function dialogWithUser() {
    if (!confirm("Ласкаво просимо на сайт MedTrustUA \uD83D\uDC4B ! Бажаєте отримати деякі інструкції щодо користування сайтом? Якщо так, натисніть 'ОК'.")) {
        return;
    }
    let userName = prompt("Як вас звати?", "Гість");
    if (userName) {
        alert(`Приємно познайомитися \uD83D\uDE04 ! ${userName}, до Вашої уваги пропонуємо експрес-інструкцію користування сайтом.`);
    }
    let pages = [
        { name: "Головна", url: "./index.html", description: "Це сторінка Головна \uD83C\uDFE0, де Ви можете знайти загальну інформацію про наш сервіс MedTrustUA, переглянути наші відзнаки та отримати наші контакти." },
        { name: "Каталог", url: "./catalogue.html", description: "На сторінці Каталог \uD83D\uDCD6 Ви можете переглянути популярні та доступні ліки, категорії медичних та дієтичних препаратів, а також інструкції оформлення замовлення." },
        { name: "Аптеки", url: "./pharmacies.html", description: "На сторінці Аптеки \uD83C\uDFE5 можна знайти інформацію про найближчі аптеки та їхній графік роботи. Це досить зручно робити із інтерактивно мапою." },
        { name: "Консультації", url: "./consultations.html", description: "На сторінці Консультації \uD83D\uDC68\u200D\u2695\uFE0F\uD83D\uDC69\u200D\u2695\uFE0F Ви можете отримати консультацію від професійних лікарів онлайн. У нас працюють тільки досвідчені та розуміючі спеціалісти." }
    ];
    for (let i = 1; i < pages.length; i++) {
        alert(pages[i].description);
        if (confirm(`Перейти на сторінку "${pages[i].name}"? Якщо так, натисніть 'ОК'`)) {
            window.location.href = pages[i].url;
            return;
        }
    }
    alert("Дякуємо за вибір MedTrustUA! Хай все буде добре! Слава Україні \uD83C\uDDFA\uD83C\uDDE6 !");
}
// Функція порівняння двох рядків
function compareStrings() {
    let str1 = prompt("Введіть перший рядок:", "abc");
    let str2 = prompt("Введіть другий рядок:", "abcde");
    if (!str1 || !str2) {
        alert("Будь ласка, введіть обидва рядки");
        return;
    }
    let length = Math.min(str1.length, str2.length);
    for (let i = 0; i < length; i++) {
        if (str1[i] > str2[i]) {
            alert(`Більший рядок: ${str1} \nЗнайдено на ітерації № ${i + 1}`);
            return;
        } else if (str1[i] < str2[i]) {
            alert(`Більший рядок: ${str2} \nЗнайдено на ітерації № ${i + 1}`);
            return;
        }
    }
    if (str1.length === str2.length) {
        alert("Рядки однакові.");
    } else if (str1.length > str2.length) {
        alert(`Більший рядок: ${str1}`);
    } else {
        alert(`Більший рядок: ${str2}`);
    }
}
function addReviewFromInput() {
    const name = document.getElementById("name").value;
    const reviewText = document.getElementById("reviewText").value;
    let rating = document.getElementById("rating").value;
    if (!name || !reviewText || !rating) {
        alert("Будь ласка, заповніть усі поля!");
        return;
    }
    rating = Number(rating);
    if (rating < 1 || rating > 5) {
        alert("Оцінка повинна бути від 1 до 5.");
        return;
    }

    const reviewsContainer = document.getElementById("reviews");

    const reviewDiv = document.createElement("div");
    reviewDiv.classList.add("review");

    const authorSpan = document.createElement("span");
    authorSpan.classList.add("name");
    authorSpan.textContent = name + ": ";
    reviewDiv.prepend(authorSpan);


    const reviewTextNode = document.createTextNode(reviewText);
    reviewDiv.append(reviewTextNode);


    const ratingNode = document.createElement("span");
    ratingNode.classList.add("rating");
    ratingNode.textContent = ` // Оцінка: ${rating}/5`;
    reviewDiv.append(ratingNode);

    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("buttons");

    const removeButton = document.createElement("button");
    removeButton.textContent = "Видалити";
    removeButton.onclick = () => {
        const prevElement = reviewDiv.previousElementSibling;
        const nextElement = reviewDiv.nextElementSibling;
        if (prevElement && prevElement.classList.contains("divider")) {
            prevElement.remove();
        }
        if (nextElement && nextElement.classList.contains("divider")) {
            nextElement.remove();
        }
        reviewDiv.remove();
    };

    const editButton = document.createElement("button");
    editButton.textContent = "Редагувати";
    editButton.onclick = () => editReview(reviewDiv);

    buttonsDiv.append(removeButton, editButton);
    reviewDiv.append(buttonsDiv);

    reviewsContainer.append(reviewDiv);
    const dividerBefore = document.createElement("div");
    dividerBefore.classList.add("divider");
    reviewDiv.before(dividerBefore);
    const dividerAfter = document.createElement("div");
    dividerAfter.classList.add("divider");
    reviewDiv.after(dividerAfter);

    document.getElementById("name").value = "";
    document.getElementById("reviewText").value = "";
    document.getElementById("rating").value = "";
}
function editReview(reviewDiv) {
    const textNode = reviewDiv.childNodes[1];

    const newReviewText = prompt("Редагувати відгук:", textNode.textContent);
    if (newReviewText !== null) {
        const newTextNode = document.createTextNode(newReviewText);
        textNode.replaceWith(newTextNode);
    }
}

//================================== ЛАБОРАТОРНА РОБОТА 7 ==================================

