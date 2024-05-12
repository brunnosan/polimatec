const Section3 = () => {
  return (
    <>
      <section className="relative" style={{backgroundColor: 'rgb(4, 5, 36)',}}>
        <div className="mx-8">
          <div className="grid grid-nogutter">
            <div className="col">
              <h2 className="titillium-web-bold font-normal text-6xl m-0 mb-4 line-height-2 p-1_75 px-0 pb-2">Steel industry services</h2>
            </div>
          </div>
          <div className="grid gap-5">
            <div className="col-4 overflow-hidden h-auto" style={{flex: '0 0 calc(33.333333% - (2rem * 2) / 3)',}}>
              <img src="src/images/photo-1455165814004-1126a7199f9b.jpeg" style={{height: '33rem', width: 'calc(33rem * 2 /3)', objectFit: 'cover', objectPosition: 'center'}} alt="" />
              <h3 className="titillium-web-bold font-normal text-4xl m-0 mb-4 line-height-2 p-1_75 px-0 pb-2">Custom steel fabrication</h3>
              <p className="opensans-web line-height-3 font-normal text-lg m-0">Expert fabrication of customized steel products tailored to your specific needs.</p>
            </div>
            <div className="col-4 overflow-hidden bg-cover" style={{flex: '0 0 calc(33.333333% - (2rem * 2) / 3)',}}>
              <img src="src/images/photo-1624027492684-327af1fb7559.jpeg" style={{height: '33rem', width: 'calc(33rem * 2 /3)', objectFit: 'cover', objectPosition: 'center'}} alt="" />
              <h3 className="titillium-web-bold font-normal text-4xl m-0 mb-4 line-height-2 p-1_75 px-0 pb-2">Steel cutting services</h3>
              <p className="opensans-web line-height-3 font-normal text-lg m-0">Precision cutting of steel materials with state-of-the-art equipment for perfect results.</p>
            </div>
            <div className="col-4 overflow-hidden" style={{flex: '0 0 calc(33.333333% - (2rem * 2) / 3)',}}>
              <img src="src/images/photo-1504328345606-18bbc8c9d7d1.jpeg" style={{height: '33rem', width: 'calc(33rem * 2 /3)', objectFit: 'cover', objectPosition: 'center'}} alt="" />
              <h3 className="titillium-web-bold font-normal text-4xl m-0 mb-4 line-height-2 p-1_75 px-0 pb-2">Steel welding solutions</h3>
              <p className="opensans-web line-height-3 font-normal text-lg m-0">Professional welding services to ensure strong and durable steel structures.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
 
export default Section3;