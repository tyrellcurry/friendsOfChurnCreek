import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="px-[5vw] text-center py-6 bg-zinc-300 md:px-10vw">
        <p>
        © Friends of Churn Creek Protected Area Society
        </p>
        <ul className="md:flex items-center gap-2.5 justify-center py-2">
          <li>Box 4144</li>
          <li className="w-1.5 hidden md:block"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{/* <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}<path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"/></svg></li>
          <li>Williams Lake, B.C</li>
          <li className="w-1.5 hidden md:block"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{/* <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}<path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"/></svg></li>
          <li>V2G 2V2</li>
        </ul>
        <div className="flex justify-center py-2">
          <Link className="cursor-pointer hover:fill-[#3b5998] w-8 transition duration-100 ease-in-out" href={'https://www.facebook.com/groups/392294607483047/'} target='_blank'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">{/*Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.*/}<path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/></svg>
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
