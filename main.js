const element = document.querySelector('.order input[type="tel"]');
const maskOptions = {
    mask: '+{7}(000)000-00-00'
};
const mask = IMask(element, maskOptions);