'use strict'
const cls = new Classmyalertjs();
const fnc = Funcmyalertjs;
// testing
// cls.messaggio("Call method messaggio");
// fnc.showMyAlert("titolo", "messaggio.", "var(--info)", "var(--white)", "var(--warning)", "var(--dark)");
const button_create_pdf = document.querySelector('.btn-download-pdf');
button_create_pdf.addEventListener('click', function() {
    callCreatePDFTable(1);
});
const button_create_pdf2 = document.querySelector('.btn-download-pdf-2');
button_create_pdf2.addEventListener('click', function() {
    callCreatePDFTable(2);
});