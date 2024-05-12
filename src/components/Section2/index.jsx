import { Button } from "primereact/button";

const Section2 = () => {
  return (
    <>
      <section className='relative'>
        <div className='w-full flex relative pb-5_5'>
          <div className="absolute x-0 y-0 z-3">
            <div className="absolute x-0 y-0 z-3" style={{backgroundColor: 'rgb(5, 21, 67)',}} />
          </div>
          <div className="flex w-full gap-8 flex-row p_8 px-4 mx-8 z-3" style={{clipPath: 'url("#663241701517d2ece30b4c9c-jaggedRight")'}}>
            <div className='flex-1 flex flex-column z-3 max-w-60xl'>
              <h2 className="titillium-web-bold font-normal text-6xl m-0 mb-4 line-height-2 p-1_75 px-0 pb-2">Innovative Solutions for the Steel Industry</h2>
              <p className="opensans-web line-height-1_75 font-normal text-lg m-0">Polimatec, located in Maracanaú, CE, Brasil, offers cutting-edge solutions for the steel industry. With a focus on quality and efficiency, trust Polimatec for all your steel manufacturing needs.</p>
            </div>
            <div className='flex-1 flex w-full h-full z-3 justify-content-start'>
              <div className="flex-shrink-0 relative w-full h-full p_100_percent pt-0 px-0">
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'block',
                    overflow: 'hidden',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0
                  }}>
                  <img src='src/images/photo-1474674556023-efef886fa147.jpeg'
                    className='w-full h-full'
                    // style={{
                    //   objectFit: 'cover',
                    //   objectPosition: 'center center',
                    // }}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      boxSizing: 'border-box',
                      padding: 0,
                      border: 'none',
                      margin: 'auto',
                      display: 'block',
                      width: 0,
                      height: 0,
                      minWidth: '100%',
                      maxWidth: '100%',
                      minHeight: '100%',
                      maxHeight: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center center',
                    }}
                  />
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
 
export default Section2;