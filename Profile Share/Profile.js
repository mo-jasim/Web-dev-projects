const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

// Modal Open Function
const openModal = () => {
    console.log('Modal is Open');
    modal.classList.add('active');
    overlay.classList.add('overlay_active');
};

// Modal Close Function
const closeModal = () => {
    modal.classList.remove('active');
    overlay.classList.remove('overlay_active');
};