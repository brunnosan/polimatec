import { Image } from "primereact/image";
import { Button } from "primereact/button";

const Section5 = () => {
  return (
    <>
      <section className="relative" style={{backgroundColor: 'rgb(4, 5, 36)',}}>
        <div className="mx-8">
          <div className="grid">
            <div className="col-4 overflow-hidden">
              <img src="src/images/photo-1624027492684-327af1fb7559.jpeg" width="400" style={{width: '400px', height: '300px', objectFit: 'cover', objectPosition: 'center'}} />
            </div>
            <div className="col-4 overflow-hidden">
              <img src="src/images/photo-1518704618243-b719e5d5f2b8.jpeg" width="400" style={{width: '400px', height: '300px', objectFit: 'cover', objectPosition: 'center'}} />
            </div>
            <div className="col-4 overflow-hidden">
              <img src="src/images/photo-1528918652533-dfdb3f368093.jpeg" width="400" style={{width: '400px', height: '300px', objectFit: 'cover', objectPosition: 'center'}} />
            </div>
            <div className="col-4 overflow-hidden">
              <img src="src/images/photo-1474674556023-efef886fa147.jpeg" width="400" style={{width: '400px', height: '300px', objectFit: 'cover', objectPosition: 'center'}} />
            </div>
            <div className="col-4 overflow-hidden">
              <img src="src/images/photo-1520697517317-6767553cc51a.jpeg" width="400" style={{width: '400px', height: '300px', objectFit: 'cover', objectPosition: 'center'}} />
            </div>
            <div className="col-4 overflow-hidden">
              <img src="src/images/photo-1522322512347-a0e57fd1744c.jpeg" width="400" style={{width: '400px', height: '300px', objectFit: 'cover', objectPosition: 'center'}} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
 
export default Section5;