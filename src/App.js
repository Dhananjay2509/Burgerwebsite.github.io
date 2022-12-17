import './App.css';
import img1 from './images/burger1.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import img6 from './images/img6.png';
import img8 from './images/img8.png';

// import {Container} from "react-bootstrap";


function App() {
  return (
    <>
      <header>
        <img src={img1} alt="No image found" />
        <p className='header1'>Burger House</p>
        <p className="header2"><span> IT IS A GOOD TIME FOR THE GREAT TASTE OF BURGERS</span></p>
        <p className="header3"> <span> BURGER </span> <br /> <span className='week'> WEEK </span></p>
      </header>


      <body>
        <div className="box1">

          <div className="box2"> <img src={img3} alt="#" />
            <p> TRY IT TODAY </p>
            <span>MOST POPULAR BURGER</span>

          </div>
          <div className="box3">
            <div className="box4">  <img src={img4} alt="#" />
              <p>TRY IT TODAY</p>
              <span>MORE FUN <br />MORE TASTE </span>
            </div>
            <div className="box5">  <img src={img5} alt="#" />
              <p>TRY IT TODAY</p>
              <span>FRESH & <br />CHILLI </span>
            </div>
          </div>
        </div>
        </body>

        <main>
        <div className="info"> <span>ALWAYS TASTY BURGER</span> </div>
        <div className="enjoy">CHOOSE & ENJOY</div>
        
        <div className="info2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nam unde voluptate autem error sint cumque accusamus temporibus vero recusandae architecto </div>

        <div className="burger_box">
         <div className="burger1">  <img src={img6} alt="#" />
         <p>BURGER</p>
         <span>Lorem ipsum dolor sit amet consectetur</span>
         <button>ORDER NOW</button>
         </div>
         <div className="burger2"><img src={img8} alt="#" />
         <p>BURGER</p>
         <span>Lorem ipsum dolor sit amet consectetur</span>
         <button>ORDER NOW</button>
         </div>
         <div className="burger3"><img src={img6} alt="#" />
         <p>BURGER</p>
         <span>Lorem ipsum dolor sit amet consectetur</span>
         <button>ORDER NOW</button>
         </div>
         </div>
        </main>
        
        <div className="events">
          <div className="event1"><p>DISCOVER  <br /> <span> UPCOMING EVENTS </span> </p> 
          <div className="einfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime odio eaque voluptates quis exercitationem odit vitae earum molestias harum? Architecto optio ipsum molestiae modi minus reprehenderit atque libero sapiente vel quia? Aspernatur enim est alias cupiditate, iure consequatur commodi reiciendis ex quia! Porro modi harum, numquam voluptates, dolorem non accusamus necessitatibus commodi, consequatur atque mollitia minima odio maxime consectetur vitae.</div></div>
          
          <div className="event2"><img src={img3} alt="" />  </div>
        </div>

        <div className="reservation">RESERVATION <br /> <span> BOOK YOUR TABLE </span> 
         <div className="list"   >
          <table> 
            <tr>
         <input type="text" placeholder='NAME' />
         <input type="text" placeholder='EMAIL' />
         </tr>
         <tr>
         <input type="text" placeholder='DATE' />
         <input type="text" placeholder='TIME' />
         </tr>
         <tr>
         <input type="text" placeholder='PEOPLE' />
         <input className='table' type="button" value="FIND A TABLE" />
         </tr>
         </table>
         </div>
        </div>

        <div className="footer"><img src={img4} alt="" />
        <span><br /> BURGER HOUSE</span>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Maiores iusto amet eum dolorum numquam porro odio alias <br /> minus, eligendi quae. Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. Aspernatur eius commodi eaque reiciendis at <br />
        molestias. Suscipit saepe unde ipsam quisquam ad mollitia non <br /> atque quidem! Eos cumque excepturi totam consectetur! <br /> <br /> <br />
        @COMPANY NAME 2022, ALL RIGHTS RESERVED
        
        </p>
        </div>
      

    </>
  );
}

export default App;
