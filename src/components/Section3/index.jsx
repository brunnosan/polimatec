import imgSection3_1 from '/src/assets/images/photo-1455165814004-1126a7199f9b.jpeg';
import imgSection3_2 from '/src/assets/images/photo-1624027492684-327af1fb7559.jpeg';
import imgSection3_3 from '/src/assets/images/photo-1504328345606-18bbc8c9d7d1.jpeg';

const Section3 = () => {
  return (
    <>
      <section style={{backgroundColor: 'rgb(4, 5, 36)',}}>
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
      </section>
      {/* <section className="relative" style={{backgroundColor: 'rgb(4, 5, 36)',}}>
        <div className="mx-8">
          <div className="grid grid-nogutter">
            <div className="col">
              <h2 className="titillium-web-bold font-normal text-6xl m-0 mb-4 line-height-2 p-1_75 px-0 pb-2">Steel industry services</h2>
            </div>
          </div>
          <div className="grid gap-5">
            <div className="col-9 overflow-hidden h-auto" style={{flex: '0 0 calc(33.333333% - (2rem * 2) / 3)',}}>
              <img src={imgSection3_1} style={{height: '33rem', width: 'calc(33rem * 2 /3)', objectFit: 'cover', objectPosition: 'center'}} alt="" />
              <h3 className="titillium-web-bold font-normal text-4xl m-0 mb-4 line-height-2 p-1_75 px-0 pb-2">Custom steel fabrication</h3>
              <p className="opensans-web line-height-3 font-normal text-lg m-0">Expert fabrication of customized steel products tailored to your specific needs.</p>
            </div>
            <div className="col-9 overflow-hidden bg-cover" style={{flex: '0 0 calc(33.333333% - (2rem * 2) / 3)',}}>
              <img src={imgSection3_2} style={{height: '33rem', width: 'calc(33rem * 2 /3)', objectFit: 'cover', objectPosition: 'center'}} alt="" />
              <h3 className="titillium-web-bold font-normal text-4xl m-0 mb-4 line-height-2 p-1_75 px-0 pb-2">Steel cutting services</h3>
              <p className="opensans-web line-height-3 font-normal text-lg m-0">Precision cutting of steel materials with state-of-the-art equipment for perfect results.</p>
            </div>
            <div className="col-9 overflow-hidden" style={{flex: '0 0 calc(33.333333% - (2rem * 2) / 3)',}}>
              <img src={imgSection3_3} style={{height: '33rem', width: 'calc(33rem * 2 /3)', objectFit: 'cover', objectPosition: 'center'}} alt="" />
              <h3 className="titillium-web-bold font-normal text-4xl m-0 mb-4 line-height-2 p-1_75 px-0 pb-2">Steel welding solutions</h3>
              <p className="opensans-web line-height-3 font-normal text-lg m-0">Professional welding services to ensure strong and durable steel structures.</p>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
 
export default Section3;