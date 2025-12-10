import compassLogo1 from "@/assets/logo-options/compass-logo-1.png";
import compassLogo2 from "@/assets/logo-options/compass-logo-2.png";
import compassLogo3 from "@/assets/logo-options/compass-logo-3.png";
import compassLogo4 from "@/assets/logo-options/compass-logo-4.png";

const LogoOptions = () => {
  const logos = [
    { id: 1, src: compassLogo1, name: "Opção 1", desc: "Bússola Clássica Fofa" },
    { id: 2, src: compassLogo2, name: "Opção 2", desc: "Bússola Aventureira com Mochila" },
    { id: 3, src: compassLogo3, name: "Opção 3", desc: "Bússola com Balão 'Hi!'" },
    { id: 4, src: compassLogo4, name: "Opção 4", desc: "Bolinha Minimalista Fofa" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50 p-8">
      <h1 className="text-3xl font-bold text-center text-emerald-700 mb-2">
        🧭 Escolha seu Logo
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Clique na opção que você mais gosta
      </p>
      
      <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
        {logos.map((logo) => (
          <div 
            key={logo.id}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer border-2 border-transparent hover:border-emerald-400"
          >
            <img 
              src={logo.src} 
              alt={logo.name}
              className="w-full h-auto rounded-xl mb-4"
            />
            <h2 className="text-xl font-bold text-emerald-700 text-center">
              {logo.name}
            </h2>
            <p className="text-gray-500 text-center text-sm">
              {logo.desc}
            </p>
          </div>
        ))}
      </div>
      
      <p className="text-center text-gray-500 mt-8">
        Após escolher, me diga qual número você prefere!
      </p>
    </div>
  );
};

export default LogoOptions;
