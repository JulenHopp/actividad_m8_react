import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
    const [usuarios, setUsuarios] = useState([
        { id: 1, email: 'juan@example.com', name: 'Juan Pérez', passwordHash: 'hashed123' },
        { id: 2, email: 'maria@example.com', name: 'María López', passwordHash: 'hashed456' }
    ]);
    const [nuevoUsuario, setNuevoUsuario] = useState({ email: '', name: '', passwordHash: '' });
    const [editando, setEditando] = useState(null);

    // Manejar cambios en el formulario
    const handleChange = (e) => {
        setNuevoUsuario({ ...nuevoUsuario, [e.target.name]: e.target.value });
    };

    // Agregar usuario
    const agregarUsuario = () => {
        if (nuevoUsuario.email && nuevoUsuario.name && nuevoUsuario.passwordHash) {
            setUsuarios([...usuarios, { id: Date.now(), ...nuevoUsuario }]);
            setNuevoUsuario({ email: '', name: '', passwordHash: '' });
        }
    };

    // Editar usuario
    const editarUsuario = (usuario) => {
        setEditando(usuario.id);
        setNuevoUsuario(usuario);
    };

    // Guardar cambios en usuario editado
    const guardarEdicion = () => {
        setUsuarios(
            usuarios.map((usuario) =>
                usuario.id === editando ? { ...usuario, ...nuevoUsuario } : usuario
            )
        );
        setEditando(null);
        setNuevoUsuario({ email: '', name: '', passwordHash: '' });
    };

    // Eliminar usuario
    const eliminarUsuario = (id) => {
        setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
    };

    return (
        <div className="dashboard-container">
            <h2>Gestión de Usuarios</h2>
            <div className="form-container">
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={nuevoUsuario.email}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={nuevoUsuario.name}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="passwordHash"
                    placeholder="Password"
                    value={nuevoUsuario.passwordHash}
                    onChange={handleChange}
                />
                {editando ? (
                    <button className="save-btn" onClick={guardarEdicion}>Guardar Cambios</button>
                ) : (
                    <button className="add-btn" onClick={agregarUsuario}>Agregar Usuario</button>
                )}
            </div>
            <ul className="user-list">
                {usuarios.map((usuario) => (
                    <li key={usuario.id} className="user-item">
                        <span>{usuario.email} - {usuario.name}</span>
                        <div className="button-group">
                            <button className="edit-btn" onClick={() => editarUsuario(usuario)}>Editar</button>
                            <button className="delete-btn" onClick={() => eliminarUsuario(usuario.id)}>Eliminar</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;