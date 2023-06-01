import headshot from "../assets/images/TB_headshot.jpg";

function Home() {
  return (
    <div
      class="flex-1 items-end justify-end relative"
      style={{
        "background-image": `url(${headshot})`,
        "background-position": "0 20%",
        "background-size": "60%",
        "background-repeat": "no-repeat",
      }}
    >
      <div
        class="absolute bottom-0 w-1/2 right-0 top-0 bg-slate-100 flex flex-col items-center justify-center"
        style={{
          "clip-path": "polygon(10% 0, 100% 0, 100% 100%, 0 100%)",
        }}
      >
        <h1 class="text-4xl uppercase">Tyler M Boettcher</h1>
        <h4>Actor &#x2022; Poet &#x2022; Writer</h4>
      </div>
    </div>
  );
}

export default Home;
