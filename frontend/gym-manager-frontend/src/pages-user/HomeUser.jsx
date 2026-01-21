import { useEffect, useState } from 'react'
import CodeQRImg from '/code_qr.png'
import qrcode from 'qrcode';



export default function HomeUser() {
    const securePIN = '*****';
    const [accessPIN, setAccessPIN] = useState(securePIN);
    const [mostrarPIN, setMostrarPIN] = useState(false);
    const [urlQRCode, setUrlQRCode] = useState(CodeQRImg);

    useEffect(() => {
            
        if (mostrarPIN) setAccessPIN('225500');
        const timerMostrartPIN = setTimeout(() => {
            setAccessPIN(securePIN);
            setMostrarPIN(false)
        }, 2000)
        return () => clearTimeout(timerMostrartPIN)

    }, [mostrarPIN]);

    const UserQRPin = async () => {
        try {
            const urlQR = await qrcode.toDataURL('STUARS THE BUG BOUNTER', { errorCorrectionLevel: 'H', color: {dark:"#010599FF", light:"#FFBF60FF"} });
            setUrlQRCode(urlQR);
        } catch (error) {
            console.error('ERRO EN CREAR QR CODE >> ', error)   
        }
    }
    UserQRPin();

    const ModalQRCode = () => {

        return(
        <>
        <button type="button" className="btn btn-outline-info" autoFocus data-bs-toggle="modal" data-bs-target="#modalQRCode">
           Escanear QR
        </button>
              
        <div className="modal fade bg-dark bg-opacity-50" id="modalQRCode" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5 mx-auto" id="exampleModalLabel">Tu QR listo para escanear!</h1>
                    </div>
                    <div className="modal-body">
                        <img src={urlQRCode} alt="QR code for user" />
                    </div>
                </div>
            </div>
        </div>
        </>
        )
    }

    return(
    <>
    <div className='w-100'>
        
        <div className="d-flex flex-column text-center py-3">

            <h5 className="fs-4">Métodos de Acceso al GYM</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quas quisquam voluptatem!</p>

            <div className='my-3'>
                <h5 className="fs-5">PIN de Acceso</h5>
                <div className="d-flex gap-2 justify-content-center">
                    <h5 className="bg-info fs-4 p-2 px-3 rounded-2 my-auto">{accessPIN}</h5>
                    <button type='button' onClick={() => setMostrarPIN(true)} className="btn btn-light">
                        <i className="bi bi-shield-lock fs-4"></i>
                    </button>
                </div>
            </div>

            <div className='my-3'>
                <h5 className=" fs-5">Código QR</h5>
                <ModalQRCode />

                <div className='d-flex justify-content-center p-3'>
                    <img src={urlQRCode} className='rounded-2' style={{width: '10rem'}} alt="QR code for user" />
                </div>
            </div>

        </div>

    </div>
    </>
    )
}
