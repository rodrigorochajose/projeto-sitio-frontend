import { Api } from "../../api/api";

export default function ModalDeletar({ model, descricao, identificador }) {
  const enviar = async (event, identificador) => {
    console.log(identificador);
    //await Api.deleteRequest(`/${model}/deletar/${id}`);
  };

  return (
    <div>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <i class="bi bi-trash"></i>
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Deletar {descricao}
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <b>Confirma a remoção do {descricao} ?</b>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Não
              </button>
              <input
                type="submit"
                class={`btn btn-primary`}
                value="Sim"
                onClick={enviar}
              />
              <p>{identificador}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
