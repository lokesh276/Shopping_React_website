import { assets } from "../assets/frontend_assets/assets"
// import Copyright from "./Copyright";

function Footer() {
    return (
      <>
        <div className="flex flex-row sm:grid-cols grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 tex-sm ">
          <div>
            <img src={assets.logo} alt="" className="w-32 mb-5 " />
            <p className="w-full md:w-2/3 text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div>
            <p className="text-xl font-medium mb-5">Company</p>
            <ul className="flex flex-col gap-1 text-gray-600">
              <li>
                <a>HOME</a>
              </li>
              <li>
                <a>About us</a>
              </li>
              <li>
                <a>Delivery</a>
              </li>
              <li>
                <a>Privacy policy</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-gray-600">
              <li>
                <a>+1-000-000-0000</a>
              </li>
              <li>
                <a>greatstackdev@gmail.com</a>
              </li>
              <li>
                <a>Instagram</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <hr />
          <p className="py-5 text-sm text-center">
            Copyright 2024@loki.com- All Right Reserved.
          </p>
        </div>
      </>
    );
}

export default Footer