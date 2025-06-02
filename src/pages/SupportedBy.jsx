import React from 'react'
import "./css/SupportedBy.css"
import "./css/about/undermaintainance.css"; // Importing the CSS for the under maintenance section

const SupportedBy = () => {
  return (
    <div className="coming-soon">
      <p>Coming Soon...</p>
      <p>Under Maintenance</p>
      <p>
        We are working hard to bring you the best donation experience. Stay
        tuned!
      </p>
      <p>
        In the meantime, you can support us by spreading the word about our
        cause and sharing our mission with your friends and family.
      </p>
      <p>
        If you have any questions or would like to get involved, please contact
        us at <a href="mailto: info@yourdomain.com">info@yourdomain.com</a>
      </p>
      <p>
        Thank you for your patience and support! Together, we can make a
        difference.
      </p>
    </div>
  );
}

export default SupportedBy
