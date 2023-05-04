import igLogo from "../assets/instagram-logo.svg";

function Header() {
  return (
    <div class="bg-slate-800 flex flex-row items-center px-12 py-6 text-white">
      <h1 class="text-xl uppercase tracking-wider w-1/3">Tyler M Boettcher</h1>

      <div class="flex flex-row items-center justify-center w-1/3">
        <a
          class="bg-yellow-400 flex h-10 items-center justify-center rounded-lg w-10"
          href="https://www.imdb.com/name/nm8927678"
          target="blank"
        >
          <span class="text-slate-800 text-xs">IMDb</span>
        </a>

        <a
          class="bg-pink-600 h-10 mx-3 p-1 rounded-lg w-10"
          href="https://www.instagram.com/tylermboettcher/"
          target="blank"
        >
          <img src={igLogo} alt="Instagram" />
        </a>

        <a
          class="bg-red-600 flex h-10 items-center justify-center p-1 rounded-lg w-10 text-lg tracking-wider"
          href="https://resumes.actorsaccess.com/tylermboettcher"
          target="blank"
        >
          AA
        </a>
      </div>

      <div class="flex flex-row justify-end w-1/3">
        <p class="mr-8">Home</p>
        <p>Resume</p>
      </div>
    </div>
  );
}

export default Header;
