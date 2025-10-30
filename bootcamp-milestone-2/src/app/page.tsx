//import

 export default function Home() {
  return (
    <div>
      <main>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", margin: "80px"}}>
          <div style={{marginTop:"20px", marginRight: "80px", display:"flex",flexDirection: "column", justifyContent: "start", alignItems: "start",}}>
            <h1 className="page-title">Tristan Spear</h1>
            <p>Hi, I'm <strong>Tristan</strong>, I am a Junior, studying<br />Software Engineering at Cal Poly SLO 🐎</p>
          </div>
          
          <img src="./images/headshot2.jpg" alt="An image of a sunset in pismo beach" style={{height: "250px", marginTop: "20px", border: "white solid 2px", borderRadius: "50%", marginLeft: "80px"}}/>
        </div>
          
      <About />
      <About />
      <About />

      </main>
      </div>
  );
}


function About() {

  return (
    <div className="about">
        <div className="about-text">
          <p>
            <strong>Hack4Impact</strong> is a 501c3
            <em>non-profit organization</em> that does non-profit software
            development in support of local non-profits. We build websites,
            volunteer management systems, and web applications that an
            organization would require to accomplisht their goals.
          </p>
          <p>
            This year we are working with <strong>nine</strong> non-profits to
            further their mission and provide them software tools. Organizations
            we have worked in the past include <strong>NAACP</strong>,
            <strong>Habitat 4 Humanity</strong>, <strong>Lumina</strong>, and
            more!
          </p>
        </div>
      </div>
  );
}