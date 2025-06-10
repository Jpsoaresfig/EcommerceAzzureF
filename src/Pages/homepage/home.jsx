
import './home.css';
function home() {


  return (

    <div className='home'>
      <div className='home-container'>
        <header className='header-container'>
          <div className='header'>
            <h1 className='headertitle'>Bem-vindo(a) a Azzure</h1>
            <h2 className='headersubtitle'>
              Mais do que produtos, aqui você encontra uma família.
            </h2>
            <div className='links'>
              <a href="/products" className='linkProducts'>Produtos</a>

              <a href="/about" className='linkabout'>About us</a>

              <a href="/social" className='linksocial'>Social</a>
            </div>
          </div>

        </header>
      </div>


    </div>


  );
}
export default home;