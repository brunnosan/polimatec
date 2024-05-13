import { Image } from "primereact/image";
import { Button } from "primereact/button";

import imgSection5_1 from '/src/assets/images/photo-1624027492684-327af1fb7559.jpeg';
import imgSection5_2 from '/src/assets/images/photo-1518704618243-b719e5d5f2b8.jpeg';
import imgSection5_3 from '/src/assets/images/photo-1528918652533-dfdb3f368093.jpeg';
import imgSection5_4 from '/src/assets/images/photo-1474674556023-efef886fa147.jpeg';
import imgSection5_5 from '/src/assets/images/photo-1520697517317-6767553cc51a.jpeg';
import imgSection5_6 from '/src/assets/images/photo-1522322512347-a0e57fd1744c.jpeg';

const Section5 = () => {
  return (
    <>
      <section className="relative" style={{backgroundColor: 'rgb(4, 5, 36)',}}>
        <div className="mx-8 py-5">
          <div className='flex flex-row flex-wrap gap-5 grid-nogutter'>
          {/* <div className="grid"> */}
            <div className='col-4 flex flex-column' style={{flex: '0 0 calc(33.333333% - (2rem * 2) / 3)', minWidth: '21rem', minHeight: '14rem'}}>
              <img src={imgSection5_1} className="w-27rem h-18rem" style={{objectFit: 'cover', objectPosition: 'center'}} />
            </div>
            <div className='col-4 flex flex-column' style={{flex: '0 0 calc(33.333333% - (2rem * 2) / 3)', minWidth: '21rem', minHeight: '14rem'}}>
              <img src={imgSection5_2} className="w-27rem h-18rem" style={{objectFit: 'cover', objectPosition: 'center'}} />
            </div>
            <div className='col-4 flex flex-column' style={{flex: '0 0 calc(33.333333% - (2rem * 2) / 3)', minWidth: '21rem', minHeight: '14rem'}}>
              <img src={imgSection5_3} className="w-27rem h-18rem" style={{objectFit: 'cover', objectPosition: 'center'}} />
            </div>
            <div className='col-4 flex flex-column' style={{flex: '0 0 calc(33.333333% - (2rem * 2) / 3)', minWidth: '21rem', minHeight: '14rem'}}>
              <img src={imgSection5_4} className="w-27rem h-18rem" style={{objectFit: 'cover', objectPosition: 'center'}} />
            </div>
            <div className='col-4 flex flex-column' style={{flex: '0 0 calc(33.333333% - (2rem * 2) / 3)', minWidth: '21rem', minHeight: '14rem'}}>
              <img src={imgSection5_5} className="w-27rem h-18rem" style={{objectFit: 'cover', objectPosition: 'center'}} />
            </div>
            <div className='col-4 flex flex-column' style={{flex: '0 0 calc(33.333333% - (2rem * 2) / 3)', minWidth: '21rem', minHeight: '14rem'}}>
              <img src={imgSection5_6} className="w-27rem h-18rem" style={{objectFit: 'cover', objectPosition: 'center'}} />
            </div>
          </div>
        </div>
      </section>
      {/* <section style={{backgroundColor: 'rgb(4, 5, 36)',}}>
        <div className='mx-8'>
          <div>
            <h2 className='titillium-web-bold font-normal text-6xl m-0 mb-4 line-height-2 p-1_75 px-0 pb-2'>Steel industry services</h2>
          </div>
          <div className='flex flex-row flex-wrap gap-5 grid-nogutter'>
            <div className='col-4 flex flex-column' style={{flex: '0 0 calc(33.333333% - (2rem * 2) / 3)', minWidth: '16rem', minHeight: '25rem'}}>
              <img src={imgSection3_1} className='h-30rem sm:h25rem' style={{objectFit: 'cover', objectPosition: 'center'}} alt="" />
              <h3 className='titillium-web-bold font-normal text-4xl m-0 mb-4 line-height-2 p-1_75 px-0 pb-2'>Custom steel fabrication</h3>
              <p className="opensans-web line-height-3 font-normal text-lg m-0">Expert fabrication of customized steel products tailored to your specific needs.</p>
            </div>
            <div className='col-4 flex flex-column' style={{flex: '0 0 calc(33.333333% - (2rem * 2) / 3)', minWidth: '16rem', minHeight: '25rem'}}>
              <img src={imgSection3_2} className='h-30rem sm:h25rem' style={{objectFit: 'cover', objectPosition: 'center'}} alt="" />
              <h3 className='titillium-web-bold font-normal text-4xl m-0 mb-4 line-height-2 p-1_75 px-0 pb-2'>Steel cutting services</h3>
              <p className="opensans-web line-height-3 font-normal text-lg m-0">Precision cutting of steel materials with state-of-the-art equipment for perfect results.</p>
            </div>
            <div className='col-4 flex flex-column' style={{flex: '0 0 calc(33.333333% - (2rem * 2) / 3)', minWidth: '16rem', minHeight: '25rem'}}>
              <img src={imgSection3_3} className='h-30rem sm:h25rem' style={{objectFit: 'cover', objectPosition: 'center'}} alt="" />
              <h3 className='titillium-web-bold font-normal text-4xl m-0 mb-4 line-height-2 p-1_75 px-0 pb-2'>Steel welding solutions</h3>
              <p className="opensans-web line-height-3 font-normal text-lg m-0">Professional welding services to ensure strong and durable steel structures.</p>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
 
export default Section5;