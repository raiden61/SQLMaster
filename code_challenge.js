const openRegle = document.querySelector(".regle");
const overlayRegle = document.querySelector(".divRegle");
const closeRegle = document.querySelector('.boutonFermer');

function openPopupRegle() {
    overlayRegle.style.display = "flex";
    console.log("close Popup regle");
}
function closePopupRegle() {
    overlayRegle.style.display = 'none';
    console.log("close Popup regle");
}

openRegle.addEventListener('click', openPopupRegle);

closeRegle.addEventListener('click', closePopupRegle);


/* easy request */
const open_easy_request = document.querySelector(".easyRequest");
const overlay_easy_request = document.querySelector(".divrequest");
const close_easy_request = document.querySelector('.boutonFermerrequest');

function openPopup_easy_request() {
    overlay_easy_request.style.display = "flex";
    console.log("close Popup easy_request");
}
function closePopup_easy_request() {
    overlay_easy_request.style.display = 'none';
    console.log("close Popup easy_request");
}

open_easy_request.addEventListener('click', openPopup_easy_request);

close_easy_request.addEventListener('click', closePopup_easy_request);


/* average request */

const open_Average_request = document.querySelector(".averageRequest");
const overlay_Average_request = document.querySelector(".divAveragerequest");
const close_Average_request = document.querySelector('.boutonFermerAveragerequest');

function openPopup_Average_request() {
    overlay_Average_request.style.display = "flex";
    console.log("close Popup Average_request");
}
function closePopup_Average_request() {
    overlay_Average_request.style.display = 'none';
    console.log("close Popup Average_request");
}

open_Average_request.addEventListener('click', openPopup_Average_request);

close_Average_request.addEventListener('click', closePopup_Average_request);


/* hard request */

const open_Hard_request = document.querySelector(".hardRequest");
const overlay_Hard_request = document.querySelector(".divHardrequest");
const close_Hard_request = document.querySelector('.boutonFermerHardrequest');

function openPopup_Hard_request() {
    overlay_Hard_request.style.display = "flex";
    console.log("close Popup Hard_request");
}
function closePopup_Hard_request() {
    overlay_Hard_request.style.display = 'none';
    console.log("close Popup Hard_request");
}

open_Hard_request.addEventListener('click', openPopup_Hard_request);

close_Hard_request.addEventListener('click', closePopup_Hard_request);
