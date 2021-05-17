import React from "react";

function Home(props) {
  return (
    <div className="container">
      <div className="row row-content align-items-center">
        <div className="col col-sm col-md">
          <div className="media">
            <div className="media-body">
              <h2>
                <span className="badge badge-secondary">Our Mission</span>
              </h2>{" "}
              <br></br>
              <p class=" d-none d-sm-block">
                At Middeniy Maha Vidyalaya we recognize each student as an
                individual with much potential. Our mission is to nurture and
                facilitate the holistic development of students academically,
                physically and spiritually, in the hope that one day they would
                grow up to be men and women of character and integrity, adding
                value to the society they live in
              </p>
              <a role="button" class="btn btn-primary" href="#">
                {" "}
                Contine Reading
              </a>
            </div>
            <img
              class="d-flex ml-3 img-thumbnail align-self-center"
              src="assets/images/mission.jpg"
              alt="students"
            ></img>
          </div>
        </div>
      </div>

      <div className="row row-content align-items-center">
        <div className="col col-sm col-md">
          <div className="media">
            <div className="media-body">
              <h2>
                <span className="badge badge-secondary">
                  Message from Principal
                </span>
              </h2>{" "}
              <br></br>
              <p className=" d-none d-sm-block">
                Our goal at Middeniya Maha Vidyala has been to challenge the
                students academically, grow them socially and emotionally and
                guide them towards independent thinking and problem solving.
                Students are encouraged to display good character and to make
                wise choices that will mould them into being better citizens of
                our nation.
              </p>
              <a role="button" className="btn btn-primary" href="#">
                {" "}
                Contine Reading
              </a>
            </div>
            <img
              className="d-flex ml-3 img-thumbnail align-self-center"
              src="assets/images/principal.jpg"
              alt="principal"
            ></img>
          </div>
        </div>
      </div>

      <div className="row row-content align-items-center">
        <div className="con-12 col-sm-4 col-md-3">
          <h3>Recent Events</h3>
        </div>
        <div className="col col-sm col-md">
          <h2>Annual Inter House Sports Meet 2020</h2>
          <p>
            The Sports meet is the foremost inter house competition of the year
            where the houses vie for the inter house challenge shield. This is
            where the children exhibit their athletic prowess in an atmosphere
            of friendly rivalry. This is where special talents are recognized
            for future development. Team events designed for the less agile
            provide a chance for them to participate and score for the house.{" "}
          </p>
        </div>
      </div>

      <div className="row mb-5 align-items-center">
        <div className="card card-body bg-light">
          <blockquote className="blockquote">
            <p className="mb-0">
              “The function of education is to teach one to think intensively
              and to think critically. Intelligence plus character – that is the
              goal of true education”
            </p>
            <footer className="blockquote-footer">
              <cite title="Source Title">Martin Luther King Jr</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default Home;
