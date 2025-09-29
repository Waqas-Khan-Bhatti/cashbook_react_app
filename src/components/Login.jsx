import '../styles/css/app.css';
import '../styles/css/light.css';
import '../styles/css/custom.css';

function Login() {
    return <>
    <main className="d-flex w-100">
    <div className="container d-flex flex-column">
        <div className="row vh-100">
            <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                <div className="d-table-cell align-middle">

                    <div className="text-center mt-4">
                        <h1 className="h2">Welcome back, to Cashbook</h1>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <div className="m-sm-4">
                                <div className="text-center">
                                    <img src="https://cb2.peakstar.pk/assets/themes/00_default/img/photos/logo-small.png" alt="Charles Hall" className="img-fluid rounded-circle" width="132" height="132" />
                                </div>
                                <form action="https://cb2.peakstar.pk/login" method="post">
                                                                        <div className="mb-3">
                                        <label className="form-label">Email</label>
                                        <input className="form-control form-control-lg" type="email" name="inputEmail" placeholder="Enter your email" required="" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input className="form-control form-control-lg" type="password" name="inputPassword" placeholder="Enter your password" required="" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">PIN</label>
                                        <input className="form-control form-control-lg" type="text" name="inputPin" placeholder="Enter your pin" required="" />
                                    </div>
                                    <div className="text-center mt-3">
                                        <button type="submit" className="btn btn-lg btn-primary">Sign in</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</main>
           </>;
}

export default Login