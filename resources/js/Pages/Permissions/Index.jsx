import { Head, Link } from "@inertiajs/react";
import { useRef, useState } from "react";
import Modal from "@/Components/Modal";
import DangerButton from "@/Components/DangerButton";
import SecondaryButton from "@/Components/SecondaryButton";

import Sidebar from '@/Layouts/Sidebar';

export default function Index({ auth, permissions }) {
    return (
        <>
            <Head title="Permisos" />
            <div className='container-fluid'>
                <div className='row'>
                    <Sidebar auth={auth}></Sidebar>
                    <main className="col-md-10 col-xs-5  col-lg-10 px-md-4">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h2 className="h2">Permisos</h2>

                            <div className="btn-toolbar mb-2 mb-md-0">
                                <div className="btn-group me-2">
                                    <Link href={route('permissions.create')} className="btn btn-sm btn-primary">Añadir Permisos</Link>
                                </div>
                            </div>
                        </div>

                        <div className="table-responsive">
                            <table className="table table-striped table-sm">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nombre</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {permissions.map((permission, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{permission.name}</td>
                                            <td>
                                                <Link href={route('permissions.edit', permission.id)} className="btn btn-sm btn-success mx-1">
                                                    <i class="fa-regular fa-pen-to-square mx-1"></i>
                                                    Editar</Link>

                                                <Link href={route('permissions.destroy', permission.id)}
                                                    className="btn btn-sm btn-danger mx-1 px-1"
                                                    as="button"
                                                    method="delete"
                                                >
                                                    <i class="fa-solid fa-trash mx-1"></i>
                                                    Borrar
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
};

