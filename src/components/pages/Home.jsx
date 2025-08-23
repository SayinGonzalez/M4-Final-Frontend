import { useNavigate } from "react-router";

const Home = () => {

  const navigate = useNavigate();

  return (
    <section className="flex-1 p-6 content-center merienda-400">
      <div className="
        max-w-5xl mx-auto 
        grid lg:grid-cols-3 gap-3 lg:gap-6
      ">

        {/* TEXTO BIENVENIDA */}
        <div className="
          rounded-3xl p-8
          shadow-2xl bg-black/30
          text-slate-50 dark:text-slate-300 
          transform transition hover:scale-102 
        ">
          <h2 className="text-xl font-bold text-center mb-3">Bienvenido a Matchcotas</h2>
          <p className="mb-4 text-justify">
            Matchcotas es mucho más que una página: es el puente donde comienzan nuevas historias y se forjan lazos inolvidables.
            Acá podés adoptar a tu próximo compañero de aventuras o ayudar a que tu mascota encuentre pareja para compartir. Con la mejor onda y con la certeza de que los lazos más genuinos también se tejen entre patitas, bigotes y colitas que no paran de moverse.
            ¡Animate a ser parte de esta comunidad donde cada encuentro es una oportunidad para sumar alegría y amor!
          </p>
        </div>

        {/*  CARDS adoptions/matchcotas  */}
        <div className="flex flex-col gap-4 lg:gap-6 justify-evenly">

          {/*  CARD ADOPCIÓN  */}
          
          <div
            onClick={() => navigate('/adopciones')}
            className="
              relative h-58
              rounded-2xl shadow-lg
              transform transition hover:scale-102 overflow-hidden
              flex items-center justify-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1551779891-b83901e1f8b3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVycm8lMjB5JTIwZHVlJUMzJUIxb3xlbnwwfHwwfHx8MA%3D%3D')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay oscuro para mejorar legibilidad */}
            <div className="absolute inset-0 bg-black/40 text-center content-center">
              <h3 className="relative text-white  text-sm font-semibold">ADOPCIÓN</h3>
            </div>
          </div>

          {/*  CARD MATCHCOTAS  */}
          <div
            onClick={() => navigate('/matchcotas')}
            className="
              relative h-58
              rounded-2xl shadow-lg
              transform transition hover:scale-102 overflow-hidden
              flex items-center justify-center"
            style={{
              backgroundImage: `url('https://img.freepik.com/fotos-premium/pareja-gatitos-felices-duermen-relajarse-juntos-familia-gatitos-enamorados-narices-gatito-adorables-dia-san-valentin-acogedor-animal-domestico-durmiendo-comodamente_221542-3044.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay oscuro para mejorar legibilidad */}
            <div className="absolute inset-0 bg-black/40" />
            <h3 className="relative text-white text-sm font-semibold">MATCHCOTAS</h3>
          </div>
        </div>

        {/* columna derecha: una sola fila alto completo */}
        <div className="
          rounded-3xl p-8 
          shadow-2xl text-slate-50 dark:text-slate-300 
          transform transition hover:scale-102 bg-black/30
        ">
          <h2 className="text-xl font-bold text-center mb-3">El mejor lugar para vos y tu mascota</h2>
          <p className="mb-4 text-justify">
            Matchcotas es un lugar mágico donde tu mascota tiene su propio espacio. Armá su perfil, contá sus gustos, estado de salud, y mucho más, dejá que brille tal como es. Porque nuestros amiguitos merecen un match a su medida.
            ¡Sumate y descubrí el mundo mágico Matchcotas!


          </p>
        </div>

      </div>
    </section>
  );
};

export default Home;
