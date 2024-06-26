import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="containerEmpresa">
      <div className="txtEmpresa">
        
        <p>Fabricação própria </p>
        <h2>de Telhas Metálicas </h2>
        <p>As melhores Marcas </p>
        <h2>em Telha de fibrocimento </h2>

      </div>
      <div className="logoEmpresa">
        <Image
        src="/logoMenor.png"
        width={500}
        height={200}
        alt="logotipo nossa calha e telhas"
        />
        <h1>Há mais de 20 anos crescendo com foco em entregar o melhor em produtos e serviços.</h1>
      </div>
      </section>

      <Link href="https://wa.me/5511997865848" >
      <div className="btnOrcamentoWhats">
        <p>ORÇAMENTO NO WHATSAPP</p>
      </div>
      
      </Link>



      <section className="containerProdutos">
        <div className="produtos">
          <div className="telha">
                <Image
                  src="/fibrocimento.png"
                  width={200}
                  height={300}
                  alt="telha de fibrocimento"
                  className="imgFibro"
                />
                <h1>Telhas em Fibrocimento</h1>
                <ul>
                  <li>244 x 110 x 5mm</li>
                  <li>244 x 110 x 5mm</li>
                  <li>244 x 110 x 5mm</li>
                  <li>244 x 110 x 5mm</li>
                  <li>244 x 110 x 5mm</li>
                </ul>
            </div>


            <div className="telha">
                <Image
                  src="/galvanizada.png"
                  width={200}
                  height={300}
                  alt="telha de fibrocimento"
                  className="imgMetal"
                />
                <h1>Telhas Metálicas</h1>
                <h3>Fabricamos telhas com até 10 metros de comprimento</h3>
            </div>


            <div className="telha">
                <Image
                  src="/Trapezio.png"
                  width={200}
                  height={300}
                  alt="telha de Termoacústica"
                  className="imgFibro"
                />
                <h1>Telhas Termoacústica</h1>
                <h3>Fabricamos telhas com até 10 metros de comprimento com eps 'isopor' de 30 ou de 50 milimetros de espessura</h3>
            </div>


            {/*<div className="telha">
                <Image
                  src="/fibrocimento.png"
                  width={200}
                  height={300}
                  alt="telha de fibrocimento"
                  className="imgFibro"
                />
                <h1>Telhas em Fibra</h1>
                <ul>
                  <li>244 x 110 x 5mm</li>
                  <li>244 x 110 x 5mm</li>
                  <li>244 x 110 x 5mm</li>
                  <li>244 x 110 x 5mm</li>
                  <li>244 x 110 x 5mm</li>
                </ul>
            </div>*/}
        </div>

      </section>
    </main>
  );
}
