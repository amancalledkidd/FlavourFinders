import React from 'react'
import "./popular_recipes.css"
import Navbar from '../navbar/Navbar'
import logo from '../images/logo.png'
import pasta from "../images/pasta.jpg"
import chicken from "../images/chicken.jpg"
import salmon from "../images/salmon.jpg"

const PopularRecipe = () => {
    return(
        <>
        <body className='popular-body'>
        <Navbar />
        <div className='page-content'>
            <div className='title'>
                <img className='logo' src={logo} alt='Robot chef' />
                <h2 className='main-title'>Three simple and quick recipes</h2>
            </div>
            <div className='grid-container'>
                <div className='grid-item'>
                    <h3 className='dish-name'>Pasta Aglio e Olio</h3>
                    <img className='dish-img' src={pasta} alt='Pasta Aglio e Olio'/>
                    <p className='bullet-titles'>Cooking Time: 15 minutes</p>
                    <p className='bullet-titles'>Ingredients</p>
                        <ul>
                            <li>8 oz (225g) spaghetti or any pasta of your choice</li>
                            <li>4 cloves of garlic, thinly sliced</li>
                            <li>1/4 cup (60ml) extra virgin olive oil</li>
                            <li>Red pepper flakes (to taste)</li>
                            <li>Salt and pepper to taste</li>
                            <li>Fresh parsley, chopped (for garnish)</li>
                        </ul>
                    <p className='bullet-titles'>Instructions</p>
                        <ol>
                            <li>
                                Cook the pasta in a large pot of salted boiling water according to the package instructions until al dente. Drain and set aside.
                            </li><br />
                            <li>
                                In a large skillet, heat the olive oil over medium-low heat. Add the sliced garlic and red pepper flakes. Cook until the garlic becomes fragrant and just starts to turn golden (about 2-3 minutes). Be careful not to burn the garlic.
                            </li><br />
                            <li>
                                Add the cooked pasta to the skillet and toss it in the garlic and olive oil mixture. Season with salt and pepper to taste.
                            </li><br />
                            <li>Garnish with freshly chopped parsley and serve. You can also add a sprinkle of grated Parmesan cheese if desired.</li>
                        </ol>
                </div>
                <div className='grid-item'>
                    <h3 className='dish-name'>Nutty chicken satay strips</h3>
                    <img className='dish-img' src={chicken} alt='Chicken Satay'/>
                    <p className='bullet-titles'>Cooking Time: 20 minutes</p>
                    <p className='bullet-titles'>Ingredients</p>
                        <ul>
                            <li>2 tbsp chunky peanut butter (without palm oil or sugar)</li>
                            <li>1 garlic clove, finely grated</li>
                            <li>1 tsp Madras curry powder</li>
                            <li>few shakes soy sauce</li>
                            <li>2 tsp lime juice</li>
                            <li>2 skinless, chicken breast fillets (about 300g) cut into thick strips</li>
                            <li>about 10cm cucumber, cut into fingers</li>
                            <li>sweet chilli sauce, to serve</li>
                        </ul>
                    <p className='bullet-titles'>Instructions</p>
                        <ol>
                            <li>
                                Heat oven to 200C/180C fan/gas 4 and line a baking tray with non-stick paper.
                            </li><br />
                            <li>
                                Mix 2 tbsp chunky peanut butter with 1 finely grated garlic clove, 1 tsp Madras curry powder, a few shakes of soy sauce and 2 tsp lime juice in a bowl. Some nut butters are thicker than others, so if necessary, add a dash of boiling water to get a coating consistency.
                            </li><br />
                            <li>
                                Add 2 skinless chicken breast fillets, cut into strips, and mix well. Arrange on the baking sheet, spaced apart, and bake in the oven for 8-10 mins until cooked, but still juicy.
                            </li><br />
                            <li>
                                Eat warm with roughly 10cm cucumber, cut into fingers, and sweet chilli sauce. Alternatively, leave to cool and keep in the fridge for up to 2 days.
                            </li>
                        </ol>
                </div>
                <div className='grid-item'>
                    <h3 className='dish-name'>Sticky sweet chilli ginger salmon</h3>
                    <img className='dish-img' src={salmon} alt='Salmon'/>
                    <p className='bullet-titles'>Cooking Time: 20 minutes</p>
                    <p className='bullet-titles'>Ingredients</p>
                        <ul>
                            <li>125ml (1/2 cup) sweet chilli sauce</li>
                            <li>2 tbsp soy sauce</li>
                            <li>1 tbsp finely grated fresh ginger</li>
                            <li>4 x 200g skinless salmon fillets</li>
                            <br />
                            <p className='coleslaw'>Honey sesame coleslaw:</p>
                            <li>80ml (1/3 cup) apple cider vinegar</li>
                            <li>2 tbsp honey</li>
                            <li>2 tbsp sesame oil</li>
                            <li>1 tsp sea salt</li>
                            <li>200g (3 cups) finely shredded green cabbage</li>
                            <li>120g (2 cups) finely shredded purple cabbage</li>
                            <li>1 carrot, julienned into long strips</li>
                            <li>1 cup fresh mint leaves, plus extra 2 tbsp, to serve</li>
                        </ul>
                    <p className='bullet-titles'>Instructions</p>
                    <ol>
                        <li>
                            Preheat the grill on high. Combine the sweet chilli sauce, soy sauce and ginger in a large bowl. Add the salmon and gently mix until evenly coated. Set aside to marinate while you make the coleslaw.
                        </li><br />
                        <li>
                            For the honey sesame coleslaw, whisk the vinegar, honey, sesame oil and salt in a small bowl. Place the cabbage, carrot and mint in a large bowl.
                        </li><br />
                        <li>
                            Line a baking tray with foil and lightly brush or spray with oil. Remove salmon from bowl and shake off excess marinade, reserving for later. Place the salmon on the prepared tray. Cook under the grill, without turning, for 8-10 minutes or until just starting to char at edges and flake when tested with a fork.
                        </li><br />
                        <li>
                            Meanwhile, place the reserved marinade in a small saucepan over medium heat. Bring to a simmer, then reduce heat to low and cook, stirring occasionally, for 3-4 minutes.
                        </li><br />
                        <li>
                            Lightly whisk the dressing again and pour over the cabbage mixture. Toss until well combined. Divide the salmon among serving plates, drizzle over the reduced marinade and serve with the coleslaw and extra mint.
                        </li>
                    </ol>
                </div>
            </div>
        </div>
        </body>
        </>
    )
}


export default PopularRecipe;