(() => {
    const refs = {
    openModalBtn: document.querySelector("[data-modal-animator-open]"),
    closeModalBtn: document.querySelector("[data-modal-animator-close]"),
    modal: document.querySelector("[data-modal-animator]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
    document.body.classList.toggle("modal-open")
    refs.modal.classList.toggle("is-hidden");
    }
    refs.modal.addEventListener("click", handleBackdropClick);
    function handleBackdropClick(event) {
    if (event.target === refs.modal) {
        toggleModal();
    }
}
})();