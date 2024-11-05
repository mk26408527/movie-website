/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import picOne from "../../public/picOne.jpg"
import picTwo from "../../public/picTwo.jpg"
import picThree from "../../public/picThree.jpg"
import picFour from "../../public/picFour.jpg"
import picFive from "../../public/picFive.jpg"
import picSix from "../../public/picSix.jpg"
import picSeven from "../../public/picSeven.jpg"
import picEight from "../../public/picEight.jpg"
import picNine from "../../public/picNine.jpg"
import Link from "next/link";

export default function Home() {
  return (
    <div className="page-wrapper">
      <header className="header">
        <div className="header-container">
          <h1 className="logo">Movie's</h1>
          <nav className="navbar">
            <ul>
              <li><Link href="#home">Home</Link></li>
              <li><Link href="#categories">Categories</Link></li>
              <li><Link href="#best-sellers">Best Sellers</Link></li>
              <li><Link href="#new-arrivals">New Arrivals</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main className="container">
        <section className="banner" id="home">
          <div className="banner-content">
            <h2>Discover Your Next Favorite Movie</h2>
            <p>Explore a world of stories, knowledge, and adventure!</p>
            <button className="btn">Browse Collection</button>
          </div>
        </section>
        
        <section className="section" id="best-sellers">
          <h2 className="section-title">Best Sellers</h2>
          <div className="book-section">
            <div className="book-card">
              <div className="book-image"><Image src={picOne} alt="Book Title 1" /></div>
              <h3 className="book-title">Harry Poter</h3>
              <p className="book-author">⭐ 7.6 | 2021</p>
              <p className="book-price">$19.99</p>
              <button className="btn buy-btn">Add to Cart</button>
            </div>
            <div className="book-card">
              <div className="book-image"><Image src={picTwo} alt="Book Title 2" /></div>
              <h3 className="book-title">Cargo</h3>
              <p className="book-author">⭐ 4.2 | 2018</p>
              <p className="book-price">$24.99</p>
              <button className="btn buy-btn">Add to Cart</button>
            </div>
            <div className="book-card">
              <div className="book-image"><Image src={picThree} alt="Book Title 3" /></div>
              <h3 className="book-title">Avengers</h3>
              <p className="book-author">⭐ 6.4 | 2020</p>
              <p className="book-price">$29.99</p>
              <button className="btn buy-btn">Add to Cart</button>
            </div>
          </div>
        </section>

        <section className="section" id="new-arrivals">
          <h2 className="section-title">New Arrivals</h2>
          <div className="book-section">
            <div className="book-card">
              <div className="book-image"><Image src={picFour} alt="Book Title 4" /></div>
              <h3 className="book-title">Thomas Shelby</h3>
              <p className="book-author">⭐ 9.1 | 2023</p>
              <p className="book-price">$17.99</p>
              <button className="btn buy-btn">Add to Cart</button>
            </div>
            <div className="book-card">
              <div className="book-image"><Image src={picFive} alt="Book Title 5" /></div>
              <h3 className="book-title">JUMANJI</h3>
              <p className="book-author">⭐ 8.2 | 2021</p>
              <p className="book-price">$22.99</p>
              <button className="btn buy-btn">Add to Cart</button>
            </div>
            <div className="book-card">
              <div className="book-image"><Image src={picSix} alt="Book Title 6" /></div>
              <h3 className="book-title">Venom</h3>
              <p className="book-author">⭐7.9 | 2024</p>
              <p className="book-price">$18.99</p>
              <button className="btn buy-btn">Add to Cart</button>
            </div>
          </div>
        </section>

        <section className="section" id="categories">
          <h2 className="section-title">Audience Choice</h2>
          <div className="book-section">
            <div className="book-card">
              <div className="book-image"><Image src={picSeven} alt="Book Title 7" /></div>
              <h3 className="book-title">Spider Man</h3>
              <p className="book-author">⭐ 7.8 | 2023</p>
              <p className="book-price">$20.99</p>
              <button className="btn buy-btn">Add to Cart</button>
            </div>
            <div className="book-card">
              <div className="book-image"><Image src={picEight} alt="Book Title 8" /></div>
              <h3 className="book-title">Matrix</h3>
              <p className="book-author">⭐ 6.0 | 2022</p>
              <p className="book-price">$23.99</p>
              <button className="btn buy-btn">Add to Cart</button>
            </div>
            <div className="book-card">
              <div className="book-image"><Image src={picNine} alt="Book Title 9" /></div>
              <h3 className="book-title">Dr. Strange</h3>
              <p className="book-author">⭐ 5.9 | 2019</p>
              <p className="book-price">$16.99</p>
              <button className="btn buy-btn">Add to Cart</button>
            </div>
          </div>
        </section>
      </main>

      <section className="section" id="contact">
  <h2 className="section-title"></h2>
  <div className="contact-form">
    <h2 className="contact-name">Contact Us</h2>
    <form>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="your name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="123@gmail.com" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" placeholder="hi...." rows={5} required></textarea>
      </div>
      <button type="submit" className="btn">Send Message</button>
    </form>
  </div>
</section>


      <footer className="footer">
        <p>&copy; 2024 Movies. All Rights Reserved.</p>
      </footer>
    </div>
  );
}