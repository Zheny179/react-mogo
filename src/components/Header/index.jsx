import './styles.scss'
import Nav from "@/components/Nav";

export default function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__inner'>
          <div className='header__logo'>MoGo</div>
          <Nav />
        </div>
      </div>
    </header>
  );
};