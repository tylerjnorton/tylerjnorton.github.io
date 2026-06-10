const RECIPES = [
  {
    title: "Mom's Chicken Soup",
    emoji: "🍲",
    desc: "A from-scratch chicken soup with carrots and egg noodles — Nan's touch of tomato sauce for a little zing.",
    tags: ["dinner", "lunch", "savory", "soup"],
    person: "Jeanette",
    prep: "15 min", cook: "1 hr", serves: "6",
    guesses: ["prep", "cook", "serves"],
    ingredients: [
      "3 or 4 chicken breasts",
      "1 small onion diced",
      "2 T. minced garlic",
      "4 or 5 carrots = peeled and cut into bite size pieces",
      "1 cup of egg noodles or rice",
      "4 cans of chicken broth",
      "Salt",
      "Pepper to taste (about 1 T)",
      "(about 2 T) Parsley as a garnish"
    ],
    steps: [
      "Put chicken with onion, garlic, salt and pepper. Add water to cover. Boil until chicken is done, about 20 minutes.",
      "Let cool. Remove chicken from water and dice or pull apart into small bite size pieces. Add back into water.",
      "Add carrots and cook ~ (1/2 hour) until carrots are soft.",
      "Add egg noodles or rice and cook until soft.",
      "Add chicken broth and parsley. Salt and pepper to taste.",
      "For a little zing add a little bit of tomato sauce. (Nan's touch)"
    ],
    notes: "Enjoy! — Jeanette"
  },
  {
    title: "Baked Macaroni and Cheese",
    emoji: "🧀",
    desc: "A classic baked mac and cheese with Velveeta and assorted cheese ends, golden and bubbling.",
    tags: ["dinner", "savory", "vegetarian", "pasta"],
    person: "Nan",
    prep: "15 min", cook: "30 min", serves: "10",
    guesses: ["prep", "cook"],
    ingredients: [
      "1 lb. pasta (Rigatoni or Ziti)",
      "1/2 lb. Velveeta Cheese",
      "1/2 lb. assorted cheese ends",
      "2 T. butter",
      "2 T. flour",
      "1 c. milk"
    ],
    steps: [
      "While the pasta is cooking. Melt butter in large saucepan. Add flour a little at a time stirring constantly.",
      "Add milk and stir until smooth.",
      "Cut all the cheese into small pieces and slowly add to milk mixture until completely melted. Stir to keep the cheese from sticking and scorching on the bottom of the pan.",
      "Drain the pasta and pour into a buttered 13 X 9 baking pan.",
      "Pour cheese over pasta and mix in until pasta is completely coated.",
      "Bake @ 350 until golden brown on top. Cheese should be bubbling."
    ],
    notes: "Cool slightly and serve. Serves 10. — Jeanette"
  },
  {
    title: "Mom's Beef Stew",
    emoji: "🥩",
    desc: "A hearty beef stew with carrots, potatoes, and a rich thickened gravy. Serve with hot rolls or bread.",
    tags: ["dinner", "savory", "soup"],
    person: "Jeanette",
    prep: "20 min", cook: "1 hr 10 min", serves: "8",
    guesses: ["prep"],
    ingredients: [
      "2 PKGS. Adolph's or McCormack's Beef Stew Seasoning",
      "2 lbs. lean beef round cut in cubes (beef round for beef stew)",
      "6 carrots peeled and cut into 1/4 inch rounds",
      "4 to 6 potatoes peeled and cut into bite sized cubes",
      "1 small onion – peeled and quartered",
      "3 cloves of garlic – minced or 2 tsp of minced garlic from a jar",
      "Lots of ground black pepper – about 10 to 12 turns on the pepper mill",
      "1 tsp. of salt",
      "1 tsp of gravy master",
      "2 Tablespoons flour",
      "1 cup water"
    ],
    steps: [
      "Empty the seasoning packets into a large sauce pan (dutch oven).",
      "Cut beef into bite size pieces. Add to pan and stir to coat meat with seasoning.",
      "Add vegetables and stir to coat. Cover with water and bring to a boil for about 30 minutes.",
      "Turn down to medium low and cover an additional 1/2 hour.",
      "Add gravy master and stir.",
      "Combine the flour with 1 cup of water and mix until smooth. Add to stew to thicken. Simmer about 10 minutes.",
      "Add more salt and pepper to taste."
    ],
    notes: "Makes about 8 servings. Serve with hot rolls or bread. — Jeanette"
  },
  {
    title: "American Chop Suey",
    emoji: "🍝",
    desc: "Ground beef, pasta shells, and tomato soup all in one pot — even better on day two!",
    tags: ["dinner", "savory", "pasta"],
    person: "Jeanette",
    prep: "10 min", cook: "30 min", serves: "8",
    guesses: ["prep", "cook"],
    ingredients: [
      "1 to 1 1/2 lbs ground beef",
      "2 tsp. minced garlic",
      "1 small onion diced",
      "Garlic powder",
      "Palm full of Italian seasoning",
      "1 can diced tomatoes",
      "2 cans Campbell's Tomato Soup",
      "1 lb of medium pasta shells or elbows",
      "Salt (couple of pinches)",
      "Pepper (7 or 8 twist of the mill)"
    ],
    steps: [
      "Brown the meat in large skillet with garlic, onion and seasonings. Drain off the grease.",
      "Add the canned tomatoes, and soup (without water), salt and pepper. Cover and simmer for 20 minutes.",
      "Cook pasta and drain.",
      "Pour meat mixture over pasta and stir in."
    ],
    notes: "Makes enough for about 6 to 8. Serve with warm garlic bread or rolls. Even better on day Two!!!!!!!! YUMMY! — Jeanette"
  },
  {
    title: "Pot Roast Dinner",
    emoji: "🍖",
    desc: "A seared bottom round roast slow-cooked tender, with a from-scratch pan gravy. A huge family favorite!",
    tags: ["dinner", "savory"],
    person: "Jeanette",
    prep: "10 min", cook: "1 hr 30 min", serves: "8",
    guesses: ["prep", "serves"],
    ingredients: [
      "5 or 6 lb Bottom Round Roast.",
      "Salt",
      "Pepper",
      "Garlic Salt",
      "Vegetable Oil"
    ],
    steps: [
      "Cover the bottom of a dutch oven with vegetable oil. Generously sprinkle all surfaces of the meat with salt, pepper and garlic salt.",
      "On high heat, sear all sides of the roast until dark.",
      "Place the fat side of the meat down and reduce heat to medium. Cover the meat with water (to within an inch of the top of the roast.) and cook covered for about 1 1/2 hours.",
      "To Make the Gravy. Remove the roast, turn up heat to medium high. In a separate container, mix 2 T. flour with water until smooth.",
      "Slowly add to the pan, stirring to prevent lumps. Add more salt, pepper and garlic salt to intensify the favor to suit your taste. Bring to a slow boil."
    ],
    notes: "Serve with mashed potatoes, peas, squash and cole slaw. Huge family favorite! — Jeanette"
  },
  {
    title: "New England Boiled Dinner",
    emoji: "🥩",
    desc: "Corned beef brisket boiled with turnip, carrots, cabbage and potatoes — the Norton Clan's #1 Sunday dinner.",
    tags: ["dinner", "savory"],
    person: "Nan",
    prep: "20 min", cook: "2 hr", serves: "8",
    guesses: ["prep", "serves"],
    ingredients: [
      "1 flat end Grey Corned Beef Brisket",
      "5 lbs. potatoes peeled and to equal size",
      "2 lbs carrots – peeled (cut large ones in half lengthwise. Try keeping them nearly same size",
      "1 med head cabbage – quartered (outer leaves removed)",
      "1 sm. Purple turnip – peeled and sliced"
    ],
    steps: [
      "Boil corned beef in large stock pot. Add turnip slices.",
      "After 1 hour add carrots.",
      "Add cabbage 1/2 hour later.",
      "Add potatoes for the last 1/2 hour. Keep pot at slow boil always.",
      "When potatoes can be pierced with fork easily, dinner is ready.",
      "Serve hot. With butter, pepper and apple cider vinegar, (if desired)."
    ],
    notes: "#1 dinner for the Norton Clan. Reminds you of those great Sunday dinners at Nan's, and that huge pot! Please note: You can also use a smoked shoulder for this meal. I sometimes substitute a Butt End Ham too."
  },
  {
    title: "Chuck's Chicken Cutlet",
    emoji: "🍗",
    desc: "Thinly pounded breaded chicken cutlets, pan-fried golden. Serve with rice pilaf for Britt or in marinara for Tyler.",
    tags: ["dinner", "savory"],
    person: "Carlene",
    prep: "15 min", cook: "15 min", serves: "4",
    guesses: ["prep", "cook", "serves"],
    ingredients: [
      "1-2 pounds boneless chicken breasts",
      "seasoned bread crumbs",
      "milk",
      "olive oil (NOT extra virgin)"
    ],
    steps: [
      "De-schmeg, slice thinly and pound chicken.",
      "Dip into milk, then breadcrumbs.",
      "Place into heated oil in skillet. Flip so that they brown lightly.",
      "Place on paper towel on plate to soak up excess oil.",
      "Serve with rice pilaf and salad for Britt.",
      "Serve in marinara sauce with pasta for Tyler."
    ],
    notes: "IT IS IMPORTANT TO NOTE THAT ALL RECIPES SUBMITTED ARE MADE IN HOOKSETT, NH. IF ONE SHOULD NEED TO EAT LUNCH; SUBS CAN BE ORDERED FROM THE GAS STATION DOWN THE STREET."
  },
  {
    title: "Cole Slaw",
    emoji: "🥗",
    desc: "Simple finely chopped cabbage slaw — keep tasting until it tastes like Nan's.",
    tags: ["lunch", "savory", "side", "vegetarian"],
    person: "Nan",
    prep: "10 min", cook: "0 min", serves: "6",
    guesses: ["prep", "serves"],
    ingredients: [
      "1 medium head of hard green cabbage.",
      "Mayonnaise",
      "Garlic powder",
      "Salt and pepper."
    ],
    steps: [
      "Finely chop cabbage.",
      "Mix in a couple of big spoonfuls of mayonnaise. If not moist enough, add more mayonnaise a little at a time.",
      "Sprinkle salt, pepper and garlic powder. Mix."
    ],
    notes: "Keep tasting until it tastes like Nan's."
  },
  {
    title: "Butternut Squash",
    emoji: "🎃",
    desc: "Boiled butternut squash mashed with butter, brown sugar and a dash of cinnamon.",
    tags: ["side", "savory", "sweet", "vegetarian"],
    person: "Nan",
    prep: "10 min", cook: "20 min", serves: "4",
    guesses: ["prep", "cook", "serves"],
    ingredients: [
      "1 large Butternut Squash",
      "Salt",
      "1 T. Brown sugar",
      "Dash of cinnamon",
      "2 T butter"
    ],
    steps: [
      "Slice 1 large butternut squash into 1 inch rounds, peel and cut into large chunks.",
      "Place in large saucepan. Add water to cover squash. Boil until soft.",
      "Drain liquid in a colander, making sure all liquid has drained off.",
      "Add butter, salt, cinnamon and brown sugar."
    ]
  },
  {
    title: "Mashed Potatoes",
    emoji: "🥔",
    desc: "Classic whipped mashed potatoes — smooth and fluffy with no lumps.",
    tags: ["side", "savory", "vegetarian"],
    person: "Nan",
    prep: "15 min", cook: "20 min", serves: "8",
    guesses: ["prep", "cook", "serves"],
    ingredients: [
      "5 lbs. potatoes",
      "Milk",
      "Butter",
      "Salt",
      "Pepper",
      "Garlic powder (optional)"
    ],
    steps: [
      "Peel, and cut potatoes into same size pieces.",
      "Boil until fork can easily cut into potatoes. Drain.",
      "Add butter, milk salt and pepper.",
      "Mash or whip with electric beater until smooth and fluffy. (No Lumps)"
    ]
  },
  {
    title: "Chicken and Gravy",
    emoji: "🍗",
    desc: "Shredded chicken in a seasoned homemade gravy — a Nan favorite. Serve over mashed potatoes.",
    tags: ["dinner", "savory"],
    person: "Jeanette",
    prep: "10 min", cook: "1 hr", serves: "4",
    guesses: ["prep", "serves"],
    ingredients: [
      "3 to 4 boneless chicken breasts. (more depending on how many you are feeding)",
      "Salt",
      "Pepper",
      "Garlic salt.",
      "2 T. flour",
      "1 cup water"
    ],
    steps: [
      "In large saucepan, cover chicken with water, salt pepper and garlic salt. Be generous with the seasoning, especially the pepper and garlic salt.",
      "Bring to a boil and cook for about 1/2 hour.",
      "Cool entire pan. Remove chicken and shred into bite pieces. Set aside.",
      "To thicken the water mixture: Mix flour and water together until smooth. Add to the pan, and stir until smooth.",
      "Bring to a boil, then add chicken back into gravy. Lower heat and simmer another 1/2 hour.",
      "Take a taste test to assure the proper amount of pepper and garlic salt has been added.",
      "Serve with mashed potatoes, peas, etc."
    ],
    notes: "This is a Nan favorite! — Jeanette"
  },
  {
    title: "Spaghetti & Meatballs with Sausage",
    emoji: "🍝",
    desc: "A from-scratch Sunday sauce simmered for hours with homemade meatballs and Italian sausage. Feeds a whole family.",
    tags: ["dinner", "savory", "pasta"],
    person: "Nan",
    prep: "30 min", cook: "2 hr", serves: "8",
    guesses: ["prep", "serves"],
    ingredients: [
      "— Sauce: —",
      "Olive oil",
      "1 small onion chopped finely",
      "2 T minced garlic",
      "1 T Italian seasoning",
      "1 tsp. oregano",
      "1 tsp thyme",
      "1 tsp rosemary",
      "1 tsp basil",
      "2 bay leaves",
      "Dash crushed red pepper",
      "1/2 cup grated parmesan cheese",
      "1 32 oz. can crushed tomatoes",
      "2 can tomato paste",
      "— Meatballs: —",
      "1 lb ground beef",
      "2 eggs - beaten",
      "1 small onion minced",
      "2 T minced garlic",
      "A palm full of Italian seasoning",
      "1 cup flavored bread crumbs",
      "1/2 cup parmesan cheese",
      "Dash of cinnamon",
      "Garlic Salt",
      "Salt & Pepper",
      "A dash of crushed red pepper",
      "1 pkg. Italian sausages"
    ],
    steps: [
      "Sauce: Coat bottom of large pot with oil. Saute onions, garlic and seasoning until onions are soft. Be careful not to burn.",
      "Slowly add the crushed tomatoes. Add the parmesan cheese and crushed red pepper. Cook for 10 minutes.",
      "Add the contents of both cans of tomato paste. Add 4 cans (tomato paste cans) of water and stir.",
      "Add sausages and stir to cover them with sauce. Simmer slowly for at least a couple of hours. Sauce should be simmering in a large pot while mixing meatballs.",
      "Meatballs: Mix all the meatball ingredients until all is incorporated evenly. Add a little milk if mixtures seems to dry.",
      "Roll a handful of the mixture into a ball. Add to a large pot of simmering sauce. Stir gently to completely cover the meatballs with sauce.",
      "Cook on low heat for a couple of hours, until all the flavors meld together.",
      "Just before turning off the sauce, boil your choice of pasta, drain when done. Serve together with Italian bread or garlic bread."
    ],
    notes: "Feeds a whole family. P.S. I never measure any of my spices, so taste test while cooking and add whatever you think you need"
  },
  {
    title: "Stuffing",
    emoji: "🍞",
    desc: "A bread-and-Stove-Top stuffing with mushrooms, onion and celery, baked moist under foil.",
    tags: ["dinner", "side", "savory"],
    person: "Stefanie",
    prep: "20 min", cook: "1 hr", serves: "8",
    guesses: ["prep", "serves"],
    ingredients: [
      "1 loaf white bread + you'll need 8 or 10 slices, 5 or 6 for smaller batch",
      "1 lg onion",
      "2 stalks celery, diced",
      "1/4 cup butter",
      "1 can mushroom pieces and liquid",
      "1 box Stove Top stuffing",
      "2 cups water, or chicken broth",
      "Chicken broth (to moisten)"
    ],
    steps: [
      "Cut bread, dry, cut in cubes.",
      "Dice onion and celery, cook in 1/4 cup butter.",
      "Slice 1 can mushroom pieces and liquid. Sprinkle all over top of cubed, dry bread.",
      "1 box Stove Top stuffing — use 2 cups water, or chicken broth and maybe 2 cups water. Then add to your dry mix.",
      "Start to add a little chicken broth at a time just to it's moist. You may be using a baking dish.",
      "Put mixture in pan, cover with foil. Heat 350 for an hour.",
      "Check halfway for moisture, watch so it doesn't get too brown on bottom."
    ]
  },
  {
    title: "Chocolate Chip Cookies",
    emoji: "🍪",
    desc: "A simple cream-and-fold chocolate chip cookie with a touch of cornstarch, baked at 410°.",
    tags: ["dessert", "sweet"],
    person: "Michelle",
    prep: "15 min", cook: "10 min", serves: "24 cookies",
    guesses: ["prep", "cook", "serves"],
    ingredients: [
      "3 c. All purpose flour",
      "3/4 t soda",
      "1 cup butter cold",
      "1 c brown sugar",
      "1 t vanilla",
      "1/2 c. gran sugar",
      "2 eggs",
      "1 t. cornstarch",
      "3/4 t salt",
      "2 c. chips"
    ],
    steps: [
      "Cream butter, brown sugar, sugar.",
      "Add eggs + vanilla.",
      "Add dry ingredients.",
      "Fold in chips.",
      "Bake at 410°."
    ]
  },
  {
    title: "Best-Ever Whipped Cream",
    emoji: "🥛",
    desc: "Sweet vanilla-bean whipped cream that holds stiff peaks.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "5 min", cook: "5 min", serves: "about 4 cups",
    ingredients: [
      "2 cups heavy whipping cream",
      "1 tsp. vanilla bean paste",
      "1/4 cup plus 2 Tbsp. powdered sugar"
    ],
    steps: [
      "Beat heavy whipping cream, vanilla bean paste, and powdered sugar with a stand mixer fitted with a whisk attachment on medium speed until frothy, 1 minute.",
      "Increase speed to medium-high; continue beating until stiff peaks form, about 1 to 2 more minutes.",
      "Use immediately, or chill in an airtight container (up to 4 hours)."
    ]
  },
  {
    title: "Caramel Apple Crisp",
    emoji: "🍎",
    desc: "Caramel-coated baking apples under a brown-sugar oat crumble.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "25 min", cook: "1 hr 20 min", serves: "6",
    ingredients: [
      "1/2 cup caramel ice cream topping (such as Smucker's)",
      "1/2 tsp. cinnamon",
      "6 large baking apples (such as Braeburn or Cortland), peeled and cut into 1/2-inch-thick slices (12 cups)",
      "2/3 cup flour",
      "1/2 cup packed brown sugar",
      "1/2 cup cold butter, cut into small pieces",
      "2/3 cup quick-cooking oats",
      "Vanilla ice cream, for serving"
    ],
    steps: [
      "Preheat oven to 375°F. Stir together caramel topping and cinnamon in a large bowl. Add apples, stirring until evenly coated. Spread apple mixture evenly in a 9x13-inch baking dish.",
      "In same bowl, stir together flour and sugar. Using a pastry blender or 2 forks, cut butter into flour mixture until coarse crumbs form. Stir in oats. Crumble mixture over apples.",
      "Bake until apples are tender and topping is light golden brown, 45 to 50 minutes. Let cool 10 minutes. Serve with ice cream."
    ]
  },
  {
    title: "Peanut Butter-Banana Blondies",
    emoji: "🍌",
    desc: "Chewy peanut butter and banana blondies topped with roasted peanuts and flaky salt.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "18 min", cook: "40 min, plus 2 hr", serves: "12",
    ingredients: [
      "2 cups all-purpose flour",
      "1 tsp. baking powder",
      "1 tsp. kosher salt",
      "4 large eggs, lightly beaten",
      "1 cup dark brown sugar",
      "1/2 cup granulated sugar",
      "1/2 cup mashed ripe bananas (from 2 bananas)",
      "1/2 cup creamy peanut butter (such as Jif)",
      "1/2 cup mayonnaise (such as Duke's)",
      "3 Tbsp. unsalted butter, melted",
      "1 cup dry-roasted peanuts, roughly chopped and divided",
      "1 tsp. flaky sea salt"
    ],
    steps: [
      "Preheat oven to 350°F. Grease a 9-inch square baking dish with cooking spray, and line with parchment paper, letting parchment overhang on 2 sides by at least 1 inch.",
      "Whisk together flour, baking powder, and kosher salt in a medium bowl. Place eggs, brown sugar, granulated sugar, bananas, peanut butter, mayonnaise, and butter in a large bowl; whisk until mostly smooth. Add flour mixture to egg mixture, and stir until just combined. Fold in 3 tablespoons of the peanuts. Pour batter into prepared pan, spreading evenly to edges. Top with remaining 1 tablespoon peanuts.",
      "Bake until lightly browned and a wooden pick inserted in center comes out with a few moist crumbs attached, about 30 minutes. Place pan on a wire rack, and sprinkle top with flaky sea salt. Let cool completely, about 2 hours. Remove from pan using parchment overhang, and transfer to a cutting board. Cut into 12 pieces; serve."
    ]
  },
  {
    title: "No-Bake Chocolate Pie",
    emoji: "🥧",
    desc: "A five-ingredient chocolate icebox pie with an Oreo crust.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "20 min", cook: "25 min, plus 2 hr", serves: "8",
    ingredients: [
      "20 cream-filled chocolate sandwich cookies (such as Oreo, from 12.25-oz. pkg.), plus more crushed cookies for garnish",
      "1 cup butter, divided",
      "1 cup heavy whipping cream",
      "1 (12-oz.) pkg. semisweet chocolate chips (such as Ghirardelli)",
      "Sweetened whipped cream, for serving"
    ],
    steps: [
      "Grease a 9-inch pie plate with cooking spray, and set aside. Process chocolate sandwich cookies into fine crumbs in a food processor, about 45 seconds. Microwave 1/2 cup of the butter in a small bowl on HIGH until melted, about 30 seconds. With food processor running, add melted butter; pulse until combined, about 15 seconds.",
      "Transfer crumb mixture to prepared pie plate. Firmly press crumbs into bottom and up sides of pie plate in an even layer. Freeze 15 minutes.",
      "Meanwhile, heat cream in a saucepan over medium until steaming; do not boil. Pour cream over chocolate chips in a large heatproof bowl; let stand 1 minute, then gently whisk until smooth. Cut remaining 1/2 cup butter into small pieces, add to chocolate mixture, and stir until melted and incorporated.",
      "Pour chocolate mixture into chilled crust, spreading in an even layer. Chill, uncovered, until set, about 2 hours. Top with whipped cream and sprinkle with crushed cookies just before serving."
    ]
  },
  {
    title: "Fudge Layer Cake with Caramel Buttercream",
    emoji: "🍰",
    desc: "A rich two-layer fudge cake with caramel buttercream and chocolate ganache.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "1 hr", cook: "3 hr 30 min", serves: "12",
    ingredients: [
      "— Fudge Cake: —",
      "1 1/2 cups bittersweet chocolate chips",
      "1/2 cup butter, softened",
      "1 (1-lb.) pkg. light brown sugar",
      "3 large eggs",
      "2 cups all-purpose flour, plus more for pans",
      "1 tsp. baking soda",
      "1/2 tsp. salt",
      "1 tsp. ground cinnamon",
      "1 cup sour cream",
      "1 Tbsp. bourbon",
      "— Caramel Buttercream: —",
      "1 cup granulated sugar",
      "1/4 cup water",
      "1/2 cup heavy cream",
      "1 cup butter, chilled and cut into 1/2-inch pieces",
      "1 cup butter, softened",
      "4 oz. cream cheese, softened",
      "1/2 tsp. vanilla extract",
      "1/2 tsp. salt",
      "4 cups unsifted powdered sugar, divided",
      "— Chocolate Ganache: —",
      "1 (8-oz.) bag semisweet chocolate chips",
      "1/2 cup heavy cream",
      "Shaved bittersweet chocolate, for garnish"
    ],
    steps: [
      "Prepare the Fudge Cake: Coat 2 (9-inch) square cake pans with cooking spray; lightly dust with flour. Preheat oven to 350°F. Place chocolate chips in a microwavable bowl; microwave on MEDIUM (50% power) until melted, about 2 minutes, stirring every 30 seconds. Stir until completely smooth.",
      "Beat butter and brown sugar in a heavy-duty stand mixer on medium speed until well combined, about 5 minutes. Add eggs, 1 at a time, beating until just combined after each addition. Add melted chocolate, beating until just combined.",
      "Sift together flour, baking soda, salt, and cinnamon. Gradually add to chocolate mixture alternately with sour cream, beginning and ending with flour mixture, beating on low until just blended. Stir in bourbon. Pour batter evenly into prepared pans.",
      "Bake until a wooden pick inserted in centers comes out clean, 22 to 25 minutes. Cool in pans on wire racks 10 minutes; remove from pans and cool completely, about 1 hour.",
      "Prepare the Caramel Buttercream: cook granulated sugar and water in a saucepan over medium, stirring often, until sugar dissolves and caramelizes; carefully stir in heavy cream, then chilled butter, until smooth. Cool. Beat softened butter, cream cheese, vanilla, and salt until creamy; gradually add powdered sugar and the cooled caramel, beating until smooth.",
      "Prepare the Chocolate Ganache: heat chocolate chips and cream until melted and smooth. Spread buttercream between layers and over cake; drizzle with ganache and garnish with shaved chocolate."
    ]
  },
  {
    title: "Scones",
    emoji: "🫖",
    desc: "Flaky cream scones — a base recipe you can fold fruit or nuts into.",
    tags: ["breakfast", "sweet"],
    person: "Stefanie",
    prep: "25 min", cook: "35 min", serves: "12 scones",
    ingredients: [
      "2 1/2 cups all-purpose flour",
      "1/3 cup granulated sugar",
      "1 Tbsp. baking powder",
      "1/2 tsp. salt",
      "1 cup cold butter, cut up",
      "1 egg, lightly beaten",
      "1 cup heavy cream, plus more for brushing",
      "1/3 cup sour cream",
      "Coarse sugar, for sprinkling"
    ],
    steps: [
      "Preheat oven to 400°F. Line a baking sheet with parchment paper. In a large bowl stir together flour, sugar, baking powder, and salt. Using a pastry blender, cut in cold butter until mixture resembles coarse crumbs. Make a well in center of flour mixture.",
      "In a bowl combine egg, heavy cream, and sour cream. Add egg mixture all at once to flour mixture. Using a fork, stir just until moistened.",
      "Turn dough out onto a lightly floured surface. Knead 10 to 12 strokes or until nearly smooth. Divide in half. Pat or lightly roll each half into a 6-inch circle. Cut each circle into 6 wedges.",
      "Place wedges 2 inches apart on prepared baking sheet. Brush with additional heavy cream and sprinkle with coarse sugar. Bake 12 to 14 minutes or until bottoms are golden. Let cool on a wire rack."
    ]
  },
  {
    title: "Gingered Peach Galette",
    emoji: "🍑",
    desc: "A rustic free-form peach galette spiced with ginger in a flaky double crust.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "15 min", cook: "1 hr 35 min", serves: "8",
    ingredients: [
      "1 (14.1-oz.) pkg. refrigerated piecrusts (such as Pillsbury), at room temperature",
      "All-purpose flour, for dusting",
      "1/4 cup packed light brown sugar",
      "1 Tbsp. cornstarch",
      "2 tsp. grated lemon zest, plus 1 Tbsp. fresh juice (from 1 lemon), divided",
      "1/2 tsp. kosher salt",
      "1/2 tsp. ground ginger",
      "1 1/2 lb. firm-ripe peaches (about 5 peaches), cut into 1/4-inch-thick wedges (about 6 cups wedges)",
      "1 tsp. vanilla extract",
      "1 Tbsp. heavy whipping cream",
      "1 Tbsp. sparkling or turbinado sugar",
      "Vanilla ice cream or whipped cream, for serving"
    ],
    steps: [
      "Preheat oven to 375°F. Position oven rack in bottom third of oven. Unroll 1 piecrust on a lightly floured surface, and lightly brush top with 2 tablespoons water. Unroll remaining piecrust, and place on top. Roll stacked piecrusts into a 13-inch circle. Transfer to a large rimmed baking sheet lined with parchment paper. Refrigerate, uncovered, until ready to use, up to 15 minutes.",
      "Whisk together brown sugar, cornstarch, lemon zest, salt, and ground ginger in a large bowl until combined. Gently stir in peaches, vanilla, and lemon juice until peaches are fully coated. Arrange peach slices in an even layer in concentric circles on piecrust, starting from outside and leaving a 2-inch border around edges. Drizzle peaches with any remaining juices from bowl. Fold edges of piecrust over fruit, pleating as needed. Brush crust with cream; sprinkle crust and fruit with sparkling sugar.",
      "Bake in bottom third of preheated oven until filling is bubbling and crust is golden brown, about 50 minutes. Transfer baking sheet to a wire rack; let galette cool to room temperature, about 30 minutes. Serve with ice cream or whipped cream."
    ]
  },
  {
    title: "Peach Cream Kuchen",
    emoji: "🍑",
    desc: "A German-style peach custard kuchen from the Hill Country.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "15 min", cook: "45 min", serves: "8",
    ingredients: [
      "2 cups all-purpose flour",
      "1 tsp. kosher salt",
      "1/4 tsp. baking powder",
      "3/4 cup granulated sugar, divided",
      "1/2 cup unsalted butter",
      "3 large ripe peaches, peeled and sliced (about 3 cups)",
      "1 tsp. ground cinnamon",
      "1 cup sour cream",
      "2 large egg yolks"
    ],
    steps: [
      "Preheat oven to 400°F. Whisk together flour, salt, baking powder, and 1/4 cup of the sugar in a large bowl. Cut in butter with a pastry blender or 2 knives until mixture resembles fine crumbs. Transfer to a lightly greased (9 x 9 x 2-inch) baking pan, and press crumbs firmly against bottom and 1 inch up sides of pan.",
      "Arrange peach slices evenly over crust. Stir together cinnamon and remaining 1/2 cup sugar, and sprinkle over peaches. Bake in preheated oven until most of the sugar is melted, about 15 minutes.",
      "Meanwhile, beat sour cream and egg yolks in a medium bowl until smooth. Spoon over peaches, and continue baking until crust is golden brown and sour cream mixture is just set, 15 to 20 minutes. Serve warm or chilled."
    ]
  },
  {
    title: "Cherry-Chocolate Chip Oatmeal Cookies",
    emoji: "🍒",
    desc: "Classic oatmeal cookies upgraded with dried tart cherries and chocolate chips.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "15 min", cook: "18 min", serves: "2 dozen",
    guesses: ["prep"],
    ingredients: [
      "1 1/4 cup all purpose flour",
      "1/2 teaspoon baking soda",
      "1/4 teaspoon salt",
      "1/2 cup plus 2 tablespoons (1 1/4 sticks) unsalted butter, room temperature",
      "1/4 cup sugar",
      "3/4 cup (packed) dark brown sugar",
      "1 large egg",
      "1 teaspoon vanilla extract",
      "1/2 teaspoon almond extract",
      "1 cup old-fashioned oats",
      "1/2 cup semisweet chocolate chips",
      "2/3 cup dried tart cherries (snipped)"
    ],
    steps: [
      "Position racks in center and top third of oven and preheat to 325°F. Line 2 large baking sheets with parchment paper. Sift flour, baking soda and salt into medium bowl. Using electric mixer, beat butter, sugar and brown sugar in large bowl until well blended. Mix in egg and both extracts. Beat in flour mixture. Mix in oats, then chocolate chips and cherries.",
      "Drop dough by rounded tablespoonfuls onto baking sheets, spacing 2 inches apart. Bake cookies 12 minutes. Switch and rotate baking sheets. Bake cookies until golden, about 6 minutes longer. Cool cookies on baking sheets (cookies will firm as they cool)."
    ]
  },
  {
    title: "Blackberry Muffins with Lemon-Buttermilk Glaze",
    emoji: "🫐",
    desc: "Tender buttermilk berry muffins finished with a lemon glaze.",
    tags: ["breakfast", "sweet"],
    person: "Stefanie",
    prep: "20 min", cook: "1 hr 20 min", serves: "12 muffins",
    ingredients: [
      "3/4 cup granulated sugar",
      "1/2 cup unsalted butter, melted",
      "2 large eggs, at room temperature",
      "3 tsp. grated lemon zest (from 1 large lemon), divided, plus more for garnish",
      "1 tsp. baking powder",
      "1/2 tsp. baking soda",
      "2/3 cup, plus 1 Tbsp. whole buttermilk, divided",
      "2 tsp. vanilla extract, divided",
      "1/2 tsp. kosher salt, plus a pinch, divided",
      "2 1/2 cups all-purpose flour",
      "2 cups fresh blackberries, halved (from 1 [10-oz.] pkg.)",
      "2 Tbsp. turbinado sugar (optional)",
      "3/4 cup powdered sugar"
    ],
    steps: [
      "Preheat oven to 400°F. Line a 12-cup muffin tray with paper liners; set aside.",
      "Whisk together granulated sugar, melted butter, eggs, 2 teaspoons lemon zest, baking powder, baking soda, 2/3 cup buttermilk, 2 teaspoons vanilla, and 1/2 teaspoon salt in a large bowl until smooth. Gently fold flour and blackberries into granulated sugar mixture until no streaks of flour remain (batter will be thick).",
      "Spoon batter into prepared muffin wells, about 1/2 cup per well. Sprinkle tops with turbinado sugar, if using.",
      "Bake until tops are golden and a wooden pick inserted in center comes out clean, about 18 minutes. Let cool in pan 5 minutes; transfer to a wire rack, and let cool 30 minutes.",
      "Stir together powdered sugar and remaining 1 tablespoon buttermilk, 1 teaspoon lemon zest, 1/2 teaspoon vanilla, and a pinch of salt in a small bowl until smooth. Drizzle over cooled muffins; sprinkle with more lemon zest, if desired."
    ]
  },
  {
    title: "Pumpkin Banana Muffins",
    emoji: "🎃",
    desc: "Moist pumpkin and banana spice muffins.",
    tags: ["breakfast", "sweet"],
    person: "Stefanie",
    prep: "15 min", cook: "25 min", serves: "12 muffins",
    guesses: ["prep"],
    ingredients: [
      "1 cup pumpkin puree (not pumpkin pie filling)",
      "1/2 cup good quality margarine or butter, melted",
      "1 cup smashed ripe bananas (about 2 small bananas or one really large)",
      "1 tsp. vanilla extract",
      "1 egg, lightly beaten",
      "1/2 cup light or dark brown sugar",
      "1 1/2 cups flour",
      "1/2 tsp. baking soda",
      "1 tsp. baking powder",
      "1/2 tsp. cinnamon",
      "1/4 tsp. ground nutmeg",
      "1/2 tsp. ground ginger",
      "1/4 tsp. salt",
      "Possible additions: chopped walnuts or pecans or almonds"
    ],
    steps: [
      "Preheat oven to 350. Line muffin tins with foil liners or lightly spray tins with non-stick spray. In large bowl melt margarine or butter, then add: pumpkin, mashed bananas, vanilla and egg. Stir in brown sugar.",
      "Add to your large bowl the dry: flour, baking soda, baking powder, cinnamon, nutmeg, ginger and salt. Fold the dry into wet until just combined. Divide into muffin tins. Batter is extremely thick.",
      "Bake about 25 minutes (or until toothpick inserted comes out almost clean)."
    ]
  },
  {
    title: "Banana Muffins",
    emoji: "🍌",
    desc: "Simple one-bowl banana muffins with chocolate chips or cinnamon.",
    tags: ["breakfast", "sweet"],
    person: "Stefanie",
    prep: "15 min", cook: "26 min", serves: "12 muffins",
    guesses: ["prep"],
    ingredients: [
      "1 1/2 cups all purpose white flour (no need to sift)",
      "1 1/2 tsp. baking powder",
      "1 stick butter (or better quality margarine)",
      "Well-ripened bananas — about 1 cup smashed (2-3 or even 4 tiny bananas)",
      "1/2 cup chocolate chips (or skip chips and add pecans, walnuts or raisins, and/or use cinnamon)",
      "1/3 cup sugar",
      "1 egg",
      "1/4 cup milk"
    ],
    steps: [
      "In the biggest microwavable bowl, melt butter completely but make sure it is not really hot; mix in by hand sugar, milk, egg, then smashed bananas. (Can add 1 tsp vanilla but it is not necessary.)",
      "Lastly add in flour and baking powder and chips or cinnamon. (There is no salt in this recipe.) Spoon into paper or foil muffin (cupcake) liners. Makes 12 muffins (standard cupcake size).",
      "Bake at 350°F until done, about 26 minutes (could take up to 30 min)."
    ]
  },
  {
    title: "Seeded Pumpkin Bread",
    emoji: "🎃",
    desc: "A spiced pumpkin loaf topped with pepitas, flax, and sesame seeds.",
    tags: ["breakfast", "sweet"],
    person: "Stefanie",
    prep: "20 min", cook: "1 hr 20 min", serves: "12",
    ingredients: [
      "— Batter: —",
      "2 1/2 cups granulated sugar",
      "2/3 cup packed light brown sugar",
      "1 cup unsalted butter, melted",
      "4 large eggs",
      "1 (15-oz.) can pumpkin",
      "1 1/2 tsp. vanilla extract",
      "3 cups all-purpose flour",
      "1 tsp. baking soda",
      "1/2 tsp. kosher salt",
      "1 1/2 tsp. ground cinnamon",
      "1 tsp. baking powder",
      "3/4 tsp. ground ginger",
      "1/2 tsp. ground nutmeg",
      "Baking spray with flour",
      "— Toppings: —",
      "1/4 cup raw pumpkin seed kernels (pepitas)",
      "2 Tbsp. flax seeds",
      "2 Tbsp. sesame seeds"
    ],
    steps: [
      "Prepare the Batter: Preheat oven to 350°F. Beat granulated sugar, brown sugar, and melted butter in a large bowl with an electric mixer on medium until combined, about 2 minutes. Add eggs, 1 at a time, beating just until blended. Add pumpkin and vanilla; beat until combined.",
      "Whisk together flour, baking soda, salt, cinnamon, baking powder, ginger, and nutmeg. Gradually add to pumpkin mixture, beating on low until just blended, about 30 seconds.",
      "Coat a 9 x 5-inch loaf pan with baking spray. Spoon Batter into pan. Sprinkle top with pumpkin seeds, flax seeds, and sesame seeds.",
      "Bake until a wooden pick inserted in center comes out clean, 1 hour to 1 hour 10 minutes, covering loosely with aluminum foil during the last 10 to 15 minutes if needed to prevent overbrowning. Cool in pan on a wire rack 10 minutes; remove from pan and let cool completely, about 1 hour."
    ]
  },
  {
    title: "Chocolate Chip-Pumpkin Muffins",
    emoji: "🧁",
    desc: "The Seeded Pumpkin Bread batter baked into chocolate-chip muffins.",
    tags: ["breakfast", "sweet"],
    person: "Stefanie",
    prep: "30 min", cook: "1 hr 35 min", serves: "30 muffins",
    ingredients: [
      "1 batch Seeded Pumpkin Bread Batter (prepared as directed, omitting Toppings)",
      "1 1/2 cups semisweet chocolate chips",
      "1/2 cup semisweet chocolate chips (for sprinkling)"
    ],
    steps: [
      "Preheat oven to 350°F. Prepare Batter as directed, omitting Toppings. Gently stir 1 1/2 cups semisweet chocolate chips into Batter.",
      "Line 3 (12-cup) muffin trays with 30 paper liners; spoon Batter into wells, filling each about three-fourths full (about 1/4 cup Batter in each well). Sprinkle Batter in wells evenly with 1/2 cup semisweet chocolate chips.",
      "Bake in preheated oven, in 3 batches, until a wooden pick inserted in center comes out clean, 20 to 24 minutes. Let muffins cool in trays on wire racks for 5 minutes. Serve warm, or remove from trays and let cool completely on wire racks, about 30 minutes."
    ]
  },
  {
    title: "Pumpkin-Pecan Coffee Cake",
    emoji: "🍰",
    desc: "The Seeded Pumpkin Bread batter baked as a coffee cake with a pecan-crumble topping.",
    tags: ["breakfast", "sweet", "dessert"],
    person: "Stefanie",
    prep: "20 min", cook: "1 hr 25 min", serves: "15",
    ingredients: [
      "1 batch Seeded Pumpkin Bread Batter (prepared as directed, omitting Toppings)",
      "1/4 cup all-purpose flour",
      "1/4 cup packed light brown sugar",
      "1/2 cup softened unsalted butter",
      "1 tsp. ground cinnamon",
      "1/4 tsp. ground nutmeg",
      "1/4 tsp. kosher salt",
      "1 cup chopped pecans"
    ],
    steps: [
      "Preheat oven to 350°F. Prepare Batter as directed, omitting Toppings. Coat a 13 x 9-inch baking pan with baking spray. Spread Batter into pan.",
      "Stir together flour, brown sugar, softened butter, cinnamon, nutmeg, and salt in a bowl until a crumbly mixture forms; stir in chopped pecans. Sprinkle evenly over Batter.",
      "Bake in preheated oven until a wooden pick inserted in center comes out clean, 1 hour to 1 hour 10 minutes. Let stand 20 minutes before serving, or cool completely in pan on a wire rack, 1 hour."
    ]
  },
  {
    title: "Chewy Apple-Cran-Oatmeal Cookies",
    emoji: "🍎",
    desc: "Chewy oatmeal cookies with Granny Smith apple, cranberries, and walnuts, with an orange glaze.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "25 min", cook: "35 min", serves: "12",
    ingredients: [
      "2 cups uncooked old-fashioned rolled oats",
      "1 cup all-purpose flour",
      "1 tsp. ground cinnamon",
      "1/2 tsp. baking soda",
      "1/4 tsp. kosher salt",
      "1/4 tsp. ground nutmeg",
      "1 cup packed light brown sugar",
      "1/2 cup unsalted butter, melted and cooled",
      "1/4 cup unsweetened applesauce",
      "1 large egg",
      "1/2 cup finely chopped, peeled Granny Smith apple (from 1 small [6-oz.] apple)",
      "1/2 cup sweetened dried cranberries",
      "1/2 cup chopped walnuts",
      "1 cup powdered sugar",
      "2 Tbsp. fresh orange juice (from 1 orange)"
    ],
    steps: [
      "Preheat oven to 350°F with oven racks in upper and lower thirds of oven. Line 2 large rimmed baking sheets with parchment paper.",
      "Whisk together oats, flour, cinnamon, baking soda, salt, and nutmeg in a large bowl. Whisk together brown sugar, butter, applesauce, and egg in a medium bowl until combined. Add butter mixture to flour mixture, stirring just until combined. Stir in apple, cranberries, and walnuts until evenly combined. Place 1 1/2-tablespoon scoops on prepared pans, spacing 2 inches apart. Gently press scoops with greased palms to flatten tops.",
      "Bake until bottoms are browned and lightly set on the edges, 10 to 12 minutes, rotating pans from top to bottom halfway through bake time. Cool on pans, about 30 minutes.",
      "Whisk together powdered sugar and orange juice in a small bowl until smooth. Drizzle over cooled cookies."
    ]
  },
  {
    title: "Buttery Apple-Almond Cake",
    emoji: "🍏",
    desc: "A simple almond-flour cake studded with Honeycrisp apple slices.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "15 min", cook: "1 hr 15 min", serves: "8",
    ingredients: [
      "Baking spray with flour",
      "1/4 cup all-purpose flour",
      "1/4 cup almond flour",
      "3/4 tsp. baking powder",
      "1/2 tsp. kosher salt",
      "1/4 tsp. ground ginger",
      "2 large eggs",
      "3/4 cup granulated sugar",
      "1/2 cup unsalted butter, melted and cooled",
      "1 tsp. vanilla extract",
      "1 medium Honeycrisp apple, peeled and cut into 1/4-inch-thick slices (about 4 cups sliced)",
      "Powdered sugar, for garnish"
    ],
    steps: [
      "Preheat oven to 350°F. Coat an 8-inch round cake pan with baking spray with flour; line bottom with parchment paper.",
      "Whisk together all-purpose flour, almond flour, baking powder, salt, and ginger in a medium bowl. Whisk eggs in a large bowl until frothy, about 30 seconds. Whisk in sugar, butter, and vanilla. Gradually whisk in flour mixture, stirring just until combined. Fold in half of the apple slices. Transfer batter to prepared pan. Arrange remaining slices on top of batter.",
      "Bake until a wooden pick inserted in center comes out clean, 50 to 55 minutes, covering with aluminum foil halfway through baking if necessary to prevent overbrowning. Cool in pan 10 minutes; transfer to a serving plate. Sprinkle with powdered sugar. Serve warm, or let cool."
    ]
  },
  {
    title: "Apple-Blackberry Cobbler",
    emoji: "🫐",
    desc: "Gala apples and blackberries under a buttermilk biscuit topping.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "15 min", cook: "1 hr 15 min", serves: "8",
    ingredients: [
      "6 large Gala apples (3 lb. total), peeled and sliced (9 cups)",
      "2 (6-oz.) containers fresh blackberries (about 3 cups)",
      "1/2 cup packed light brown sugar",
      "1/4 cup cornstarch",
      "1 tsp. ground cinnamon",
      "1 tsp. grated lemon zest plus 2 Tbsp. fresh juice (from 1 lemon)",
      "1 1/2 cups all-purpose flour",
      "1/2 cup granulated sugar",
      "1 1/2 tsp. baking powder",
      "1/2 tsp. kosher salt",
      "1/2 cup cold unsalted butter",
      "1/4 cup whole buttermilk",
      "2 Tbsp. sliced almonds",
      "Sweetened whipped cream, for serving"
    ],
    steps: [
      "Preheat oven to 375°F. Combine apples, blackberries, brown sugar, cornstarch, cinnamon, and lemon zest and juice; toss together gently. Spoon into a 13 x 9-inch baking dish coated with cooking spray.",
      "Whisk together flour, granulated sugar, baking powder, and salt in a medium bowl. Grate butter with large holes of a box grater into flour mixture; toss to combine. Stir in buttermilk just until dry ingredients are moistened. Drop 6 (1/4-cup) scoops of dough over filling; sprinkle with almonds.",
      "Bake in preheated oven until bubbly and browned on top, 45 to 55 minutes, covering with aluminum foil halfway through bake. Cool 15 minutes before serving. Top with whipped cream."
    ]
  },
  {
    title: "Granny Smith Slab Pie",
    emoji: "🥧",
    desc: "A 13x9 apple slab pie with a from-scratch double crust for a crowd.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "20 min", cook: "2 hr", serves: "12",
    ingredients: [
      "— Crust: —",
      "4 cups all-purpose flour, plus more for surface",
      "1/2 cup granulated sugar",
      "2 tsp. kosher salt",
      "3/4 cup cold unsalted butter, cubed",
      "1/2 cup cold water",
      "— Filling: —",
      "3 1/2 lb. Granny Smith apples (7 large apples), peeled and chopped (about 10 1/2 cups)",
      "1 cup granulated sugar",
      "3 Tbsp. cornstarch",
      "2 Tbsp. fresh lemon juice (from 1 lemon)",
      "1/2 tsp. apple pie spice or pumpkin pie spice",
      "1/4 tsp. kosher salt",
      "2 Tbsp. cold unsalted butter, cubed",
      "— Additional: —",
      "1 large egg yolk",
      "3 Tbsp. turbinado sugar",
      "Vanilla ice cream, for serving"
    ],
    steps: [
      "Prepare the Crust: Preheat oven to 375°F. Pulse together flour, sugar, and salt in a food processor until combined, 5 to 8 pulses. Add butter; pulse until mixture is crumbly, about 10 pulses. With food processor running, add cold water in a slow, steady stream until mixture just forms a dough, about 45 seconds. Divide dough in half; shape each into a square, wrap tightly in plastic wrap, and chill until firm, about 30 minutes.",
      "On a lightly floured surface, roll 1 dough square into a 15 x 12-inch rectangle, about 1/8 inch thick. Transfer to a 13 x 9 x 1-inch baking pan, pressing into corners and letting dough hang over sides of pan. Chill, uncovered, while preparing Filling.",
      "Prepare the Filling: Stir apples, granulated sugar, cornstarch, lemon juice, apple pie spice, and salt in a large bowl until combined. Spread mixture over chilled piecrust. Sprinkle evenly with cubed butter.",
      "Roll out remaining dough square to a 15 x 12-inch rectangle; drape over Filling. Fold edges under; crimp. Freeze 10 minutes. Cut about 24 (2-inch) diagonal slits across top. Whisk together egg yolk and 1 tablespoon water; brush over crust; sprinkle with turbinado sugar.",
      "Bake in preheated oven until bubbly and golden, 55 to 65 minutes (loosely tent with aluminum foil if crust browns too quickly). Transfer to a wire rack; cool 1 hour. Serve with vanilla ice cream."
    ]
  },
  {
    title: "Golden Delicious Sticky Buns",
    emoji: "🍯",
    desc: "Yeast-raised cinnamon-apple sticky buns baked over an apple-cider caramel.",
    tags: ["breakfast", "sweet"],
    person: "Stefanie",
    prep: "25 min", cook: "1 hr, plus 2 hr 15 min rising", serves: "9 buns",
    ingredients: [
      "3 cups all-purpose flour, plus more for surface",
      "1 (1/4-oz.) envelope instant or quick-rising yeast",
      "1 1/4 cups packed light brown sugar, divided",
      "1 1/4 tsp. kosher salt, divided",
      "1/2 cup whole milk, warmed",
      "1/2 cup sour cream",
      "1 large egg, at room temperature",
      "1 1/4 cups unsalted butter, softened and divided",
      "1/2 cup apple cider (such as Red Jacket)",
      "1/4 cup maple syrup",
      "1 large (8-oz.) Golden Delicious apple, peeled and chopped (about 1 1/2 cups)",
      "2 tsp. ground cinnamon"
    ],
    steps: [
      "Combine flour, yeast, 1/4 cup of the brown sugar, and 1 teaspoon of the salt in the bowl of a stand mixer fitted with a paddle attachment. With mixer on low speed, add warm milk, sour cream, egg, and 1/4 cup of the butter; beat just until combined, about 1 minute. Switch to a dough hook, and beat on medium-high speed until smooth and elastic, about 6 minutes. Transfer to a large bowl coated with cooking spray. Cover with plastic wrap, and let rise in a warm, draft-free place until doubled in size, about 1 hour, 30 minutes.",
      "Meanwhile, combine apple cider, maple syrup, 1/2 cup of the brown sugar, 1/2 cup of the butter, and remaining 1/4 teaspoon salt in a medium skillet. Bring to a boil over medium. Cook, stirring often, until mixture has thickened, 5 to 7 minutes. Remove from heat, and pour into a 9-inch square baking pan lightly coated with cooking spray; set aside.",
      "Lightly punch down dough. On a lightly floured surface, roll dough into a 14 x 10-inch rectangle. Spread remaining 1/2 cup butter over dough. Sprinkle with apple, cinnamon, and remaining 1/2 cup brown sugar. Starting with 1 long side, roll dough into a tight log; pinch seam to seal. Slice log into 9 rolls, about 1 1/2 inches wide. Place rolls on cooled caramel in pan. Cover with plastic wrap, and let rise until doubled, about 45 minutes. Preheat oven to 350°F.",
      "Place pan on a foil-lined baking sheet, and bake, uncovered, until golden brown, 30 to 35 minutes. Cool in pan on a wire rack 10 minutes. Invert rolls onto a serving platter, and serve."
    ]
  },
  {
    title: "Apple-Spice Muffins with Oat Streusel",
    emoji: "🍎",
    desc: "Spiced Fuji-apple muffins under an oat-pecan streusel with a cider glaze.",
    tags: ["breakfast", "sweet"],
    person: "Stefanie",
    prep: "15 min", cook: "40 min", serves: "12 muffins",
    ingredients: [
      "— Muffins: —",
      "1/2 cup unsalted butter, softened",
      "3/4 cup granulated sugar",
      "1/2 cup sour cream",
      "1 tsp. vanilla extract",
      "2 large eggs",
      "1 3/4 cups all-purpose flour",
      "1 1/2 tsp. apple pie spice or pumpkin pie spice",
      "1 tsp. baking powder",
      "1 tsp. baking soda",
      "1/2 tsp. kosher salt",
      "1/4 cup whole buttermilk",
      "1 large (8-oz.) peeled Fuji apple, half chopped (3/4 cup) and half grated (3/4 cup)",
      "— Streusel: —",
      "1/3 cup all-purpose flour",
      "1/3 cup uncooked old-fashioned rolled oats",
      "1/3 cup packed light brown sugar",
      "1/3 cup chopped pecans",
      "1/2 tsp. apple pie spice or pumpkin pie spice",
      "1/4 tsp. kosher salt",
      "3 Tbsp. unsalted butter, softened",
      "— Glaze: —",
      "1 cup powdered sugar",
      "2 Tbsp. apple cider"
    ],
    steps: [
      "Prepare the Muffins: Preheat oven to 350°F. Line a 12-cup muffin tray with paper liners.",
      "Beat butter and sugar with a stand mixer fitted with a paddle attachment on medium-high speed until light and fluffy, 3 to 4 minutes. Add sour cream, vanilla, and eggs, and beat on medium speed until just combined, about 30 seconds.",
      "Whisk together flour, apple pie spice, baking powder, baking soda, and salt in a medium bowl. With mixer on low speed, gradually add flour mixture alternately with buttermilk, beginning and ending with flour mixture. Fold in chopped and grated apple. Spoon batter into prepared muffin cups (about 5 tablespoons per cup).",
      "Prepare the Streusel: Whisk together flour, oats, brown sugar, pecans, apple pie spice, and salt in a medium bowl. Stir in butter until combined and crumbly. Top each filled muffin cup with about 1 1/2 tablespoons of Streusel.",
      "Bake until a wooden pick inserted in center comes out clean, 25 to 28 minutes. Cool in tray 10 minutes; transfer to a wire rack to cool completely, about 20 minutes.",
      "Prepare the Glaze: Whisk together powdered sugar and apple cider in a small bowl until smooth. Drizzle over muffins."
    ]
  },
  {
    title: "Big-Batch Apple-Cinnamon Pancakes",
    emoji: "🥞",
    desc: "A sheet-pan baked pancake topped with cinnamon-sugar apples for a crowd.",
    tags: ["breakfast", "sweet"],
    person: "Stefanie",
    prep: "10 min", cook: "50 min", serves: "12",
    ingredients: [
      "2 1/2 cups all-purpose flour",
      "2 Tbsp. baking powder",
      "3/4 tsp. kosher salt",
      "1/2 tsp. ground cinnamon",
      "1/4 cup, plus 1 Tbsp. granulated sugar, divided",
      "2 cups whole milk",
      "1/2 cup sour cream",
      "6 Tbsp. unsalted butter, melted",
      "1 tsp. vanilla extract",
      "2 large eggs",
      "1 small (6-oz.) Honeycrisp apple, cored and thinly sliced (about 2 cups)",
      "Maple syrup and butter, for serving"
    ],
    steps: [
      "Preheat oven to 425°F. Coat a 13 x 9-inch baking pan with cooking spray.",
      "Whisk together flour, baking powder, salt, cinnamon, and 1/4 cup of the sugar in a large bowl. Create a well in center of dry ingredients; whisk in milk, sour cream, melted butter, vanilla, and eggs just until combined. Pour into prepared pan.",
      "Bake until puffed, about 6 minutes. Stir together apple slices and remaining 1 tablespoon sugar in a medium bowl. Top pancake evenly with apple mixture, and continue baking until golden brown and a wooden pick inserted in center comes out clean, about 20 minutes. Let cool 10 minutes before serving. Slice and serve with maple syrup and butter."
    ]
  },
  {
    title: "Glazed Apple Tart",
    emoji: "🍏",
    desc: "A quick puff-pastry apple tart with an apricot glaze.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "10 min", cook: "45 min", serves: "6 to 8",
    ingredients: [
      "1/2 (17.3-oz.) pkg. frozen puff pastry, thawed (1 sheet)",
      "1 large (8-oz.) Honeycrisp apple, cored and thinly sliced (1/8-inch-thick slices)",
      "1/3 cup granulated sugar",
      "3 Tbsp. unsalted butter, cubed",
      "3 Tbsp. apricot preserves or apple jelly",
      "Fresh thyme, for garnish (optional)"
    ],
    steps: [
      "Preheat oven to 350°F. Line a large rimmed baking sheet with parchment paper.",
      "Place puff pastry sheet on prepared pan. Shingle apple slices evenly over pastry in diagonal lines, adjusting to cover dough completely. Sprinkle with sugar, and top evenly with butter cubes.",
      "Bake until browned and puffed, 35 to 40 minutes. Stir together apricot preserves and 1 tablespoon water in a small bowl. Brush apricot mixture over warm tart. Garnish with fresh thyme, if desired."
    ]
  },
  {
    title: "Applesauce Snack Cake with Brown Sugar Frosting",
    emoji: "🍎",
    desc: "A spiced fresh-applesauce sheet cake topped with cooked brown-sugar frosting.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "15 min", cook: "1 hr", serves: "12",
    ingredients: [
      "— Cake: —",
      "Baking spray with flour",
      "3 large McIntosh apples (about 1 1/2 lb. total), peeled and chopped (5 cups)",
      "1 1/4 cups packed light brown sugar",
      "3/4 cup canola oil",
      "2 tsp. ground ginger",
      "1 tsp. ground cinnamon",
      "1 tsp. grated lime zest (from 1 lime)",
      "1 tsp. vanilla extract",
      "2 large eggs",
      "2 1/2 cups all-purpose flour",
      "1 tsp. baking powder",
      "1 tsp. baking soda",
      "1/2 tsp. kosher salt",
      "— Frosting: —",
      "1/2 cup unsalted butter",
      "1 cup packed light brown sugar",
      "2 Tbsp. whole milk",
      "3 cups powdered sugar",
      "1/4 tsp. kosher salt",
      "2 Tbsp. hot water (optional)",
      "Chopped toasted pecans, for garnish"
    ],
    steps: [
      "Prepare the Cake: Preheat oven to 350°F. Coat a 13 x 9-inch pan with baking spray with flour. Place apples in a medium-size microwavable bowl. Cover loosely with plastic wrap; microwave on HIGH until softened, about 4 minutes. Transfer apples and any liquid to a food processor or blender, and puree until smooth, 20 to 30 seconds. Cool 10 minutes. (You should have 2 cups pureed apples.)",
      "Whisk together brown sugar, oil, ginger, cinnamon, lime zest, vanilla, eggs, and pureed apples in a large bowl until combined. Whisk in flour, baking powder, baking soda, and salt just until combined. Spoon batter into prepared pan. Bake until a wooden pick inserted in center comes out clean, 28 to 32 minutes. Transfer to a wire rack, and cool completely in pan, about 1 hour.",
      "Prepare the Frosting: Melt butter in a medium saucepan over medium. Stir in brown sugar, and bring to a boil. Cook, stirring constantly, 2 minutes. Stir in milk, and return to a boil. Remove from heat; whisk in powdered sugar and salt until smooth and thickened. If mixture is too thick, add hot water until desired consistency. Spread Frosting over cooled Cake, and garnish with chopped toasted pecans."
    ]
  },
  {
    title: "Strawberry Patch Cake",
    emoji: "🍓",
    desc: "A fresh-strawberry sheet cake decorated as flowers with marshmallow frosting.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "45 min", cook: "1 hr 15 min", serves: "16",
    ingredients: [
      "— Strawberry Cake: —",
      "Baking spray",
      "2 3/4 cups unbleached cake flour",
      "2 tsp. baking powder",
      "3/4 tsp. kosher salt",
      "1/2 tsp. baking soda",
      "1 lb. very ripe fresh strawberries, hulled",
      "1 1/2 cups granulated sugar",
      "3/4 cup unsalted butter, softened",
      "1 large egg, at room temperature",
      "2 large egg whites, at room temperature",
      "1/3 cup whole buttermilk",
      "1 3/4 tsp. vanilla extract",
      "Red food coloring gel (optional)",
      "— Berry-Marshmallow Frosting: —",
      "2 Tbsp. freeze-dried strawberries (from 1 [0.8-oz.] pkg.)",
      "3/4 cup butter",
      "1 (7-oz.) container marshmallow creme",
      "2 cups powdered sugar",
      "1-2 Tbsp. whole milk",
      "— Additional: —",
      "Miniature marshmallows",
      "Yellow candy-coated milk chocolate pieces (such as M&M's)",
      "Fresh strawberries, halved if large"
    ],
    steps: [
      "Prepare the Strawberry Cake: Preheat oven to 350°F. Coat a 13 x 9-inch baking pan with baking spray; line bottom of pan with parchment paper. Whisk together flour, baking powder, salt, and baking soda in a medium bowl.",
      "Place 1 cup of the strawberries in a food processor; pulse until chopped, 3 to 5 times. Set chopped berries aside. Place remaining strawberries in food processor; process until pureed, about 30 seconds. (You should have 3/4 cup puree.) Set aside.",
      "Beat sugar and butter in a stand mixer fitted with a paddle attachment on medium-high speed until pale and fluffy, about 3 minutes. Add egg followed by egg whites, 1 at a time, beating just until blended. Beat in buttermilk, vanilla, reserved chopped strawberries and puree, and a few drops food coloring if using. Gradually add flour mixture in thirds, beating on low until incorporated.",
      "Spoon batter into prepared pan, spreading evenly. Bake until golden around edges and a wooden pick inserted in center comes out clean, 30 to 35 minutes. Transfer pan to a wire rack; cool completely, about 1 hour, 30 minutes.",
      "Prepare the Berry-Marshmallow Frosting: Process freeze-dried strawberries in a food processor until finely ground, 1 minute. Beat butter on medium-high until creamy, 2 minutes. Add marshmallow creme; beat until combined, 2 minutes. Add 1 cup of the powdered sugar; beat on low until well blended. Add 1 tablespoon milk, ground strawberries, and remaining powdered sugar, beating until smooth (beat in remaining 1 tablespoon milk if stiff). Chill until ready to use.",
      "Use kitchen shears to cut marshmallows in half diagonally. Spread frosting over cake. Arrange marshmallow halves in groups of 5 to form flowers; press a candy-coated chocolate in the center of each flower. Garnish cake with strawberries."
    ]
  },
  {
    title: "Very Carrot Cake with Maple-Cream Cheese Frosting",
    emoji: "🥕",
    desc: "A spiced carrot sheet cake with maple-cream cheese frosting, decorated with candy carrots.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "25 min", cook: "55 min", serves: "15",
    ingredients: [
      "— Carrot Cake: —",
      "Baking spray",
      "2 1/2 cups all-purpose flour",
      "1 cup granulated sugar",
      "2/3 cup dark brown sugar",
      "2 tsp. baking powder",
      "2 tsp. ground cinnamon",
      "1 tsp. ground ginger",
      "3/4 tsp. kosher salt",
      "1/2 tsp. baking soda",
      "1/2 tsp. ground nutmeg",
      "1 cup whole milk",
      "3/4 cup vegetable oil",
      "3 large eggs, at room temperature",
      "1 3/4 tsp. vanilla extract",
      "4 large carrots, peeled and shredded (2 cups)",
      "1 cup toasted walnuts, roughly chopped",
      "1/2 cup golden raisins, roughly chopped",
      "— Maple-Cream Cheese Frosting: —",
      "1/2 cup unsalted butter, softened",
      "1 (8-oz.) pkg. cream cheese, softened",
      "2 Tbsp. pure maple syrup",
      "1 tsp. vanilla extract",
      "2 cups powdered sugar, sifted",
      "Green food coloring gel",
      "— Additional: —",
      "Orange candy-coated almonds (such as Jordan almonds)",
      "Green candy sprinkles in assorted sizes"
    ],
    steps: [
      "Prepare the Carrot Cake: Preheat oven to 350°F. Coat a 13 x 9-inch baking pan with baking spray, and line bottom of pan with parchment paper. Whisk together flour, granulated sugar, brown sugar, baking powder, cinnamon, ginger, salt, baking soda, and nutmeg in a medium bowl. Whisk together milk, oil, eggs, and vanilla in a large liquid measuring cup.",
      "Pour egg mixture into flour mixture; stir to combine. Fold in carrots, walnuts, and raisins. Pour batter into prepared pan, spreading evenly. Bake until a wooden pick inserted in center comes out clean, 30 to 35 minutes. Transfer pan to a wire rack; cool completely, about 1 hour.",
      "Prepare the Maple-Cream Cheese Frosting: Beat butter on medium-high until smooth and creamy, about 2 minutes. Add cream cheese; beat until light and fluffy, 2 to 3 minutes. Add maple syrup and vanilla; beat until well blended. Reduce speed to low; add powdered sugar 1 cup at a time, beating until smooth and combined. Chill until ready to use.",
      "Reserve 1/8 cup of the frosting in a small bowl. Stir in green food coloring, and transfer to a piping bag fitted with a small writing tip. Spread remaining frosting over cake.",
      "Arrange candy-coated almonds on top of cake in rows. Pipe leaves onto 1 end of each almond with reserved green frosting. Garnish with sprinkles."
    ]
  },
  {
    title: "Blooming Hummingbird Cake",
    emoji: "🌺",
    desc: "A banana-pineapple-pecan hummingbird sheet cake with cream cheese frosting.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "45 min", cook: "1 hr 15 min", serves: "16",
    ingredients: [
      "— Hummingbird Cake: —",
      "Baking spray",
      "2 3/4 cups unbleached cake flour",
      "2 tsp. baking powder",
      "2 tsp. ground cinnamon",
      "1/2 tsp. kosher salt",
      "1/2 tsp. baking soda",
      "1 1/3 cups granulated sugar",
      "3/4 cup unsalted butter, softened",
      "3 large eggs, at room temperature",
      "1 1/4 tsp. vanilla extract",
      "2 small bananas, mashed (about 2/3 cup)",
      "1 (8-oz.) can crushed pineapple in juice, undrained",
      "1 cup roughly chopped toasted pecans",
      "— Cream Cheese Frosting: —",
      "1/2 cup butter, softened",
      "1 (8-oz.) pkg. cream cheese, softened",
      "1 1/4 tsp. vanilla extract",
      "2 cups plus 2 Tbsp. powdered sugar, sifted",
      "1/8 tsp. kosher salt"
    ],
    steps: [
      "Preheat oven to 350°F. Coat a 13 x 9-inch baking pan with baking spray; line bottom with parchment paper. Whisk together cake flour, baking powder, cinnamon, salt, and baking soda in a medium bowl.",
      "Beat granulated sugar and butter on medium-high until pale and fluffy, about 3 minutes. Add eggs, 1 at a time, then vanilla, beating until just blended. Beat in mashed bananas and crushed pineapple. Gradually add flour mixture, beating on low until incorporated. Fold in pecans. Spread batter into prepared pan.",
      "Bake until a wooden pick inserted in center comes out clean, 30 to 35 minutes. Transfer to a wire rack; cool completely, about 1 hour, 30 minutes.",
      "Prepare the Cream Cheese Frosting: Beat butter and cream cheese until smooth and creamy. Add vanilla, powdered sugar, and salt; beat until smooth. Spread over cooled cake. (Decorate with dried-pineapple flowers, if desired.)"
    ]
  },
  {
    title: "Glazed Cranberry Orange Scones",
    emoji: "🍊",
    desc: "Buttery cranberry-orange scones with crisp edges and an orange glaze (Sally's Baking Addiction).",
    tags: ["breakfast", "sweet"],
    person: "Stefanie",
    prep: "30 min", cook: "25 min", serves: "8 scones",
    ingredients: [
      "2 cups (250g) all-purpose flour (spoon & leveled), plus more for hands and work surface",
      "1/2 cup (100g) granulated sugar",
      "2 1/2 teaspoons baking powder",
      "1/2 teaspoon salt",
      "2 teaspoons orange zest (about 1 orange)",
      "1/2 cup (115g) unsalted butter, frozen",
      "1/2 cup (120ml) heavy cream, plus 1 Tablespoon for brushing (optional)",
      "1 large egg",
      "1 teaspoon pure vanilla extract",
      "1 heaping cup (125g) frozen cranberries",
      "Coarse sugar, for sprinkling (optional)",
      "— Orange Glaze: —",
      "1 cup (120g) confectioners' sugar",
      "2-3 Tablespoons (30-45ml) fresh orange juice"
    ],
    steps: [
      "Whisk flour, sugar, baking powder, salt, and orange zest together in a large bowl. Grate the frozen butter using a box grater. Add it to the flour mixture and combine with a pastry cutter, two forks, or your fingers until the mixture comes together in pea-sized crumbs. Place in the refrigerator or freezer as you mix the wet ingredients together.",
      "Whisk 1/2 cup heavy cream, the egg, and vanilla extract together in a small bowl. Drizzle over the flour mixture, add the cranberries, then mix together until everything appears moistened.",
      "Pour onto the counter and, with floured hands, work dough into a ball as best you can (dough will be sticky; add a little more flour if too sticky, or 1-2 more Tablespoons heavy cream if too dry). Press into an 8-inch disc and cut into 8 wedges.",
      "Brush scones with remaining heavy cream and, for extra crunch, sprinkle with coarse sugar. Place scones on a plate or lined baking sheet and refrigerate for at least 15 minutes.",
      "Meanwhile, preheat oven to 400°F (204°C). Line a large baking sheet with parchment paper. Arrange scones 2-3 inches apart on the prepared baking sheet.",
      "Bake for 22-25 minutes or until golden brown around the edges and lightly browned on top. Remove from the oven and allow to cool for a few minutes as you make the glaze.",
      "Make the glaze: Whisk the confectioners' sugar and orange juice together (add more sugar to thicken or more juice to thin). Drizzle over scones."
    ]
  },
  {
    title: "Carrot Cake Quick Bread with Buttermilk Glaze",
    emoji: "🥕",
    desc: "All the flavors of carrot cake in a quick bread, finished with a buttermilk glaze.",
    tags: ["breakfast", "sweet"],
    person: "Stefanie",
    prep: "10 min", cook: "1 hr 10 min", serves: "2 loaves",
    ingredients: [
      "3 cups all-purpose flour, plus more for dusting",
      "1 1/2 cups packed light brown sugar",
      "1 tsp. baking soda",
      "1 tsp. ground cinnamon",
      "3/4 tsp. kosher salt",
      "3 large eggs",
      "1 cup unsalted butter, melted, plus softened butter for greasing",
      "2 cups grated carrots (from 2 large peeled carrots)",
      "1 (8-oz.) can crushed pineapple in juice, drained",
      "1 cup unsweetened shredded coconut",
      "2 tsp. vanilla extract",
      "1/2 cup, plus 2 Tbsp. whole buttermilk, divided",
      "1 cup chopped toasted pecans",
      "1 cup powdered sugar"
    ],
    steps: [
      "Preheat oven to 350°F. Whisk together flour, brown sugar, baking soda, cinnamon, and salt in a medium bowl.",
      "Whisk eggs in a large bowl. Add melted butter, grated carrots, pineapple, coconut, vanilla, and 1/2 cup of the buttermilk; continue whisking until combined. Gently stir flour mixture into egg mixture just until incorporated. Gently fold in toasted pecans. Spoon evenly into 2 greased (with softened butter) and floured 8 x 4-inch loaf pans. Bake until a wooden pick inserted in center comes out clean, about 1 hour, tenting with aluminum foil after 50 minutes if needed to prevent overbrowning.",
      "Cool loaves in pans on a wire rack 10 minutes; remove from pans. Cool completely on rack, about 1 hour.",
      "Whisk together powdered sugar and remaining 2 tablespoons buttermilk in a small bowl until smooth; pour or drizzle over cooled loaves."
    ]
  },
  {
    title: "French Apple Cake",
    emoji: "🍏",
    desc: "A rum-spiked French apple cake loaded with cubed apples (Once Upon a Chef).",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "20 min", cook: "40 min", serves: "6 to 8",
    ingredients: [
      "1 cup all-purpose flour, spooned into measuring cup and leveled-off",
      "1 teaspoon baking powder",
      "1/4 teaspoon salt",
      "1 stick (1/2 cup) unsalted butter, at room temperature",
      "2/3 cup granulated sugar, plus more for sprinkling over cake",
      "2 large eggs",
      "1 teaspoon vanilla extract",
      "3 tablespoons dark rum",
      "2 baking apples, peeled, cored and cut into 1/2-inch cubes (Honeycrisp, Fuji or Granny Smith)",
      "Confectioners' sugar (optional), for decorating cake"
    ],
    steps: [
      "Preheat the oven to 350°F. Grease a 9-inch springform or regular cake pan with butter or nonstick cooking spray. If using a regular cake pan, line the bottom with parchment paper and grease again.",
      "In a small bowl, whisk together the flour, baking powder and salt.",
      "Using a handheld or stand mixer, cream the butter and granulated sugar until light and fluffy, about 3 minutes. Add the eggs, one at a time, beating well and scraping down the bowl after each. Beat in the vanilla and rum. (Don't worry if the batter looks grainy; that's okay.) Add the flour mixture and mix on low speed until just combined. Using a rubber spatula, fold in the chopped apples.",
      "Scrape the batter into the prepared pan and even the top. Sprinkle evenly with 1 tablespoon of granulated sugar. Bake for about 40 minutes, or until golden and a toothpick inserted into the center comes out clean. Cool on a rack. Run a blunt knife around the edges; remove from pan. Dust with Confectioners' sugar if using. Serve warm or at room temperature, plain or with whipped cream or vanilla ice cream."
    ]
  },
  {
    title: "Cranberry-Orange Shortbread Cookies",
    emoji: "🍪",
    desc: "Buttery orange shortbread studded with dried cranberries and apricots.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "20 min", cook: "55 min", serves: "36 cookies",
    ingredients: [
      "1 3/4 cups flour",
      "1/4 tsp. baking powder",
      "1/4 tsp. salt",
      "1/4 tsp. nutmeg",
      "1 cup unsalted butter, softened",
      "1/2 cup sugar",
      "1 Tbsp. orange zest (from 2 large oranges)",
      "1 tsp. vanilla extract",
      "1 cup finely chopped dried cranberries",
      "1/2 cup finely chopped dried apricots"
    ],
    steps: [
      "Mix together flour, baking powder, salt, and nutmeg in a small bowl.",
      "Beat butter in a large bowl with an electric mixer at medium speed until fluffy and slightly lightened in color, about 30 seconds. Add sugar; beat at medium-high until light and fluffy, 2 to 3 minutes more. Mix in orange zest and vanilla. Mix in flour mixture in three portions, mixing until just combined and stirring in the last addition by hand. Gently stir in cranberries and apricots.",
      "Line a 9-inch square baking pan with parchment paper, leaving an overhang on two opposite sides. Press dough into pan. Chill, covered, 15 minutes.",
      "Meanwhile, preheat oven to 350°F. Line 2 large cookie sheets with parchment paper.",
      "Lift dough out using parchment paper. Cut into 36 (1-inch) squares. Put squares on prepared cookie sheets, spacing 1 inch apart.",
      "Bake until bottoms are golden, 12 to 15 minutes. Let cool on cookie sheets 5 minutes. Transfer to wire racks to cool completely."
    ]
  },
  {
    title: "Blueberry Lemon Layer Cake",
    emoji: "🫐",
    desc: "A three-layer lemon-buttermilk cake studded with blueberries and a blueberry-lemon buttercream.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "30 min", cook: "1 hr", serves: "12",
    guesses: ["prep", "cook"],
    ingredients: [
      "— Cake Layers: —",
      "Vegetable shortening, for greasing pans",
      "1 cup butter, softened",
      "2 cups granulated sugar",
      "4 large eggs",
      "2 tsp. baking powder",
      "1/2 tsp. kosher salt",
      "1/2 tsp. baking soda",
      "3 cups plus 1 Tbsp. all-purpose flour, divided, plus more for pans",
      "1 1/4 cups whole buttermilk",
      "1 Tbsp. grated lemon zest plus 1/4 cup fresh juice (from 2 medium lemons)",
      "2 tsp. vanilla extract",
      "1 1/2 cups fresh blueberries (from 2 [6-oz.] containers)",
      "— Frosting: —",
      "1 cup fresh blueberries (from 1 [6-oz.] container), plus more for garnish",
      "1 Tbsp. grated lemon zest, plus 3 Tbsp. fresh juice, divided (from 2 lemons)",
      "1 cup butter, softened",
      "1 (32-oz.) pkg. powdered sugar"
    ],
    steps: [
      "Prepare the Cake Layers: Preheat oven to 350°F. Grease (with shortening) and flour 3 (8-inch) round cake pans; set aside. Beat butter with a stand mixer on medium until creamy, 1 minute. Gradually add sugar, beating until light and fluffy, about 4 minutes. Add eggs, 1 at a time, beating just until blended after each.",
      "Whisk together baking powder, salt, baking soda, and 3 cups of the flour in a medium bowl. With mixer on low, gradually add flour mixture to butter mixture, alternately with buttermilk, beginning and ending with flour mixture. Stir in lemon zest, lemon juice, and vanilla. Toss blueberries with remaining 1 tablespoon flour; gently fold into batter. Spoon batter into prepared pans.",
      "Bake until a wooden pick inserted in center comes out clean, 23 to 25 minutes. Cool in pans on wire racks 10 minutes; remove from pans to wire racks. Cool completely, about 1 hour.",
      "Prepare the Frosting: Process blueberries and lemon juice in a blender or food processor until completely smooth, 1 to 2 minutes. Beat butter and lemon zest with a stand mixer until creamy; gradually add powdered sugar and the blueberry puree, beating until smooth and spreadable.",
      "Place 1 Cake Layer on a platter. Spread 1 cup Frosting over top. Add a second layer; spread with 1 cup Frosting. Top with third layer; frost top and sides with remaining Frosting. Garnish with blueberries."
    ]
  },
  {
    title: "Lemon Blueberry Bread",
    emoji: "🍋",
    desc: "A moist Greek-yogurt lemon blueberry loaf with a lemon glaze (Tastes Better From Scratch).",
    tags: ["breakfast", "sweet", "dessert"],
    person: "Stefanie",
    prep: "20 min", cook: "1 hr", serves: "8 slices",
    ingredients: [
      "— Bread: —",
      "1 1/2 cups + 1 Tablespoon all-purpose flour, divided",
      "2 teaspoons baking powder",
      "1/2 teaspoon salt",
      "1 cup plain Greek yogurt or sour cream",
      "1 cup granulated sugar",
      "1/2 cup oil or softened butter",
      "3 large eggs",
      "1 teaspoon lemon zest (from 1 lemon)",
      "1/2 teaspoon vanilla extract",
      "1 heaping cup blueberries, fresh or frozen",
      "— Glaze (Optional): —",
      "1 cup powdered sugar",
      "3-4 Tablespoons fresh lemon juice"
    ],
    steps: [
      "Preheat the oven to 350°F. Grease well the bottom and sides of a 9x5-inch loaf pan.",
      "In a medium bowl, whisk together flour, baking powder, and salt. In a large bowl, beat sugar and oil (or softened butter) until well combined. Add yogurt, eggs, lemon zest and vanilla.",
      "Slowly fold the dry ingredients into the wet, just until incorporated. In a separate bowl mix the blueberries with 1 Tbsp of flour, then gently fold them into the batter (save a few to stick on top after you pour it into the pan).",
      "Pour the batter into the pan and bake for 55 minutes to 1 hour, or until a toothpick inserted in the center comes out clean.",
      "Remove from oven and cool in the pan for 10 minutes. Transfer to a wire rack to cool completely.",
      "Glaze: Whisk together the powdered sugar and lemon juice and drizzle over the top of the cooled loaf."
    ]
  },
  {
    title: "Lemon-Blueberry Blondie Bars",
    emoji: "🍋",
    desc: "White-chocolate blondies with fresh blueberries and a lemon glaze.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "25 min", cook: "1 hr 15 min", serves: "9",
    ingredients: [
      "3/4 cup unsalted butter",
      "2 oz. white chocolate, finely chopped",
      "1 cup packed brown sugar",
      "1 tsp. lemon zest, plus more for garnish",
      "2 Tbsp. plus 4 tsp. fresh lemon juice (1 large lemon)",
      "1/2 tsp. kosher salt",
      "1 egg",
      "1 egg yolk",
      "1 tsp. vanilla extract",
      "2 cups flour",
      "1 cup fresh blueberries",
      "2/3 cup powdered sugar, sifted"
    ],
    steps: [
      "Preheat oven to 350°F. Grease a 9-inch square baking pan with cooking spray and line with parchment paper, leaving 1 inch of overhang.",
      "Melt butter in a small saucepan over medium heat. Reduce heat to low. Stir in white chocolate until melted and combined; transfer to a large bowl.",
      "Whisk in brown sugar until smooth. Whisk in lemon zest, 2 Tbsp. lemon juice, and the salt until combined. Whisk in egg, egg yolk, and vanilla. Stir in flour. Gently fold in blueberries with a silicone spatula.",
      "Spread batter in an even layer in prepared pan. Bake until golden brown, 35 to 40 minutes. Let cool in pan on a wire rack at least 15 minutes.",
      "To serve, lift blondies out using parchment overhang and transfer to a cutting board. For glaze, whisk together powdered sugar and remaining 4 tsp. lemon juice until smooth. Drizzle over blondies and garnish with additional lemon zest. Cut into 9 pieces."
    ]
  },
  {
    title: "Blueberry Coffee Cake",
    emoji: "🫐",
    desc: "A buttery blueberry coffee cake with a cinnamon crumb topping (Ree Drummond).",
    tags: ["breakfast", "sweet"],
    person: "Stefanie",
    prep: "25 min", cook: "1 hr 10 min", serves: "16",
    ingredients: [
      "— Cake: —",
      "5 tablespoons salted butter, softened, plus more for greasing the pan",
      "2 cups all-purpose flour",
      "2 heaping teaspoons baking powder",
      "1/2 teaspoon ground cinnamon",
      "1/2 teaspoon salt",
      "3/4 cup sugar",
      "1 large egg",
      "1/2 teaspoon vanilla extract",
      "3/4 cup whole milk",
      "2 cups fresh blueberries",
      "— Topping: —",
      "1/2 cup all-purpose flour",
      "1/2 cup sugar",
      "6 tablespoons salted butter",
      "1/4 teaspoon cinnamon",
      "1/4 teaspoon salt",
      "Sugar, for sprinkling",
      "Softened butter, for serving"
    ],
    steps: [
      "For the cake: Preheat the oven to 350°F. Grease a 9-by-13-inch baking pan with butter.",
      "Add the flour, baking powder, cinnamon and salt to a medium bowl and stir to combine. Set aside.",
      "Cream together the butter and sugar with an electric mixer. Add the egg and mix until combined. Mix in the vanilla. Add the flour mixture and milk alternately and mix until totally incorporated. Do not over-beat. Stir in the blueberries until evenly distributed. Pour the batter into the prepared pan.",
      "For the topping: Combine the flour, sugar, butter, cinnamon and salt in a medium bowl and cut together using 2 knives or a pastry cutter. Sprinkle over the top of the batter.",
      "Bake until the cake is golden brown, 40 to 45 minutes. Sprinkle with sugar. Cut into squares and serve with softened butter."
    ]
  },
  {
    title: "Hummingbird Snack Cake with Brown Butter Frosting",
    emoji: "🍌",
    desc: "A small-batch banana-pineapple-pecan snack cake with brown butter frosting.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "20 min", cook: "1 hr 15 min", serves: "1 (8-inch) cake",
    ingredients: [
      "— Cake: —",
      "2 medium bananas",
      "1/2 cup canned crushed pineapple in juice (undrained, from 1 [8-oz.] can)",
      "1/4 cup canola oil",
      "1 1/2 tsp. vanilla extract",
      "1 large egg",
      "3/4 cup granulated sugar",
      "3/4 tsp. baking soda",
      "1/2 tsp. kosher salt",
      "1 1/2 cups all-purpose flour",
      "1 tsp. ground cinnamon",
      "1/4 tsp. ground allspice",
      "2/3 cup chopped pecans, toasted",
      "— Frosting: —",
      "3/4 cup unsalted butter",
      "2 Tbsp. heavy whipping cream",
      "1 tsp. vanilla extract",
      "1/4 tsp. kosher salt",
      "1 1/2 cups powdered sugar",
      "1/2 cup walnuts, chopped, for garnish (optional)"
    ],
    steps: [
      "Prepare the Cake: Preheat oven to 350°F. Line an 8-inch square baking pan with parchment paper, leaving a 2-inch overhang on all sides. Mash bananas in a large microwavable bowl until nearly smooth. Stir in pineapple, oil, and vanilla. Crack egg into bowl; pierce egg using tip of a whisk, and lightly beat into pineapple mixture. Whisk in granulated sugar, baking soda, and salt. Fold in flour, cinnamon, and allspice. Fold in pecans.",
      "Spread batter evenly in prepared baking pan. Bake until a wooden pick inserted in center comes out clean, 33 to 35 minutes. Cool in pan 5 minutes. Using parchment overhang, lift Cake from pan and transfer to a wire rack. Cool completely, 1 hour.",
      "While Cake bakes, prepare the Frosting: Wash and dry the microwavable bowl. Place butter in bowl. Cover bowl with a sheet of parchment paper; place a microwavable plate on top to cover bowl. Microwave on HIGH until butter is amber colored, 6 to 9 minutes (butter will pop as it browns). Remove from microwave, and cool 20 minutes. Transfer bowl to refrigerator, and chill until butter starts to solidify, about 1 hour.",
      "Remove butter from refrigerator; add whipping cream. Beat with an electric mixer fitted with a whisk attachment on medium until smooth and fluffy, about 1 minute. Beat in vanilla and salt. Add powdered sugar; beat on low until smooth and creamy, about 1 minute. Spread Frosting over cooled Cake. Sprinkle with walnuts."
    ]
  },
  {
    title: "Double Pumpkin Roll Cake with Pecan-Cream Cheese Filling",
    emoji: "🎃",
    desc: "A pumpkin sponge cake rolled around a pecan, cream cheese, and crystallized-ginger filling (EatingWell).",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "30 min", cook: "18 min", serves: "12",
    guesses: ["prep"],
    ingredients: [
      "— Cake: —",
      "5 large eggs, at room temperature",
      "3/4 cup granulated sugar",
      "1 (15-ounce) can unseasoned pumpkin puree, divided",
      "1/2 cup all-purpose flour",
      "1/2 cup whole-wheat pastry flour",
      "1 teaspoon ground cinnamon",
      "1 teaspoon ground ginger",
      "1/2 teaspoon baking soda",
      "1/2 teaspoon salt",
      "1/4 teaspoon freshly grated nutmeg",
      "1 teaspoon vanilla extract",
      "2 teaspoons confectioners' sugar, divided",
      "— Filling: —",
      "8 ounces reduced-fat cream cheese, at room temperature",
      "1/2 cup pecans, toasted and chopped",
      "1/4 cup confectioners' sugar, plus more for dusting",
      "1/4 cup nonfat plain yogurt",
      "1 tablespoon finely chopped crystallized ginger",
      "Pinch of salt"
    ],
    steps: [
      "To prepare cake: Position rack in middle of oven; preheat to 325°F. Coat an 18-by-13-inch rimmed baking sheet with cooking spray. Line with parchment paper and coat the paper with cooking spray.",
      "Beat eggs and granulated sugar in the bowl of a stand mixer fitted with a whisk attachment on medium-high speed until pale yellow and thick, about 5 minutes. Add 1 cup pumpkin, reserving the rest for the filling, and mix on medium until incorporated, about 1 minute.",
      "Whisk all-purpose flour, whole-wheat flour, cinnamon, ground ginger, baking soda, 1/2 teaspoon salt and nutmeg in a medium bowl. Sift the flour mixture over the pumpkin mixture and fold with a flexible spatula until combined. Pour the batter into the prepared pan and spread evenly.",
      "Bake until firm and the top springs back when touched lightly, about 18 minutes. Immediately run a knife around the edge to loosen. Dust with 1 teaspoon confectioners' sugar. Place a clean kitchen towel on top and quickly flip the cake onto a clean work surface. Remove the pan and discard the parchment. Dust lightly with 1 teaspoon confectioners' sugar. Starting at one side, carefully roll up the cake in the towel. Place seam-side down on a baking sheet and refrigerate until cool, at least 1 hour.",
      "Meanwhile, to prepare filling & assemble: Combine the remaining pumpkin, cream cheese, pecans, confectioners' sugar, yogurt, crystallized ginger and salt in a stand mixer fitted with a whisk attachment. Beat until combined.",
      "Unroll the cooled cake on a clean work surface, keeping it on the towel. Spread the filling over the cake to within about 1/2 inch of the edge. Starting with one side, snugly roll the cake, wrap in the towel and chill until firm, about 1 hour.",
      "Unwrap and place on a serving platter. Dust lightly with more confectioners' sugar, if desired. Slice with a serrated knife into 12 pieces and serve immediately."
    ]
  },
  {
    title: "Pumpkin Love Cake",
    emoji: "🎃",
    desc: "A spice-cake-mix poke-style cake with a baked ricotta layer and pumpkin pudding frosting (Valerie Bertinelli).",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "30 min", cook: "2 hr 15 min", serves: "8",
    ingredients: [
      "Unsalted butter or cooking spray, for the baking pan",
      "One 16.5-ounce box spice cake mix (plus ingredients called for on the box)",
      "32 ounces part-skim ricotta",
      "16 ounces mascarpone",
      "3/4 cup sugar",
      "1 teaspoon vanilla extract",
      "4 eggs",
      "1 small box (3.4 ounces) pumpkin spice instant pudding",
      "1 cup whole milk"
    ],
    steps: [
      "Preheat the oven to 350°F. Grease and flour a 9-by-13-inch baking pan.",
      "Prepare the cake batter according to the package directions. Spoon evenly into the prepared pan. Set aside.",
      "Combine the ricotta, 4 ounces of the mascarpone, sugar, vanilla and eggs in a stand mixer fitted with the paddle attachment. Beat until smooth. Gently scoop the filling onto the batter and spread so the top is completely white.",
      "Bake until a skewer inserted into the center comes out clean and the spice cake layer has risen to the top, 50 to 60 minutes. Let cool completely in the pan on a cooling rack.",
      "Combine the instant pudding, milk and the rest of the mascarpone in a stand mixer. Beat until thick and smooth. Spread the frosting evenly over the entire cake."
    ]
  },
  {
    title: "Valerie's Pumpkin Pudding (for Wolfie)",
    emoji: "🍮",
    desc: "A spiced stovetop pumpkin pudding layered with gingersnaps (Valerie Bertinelli).",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "25 min", cook: "25 min", serves: "6",
    ingredients: [
      "4 cups whole milk",
      "One 15-ounce can pumpkin puree (do not use pumpkin pie mix), about 1 1/2 cups",
      "1 teaspoon ground cinnamon",
      "1/2 teaspoon ground allspice",
      "1/2 teaspoon ground cloves",
      "1 teaspoon ground ginger",
      "1 1/4 cup sugar",
      "1/3 cup cornstarch",
      "1/2 teaspoon salt",
      "5 large egg yolks",
      "1 teaspoon vanilla extract",
      "2 tablespoons unsalted butter",
      "8 to 12 ginger snap cookies"
    ],
    steps: [
      "In a medium saucepan, combine three cups of the milk, the pumpkin puree, cinnamon, allspice, cloves and ginger. Whisk to combine and then set over medium-low heat and bring to a gentle simmer.",
      "Whisk together the sugar, cornstarch and salt in a large bowl. Whisk in the egg yolks and the remaining 1 cup milk.",
      "Whisk half of the hot milk-pumpkin mixture into the egg mixture until smooth, then gradually whisk the egg-milk-pumpkin mixture back into the saucepan. Continue to cook, now over medium heat, whisking constantly, until the mixture boils. Continue to cook, whisking constantly, until it has thickened, 3 to 4 minutes. Remove from the heat and stir in the vanilla and butter.",
      "To assemble, layer the cookies and pudding mixture in a serving dish or parfait glasses. Cover the pudding with plastic wrap and refrigerate until cold (at least 2 hours)."
    ]
  },
  {
    title: "Classic Southern Pound Cake",
    emoji: "🍰",
    desc: "A tender, buttery cream-cheese pound cake baked in a Bundt pan.",
    tags: ["dessert", "sweet", "breakfast"],
    person: "Stefanie",
    prep: "20 min", cook: "3 hr 55 min", serves: "12",
    ingredients: [
      "3 cups superfine or granulated sugar",
      "1 1/2 cups unsalted butter, at room temperature",
      "6 oz. cream cheese, at room temperature",
      "4 large eggs, at room temperature",
      "2 large egg yolks, at room temperature",
      "1/4 cup half-and-half",
      "2 tsp. vanilla extract",
      "3 cups all-purpose flour",
      "1 tsp. salt"
    ],
    steps: [
      "Preheat oven to 300°F with oven rack in center of oven. Grease and flour a 10-inch (14-cup) Bundt pan.",
      "Beat sugar, butter, and cream cheese with a heavy-duty electric stand mixer fitted with a paddle attachment on medium-high speed until very fluffy and pale in color, 5 to 7 minutes. Add eggs, 1 at a time, beating on low speed just until yellow disappears after each addition. Add egg yolks, half-and-half, and vanilla, and beat on low speed just until blended.",
      "Stir together flour and salt in a medium bowl; gradually add to butter mixture in 3 batches, beating on low speed just until blended after each addition, stopping to scrape down sides of bowl as needed. Remove bowl from stand, and scrape batter from paddle. Using a spatula, stir batter once by hand, scraping sides and bottom to incorporate any unmixed batter. Spoon batter into prepared pan, and gently tap pan on counter to release any large air bubbles.",
      "Bake until cake is golden and a long wooden pick inserted in center comes out clean, 1 hour and 20 minutes to 1 hour and 30 minutes. Cool cake in pan on a wire rack 15 minutes; remove from pan, and cool completely before slicing and serving, about 2 hours."
    ]
  },
  {
    title: "Chocolate Bundt Cake with Pecans",
    emoji: "🍫",
    desc: "A deeply chocolate coffee-spiked Bundt cake with chocolate ganache and toasted pecans.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "25 min", cook: "3 hr 15 min", serves: "12",
    ingredients: [
      "Baking spray",
      "2 1/4 cups all-purpose flour",
      "2 cups granulated sugar",
      "3/4 cup unsweetened cocoa",
      "2 tsp. baking soda",
      "1 tsp. kosher salt",
      "1/2 tsp. baking powder",
      "2 large eggs",
      "1 cup whole buttermilk",
      "1 cup strong brewed coffee, cooled",
      "1/2 cup canola oil",
      "2 tsp. vanilla extract",
      "3/4 cup heavy whipping cream",
      "1 cup semisweet chocolate chips",
      "2 tsp. coffee liqueur (such as Kahlúa)",
      "Chopped toasted pecans, for garnish"
    ],
    steps: [
      "Preheat oven to 350°F. Coat a 10- to 12-cup Bundt pan with baking spray, and set aside.",
      "Whisk together flour, sugar, cocoa, baking soda, salt, and baking powder in a large bowl.",
      "Whisk together eggs, buttermilk, coffee, oil, and vanilla in a separate medium bowl until combined. Add to flour mixture, stirring until combined. Pour batter into prepared pan.",
      "Bake until a wooden pick inserted in center comes out clean, 45 to 55 minutes. Let cool in pan on a wire rack 10 minutes. Invert cake onto rack; remove pan, and let cool completely, about 2 hours.",
      "Heat cream in a saucepan over medium-high, stirring often, until it begins to steam, about 3 minutes. Remove from heat, and immediately pour over chocolate chips in a medium heatproof bowl. (Do not stir.) Let stand 3 minutes, then gently stir until melted and smooth. Stir in coffee liqueur. Place cake on a wire rack set inside a rimmed baking sheet. Drizzle chocolate mixture over the cooled cake. Before it sets, garnish with pecans."
    ]
  },
  {
    title: "Spiced Cream Cheese Bundt Cake",
    emoji: "🍂",
    desc: "A swirled cream-cheese Bundt cake marbled with brown sugar and pumpkin pie spice.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "35 min", cook: "3 hr", serves: "12",
    ingredients: [
      "Baking spray",
      "1 (8-oz.) pkg. cream cheese, softened",
      "3/4 cup unsalted butter, softened",
      "1 1/2 cups granulated sugar",
      "1 tsp. kosher salt",
      "4 large eggs, at room temperature",
      "1 1/4 tsp. vanilla extract, divided",
      "2 1/2 cups all-purpose flour",
      "1/2 tsp. baking powder",
      "1/3 cup whole milk",
      "1/4 cup packed light brown sugar",
      "4 tsp. pumpkin pie spice, plus more for garnish",
      "1 1/4 cups powdered sugar",
      "1 Tbsp. heavy whipping cream"
    ],
    steps: [
      "Preheat oven to 325°F. Coat a 10- to 12-cup Bundt pan with baking spray; set aside.",
      "Beat cream cheese and butter in a stand mixer fitted with a paddle attachment on medium-high speed until fluffy, about 4 minutes, scraping down sides as needed.",
      "Add granulated sugar and kosher salt; beat on high speed for 5 minutes, scraping down sides occasionally. With mixer on low speed, add eggs, 1 at a time, beating well after each addition. Beat in 1 teaspoon of the vanilla until combined.",
      "Stir together flour and baking powder in a medium bowl. With mixer on low, add flour mixture and milk alternately to butter mixture, beginning and ending with flour mixture, beating until just combined after each addition.",
      "Transfer half of the batter (about 3 cups) to another medium bowl; stir in brown sugar and pumpkin pie spice until smooth. Spoon about 1 cup of the plain batter into prepared pan; spoon about 1 cup of the spiced batter over top in an even layer. Repeat two more times, alternating plain and spiced batter. Using a knife, pull the blade back and forth through the layered batters to create a swirled effect. Smooth the top.",
      "Bake until a wooden pick inserted in center comes out clean, about 1 hour. Let cool in pan on a wire rack 10 minutes. Invert onto wire rack; remove pan, and let cool completely, about 2 hours.",
      "Whisk together the powdered sugar, 1 1/2 tablespoons water, cream, and the remaining 1/4 teaspoon vanilla in a medium bowl until smooth. Drizzle over cooled cake. Sprinkle pumpkin pie spice over the glaze to garnish, if desired."
    ]
  },
  {
    title: "The Best Chocolate Chip Cookie Recipe Ever",
    emoji: "🍪",
    desc: "A simple no-chill chocolate chip cookie that bakes up doughy and soft every time.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "10 min", cook: "30 min", serves: "36 cookies",
    ingredients: [
      "1 cup salted butter, softened",
      "1 cup white (granulated) sugar",
      "1 cup light brown sugar, packed",
      "2 tsp pure vanilla extract",
      "2 large eggs",
      "3 cups all-purpose flour",
      "1 tsp baking soda",
      "1/2 tsp baking powder",
      "1 tsp sea salt",
      "2 cups chocolate chips (or chunks, or chopped chocolate)"
    ],
    steps: [
      "Preheat oven to 375°F. Line a baking pan with parchment paper and set aside.",
      "In a separate bowl mix flour, baking soda, salt, baking powder. Set aside.",
      "Cream together butter and sugars until combined.",
      "Beat in eggs and vanilla until fluffy.",
      "Mix in the dry ingredients until combined.",
      "Add 12 oz package of chocolate chips and mix well.",
      "Roll 2-3 TBS of dough at a time into balls and place them evenly spaced on your prepared cookie sheets (alternately, use a small cookie scoop).",
      "Bake in preheated oven for approximately 8-10 minutes. Take them out when they are just BARELY starting to turn brown.",
      "Let them sit on the baking pan for 2 minutes before removing to a cooling rack."
    ]
  },
  {
    title: "Apple Cider-Doughnut Bundt Cake",
    emoji: "🍩",
    desc: "A spiced apple-cider Bundt cake brushed with butter and tossed in cinnamon sugar like a cider doughnut.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "30 min", cook: "3 hr 30 min", serves: "12",
    ingredients: [
      "Baking spray",
      "1/2 cup packed light brown sugar",
      "1 1/4 cups granulated sugar, divided",
      "1 cup unsalted butter, softened and divided",
      "3 large eggs",
      "2 tsp. vanilla extract",
      "3 cups all-purpose flour",
      "1 1/2 tsp. baking powder",
      "1 tsp. kosher salt",
      "1/2 tsp. baking soda",
      "2 1/2 tsp. ground cinnamon, divided",
      "1 1/4 tsp. ground ginger, divided",
      "3/4 tsp. grated fresh nutmeg, divided",
      "1 cup apple cider",
      "1/2 cup unsweetened applesauce"
    ],
    steps: [
      "Preheat oven to 350°F. Coat a 10- to 12-cup Bundt pan with baking spray, and set aside.",
      "Beat brown sugar, 1 cup of the granulated sugar, and 3/4 cup of the butter in a stand mixer fitted with a paddle attachment on medium-high speed until light and fluffy, 3 to 4 minutes. With mixer on low, add eggs, 1 at a time, beating well after each. Beat in vanilla until just combined.",
      "Whisk together flour, baking powder, salt, baking soda, 2 teaspoons of the cinnamon, 1 teaspoon of the ginger, and 1/2 teaspoon of the nutmeg in a large bowl. Stir together apple cider and applesauce in a small bowl.",
      "With mixer on low, add flour mixture and apple cider mixture alternately to butter mixture, beginning and ending with flour mixture, beating until just combined after each addition. Transfer batter to prepared pan.",
      "Bake until a wooden pick inserted in center comes out clean, 50 to 55 minutes. Let cool in pan on a wire rack 10 minutes. Invert cake onto wire rack, and remove pan.",
      "Microwave remaining 1/4 cup butter in a small heatproof bowl on HIGH until melted, about 30 seconds. Stir together the remaining 1/4 cup granulated sugar, 1/2 teaspoon cinnamon, and 1/4 teaspoon each ginger and nutmeg in a small bowl. Set cake on a wire rack over a large rimmed baking sheet. Brush warm cake with melted butter, then sprinkle evenly with cinnamon-sugar mixture, pressing gently to adhere. Let cool completely, about 2 hours."
    ]
  },
  {
    title: "Maple-Glazed Pumpkin Bundt Cake",
    emoji: "🎃",
    desc: "A moist spiced pumpkin Bundt cake with a maple glaze.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "15 min", cook: "3 hr 20 min", serves: "12",
    ingredients: [
      "— Cake: —",
      "Baking spray",
      "3 cups all-purpose flour",
      "2 tsp. ground cinnamon",
      "2 tsp. baking soda",
      "2 tsp. ground nutmeg",
      "1 tsp. ground allspice",
      "3/4 tsp. kosher salt",
      "1/2 tsp. baking powder",
      "1 cup vegetable oil",
      "2 1/2 cups granulated sugar",
      "3 large eggs, at room temperature",
      "1 tsp. vanilla extract",
      "1 (15-oz.) can pumpkin puree (not pumpkin pie filling)",
      "— Glaze: —",
      "1/3 cup pure maple syrup",
      "3 Tbsp. unsalted butter",
      "1/4 tsp. ground cinnamon",
      "1/8 tsp. kosher salt",
      "1 cup powdered sugar, sifted",
      "1 tsp. vanilla extract",
      "Chopped toasted walnuts (optional), for garnish"
    ],
    steps: [
      "Prepare the Cake: Preheat oven to 350°F. Generously grease a 10- to 12-cup Bundt pan with baking spray; set aside.",
      "Sift flour into a large bowl. Add the cinnamon, baking soda, nutmeg, allspice, salt, and baking powder; whisk to combine.",
      "Whisk vegetable oil and granulated sugar together in a separate large bowl until fully combined. Whisk in eggs, 1 at a time, whisking well after each. Whisk in vanilla.",
      "Add flour mixture and pumpkin puree alternately to sugar mixture, beginning and ending with the flour mixture, whisking after each addition just until combined. (Do not overmix.)",
      "Pour batter into prepared pan, smoothing the top. Firmly tap pan on counter a few times to release air bubbles. Bake until a wooden pick inserted into center comes out clean, 55 to 60 minutes. Let cool in pan on a wire rack 10 minutes. Invert onto wire rack; remove pan, and let cool completely, about 2 hours.",
      "Prepare the Glaze: Heat maple syrup, butter, cinnamon, and salt in a medium saucepan over medium-low, stirring occasionally until butter is melted. Remove from heat; whisk in the powdered sugar and vanilla. Let cool until slightly thickened, 2 to 4 minutes. Spoon warm Glaze over cooled Cake. Garnish with walnuts, if desired."
    ]
  },
  {
    title: "Browned Butter Chocolate Chip Cookies",
    emoji: "🍪",
    desc: "Chocolate chip cookies made with nutty browned butter and toasted pecans.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "15 min", cook: "50 min", serves: "about 2 1/2 dozen",
    ingredients: [
      "3/4 cup butter",
      "1 cup packed light brown sugar",
      "1/2 cup granulated sugar",
      "2 large eggs",
      "2 tsp. vanilla extract",
      "2 1/4 cups plus 2 Tbsp. all-purpose flour",
      "1 tsp. baking soda",
      "3/4 tsp. kosher salt",
      "1 (12-oz.) pkg. semisweet chocolate chips",
      "1 cup chopped toasted pecans (optional)"
    ],
    steps: [
      "Melt butter in a small heavy saucepan over medium, stirring constantly, until butter begins to turn golden brown, 6 to 8 minutes. Immediately remove from heat, and pour butter into a small heatproof bowl. Cover and chill until butter is cool and begins to solidify, about 1 hour.",
      "Preheat oven to 350°F. Line 3 baking sheets with parchment paper. Beat browned butter, brown sugar, and granulated sugar in a stand mixer fitted with a paddle attachment on medium speed until creamy, 1 minute. Add eggs and vanilla, beating until blended, 30 seconds.",
      "Stir together flour, baking soda, and salt in a small bowl; gradually add to browned butter mixture, beating on low speed until just blended. Beat in chocolate chips and pecans until just combined.",
      "Using a 2-tablespoon cookie scoop, scoop and drop dough 2 inches apart on prepared baking sheets. Bake in batches, 1 sheet at a time, until cookies are golden and set around the edges, 11 to 13 minutes per batch. Transfer to wire racks; cool about 15 minutes."
    ]
  },
  {
    title: "Dark Chocolate Mousse Cake",
    emoji: "🍫",
    desc: "A super-moist four-layer dark chocolate cake filled with chocolate mousse and covered in ganache (Sally's Baking Addiction).",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "2 hr 30 min", cook: "5 hr 55 min", serves: "10-12",
    ingredients: [
      "— Cake: —",
      "1 3/4 cups (219g) all-purpose flour (spoon & leveled)",
      "3/4 cup (62g) unsweetened natural cocoa powder",
      "1 3/4 cups (350g) granulated sugar",
      "2 teaspoons baking soda",
      "1 teaspoon baking powder",
      "1 teaspoon salt",
      "2 teaspoons espresso powder (optional)",
      "1/2 cup (120ml) canola or vegetable oil",
      "2 large eggs, at room temperature",
      "3/4 cup (180g) full fat sour cream, at room temperature",
      "1/2 cup (120ml) buttermilk, at room temperature",
      "2 teaspoons pure vanilla extract",
      "1/2 cup (120ml) hot water or coffee",
      "1 cup (180g) mini or regular semi-sweet chocolate chips (optional)",
      "Fresh berries and/or chocolate shavings (optional garnish)",
      "— Chocolate Mousse: —",
      "1/2 cup (120ml) hot water",
      "1/4 cup (22g) unsweetened cocoa powder",
      "two 4-ounce quality semi-sweet chocolate bars (113g each), finely chopped",
      "2 cups (480ml) heavy cream or heavy whipping cream",
      "2 Tablespoons (15g) confectioners' sugar",
      "1/2 teaspoon pure vanilla extract",
      "— Chocolate Ganache: —",
      "two 4-ounce quality semi-sweet chocolate bars (113g each), finely chopped",
      "1 cup (240ml) heavy cream or heavy whipping cream"
    ],
    steps: [
      "Preheat oven to 350°F (177°C). Grease four 8-inch or 9-inch cake pans, line with parchment paper, then grease the parchment.",
      "Make the cake: Whisk the flour, cocoa powder, sugar, baking soda, baking powder, salt, and espresso powder (if using) together in a large bowl. Using a mixer, mix the oil, eggs, and sour cream together on medium-high until combined. Add the buttermilk and vanilla; mix until combined. Pour the wet ingredients into the dry, add the hot water/coffee, and beat on low until the batter is completely combined. Fold in chocolate chips, if using.",
      "Divide batter evenly between the 4 pans. Bake for 19-23 minutes, until a toothpick inserted in the center comes out with a few moist crumbs. Cool completely in the pans on a wire rack.",
      "As the cakes cool, prepare the mousse: Whisk the hot water and cocoa powder together; set aside. Melt the chopped chocolate (double boiler or microwave in 30-second increments, stirring). Stir the cocoa mixture into the melted chocolate until thick and smooth; set aside. Whip the heavy cream, confectioners' sugar, and vanilla on medium-high until medium peaks form, 3-4 minutes. Gently fold in the chocolate mixture (don't over-mix). Cover and chill at least 2 hours. (Makes about 4 1/2 cups.)",
      "Assemble: Level the cakes if needed. Place 1 layer on a stand; spread about 1.5 cups mousse over top. Repeat with 2nd and 3rd layers and 1.5 cups mousse each. Top with the 4th layer; spread any remaining mousse around the sides as a crumb coat and smooth with a bench scraper. Refrigerate at least 1 hour.",
      "Chocolate Ganache: Place chopped chocolate in a heatproof bowl. Heat cream in a saucepan until it begins to gently simmer (do not boil); pour over chocolate and let sit 2-3 minutes, then stir slowly until smooth. Cool 20 minutes at room temperature.",
      "Pour/spoon ganache over the chilled cake. Smooth the top and sides. Garnish with berries and/or chocolate shavings. Serve immediately or chill up to 4-6 hours. Store leftovers tightly covered in the refrigerator up to 5 days."
    ]
  },
  {
    title: "Texas Skillet Cake",
    emoji: "🍫",
    desc: "A fudgy chocolate cake baked in a cast-iron skillet with a warm cocoa frosting and pecans.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "20 min", cook: "1 hr 5 min", serves: "12",
    guesses: ["prep", "serves"],
    ingredients: [
      "— Cake: —",
      "1 1/2 cups semisweet chocolate chips (about 10 oz.)",
      "1 cup unsalted butter",
      "4 large eggs",
      "1 cup granulated sugar",
      "1 cup packed light brown sugar",
      "2 cups all-purpose flour",
      "1/4 cup unsweetened cocoa",
      "1 1/2 tsp. baking powder",
      "1/2 tsp. kosher salt",
      "— Frosting: —",
      "1 cup granulated sugar",
      "1/2 cup unsalted butter",
      "1/2 cup whole milk",
      "1/4 cup unsweetened cocoa",
      "2 Tbsp. all-purpose flour",
      "1/2 tsp. kosher salt",
      "1 tsp. vanilla extract",
      "— Additional: —",
      "1 cup toasted pecan halves, chopped",
      "Ice cream, for serving"
    ],
    steps: [
      "Prepare the Cake: Preheat oven to 350°F. Combine chocolate chips and butter in a medium-size microwavable glass bowl. Microwave on HIGH until melted and smooth, about 2 minutes, stirring every 30 seconds. Cool 10 minutes.",
      "Beat eggs, granulated sugar, and light brown sugar in a heavy-duty stand mixer fitted with whisk attachment on medium speed until thick and creamy, about 5 minutes. Whisk together flour, cocoa, baking powder, and salt. Add flour mixture and melted chocolate mixture to egg mixture in batches, beginning and ending with flour mixture. Beat on low just until each is incorporated. Pour batter into a 12-inch cast-iron skillet.",
      "Bake in preheated oven until a wooden pick inserted in center comes out with a few moist crumbs, about 40 minutes. Place on a wire rack to cool slightly.",
      "Prepare the Frosting: Combine granulated sugar, butter, milk, cocoa, flour, and salt in a small saucepan over medium. Cook, stirring constantly, until mixture comes to a boil, about 5 minutes. Cook, stirring constantly, until slightly thickened, about 1 minute (it will still be a bit thin). Remove from heat, and stir in vanilla. Pour into a heatproof bowl, and let cool slightly, about 15 minutes. Pour warm Frosting over warm Cake. Sprinkle with chopped pecans. Serve warm or at room temperature with ice cream."
    ]
  },
  {
    title: "Texas Sheet Cake VI",
    emoji: "🍫",
    desc: "A rich coffee-and-sour-cream chocolate sheet cake frosted warm with a pecan cocoa icing (Allrecipes).",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "15 min", cook: "30 min", serves: "24",
    guesses: ["serves"],
    ingredients: [
      "1 cup hot brewed coffee",
      "1 cup butter",
      "5 tablespoons unsweetened cocoa powder",
      "2 cups all-purpose flour",
      "2 cups white sugar",
      "1 teaspoon baking soda",
      "1/2 teaspoon salt",
      "3 eggs",
      "1 (8 ounce) container sour cream",
      "1 teaspoon vanilla extract",
      "— Frosting: —",
      "1/2 cup butter",
      "6 tablespoons milk",
      "6 tablespoons unsweetened cocoa powder",
      "4 cups confectioners' sugar",
      "1 teaspoon vanilla extract",
      "1 cup chopped pecans"
    ],
    steps: [
      "Preheat oven to 350 degrees F (175 degrees C). Grease and flour a 12x18 inch sheet pan. In a saucepan, combine coffee, 1 cup butter and 5 tablespoons cocoa. Bring to a boil, reduce heat and stir until smooth. Remove from heat and set aside.",
      "In a large bowl, combine flour, white sugar, baking soda and salt. Make a well in the center and pour in eggs, sour cream and 1 teaspoon vanilla. Mix well, then beat in cocoa mixture. Spread into prepared pan.",
      "Bake in the preheated oven for 20 to 25 minutes, or until a toothpick inserted into the center of the cake comes out clean. Frost while still warm.",
      "To make the Frosting: In a saucepan, combine 1/2 cup butter, milk and 6 tablespoons cocoa. Bring to a boil, reduce temperature and stir until smooth. Remove from heat and blend in the confectioners' sugar. Stir in 1 teaspoon vanilla and chopped pecans. Spread on cake while still warm."
    ]
  },
  {
    title: "Beatty's Chocolate Cake",
    emoji: "🍫",
    desc: "Ina Garten's decadent two-layer chocolate cake with coffee in the batter and a chocolate buttercream.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "25 min", cook: "1 hr", serves: "8",
    ingredients: [
      "Butter for greasing the pans",
      "1 3/4 cups all-purpose flour, plus more for pans",
      "2 cups granulated sugar",
      "3/4 cup good cocoa powder",
      "2 tsp. baking soda",
      "1 tsp. baking powder",
      "1 tsp. kosher salt",
      "1 cup buttermilk, shaken",
      "1/2 cup vegetable oil",
      "2 extra-large eggs, at room temperature",
      "1 tsp. pure vanilla extract",
      "1 cup freshly brewed hot coffee",
      "— Frosting: —",
      "6 oz. good semisweet chocolate, such as Callebaut",
      "1/2 lb. (2 sticks) unsalted butter, at room temperature",
      "1 extra-large egg yolk, at room temperature",
      "1 tsp. pure vanilla extract",
      "1 1/4 cups sifted confectioners' sugar",
      "1 Tbsp. instant coffee powder"
    ],
    steps: [
      "For cake, preheat oven to 350°F. Butter two 8-inch round cake pans. Line with parchment paper, then butter and flour pans.",
      "Sift the flour, granulated sugar, cocoa, baking soda, baking powder, and salt into the bowl of an electric mixer fitted with the paddle attachment and mix on low speed until combined. In another bowl combine the buttermilk, oil, eggs, and 1 tsp. vanilla. With the mixer on low speed, slowly add the wet ingredients to the dry ingredients.",
      "With the mixer still on low, add the coffee and stir just to combine, scraping the bottom of the bowl with a rubber spatula. Pour the batter into the prepared pans and bake for 35 to 40 minutes, until a cake tester comes out clean. Cool in the pans for 30 minutes, then turn them out onto a cooling rack and cool completely.",
      "For frosting, chop the chocolate and place it in a heatproof bowl set over simmering water. Stir until just melted, then set aside until cooled to room temperature.",
      "Beat the butter on medium-high speed until light yellow and fluffy, about 3 minutes. Add the egg yolk and vanilla and continue beating for 3 minutes. Turn the mixer to low, gradually add the confectioners' sugar, then beat at medium speed until smooth and creamy. Dissolve the coffee powder in 2 teaspoons of the hottest tap water. On low speed, add the melted chocolate and the coffee to the butter mixture and mix until blended. Don't whip! Spread immediately on the cooled cake.",
      "Place one layer, flat side up, on a plate or cake pedestal. Spread the top with frosting. Place the second layer on top, rounded side up, and spread frosting evenly on the top and sides of the cake."
    ]
  },
  {
    title: "Ground Beef Bulgogi Bowls",
    emoji: "🥩",
    desc: "Korean-style marinated ground beef served in bowls with rice, kimchi, and lettuce or cabbage for ssam wraps (Peter Serpico).",
    tags: ["dinner", "savory"],
    person: "Stefanie",
    prep: "20 min", cook: "4 hr 20 min", serves: "4",
    guesses: ["serves"],
    ingredients: [
      "1 lb. lean ground beef",
      "1/2 of a yellow onion, sliced",
      "2 garlic cloves, minced",
      "2 green onions, trimmed and cut into 1-inch pieces (white and light green parts)",
      "1 Tbsp. soy sauce",
      "1 Tbsp. sesame oil",
      "1 Tbsp. pure maple syrup",
      "1 tsp. kosher salt",
      "1 tsp. vegetable oil",
      "Napa cabbage or green leaf lettuce leaves",
      "Steamed white rice",
      "Kimchi"
    ],
    steps: [
      "In a bowl combine beef, onion, garlic, green onions, soy sauce, sesame oil, maple syrup, and 1 tsp. kosher salt; mix well. Cover and marinate in the refrigerator at least 4 hours or, ideally, overnight.",
      "In a large skillet heat 1 tsp. vegetable oil over medium. Add ground beef mixture and cook until browned, stirring occasionally to break up large chunks. Serve hot in bowls with cabbage or lettuce leaves, rice, and kimchi."
    ]
  },
  {
    title: "Chocolate Chiffon Pie",
    emoji: "🥧",
    desc: "A light, airy chocolate chiffon pie in a baked pastry shell, topped with whipped cream.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "40 min", cook: "2 hr 40 min", serves: "8",
    ingredients: [
      "1 (0.25-oz.) envelope unflavored gelatin (2 1/2 tsp.)",
      "1 tsp. instant espresso coffee powder",
      "2 oz. unsweetened chocolate, melted",
      "3 egg yolks",
      "1 cup sugar",
      "1 tsp. vanilla",
      "1/4 tsp. salt",
      "3 egg whites",
      "1 Baked Pastry Shell",
      "Sweetened Whipped Cream, for topping",
      "Fuchsia blossoms (optional)"
    ],
    steps: [
      "To melt chocolate, microwave in 30-second intervals until soft enough to stir smooth, 1 to 1 1/2 minutes total.",
      "In a small bowl sprinkle gelatin over 1/4 cup cold water. Let stand 5 minutes.",
      "In another small bowl stir together espresso powder and 1/2 cup boiling water until dissolved. Whisk in gelatin mixture and melted chocolate.",
      "In a large bowl beat egg yolks with a mixer on medium until light and a pale lemon color, 2 to 3 minutes. Beat in 1/2 cup of the sugar. Add vanilla and 1/4 tsp. salt. Gradually beat in chocolate mixture. Chill until partially set, about 15 minutes. Stir until smooth.",
      "In a medium bowl beat egg whites with a mixer on medium until soft peaks form (tips curl). Gradually add the remaining 1/2 cup sugar, beating until stiff peaks form (tips stand straight).",
      "Stir a small amount of the egg white mixture into the chocolate mixture to lighten. Fold remaining egg white mixture into chocolate mixture. Chill until partially set, about 10 minutes. Spoon into cooled Baked Pastry Shell. Cover and chill until set, 2 to 24 hours.",
      "Top servings with Sweetened Whipped Cream and, if you like, fuchsia blossoms."
    ]
  },
  {
    title: "Outrageous Brownies",
    emoji: "🍫",
    desc: "Ina Garten's dense, fudgy walnut brownies loaded with three pounds of chocolate.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "30 min", cook: "35 min", serves: "20 brownies",
    ingredients: [
      "1 pound unsalted butter",
      "1 pound plus 12 ounces semisweet chocolate chips",
      "6 ounces unsweetened chocolate",
      "6 extra-large eggs",
      "3 tablespoons instant coffee granules",
      "2 tablespoons pure vanilla extract",
      "2 1/4 cups sugar",
      "1 1/4 cups all-purpose flour",
      "1 tablespoon baking powder",
      "1 teaspoon salt",
      "3 cups chopped walnuts"
    ],
    steps: [
      "Preheat oven to 350 degrees F. Butter and flour a 12 x 18 x 1-inch baking sheet.",
      "Melt together the butter, 1 pound of chocolate chips, and the unsweetened chocolate in a medium bowl over simmering water. Allow to cool slightly. In a large bowl, stir (do not beat) together the eggs, coffee granules, vanilla, and sugar. Stir the warm chocolate mixture into the egg mixture and allow to cool to room temperature.",
      "In a medium bowl, sift together 1 cup of flour, the baking powder, and salt. Add to the cooled chocolate mixture. Toss the walnuts and 12 ounces of chocolate chips in a medium bowl with 1/4 cup of flour, then add them to the chocolate batter. Pour into the baking sheet.",
      "Bake for 20 minutes, then rap the baking sheet against the oven shelf to force the air to escape from between the pan and the brownie dough. Bake for about 15 minutes, until a toothpick comes out clean. Do not overbake! Allow to cool thoroughly, refrigerate, and cut into 20 large squares."
    ]
  },
  {
    title: "Celebration Cupcakes",
    emoji: "🧁",
    desc: "A small-batch of six vanilla cupcakes with cream cheese frosting and sprinkles.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "20 min", cook: "1 hr 10 min", serves: "6 cupcakes",
    ingredients: [
      "— Cupcakes: —",
      "1/4 cup whole milk, room temperature",
      "1 large egg, room temperature",
      "1/2 teaspoon pure vanilla extract",
      "2/3 cup unbleached all-purpose flour",
      "1/3 cup granulated sugar",
      "2 teaspoons baking powder",
      "1/4 teaspoon kosher salt (we use Diamond Crystal)",
      "4 tablespoons unsalted butter (1/4 cup), melted and cooled",
      "— Frosting: —",
      "2 ounces cream cheese (1/4 cup), softened",
      "4 tablespoons unsalted butter (1/4 cup), room temperature",
      "1/8 teaspoon pure vanilla extract",
      "1 cup sifted confectioners' sugar",
      "Pinch of kosher salt",
      "Sprinkles, for decorating"
    ],
    steps: [
      "Cupcakes: Preheat oven to 350°. Line 6 hollows of a standard muffin tin with paper baking cups. Whisk together milk, egg, and vanilla in a liquid measuring cup. In a large bowl, whisk together flour, granulated sugar, baking powder, and salt until well combined. Drizzle in butter and beat until crumbly. Slowly beat in milk mixture, scraping down sides of bowl as needed, and beat until incorporated, about 30 seconds. Divide evenly among baking cups, filling each about two-thirds full.",
      "Bake until light golden and a toothpick inserted in centers comes out clean, 18 to 20 minutes. Let cool 10 minutes, then remove from tin and let cool completely on a wire rack, about 30 minutes.",
      "Frosting: In a medium bowl, beat cream cheese, butter, and vanilla until fluffy. Add confectioners' sugar and salt and continue to beat until completely incorporated and frosting is smooth and creamy. Frost cupcakes and decorate with sprinkles; enjoy the same day they're made."
    ]
  },
  {
    title: "Loaf-Pan Buckeye Brownies",
    emoji: "🥜",
    desc: "Fudgy loaf-pan brownies with a peanut butter buckeye layer swirled through.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "20 min", cook: "1 hr 30 min", serves: "8",
    guesses: ["prep", "serves"],
    ingredients: [
      "1/2 cup confectioners' sugar",
      "1/3 cup creamy or crunchy peanut butter, such as Jif",
      "5 tablespoons unsalted butter, divided, plus more for pan",
      "2 tablespoons whole milk",
      "1/2 teaspoon plus a pinch of kosher salt (we use Diamond Crystal)",
      "1 cup bittersweet chocolate chips, divided",
      "1/2 cup granulated sugar",
      "1 large egg",
      "1 tablespoon Dutch-process cocoa",
      "1/2 teaspoon vanilla extract",
      "1/2 cup all-purpose flour"
    ],
    steps: [
      "Make the peanut butter layer: Combine peanut butter, 1 tablespoon of the butter, the milk, and a pinch of salt in a small saucepan over medium-low heat, stirring often, until just melted and combined. Pour over the confectioners' sugar in a bowl and stir to combine; set aside.",
      "Butter a standard (8 1/2-by-4 1/2-inch) loaf pan and line with parchment, leaving a slight overhang on long sides. Melt remaining 4 tablespoons butter and 2/3 cup of the chocolate chips in a heatproof bowl set over (but not in) a pot of simmering water, stirring until smooth, 3 to 4 minutes. Remove from heat and add granulated sugar; whisk vigorously 1 minute. Whisk in egg vigorously until mixture is glossy, another 1 minute. Whisk in cocoa, vanilla, and remaining 1/2 teaspoon salt. Fold in flour and remaining 1/3 cup chocolate chips. Dollop half of the brownie batter into the prepared pan and spread to reach edges. Dollop peanut-butter mixture over top and spread in an even layer. Top with remaining brownie batter and spread to reach edges.",
      "Bake until center is set and edges pull away from pan, about 30 minutes. Let cool completely, about 1 hour, before lifting out of pan and slicing."
    ]
  },
  {
    title: "Chocolate Chip Fluffernutter Blondies",
    emoji: "🥜",
    desc: "Peanut-butter blondies loaded with marshmallows and chocolate chips, like a fluffernutter sandwich.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "10 min", cook: "1 hr 40 min", serves: "9",
    ingredients: [
      "1/2 cup butter, melted",
      "1/4 cup packed light brown sugar",
      "1/2 cup creamy peanut butter",
      "1/4 cup white sugar",
      "1 egg, lightly beaten",
      "1 cup flour",
      "1/2 tsp. baking powder",
      "1/4 tsp. salt",
      "1 cup miniature marshmallows",
      "1/2 cup semisweet chocolate chips"
    ],
    steps: [
      "Preheat oven to 350°F. Line an 8-inch square baking pan with parchment paper, leaving a 2-inch overhang. Coat parchment with cooking spray.",
      "Stir together butter, brown sugar, peanut butter, and white sugar in a large bowl until combined. Add egg and stir until combined. Stir together flour, baking powder, and salt in a bowl. Gradually add flour mixture to butter mixture while stirring until batter is just mixed. Gently fold in marshmallows and chocolate chips. Spread batter into prepared pan.",
      "Bake until edges are lightly browned and center has moist crumbs when a toothpick is inserted, about 30 minutes. Cool completely in pan on a wire rack, about 1 hour. Cut into 9 squares."
    ]
  },
  {
    title: "Homemade Pudding",
    emoji: "🍮",
    desc: "A simple stovetop pudding you can make chocolate or vanilla (EatingWell).",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "25 min", cook: "4 hr 25 min", serves: "5",
    ingredients: [
      "1 1/2 cups reduced-fat milk, divided",
      "3 tablespoons cornstarch",
      "1 cup half-and-half",
      "1/2 cup granulated sugar",
      "1/8 teaspoon salt",
      "1 teaspoon vanilla extract",
      "1/4 cup bittersweet chocolate chips (optional)"
    ],
    steps: [
      "Whisk 1/4 cup milk and cornstarch in a small bowl. Set next to the stove.",
      "Combine the remaining 1 1/4 cups milk, half-and-half, sugar and salt in a medium saucepan. Cook over medium-high heat, whisking occasionally, until bubbles start to form around the edges, about 3 minutes. Whisk the cornstarch mixture, then, while continuously whisking the milk mixture in the pan, slowly add the cornstarch mixture. Cook, whisking constantly, until the mixture starts to thicken, about 30 seconds. Reduce heat to maintain a low simmer and cook, stirring, until very thick, about 2 minutes. Remove from heat and stir in vanilla and chocolate chips (if using).",
      "Transfer the pudding to a heatproof bowl. Place a piece of plastic wrap directly on the surface to keep a skin from forming. Refrigerate until cold, at least 4 hours and up to 3 days."
    ]
  },
  {
    title: "Soft & Thick Snickerdoodles",
    emoji: "🍪",
    desc: "Soft, thick cinnamon-sugar snickerdoodles ready in about 30 minutes, no chilling (Sally's Baking Addiction).",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "20 min", cook: "30 min", serves: "24 cookies",
    ingredients: [
      "3 cups (375g) all-purpose flour (spoon & leveled)",
      "2 teaspoons cream of tartar",
      "1 teaspoon baking soda",
      "1 and 1/2 teaspoons ground cinnamon",
      "1/2 teaspoon salt",
      "1 cup (2 sticks or 230g) unsalted butter, softened to room temperature",
      "1 and 1/3 cup (267g) granulated sugar",
      "1 large egg + 1 large egg yolk, at room temperature",
      "2 teaspoons pure vanilla extract",
      "— Topping: —",
      "1/3 cup (70g) granulated sugar",
      "1 teaspoon ground cinnamon"
    ],
    steps: [
      "Preheat oven to 375°F (190°C). Line two large cookie sheets with parchment paper or silicone baking mats. Set aside.",
      "Make the topping: Combine the granulated sugar and cinnamon together in a small bowl.",
      "Make the cookies: Whisk together the flour, cream of tartar, baking soda, cinnamon, and salt together in a medium bowl.",
      "In a large bowl using a hand mixer or stand mixer fitted with a paddle attachment, beat the butter and granulated sugar together on high speed until smooth and creamy, about 2 minutes. Add the egg, egg yolk, and vanilla extract. Beat on medium-high speed until combined. With the mixer on low speed, slowly add the dry ingredients to the wet ingredients in 3 different parts. The dough will be thick.",
      "Roll cookie dough into balls, about 1.5 Tablespoons of dough each. Roll the dough balls in the cinnamon-sugar topping. Arrange 3 inches apart on the baking sheets.",
      "Bake cookies for 10 minutes. The cookies will be very puffy and soft. When they are still warm, lightly press down on them with the back of a spoon or fork to help flatten them out. Allow cookies to cool on the baking sheet for 10 minutes and transfer to a wire rack to cool completely."
    ]
  },
  {
    title: "Pumpkin Cheesecake Swirl Brownies",
    emoji: "🎃",
    desc: "Fudgy pumpkin brownies swirled with a spiced pumpkin cheesecake layer (EatingWell).",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "25 min", cook: "1 hr", serves: "16",
    guesses: ["serves"],
    ingredients: [
      "— Brownie Layer: —",
      "2/3 cup white whole-wheat flour or all-purpose flour",
      "1/2 cup unsweetened cocoa powder",
      "1/2 tsp. salt",
      "1/4 tsp. ground cinnamon",
      "2 large eggs",
      "1 cup packed light brown sugar",
      "1/4 cup canola oil",
      "1/4 cup canned pumpkin puree",
      "1 tsp. vanilla extract",
      "1/2 cup bittersweet chocolate chips",
      "— Cheesecake Layer: —",
      "4 oz. reduced-fat cream cheese, at room temperature",
      "1 large egg",
      "1/2 cup canned pumpkin puree",
      "3 Tbsp. light brown sugar",
      "1 Tbsp. whole-wheat flour or all-purpose flour",
      "1/2 tsp. ground cinnamon",
      "1/4 tsp. ground nutmeg",
      "1/4 tsp. vanilla extract"
    ],
    steps: [
      "Preheat oven to 350°F. Line an 8-inch-square baking pan with foil, leaving a 2-inch overhang on two sides. Lightly coat with cooking spray.",
      "To prepare brownie layer: Whisk 2/3 cup flour, cocoa, salt and 1/4 tsp. cinnamon in a small bowl. Beat 2 eggs, 1 cup brown sugar, oil, 1/4 cup pumpkin and 1 tsp. vanilla in a large bowl with an electric mixer on medium until smooth. Add the dry ingredients and beat on low just until well blended.",
      "To prepare cheesecake layer: Clean the beaters. Beat cream cheese in a medium bowl until smooth. Add egg, pumpkin, brown sugar, flour, cinnamon, nutmeg, and vanilla; beat until well blended.",
      "Reserve 1/2 cup of the brownie batter. Fold chocolate chips into the remaining brownie batter and scrape into the prepared pan, spreading to the corners. Spread the cheesecake batter over the brownie layer. Drop the reserved brownie batter by teaspoonfuls over the top and draw a knife through the two batters to create a swirl.",
      "Bake until a toothpick inserted into the center comes out mostly clean, 35 to 45 minutes. Let cool in the pan on a wire rack. Use the foil to lift the brownies out before cutting into squares."
    ]
  },
  {
    title: "Caramel-Stuffed Chocolate Chip Cookies",
    emoji: "🍬",
    desc: "Giant chocolate chip cookies stuffed with a molten caramel center (Martha Stewart).",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "20 min", cook: "1 hr", serves: "12 cookies",
    ingredients: [
      "3 cups unbleached all-purpose flour",
      "1 1/2 cups packed light-brown sugar",
      "1/2 cup granulated sugar",
      "1 teaspoon baking powder",
      "3/4 teaspoon baking soda",
      "1 teaspoon kosher salt",
      "2 sticks cold unsalted butter, cut into 1/2-inch pieces",
      "12 ounces semisweet chocolate chips (1 whole bag)",
      "2 large eggs, room temperature",
      "1 teaspoon pure vanilla extract",
      "24 caramels, such as Kraft, halved"
    ],
    steps: [
      "Preheat oven to 375°, with racks in top and middle. In the bowl of a mixer fitted with the paddle attachment, beat together flour, both sugars, baking powder, baking soda, and salt. Add butter; beat on medium speed until combined but some pea-size butter chunks remain. Add chocolate chips and beat until combined, then beat in eggs, one at a time, and vanilla.",
      "Line 2 baking sheets with parchment. Scoop dough into 4-ounce balls (each about 1/3 cup); make a deep, wide hollow in each center. Enclose 3 pieces of caramel in each; roll back into a ball. Place 6 balls on each sheet. Freeze 15 minutes.",
      "Bake, with one sheet on each rack, 10 minutes. Reduce heat to 350°, swap sheet positions, and bake until centers are almost but not completely set, 7 to 10 minutes more. Remove from oven. Bang sheets on a counter a few times to create cracks in tops of cookies. Place sheets on a wire rack; let cool completely."
    ]
  },
  {
    title: "Giant Ginger Cookies",
    emoji: "🫚",
    desc: "Big, chewy molasses-ginger cookies rolled in coarse sugar.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "40 min", cook: "55 min", serves: "25 cookies",
    ingredients: [
      "4 1/2 cups all-purpose flour",
      "4 tsp. ground ginger",
      "2 tsp. baking soda",
      "1 1/2 tsp. ground cinnamon",
      "1 tsp. ground cloves",
      "1/4 tsp. salt",
      "1 1/2 cups shortening",
      "2 cups granulated sugar",
      "2 eggs",
      "1/2 cup molasses",
      "3/4 cup coarse sugar or granulated sugar"
    ],
    steps: [
      "Preheat oven to 350°F. In a medium bowl stir together flour, ginger, baking soda, cinnamon, cloves, and 1/4 tsp. salt.",
      "In a large bowl beat shortening with a mixer on medium 30 seconds. Gradually beat in 2 cups granulated sugar until combined, scraping bowl as needed. Beat in eggs and molasses. Beat in flour mixture.",
      "Using a 1/4-cup measure, shape dough into 2-inch balls. Roll balls in coarse sugar to coat. Place 2 1/2 inches apart on ungreased cookie sheets.",
      "Bake until cookies are light brown and tops are puffed, 12 to 14 minutes. (Do not overbake or cookies will not be chewy.) Cool on cookie sheets 2 minutes. Remove; cool on a wire rack."
    ]
  },
  {
    title: "Sugar Cookie Wreaths",
    emoji: "🎄",
    desc: "Cutout sugar cookies decorated as holiday wreaths with icing and cinnamon candies.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "20 min", cook: "1 hr", serves: "50 cookies",
    ingredients: [
      "1 cup butter, softened",
      "1 1/2 cups granulated sugar",
      "1 1/2 tsp. baking powder",
      "2 eggs",
      "1 tsp. vanilla",
      "3 cups all-purpose flour",
      "Powdered Sugar Icing (separate recipe)",
      "Buttercream Frosting (separate recipe)",
      "Cinnamon candies"
    ],
    steps: [
      "In a large bowl beat butter with a mixer on medium to high 30 seconds. Add sugar and baking powder; beat until combined, scraping bowl as needed. Beat in eggs and vanilla. Beat in flour.",
      "Roll or shape the dough into wreath shapes and place on ungreased cookie sheets.",
      "Bake until edges are firm and bottoms are very light brown, 7 minutes. Remove; cool on a wire rack. Decorate as desired: dip cookies in Powdered Sugar Icing and let dry, then pipe Buttercream Frosting with a leaf tip and garnish with cinnamon candies."
    ]
  },
  {
    title: "Cherry Pie Bites",
    emoji: "🍒",
    desc: "Mini cream-cheese pastry cups filled with tart cherry pie filling and walnut streusel.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "30 min", cook: "1 hr", serves: "24 bites",
    ingredients: [
      "1/2 cup butter, softened",
      "3 oz. cream cheese, softened",
      "1 cup + 2 Tbsp. all-purpose flour, divided",
      "2 Tbsp. chopped toasted walnuts or pecans",
      "2 Tbsp. packed brown sugar",
      "1/8 tsp. ground nutmeg",
      "1 1/2 Tbsp. butter",
      "2 cups fresh or frozen unsweetened pitted tart red cherries (thawed if frozen)",
      "1/3 cup granulated sugar",
      "2 tsp. cornstarch"
    ],
    steps: [
      "Preheat oven to 325°F. In a medium bowl beat the 1/2 cup softened butter and the cream cheese until combined. Beat in 1 cup of the flour. Shape into 24 balls. Press the balls into the bottoms and up the sides of 24 ungreased mini (1 3/4-inch) muffin cups.",
      "For streusel, in a small bowl stir together the remaining 2 Tbsp. flour, the walnuts, brown sugar, and nutmeg. Using a pastry blender, cut in the 1 1/2 Tbsp. butter until mixture is crumbly.",
      "For filling, in a small saucepan combine cherries, granulated sugar, and cornstarch. Cook over medium until cherries release juices, stirring occasionally. Continue to cook, stirring constantly, until thick and bubbly. Spoon 1 heaping tsp. of the filling into each pastry-lined cup. Sprinkle filled cups evenly with streusel.",
      "Bake 25 to 30 minutes or until edges are light brown. Cool bites in pan on a wire rack 5 minutes. Carefully remove; cool on a wire rack."
    ]
  },
  {
    title: "Orange-Cranberry Cake",
    emoji: "🍊",
    desc: "A light yogurt cake studded with fresh cranberries and orange peel, baked in a tube pan.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "20 min", cook: "50 min", serves: "12",
    guesses: ["prep", "cook"],
    ingredients: [
      "Nonstick cooking spray",
      "2 cups all-purpose flour",
      "1 1/4 tsp. baking powder",
      "1/2 tsp. baking soda",
      "3 Tbsp. butter, softened",
      "1 cup sugar",
      "2 eggs",
      "2/3 cup plain fat-free yogurt",
      "2 cups fresh or frozen cranberries, chopped",
      "1 tsp. finely shredded orange peel",
      "Sifted powdered sugar (optional)"
    ],
    steps: [
      "Preheat oven to 350°F. Coat a 10-inch fluted tube pan with nonstick cooking spray; set aside. In a medium bowl combine flour, baking powder, and baking soda.",
      "In a large bowl beat butter with an electric mixer on medium speed for 30 seconds. Add sugar and beat until fluffy. Add eggs, one at a time, beating well after each. Alternately add flour mixture and yogurt to egg mixture, beating after each addition just until combined. Fold in cranberries and orange peel.",
      "Spoon batter into the prepared pan, spreading evenly. Bake about 40 to 45 minutes or until a toothpick inserted near the center comes out clean. Cool in pan on a wire rack 10 minutes. Remove from pan. Cool completely. If desired, sprinkle with powdered sugar."
    ]
  },
  {
    title: "Black & White Cookies",
    emoji: "🍪",
    desc: "Tender cakelike cookies glazed half in chocolate and half in vanilla (Ina Garten).",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "40 min", cook: "2 hr", serves: "16 cookies",
    guesses: ["serves"],
    ingredients: [
      "— Cookies: —",
      "14 Tbsp. (1 3/4 sticks) unsalted butter, at room temperature",
      "1 cup granulated sugar",
      "1 extra-large egg, at room temperature",
      "2 1/2 tsp. pure vanilla extract, divided",
      "1 3/4 cups all-purpose flour",
      "1/2 tsp. baking powder",
      "1/4 tsp. baking soda",
      "1/2 tsp. kosher salt",
      "1/3 cup sour cream",
      "— Chocolate Glaze: —",
      "4 Tbsp. unsalted butter",
      "5 oz. good-quality semisweet chocolate (such as Lindt), roughly chopped",
      "1/2 tsp. instant coffee granules",
      "— Vanilla Glaze: —",
      "2 cups sifted confectioners' sugar",
      "2 Tbsp. light corn syrup",
      "2 to 3 Tbsp. heavy cream"
    ],
    steps: [
      "Preheat the oven to 350°F. Line 2 sheet pans with parchment paper. Beat the butter and granulated sugar on medium-high until light and fluffy, about 2 minutes. Add the egg and 2 teaspoons of the vanilla; beat until combined. Sift together the flour, baking powder, baking soda, and salt. With the mixer on low, add the flour mixture alternately with the sour cream, beginning and ending with the flour, mixing just until combined.",
      "Using a 2-inch scoop (about 1/4 cup), scoop the batter onto the prepared sheet pans, spacing 2 inches apart.",
      "Bake for 10 minutes, then rotate and switch the pans from top to bottom rack. Bake another 6 to 8 minutes, until edges are lightly browned and a cake tester comes out clean. (Don't overbake!) Cool on pans 5 minutes, then transfer to a wire rack to cool completely.",
      "For chocolate glaze: Place the 4 Tbsp. butter, the chocolate, and coffee in a heatproof bowl and microwave on high 30 seconds. Stir and continue in 30-second increments until almost melted; stir vigorously until smooth. Turn cookies flat-side up. Hold a cookie and carefully pour chocolate glaze over half, forming a line down the middle. Repeat with remaining cookies. Allow to set 30 minutes.",
      "For vanilla glaze: Whisk together confectioners' sugar, corn syrup, the remaining 1/2 tsp. vanilla, and 2 Tbsp. of the cream, adding cream a few drops at a time until smooth, thick, and barely pourable. Pour vanilla glaze over the other half of each cookie, right up to the chocolate. Allow to set 30 minutes."
    ]
  },
  {
    title: "The Best Chocolate Cheesecake",
    emoji: "🍫",
    desc: "A rich chocolate cheesecake on a chocolate graham crust, topped with ganache.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "20 min", cook: "7 hr 20 min", serves: "12",
    ingredients: [
      "1 3/4 cups chocolate graham cracker crumbs (25 squares)",
      "1/2 cup butter, melted",
      "1 cup plus 2 Tbsp. sugar",
      "1 1/4 cups semisweet chocolate chips",
      "3/4 cup whipping cream",
      "3 (8-oz.) pkg. cream cheese, softened",
      "1/3 cup unsweetened cocoa powder",
      "3 eggs",
      "2 tsp. vanilla extract",
      "Berries and sweetened whipped cream, for garnish"
    ],
    steps: [
      "Preheat oven to 350°F. Lightly grease a 9-inch springform pan.",
      "For crust, mix together graham cracker crumbs, butter, and 2 Tbsp. sugar in a small bowl. Press mixture into bottom and 1 1/2 inches up sides of prepared pan. Bake 10 minutes. Let cool on a wire rack. Reduce oven temperature to 325°F.",
      "For filling, heat 1/4 cup chocolate chips and 1/4 cup cream in a small saucepan over medium-low heat, stirring constantly, until chips are melted. Remove from heat; let cool.",
      "Beat cream cheese and remaining 1 cup sugar in a large bowl with an electric mixer at medium speed until smooth. Beat in cocoa powder. Add eggs; beat at low speed until just combined. Beat in 1 tsp. vanilla and the melted chocolate mixture at low speed just until combined. Pour filling into cooled crust.",
      "Bake until edges are puffed and surface is almost firm, 45 to 50 minutes (center should still jiggle when pan is gently shaken). Run a small knife around edge of pan and let cool on a wire rack until room temperature, about 2 hours.",
      "For ganache, put remaining 1 cup chocolate chips in a medium heatproof bowl. Heat remaining 1/2 cup cream in a small saucepan over medium-high heat, stirring constantly, until just starting to simmer. Pour hot cream over chocolate chips; let stand 5 minutes. Add remaining 1 tsp. vanilla; stir until smooth.",
      "Spread ganache over cooled cheesecake. Chill at least 4 hours or up to 8 hours before serving. Cut into 12 slices. Garnish with berries and whipped cream."
    ]
  },
  {
    title: "Pumpkin Chai Cheesecake",
    emoji: "🎃",
    desc: "A pumpkin cheesecake on a homemade gingersnap crust, topped with chai-spiced streusel.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "50 min", cook: "6 hr 10 min", serves: "12",
    ingredients: [
      "— Gingersnap Crust: —",
      "3/4 cup plus 2 Tbsp. granulated sugar",
      "1/3 cup butter, softened",
      "1 egg",
      "1/4 cup molasses",
      "2 tsp. apple cider vinegar",
      "1 1/3 cups all-purpose flour",
      "1/2 tsp. baking soda",
      "1/2 tsp. ground cinnamon",
      "1/4 tsp. ground cardamom",
      "1 Tbsp. grated fresh ginger",
      "1/4 cup butter, melted",
      "— Chai Streusel: —",
      "3 Tbsp. sliced almonds",
      "3 Tbsp. packed brown sugar",
      "2 Tbsp. regular rolled oats",
      "1 Tbsp. whole wheat flour",
      "1/2 tsp. ground ginger",
      "1/2 tsp. ground cinnamon",
      "1/8 tsp. ground cardamom",
      "1/8 tsp. ground allspice",
      "1/8 tsp. ground cloves",
      "1 Tbsp. cold butter, cut into pieces",
      "— Pumpkin Filling: —",
      "1/2 cup butter, softened",
      "1 (8-oz.) pkg. cream cheese, softened",
      "1 cup packed brown sugar",
      "3 eggs",
      "1 (15-oz.) can pumpkin",
      "1 tsp. vanilla",
      "1/2 tsp. ground cinnamon",
      "1/2 tsp. orange zest",
      "Dash of ground nutmeg"
    ],
    steps: [
      "Preheat oven to 350°F. Line a cookie sheet with parchment paper; set aside.",
      "For the Gingersnap Crust: In a large bowl beat 3/4 cup sugar and softened butter on medium until light and fluffy. Add egg; beat until combined. Slowly add molasses and vinegar. In a medium bowl combine flour, baking soda, cinnamon, and cardamom. Add dry ingredients and ginger to butter mixture; beat until combined. (Reserve half the dough for another use.) Using a cookie scoop, drop dough 2 inches apart onto prepared cookie sheet. Bake 8 to 10 minutes. Cool completely on racks.",
      "Crumble cookies. Spread in a shallow baking pan. Bake 8 minutes; let cool. (Crumbs will crisp as they cool.) Finely crush the crumbs. Combine with melted butter and remaining 2 Tbsp. sugar. Press mixture into bottom and 1 inch up the sides of a 9-inch springform pan. Place the crust-lined springform pan in a shallow baking pan; set aside.",
      "For Chai Streusel: In a medium bowl stir together almonds, brown sugar, oats, whole wheat flour, ginger, cinnamon, cardamom, allspice, and cloves. Cut in cold butter until mixture resembles coarse crumbs; set aside.",
      "For Pumpkin Filling: In a large bowl beat butter, cream cheese, and brown sugar until combined. Add eggs, one at a time, beating after each until just combined. Add pumpkin, vanilla, cinnamon, orange zest, and nutmeg; beat until combined. Pour filling into crust. Scatter Chai Streusel in large clumps. Bake 50 to 60 minutes or until puffed around the edges and center is nearly set. Transfer to a wire rack; cool 30 minutes. Cover; chill at least 4 hours or overnight before serving."
    ]
  },
  {
    title: "Brown Butter Carrot Sheet Cake",
    emoji: "🥕",
    desc: "A spiced carrot sheet cake with a brown-butter cream cheese frosting.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "30 min", cook: "1 hr 45 min", serves: "24",
    ingredients: [
      "1 3/4 cups flour",
      "2 tsp. baking soda",
      "1/2 tsp. baking powder",
      "1 1/2 tsp. cinnamon",
      "1/2 tsp. ground allspice",
      "1/2 tsp. nutmeg",
      "1/2 tsp. plus a pinch of salt",
      "1 cup packed dark brown sugar",
      "4 eggs, at room temperature",
      "3/4 cup vegetable oil",
      "2 1/2 tsp. vanilla extract",
      "9 medium carrots, shredded (3 cups)",
      "1/2 cup chopped walnuts",
      "1/2 cup raisins",
      "6 Tbsp. unsalted butter",
      "1 (8-oz.) pkg. cream cheese, softened",
      "3 cups powdered sugar"
    ],
    steps: [
      "Preheat oven to 325°F. Grease a 12x16-inch baking pan and line with parchment paper. Whisk together flour, baking soda, baking powder, cinnamon, allspice, nutmeg, and 1/2 tsp. salt in a medium bowl.",
      "In a large bowl, beat brown sugar, eggs, oil, and 1 1/2 tsp. vanilla with an electric mixer at medium speed until well combined. Add half of flour mixture; mix at low speed until just combined. Add remaining flour mixture and mix until just combined.",
      "Fold in carrots, walnuts, and raisins. Pour batter into prepared pan and smooth out the top.",
      "Bake until cake is golden and a toothpick inserted into center comes out clean, 23 to 27 minutes. Transfer to a wire rack and let cool completely, about 30 minutes.",
      "Meanwhile, for frosting, melt butter in a small saucepan over medium heat and simmer, stirring frequently, until browned, fragrant, and foamy with brown bits, 5 to 10 minutes. Immediately pour into a small heat-safe bowl. Let cool to room temperature, about 30 minutes.",
      "Beat cream cheese in a large bowl until completely smooth. Add cooled brown butter; beat until thoroughly combined. Beat in powdered sugar, 1 cup at a time. Beat in remaining 1 tsp. vanilla and pinch of salt; beat until completely smooth, 1 to 2 minutes.",
      "Spread frosting over cooled cake. Chill until ready to serve. Cut into 24 pieces."
    ]
  },
  {
    title: "Carrot and Cilantro Soup",
    emoji: "🥕",
    desc: "A blended carrot, tomato, and cilantro soup finished with cream (vegetarian-adaptable).",
    tags: ["lunch", "dinner", "savory", "soup"],
    person: "Stefanie",
    prep: "20 min", cook: "1 hr", serves: "8",
    ingredients: [
      "1 Tbsp. olive oil",
      "2 large onions, chopped (4 cups)",
      "1 lb. medium carrots, chopped (2 2/3 cups)",
      "2 cloves garlic, chopped",
      "1 small fresh chile pepper (such as Fresno or jalapeño), sliced, plus more for garnish",
      "2 (28-oz.) cans whole tomatoes",
      "1 cup low-sodium vegetable stock",
      "1 medium bunch fresh cilantro, finely chopped, plus more leaves for garnish",
      "2 Tbsp. balsamic vinegar",
      "1 Tbsp. sugar",
      "1 Tbsp. Worcestershire sauce",
      "1/4 tsp. black pepper",
      "1 cup whipping cream, plus more for garnish"
    ],
    steps: [
      "Heat oil in a large pot over medium heat. Add onions, carrots, garlic, and chile pepper; cook, stirring occasionally, until tender, about 10 minutes. Stir in tomatoes, stock, half of the finely chopped cilantro, the vinegar, sugar, Worcestershire sauce, and black pepper. Bring to a boil; reduce heat to low and simmer, covered, stirring occasionally, until carrots are very tender, about 30 minutes. Let cool 15 minutes.",
      "Working in batches, transfer soup to a vented blender or food processor; blend until smooth. Return soup to pot and warm over medium heat, stirring occasionally, about 5 minutes.",
      "Remove soup from heat and stir in cream. Stir remaining finely chopped cilantro into soup before serving. Garnish with additional chile slices, cilantro leaves, and a swirl of cream."
    ]
  },
  {
    title: "Brown Butter-Caramel Blondies",
    emoji: "🍮",
    desc: "Brown-butter blondies with walnuts and chocolate, layered and drizzled with homemade caramel.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "40 min", cook: "1 hr 50 min", serves: "32 bars",
    ingredients: [
      "— Caramel: —",
      "1 1/2 cups granulated sugar",
      "1/4 cup light corn syrup",
      "1/4 cup water",
      "1/2 cup heavy cream",
      "3 Tbsp. unsalted butter, softened",
      "1/4 tsp. salt",
      "— Blondies: —",
      "Baking spray with flour",
      "1 1/2 cups unsalted butter",
      "4 large eggs",
      "2 1/2 cups packed light brown sugar",
      "1 tsp. vanilla extract",
      "3 1/2 cups all-purpose flour",
      "2 tsp. baking powder",
      "1 tsp. salt",
      "3/4 cup chopped walnuts, divided",
      "1 (4-oz.) semisweet chocolate bar, chopped, divided"
    ],
    steps: [
      "Prepare the Caramel: Bring granulated sugar, corn syrup, and water to a boil in a medium saucepan over medium-high. Boil, undisturbed, until mixture turns amber in color, about 10 minutes. Remove from heat; carefully stir in cream, butter, and salt until smooth. Cool until slightly thickened, about 30 minutes.",
      "Prepare the Blondies: Preheat oven to 350°F. Coat a 13- x 9-inch baking pan with baking spray with flour. Melt butter in a medium saucepan over medium, swirling occasionally, until butter browns and has a nutty aroma, about 10 minutes. Transfer to a large bowl; cool slightly, about 30 minutes. Whisk eggs, brown sugar, and vanilla into brown butter until shiny, about 30 seconds. Stir together flour, baking powder, and salt in a separate bowl. Gradually add flour mixture, 1/2 cup of the walnuts, and 2 ounces of the chocolate to the brown butter-egg mixture, stirring until combined. Spoon half of the batter into prepared pan. Bake 10 minutes.",
      "Remove pan from oven; drizzle with 1 cup cooled Caramel. Spoon remaining batter over top. Sprinkle with remaining 1/4 cup walnuts and 2 ounces chocolate. Return to oven; bake until golden and set, about 25 minutes. Cool completely in pan, about 1 hour. Slice into 32 bars. Drizzle with remaining Caramel just before serving."
    ]
  },
  {
    title: "Cappuccino Swirl Bars",
    emoji: "☕",
    desc: "No-bake espresso cheesecake bars swirled over a chocolate wafer crust.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "15 min", cook: "45 min, plus 4 hr chilling", serves: "32 bars",
    ingredients: [
      "— Crust: —",
      "Baking spray with flour",
      "3 cups chocolate wafer cookie crumbs (from 2 [9-oz.] pkg. chocolate wafer cookies, such as Nabisco Famous)",
      "1/2 cup butter, melted",
      "1/3 cup granulated sugar",
      "1 Tbsp. instant espresso granules",
      "1 large egg white, lightly beaten",
      "— Filling: —",
      "3 (8-oz.) pkg. cream cheese, softened",
      "1 1/3 cups granulated sugar",
      "1 cup heavy cream, divided",
      "2 Tbsp. instant espresso granules",
      "1 Tbsp. unsweetened cocoa",
      "— Garnish: —",
      "Chocolate-covered espresso beans, chopped"
    ],
    steps: [
      "Prepare the Crust: Preheat oven to 325°F. Coat a 13- x 9-inch baking pan with baking spray with flour. Stir together cookie crumbs, melted butter, sugar, espresso granules, and egg white in a large bowl until combined. Firmly press mixture into bottom of prepared pan. Bake until Crust is set, about 14 minutes. Cool completely, about 30 minutes.",
      "Prepare the Filling: Beat cream cheese and sugar in a stand mixer fitted with a paddle attachment on medium-high until smooth and creamy, about 3 minutes. Reduce speed to low; beat in 3/4 cup of the heavy cream. Increase speed to high; beat until stiff peaks form, about 2 minutes. Transfer 2 cups of the cream cheese mixture to a medium bowl; set aside. Dollop remaining 3 cups over cooled Crust.",
      "Place remaining 1/4 cup heavy cream in a small microwavable bowl; microwave on HIGH until just warm, about 20 seconds. Stir in espresso granules and cocoa until dissolved. Place in freezer; cool 10 minutes. Beat cooled mixture into the reserved cream cheese mixture on medium until smooth and thickened, about 1 minute. Dollop over the cream cheese mixture in the Crust. Using a spoon, swirl the espresso and plain mixtures together to the edges.",
      "Cover and refrigerate until very cold, at least 4 hours. Slice into 32 bars. Garnish with chopped chocolate-covered espresso beans."
    ]
  },
  {
    title: "Peanut Butter-Fudge Bars",
    emoji: "🥜",
    desc: "Brownie bars layered with a peanut butter filling and chocolate fudge topping.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "15 min", cook: "3 hr", serves: "32 bars",
    ingredients: [
      "Baking spray with flour",
      "1 (18 3/4-oz.) pkg. brownie mix (such as Ghirardelli)",
      "1 (10-oz.) pkg. peanut butter chips (about 1 3/4 cups)",
      "1 (14-oz.) can sweetened condensed milk",
      "1/2 cup creamy peanut butter",
      "1 tsp. vanilla extract",
      "Pinch of salt",
      "1 1/2 cups semisweet chocolate chips",
      "3/4 cup heavy cream",
      "1/2 cup roasted salted peanuts, chopped"
    ],
    steps: [
      "Preheat oven to 350°F. Spray a 13- x 9-inch baking pan with baking spray with flour. Prepare brownie mix according to package directions in the prepared pan, baking until a wooden pick inserted in the middle comes out clean, about 25 minutes. Cool completely, about 1 hour.",
      "Place peanut butter chips, sweetened condensed milk, peanut butter, vanilla, and salt in a medium microwavable bowl. Microwave on HIGH until smooth, stirring every 30 seconds. Spoon over cooled brownies, spreading in an even layer.",
      "Place chocolate chips and cream in a small microwavable bowl. Microwave on HIGH until melted and smooth, stirring every 30 seconds. Pour over the peanut butter layer, spreading evenly. Refrigerate until the top chocolate layer is firm, about 1 hour. Sprinkle with peanuts. Slice into 32 bars."
    ]
  },
  {
    title: "Peach-and-Blackberry Crisp",
    emoji: "🍑",
    desc: "A summer peach and blackberry crisp with an honey-oat topping.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "20 min", cook: "1 hr 25 min", serves: "8",
    ingredients: [
      "2 lb. ripe peaches, halved, pitted, and cut into 1/2-inch wedges",
      "3 cups fresh blackberries (15 oz.)",
      "1/2 cup granulated sugar",
      "2 Tbsp. cornstarch",
      "2 tsp. fresh lemon juice (from 1 small lemon)",
      "1 cup uncooked quick-cooking oats",
      "1 cup all-purpose flour",
      "1/3 cup honey",
      "1/2 tsp. kosher salt",
      "1/2 tsp. ground cinnamon",
      "1/4 tsp. ground cardamom",
      "1/8 tsp. ground nutmeg",
      "1/2 cup plus 1 Tbsp. cold unsalted butter, cubed",
      "Lemon zest (optional)"
    ],
    steps: [
      "Preheat oven to 350°F. Gently toss together peaches, blackberries, granulated sugar, cornstarch, and lemon juice in a large bowl. Transfer fruit to a lightly greased 11- x 7-inch baking dish.",
      "Toss together oats, flour, honey, kosher salt, cinnamon, cardamom, and nutmeg in a medium bowl; add cubed butter. Using your hands, combine until mixture is crumbly. Sprinkle topping evenly over fruit.",
      "Bake in preheated oven until top is golden brown and fruit mixture is bubbling, 45 to 50 minutes. Remove from oven, and cool 15 minutes. If desired, sprinkle with lemon zest before serving."
    ]
  },
  {
    title: "Raspberry-Almond Crumble Bars",
    emoji: "🫐",
    desc: "Buttery oat-almond crumble bars with a thick cooked raspberry filling.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "25 min", cook: "4 hr 10 min", serves: "32 bars",
    ingredients: [
      "— Filling: —",
      "6 cups (26 oz.) fresh or thawed frozen raspberries",
      "3/4 cup seedless raspberry jam",
      "1/2 cup granulated sugar",
      "6 Tbsp. cornstarch",
      "1 1/2 tsp. lemon zest (from 1 lemon)",
      "— Crumble: —",
      "Cooking spray",
      "2 cups all-purpose flour",
      "1 1/2 cups uncooked old-fashioned regular rolled oats",
      "1 1/2 cups packed light brown sugar",
      "1 cup sliced almonds",
      "1/2 tsp. ground cinnamon",
      "1/4 tsp. baking soda",
      "1 cup butter, melted"
    ],
    steps: [
      "Prepare the Filling: Stir together the first five ingredients in a saucepan. Bring to a boil over medium-high, stirring occasionally. Reduce heat to medium-low; cook, stirring often, until thickened and reduced to 3 1/2 cups, 8 to 10 minutes. Cool completely, about 1 hour.",
      "Prepare the Crumble: Preheat oven to 350°F. Spray a 13- x 9-inch baking pan with cooking spray. Line bottom and sides with parchment, leaving a 2-inch overhang on all sides. Stir together flour, oats, brown sugar, almonds, cinnamon, and baking soda in a large bowl. Stir in melted butter until combined. Firmly press 4 cups of the Crumble mixture into the bottom of the prepared pan. Bake until lightly browned around edges, 10 to 12 minutes. Cool 5 minutes.",
      "Spread cooled Filling over warm crust; sprinkle with remaining Crumble. Bake at 350°F until filling is bubbly, 35 to 40 minutes. Cool completely in pan, about 2 hours. Lift bars out using parchment. Slice into 32 bars."
    ]
  },
  {
    title: "Spiced Pecan Pie Bars",
    emoji: "🥧",
    desc: "Shortbread-crusted pecan pie bars spiced with cinnamon and ginger.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "10 min", cook: "2 hr", serves: "32 bars",
    ingredients: [
      "— Crust: —",
      "Baking spray with flour",
      "3 cups all-purpose flour",
      "1 cup cold unsalted butter, cubed",
      "3/4 cup unsifted powdered sugar",
      "1 tsp. kosher salt",
      "— Filling: —",
      "4 large eggs",
      "1 cup light corn syrup",
      "2/3 cup packed light brown sugar",
      "1/2 cup honey",
      "1/4 cup all-purpose flour",
      "1/4 cup unsalted butter, melted",
      "1 tsp. ground cinnamon",
      "1/2 tsp. kosher salt",
      "1/2 tsp. ground ginger",
      "3 cups pecans, coarsely chopped"
    ],
    steps: [
      "Prepare the Crust: Preheat oven to 350°F. Spray a 13- x 9-inch baking pan with baking spray with flour. Line bottom and sides with parchment paper, leaving a 2- to 3-inch overhang on 2 sides. Place flour, butter, powdered sugar, and salt in a food processor. Pulse until coarse crumbs form, 6 to 7 times. Firmly press mixture into the bottom of the prepared pan. Bake until light golden brown, about 20 minutes. (Crust will have cracks.)",
      "Prepare the Filling: Whisk together eggs, corn syrup, brown sugar, honey, flour, melted butter, cinnamon, salt, and ginger in a bowl until smooth. Stir in pecans. Pour over warm Crust. Bake at 350°F until Filling is set, 25 to 30 minutes. Cool completely in pan, about 1 hour. Slice into 32 bars."
    ]
  },
  {
    title: "Ultimate Dark Chocolate Brownies",
    emoji: "🍫",
    desc: "Intensely dark chocolate brownies with bourbon, espresso, and flaky sea salt.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "30 min", cook: "2 hr", serves: "32 bars",
    ingredients: [
      "Baking spray with flour",
      "3 (4-oz.) bittersweet chocolate bars (such as Ghirardelli), chopped (about 2 cups)",
      "1 cup unsalted butter",
      "4 large eggs",
      "3/4 cup granulated sugar",
      "3/4 cup packed light brown sugar",
      "3 Tbsp. (1 1/2 oz.) bourbon",
      "2 Tbsp. instant espresso granules",
      "1 1/2 cups all-purpose flour",
      "1/2 tsp. kosher salt",
      "3 (4-oz.) semisweet chocolate bars, chopped (about 2 cups), divided",
      "1 tsp. flaky sea salt"
    ],
    steps: [
      "Preheat oven to 350°F. Coat a 13- x 9-inch baking pan with baking spray with flour. Bring a medium pot with 1 inch of water to a simmer over low. Set a medium-size heatproof glass bowl over the pot. Add chopped bittersweet chocolate and butter; cook, stirring occasionally, until melted, about 2 minutes. Remove from heat; cool slightly, about 10 minutes.",
      "Whisk eggs, granulated sugar, brown sugar, bourbon, and espresso granules into the cooled chocolate-butter mixture until well combined. Stir in flour and kosher salt until combined. Pour half of the batter into the prepared pan. Sprinkle with 1 cup of the chopped semisweet chocolate. Top with remaining batter, smoothing with an offset spatula. Sprinkle with remaining 1 cup chopped semisweet chocolate.",
      "Bake until center is set, about 25 minutes. Remove from oven; sprinkle with flaky sea salt. Cool completely in pan, about 1 hour. Slice into 32 bars."
    ]
  },
  {
    title: "Deep-Dish Berry Cobbler",
    emoji: "🫐",
    desc: "A triple-berry deep-dish cobbler under a lattice piecrust.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "15 min", cook: "1 hr 30 min", serves: "8",
    ingredients: [
      "4 cups fresh raspberries (about 21 oz.)",
      "2 cups fresh blackberries (about 9 oz.)",
      "2 cups fresh blueberries (about 9 oz.)",
      "1/2 cup granulated sugar",
      "1/4 cup cornstarch",
      "2 Tbsp. butter, cut into small cubes",
      "1 Tbsp. lemon zest (from 2 lemons)",
      "2 tsp. vanilla extract",
      "1/2 tsp. kosher salt",
      "1/2 tsp. ground cinnamon",
      "1/4 tsp. ground nutmeg",
      "1/2 (14.1-oz.) pkg. refrigerated piecrusts (1 crust)",
      "1 large egg",
      "1-2 Tbsp. turbinado sugar",
      "Sweetened whipped cream, for serving"
    ],
    steps: [
      "Preheat oven to 375°F. Stir together berries, granulated sugar, cornstarch, butter, lemon zest, vanilla, salt, cinnamon, and nutmeg in a large bowl. Let stand 15 minutes, gently stirring occasionally. Spoon berry mixture into a 2-quart baking dish.",
      "Roll piecrust out on a lightly floured surface into a 14-inch circle. Using a fluted cutter, cut piecrust into 1-inch-wide strips, and arrange in a lattice pattern on top of berries. Whisk together egg and 1 tablespoon water in a small bowl. Brush piecrust strips with egg mixture, and sprinkle with turbinado sugar.",
      "Bake until filling is bubbly and crust is golden brown, about 55 minutes, covering with aluminum foil after 45 to 50 minutes to prevent excessive browning. Serve warm with whipped cream."
    ]
  },
  {
    title: "Blueberry-Orange-Ginger Cobblers",
    emoji: "🫐",
    desc: "Individual blueberry cobblers with orange and ginger, topped with cream biscuits.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "15 min", cook: "1 hr, plus 30 min cooling", serves: "6",
    ingredients: [
      "2 cups all-purpose flour",
      "1 Tbsp. baking powder",
      "1/2 tsp. kosher salt",
      "1/3 cup, plus 1 Tbsp. granulated sugar, divided",
      "1/2 cup butter, cut into 1/2-inch cubes",
      "1 cup, plus 1 Tbsp. heavy cream, divided",
      "6 cups fresh blueberries (from 3 [9-oz.] containers)",
      "1/2 cup packed light brown sugar",
      "2 Tbsp. cornstarch",
      "1 Tbsp. orange zest (from 1 orange)",
      "2 tsp. grated fresh ginger (from 1 [1-in.] piece)",
      "Vanilla ice cream, for serving"
    ],
    steps: [
      "Preheat oven to 400°F. Stir together flour, baking powder, salt, and 1/3 cup of the granulated sugar in a large bowl. Cut butter into flour mixture with a pastry blender until crumbly and mixture resembles small peas. Freeze 5 minutes. Add 1 cup of the cream, stirring just until dry ingredients are moistened.",
      "Turn dough out onto parchment paper; gently press or pat into a 3/4-inch-thick, 9- x 6-inch rectangle. Cut into 6 (3- x 2-inch) rectangles. Place biscuits in a single layer on a baking sheet. Brush tops with the remaining 1 tablespoon cream, and sprinkle with the remaining 1 tablespoon granulated sugar. Refrigerate until ready to use.",
      "Stir together blueberries, brown sugar, cornstarch, orange zest, and grated ginger in a large bowl until well blended. Spoon berry mixture evenly into 6 (7- to 8-ounce) ramekins, 1 cup in each. Place on an aluminum foil-lined rimmed baking sheet.",
      "Bake in preheated oven 20 minutes. Remove from oven, and place 1 biscuit on each ramekin. Return to oven, and bake until biscuits are golden brown and done, about 18 more minutes. Cool on baking sheet on a wire rack at least 30 minutes. Serve with ice cream."
    ]
  },
  {
    title: "Cakey Strawberry Cobbler",
    emoji: "🍓",
    desc: "A buttermilk-batter strawberry cobbler that bakes up cakey around juicy berries.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "10 min", cook: "1 hr 30 min", serves: "6",
    ingredients: [
      "2 qt. fresh strawberries, hulled and halved, with larger ones quartered (about 2 lb. strawberries)",
      "1 Tbsp. lemon zest plus 2 Tbsp. fresh lemon juice (from 1 large lemon)",
      "1 cup granulated sugar, divided",
      "1/2 cup butter",
      "1 cup all-purpose flour",
      "1 1/2 tsp. baking powder",
      "1/2 tsp. kosher salt",
      "1/4 tsp. baking soda",
      "1 cup whole buttermilk",
      "1 tsp. vanilla extract",
      "Sweetened whipped cream or vanilla ice cream, for serving"
    ],
    steps: [
      "Preheat oven to 350°F. Gently stir sliced strawberries, lemon zest, lemon juice, and 1/4 cup of the sugar in a large bowl until totally combined. Let stand, stirring occasionally, until juicy, about 15 minutes.",
      "Place butter in a 13- x 9-inch baking dish, and put dish in the preheated oven until butter is melted, 8 to 10 minutes. Remove dish from oven.",
      "Whisk together flour, baking powder, salt, baking soda, and remaining 3/4 cup sugar in a medium bowl. Whisk together buttermilk and vanilla in a glass measuring cup. Whisk the buttermilk mixture into the flour mixture until smooth. Pour mixture evenly over the melted butter in the hot baking dish. (Do not stir.) Using a slotted spoon, scatter strawberry mixture evenly over the batter. Drizzle 3 tablespoons of the accumulated juice over the strawberries; discard remaining juice or reserve for another use.",
      "Bake until batter is puffed and slightly golden in the center and dark golden brown around edges, 40 to 45 minutes. Cool on a wire rack at least 15 minutes. Serve warm with whipped cream or ice cream."
    ]
  },
  {
    title: "Pineapple Upside Down Cake",
    emoji: "🍍",
    desc: "A skillet pineapple upside-down cake with a caramel base, inverted onto a platter.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "20 min", cook: "45 min", serves: "8",
    guesses: ["prep", "serves"],
    ingredients: [
      "1 1/2 cups flour",
      "2 tsp baking powder",
      "1/4 tsp salt",
      "6 Tablespoons unsalted butter (room temp), plus 3 Tablespoons (cut into small pieces) for preparing the top",
      "1 c sugar, plus 2/3 c for preparing the top",
      "2 large eggs",
      "1 tsp vanilla",
      "1/2 c milk",
      "7 thin rounds of pineapple"
    ],
    steps: [
      "Preheat oven to 350°. In a large bowl combine flour, baking powder, salt and set aside.",
      "With an electric mixer cream 6 Tablespoons butter and 1 c sugar until light and fluffy. Add eggs and vanilla; beat until combined. Add flour mixture in 3 additions alternately with milk in 2, beginning and ending with flour. Mix just until combined.",
      "In a 10-inch cast-iron skillet, add remaining sugar and butter over low heat and, while stirring, allow to turn a light caramel color. Then place the pineapple rings and top with batter.",
      "Carefully spoon batter over pineapples in skillet.",
      "Bake until a toothpick comes out clean, about 45 mins.",
      "Let cake cool in pan 5 mins. Run a knife around the edge of the cake, then carefully invert onto a platter. Serve warm or at room temp."
    ]
  },
  {
    title: "Our Best White Cake",
    emoji: "🎂",
    desc: "A classic three-layer white cake with vanilla buttercream.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "35 min", cook: "1 hr 55 min", serves: "10",
    ingredients: [
      "— Cake Layers: —",
      "1 cup unsalted butter, softened",
      "2 cups granulated sugar",
      "7 large egg whites, at room temperature",
      "1 tsp. vanilla extract",
      "1 tsp. almond extract",
      "2 3/4 cups all-purpose flour",
      "2 tsp. baking powder",
      "1 tsp. kosher salt",
      "1 cup whole milk",
      "— Vanilla Buttercream: —",
      "2 cups unsalted butter, softened",
      "7 cups powdered sugar",
      "1 tsp. vanilla extract",
      "1/8 tsp. kosher salt",
      "2/3 cup heavy cream",
      "— Garnishes: —",
      "Rosemary sprigs",
      "Powdered sugar",
      "Gingerbread Cookies (recipe follows)"
    ],
    steps: [
      "Prepare the Cake Layers: Preheat oven to 350°F. Lightly grease 3 (8-inch) round cake pans with cooking spray. Line bottoms with parchment paper rounds, and spray the paper.",
      "Combine butter and sugar in the bowl of a heavy-duty stand mixer fitted with a paddle attachment. Beat on medium-high until creamy and fluffy, 3 to 5 minutes. Scrape down sides. With mixer on low, add egg whites, 1 at a time, scraping down sides as needed. Add extracts, beating on low just until combined.",
      "Whisk together flour, baking powder, and salt in a bowl. Gradually add to egg mixture, alternating with milk, in 3 parts, beginning and ending with flour mixture, beating until blended after each addition. Divide batter evenly among prepared pans.",
      "Bake until a wooden pick inserted in center comes out clean and edges begin to pull away from pans, 24 to 26 minutes.",
      "Cool Cake Layers in pans on wire racks 15 minutes. Invert onto wire racks and cool completely, 30 minutes.",
      "Prepare the Vanilla Buttercream: Beat butter on medium-high until creamy, 1 to 2 minutes. Reduce speed to low and gradually add powdered sugar, beating about 2 minutes. Beat in vanilla and salt. With mixer on low, gradually add cream, beating until smooth and spreadable, about 2 minutes.",
      "Place 1 Cake Layer on a stand. Spread or pipe buttercream over top. Top with second layer; repeat. Top with third layer. Generously cover the cake with remaining buttercream, smoothing the top and sides. Garnish with rosemary sprigs and a dusting of powdered sugar."
    ]
  },
  {
    title: "Gingerbread Cookies",
    emoji: "🍪",
    desc: "Cutout gingerbread cookies decorated with royal icing.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "40 min", cook: "2 hr 30 min", serves: "4 dozen cookies",
    ingredients: [
      "— Cookies: —",
      "1 cup butter, softened",
      "1 cup granulated sugar",
      "1/2 tsp. baking soda",
      "1/4 cup hot water",
      "1 cup molasses",
      "5 1/2 cups all-purpose flour, plus more for work surface",
      "1 1/2 Tbsp. ground ginger",
      "1 1/2 tsp. ground cinnamon",
      "1/4 tsp. salt",
      "1/4 tsp. ground allspice",
      "— Royal Icing: —",
      "1 (16-oz.) pkg. powdered sugar",
      "3 Tbsp. meringue powder",
      "6-8 Tbsp. warm water"
    ],
    steps: [
      "Prepare the Cookies: Beat butter and granulated sugar in a stand mixer fitted with a paddle attachment on medium until creamy. Dissolve baking soda in the hot water; add to butter mixture along with the molasses, beating until combined.",
      "Whisk together flour, ginger, cinnamon, salt, and allspice. Gradually add to butter mixture, beating on low until a stiff dough forms. Divide in half, wrap in plastic, and chill until firm, about 1 hour.",
      "Preheat oven to 350°F. On a floured surface, roll dough to about 1/4-inch thick. Cut with 3- to 4-inch cookie cutters. Place on parchment-lined baking sheets. Bake until edges are set, 8 to 10 minutes. Cool on wire racks.",
      "Prepare the Royal Icing: Beat powdered sugar, meringue powder, and 6 tablespoons of the warm water with an electric mixer on low until combined, then on medium until smooth, about 2 minutes. Beat in additional warm water, 1 teaspoon at a time, until a pipeable consistency is reached.",
      "Spoon Royal Icing into a small ziplock plastic freezer bag with 1 corner snipped; pipe onto the cooled Cookies and let dry."
    ]
  },
  {
    title: "Grandma Gerad's Molasses Cookies",
    emoji: "🍪",
    desc: "Old-fashioned soft molasses cookies, optionally studded with soaked raisins (from Terry Allen).",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "15 min", cook: "10 min", serves: "about 3 dozen",
    guesses: ["prep", "serves"],
    ingredients: [
      "1 C sugar",
      "3/4 C butter",
      "1 egg",
      "3/4 C molasses",
      "1/2 C milk",
      "3/4 t soda, dissolved in 1/4 C hot water",
      "1 1/2 t ginger",
      "Flour, enough to make a stiff dough",
      "Raisins (optional, soaked)"
    ],
    steps: [
      "Soak raisins if you use some.",
      "Cream butter and sugar. Beat in the egg, molasses, and milk. Stir in the soda dissolved in hot water and the ginger. Add flour to make a stiff dough (fold in raisins, if using).",
      "Drop or roll onto baking sheets. Bake at 350° for about 10 minutes."
    ]
  },
  {
    title: "Ginger Hearts",
    emoji: "🫚",
    desc: "Chewy spiced cutout gingerbread cookies (can also be made into gingerbread men).",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "20 min", cook: "10 min", serves: "53 cookies",
    guesses: ["prep"],
    ingredients: [
      "2 1/2 cups all-purpose flour",
      "1 tablespoon baking powder",
      "1/4 teaspoon baking soda",
      "1/2 teaspoon salt",
      "1/4 teaspoon ground allspice",
      "1 tablespoon ground cinnamon",
      "1 teaspoon ground ginger",
      "1 teaspoon ground cloves",
      "1 egg",
      "1 cup firmly packed dark-brown sugar",
      "2/3 cup dark molasses",
      "1/2 cup butter, softened"
    ],
    steps: [
      "Preheat oven to 350°F.",
      "In a large bowl, stir together flour, baking powder, baking soda, salt, and spices.",
      "In another large bowl, beat egg and brown sugar. Add molasses and butter. Mix well. Add all dry ingredients and mix until combined. Roll dough into a ball and chill for 1/2 hour to 1 hour.",
      "Prepare greased cookie sheets. Roll dough 1/4 inch thick on a lightly floured board and cut with a 2-inch heart-shaped cookie cutter dipped in flour. Place hearts 1 1/2 inches apart on prepared cookie sheets.",
      "Bake for 10 minutes, until slightly firm to touch (do not let edges brown). Don't overbake or cookies will be very hard. Remove cookies to a wire rack to cool."
    ]
  },
  {
    title: "Chocolate Chip Cookies (Three Ways)",
    emoji: "🍪",
    desc: "One chocolate chip cookie base with three butter-and-sugar ratios for thin & crisp, soft & chewy, or light & cakey cookies.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "15 min", cook: "10 min", serves: "about 3 dozen",
    guesses: ["prep", "serves"],
    ingredients: [
      "— Thin & Crisp: —",
      "2 1/2 sticks unsalted butter, softened",
      "1 1/4 cups granulated sugar",
      "3/4 cup brown sugar",
      "— Soft & Chewy: —",
      "2 sticks unsalted butter, softened",
      "1/2 cup granulated sugar",
      "1 cup brown sugar",
      "— Light & Cakey: —",
      "1 3/4 sticks unsalted butter, softened",
      "3/4 cup granulated sugar",
      "1/4 cup brown sugar",
      "— Plus (for all): —",
      "2 1/4 cups all-purpose flour",
      "1/2 teaspoon baking soda",
      "1 teaspoon coarse salt",
      "2 teaspoons pure vanilla extract",
      "2 large eggs, room temperature",
      "2 cups (about 12 ounces) chocolate chips"
    ],
    steps: [
      "Preheat oven to 350 degrees. In a bowl, whisk together flour and baking soda. In another bowl, beat your chosen butter with both sugars until fluffy. Beat in salt, vanilla, and eggs until smooth. Mix in flour mixture until just combined. Stir in chips.",
      "Drop tablespoon-size balls of dough 2 inches apart onto parchment-lined baking sheets.",
      "Bake until cookies are golden around edges but still soft in center, 8 to 10 minutes. Transfer to a wire rack; let cool."
    ]
  },
  {
    title: "Chocolate Chunk Cookies",
    emoji: "🍪",
    desc: "Big bakery-style chocolate chunk cookies scooped with a 1/4-cup measure.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "15 min", cook: "14 min", serves: "2 dozen large",
    guesses: ["prep"],
    ingredients: [
      "1 3/4 cups flour",
      "1 cup minus 2 Tablespoons all-purpose flour",
      "1 tsp baking powder",
      "1 tsp baking soda",
      "1 1/2 cups butter, softened (3 sticks)",
      "1 1/4 cups sugar",
      "1 1/4 cups packed brown sugar",
      "2 large eggs",
      "1 Tbsp vanilla",
      "1 3/4 to 2 cups chocolate chunks (11.5 to 12 oz)"
    ],
    steps: [
      "Preheat oven to 375°.",
      "Combine both flours, baking powder, and soda in a bowl.",
      "Combine butter, sugar, and brown sugar in a large mixer bowl. Beat until creamy. Add eggs and vanilla; beat till well mixed.",
      "Gradually beat in the flour mixture. Stir in chocolate chunks.",
      "Drop by 1/4 cup, 2 inches apart, onto ungreased baking sheets.",
      "Bake 10 to 14 mins till golden brown. Cool on sheet for 2 mins, then move to cool completely."
    ]
  },
  {
    title: "Butter and Jam Thumbprints",
    emoji: "🍪",
    desc: "Buttery sugar-rolled thumbprint cookies filled with jam (Food Network Kitchens).",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "20 min", cook: "18 min", serves: "24 to 30 cookies",
    ingredients: [
      "1 3/4 cups all-purpose flour",
      "1/2 teaspoon baking powder",
      "1/2 teaspoon fine salt",
      "3/4 cup unsalted butter (1 1/2 sticks), softened",
      "2/3 cup sugar, plus more for rolling",
      "1 large egg",
      "1/2 vanilla bean, seeds scraped from pod (or 1/8 teaspoon vanilla bean paste or 1 teaspoon pure vanilla extract)",
      "1/3 cup raspberry, cherry or strawberry jam"
    ],
    steps: [
      "Preheat oven to 350 degrees F. Line 2 baking sheets with parchment paper or silicone mats.",
      "Whisk the flour, baking powder and salt together in a bowl.",
      "In another bowl, whip the butter and the sugar with a hand-held mixer until fluffy, about 5 minutes. Beat in the egg and vanilla until just combined. Slowly beat in the dry ingredients in 2 additions, mixing just until incorporated.",
      "Scoop the dough into 1-inch balls and roll in sugar. Place about 2 inches apart on the prepared baking sheets. Press a thumbprint into the center of each ball, about 1/2-inch deep. Fill each indentation with about 3/4 teaspoon jam.",
      "Bake until the edges are golden, about 15 minutes (rotate the pans top to bottom halfway through for even color). Cool cookies on the baking sheets. Serve."
    ]
  },
  {
    title: "Pumpkin Cheesecake",
    emoji: "🎃",
    desc: "A spiced pumpkin cheesecake with a bourbon sour cream topping on a graham crust (Karen Fegal).",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "20 min", cook: "1 hr", serves: "12",
    guesses: ["prep", "serves"],
    ingredients: [
      "— Crust: —",
      "1 cup graham cracker crumbs",
      "1 tablespoon sugar",
      "1 tablespoon softened butter (do not use margarine)",
      "1/2 teaspoon cinnamon",
      "— Filling: —",
      "2 (8-ounce) packages softened cream cheese",
      "3/4 cup sugar",
      "1 teaspoon vanilla",
      "1 tablespoon bourbon or whiskey",
      "3 eggs (at room temperature)",
      "1 cup canned pumpkin",
      "3/4 teaspoon cinnamon",
      "1/2 teaspoon ginger",
      "1/4 teaspoon cloves (or 1/4 teaspoon nutmeg)",
      "— Topping: —",
      "8-ounce container sour cream",
      "1/4 cup sugar",
      "3/4 teaspoon vanilla",
      "1 tablespoon bourbon or whiskey"
    ],
    steps: [
      "Crust: Mix together graham cracker crumbs, sugar, softened butter, and cinnamon. Pat into the bottom of a 9-inch springform pan and about 1/2 to 3/4 inch up the sides. Do not pre-bake.",
      "Filling: Beat together cream cheese, sugar, and vanilla, then add eggs one at a time, mixing thoroughly after each egg. Add bourbon, pumpkin, and spices for a final mix. Gently pour on top of the unbaked crumb crust.",
      "Bake 50-55 minutes at 350 degrees. Remove from oven, leaving the oven on. While the cake cools for 5 minutes, prepare the topping.",
      "Topping: Mix sour cream, sugar, vanilla, and bourbon with a mixer and gently pour over the cheesecake. Bake 5 minutes. Cool slightly, then refrigerate. (This is a thin topping.)"
    ]
  },
  {
    title: "Peanut Butter-Chocolate No-Bake Cookies",
    emoji: "🥜",
    desc: "Classic stovetop no-bake oat cookies with peanut butter and cocoa (Food Network Kitchen).",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "5 min", cook: "40 min", serves: "about 60 cookies",
    ingredients: [
      "2 cups sugar",
      "1/2 cup milk",
      "1 stick (8 tablespoons) unsalted butter",
      "1/4 cup unsweetened cocoa powder",
      "3 cups old-fashioned rolled oats",
      "1 cup smooth peanut butter",
      "1 tablespoon pure vanilla extract",
      "Large pinch kosher salt"
    ],
    steps: [
      "Line a baking sheet with wax paper or parchment.",
      "Bring the sugar, milk, butter and cocoa to a boil in a medium saucepan over medium heat, stirring occasionally, then let boil for 1 minute. Remove from the heat. Add the oats, peanut butter, vanilla and salt, and stir to combine.",
      "Drop teaspoonfuls of the mixture onto the prepared baking sheet, and let sit at room temperature until cooled and hardened, about 30 minutes. Refrigerate in an airtight container for up to 3 days."
    ]
  },
  {
    title: "Summer Peach Cake",
    emoji: "🍑",
    desc: "A fresh summer peach cake baked in a springform pan, layered with peaches and topped with almond-sugar.",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "30 min", cook: "1 hr", serves: "10",
    guesses: ["prep", "serves"],
    ingredients: [
      "2 1/2 lbs. peaches (skin on); set aside 24 half-inch slices for the top",
      "Splash of orange juice + 1 tsp lemon juice (for the top slices)",
      "3 Tablespoons sugar (for the top slices)",
      "2 Tablespoons sugar (for the peach chunks)",
      "2 tsp lemon juice (for the peach chunks)",
      "3 Tablespoons orange liqueur (for the peach chunks)",
      "— Batter: —",
      "1 cup flour",
      "3/4 tsp baking soda",
      "1/4 tsp baking powder",
      "2 large eggs",
      "1/2 cup sugar",
      "1/2 cup brown sugar (packed)",
      "8 Tablespoons melted butter",
      "1/4 cup sour cream",
      "1/2 tsp almond extract",
      "1 1/2 tsp vanilla extract",
      "— Topping: —",
      "3 Tablespoons sugar",
      "1/8 tsp almond extract"
    ],
    steps: [
      "Spray a 9-inch springform pan. Set the 24 half-inch peach slices aside for the top; toss them with a splash of orange juice, 1 tsp lemon juice, and 3 Tablespoons sugar, and leave at room temperature about 1/2 hour.",
      "Cut up half of the peaches into chunks and toss with 2 Tablespoons sugar, 2 tsp lemon juice, and 3 Tablespoons orange liqueur. Let macerate.",
      "For the batter: Whisk together flour, baking soda, and baking powder. Whisk in eggs, sugar, brown sugar, melted butter, sour cream, almond extract, and vanilla until combined.",
      "Add half of the batter to the pan and smooth around. Layer all the peach chunks in. Add the rest of the batter on top and smooth out. Arrange the reserved peach slices on top.",
      "Topping: Mix 3 Tablespoons sugar and 1/8 tsp almond extract together with your fingers and sprinkle on top of the cake.",
      "Bake at 350° for 50 to 60 mins (toothpick test). Let cool in pan 5 mins, loosen sides all around with a knife, remove the springform pan, and let cool completely."
    ]
  },
  {
    title: "No-Bake Eclair Cake",
    emoji: "🍫",
    desc: "Layers of graham crackers, vanilla pudding, and whipped topping under chocolate frosting (The Country Cook).",
    tags: ["dessert", "sweet"],
    person: "Stefanie",
    prep: "20 min", cook: "20 min", serves: "12",
    ingredients: [
      "2 (3.5 ounce) packages instant vanilla pudding mix",
      "8 ounce tub whipped topping (Cool Whip), thawed",
      "3 cups milk",
      "2 sleeves graham cracker squares",
      "16 ounce container chocolate frosting"
    ],
    steps: [
      "In a medium bowl, mix together the pudding mix, milk and Cool Whip.",
      "In a 9x13-inch baking dish, arrange a single layer of graham cracker squares on the bottom (break them up as needed to cover the bottom).",
      "Spread half of the pudding mixture on top of the crackers.",
      "Layer another layer of graham crackers over the pudding mixture.",
      "Layer the other half of the pudding mixture on top of the crackers.",
      "Top with a final layer of graham crackers. Cover with plastic wrap and refrigerate 30 minutes to an hour to allow the pudding to set.",
      "Microwave the chocolate frosting (lid and foil removed) about 15 seconds to soften; stir until easily spreadable. Spread evenly over the top layer of graham crackers.",
      "Cover and chill overnight. This dessert gets better over time as the graham crackers soften."
    ]
  },
  {
    title: "Aunt Donnie's Sugar Cookies",
    emoji: "🍪",
    desc: "Classic rolled and cut-out sugar cookies, ready to decorate.",
    tags: ["dessert", "sweet"],
    person: "Carlene",
    prep: "15 min", cook: "10 min", serves: "about 3 dozen",
    guesses: ["prep", "serves"],
    ingredients: [
      "1 c marg/butter combo",
      "1 1/2 c sugar",
      "1 egg",
      "1 1/2 t vanilla",
      "3/4 t baking powder",
      "3/4 t salt",
      "3 c flour"
    ],
    steps: [
      "Cream together wet ingredients. Add food coloring if desired. Whisk together and add dry ingredients.",
      "Roll out on a floured surface to 1/4 inch thick.",
      "Bake at 350° for 10 minutes on a greased cookie sheet.",
      "Decorate if desired."
    ]
  },
  {
    title: "Apple Squares",
    emoji: "🍎",
    desc: "A cinnamon apple snack cake baked in a 9x13, dusted with cinnamon sugar.",
    tags: ["dessert", "sweet"],
    person: "Carlene",
    prep: "15 min", cook: "45 min", serves: "12",
    guesses: ["prep", "serves"],
    ingredients: [
      "1 3/4 c sugar",
      "3 eggs",
      "1 c vegetable oil",
      "1 t vanilla",
      "1/2 t salt",
      "1 t cinnamon",
      "1 t baking powder",
      "2 c flour",
      "2 cups thinly sliced apples (cortland or macs best)"
    ],
    steps: [
      "Mix ingredients in order until creamed together.",
      "Add 2 cups thinly sliced apples (cortland or macs best).",
      "Bake in a greased 9x13 pan for 40-45 minutes at 350°.",
      "Sprinkle with cinnamon and sugar after removed from oven."
    ]
  },
  {
    title: "Chocolate Frosting",
    emoji: "🍫",
    desc: "A simple cooked-butter cocoa frosting (pairs with the Hershey's Chocolate Cake).",
    tags: ["dessert", "sweet"],
    person: "Carlene",
    prep: "10 min", cook: "0 min", serves: "frosts 1 cake",
    guesses: ["prep"],
    ingredients: [
      "1/2 c butter (not margarine)",
      "2/3 c cocoa",
      "3 c confectioner's sugar",
      "1/3 c milk",
      "1 t vanilla"
    ],
    steps: [
      "Melt butter, stir in cocoa.",
      "Add milk and sugar alternately and mix together.",
      "Add vanilla and mix on medium."
    ]
  },
  {
    title: "Hershey's Chocolate Cake",
    emoji: "🍫",
    desc: "The classic moist Hershey's chocolate cake (pair with the Chocolate Frosting).",
    tags: ["dessert", "sweet"],
    person: "Carlene",
    prep: "15 min", cook: "35 min", serves: "12",
    guesses: ["prep", "serves"],
    ingredients: [
      "2 c sugar",
      "1 3/4 c flour",
      "3/4 c baking cocoa",
      "1 1/2 t baking powder",
      "1 1/2 t baking soda",
      "1 t salt",
      "2 eggs",
      "1 cup milk",
      "1/2 c veg oil",
      "2 t vanilla",
      "1 c boiling water"
    ],
    steps: [
      "Combine dry ingredients then add remaining. Beat for 2 minutes at medium speed. Batter will be thin.",
      "Bake at 350° in greased and floured pans (round) or 9x13 for 30-35 minutes.",
      "Cool 10 minutes before removing from pan."
    ]
  },
  {
    title: "Best Sweet Cornbread",
    emoji: "🌽",
    desc: "A sweet, tender cornbread baked in a 9x13 pan.",
    tags: ["side", "sweet"],
    person: "Carlene",
    prep: "10 min", cook: "40 min", serves: "12",
    guesses: ["prep", "serves"],
    ingredients: [
      "1 c cornmeal",
      "3 c flour",
      "1 1/3 c sugar",
      "2 T baking powder",
      "1 t salt",
      "2/3 c veg oil",
      "1/3 c melted butter",
      "2 T honey",
      "4 eggs, beaten",
      "2 1/2 c milk"
    ],
    steps: [
      "Whisk dry ingredients together. Add wet ingredients and stir just to moisten. Combine — do not overmix!",
      "Pour into a greased 9x13 pan.",
      "Bake at 350° 40 minutes or until top is cracking and slightly brown."
    ]
  },
  {
    title: "Chocolate Crinkles",
    emoji: "🍪",
    desc: "Fudgy chocolate cookies rolled in confectioner's sugar that crackle as they bake.",
    tags: ["dessert", "sweet"],
    person: "Carlene",
    prep: "20 min", cook: "10 min, plus 2 hr chill", serves: "about 3 dozen",
    guesses: ["prep", "serves"],
    ingredients: [
      "1/2 c margarine",
      "4 squares unsweetened chocolate",
      "2 c sugar",
      "4 eggs",
      "2 t vanilla",
      "3 3/4 c flour",
      "2 t baking powder",
      "1/2 t salt",
      "Confectioner's sugar (for rolling)"
    ],
    steps: [
      "Melt margarine and chocolate, then add sugar, eggs and vanilla.",
      "Whisk together, then add dry ingredients. Chill 2 hours.",
      "Scoop 1 inch balls and roll in confectioner's sugar.",
      "Bake at 375° for 10 min on a greased cookie sheet.",
      "Cool at least 5 min before removing to cooling rack."
    ]
  },
  {
    title: "Best Banana Bread",
    emoji: "🍌",
    desc: "A moist banana loaf made fluffy with sour cream (or mayo), baked over parchment.",
    tags: ["breakfast", "sweet"],
    person: "Carlene",
    prep: "15 min", cook: "55 min", serves: "1 loaf",
    guesses: ["prep", "serves"],
    ingredients: [
      "1/2 c margarine (room temp)",
      "1 c sugar",
      "2 eggs (room temp)",
      "1 1/2 c flour",
      "1 t soda",
      "1 t salt",
      "2 mashed ripe bananas (about 1 cup)",
      "1/2 c sour cream or mayo",
      "1 t vanilla"
    ],
    steps: [
      "Mix margarine, sugar and eggs till fluffy.",
      "Whisk flour, soda and salt together, then add to wet ingredients.",
      "Add: 2 mashed ripe bananas (about 1 cup), sour cream or mayo, and vanilla.",
      "Pour into a greased loaf pan with parchment paper on the bottom.",
      "Bake at 350° for 50-55 min."
    ]
  },
  {
    title: "Apple Pie",
    emoji: "🥧",
    desc: "A classic double-crust apple pie with Cortland or Mac apples and warm spices.",
    tags: ["dessert", "sweet"],
    person: "Carlene",
    prep: "25 min", cook: "45 min", serves: "8",
    guesses: ["prep", "serves"],
    ingredients: [
      "2 thawed pie crusts (room temp)",
      "6-8 cortland or mac apples, pared",
      "1/3 c sugar",
      "1/3 c flour",
      "1/2 t nutmeg",
      "1/2 t ginger",
      "1/2 t cinnamon",
      "1/2 t allspice",
      "1 t lemon juice",
      "4 t butter"
    ],
    steps: [
      "Pare 6-8 cortland or mac apples.",
      "Toss in a large bowl with the sugar, flour, nutmeg, ginger, cinnamon, allspice and lemon juice. Criss cross and toss together with 2 sharp knives.",
      "Pour into bottom crust. Place 4 t butter around top of apples.",
      "Cover with top crust, cutting 4-6 vents.",
      "Bake at 375° for 40-45 min."
    ]
  },
  {
    title: "Auntie Jan's Soda Bread",
    emoji: "🍞",
    desc: "A round buttermilk soda bread with an X cut on top, brushed with butter while it bakes.",
    tags: ["side", "breakfast"],
    person: "Carlene",
    prep: "15 min", cook: "50 min", serves: "1 loaf",
    guesses: ["prep", "serves"],
    ingredients: [
      "— Combine: —",
      "4 c flour",
      "4 T sugar",
      "1 t baking soda",
      "1 T baking powder",
      "1/2 t salt",
      "1/2 c margarine or butter",
      "— Stir in: —",
      "1 c buttermilk",
      "1 egg",
      "— Brushing mixture: —",
      "1/4 c butter (melted)",
      "1/4 c buttermilk"
    ],
    steps: [
      "Combine flour, sugar, baking soda, baking powder, salt and margarine or butter.",
      "Stir in buttermilk and egg.",
      "Knead in bowl or slightly floured surface.",
      "Form into round boule and place on a greased cookie sheet. Use a sharp knife to cut an X on top.",
      "Combine 1/4 c butter (melted) with 1/4 c buttermilk and brush loaf with mixture.",
      "Bake at 375° for 45-50 minutes. Use mixture to brush 2-3 times while baking."
    ]
  },
  {
    title: "Easy Artisan Bread",
    emoji: "🥖",
    desc: "A no-knead dutch oven artisan loaf with a crackly crust — just four ingredients.",
    tags: ["side"],
    person: "Carlene",
    prep: "15 min, plus 3 hr rise", cook: "45 min", serves: "1 loaf",
    guesses: ["prep", "serves"],
    ingredients: [
      "3 c flour",
      "1 pkg (2 t) rapid rise yeast",
      "2 t kosher salt",
      "1 1/2 c very warm tap water"
    ],
    steps: [
      "Mix flour, yeast and salt, then add water (wet and sloppy).",
      "Cover and let rise for 3 hours until doubled in size/volume. (Can be refrigerated for up to 3 days.)",
      "Put dutch oven with lid in oven and preheat to 450°.",
      "Turn dough onto floured surface. Fold sides inward with dough scraper into rough ball to deflate bubbles.",
      "Flip onto parchment, smooth side up. Remove dutch oven, use paper to place dough in pot and cover.",
      "Bake 30 min covered, then 15 min uncovered.",
      "Cool at least 10 min on rack before slicing."
    ]
  }
];
