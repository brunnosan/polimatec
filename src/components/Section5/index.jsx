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
        <div className="mx-8">
          <div className="grid">
            <div className="col-4 overflow-hidden">
              <img src={imgSection5_1} width="400" style={{width: '400px', height: '300px', objectFit: 'cover', objectPosition: 'center'}} />
            </div>
            <div className="col-4 overflow-hidden">
              <img src={imgSection5_2} width="400" style={{width: '400px', height: '300px', objectFit: 'cover', objectPosition: 'center'}} />
            </div>
            <div className="col-4 overflow-hidden">
              <img src={imgSection5_3} width="400" style={{width: '400px', height: '300px', objectFit: 'cover', objectPosition: 'center'}} />
            </div>
            <div className="col-4 overflow-hidden">
              <img src={imgSection5_4} width="400" style={{width: '400px', height: '300px', objectFit: 'cover', objectPosition: 'center'}} />
            </div>
            <div className="col-4 overflow-hidden">
              <img src={imgSection5_5} width="400" style={{width: '400px', height: '300px', objectFit: 'cover', objectPosition: 'center'}} />
            </div>
            <div className="col-4 overflow-hidden">
              <img src={imgSection5_6} width="400" style={{width: '400px', height: '300px', objectFit: 'cover', objectPosition: 'center'}} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
 
export default Section5;