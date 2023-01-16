// Dropdown

// Select DOM Elements
const itemFeature = document.querySelector('.link-item-feature')
const itemCompany = document.querySelector('.link-item-company')
const featureDown = document.querySelector('#feature-down')
const featureUp = document.querySelector('#feature-up')
const companyDown = document.querySelector('#company-down')
const companyUp = document.querySelector('#company-up')
const feature = document.querySelector('.dd-feature')
const company = document.querySelector('.dd-company')

// Add event listeners
itemFeature.addEventListener('click', () => {
    feature.classList.toggle('active');
    featureElements();
});

itemCompany.addEventListener('click', () => {
    company.classList.toggle('active');
    companyElements();
});

// This function is for when you click the link item "Features", the caret arrow will be active
// and the dropdown list will appear
// It also has an element where when it's active, it will make sure that the other
// link item is inactive.
function featureElements() {
    if (feature.classList.contains('active')) {
        featureUp.style.display = 'block';
        featureDown.style.display = 'none';
        company.classList.remove('active')
        companyUp.style.display = 'none';
        companyDown.style.display = 'block';
    } else {
        featureUp.style.display = 'none';
        featureDown.style.display = 'block';
    }
}

// This function is for when you click the link item "Company", the caret arrow will be active
// and the dropdown list will appear
// It also has an element where when it's active, it will make sure that the other
// link item is inactive.
function companyElements() {
    if (company.classList.contains('active')) {
        companyUp.style.display = 'block';
        companyDown.style.display = 'none';
        feature.classList.remove('active')
        featureUp.style.display = 'none';
        featureDown.style.display = 'block';
    } else {
        companyUp.style.display = 'none';
        companyDown.style.display = 'block';
    }
}

// Display Menu on Mobile 
const openBtn = document.querySelector('.menu-open')
const closeBtn = document.querySelector('.menu-close')
const linkItems = document.querySelector('.links')

openBtn.addEventListener('click', () => {
    linkItems.classList.toggle('show-links')
    toggleMenu()
})

closeBtn.addEventListener('click', () => {
    linkItems.classList.remove('show-links')
    toggleMenu()
})


function toggleMenu() {
    if (linkItems.classList.contains('show-links')) {
        openBtn.style.display = 'none'
        closeBtn.style.display = 'block'
    } else {
        openBtn.style.display = 'block'
        closeBtn.style.display = 'none'
    }
}




