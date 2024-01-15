import React from 'react'

export const Footer = () => {
  return (
    <div className='footer'>
        <img src="./assets/footer.jpg" alt="" />
            <div className="about">
                <h1>About Cheetah Chug</h1>
                <li>
                    <ul>News</ul>
                    <ul>Contact us</ul>
                    <ul>Frequent questions</ul>
                </li>
            </div>
            <div className="more-info">
                <h1>More information</h1>
                <li>
                    <ul>Cheetah Chug Owners</ul>
                </li>
            </div>
            <div className="legal">
                <h1>Legal</h1>
                <li>
                    <ul>Privacy policies</ul>
                    <ul>Terms and conditions</ul>
                    <ul>Complaints book</ul>
                </li>
            </div>
    </div>
  )
}
