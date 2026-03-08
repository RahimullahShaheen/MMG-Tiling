import "../Assets/CSS/Components/Footer.css"

import locationIconSrc from "../Assets/Images/icons/location.png";
import telephoneIconSrc from "../Assets/Images/icons/telephone.png";
import facebookIconSrc from "../Assets/Images/icons/facebook.png";
import mailIconSrc from "../Assets/Images/icons/mail.png";
import clockIconSrc from "../Assets/Images/icons/clock.png";


export default function Footer() {
  const usefulLinks = [
    {title: "About",href:"/about"},
    {title:"Contact Us",href:"/contact"} ,
    {title:"Services", href: "/services"} 
  ];
  const SocialIcons = [
    {icon: facebookIconSrc,
      href: "##"
    }
  ]

  return (
    <footer className="mm-footer">

      <div className="mm-container">
        <div className="mm-grid">
          {/* Brand */}
          <div>
            <div className="mm-logo-footer">
              <span>MMG</span>
              <span className="mm-logoAccent">Tilling</span>
            </div>

            <p className="mm-desc">
              MMG Tiling Melbourne provides professional wall and floor tiling, bathroom renovations, waterproofing, screeding, and tile installation services across Melbourne with reliable workmanship and premium finishes.
              Get Your Free Tiling Quote Today
            </p>

            <div className="mm-social">
              <SocialBtn>{SocialIcons[0]}</SocialBtn>
            </div>
          </div>

          {/* Useful links */}
          <div>
            <h3 className="mm-title">Useful links</h3>
            <ul className="mm-list">
              {usefulLinks.map((t) => (
                <li key={t.href}>
                  <ThreeDLink>{t}</ThreeDLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="mm-title">Our contacts</h3>
            <ul className="mm-contacts">
              <li><MapIcon />7 faculty Circut Meadowbrook QLD 4131</li>
              <li>
                <PhoneIcon />
                <a className="mm-contactLink" href="tel:+456496787">+412345678</a>
              </li>
              <li>
                <MailIcon />
                <a className="mm-contactLink" href="mailto:MMGtiling@gmail.com">MMGtiling.com.au</a>
              </li>
              {/* <li className="mm-hours">
                <ClockIcon />
                <span>
                  Open 7 Days a Week<br />
                  9:00 AM – 9:00 PM
                </span>
              </li> */}
            </ul>
          </div>
        </div>

      
<div className="mm-divider"></div>

<div className="mm-copy">
  © MMG Tilling. All Rights Reserved.
</div>
      </div>
    </footer>
  );
}

/* ========= 3D LINK ========= */
function ThreeDLink({ children }) {
  return (
    <a href={children.href} className="mm-link3d">
      {children.title}
    </a>
  );
}

/* ========= SOCIAL ========= */
function SocialBtn({ children }) {
  return <a href={children.href} className="mm-socialBtn"> <span>
    <img src={children.icon} alt="Telephone" width="18" height="18" />
  </span></a>;
}

/* ========= ICONS ========= */
const MapIcon = () => (
  <span>
    <img src={locationIconSrc} alt="Location" width="18" height="18" />
  </span>
);
const PhoneIcon = () => (
  <span>
    <img src={telephoneIconSrc} alt="Telephone" width="18" height="18" />
  </span>
);
const MailIcon = () => (
  <span>
    <img src={mailIconSrc} alt="Mail" width="18" height="18" />
  </span>
);
const ClockIcon = () => (
  <span>
    <img src={clockIconSrc} alt="Clock" width="18" height="18" />
  </span>
);

