// React
import { Head, usePage } from '@inertiajs/react';
import { Container, Row  } from "react-bootstrap";


export default function Comments() {
    return(
        <>
            <div class="card comment-section">
                <div class="p-3">
                    <h4>Comentarios</h4>
                </div>

                <div class="mt-3 d-flex flex-row align-items-center p-3 form-color">
                    <img src="https://i.imgur.com/zQZSWrt.jpg" width="50" class="rounded-circle me-2"/>
                    <input type="text" class="form-control" placeholder="Enter your comment..."/>
                </div>

                <div class="mt-2">
                    <div class="d-flex flex-row p-3">
                        <img src="https://i.imgur.com/zQZSWrt.jpg" width="40" height="40" class="rounded-circle me-3"/>
                                
                        <div class="w-100">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="d-flex flex-row align-items-center">
                                    <span class="me-2">Brian selter</span>
                                    <small class="c-badge">Top Comment</small>
                                </div>

                                <small>12h ago</small>
                            </div>

                            <p class="text-justify comment-text mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

                            {/* Feed (Ratings and Replys) */}
                            {/* <div class="d-flex flex-row user-feed">
                                <span class="wish"><i class="fa fa-heartbeat me-2"></i>24</span>
                                <span class="ms-3"><i class="fa fa-comments-o me-2"></i>Reply</span>       
                            </div>  */}
                        </div>         
                    </div>          
                </div>
            </div>   

            {/* Comentarios publicados */}
            {/* {comments[0].rating_for.length ? (
                comments[0].rating_for.map((user) => (
                    <Card.Body>
                        <div className="row no-gutters">
                            <div className="col-md">
                                <Card.Body>
                                    <Card.Title>Email:</Card.Title>
                                    <Card.Text>
                                        <i className="bi bi-person-circle pe-3" title="Chofer"></i>
                                        {user.email}
                                    </Card.Text>
                                    <Card.Title>Comentario: </Card.Title>
                                    <Card.Text>
                                        {user.rating.comment}
                                    </Card.Text>
                                    <Card.Title>Valoracion: </Card.Title>
                                    <Card.Text>
                                        {user.rating.score}
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </div>
                    </Card.Body>
                ))) : (
                    <p>No hay ningun comentario realizado. ¡Se el primero en hacerlo!</p>
            )} */}
        </>
    )
}