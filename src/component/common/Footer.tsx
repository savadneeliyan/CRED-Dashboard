import logo from "@/assets/images/cred-logo-horizontal.webp";
import security from "@/assets/images/security-final-2.webp";
import Image from "next/image";

function Footer() {
  const menus = [
    {
      title: "products",
      items: ["CRED Pay", "credit score check"],
    },
    {
      title: "CRED",
      items: ["about", "careers", "IPL", "customer care"],
    },
    {
      title: "resources",
      items: [
        "articles",
        "tech blogs",
        "calculators",
        "credit card payment guide",
        "credit score guide",
        "Dreampurse (HipBar) wallet refund form",
      ],
    },
    {
      title: "policy",
      items: [
        "security",
        "transaction & user verification",
        "Google API disclosure",
        "UPI faq & grievances",
        "equal opportunity policy",
        "other disclosures",
      ],
    },
  ];

  return (
    <div className="bg-white dark:bg-[#161517] dark:text-white text-gray-800 duration-500 py-[100px]">
      <div className="container m-auto">
        <div className="grid grid-cols-2 ">
          <div>
            <Image
              src={logo}
              alt="Logo"
              className="duration-500 invert dark:invert-0"
              width={168}
              height={55}
            />
            <Image
              src={security}
              alt="Logo"
              className="invert duration-500 dark:invert-0 mb-[40px] mt-[100px]"
              width={405}
              height={65}
            />

            <h3 className="font-Gilroy-bold duration-500 text-[21px] tracking-[0.75px] leading-[33px] mb-[25px] opacity-90">
              complete security. no asterisks.
            </h3>

            <p className="font-Gilroy duration-500 text-[18px] tracking-[0.75px] leading-[33px] mb-[75px] opacity-70 max-w-[500px]">
              CRED encrypts all data and transactions to ensure a completely
              secure experience for our members.
            </p>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-4 gap-x-[150px]">
            {menus.map((section) => (
              <div key={section.title} className="">
                <h2 className="font-Gilroy-bold text-[18px] tracking-[0.75px] leading-[33px] mb-[20px] opacity-90">
                  {section.title}
                </h2>
                <ul className="list-none space-y-2 font-Gilroy duration-500 text-[18px] tracking-[0.75px] leading-[33px] mb-[75px] opacity-70">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="opacity-40  font-Gilroy-semibold flex items-center">
            copyright © 2020-24 Dreamplug Technologies Pvt Ltd.
          </p>

          <ul className="list-none flex font-Gilroy duration-500  gap-[15px] font-gilroy text-[18px] tracking-[0.75px] leading-[34px] dark:text-white text-gray-800 opacity-70">
            <li className="duration-500">privacy policy</li>
            <li className="dark:border-[#f6f6f6] duration-500 border-[#161517] border-x px-[15px] text-[18px] ">
              terms and conditions
            </li>
            <li className="duration-500">returns and refund</li>
          </ul>
        </div>
        <div className="flex gap-5 justify-between align-middle"></div>
      </div>
    </div>
  );
}

export default Footer;
