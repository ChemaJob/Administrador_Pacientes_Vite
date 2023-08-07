const Pacientes = () => {
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">Hook</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">Chema</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        e-mail: {""}
        <span className="font-normal normal-case">user@mail.com</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha alta: {""}
        <span className="font-normal normal-case">10 de octubre de 2022</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas: {""}
        <span className="font-normal normal-case">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, dicta
          aspernatur tempore, ut animi sunt officia cupiditate blanditiis sit
          ipsam quia, eos doloremque pariatur nobis praesentium dignissimos
          nulla qui iusto.
        </span>
      </p>
    </div>
  );
};

export default Pacientes;
