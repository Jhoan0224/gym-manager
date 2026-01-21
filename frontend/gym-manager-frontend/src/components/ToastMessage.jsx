

export const ToastMessage = ({message}) => {    
    
    return(
    <>
    <div aria-live="polite" aria-atomic="true" className="d-flex justify-content-center align-items-center w-100">

        <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true"
            data-bs-autohide='true' data-bs-delay="30000">
            <div className="toast-header">
            <img src="..." className="rounded me-2" alt="..." />
            <strong className="me-auto">GYM-365</strong>
            {/* <small>11 mins ago</small> */}
            {/* <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button> */}
            </div>
            <div className="toast-body">
                {message}
            </div>
        </div>
    </div>
    </>
    )
}