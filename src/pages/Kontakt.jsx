import React from 'react';

function Kontakt({posaljiEmail}){
    return (
        <div className='kontakt'>

            <div class="mb-4">
                <h2 class="h1-responsive font-weight-bold text-center my-4">Kontaktirajte nas</h2>
                <div class="row">
                    <div class="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <input type="text" id="name" name="name" class="form-control"/>
                                            <label for="name" class="">Ime i prezime</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <input type="text" id="email" name="email" class="form-control"/>
                                            <label for="email" class="">Email</label>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="md-form mb-0">
                                        <input type="text" id="subject" name="subject" class="form-control"/>
                                            <label for="subject" class="">Naslov</label>
                                    </div>
                                </div>
                            </div>

                            <div class="row">


                                <div class="col-md-12">

                                    <div class="md-form">
                                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                        <label for="message">Poruka</label>
                                    </div>

                                </div>
                            </div>


                        </form>

                        <div class="text-center text-md-left">
                            <button class="btn btn-primary" onClick={posaljiEmail}>Posalji</button>
                        </div>
                        <div class="status"></div>
                    </div>

                    <div class="col-md-3 text-center">
                        <ul class="list-unstyled mb-0">
                            <li><i class="fas fa-map-marker-alt fa-2x"></i>
                                <p>Beograd, SRB</p>
                            </li>

                            <li><i class="fas fa-phone mt-4 fa-2x"></i>
                                <p>+381 62 12345</p>
                            </li>

                            <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                                <p>email@email.com</p>
                            </li>
                        </ul>
                    </div>


                </div>

            </div>
        </div>
    );
}

export default Kontakt;