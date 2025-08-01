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
    <div className="bg-white dark:bg-[#161517] dark:text-white text-gray-800 duration-500 py-16 sm:py-20 lg:py-24 xl:py-[100px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          <div className="space-y-8 lg:space-y-12">
            <div>
              <Image
                src={logo}
                alt="Logo"
                className="duration-500 invert dark:invert-0 w-auto h-auto max-w-[120px] sm:max-w-[140px] lg:max-w-[168px]"
                width={168}
                height={55}
                priority
              />
            </div>

            <div>
              <Image
                src={security}
                alt="Security"
                className="invert duration-500 dark:invert-0 w-auto h-auto max-w-[280px] sm:max-w-[340px] lg:max-w-[405px]"
                width={405}
                height={65}
              />
            </div>

            <div className="space-y-4 lg:space-y-6">
              <h3 className="font-Gilroy-bold duration-500 text-lg sm:text-xl lg:text-[21px] tracking-[0.75px] leading-relaxed lg:leading-[33px] opacity-90">
                complete security. no asterisks.
              </h3>

              <p className="font-Gilroy duration-500 text-base sm:text-lg lg:text-[18px] tracking-[0.75px] leading-relaxed lg:leading-[33px] opacity-70 max-w-full lg:max-w-[500px]">
                CRED encrypts all data and transactions to ensure a completely
                secure experience for our members.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2  gap-x-6 sm:gap-x-8 lg:gap-x-12  gap-y-8">
            {menus.map((section) => (
              <div key={section.title} className="space-y-4 lg:space-y-5">
                <h2 className="font-Gilroy-bold text-base sm:text-lg lg:text-[18px] tracking-[0.75px] leading-relaxed lg:leading-[33px] opacity-90 capitalize">
                  {section.title}
                </h2>
                <ul className="list-none space-y-2 lg:space-y-3">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="font-Gilroy duration-500 text-sm sm:text-base lg:text-[18px] tracking-[0.75px] leading-relaxed lg:leading-[33px] opacity-70 hover:opacity-90 cursor-pointer transition-opacity capitalize"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-20 xl:mt-24 ">
          <div
            // className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16"
          >
            <p className="opacity-40 font-Gilroy-semibold text-sm sm:text-base flex items-center order-2 lg:order-1">
              copyright © 2020-24 Dreamplug Technologies Pvt Ltd.
            </p>

            <div className="order-1 lg:order-2 w-full lg:w-auto">
              <ul className="list-none flex flex-col sm:flex-row font-Gilroy duration-500 gap-3 sm:gap-4 lg:gap-[15px] text-sm sm:text-base lg:text-[18px] tracking-[0.75px] leading-relaxed lg:leading-[34px] dark:text-white text-gray-800 opacity-70">
                <li className="duration-500 hover:opacity-90 cursor-pointer transition-opacity">
                  privacy policy
                </li>
                <li className="dark:border-[#f6f6f6] duration-500 border-[#161517] sm:border-x sm:px-3 lg:px-[15px] hover:opacity-90 cursor-pointer transition-opacity">
                  terms and conditions
                </li>
                <li className="duration-500 hover:opacity-90 cursor-pointer transition-opacity">
                  returns and refund
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
