import React from "react";
import vg from "../assets/2.webp";
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in childern.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odit eos ullam fuga, perspiciatis vero iusto aspernatur quasi incidunt perferendis quod natus cum doloribus harum ipsam excepturi aperiam aut dolore maxime molestiae dignissimos facilis! Omnis tenetur fugiat fugit sint iusto ipsam, architecto earum fuga assumenda minus facilis non optio ut voluptas iure saepe hic. Iure maiores amet, totam officiis facilis mollitia quae quibusdam, deserunt dignissimos, sunt expedita eos quasi id? Explicabo quibusdam reprehenderit quos accusamus dicta, suscipit rem quae
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{
                    animationDelay: "0.3s"
                }}>
                <AiFillGoogleCircle />
                <p>Google</p>
                </div>
                <div style={{
                    animationDelay: "0.5s"
                }}>
                <AiFillAmazonCircle />
                <p>Amazon</p>
                </div>
                <div style={{
                    animationDelay: "0.7s"
                }}>
                <AiFillYoutube />
                <p>Youtube</p>
                </div>
                <div style={{
                    animationDelay: "1s"
                }}>
                <AiFillInstagram />
                <p>Instagram</p>
                </div>
            </article>
        </div>
      </div>
    </>
  );
};

export default Home;
