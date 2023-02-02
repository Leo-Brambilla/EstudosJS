const formContainer = document.querySelector('.form-container');

window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    event.returnValue = '';

    const modal = document.createElement('div');
    modal.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Atenção</h5>
                    </div>
                    <div class="modal-body">
                        As alterações não foram salvas e serão perdidas, deseja sair da página?
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" id="yesBtn">Sim</button>
                        <button type="button" class="btn btn-primary" id="noBtn">Não</button>
                    </div>
                </div>
            </div>
        `;
    modal.classList.add('modal');
    modal.style.display = 'block';
    document.body.appendChild(modal);

    const yesBtn = document.querySelector('#yesBtn');
    const noBtn = document.querySelector('#noBtn');

    yesBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        window.location.href = 'about:blank';
    });

    noBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        modal.classList.remove('modal');
    });
});