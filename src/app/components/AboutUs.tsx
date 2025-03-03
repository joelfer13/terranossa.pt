"use client";

import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="about" className="bg-[#ccccbc] py-16">
  <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
    {/* 📷 Imagem à esquerda */}
    <div className="w-full md:w-1/3">
      <Image
        src="/images/aboutus.jpg" 
        alt="Nossa Família"
        width={400}
        height={300}
        className="rounded-lg shadow-lg object-cover"
      />
    </div>

    {/* 📝 Texto à direita */}
    <div className="w-full md:w-2/3 md:pl-12 mt-6 md:mt-0 text-center md:text-left text-gray-900">
      <h2 className="text-3xl font-bold">Sobre Nós</h2>
      <p className="mt-4 text-lg leading-relaxed">
        Na <span className="text-green-600 font-semibold">Terra Nossa</span>, a nossa família acredita que os melhores momentos são passados em harmonia com a natureza. Somos apaixonados pela tranquilidade do campo, pela beleza das paisagens naturais e pelo bem-estar que um refúgio acolhedor pode proporcionar. 
        
        Foi com este espírito que decidimos abrir as portas dos nossos alojamentos. Aqui, cada detalhe foi pensado para criar uma experiência autêntica e memorável, seja para quem procura dias de descanso absoluto ou uma conexão mais profunda com a natureza.
        
        Mais do que um simples alojamento, a <span className="text-green-600 font-semibold">Terra Nossa</span> é o reflexo da nossa dedicação e carinho por este lugar especial. Queremos que sintas que esta terra também é tua – um espaço onde podes relaxar, explorar e criar memórias inesquecíveis.

        <br /><br />Bem-vindo à nossa casa. Bem-vindo à <span className="text-green-600 font-semibold">Terra Nossa</span>.
      </p>
    </div>
  </div>
</section>
  );
}
