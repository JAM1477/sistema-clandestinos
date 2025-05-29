import { useState } from "react";

function SistemaRegistroClandestinos() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [verPassword, setVerPassword] = useState(false);
  const [autenticado, setAutenticado] = useState(false);

  const handleLogin = () => {
    if (usuario === "Jesus" && password === "clandestinos123") {
      setAutenticado(true);
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <img src="/logo.png" alt="Logo" className="mx-auto mb-4 w-32" />
        <h1 className="text-2xl font-bold mb-4">Inicio de Sesión</h1>
        {!autenticado ? (
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              className="block w-full px-4 py-2 text-black"
            />
            <div className="relative">
              <input
                type={verPassword ? "text" : "password"}
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-4 py-2 text-black"
              />
              <button
                type="button"
                onClick={() => setVerPassword(!verPassword)}
                className="absolute top-0 right-0 mt-2 mr-2 text-blue-500 text-sm"
              >
                {verPassword ? "Ocultar" : "Ver"}
              </button>
            </div>
            <button
              onClick={handleLogin}
              className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
            >
              Entrar
            </button>
          </div>
        ) : (
          <h2 className="text-xl">Bienvenido, {usuario}</h2>
        )}
      </div>
    </div>
  );
}

export default SistemaRegistroClandestinos;