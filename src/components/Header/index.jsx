import { Button } from "primereact/button";

const Header = () => {
  return (
    <>
      <header
        // className="!z-[2000] sticky top-0 h-6rem w-full align-content-center z-4 transition-ease-in-out transition-all transition-duration-150"
        className='!z-[2000] sticky top-0 left-0 transition-colors'
      >
        <div className="flex mx-8 gap-5 p-4 align-items-center justify-content-between">
          <div className="flex gap-3 h-3rem">
            <img className="w-3rem" src="src/components/Header/images/polimatec-logo.png" alt="Logotipo" />
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