import React, { useState } from "react";

/**
 * FAQ.jsx
 * Same-to-same layout like screenshot:
 * - Big centered title (two lines)
 * - Cream background
 * - 5 accordion rows (rounded white cards)
 * - Left circle number (dark)
 * - Question text
 * - Right chevron
 * - Smooth open/close
 *
 * Theme ONLY:
 *  - #023341
 *  - #FD5E02
 *  - #FCF5E3
 *
 * Uses CSS (inside component) for pixel control.
 */
export default function FAQ() {
  const faqs = [
    {
      q: "How long does a bathroom renovation or tiling project take?",
      a: "Most standard bathroom tiling projects take 3–7 days, while full bathroom renovations may take 1–2 weeks depending on scope. Our Melbourne tilers follow an efficient process including waterproofing, screeding, and tile installation to ensure timely completion.",
    },
    {
      q: "Do you provide waterproofing and is it compliant with Australian Standards?",
      a: "Yes, we use high-quality waterproofing membranes and systems that are compliant with Australian Standards (AS 3740). Our waterproofing is applied by certified professionals to ensure long-lasting protection.",
    },
    {
      q: "What type of tiles are best for bathrooms and wet areas?",
      a: "Porcelain and ceramic tiles are popular for bathroom tiling due to durability and water resistance. We also install mosaic tiles, large-format tiles, and non-slip floor tiles suitable for wet areas and modern bathroom renovations.",
    },
    {
      q: "Do you handle full renovation work or only tile installation?",
      a: "MMG Tiling specialises in both full bathroom renovations and professional tile installation services across Melbourne. We manage waterproofing, floor screeding, wall and floor tiling, splashbacks, and complete wet area upgrades.",
    },
    {
      q: "Do you guarantee your tiling workmanship?",
      a: "Yes. At MMG Tiling Melbourne, we stand behind the quality of our workmanship. All bathroom tiling, waterproofing, floor screeding, and wall and floor tile installation is completed to Australian Standards using high-quality materials and proven installation methods",
    },
  ];

  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="mm-faq">
      <style>{css}</style>

      <div className="mm-faq__wrap">
        <h2 className="mm-faq__title">
          Frequently Asked <br />
          Questions
        </h2>

        <div className="mm-faq__list">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            const num = String(idx + 1).padStart(2, "0");

            return (
              <div
                key={item.q}
                className={`mm-faq__item ${isOpen ? "is-open" : ""}`}
              >
                <button
                  className="mm-faq__btn"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                >
                  <span className="mm-faq__left">
                    <span className="mm-faq__badge">{num}</span>
                    <span className="mm-faq__q">{item.q}</span>
                  </span>

                  <span className="mm-faq__chev" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="#023341"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  className="mm-faq__panel"
                  style={{ maxHeight: isOpen ? "220px" : "0px" }}
                >
                  <div className="mm-faq__answer">{item.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const css = `
  :root{
    --mm-dark:#023341;
    --mm-accent:#FD5E02;
    --mm-cream:#FCF5E3;
  }

  .mm-faq{
    background: var(--white);
    padding: 64px 18px 70px;
  }

  .mm-faq__wrap{
    max-width: 980px;
    margin: 0 auto;
  }

  .mm-faq__title{
    margin: 0;
    text-align: center;
    font-weight: 700;
    color: #000; /* screenshot looks near-black */
    font-size: 30px;
    line-height: 1.03;
    letter-spacing: -0.5px;
  }

  .mm-faq__list{
    margin-top: 44px;
    display: grid;
    gap: 18px;
  }

  .mm-faq__item{
    background: #fff;
    border-radius: 14px;
    box-shadow: 0 10px 26px rgba(2,51,65,0.08);
    overflow: hidden;
  }

  .mm-faq__btn{
    width: 100%;
    border: 0;
    background: transparent;
    padding: 5px 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    text-align: left;
  }

  .mm-faq__left{
    display: flex;
    align-items: center;
    gap: 16px;
    min-width: 0;
  }

  .mm-faq__badge{
    width: 34px;
    height: 34px;
    border-radius: 999px;
    background: var(--mm-dark);
    color: #fff;
    font-weight: 700;
    font-size: 12px;
    display: grid;
    place-items: center;
    flex: 0 0 auto;
  }

  .mm-faq__q{
    color: #000;
    font-weight: 700;
    font-size: 13px;
    letter-spacing: 0.1px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .mm-faq__chev{
    width: 22px;
    height: 22px;
    display: grid;
    place-items: center;
    flex: 0 0 auto;
    transition: transform 260ms ease;
  }
  .mm-faq__chev svg{
    width: 22px;
    height: 22px;
  }

  .mm-faq__item.is-open .mm-faq__chev{
    transform: rotate(180deg);
  }

  .mm-faq__panel{
    overflow: hidden;
    transition: max-height 320ms ease;
  }

  .mm-faq__answer{
    padding: 0 22px 22px 50px; /* aligns under question text like screenshot */
    color: rgba(2,51,65,0.78);
    font-size: 14px;
    line-height: 1.6;
  }

  /* subtle focus, no extra colors */
  .mm-faq__btn:focus-visible{
    outline: 2px solid var(--mm-accent);
    outline-offset: 2px;
  }

  /* Responsive: keep same look, just scale title */
  @media (max-width: 860px){
    .mm-faq__title{ font-size: 52px; }
    .mm-faq__q{ font-size: 17px; }
  }
  @media (max-width: 520px){
    .mm-faq{ padding: 52px 14px 58px; }
    .mm-faq__title{ font-size: 40px; }
    .mm-faq__btn{ padding: 18px 16px; }
    .mm-faq__answer{ padding: 0 16px 18px 62px; }
    .mm-faq__badge{ width: 32px; height: 32px; }
  }
`;
