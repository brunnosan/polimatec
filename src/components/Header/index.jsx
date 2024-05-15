import { Button } from "primereact/button";
import polimatecLogo from '/src/assets/images/polimatec-logo.png';
import { useEffect, useState } from "react";

const Header = () => {

  const [y, setY] = useState(0);
  
  const handleNavigation = (e) => {
    const scrollY = e.currentTarget.scrollY;

    if (y > scrollY) {
      console.log("Scrolling up");
    } else if (y < scrollY) {
      console.log("Scrolling down");
    }

    setY(scrollY);
  };
  
  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      // Clean up by removing the event listener
      window.removeEventListener("scroll", handleNavigation);
    };
  }, []);

  return (
    <>
      <header className={'!z-[2000] sticky top-0 left-0 transition_colors' + (y > 0 ? ' headerScrolled' : ' headerTop')}>
        <div className="flex mx-8 gap-5 p-4 align-items-center justify-content-between">
          <div className="flex gap-3 h-3rem">
            <img className="w-3rem" src={polimatecLogo} alt="Logotipo" />
            <span className="text-4xl titillium-web-bold line-height-3">Polimatec</span>
          </div>
          <div>
            <Button icon='pi pi-instagram' text className="w-3rem h-3rem border-none border-noround p-1" size='large' />
          </div>
        </div>
      </header>
    </>
  );
}
 
export default Header;