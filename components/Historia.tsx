import Image from "next/image";

export default function Historia() {
  return (
    <section className="w-full bg-gray-100 py-16 px-6 md:px-12 lg:px-24 flex flex-col-reverse lg:flex-row items-center gap-10">
      
      {/* Texto da história */}
      <div className="w-full lg:w-1/2 text-gray-800">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
          Nossa História
        </h2>
        <p className="mb-4 leading-relaxed text-base sm:text-lg">
          Tudo começou com um sonho. O sonho de um homem simples, determinado a dar à sua família uma vida mais digna, mais segura e com mais oportunidades.
        </p>
        <p className="mb-4 leading-relaxed text-base sm:text-lg">
          Foi da necessidade, do esforço diário e da vontade de vencer que nasceu o embrião da nossa empresa. No início, o trabalho era duro e artesanal: fornecendo calhas e acessórios para telhados com chapas galvanizadas, sempre com o olhar atento à qualidade e ao bom atendimento.
        </p>
        <p className="mb-4 leading-relaxed text-base sm:text-lg">
          Com o passar dos anos, a dedicação, a ética no trato com parceiros e a busca constante por melhorias foram moldando não apenas uma empresa — mas uma história de superação, responsabilidade e visão de futuro.
        </p>
        <p className="mb-4 leading-relaxed text-base sm:text-lg">
          Hoje, mais do que fornecer materiais para cobertura, fabricamos as próprias telhas metálicas que levam nossa marca e nossa essência: resistência, inovação e confiança.
        </p>
        <p className="text-base sm:text-lg text-gray-700 italic">
          Cada telha que sai da nossa produção carrega um propósito: proteger sonhos, cobrir histórias e garantir a tranquilidade de quem confia no nosso trabalho.
        </p>
      </div>

      {/* Imagem ilustrativa */}
      <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] relative rounded-2xl overflow-hidden shadow-md">
        <Image
          src="/telhas/obra.webp" // ⬅️ Substitua por uma imagem real
          alt="Homem trabalhando com chapas metálicas"
          fill
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}
