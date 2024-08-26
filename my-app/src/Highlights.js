import React from "react";

function Highlights() {
    return(
        <section id="highlights">
            <h2>Specials</h2>
            <div className="highlight-item">
                <img/>
                <h3>Dish Name 1</h3>
                <p>Description of Dish 1.</p>
                <button>Order Online</button>
            </div>
            <div className="highlight-item">
                <img/>
                <h3>Dish Name 2</h3>
                <p>Description of Dish 2.</p>
                <button>Order Online</button>
            </div>
            <div className="highlight-item">
                <img/>
                <h3>Dish Name 3</h3>
                <p>Description of Dish 3.</p>
                <button>Order Online</button>
            </div>
        </section>
    );
}

export default Highlights;