import { Button } from "primereact/button";
import bgSection1 from '/src/assets/images/photo-1496247749665-49cf5b1022e9.jpeg';

const Section1 = () => {

  return (
    <>
      <section className='relative'>
        <div className='w-full flex relative -mt-9' style={{paddingTop: 6 + 'em'}}>
          <div className="absolute x-0 y-0 z-3">
            <div className="absolute x-0 y-0 z-3" style={{backgroundColor: 'rgb(5, 21, 67)', opacity: '0.7',}} />
            <div className='absolute z-0 x-0 y-0'>
              <img src={bgSection1}
                className='w-full h-full'
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
          <div className="flex">
            <div className='z-3 max-w-48xl mx-8 p-12 px-4'>
              <h2 className="titillium-web-bold font-normal text-7xl m-0 mb-4 line-height-2">Build Stronger with Precision Steel</h2>
              <p className="opensans-web line-height-3 font-normal text-2xl m-0">Leading the way in Maracanaú's steel industry, we provide high-quality materials for all your construction needs.</p>
              <Button label="Learn more" className="text-xl font-normal p-0_75 px-3 mt-5 border-round-lg line-height-1_75 bg-red-700 text-color opensans-web" severity="secondary" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
 
export default Section1;