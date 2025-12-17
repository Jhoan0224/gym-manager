
export function Contactos() {


    return(
    <>
    <div className="d-flex flex-column gap-3 align-items-center mx-auto">
        <div>
            <h5 className="fs-5">THE-GYM | Centro de Contactos </h5>
        </div>

        <div className="d-flex gap-4 p-3">
            <div className="text-center my-auto">
                <i className="bi bi-briefcase fs-2"></i>
                <h5 className="fs-6">Contactos de Negocios</h5>
            </div>
            <div>
                <ul className="list-group">
                    <li className="list-group-item"><b>Email</b>: business@thegym.com</li>
                    <li className="list-group-item"><b>WhatsApp</b>: +123 456-789</li>
                    <li className="list-group-item"><b>Teléfono</b>: +123 258-147</li>
                </ul>
            </div>
        </div>
        <hr className="border border-secondary border-2 w-100" />
        <div className="d-flex gap-4 p-3">
            <div className="text-center my-auto">
                <i className="bi bi-chat-dots fs-2"></i>
                <h5 className="fs-6">Atencion al Cliente</h5>
            </div>
            <div>
                <ul className="list-group">
                    <li className="list-group-item"><b>Email</b>: clientes@thegym.com</li>
                    <li className="list-group-item"><b>WhatsApp</b>: +123 456-789</li>
                    <li className="list-group-item"><b>Teléfono</b>: +123 258-147</li>
                </ul>
            </div>
        </div>
    </div>
    </>
    )
}