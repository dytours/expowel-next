import MainFilterSearchBox from "./MainFilterSearchBox";

const Index = () => {
  return (
    <section className="masthead -type-5">
      <div className="masthead__bg">
        <img alt="image" src="/img/masthead/5/bg.svg" className="js-lazy" />
      </div>
      {/* End bg image */}

      <div className="container">
        <div className="row">
          <div className="col-xl-9">
            <h1
              className="text-60 lg:text-40 md:text-30"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Global Experiences with{" "}
              <span className="text-blue-1 relative">
                expowel{" "}
                <span className="-line">
                  <img src="/img/general/line.png" alt="image" />
                </span>
              </span>
            </h1>
            <p className="mt-20" data-aos="fade-up" data-aos-delay="500">
              엑스포웰과 함께하는 해외박람회 참관!
              <br className="lg:d-none" /> 소규모 그룹 출장부터 단체 기업 프로그램 기획까지
            </p>

            <MainFilterSearchBox />
            {/* End filter content */}
          </div>
        </div>
      </div>
      {/* End .container */}

      <div className="masthead__image" data-aos="fade">
        <img src="/img/masthead/5/1.png" alt="image" />
      </div>
      {/* End .masthead__image */}
    </section>
  );
};

export default Index;
