const AfterSaleService = () => {
  return (
    <section>
      <h1 className="text-3xl text-center p-2 bg-blue-800 max-w-[1130px] text-white mx-auto uppercase">
        After Sale Services
      </h1>
      <div className="m-10 p-10 max-w-[1200px] mx-auto flex flex-col gap-5">
        <div
          data-aos="fade-right"
          data-aos-offset="500"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          className="card md:card-side bg-base-100 border-2 border-red-300 p-2 border-double"
        >
          <figure>
            <img
              src="https://toyota.com.bd/cmsimages/-qJACUubi8M98nVYhm_3u7QiPtk=/2465/width-900%7Cformat-webp/Navana_Limited_Toyota_Aftersales_Body_Paint_2.jpg.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">BODY & PAINT</h2>
            <p>
              We committed to providing you the best quality Body & Paint repair
              for your vehicle. Toyota is equipped with advanced standard tools
              such as Blackhawk chassis aligners, welding machines, and UV
              Heaters for body and paint repair with the high skill of certified
              technicians to ensure the vehicle is restored to the original
              structure and dimension.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          className="card md:card-side bg-base-100 border-2 border-red-300 p-2 border-double"
        >
          <div className="card-body">
            <h2 className="card-title">GENERAL REPAIR</h2>
            <p>
              At CarVerse, with a team of highly trained professionals, our
              number one priority is to provide customers with a safe,
              comfortable driving experience that will provide them with
              happiness and peace of mind.
            </p>
          </div>
          <figure>
            <img
              src="https://toyota.com.bd/cmsimages/uFixQOUXoGXve2g2cnioHgPEsmQ=/2402/width-900%7Cformat-webp/Brand_New_Toyota_Navana_Limited_Engine_Work_5.jpg"
              alt="Movie"
              className="max-h-80"
            />
          </figure>
        </div>
        <div
          data-aos="fade-right"
          data-aos-offset="500"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          className="card md:card-side bg-base-100 border-2 border-red-300 p-2 border-double"
        >
          <figure>
            <img
              src="https://toyota.com.bd/cmsimages/HyUvDkl_iSoAZEtOBtXZ34n-Tas=/2400/width-900%7Cformat-webp/Brand_New_Toyota_Navana_Limited_Periodic_Maintence_9.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">PERIODIC MAINTENANCE</h2>
            <p>
              Periodic Maintenance is performing service/replacement and
              inspection/testing of a vehicle at specified intervals according
              to the maintenance schedule in the owners manual. The service
              interval for scheduled maintenance is determined by odometer
              reading or time interval, whichever comes first, shown in the
              schedule.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfterSaleService;
