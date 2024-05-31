const data = [
    {
    title: "Boudin Blanc Terrine with Red Onion Confit ",
    calories: 403,
    protein: 18,
    fat: 23,
    sodium: 1439,
    image: "https://img-3.journaldesfemmes.fr/YjalVrErI6HvbIn5L-lfTeNvIT8=/750x500/3467cee1c240470499827ea040247dd4/ccmcms-jdf/39886697.jpg"
    },
    {
    title: "Grouper with Tomato and Basil ",
    calories: 336,
    protein: 44,
    fat: 16,
    sodium: 413,
    image: "https://live.staticflickr.com/3326/3197198676_1e1795ce11.jpg"
    },
    {
    title: "Baked Halibut with Orzo, Spinach, and Cherry Tomatoes ",
    calories: 634,
    protein: 44,
    fat: 31,
    sodium: 181,
    image: "https://www.eatwell101.com/wp-content/uploads/2022/09/How-to-Bake-Halibut-in-the-Oven.jpg"
    },
    {
    title: "Grilled Roast Beef and Stilton Sandwich ",
    calories: 641,
    protein: 39,
    fat: 37,
    sodium: 907,
    image: "https://www.pillers.com/assets/pillers/images/hero/recipes/_640x695_crop_center-center_90_none/Beef-Header_2020-12-08-183734.jpg"
    },
    {
    title: "Cheese Ravioli with Fresh Tomato Sauce ",
    calories: 365,
    protein: 19,
    fat: 14,
    sodium: 599,
    image: "https://bigoven-res.cloudinary.com/image/upload/cheeseravioliwithfreshtomatoan-96e38b.jpg"
    },
    {
    title: "Grilled Pork Chops with Classic Barbecue Sauce ",
    calories: 599,
    protein: 48,
    fat: 28,
    sodium: 1038,
    image: "https://vid.milehighgrillandinn.com/1664505066192.jpg"
    },
    {
    title: "Salmon with Chili-Mango Salsa ",
    calories: 571,
    protein: 36,
    fat: 37,
    sodium: 106,
    image: "https://www.foxyfolksy.com/wp-content/uploads/2019/06/pan-grilled-salmon-with-mango-salsa-recipe.jpg"
    },
    {
    title: "Turkey and Pinto Bean Chili ",
    calories: 508,
    protein: 45,
    fat: 17,
    sodium: 826,
    image: "https://www.fromachefskitchen.com/wp-content/uploads/2017/12/Skillet-Turkey-and-Pinto-Bean-Chili-with-Pepper-Jack-Biscuit-Topping-2.jpg"
    },
    {
    title: "Escarole and Cheese Spoon Bread ",
    calories: 338,
    protein: 15,
    fat: 18,
    sodium: 515,
    image: "https://i.pinimg.com/originals/17/0b/f4/170bf47c2121ad0f2b234c35530f04b1.jpg"
    },
    {
    title: "Roast Cod with Potatoes, Onions, and Olives ",
    calories: 679,
    protein: 55,
    fat: 36,
    sodium: 333,
    image: "https://i.pinimg.com/originals/f0/cc/f2/f0ccf2ce9971322615ea66fb35ba8640.png"
    },
    {
    title: "Spicy Sesame Noodles with Chopped Peanuts and Thai Basil ",
    calories: 724,
    protein: 21,
    fat: 28,
    sodium: 1130,
    image: "https://i.pinimg.com/736x/b2/65/40/b26540ddcc06840530b06d6930b170f7.jpg"
    },
    {
    title: "Country Sausage and Sage Dressing ",
    calories: 323,
    protein: 16,
    fat: 23,
    sodium: 656,
    image: "http://assets.epicurious.com/photos/561026a6f3a00aeb2f1d7b56/1:1/w_600%2Ch_600/104110.jpg"
    },
    {
    title: "Shrimp and Green Onion Pancakes ",
    calories: 439,
    protein: 20,
    fat: 20,
    sodium: 1763,
    image: "http://assets.epicurious.com/photos/5609a5b76a59cdb91b5ff588/master/pass/353891_hires.jpg"
    },
    {
    title: "Sage-Roasted Turkey with Caramelized Onions and Sage Gravy ",
    calories: 746,
    protein: 118,
    fat: 21,
    sodium: 483,
    image: "https://www.simplyscratch.com/wp-content/uploads/2020/11/Make-Ahead-Turkey-Gravy-l-SimplyScratch.com-makeahead-turkey-gravy-thanksgiving-homemade-fromscratch-23.jpg"
    },
    {
    title: "Shrimp Cakes with Andouille Sausage ",
    calories: 354,
    protein: 16,
    fat: 22,
    sodium: 930,
    image: "https://d3qvyul2tp4j8.cloudfront.net/x/ZeVu5ztzHK.jpg"
    },
    {
    title: "Red Wine Brasato with Glazed Root Vegetables ",
    calories: 940,
    protein: 100,
    fat: 38,
    sodium: 800,
    image: "https://assets.epicurious.com/photos/560dd81ff9a84192308a4fb3/1:1/w_600%2Ch_600/237035.jpg"
    },
    {
    title: "Baked Beans with Slab Bacon and Breadcrumbs ",
    calories: 473,
    protein: 23,
    fat: 19,
    sodium: 971,
    image: "https://www.acedarspoon.com/wp-content/uploads/2020/11/Easy-Bacon-Baked-Beans-Image-10-815x1024.jpg"
    },
    {
    title: "Pork Roast Braised with Milk and Fresh Herbs (Maiale al Latte ) ",
    calories: 689,
    protein: 85,
    fat: 34,
    sodium: 723,
    image: "https://www.carolinescooking.com/wp-content/uploads/2019/10/milk-braised-pork-ohead-pic.jpg"
    },
    {
    title: "Coq au Vin Nouveau ",
    calories: 724,
    protein: 42,
    fat: 26,
    sodium: 485,
    image: "https://cravinghomecooked.com/wp-content/uploads/2020/08/cog-au-vin-05.jpg"
    },
    {
    title: "Veal Scallops with Mushrooms and Herbs ",
    calories: 468,
    protein: 20,
    fat: 30,
    sodium: 586,
    image: "https://www.goodtaste.tv/wp-content/uploads/2020/02/Veal-Scallops.png"
    },
    {
    title: "Heirloom Tomato Salad with Blue Cheese ",
    calories: 514,
    protein: 15,
    fat: 30,
    sodium: 618,
    image: "http://reciperunner.com/wp-content/uploads/2015/06/HeirloomTomatoandBlueCheeseSalad6.jpg"
    },
    {
    title: "Fried Fish with Moroccan-Style Herb Sauce ",
    calories: 417,
    protein: 46,
    fat: 25,
    sodium: 127,
    image: "https://thumbs.dreamstime.com/z/fried-fish-herb-asian-food-style-151779269.jpg"
    },
    {
    title: "Kale with Sauteed Apple and Onion ",
    calories: 454,
    protein: 19,
    fat: 29,
    sodium: 136,
    image: "https://i0.wp.com/the-consumption.com/wp-content/uploads/2017/11/The-Consumption_Sauteed-Apple-and-Kale_steps2.jpg?resize=980%2C1307&amp;ssl=1"
    },
    {
    title: "Chicken, Corn, and Noodle Soup with Saffron ",
    calories: 318,
    protein: 38,
    fat: 10,
    sodium: 222,
    image: "https://i0.wp.com/fountainavenuekitchen.com/wp-content/uploads/2012/02/2022_1107_FAK_ChickenNoodleSoup_016.jpg?fit=2000%2C1333&amp;ssl=1"
    },
    {
    title: "Black Bean and Vegetable Wraps ",
    calories: 345,
    protein: 16,
    fat: 15,
    sodium: 418,
    image: "http://veggieprimer.com/wp-content/uploads/2015/03/Black-Bean-Wrap_1-680x450.jpg"
    },
    {
    title: "Beef Stroganoff with Tomatoes ",
    calories: 375,
    protein: 27,
    fat: 26,
    sodium: 110,
    image: "https://www.mealsbymolly.com/wp-content/uploads/2020/01/Beef-Stroganoff-2-1024x683.jpg"
    },
    {
    title: "Mashed Potato and Cauliflower Gratin ",
    calories: 369,
    protein: 15,
    fat: 21,
    sodium: 637,
    image: "https://4.bp.blogspot.com/-GQ8-EmQui4M/WgcWXR26QSI/AAAAAAAABQI/9G9VgW4l2LwH8iqHNhl_xKCgicPFxEU1gCLcBGAs/s1600/cauliflower-mashed-potatoes-vertical-d-1800.jpg"
    },
    {
    title: "Crab Cakes with Red Chili Mayonnaise ",
    calories: 640,
    protein: 21,
    fat: 33,
    sodium: 1183,
    image: "https://i.pinimg.com/originals/e7/af/ef/e7afef589da9f7e38ed743200358f6ae.jpg"
    },
    {
    title: "Linguine with Sausage, Mushroom and Cream Sauce ",
    calories: 787,
    protein: 45,
    fat: 26,
    sodium: 1006,
    image: "https://cdn11.bigcommerce.com/s-hd6k9/images/stencil/2048x2048/products/135/382/mushroom_ling__50903.1439214271.jpg?c=2"
    },
    {
    title: "Quick Sesame Chicken With Broccoli ",
    calories: 885,
    protein: 56,
    fat: 28,
    sodium: 865,
    image: "https://www.modernhoney.com/wp-content/uploads/2020/07/Sesame-Chicken-1-1810x2048.jpg"
    },
    {
    title: "Gingered Shrimp with Asian Noodles ",
    calories: 412,
    protein: 30,
    fat: 12,
    sodium: 976,
    image: "https://recipeflow.com/wp-content/uploads/2015/06/Gingered-Shrimp-With-Asian-Noodles.jpg"
    },
    {
    title: "Grilled Skirt Steak Tacos with Corn Relish ",
    calories: 489,
    protein: 28,
    fat: 27,
    sodium: 133,
    image: "http://cookingwithchefbryan.com/wp-content/uploads/2022/03/Skirt-Steak-Tacos-with-Grilled-Nopales-scaled.jpg"
    },
    {
    title: "Veal Scallops with Creamy Mushroom Sauce ",
    calories: 420,
    protein: 21,
    fat: 25,
    sodium: 576,
    image: "https://i.pinimg.com/originals/e1/a5/4f/e1a54f5e21a90d4a773908d55a429bc6.jpg"
    },
    {
    title: "Steamed Mussels with Sherry, Tomatoes and Garlic ",
    calories: 657,
    protein: 57,
    fat: 29,
    sodium: 1534,
    image: "https://i.pinimg.com/736x/10/ed/7c/10ed7ce153651cc651404304166ef4c3.jpg"
    },
    {
    title: "Egg Noodle, Chard, and Fontina Torte ",
    calories: 414,
    protein: 20,
    fat: 29,
    sodium: 998,
    image: "https://i.pinimg.com/736x/06/21/c1/0621c1f19876f283d50eb20ccf937c97--hanukkah-food-hanukkah-recipes.jpg"
    },
    {
    title: "Savory Parmesan Pain Perdu with Poached Eggs and Greens ",
    calories: 490,
    protein: 27,
    fat: 32,
    sodium: 738,
    image: "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_73,ar_16:9,w_1024/v1/img/recipes/37/15/63/k7v2uJzNSuzPmDDHJHWG_DSC_0882.jpg"
    },
    {
    title: "Dry-Rubbed Flank Steak with Grilled Corn Salsa ",
    calories: 494,
    protein: 41,
    fat: 23,
    sodium: 1136,
    image: "https://recipes-for-all.com/wp-content/uploads/2021/01/dry-rubbed-flank-steak-with-grilled-corn-salsa-e1611694901214.jpg"
    },
    {
    title: "Chicken and Nectarine Salad with Toasted Cumin Mayonnaise ",
    calories: 593,
    protein: 47,
    fat: 40,
    sodium: 318,
    image: "https://www.yourultimatemenu.com/wp-content/uploads/2019/01/Chicken-and-Nectarine-Summer-Salad-1466px-600x839@2x.jpg"
    },
    {
    title: "Spaghetti and Swiss Chard With Garlic Chips ",
    calories: 910,
    protein: 31,
    fat: 37,
    sodium: 1018,
    image: "https://i1.wp.com/smittenkitchen.com/wp-content/uploads/2015/05/spaghetti-with-swiss-chard-and-garlic-chips1.jpg?ssl=1"
    },
    {
    title: "Swordfish Tacos ",
    calories: 324,
    protein: 24,
    fat: 21,
    sodium: 104,
    image: "https://www.hintofhealthy.com/wp-content/uploads/2021/03/Swordfish-Tacos-1024x1024.jpg"
    },
    {
    title: "Cod, Potato, and Fennel Casserole ",
    calories: 369,
    protein: 31,
    fat: 15,
    sodium: 536,
    image: "https://assets.epicurious.com/photos/560ea162f9a84192308a952f/1:1/w_600%2Ch_600/107407.jpg"
    },
    {
    title: "Chicken Enchiladas ",
    calories: 532,
    protein: 25,
    fat: 32,
    sodium: 1329,
    image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Creamy-Chicken-Enchiladas_EXPS_DIA18_33124_B05_25_2b-4.jpg"
    },
    {
    title: "Sauteed Red Snapper with Creamed Fennel and Onion ",
    calories: 845,
    protein: 119,
    fat: 31,
    sodium: 463,
    image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/11/8/0/CCPLB204H_Sauteed-Red-Snapper-with-Arugula-Salad_s4x3.jpg.rend.hgtvcom.756.567.suffix/1510151300452.jpeg"
    },
    {
    title: "Spinach, Ham, and Cheese Pie (Pye of Several Things) ",
    calories: 595,
    protein: 26,
    fat: 37,
    sodium: 955,
    image: "https://i.pinimg.com/originals/a0/78/fd/a078fd3f7410ec335bc06a96f813fd37.jpg"
    },
    {
    title: "Salmon Fillet with Soy Glaze ",
    calories: 354,
    protein: 32,
    fat: 20,
    sodium: 674,
    image: "https://i.pinimg.com/originals/dd/2c/87/dd2c87926725c5591b2d35693060b6eb.jpg"
    },
    {
    title: "Grilled Lemon Pepper Chicken Breasts with Thyme Gremolata ",
    calories: 782,
    protein: 115,
    fat: 31,
    sodium: 231,
    image: "https://recipeland.com/images/r/772/fbf6c5c5d19d6c96b5ba_1024.jpg"
    },
    {
    title: "Pork on a Bun with Bourbon-Barbecue Sauce ",
    calories: 752,
    protein: 32,
    fat: 31,
    sodium: 1065,
    image: "https://www.manettas.com.au/wp-content/uploads/2021/05/BBQ-PORK-BUNS.jpg"
    },
    {
    title: "Vietnamese Shrimp and Pork Crepes ",
    calories: 651,
    protein: 29,
    fat: 38,
    sodium: 2640,
    image: "https://i.pinimg.com/originals/23/76/18/2376180538909d0326a2633f532f88d1.jpg"
    },
    {
    title: "Grilled Chicken with Goat Cheese Stuffing, Peppers, Onions and Two Salsas ",
    calories: 681,
    protein: 65,
    fat: 39,
    sodium: 411,
    image: "https://fthmb.tqn.com/IiQtpOGhu1O4htoVrQwZ_e46lqs=/1300x918/filters:fill(auto,1)/grilled-chicken-goat-cheese-13-56a8ba975f9b58b7d0f4a424.jpg"
    },
    {
    title: "Giant Chocolate Candy Bar With Peanuts and Nougat ",
    calories: 909,
    protein: 30,
    fat: 23,
    sodium: 1302,
    image: "https://www.thecocoabeancompany.com/custom/uploads/2020/05/IMG_1197.jpg"
    },
    {
    title: "Shrimp Salad with Zucchini and Basil ",
    calories: 366,
    protein: 18,
    fat: 29,
    sodium: 865,
    image: "https://daleandkatie.com/wp-content/uploads/2021/04/Shrimp-and-Zucchini-Salad.jpg"
    },
    {
    title: "Corn and Lobster Chowder ",
    calories: 506,
    protein: 29,
    fat: 26,
    sodium: 1117,
    image: "http://thesuburbansoapbox.com/wp-content/uploads/2016/08/Lobster-Corn-Chowder-2.jpg"
    },
    {
    title: "Country P�t� (P�t� de Campagne) ",
    calories: 397,
    protein: 18,
    fat: 33,
    sodium: 695,
    image: "https://i.pinimg.com/736x/73/22/ef/7322efe646ef12d4d5bc9748b4f6eadf--terrine-recipes-charcuterie.jpg"
    },
    {
    title: "Fava Bean, Asparagus, and Arugula Salad with Shaved Pecorino ",
    calories: 368,
    protein: 28,
    fat: 24,
    sodium: 793,
    image: "https://everybodylovesitalian.com/wp-content/uploads/2021/04/IMG_7798-e1521987051296.jpg"
    },
    {
    title: "Bacon, Cabbage and Gruy�re Pizza ",
    calories: 732,
    protein: 30,
    fat: 39,
    sodium: 1472,
    image: "https://www.yaycork.ie/wp-content/uploads/2019/03/Irish-pizza.jpg"
    },
    {
    title: "Potee ",
    calories: 712,
    protein: 51,
    fat: 40,
    sodium: 3291,
    image: "http://www.cuisineetsentiments.com/images/potee_5.jpg"
    },
    {
    title: "Tamarind-Glazed Turkey Burgers ",
    calories: 654,
    protein: 39,
    fat: 25,
    sodium: 1146,
    image: "https://www.fannetasticfood.com/wp-content/uploads/2019/05/curry-turkey-burgers.jpg"
    },
    {
    title: "Scallop Quenelles with Gingered Tomato Sauce ",
    calories: 323,
    protein: 23,
    fat: 19,
    sodium: 1505,
    image: "https://images.saymedia-content.com/.image/t_share/MTgyMjQ4MjQzOTI0NTc1NTYw/scallop-terrine-recipe-with-basil-white-corn-and-roasted-red-peppers-plus-scallop-faqs.jpg"
    },
    {
    title: "Grilled Tri-Tip Roast with Tequila Marinade and Cherry Tomato Relish ",
    calories: 548,
    protein: 48,
    fat: 35,
    sodium: 703,
    image: "https://bigw.recipes/wp-content/uploads/2019/05/bigw-recipes_featured_grilled-tri-tip-roast-with-tequila-marinade-800x530.jpg"
    },
    {
    title: "Hamburger Soup ",
    calories: 428,
    protein: 24,
    fat: 21,
    sodium: 445,
    image: "http://whattheforksfordinner.com/wp-content/uploads/2015/09/Hamburger-Soup3.jpg"
    },
    {
    title: "Squid Ink Pasta with Shrimp, Nduja, and Tomato ",
    calories: 603,
    protein: 31,
    fat: 22,
    sodium: 867,
    image: "https://i.redd.it/1t5l362pj5i71.jpg"
    },
    {
    title: "Pork Chile Verde with Red Chile Salsa ",
    calories: 431,
    protein: 25,
    fat: 27,
    sodium: 214,
    image: "https://i.pinimg.com/originals/ba/0b/e5/ba0be55515f3069337b8b71d00dd078b.jpg"
    },
    {
    title: "Mushroom-Herb Meat Loaf Eich ",
    calories: 525,
    protein: 41,
    fat: 33,
    sodium: 1002,
    image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Italian-Mushroom-Meat-Loaf_EXPS_GBBZ19_81678_C11_27_2b.jpg"
    },
    {
    title: "Vegetable Tortilla Lasagne ",
    calories: 682,
    protein: 28,
    fat: 39,
    sodium: 1316,
    image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Vegetarian-Tortilla-Lasagna_EXPS_SSCBZ18_41045_E08_30_6b-2.jpg"
    },
    {
    title: "Flourless Pistachio Cake with Strawberry Meringue ",
    calories: 460,
    protein: 15,
    fat: 26,
    sodium: 66,
    image: "https://i.pinimg.com/originals/a3/3d/a6/a33da633920354d82fd2601a8f5f5056.jpg"
    },
    {
    title: "Sauteed Black Cod with Shallot-Lemon Vinaigrette and Fresh Herb Salad ",
    calories: 407,
    protein: 36,
    fat: 26,
    sodium: 734,
    image: "https://i.pinimg.com/736x/76/1e/f5/761ef5e9c8d17465f6c3f316b74332d0--black-cod-baked-cod.jpg"
    },
    {
    title: "Shawarma-Spiced Chicken Pita with Tahini-Yogurt Sauce ",
    calories: 497,
    protein: 42,
    fat: 25,
    sodium: 1060,
    image: "https://3.bp.blogspot.com/-QK8Wd3lOBps/Vt9nl8flxJI/AAAAAAAATZw/awwMsLXC1KM/s1600/chicken%2Bshawarma.jpg"
    },
    {
    title: "Poached Oysters and Artichokes with Champagne Cream ",
    calories: 586,
    protein: 32,
    fat: 32,
    sodium: 1585,
    image: "http://assets.epicurious.com/photos/591376c1541a4925861de1ee/master/pass/poached-oysters-and-artichokes-051017.jpg"
    },
    {
    title: "Lemon Gnocchi with Spinach and Peas ",
    calories: 537,
    protein: 20,
    fat: 10,
    sodium: 246,
    image: "https://www.seasonsandsuppers.ca/wp-content/uploads/2019/04/lemon-gnocchi-1.jpg"
    },
    {
    title: "Deep-Fried Turkey with Herbs ",
    calories: 506,
    protein: 38,
    fat: 37,
    sodium: 231,
    image: "https://altonbrown.com/wp-content/uploads/2020/08/Deep-Fried-Turkey_RecipeImage3-1024x768.jpg"
    },
    {
    title: "Grilled-Fish Tacos ",
    calories: 547,
    protein: 22,
    fat: 34,
    sodium: 284,
    image: "https://www.healthy-delicious.com/wp-content/uploads/2017/06/grilled-fish-tacos-with-coleslaw-Healthy-Delicious-Double-Size-7.jpg"
    },
    {
    title: "Tuna Steaks with Garlic, Tomatoes, Capers, and Basil ",
    calories: 398,
    protein: 40,
    fat: 21,
    sodium: 155,
    image: "https://www.thespruceeats.com/thmb/N6J_xoXx9kY2ThcOB81GHEYVpIM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Tuna-with-capers-59fde4cd98020700370ac6f4.jpg"
    },
    {
    title: "Vietnamese Chicken and Pineapple Soup ",
    calories: 334,
    protein: 18,
    fat: 12,
    sodium: 1645,
    image: "https://friendseat.com/wp-content/uploads/2018/04/VIETNAMESE-CHICKEN-AND-PINEAPPLE-SOUP-RECIPE.jpg"
    },
    {
    title: "Grilled Skirt Steak and Arugula Salad with Roquefort and Catalina Dressing ",
    calories: 495,
    protein: 30,
    fat: 38,
    sodium: 421,
    image: "https://assets.epicurious.com/photos/5609a59ee0acd286555db88a/1:1/w_2560%2Cc_limit/353632_hires.jpg"
    },
    {
    title: "Chicken Burgers with Lemon and Tarragon ",
    calories: 445,
    protein: 24,
    fat: 38,
    sodium: 662,
    image: "https://divaliciousrecipes.com/wp-content/uploads/2020/03/keto-chicken-lemon-tarragon-burger-1024x684.jpg"
    },
    {
    title: "Turkey Green Chili ",
    calories: 588,
    protein: 66,
    fat: 28,
    sodium: 350,
    image: "https://supersafeway.com/wp-content/uploads/2018/01/Green_Turkey_Chili.png"
    },
    {
    title: "Our Favorite Texas Beef Chili ",
    calories: 837,
    protein: 104,
    fat: 39,
    sodium: 2198,
    image: "nan"
    },
    {
    title: "Risotto with Chicken and Beet Greens Stalker ",
    calories: 557,
    protein: 29,
    fat: 18,
    sodium: 511,
    image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Golden-Beet-Curry-Risotto-with-Crispy-Beet-Greens_EXPS_THAM17_199947_C11_11_1b.jpg"
    },
    {
    title: "Sweet Potato Macaroni and Cheese ",
    calories: 661,
    protein: 21,
    fat: 25,
    sodium: 979,
    image: "https://www.nigella.com/assets/uploads/recipes/sweet-potato-macaroni-cheese-56ce1b431d651.jpg"
    },
    {
    title: "Portuguese Baked Eggs ",
    calories: 364,
    protein: 19,
    fat: 27,
    sodium: 318,
    image: "https://i.pinimg.com/736x/12/2a/52/122a52278ccf497db5005050b809f057--baked-eggs-portuguese.jpg"
    },
    {
    title: "Lemon Chicken ",
    calories: 485,
    protein: 41,
    fat: 29,
    sodium: 120,
    image: "https://natashaskitchen.com/wp-content/uploads/2020/02/Lemon-Chicken-5.jpg"
    },
    {
    title: "Grilled Pizza with Tomatoes, Corn and Cheese ",
    calories: 549,
    protein: 23,
    fat: 19,
    sodium: 1261,
    image: "https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,w_1500,c_fill,g_auto/https://storage.googleapis.com/gen-atmedia/3/2013/08/2d6530c2c52a08db6ded0a2088d25e4431294ff9.jpeg"
    },
    {
    title: "Split Pea Soup with Gouda-Sausage Toasts ",
    calories: 776,
    protein: 50,
    fat: 35,
    sodium: 1177,
    image: "https://thedeliciouslife.com/wp-content/uploads/2022/11/split-pea-soup-with-croutons.jpg"
    },
    {
    title: "Ros�'s Baccal� Salad ",
    calories: 415,
    protein: 72,
    fat: 11,
    sodium: 8112,
    image: "https://www.thirtyhandmadedays.com/wp-content/uploads/2020/04/asian-noodle-salad.jpg"
    },
    {
    title: "Boneless Pork Chops with Ginger, Fig, and Lemon Compote ",
    calories: 495,
    protein: 37,
    fat: 26,
    sodium: 117,
    image: "https://i.pinimg.com/736x/97/fd/6a/97fd6ac1c2f0a8a5c918935ac7804093.jpg"
    },
    {
    title: "Beef Bone Broth ",
    calories: 318,
    protein: 28,
    fat: 17,
    sodium: 373,
    image: "https://www.themagicalslowcooker.com/wp-content/uploads/2018/10/beef-bone-broth-4.jpg"
    },
    {
    title: "Fried Rice with Canadian Bacon ",
    calories: 384,
    protein: 16,
    fat: 12,
    sodium: 958,
    image: "http://1.bp.blogspot.com/-aG5qKj_XMsk/TWeBhYtAQ9I/AAAAAAAAAMI/5R0pj1D4JM4/s1600/fried+rice+with+canadian+bacon+by+me+%25284%2529.jpg"
    },
    {
    title: "Central Asian Rice and Bean Stew ",
    calories: 946,
    protein: 30,
    fat: 17,
    sodium: 1285,
    image: "http://4.bp.blogspot.com/-phMVuCkDLCA/VLqQAB_OzbI/AAAAAAAAQAs/7UF1SbnjIBU/s1600/IMG_7702.JPG"
    },
    {
    title: "Beef and Sausage Meat Loaf with Mozzarella ",
    calories: 668,
    protein: 55,
    fat: 34,
    sodium: 1586,
    image: "https://i.pinimg.com/originals/14/e5/1d/14e51dc0d8da1dd46bdf9a37e2b7497e.jpg"
    },
    {
    title: "Tuscan Tuna Salad with Fennel ",
    calories: 454,
    protein: 23,
    fat: 34,
    sodium: 393,
    image: "https://www.countrysidecravings.com/wp-content/uploads/2018/07/Quick-Tuscan-Tuna-Salad-image-683x1024.jpg"
    },
    {
    title: "Herbed Lamb Burgers ",
    calories: 538,
    protein: 28,
    fat: 30,
    sodium: 384,
    image: "https://ww2.kqed.org/app/uploads/sites/24/2017/04/lamb-burgers-final6-1020x680.jpg"
    },
    {
    title: "Rockin' Moroccan Stew ",
    calories: 739,
    protein: 23,
    fat: 24,
    sodium: 5228,
    image: "https://i0.wp.com/www.culinarycafe.com/images/395830_moroccan-stew_1x1.jpg?fit=600%2C600&amp;ssl=1"
    },
    {
    title: "Hot Browns ",
    calories: 555,
    protein: 29,
    fat: 38,
    sodium: 688,
    image: "https://i5.fapality.com/contents/albums/main/680x9999/1000/1214/51522.jpg"
    },
    {
    title: "Turkey Cutlets with Springtime Vegetables ",
    calories: 438,
    protein: 32,
    fat: 23,
    sodium: 158,
    image: "https://i.pinimg.com/originals/6e/09/25/6e092553463260a20ffbb37ed598d2e2.jpg"
    },
    {
    title: "Three-Cheese Sorrentinos with Tomato-Olive Sauce ",
    calories: 585,
    protein: 23,
    fat: 39,
    sodium: 854,
    image: "https://starmometer.com/wp-content/uploads/2014/03/sandwich-ThreeCheese.jpg"
    },
    {
    title: "Summer Steak Salad with Ginger-Lime Dressing ",
    calories: 483,
    protein: 32,
    fat: 32,
    sodium: 1580,
    image: "https://stoneridgebeef.com/wp-content/uploads/2019/07/summer-steak-salad-web-1024x650.jpg"
    },
    {
    title: "Spice-Rubbed Chicken Breasts with Lemon-Shallot Sauce ",
    calories: 420,
    protein: 54,
    fat: 20,
    sodium: 408,
    image: "https://cafedelites.com/wp-content/uploads/2018/04/Honey-Mustard-Baked-Chicken-Breasts-IMAGE-26.jpg"
    },
    {
    title: "Sauteed Chicken Breasts with Pear, Bell Pepper, and Cilantro Salsa ",
    calories: 407,
    protein: 28,
    fat: 19,
    sodium: 93,
    image: "https://marshaeileen.com/wp-content/uploads/2022/03/IMG_7035-1.jpg"
    },
    {
    title: "Sausage and Pepper Pasta Supper ",
    calories: 765,
    protein: 44,
    fat: 27,
    sodium: 2286,
    image: "https://assets.epicurious.com/photos/57a0e797c9298e5449591838/2:1/w_1260%2Ch_630/sausage-and-pepper-pasta-supper.jpg"
    },
    {
    title: "Sliced Steak with Roasted-Corn Salsa ",
    calories: 649,
    protein: 50,
    fat: 40,
    sodium: 874,
    image: "http://funnyloveblog.com/wp-content/uploads/2012/09/sliced-steak-with-cream.jpg"
    },
    {
    title: "Seafood Salad with Collard Greens Slaw ",
    calories: 327,
    protein: 37,
    fat: 12,
    sodium: 1368,
    image: "https://www.dinneratthezoo.com/wp-content/uploads/2018/12/seafood-salad-5.jpg"
    },
    {
    title: "Mushroom and Cheese Frittata ",
    calories: 376,
    protein: 23,
    fat: 29,
    sodium: 170,
    image: "http://assets.epicurious.com/photos/54afdc542edcf2b41143a030/master/pass/51171410_mushroom-frittata_1x1.jpg"
    },
    {
    title: "Asparagus, Gruy�re, and Tarragon Souffleed Omelet ",
    calories: 444,
    protein: 27,
    fat: 30,
    sodium: 405,
    image: "https://fthmb.tqn.com/EfmysXuXiRMGO9EJJdGkz0YUk-E=/1500x1000/filters:fill(auto,1)/asparagus_omelet-5a6bbf78eb97de0037a2f90d.jpg"
    },
    {
    title: "Chunky Sweet-Potato Soup ",
    calories: 392,
    protein: 21,
    fat: 22,
    sodium: 201,
    image: "https://www.rebootedmom.com/wp-content/uploads/2016/06/Chunky-Potato-Soup.jpg"
    },
    {
    title: "Cal-Asian Seared Tuna Sandwiches ",
    calories: 681,
    protein: 49,
    fat: 37,
    sodium: 643,
    image: "https://www.carolinescooking.com/wp-content/uploads/2018/05/seared-tuna-sandwich-with-Asian-sesame-slaw-picture-2.jpg"
    },
    {
    title: "Rosemary-Roasted Chicken and Garlic ",
    calories: 570,
    protein: 57,
    fat: 31,
    sodium: 188,
    image: "https://theforkedspoon.com/wp-content/uploads/2021/04/Garlic-and-ROsemary-Chicken-Recipe-6-1024x1536.jpg"
    },
    {
    title: "Shishito Pepper Potato Hash with Fried Eggs ",
    calories: 354,
    protein: 16,
    fat: 20,
    sodium: 575,
    image: "https://assets.epicurious.com/photos/54b944f07cbba01c0db80f12/16:9/w_1280,c_limit/51252300_shishito-hash_1x1.jpg?mbid=social_retweet"
    },
    {
    title: "Turkey Tortilla Soup ",
    calories: 667,
    protein: 54,
    fat: 16,
    sodium: 654,
    image: "https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,c_fill,g_auto,w_1500/https://storage.googleapis.com/gen-atmedia/3/2014/01/64f8b5d3d3b1e495b4a01add8b72a7a55ee722bb.jpeg"
    },
    {
    title: "Smoky Pumpkin, Spelt, Pomegranate, and Feta Salad ",
    calories: 780,
    protein: 18,
    fat: 31,
    sodium: 73,
    image: "https://i.pinimg.com/originals/70/68/4e/70684e25ef8155344245037639656a4c.jpg"
    },
    {
    title: "Coconut Red-Lentil Curry ",
    calories: 471,
    protein: 15,
    fat: 28,
    sodium: 416,
    image: "https://fredfrey.org/wp-content/uploads/2019/06/coconut-curry-recipe-1024x1024.jpg"
    },
    {
    title: "Penne with Pancetta and Tomato-Cream Sauce ",
    calories: 635,
    protein: 20,
    fat: 19,
    sodium: 391,
    image: "https://mostlydomestic.com/wp-content/uploads/2020/04/baked-penne-creamy-tomato-sauce-vegan-gluten-free-recipe-mostly-domestic.jpeg"
    },
    {
    title: "Korean Vegetable Rice Bowl ",
    calories: 738,
    protein: 27,
    fat: 28,
    sodium: 1699,
    image: "http://blog.williams-sonoma.com/wp-content/uploads/2015/07/AUG-10_Bibimbap_KoreanRiceBowl.jpg"
    },
    {
    title: "Herbed Hamburgers with Arugula ",
    calories: 576,
    protein: 34,
    fat: 38,
    sodium: 325,
    image: "https://i.pinimg.com/originals/c1/1b/c2/c11bc220001db5919d3d85deda0e957a.jpg"
    },
    {
    title: "Risotto with Asparagus and Morel Rago�t ",
    calories: 628,
    protein: 19,
    fat: 21,
    sodium: 1385,
    image: "http://images.lifesambrosia.com/food/large/asparagus-and-mushroom-risotto.jpg"
    },
    {
    title: "Beer-Batter-Fried Sardines and Lime ",
    calories: 497,
    protein: 17,
    fat: 33,
    sodium: 748,
    image: "https://i.pinimg.com/originals/25/ca/16/25ca1683837ff7dc0cd3ad4017628cff.jpg"
    },
    {
    title: "Vegetable and Bean Chili ",
    calories: 364,
    protein: 16,
    fat: 10,
    sodium: 2094,
    image: "https://cookieandkate.com/images/2015/11/best-vegetarian-chili-1-1.jpg"
    },
    {
    title: "Steamed Clams with Ham, Bell Pepper, and Basil ",
    calories: 625,
    protein: 64,
    fat: 21,
    sodium: 2714,
    image: "https://i.pinimg.com/originals/d9/68/16/d9681674734ea1d62c99d58ede4c646e.jpg"
    },
    {
    title: "Fried Cornmeal Shrimp with Butternut Squash Risotto ",
    calories: 610,
    protein: 27,
    fat: 18,
    sodium: 929,
    image: "https://assets.epicurious.com/photos/54beb627e231becc7f3d850d/16:9/w_1280,c_limit/fried-cornmeal-shrimp-butternut-squash-risotto-6x4.jpg"
    },
    {
    title: "Chicken Breasts with Sun-Dried Tomato-Cream Sauce ",
    calories: 538,
    protein: 55,
    fat: 31,
    sodium: 156,
    image: "https://cafedelites.com/wp-content/uploads/2018/04/Honey-Mustard-Baked-Chicken-Breasts-IMAGE-26.jpg"
    },
    {
    title: "Garlicky Lentil Soup ",
    calories: 311,
    protein: 17,
    fat: 8,
    sodium: 2063,
    image: "https://i1.wp.com/www.sippitysup.com/wp-content/uploads/2014/10/GarlickyLentilSoupWEB21.jpg?fit=429%2C644&amp;ssl=1"
    },
    {
    title: "Yogurt with Granola, Tropical Fruit, and Crystallized Ginger ",
    calories: 641,
    protein: 23,
    fat: 24,
    sodium: 137,
    image: "https://peasandcrayons.com/wp-content/uploads/2022/04/fruit-and-granola-yogurt-bowls-mixed-berry-.jpg"
    },
    {
    title: "Arugula, Bacon, and Gruy�re Bread Pudding ",
    calories: 582,
    protein: 28,
    fat: 32,
    sodium: 862,
    image: "https://live.staticflickr.com/4050/4368960645_613c2efcb6_b.jpg"
    },
    {
    title: "Halibut with Carrots, Fennel, Lemon, and Garlic ",
    calories: 376,
    protein: 22,
    fat: 29,
    sodium: 106,
    image: "https://www.wholesomeyum.com/wp-content/uploads/2022/06/wholesomeyum-Baked-Halibut-12.jpg"
    },
    {
    title: "Goat Cheese Mashed Potatoes with Leeks and Chives ",
    calories: 476,
    protein: 16,
    fat: 19,
    sodium: 238,
    image: "https://www.everydayeasyeats.com/wp-content/uploads/2017/10/Herb-Goat-Cheese-Mashed-Potatoes-1.jpg"
    },
    {
    title: "Six-Spice Hanger Steak ",
    calories: 476,
    protein: 47,
    fat: 29,
    sodium: 1026,
    image: "https://popmenucloud.com/cdn-cgi/image/width%3D600%2Cheight%3D600%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/cbodxqzy/6b981e2b-92ad-4ed8-89c3-0f319b8db3bf.jpg"
    },
    {
    title: "Chicken Cacciatore with Harissa, Bacon, and Rosemary ",
    calories: 851,
    protein: 54,
    fat: 36,
    sodium: 907,
    image: "http://assets.epicurious.com/photos/55eeeb77cf90d6663f728416/master/pass/56390037_chicken-cacciatore-with-harissa.jpg"
    },
    {
    title: "Grilled Fish Fillets with Lentil Salsa ",
    calories: 381,
    protein: 35,
    fat: 15,
    sodium: 597,
    image: "https://www.simplyrecipes.com/thmb/qodI7uOd6XE7RLJi_fHPhZdGvQ0=/5184x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Grilling-Fish-LEAD-12-e0f342b7a6dd4f92a4f2f991d407750a.jpg"
    },
    {
    title: "Asparagus Risotto ",
    calories: 415,
    protein: 18,
    fat: 10,
    sodium: 327,
    image: "https://i2.wp.com/garlicmatters.com/wp-content/uploads/2016/03/ASPARAGUS-LEMON-RISOTTO-4.jpg"
    },
    {
    title: "Chicken Curry with Sweet Potatoes ",
    calories: 591,
    protein: 54,
    fat: 21,
    sodium: 1735,
    image: "https://1.bp.blogspot.com/-OG3NQ6MUSoI/VwpAIMX4h1I/AAAAAAAAMDo/ZI3DOub30MMA9XUbAftptX6RIfC3B2H2A/s1600/CHICKEN%2BSWEET%2BPOTATO%2BCURRY.jpg"
    },
    {
    title: "Pasta with Lobster, Tomatoes and 'Herbes de Maquis' ",
    calories: 538,
    protein: 43,
    fat: 12,
    sodium: 960,
    image: "https://www.slimmingeats.com/blog/wp-content/uploads/2019/08/lobster-pasta-25.jpg"
    },
    {
    title: "Red-Cooked Pork with Frizzled Ginger ",
    calories: 806,
    protein: 96,
    fat: 37,
    sodium: 3020,
    image: "https://myincrediblerecipes.com/wp-content/uploads/2017/02/Ginger-Pork11.jpg"
    },
    {
    title: "Chinese Chicken Noodle Soup with Spinach and Garlic Chives ",
    calories: 301,
    protein: 24,
    fat: 18,
    sodium: 114,
    image: "https://redhousespice.com/wp-content/uploads/2022/11/chicken-noodle-soup-with-mushrooms-scaled.jpg"
    },
    {
    title: "Shrimp, Tomato, and Olive Cocktail ",
    calories: 302,
    protein: 25,
    fat: 18,
    sodium: 1204,
    image: "https://natashaskitchen.com/wp-content/uploads/2019/12/Shrimp-Cocktail-7.jpg"
    },
    {
    title: "Roast Leg of Lamb with Mustard and Red Wine Sauce ",
    calories: 302,
    protein: 25,
    fat: 18,
    sodium: 524,
    image: "https://cdn.images.express.co.uk/img/dynamic/14/590x/secondary/Leg-of-lamb-2985389.jpg?r=1617526609159"
    },
    {
    title: "Fava Bean, Pea, and Artichoke Stew ",
    calories: 518,
    protein: 23,
    fat: 26,
    sodium: 1079,
    image: "https://i.pinimg.com/originals/b1/f2/e4/b1f2e422dadfc71ce9542c75101cde3f.jpg"
    },
    {
    title: "Mushroom, Radicchio, and Smoked Mozzarella Lasagne ",
    calories: 618,
    protein: 30,
    fat: 35,
    sodium: 444,
    image: "https://i.pinimg.com/736x/e7/98/0d/e7980dd247749faf0d12a20733c449fa.jpg"
    },
    {
    title: "Strawberry-Orange Ricotta Cake with Pistachios ",
    calories: 587,
    protein: 16,
    fat: 29,
    sodium: 92,
    image: "https://bakedbree.com/wp-content/uploads/2020/03/raspberry-orange-pistachio-ricotta-cake-8-1365x2048.jpg"
    },
    {
    title: "Beet and Cabbage Borscht ",
    calories: 530,
    protein: 20,
    fat: 27,
    sodium: 655,
    image: "https://www.thespruceeats.com/thmb/_KyQdLpn_QvKAwfNeTRPFQ7mF3Y=/3000x2000/filters:fill(auto,1)/beet-and-cabbage-borscht-2217722-Hero_01-3e556bb389fa40c199f80815081912bb.jpg"
    },
    {
    title: "Turkey Chili with White Beans ",
    calories: 388,
    protein: 31,
    fat: 11,
    sodium: 1203,
    image: "https://cdn2.tmbi.com/TOH/Images/Photos/37/1200x1200/White-Bean-Turkey-Chili_exps15618_HWS133216C07_11_5bC_RMS.jpg"
    },
    {
    title: "Bacon and Egg Empa�adas ",
    calories: 930,
    protein: 43,
    fat: 31,
    sodium: 1903,
    image: "http://joytomyheart.com/wp-content/uploads/2013/09/bacon-and-eggs.jpg"
    },
    {
    title: "Shrimp and Crab Gumbo ",
    calories: 353,
    protein: 39,
    fat: 7,
    sodium: 1662,
    image: "http://images.media-allrecipes.com/userphotos/960x960/6127319.jpg"
    },
    {
    title: "Tropical Chicken Salad ",
    calories: 644,
    protein: 41,
    fat: 40,
    sodium: 150,
    image: "https://eatthegains.com/wp-content/uploads/2015/09/Tropical-Chicken-Salad-6-683x1024.jpg"
    },
    {
    title: "Chicken Pouqui ",
    calories: 446,
    protein: 38,
    fat: 30,
    sodium: 772,
    image: "https://i.pinimg.com/originals/98/c8/04/98c804fd235734daf7ed252c4f8f0471.jpg"
    },
    {
    title: "Tagliatelle with Fresh Corn Pesto ",
    calories: 541,
    protein: 15,
    fat: 29,
    sodium: 662,
    image: "https://assets.epicurious.com/photos/5903633efb98ea70e40f7dd3/2:1/w_1260%2Ch_630/tagliatelle-pasta-with-corn-pesto-BA-042817.jpg"
    },
    {
    title: "Mashed Potatoes with Creamy Blue Cheese and Rosemary ",
    calories: 351,
    protein: 15,
    fat: 14,
    sodium: 536,
    image: "https://thesaltymarshmallow.com/wp-content/uploads/2017/08/cream-cheese-mashed-potatoes1.jpg"
    },
    {
    title: "Ham and Bell Pepper Frittata ",
    calories: 347,
    protein: 25,
    fat: 25,
    sodium: 805,
    image: "https://www.todaysparent.com/wp-content/uploads/2020/03/Frittata-2-BC-Egg-1.jpg"
    },
    {
    title: "Potatoes and Sausage with Parsley ",
    calories: 507,
    protein: 20,
    fat: 27,
    sodium: 957,
    image: "https://eatingeuropean.com/wp-content/uploads/2019/02/Parsley-Potatoes-1.jpg"
    },
    {
    title: "Franks and Beans ",
    calories: 625,
    protein: 42,
    fat: 30,
    sodium: 1642,
    image: "https://www.savoryexperiments.com/wp-content/uploads/2018/07/Franks-and-Beans.jpg"
    },
    {
    title: "Tacos al Pastor ",
    calories: 510,
    protein: 51,
    fat: 20,
    sodium: 926,
    image: "https://grillinwithdad.com/wp-content/uploads/2019/09/al-pastor-taco.jpeg"
    },
    {
    title: "Penne with Almond Pesto and Green Beans ",
    calories: 611,
    protein: 15,
    fat: 34,
    sodium: 391,
    image: "https://bunnyswarmoven.net/wp-content/uploads/2020/06/Green-Bean-Penne-with-Garlic-Butter-Sauce-17.jpg"
    },
    {
    title: "Chicken Posole ",
    calories: 668,
    protein: 53,
    fat: 32,
    sodium: 1393,
    image: "https://www.cookingclassy.com/wp-content/uploads/2019/01/chicken-posole-4.jpg"
    },
    {
    title: "Steak Pizzaiola ",
    calories: 507,
    protein: 30,
    fat: 38,
    sodium: 982,
    image: "http://www.gonnawantseconds.com/wp-content/uploads/2018/01/GWSSteak-Pizzaiola-01.jpg"
    },
    {
    title: "Coconut Chicken Soup ",
    calories: 351,
    protein: 23,
    fat: 24,
    sodium: 1826,
    image: "https://mypocketkitchen.com/wp-content/uploads/2020/11/Coconut-Chicken-Soup-2-of-3-1024x1024.jpg"
    },
    {
    title: "Pan Bagnat ",
    calories: 639,
    protein: 35,
    fat: 28,
    sodium: 1155,
    image: "nan"
    },
    {
    title: "Cornmeal and Kale Spoon Bread with Red Peppers ",
    calories: 475,
    protein: 21,
    fat: 29,
    sodium: 510,
    image: "https://i.pinimg.com/originals/22/76/32/2276326e01c6195f9909bd2ff04a15c8.jpg"
    },
    {
    title: "Cottage Cheese Pancakes ",
    calories: 320,
    protein: 17,
    fat: 12,
    sodium: 370,
    image: "https://cdn.momsdish.com/wp-content/uploads/2020/03/Cottage-Cheese-Pancakes-04.jpg"
    },
    {
    title: "Slow-Roasted Char with Fennel Salad ",
    calories: 459,
    protein: 30,
    fat: 33,
    sodium: 112,
    image: "https://www.veahero.com/wp-content/uploads/2018/02/Endive-and-Roasted-Fennel-Salad-2-800x800.jpg"
    },
    {
    title: "Mustard Seed-Crusted Salmon with Mustard Cream Sauce ",
    calories: 529,
    protein: 38,
    fat: 38,
    sodium: 319,
    image: "https://1.bp.blogspot.com/-Ca1E8hsj9mo/XR18LmzzbMI/AAAAAAAABQk/aAG7Lo3SV1YZP_HF7kwae_xtmL8orlXYACLcBGAs/s1600/baked-salmon-honey-mustard-22-768x1152.jpg"
    },
    {
    title: "Orange-Flavored Beef and Snow Pea Stir-Fry with Noodles ",
    calories: 847,
    protein: 51,
    fat: 39,
    sodium: 578,
    image: "nan"
    },
    {
    title: "Grilled Swedish Meatball Kebabs ",
    calories: 313,
    protein: 17,
    fat: 15,
    sodium: 484,
    image: "https://www.mycolombianrecipes.com/wp-content/uploads/2017/05/turkey-skweres.jpg"
    },
    {
    title: "Southern Vegetable Gratin ",
    calories: 454,
    protein: 24,
    fat: 24,
    sodium: 1167,
    image: "https://1.bp.blogspot.com/-UG4PB3YORNo/XTQuDarUeeI/AAAAAAAASrI/RdV9bxDVoPMGz-jFVZL2mOWfJR7GD3_pACLcBGAs/s1600/Sumer%2BVegetable%2BGratin%2B2%2BLR%2Brevised.jpg"
    },
    {
    title: "Minted Lamb Patties ",
    calories: 472,
    protein: 26,
    fat: 37,
    sodium: 101,
    image: "https://i.pinimg.com/originals/8d/b8/f5/8db8f53544a1a77a16efc3084a8b24dd.jpg"
    },
    {
    title: "Holiday Ham with Riesling and Mustard ",
    calories: 464,
    protein: 48,
    fat: 20,
    sodium: 7279,
    image: "https://assets.bonappetit.com/photos/57afbaab53e63daf11a4e65a/16:9/w_1280,c_limit/holiday-ham-with-riesling-and-mustard.jpg"
    },
    {
    title: "Vegetable-and Ricotta- Stuffed Collard Rolls with Tomato Sauce ",
    calories: 594,
    protein: 32,
    fat: 35,
    sodium: 485,
    image: "https://www.gustoworldwidemedia.com/wp-content/uploads/2020/04/CLAC-5160-Vegetable-ricotta-stuffed-cabbage-rolls-p-scaled.jpg"
    },
    {
    title: "Green Curry Chicken ",
    calories: 601,
    protein: 24,
    fat: 37,
    sodium: 1630,
    image: "http://wickedfood.co.za/wp-content/uploads/2010/09/Green-Chicken-Curry.jpg"
    },
    {
    title: "Chicken Wings with Black-Bean Sauce ",
    calories: 323,
    protein: 28,
    fat: 22,
    sodium: 380,
    image: "https://i.pinimg.com/originals/f4/b2/4e/f4b24ec020619872b03ea891aa9f3935.jpg"
    },
    {
    title: "Zucchini, Corn, and Basil Fusilli with Bacon ",
    calories: 511,
    protein: 17,
    fat: 18,
    sodium: 305,
    image: "https://assets.epicurious.com/photos/55b244fd6284773353bf4eac/16:9/w_1280,c_limit/242838_zucchini-corn-fusilli_6x4.jpg?mbid=social_retweet"
    },
    {
    title: "Seafood Stew with Winter Squash, Tomatoes and Saffron ",
    calories: 347,
    protein: 37,
    fat: 8,
    sodium: 1183,
    image: "https://www.feastingathome.com/wp-content/uploads/2013/06/seafood-stew-recipe-120.jpg"
    },
    {
    title: "Potato-Crusted Halibut Steaks ",
    calories: 447,
    protein: 39,
    fat: 24,
    sodium: 358,
    image: "https://www.dishnthekitchen.com/wp-content/uploads/2014/04/halibut3.jpg"
    },
    {
    title: "Mussel and Carrot Soup ",
    calories: 362,
    protein: 35,
    fat: 11,
    sodium: 1293,
    image: "https://s.hdnux.com/photos/60/50/20/12747781/7/1200x0.jpg"
    },
    {
    title: "Beef and Dark Beer Chili ",
    calories: 564,
    protein: 60,
    fat: 16,
    sodium: 910,
    image: "https://www.recipegirl.com/wp-content/uploads/2006/09/Beef-and-Dark-Beer-Chili-1.jpg"
    },
    {
    title: "Spanish-Style Garlic Shrimp with Ham and Bell Peppers ",
    calories: 589,
    protein: 18,
    fat: 17,
    sodium: 625,
    image: "https://i.pinimg.com/736x/77/3c/db/773cdba1ceb92ce683678dfefe1c2463.jpg"
    },
    {
    title: "Andouille-Stuffed Pork Loin with Creole Mustard ",
    calories: 441,
    protein: 40,
    fat: 21,
    sodium: 5865,
    image: "https://www.daringgourmet.com/wp-content/uploads/2021/02/Creole-Mustard-3-768x1152.jpg"
    },
    {
    title: "Grab-and-Go Greek Sandwiches ",
    calories: 981,
    protein: 42,
    fat: 38,
    sodium: 1174,
    image: "http://jeffeats.com/wp-content/uploads/2011/02/image8.jpg"
    },
    {
    title: "Broccoli-Quinoa Salad with Buttermilk Dressing ",
    calories: 433,
    protein: 16,
    fat: 21,
    sodium: 168,
    image: "https://i.pinimg.com/originals/c6/5a/c4/c65ac481c60fa2527d41d1483de5be5b.jpg"
    },
    {
    title: "Tuscan Bean and Swiss Chard Soup ",
    calories: 699,
    protein: 40,
    fat: 25,
    sodium: 1068,
    image: "https://images.theyellowtable.com/best-tuscan-white-bean-soup-swiss-chard-recipe-sq.jpg?w=1520&amp;q=45&amp;h=798&amp;fit=crop"
    },
    {
    title: "Rotini with Peppers, Onions, and Feta ",
    calories: 591,
    protein: 20,
    fat: 16,
    sodium: 641,
    image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https:%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2013%2F01%2F01%2FRU200981.jpg"
    },
    {
    title: "Wild Rice and Chicken or Turkey Salad with Tarragon ",
    calories: 565,
    protein: 40,
    fat: 27,
    sodium: 963,
    image: "https://i.pinimg.com/originals/a1/be/1b/a1be1b82a0a8a4c09fc4faa63eee5420.jpg"
    },
    {
    title: "Sourdough, Italian Sausage, and Chestnut Stuffing ",
    calories: 506,
    protein: 23,
    fat: 20,
    sodium: 951,
    image: "https://assets.bonappetit.com/photos/57ad2e011b33404414975480/16:9/w_1280,c_limit/sourdough-italian-sausage-and-chestnut-stuffing.jpg"
    },
    {
    title: "Sweet-Onion Quesadillas ",
    calories: 520,
    protein: 20,
    fat: 21,
    sodium: 1002,
    image: "https://wanderzestblog.com/wp-content/uploads/2019/07/quesadillas_small-44.jpg"
    },
    {
    title: "Rice with Spinach and Feta Cheese ",
    calories: 518,
    protein: 16,
    fat: 23,
    sodium: 908,
    image: "https://www.acouplecooks.com/wp-content/uploads/2022/01/Spinach-Rice-006-784x980.jpg"
    },
    {
    title: "Bulgarian Beef Stew ",
    calories: 779,
    protein: 70,
    fat: 30,
    sodium: 468,
    image: "https://i1.wp.com/www.munchkintime.com/wp-content/uploads/2018/09/Red-Wine-Bulgarian-Beef-Stew-Recipe-by-Munchkin-Time-Blog-12-of-12.jpg?resize=900%2C1350"
    },
    {
    title: "Chilled Japanese Noodles with Grilled Chicken and Vegetables ",
    calories: 624,
    protein: 49,
    fat: 19,
    sodium: 1920,
    image: "https://japan.recipetineats.com/wp-content/uploads/2018/01/somen_0025.jpg"
    },
    {
    title: "Salmon with Sesame and Orange-Ginger Relish ",
    calories: 389,
    protein: 30,
    fat: 24,
    sodium: 480,
    image: "https://assets.epicurious.com/photos/54aca76b19925f464b3ae3c0/master/pass/51217620_sesame-crusted-salmon_1x1.jpg"
    },
    {
    title: "Butternut Squash and Sage Orzo ",
    calories: 457,
    protein: 17,
    fat: 15,
    sodium: 285,
    image: "http://www.lastingredient.com/wp-content/uploads/2015/03/butternut-squash-orzo-768x768.jpg"
    },
    {
    title: "Fettucine with Smoked Salmon and Asparagus ",
    calories: 517,
    protein: 20,
    fat: 25,
    sodium: 331,
    image: "https://recipematic.com/wp-content/uploads/2020/09/Smoked-Salmon-and-Asparagus-Sauce-with-Fettucine-Recipe-848x476-1-696x391.jpg"
    },
    {
    title: "Grilled Halibut, Eggplant, and Baby Bok Choy with Korean Barbecue Sauce ",
    calories: 484,
    protein: 41,
    fat: 20,
    sodium: 1307,
    image: "https://www.simplyscratch.com/wp-content/uploads/2020/06/Grilled-Baby-Bok-Choy-l-SimplyScratch.com-grilled-babybokchoy-grilling-summer-sidedish-easy-healthy-lowfat-lowcarb-9-1025x1536.jpg"
    },
    {
    title: "Linguine with Clams and Wild Mushrooms ",
    calories: 1171,
    protein: 100,
    fat: 28,
    sodium: 3428,
    image: "http://s2.pinchstatic.com/images/recipe/5/5/5/5/0/9/i.1.mLfddLzFjATnWbPPjyddQmJC7Fb0HRZmDZMEEdUDVos..jpg"
    },
    {
    title: "Shrimp in Yuca Coconut Pur�e ",
    calories: 760,
    protein: 23,
    fat: 13,
    sodium: 1196,
    image: "https://sallysbakingaddiction.com/wp-content/uploads/2014/06/coconut-shrimp-1.jpg"
    },
    {
    title: "Shellfish Paella Risotto ",
    calories: 908,
    protein: 65,
    fat: 25,
    sodium: 3173,
    image: "http://ciaoflorentina.com/wp-content/uploads/2012/10/Paella-style-Risotto-.jpg"
    },
    {
    title: "Salmon with Endive, Dill, and Cream ",
    calories: 555,
    protein: 39,
    fat: 39,
    sodium: 562,
    image: "https://feed-your-sole.com/wp-content/uploads/2020/01/Salmon-Endive-Salad-Honey-Recipes-800x831.png"
    },
    {
    title: "Grilled Jerk Pork With Curried Peach Relish ",
    calories: 492,
    protein: 60,
    fat: 18,
    sodium: 1128,
    image: "https://www.dailyharvestexpress.com/wp-content/uploads/2019/07/grilled-jerk-pork-with-curried-peach-relish.jpg"
    },
    {
    title: "Mango and Shrimp Wraps ",
    calories: 511,
    protein: 30,
    fat: 25,
    sodium: 2161,
    image: "http://www.melskitchencafe.com/wp-content/uploads/shrimp-lettuce-wraps2.jpg"
    },
    {
    title: "Beef Medallions with Cognac Sauce ",
    calories: 631,
    protein: 29,
    fat: 40,
    sodium: 333,
    image: "https://www.milesfarmersmarket.com/wp-content/uploads/2021/03/beef-medallion-in-chianti-sauce-PEQ7PYQ-1.jpg"
    },
    {
    title: "Tofu, Fried, with Pork and Black-Bean Sauce (Peng's Home-Style Bean Curd) ",
    calories: 452,
    protein: 24,
    fat: 36,
    sodium: 712,
    image: "https://nonyasecrets.com/wp-content/uploads/2021/01/fried-tofu-1.jpg"
    },
    {
    title: "Pickled Shrimp ",
    calories: 493,
    protein: 22,
    fat: 38,
    sodium: 1835,
    image: "https://www.thespruceeats.com/thmb/o8_1roD2diRa15j9-vWFMLnpBHQ=/3800x2533/filters:fill(auto,1)/southern-pickled-shrimp-with-fresh-dill-3060678-hero1-a2981726dc754b88addea87f7d96da9d.jpg"
    },
    {
    title: "Lamb and Barley Soup ",
    calories: 447,
    protein: 28,
    fat: 28,
    sodium: 680,
    image: "https://estias.com/weblog/wp-content/uploads/sites/5/2014/11/barley-soup.jpg"
    },
    {
    title: "Grilled Tuscan Pork Rib Roast with Rosemary Coating and Red Pepper Relish ",
    calories: 431,
    protein: 15,
    fat: 36,
    sodium: 602,
    image: "https://i.pinimg.com/736x/a8/b0/65/a8b065e9ba89fcc622b75d07cd6231bb--pork-rib-roast-pork-ribs.jpg"
    },
    {
    title: "Orzo with Beets, Olives, Feta, and Soft-Boiled Eggs ",
    calories: 539,
    protein: 21,
    fat: 22,
    sodium: 782,
    image: "https://i.pinimg.com/originals/99/c3/68/99c3689f98b4ac98baaa06bf301726c9.jpg"
    },
    {
    title: "Scotch Broth ",
    calories: 336,
    protein: 17,
    fat: 20,
    sodium: 615,
    image: "https://food-images.files.bbci.co.uk/food/recipes/scotchbroth_8116_16x9.jpg"
    },
    {
    title: "Caraway-Crusted Pork Chops ",
    calories: 444,
    protein: 42,
    fat: 25,
    sodium: 114,
    image: "https://midwestniceblog.com/wp-content/uploads/2021/06/brined-pork-chops.jpg"
    },
    {
    title: "Grilled Swordfish with Cucumber Lime Salsa ",
    calories: 371,
    protein: 35,
    fat: 17,
    sodium: 730,
    image: "https://fthmb.tqn.com/UeAVrxFzmNHhQL-GBcPmvCn6wzU=/960x0/filters:no_upscale()/ginger-limeswordfish-589dea6e5f9b58819c961ca5.jpeg"
    },
    {
    title: "Spicy Spinach Linguine with Olive Oil and Garlic ",
    calories: 708,
    protein: 27,
    fat: 35,
    sodium: 717,
    image: "https://i.pinimg.com/originals/ea/f3/ac/eaf3ac7dee4586464034a6670b78bb04.jpg"
    },
    {
    title: "Garlic-Braised Beef Shanks ",
    calories: 765,
    protein: 105,
    fat: 22,
    sodium: 1640,
    image: "https://i.pinimg.com/736x/3f/54/bb/3f54bbdda81f946a1e6675d511f14440--beef-broth-garlic-sauce.jpg"
    },
    {
    title: "Spicy Seafood Couscous ",
    calories: 873,
    protein: 98,
    fat: 19,
    sodium: 1403,
    image: "http://www.themediterraneandish.com/wp-content/uploads/2016/02/Spicy-Couscous-Recipe-with-Shrimp-and-Chorizo-11.jpg"
    },
    {
    title: "Halibut with Olive Tarragon Bread Crumbs on Roasted Tomato and Garlic Coulis ",
    calories: 428,
    protein: 37,
    fat: 17,
    sodium: 443,
    image: "http://2.bp.blogspot.com/-os2pr9Kxk6U/VmwIrmpGZ7I/AAAAAAAAVoE/qNChbSdPV4M/s1600/20151206-1714-1162.jpg"
    },
    {
    title: "Eula Mae's Seafood Gumbo ",
    calories: 486,
    protein: 38,
    fat: 26,
    sodium: 1348,
    image: "https://www.ihavenet.com/images/Eula-Mae-Cajun-Kitchen-Seafood-Gumbo-Recipe-20131202.jpg"
    },
    {
    title: "Singapore Shrimp Stir-Fry ",
    calories: 465,
    protein: 25,
    fat: 32,
    sodium: 881,
    image: "https://d3bu10l43r8rtt.cloudfront.net/v2/detail/singapore-shrimp-32-1.jpg"
    },
    {
    title: "Lentils San Stefano ",
    calories: 504,
    protein: 19,
    fat: 21,
    sodium: 797,
    image: "https://media.wsimag.com/attachments/1478380ef52699fdc1a8644d222790fed47bce1c/store/fill/2460/1384/f9dd574b56240fdfcba08644513c6b77f2f626bcffcabe9053a5752cc86c/Puy-lentils-c-Jessica-Spengler.jpg"
    },
    {
    title: "Honey-Gingered Pork Tenderloins ",
    calories: 484,
    protein: 66,
    fat: 11,
    sodium: 1564,
    image: "https://sweetpeaskitchen.com/wp-content/uploads/2021/04/Sliced-Pork-Tenderloins-4-scaled.jpeg"
    },
    {
    title: "Meatballs in Tomato Sauce ",
    calories: 513,
    protein: 37,
    fat: 30,
    sodium: 1112,
    image: "https://theyummybowl.com/wp-content/uploads/MEATBALLS-1.jpg"
    },
    {
    title: "Grilled Tri-Tip Roast with Tequila Marinade and Cherry Tomato Relish ",
    calories: 548,
    protein: 48,
    fat: 35,
    sodium: 703,
    image: "https://bigw.recipes/wp-content/uploads/2019/05/bigw-recipes_featured_grilled-tri-tip-roast-with-tequila-marinade-800x530.jpg"
    },
    {
    title: "Spicy Lemon Crab Cakes on Mixed Greens ",
    calories: 494,
    protein: 24,
    fat: 35,
    sodium: 965,
    image: "https://images.media-allrecipes.com/userphotos/560x315/1060653.jpg"
    },
    {
    title: "Stir-Fried Grains with Shrimp and Eggs ",
    calories: 744,
    protein: 33,
    fat: 30,
    sodium: 777,
    image: "https://www.theflouredcamera.com/wp-content/uploads/2021/04/shrimp_egg_stirfry_03.jpg"
    },
    {
    title: "Hoisin-Glazed Meatloaf Sandwiches ",
    calories: 1149,
    protein: 50,
    fat: 31,
    sodium: 2322,
    image: "https://i.pinimg.com/originals/fe/04/ae/fe04aede3f73f70f50b912c4c8098187.jpg"
    },
    {
    title: "Melon, Arugula, and Serrano Ham with Smoked Paprika Dressing ",
    calories: 523,
    protein: 25,
    fat: 24,
    sodium: 1826,
    image: "https://i.pinimg.com/originals/05/d0/a8/05d0a85b9f3578eb4190f2e5cdce14ff.jpg"
    },
    {
    title: "Potato, Leek and Onion Soup with Garlic Cheese Toasts ",
    calories: 451,
    protein: 15,
    fat: 20,
    sodium: 1384,
    image: "https://i1.wp.com/houseofkerrs.com/wp-content/uploads/2020/03/Easy-Potato-Leek-Soup-scaled.jpg?ssl=1"
    },
    {
    title: "Salmon with Parsley Cream Sauce ",
    calories: 573,
    protein: 38,
    fat: 39,
    sodium: 195,
    image: "https://www.seafreshuk.com/wp-content/uploads/2019/02/Salmon-Fillet-with-Parsley-Sauce.jpg"
    },
    {
    title: "Chicken Lo Mein with Ginger Mushrooms ",
    calories: 833,
    protein: 38,
    fat: 37,
    sodium: 1357,
    image: "https://drivemehungry.com/wp-content/uploads/2020/06/best-chicken-lo-mein-10.jpg"
    },
    {
    title: "Grilled Lemon-Oregano Chicken Drumsticks ",
    calories: 466,
    protein: 48,
    fat: 28,
    sodium: 998,
    image: "https://kitchenlaughter.com/wp-content/uploads/2022/01/grilled-chicken-drumsticks.jpg"
    },
    {
    title: "Black Olive and Goat Cheese Sandwiches ",
    calories: 357,
    protein: 15,
    fat: 20,
    sodium: 803,
    image: "https://i.pinimg.com/736x/b6/e6/35/b6e6356a88895ef575e5bfdad611993a.jpg"
    },
    {
    title: "Seared Scallops with Spicy Honey-Citrus Glaze on Celery Salad ",
    calories: 385,
    protein: 16,
    fat: 16,
    sodium: 571,
    image: "https://i.pinimg.com/originals/ef/37/b6/ef37b6519e21a736c216b22a2daf2245.jpg"
    },
    {
    title: "Butternut Squash and White Bean Soup ",
    calories: 618,
    protein: 37,
    fat: 14,
    sodium: 106,
    image: "https://www.shelikesfood.com/wp-content/uploads/2018/03/Southwestern-Butternut-Squash-and-White-Bean-Soup-2724.jpg"
    },
    {
    title: "Vegetable Stir-Fry with Tofu ",
    calories: 406,
    protein: 16,
    fat: 30,
    sodium: 917,
    image: "https://therecipecritic.com/wp-content/uploads/2019/08/vegetable_stir_fry.jpg"
    },
    {
    title: "Turkey Mole Sauce ",
    calories: 524,
    protein: 18,
    fat: 34,
    sodium: 605,
    image: "https://i.pinimg.com/originals/2e/62/5b/2e625b78fb5cee77d81aa1b617c4bc92.jpg"
    },
    {
    title: "Wild Mushroom Frittata with Cheddar, Green Onions, and Peas ",
    calories: 745,
    protein: 51,
    fat: 40,
    sodium: 2467,
    image: "https://i.pinimg.com/originals/3f/9f/a2/3f9fa2251cafc9ad586d53815d9620f0.jpg"
    },
    {
    title: "Asparagus and Swiss Cheese Souffles ",
    calories: 456,
    protein: 23,
    fat: 34,
    sodium: 430,
    image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https:%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F3757668.jpg"
    },
    {
    title: "Broiled Grouper Fillets with Romesco Sauce ",
    calories: 421,
    protein: 37,
    fat: 27,
    sodium: 422,
    image: "https://waterfrontseafoodmarket.com/wp-content/uploads/2022/05/BROILED-GROUPER-FILLETS-WITH-ROMESCO-SAUCE.jpeg"
    },
    {
    title: "Radicchio with Smoked Mozzarella, Balsamic Vinegar, and Prosciutto ",
    calories: 363,
    protein: 20,
    fat: 23,
    sodium: 1064,
    image: "https://i.pinimg.com/originals/13/54/69/1354691855421cf703c0f9947af19919.jpg"
    },
    {
    title: "Scrambled Eggs with Avocado, Onion, and Cheddar ",
    calories: 390,
    protein: 17,
    fat: 31,
    sodium: 211,
    image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Avocado-Scrambled-Eggs_EXPS_BMZ12_10302_B12_08_2b-2.jpg"
    },
    {
    title: "Spaghetti with Asparagus, Shiitake Mushrooms, Lemon, and Chives ",
    calories: 671,
    protein: 27,
    fat: 28,
    sodium: 428,
    image: "https://i.pinimg.com/originals/a4/6e/d8/a46ed8c80b1c9a7fbb39aa7c5516ba57.jpg"
    },
    {
    title: "Braised Rabbit with Grainy Mustard Sauce ",
    calories: 662,
    protein: 70,
    fat: 34,
    sodium: 902,
    image: "http://graphics8.nytimes.com/images/2014/04/09/dining/Mustardy-Braised-Rabbit-With-Carrots/Mustardy-Braised-Rabbit-With-Carrots-superJumbo.jpg"
    },
    {
    title: "Indian-Style Chicken with Ginger and Curry ",
    calories: 376,
    protein: 54,
    fat: 14,
    sodium: 121,
    image: "https://i.pinimg.com/originals/b0/6e/20/b06e20901dff92b5b769b987d3be0d3d.png"
    },
    {
    title: "Creamed Oysters and Mushrooms on Toast ",
    calories: 629,
    protein: 39,
    fat: 28,
    sodium: 581,
    image: "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_860,ar_3:2/v1/img/recipes/12/90/4/picimEz9R.jpg"
    },
    {
    title: "Halibut with Sambal Vinaigrette and Wasabi Cream ",
    calories: 417,
    protein: 43,
    fat: 26,
    sodium: 257,
    image: "https://i.pinimg.com/originals/3f/66/5a/3f665abfcc4583f79e897e0f0a82d282.jpg"
    },
    {
    title: "Linguine Avgolemono with Artichoke Hearts and Green Beans ",
    calories: 546,
    protein: 25,
    fat: 15,
    sodium: 393,
    image: "https://i.pinimg.com/736x/ee/b9/09/eeb909051b1cf58ff94136e661e3c1f8.jpg"
    },
    {
    title: "Country Bread Stuffing with Smoked Ham, Goat Cheese, and Dried Cherries ",
    calories: 425,
    protein: 18,
    fat: 24,
    sodium: 706,
    image: "https://i.pinimg.com/originals/58/af/2f/58af2fc1460f475f2ff440d8a1df729f.jpg"
    },
    {
    title: "Roasted-Garlic Beef Stew ",
    calories: 658,
    protein: 29,
    fat: 36,
    sodium: 491,
    image: "https://www.garnishandglaze.com/wp-content/uploads/2019/09/beef-stew-2-768x1150.jpg"
    },
    {
    title: "Trenette with Pesto, Potatoes and Green Beans ",
    calories: 856,
    protein: 24,
    fat: 38,
    sodium: 214,
    image: "https://hillstreetgrocer.com/application/files/5415/4776/8841/Trenette_with_pesto_potato_and_green_beans.jpg"
    },
    {
    title: "Spaghetti with Garlic Oil and Tomato ",
    calories: 567,
    protein: 16,
    fat: 15,
    sodium: 23,
    image: "https://www.servingdumplings.com/wp-content/uploads/2022/06/garlic-butter-tomato-spaghetti-3-38e77ff8.jpg"
    },
    {
    title: "French Lentil Soup ",
    calories: 340,
    protein: 16,
    fat: 13,
    sodium: 211,
    image: "https://www.daringgourmet.com/wp-content/uploads/2016/03/French-Lentil-Soup-4-edited.jpg"
    },
    {
    title: "Summer Vegetable Ragout with Exotic Curry Sauce ",
    calories: 742,
    protein: 20,
    fat: 33,
    sodium: 345,
    image: "https://images.prismic.io/arvindas/36b9d7f9-317b-4e09-ab2b-325c831b9210_Arvinda's+Vegetable+Ragout.jpg?auto=compress"
    },
    {
    title: "Pot Roast with Winter Root Vegetables ",
    calories: 556,
    protein: 55,
    fat: 21,
    sodium: 859,
    image: "https://m1.quebecormedia.com/emp/cl_prod/canadian_living-_-661b3e74-c7b7-4860-b695-f5d052c831e3-_-PotRoast631394474573.jpg?impolicy=resize&amp;width=1500&amp;height=1500"
    },
    {
    title: "Bread Stuffing with Crawfish, Bacon, and Collard Greens ",
    calories: 388,
    protein: 17,
    fat: 24,
    sodium: 534,
    image: "https://i.pinimg.com/originals/6a/a9/62/6aa9628d2f6a4f0dc13d927f6a16700b.jpg"
    },
    {
    title: "Whole Stuffed Artichokes Braised in White Wine ",
    calories: 602,
    protein: 22,
    fat: 39,
    sodium: 1673,
    image: "http://www.twoofakindcooks.com/wp-content/uploads/2015/04/Stuffed-Artichokes-Braised-in-White-Wine.png"
    },
    {
    title: "Crunchy Wasabi Salmon with Lime ",
    calories: 608,
    protein: 51,
    fat: 38,
    sodium: 166,
    image: "https://lh3.googleusercontent.com/oZb1Q_YxkJUpMz8btT2tjMRPKoKj1C8HoJezC1BTJ8PD2dAUYmXQ2d881MNpDrSdnj_GyGSXwZ_Wd-ZvzaG__R-L6dqvicDlDG-mi30=w1200-l75"
    },
    {
    title: "Veal or Turkey Roulades with Dried Apricot Rosemary Stuffing and Apricot Mustard Sauce ",
    calories: 358,
    protein: 27,
    fat: 17,
    sodium: 345,
    image: "https://i.pinimg.com/originals/0d/30/6c/0d306c0e7282b9008f1a2e86b3c9c562.jpg"
    },
    {
    title: "Ginger-Garlic Hummus ",
    calories: 404,
    protein: 20,
    fat: 11,
    sodium: 112,
    image: "https://ifoodreal.com/wp-content/uploads/2021/05/fg-garlic-hummus-recipe-2-1024x1024.jpg"
    },
    {
    title: "Apple, Sausage, and Parsnip Stuffing with Fresh Sage ",
    calories: 720,
    protein: 27,
    fat: 37,
    sodium: 1110,
    image: "http://www.thecomfortofcooking.com/wp-content/uploads/2014/09/BestEverSausageSageAppleStuffing-3.jpg"
    },
    {
    title: "Spicy Cioppino ",
    calories: 732,
    protein: 87,
    fat: 26,
    sodium: 2651,
    image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Spicy-Fresh-Seafood-Cioppino_exps55189_TH1999637B03_31_3bC_RMS.jpg?fit=696,1024"
    },
    {
    title: "Herbed Goat Cheese Tart ",
    calories: 347,
    protein: 15,
    fat: 29,
    sodium: 361,
    image: "https://spiceandstiletto.com/wp-content/uploads/2021/02/IMG_2056-scaled.jpg"
    },
    {
    title: "Grilled Pork Chops with Italian Relish ",
    calories: 335,
    protein: 31,
    fat: 20,
    sodium: 86,
    image: "https://outgrilling.com/wp-content/uploads/2022/11/Italian-Grilled-Pork-Chops-Recipe-Pin.jpg"
    },
    {
    title: "Gemelli with Asparagus, Smoked Salmon, and Dill ",
    calories: 615,
    protein: 23,
    fat: 18,
    sodium: 506,
    image: "https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/brown-butter-asparagus-gemelli-baa4c81a.jpg"
    },
    {
    title: "Brandied-Peach Pork Chops ",
    calories: 605,
    protein: 43,
    fat: 31,
    sodium: 121,
    image: "https://usapears.org/wp-content/uploads/2020/07/brined-pork-chops-1090.jpg"
    },
    {
    title: "Shrimp-Stuffed Portobello Mushrooms ",
    calories: 395,
    protein: 15,
    fat: 30,
    sodium: 653,
    image: "https://i.pinimg.com/736x/f1/58/69/f15869732293eab49bdf9157bde3b4cc.jpg"
    },
    {
    title: "Cheese and Hominy Quesadillas with Tropical Salsa ",
    calories: 508,
    protein: 22,
    fat: 25,
    sodium: 939,
    image: "https://therecipelife.com/wp-content/uploads/2021/12/Cheese_Salsa_Quesadilla-12.jpg"
    },
    {
    title: "Sugar Snap Peas and Pasta ",
    calories: 616,
    protein: 21,
    fat: 17,
    sodium: 109,
    image: "http://redirect.bigoven.com/pics/pasta-with-sugar-snap-peas-asparagu.jpg"
    },
    {
    title: "Beef Bourguignonne Pot Pie ",
    calories: 543,
    protein: 33,
    fat: 34,
    sodium: 305,
    image: "http://www.recipestation.com/wp-content/uploads/sites/736/2017/11/beef-bourguignonne-pot-pie.jpg"
    },
    {
    title: "Roasted Monkfish with Chanterelles, Leeks, and Ginger ",
    calories: 437,
    protein: 34,
    fat: 16,
    sodium: 291,
    image: "https://i.pinimg.com/736x/a7/4c/a5/a74ca52ed4020b4cf9ff740faa4ebbe7.jpg"
    },
    {
    title: "Green Onion and Mushroom Omelet ",
    calories: 399,
    protein: 21,
    fat: 30,
    sodium: 515,
    image: "https://www.thespruceeats.com/thmb/VkU91FxCCWHORB9NCeNI25OOGec=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MushroomOnionOmelet-56a57c515f9b58b7d0dd252d.JPG"
    },
    {
    title: "Asian Salmon Bowl with Lime Drizzle ",
    calories: 509,
    protein: 30,
    fat: 20,
    sodium: 511,
    image: "https://assets.epicurious.com/photos/54b804022722874e516a27ac/16:9/w_1280,c_limit/Asian-Salmon-Bowl-with-Lime-Drizzle-6x4.jpg?mbid=social_retweet"
    },
    {
    title: "Chicken, Mushroom, and Bok Choy Kebabs ",
    calories: 486,
    protein: 23,
    fat: 39,
    sodium: 868,
    image: "http://4.bp.blogspot.com/-bzIQZi7HP0g/T_YENH1G1tI/AAAAAAAAAqc/gY4WLFc3CZM/s1600/chicken,+mushroom+and+bok+choy+kebabs1.jpg"
    },
    {
    title: "Banana Chocolate Tart with Caramel and Chocolate Sauces ",
    calories: 1111,
    protein: 17,
    fat: 23,
    sodium: 58,
    image: "http://www.gfgoodness.com/wp-content/uploads/2014/02/banana-chocolate-tart.jpg"
    },
    {
    title: "Charred Squid and Conch Buljol with 'Soused' Green Figs and Tomato Chokha Coulis ",
    calories: 456,
    protein: 43,
    fat: 22,
    sodium: 384,
    image: "https://moveablefeast.relish.com/wp-content/uploads/2020/10/charred-squid-skewers-main.jpg"
    },
    {
    title: "Ham and Peach Kebabs with Marmalade-Mustard Glaze ",
    calories: 537,
    protein: 37,
    fat: 25,
    sodium: 3571,
    image: "https://juicydelicious.co.za/wp-content/uploads/2022/02/CheesyPeachHamKebabsLR-1-1280x854.jpg"
    },
    {
    title: "Tagliatelle with Duck Rag� ",
    calories: 469,
    protein: 34,
    fat: 11,
    sodium: 360,
    image: "https://secretlifeoffatbacks.com/wp-content/uploads/2015/03/Photo-8-3-15-6-54-02-pm.jpg"
    },
    {
    title: "Catfish with Herbed Lemon Cream ",
    calories: 473,
    protein: 28,
    fat: 31,
    sodium: 765,
    image: "https://friendseat.com/wp-content/uploads/2018/04/CATFISH-WITH-HERBED-LEMON-CREAM-RECIPE.jpg"
    },
    {
    title: "Spaghetti with Broccoli Rabe and Garlic ",
    calories: 691,
    protein: 19,
    fat: 29,
    sodium: 482,
    image: "https://i.pinimg.com/originals/b2/69/83/b26983bdcc979eed64546838286a461a.jpg"
    },
    {
    title: "Crab and Roasted Red Pepper Strata ",
    calories: 414,
    protein: 26,
    fat: 19,
    sodium: 1088,
    image: "https://media.eggs.ca/assets/RecipePhotos/_resampled/FillWyIxMjgwIiwiNzIwIl0/Crab-and-Roasted-Red-Pepper-Strata.jpg"
    },
    {
    title: "Chinese-Style Roast Chicken Thighs ",
    calories: 544,
    protein: 39,
    fat: 38,
    sodium: 1355,
    image: "https://bcboltvirgin.akamaized.net/content/images/1208/280903_1280x720.jpg"
    },
    {
    title: "Eggs Benedict Bread Pudding ",
    calories: 458,
    protein: 27,
    fat: 25,
    sodium: 586,
    image: "https://images.ctfassets.net/uw7yiu2kuigc/3rIG8xuS2zGSOCEBYVaz17/0937f77c17744925a04444b22e30c33d/Eggs-Benedict-Breakfast-Bread-Pudding-with-Spinach-and-Parmesan-Lead.jpg"
    },
    {
    title: "Pork Chops with Mustard Crust ",
    calories: 659,
    protein: 50,
    fat: 28,
    sodium: 780,
    image: "https://www.eatwell101.com/wp-content/uploads/2018/05/glazed-pork-chops-recipe-3.jpg"
    },
    {
    title: "Pasta with Anchovies and Tomatoes ",
    calories: 587,
    protein: 25,
    fat: 12,
    sodium: 1256,
    image: "https://coleycooks.com/wp-content/uploads/2018/09/Pasta-with-Olives-Anchovies-Tomatoes-Breadcrumbs-8.jpg"
    },
    {
    title: "Yellow Lentil Soup ",
    calories: 638,
    protein: 35,
    fat: 9,
    sodium: 2000,
    image: "http://www.simplyleb.com/wp-content/uploads/2017/05/yellowlentil-8.jpg"
    },
    {
    title: "Braised Veal Shanks with Bacon-Parmesan Crumbs ",
    calories: 818,
    protein: 95,
    fat: 33,
    sodium: 889,
    image: "https://www.saltys.com/wp-content/uploads/2019/11/Braised-Veal-Shank-2-1170x781.jpg"
    },
    {
    title: "Pork Chops with Mango-Basil Sauce ",
    calories: 451,
    protein: 43,
    fat: 24,
    sodium: 345,
    image: "https://i.pinimg.com/originals/03/b3/73/03b373bf88bbe0a9c5b7559ca7b09c8f.jpg"
    },
    {
    title: "Braised Beef and Veal with Tomato Gravy ",
    calories: 502,
    protein: 45,
    fat: 25,
    sodium: 965,
    image: "https://www.smalltownwoman.com/wp-content/uploads/2020/01/Braised-Beef-DSC_1520.jpg"
    },
    {
    title: "Beef Picadillo Chili ",
    calories: 681,
    protein: 75,
    fat: 25,
    sodium: 1575,
    image: "https://thenovicechefblog.com/wp-content/uploads/2021/01/Picadillo-1.jpeg"
    },
    {
    title: "Swordfish Kebabs ",
    calories: 515,
    protein: 34,
    fat: 29,
    sodium: 361,
    image: "https://kitchenconfidante.com/wp-content/uploads/2018/10/Grilled-Swordfish-Kebabs-with-Citrus-Herb-Salsa-kitchenconfidante.com-4502-750x1124.jpg"
    },
    {
    title: "Rabbit Cacciatore ",
    calories: 664,
    protein: 75,
    fat: 31,
    sodium: 161,
    image: "https://www.simplyrecipes.com/thmb/sLPvAyVDyFA9skx3XHJpmMUfdn4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2008__10__rabbit-cacciatore-horiz-a-1800-e53e651a66fe4740adf399a1af17c705.jpg"
    },
    {
    title: "Sage-Seared Pork Cutlets with Apples ",
    calories: 466,
    protein: 32,
    fat: 30,
    sodium: 83,
    image: "http://cooksmartsapp.s3-us-west-2.amazonaws.com/meal_photos/1005/20171218-Pork-Cutlets-with-Braised-Apples-NM-4.jpg"
    },
    {
    title: "Fettuccine with Smoked Salmon, Goat Cheese, Leeks and Zucchini ",
    calories: 524,
    protein: 20,
    fat: 21,
    sodium: 267,
    image: "http://cdn.gooseberrypatch.com/_images/sitenav/OLRBphotos/FettuccineWithSmokedSalmonDONE.jpg"
    },
    {
    title: "Pork Chops with Golden Onions and Wilted Tomatoes ",
    calories: 466,
    protein: 43,
    fat: 28,
    sodium: 408,
    image: "https://friendseat.com/wp-content/uploads/2018/04/PORK-CHOPS-WITH-GOLDEN-ONIONS-AND-WILTED-TOMATOES-RECIPE.jpg"
    },
    {
    title: "Braised Rotisserie Chicken With Bacon, Tomatoes, and Kale ",
    calories: 370,
    protein: 20,
    fat: 29,
    sodium: 502,
    image: "https://i.pinimg.com/736x/d9/23/af/d923afbea2dfacf3aafcc5f05a4ff8d3.jpg"
    },
    {
    title: "Pistachio-Crusted Chicken with Herbs and Mustard Cream Sauce ",
    calories: 529,
    protein: 38,
    fat: 34,
    sodium: 361,
    image: "https://www.recipetineats.com/wp-content/uploads/2022/11/Chicken-in-creamy-mustard-sauce_3.jpg?resize=71"
    },
    {
    title: "Fennel and Sausage Rag� Over Pasta ",
    calories: 730,
    protein: 36,
    fat: 17,
    sodium: 1239,
    image: "https://thesecretsuppersociety.com/wp-content/uploads/2021/05/Sausage-sage-and-fennel-pasta-1.jpg"
    },
    {
    title: "Porcini-Rubbed Turkey with Shiitake-Madeira Gravy ",
    calories: 522,
    protein: 25,
    fat: 27,
    sodium: 1201,
    image: "https://www.daringgourmet.com/wp-content/uploads/2019/12/Turkey-Gravy-1-square.jpg"
    },
    {
    title: "Linguine Primavera ",
    calories: 748,
    protein: 30,
    fat: 27,
    sodium: 444,
    image: "http://www.diversivore.com/wp-content/uploads/2018/04/Linguine-Primavera-banner-2.jpg"
    },
    {
    title: "Grilled Mahi-Mahi with Tomatillo-Avocado Salsa and Pineapple ",
    calories: 361,
    protein: 42,
    fat: 16,
    sodium: 195,
    image: "https://i.pinimg.com/originals/0d/f7/7f/0df77f4e04b3258211d87aa2ddcd59e1.jpg"
    },
    {
    title: "Thai-Curry Seafood Stew ",
    calories: 828,
    protein: 39,
    fat: 34,
    sodium: 1628,
    image: "https://www.thespruceeats.com/thmb/aJTlqdYIWsYxI9IgPsUUTDZaUfI=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/Thaiseafoodcurry-GettyImages-522528590-5a18904122fa3a0037bb2378.jpg"
    },
    {
    title: "Green Curry Pork Tenderloin ",
    calories: 462,
    protein: 33,
    fat: 32,
    sodium: 690,
    image: "https://assets.bonappetit.com/photos/5824f2dcd2d071f65de3fbbf/16:9/w_1280,c_limit/green-curry-pork-tenderloin.jpg"
    },
    {
    title: "Open Shrimp Ravioli with Lime Ginger Butter ",
    calories: 588,
    protein: 26,
    fat: 21,
    sodium: 1221,
    image: "https://i.pinimg.com/originals/8e/a2/1f/8ea21f67eb7b9e9279ae9880bd19e621.jpg"
    },
    {
    title: "Potato Gratin with Mustard and Cheddar Cheese ",
    calories: 404,
    protein: 17,
    fat: 18,
    sodium: 817,
    image: "https://i.pinimg.com/originals/22/48/d8/2248d8bb51b484dd83bc88ca46e0fe73.jpg"
    },
    {
    title: "Veal Scallops with Lemon and Artichokes ",
    calories: 301,
    protein: 23,
    fat: 17,
    sodium: 773,
    image: "http://images.heb.com/is/image/HEBGrocery/recipe-hm-large/veal-scallops-with-mushroom-sauce-recipe.jpg"
    },
    {
    title: "Slow-Roasted Red-Wine-Lacquered Salmon Fillet ",
    calories: 665,
    protein: 55,
    fat: 36,
    sodium: 1905,
    image: "https://images.heb.com/is/image/HEBGrocery/003608031"
    },
    {
    title: "Phyllo-Wrapped Salmon with Leeks and Red Bell Pepper ",
    calories: 593,
    protein: 33,
    fat: 37,
    sodium: 666,
    image: "https://more.ctv.ca/content/dam/bellmedia/marilyn/images/food/2022/11/MMIE-EP11-3-November-THUMB.jpg"
    },
    {
    title: "Ricotta Cheesecake ",
    calories: 457,
    protein: 19,
    fat: 26,
    sodium: 333,
    image: "https://bakerbynature.com/wp-content/uploads/2015/02/IMG_6082.jpg"
    },
    {
    title: "Cheddar Cheese and Red Bell Pepper Strata ",
    calories: 499,
    protein: 24,
    fat: 32,
    sodium: 904,
    image: "https://secureservercdn.net/50.62.198.97/h6m.aac.myftpupload.com/wp-content/uploads/2021/08/Cheddar-Cheese-with-Scotch-Bonnet-Chili-Red-Peppers.png"
    },
    {
    title: "Black Bean Chili with Butternut Squash and Swiss Chard ",
    calories: 460,
    protein: 23,
    fat: 9,
    sodium: 654,
    image: "https://allthehealthythings.com/wp-content/uploads/2021/09/Turkey-and-Butternut-Squash-Chili-6-1024x1536.jpg"
    },
    {
    title: "Osso Buco ",
    calories: 618,
    protein: 61,
    fat: 31,
    sodium: 1492,
    image: "nan"
    },
    {
    title: "Kid-Friendly Turkey Burgers ",
    calories: 681,
    protein: 68,
    fat: 21,
    sodium: 1246,
    image: "https://keviniscooking.com/wp-content/uploads/2022/02/Grilled-Turkey-Burgers-square.jpg"
    },
    {
    title: "Orzo Pilaf with Green Onions and Parmesan Cheese ",
    calories: 422,
    protein: 19,
    fat: 9,
    sodium: 340,
    image: "nan"
    },
    {
    title: "Baked Polenta with Fontina Cheese ",
    calories: 365,
    protein: 16,
    fat: 17,
    sodium: 706,
    image: "https://www.thespruceeats.com/thmb/G_iFNUEtkQEicd14mpXRpo2bCKU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/easy-baked-polenta-with-parmesan-cheese-3057179-hero-01-5c291853c9e77c0001b19643.jpg"
    },
    {
    title: "Achiote Chicken with Tangerine Sauce ",
    calories: 362,
    protein: 54,
    fat: 10,
    sodium: 109,
    image: "https://cookingontheweekends.com/wp-content/uploads/2018/05/Marinated-Achiote-Chicken-Recipe4-610x915.jpg"
    },
    {
    title: "Pasta Tonnato Nests ",
    calories: 838,
    protein: 39,
    fat: 15,
    sodium: 332,
    image: "nan"
    },
    {
    title: "Scallion Wild Rice Crepes with Mushroom Filling and Red Pepper Sauce ",
    calories: 645,
    protein: 19,
    fat: 35,
    sodium: 1275,
    image: "https://i.pinimg.com/originals/b2/42/04/b24204fa873914baaea91373257f8b7b.jpg"
    },
    {
    title: "Miso-Marinated Salmon with Cucumber-Daikon Relish ",
    calories: 418,
    protein: 36,
    fat: 28,
    sodium: 125,
    image: "https://thecozyapron.com/wp-content/uploads/2020/09/blackened-salmon_thecozyapron_4.jpg"
    },
    {
    title: "Lamb Stew with Leeks and Baby Artichokes ",
    calories: 545,
    protein: 65,
    fat: 22,
    sodium: 414,
    image: "http://www.strawberryplum.com/wp-content/uploads/2014/03/Spring-Lamb-Stew-with-Artichokes.jpg"
    },
    {
    title: "Grilled Tuna and Peppers with Caper Vinaigrette ",
    calories: 325,
    protein: 43,
    fat: 15,
    sodium: 1050,
    image: "https://i.pinimg.com/originals/d3/1d/6f/d31d6f32182ffc939f2378ad9e31f8a7.jpg"
    },
    {
    title: "Cowboy Burgers ",
    calories: 476,
    protein: 25,
    fat: 26,
    sodium: 921,
    image: "https://www.dontgobaconmyheart.co.uk/wp-content/uploads/2021/05/cowboy-burger-768x943.jpg"
    },
    {
    title: "Chicken Pasta Salad in Creamy Curry Dressing ",
    calories: 588,
    protein: 55,
    fat: 35,
    sodium: 179,
    image: "http://www.simplystacie.net/wp-content/uploads/2016/05/creamy-curry-chicken-pasta-salad-5-1-680x1020.jpg"
    },
    {
    title: "Roasted-Vegetable Lasagne ",
    calories: 516,
    protein: 19,
    fat: 35,
    sodium: 1392,
    image: "https://www.wearesovegan.com/wp-content/uploads/2021/01/veganroastedvegetablelasagnerecipeh2.jpg"
    },
    {
    title: "Herbed Tuna Burgers with Tapenade and Tomatoes ",
    calories: 349,
    protein: 40,
    fat: 15,
    sodium: 691,
    image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Tuna-Burgers_EXPS_SDFM17_925_C10_06_2b-5.jpg?fit=700"
    },
    {
    title: "Cod Chowder with Saffron and Fingerling Potatoes ",
    calories: 327,
    protein: 37,
    fat: 12,
    sodium: 971,
    image: "https://deliciouslittlebites.com/wp-content/uploads/2022/04/Cod-Chowder-Recipe-Image-5-2-683x1024.jpg"
    },
    {
    title: "Saut�ed Pork Tenderloin with Prunes ",
    calories: 587,
    protein: 49,
    fat: 24,
    sodium: 712,
    image: "https://www.giangiskitchen.com/wp-content/uploads/2020/09/pork-prunes11-1-of-1-2400x1330.jpg"
    },
    {
    title: "Roasted Asparagus and Red Onion Quesadillas ",
    calories: 677,
    protein: 24,
    fat: 40,
    sodium: 1227,
    image: "https://i0.wp.com/ketchumkitchen.com/wp-content/uploads/2015/06/roasted-asparagus.jpg"
    },
    {
    title: "Chicken with Prosciutto, Rosemary, and White Wine ",
    calories: 502,
    protein: 44,
    fat: 30,
    sodium: 891,
    image: "https://i.pinimg.com/originals/50/c2/08/50c208376d9f12bb99c7f1b18cbed712.jpg"
    },
    {
    title: "Pork Tenderloin with Tart Cherry, Port, and Caraway Sauce ",
    calories: 372,
    protein: 48,
    fat: 12,
    sodium: 123,
    image: "https://i.pinimg.com/originals/86/4e/a9/864ea914ca4058b8b36dbdb5e6a5adae.jpg"
    },
    {
    title: "Macaroni and Cheese Carbonara ",
    calories: 637,
    protein: 31,
    fat: 38,
    sodium: 1208,
    image: "https://www.savorywithsoul.com/wp-content/uploads/2020/04/MacCarb-52-680x1024.jpg"
    },
    {
    title: "Folly Island Shrimp and Grits ",
    calories: 717,
    protein: 44,
    fat: 35,
    sodium: 1445,
    image: "https://sparkpeo.hs.llnwd.net/e1/resize/630m620/e4/nw/5/6/l56018507.jpg"
    },
    {
    title: "Gemelli with Broccoli Rabe and Anchovies ",
    calories: 828,
    protein: 26,
    fat: 32,
    sodium: 763,
    image: "https://i.pinimg.com/originals/ef/d1/c0/efd1c08d62b134bab819ca9f8b7da778.jpg"
    },
    {
    title: "White-Bean and Asparagus Salad ",
    calories: 772,
    protein: 44,
    fat: 36,
    sodium: 1236,
    image: "https://www.acouplecooks.com/wp-content/uploads/2020/01/Asparagus-Salad-009-735x919.jpg"
    },
    {
    title: "Oriental Chicken ",
    calories: 621,
    protein: 54,
    fat: 34,
    sodium: 575,
    image: "nan"
    },
    {
    title: "Pimiento Mac and Cheese ",
    calories: 420,
    protein: 19,
    fat: 21,
    sodium: 412,
    image: "https://i.pinimg.com/originals/a6/d9/3c/a6d93c754ac789fca46e8cce222070b5.jpg"
    },
    {
    title: "Beef and Barley Soup ",
    calories: 376,
    protein: 22,
    fat: 19,
    sodium: 682,
    image: "https://www.thechunkychef.com/wp-content/uploads/2018/01/Slow-Cooker-Beef-Barley-Soup-Recipe-2.jpg"
    },
    {
    title: "Pork Chops in Balsamic Cherry Sauce ",
    calories: 357,
    protein: 31,
    fat: 21,
    sodium: 585,
    image: "https://whitneybond.com/wp-content/uploads/2017/10/Cherry-Balsamic-Pork-Chops-Square.jpg"
    },
    {
    title: "Vegetable and Wild Rice Salad ",
    calories: 435,
    protein: 17,
    fat: 21,
    sodium: 1009,
    image: "https://www.fifteenspatulas.com/wp-content/uploads/2018/11/Wild-Rice-Salad-Fifteen-Spatulas-1-640x959.jpg"
    },
    {
    title: "Asparagus and Shiitake Risotto ",
    calories: 625,
    protein: 22,
    fat: 23,
    sodium: 641,
    image: "https://safe.org.nz/wp-content/uploads/2019/09/ShiitakeBaconRisotto.jpg"
    },
    {
    title: "Chunky Clam and Bacon Dip with Pita Toasts ",
    calories: 479,
    protein: 30,
    fat: 35,
    sodium: 522,
    image: "https://www.thechunkychef.com/wp-content/uploads/2018/12/Creamy-Bacon-Cheese-Dip-hands-768x805.jpg"
    },
    {
    title: "Steamed Mussels with Pernod, Celery Root and Saffron A�oli ",
    calories: 616,
    protein: 42,
    fat: 32,
    sodium: 1211,
    image: "https://i.pinimg.com/736x/8f/46/2c/8f462c1605db6bfd0e54b31d5ecd5741--mussel-recipes-wine-recipes.jpg"
    },
    {
    title: "Chicken Salad Sandwiches with Blue Cheese ",
    calories: 344,
    protein: 22,
    fat: 17,
    sodium: 789,
    image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Blue-Cheese-Chicken-Salad-Sandwiches_EXPS_SDAM17_54891_D12_09_3b.jpg?fit=700%2C1024"
    },
    {
    title: "Curried Sweet Potato Squares with Peanut Phyllo Crust ",
    calories: 341,
    protein: 17,
    fat: 21,
    sodium: 208,
    image: "https://i1.wp.com/www.greateightfriends.com/wp-content/uploads/2016/11/Sweet-Potato-Squares-v-1.jpeg?resize=800%2C1067&amp;ssl=1"
    },
    {
    title: "Caramelized Onion and Portobello Mushroom Soup with Goat Cheese Croutons ",
    calories: 356,
    protein: 15,
    fat: 15,
    sodium: 1620,
    image: "https://i.pinimg.com/736x/48/a8/5c/48a85c9f7861fb2715cdb82540ffd861.jpg"
    },
    {
    title: "Mussels with Spicy Italian Sausage ",
    calories: 305,
    protein: 29,
    fat: 12,
    sodium: 1403,
    image: "http://www.macheesmo.com/wp-content/uploads/2016/09/Spicy-Mussel-Linguine.jpg"
    },
    {
    title: "Steak Sandwiches with Tomato Pesto ",
    calories: 629,
    protein: 30,
    fat: 40,
    sodium: 451,
    image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps28642_SD153322A04_03_1b-AP.jpg"
    },
    {
    title: "Sesame, Lemon and Curry Chicken Strips ",
    calories: 361,
    protein: 40,
    fat: 14,
    sodium: 99,
    image: "https://lexiscleankitchen.com/wp-content/uploads/2018/02/Sesame-Chicken-Strips-Paleo-Low-Carb-500x750.jpg"
    },
    {
    title: "Filet Mignon with Stroganov Sauce ",
    calories: 489,
    protein: 19,
    fat: 26,
    sodium: 955,
    image: "https://lisasdinnertimedish.com/wp-content/uploads/2013/02/Filet-Mignon-with-Stroganof-Sauce-098.jpg"
    },
    {
    title: "Baked Chicken with Mushrooms and Artichokes ",
    calories: 370,
    protein: 40,
    fat: 16,
    sodium: 739,
    image: "https://media1.popsugar-assets.com/files/thumbor/vtrCuu0mpraDRMXTeAweCcj-ekM/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2015/09/17/841/n/1922195/3286e689bcf714a2_Baked-Chicken-and-Mushroom-Skillet/i/Baked-Chicken-Mushroom-Skillet.jpg"
    },
    {
    title: "Souffl� Pancake ",
    calories: 734,
    protein: 20,
    fat: 28,
    sodium: 299,
    image: "https://www.foodandwine.com/thmb/T5ou5OFndkX69-KD5LpyZiXw8Ls=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/japanese-souffle-pancakes-FT-RECIPE0120-08d2fab14165488597a36e17678dde33.jpg"
    },
    {
    title: "Spicy Orange Chicken Stir-Fry ",
    calories: 459,
    protein: 29,
    fat: 16,
    sodium: 514,
    image: "https://thatspicychick.com/wp-content/uploads/2020/11/Spicy-Pepper-Chicken-front-view-in-serving-bowl.jpg"
    },
    {
    title: "Chicken with Baby Onions ",
    calories: 481,
    protein: 30,
    fat: 35,
    sodium: 160,
    image: "http://www.wizardrecipes.com/wp-content/uploads/2012/12/snap985.jpg"
    },
    {
    title: "Turkey Hash ",
    calories: 461,
    protein: 21,
    fat: 27,
    sodium: 122,
    image: "https://www.chiselandfork.com/wp-content/uploads/2018/09/turkey-hash-1.jpg"
    },
    {
    title: "Chicken and Green Onion Cobbler ",
    calories: 718,
    protein: 50,
    fat: 37,
    sodium: 839,
    image: "http://lifemadesimplebakes.com/wp-content/uploads/2012/06/Rustic-Chicken-and-Vegetable-Cobbler-2.jpg"
    },
    {
    title: "Roasted Loin of Veal with Garlic, Shallots, and Mustard Gravy ",
    calories: 460,
    protein: 44,
    fat: 20,
    sodium: 360,
    image: "https://i.pinimg.com/originals/78/83/3b/78833b8d29f9a2514f31bde9f3f237b5.jpg"
    },
    {
    title: "Linguine with Mussels ",
    calories: 751,
    protein: 41,
    fat: 26,
    sodium: 1564,
    image: "https://kitchenswagger.com/wp-content/uploads/2018/03/mussels-over-creamy-linguini3.jpg"
    },
    {
    title: "Apple and Pork Stuffing ",
    calories: 366,
    protein: 19,
    fat: 24,
    sodium: 729,
    image: "https://i.pinimg.com/originals/73/66/f0/7366f074c413e83d321133a379ef2f37.jpg"
    },
    {
    title: "Spicy Asian Noodle and Chicken Salad ",
    calories: 371,
    protein: 27,
    fat: 11,
    sodium: 517,
    image: "https://feelgoodfoodie.net/wp-content/uploads/2017/05/Asian-Noodle-Salad-9.jpg"
    },
    {
    title: "Buffalo and Pancetta Meat Loaf ",
    calories: 690,
    protein: 50,
    fat: 36,
    sodium: 1449,
    image: "https://www.mi40nation.com/wp-content/uploads/2013/11/3.-Buffaloaf-�-Buffalo-Meat-Loaf.jpg"
    },
    {
    title: "Smoked-Salmon Quesadillas with Warm Tomatoes and Arugula ",
    calories: 687,
    protein: 30,
    fat: 38,
    sodium: 1479,
    image: "https://i.pinimg.com/originals/d7/a2/43/d7a2430fc832ce7a1774223aa4fde5dc.jpg"
    },
    {
    title: "Spinach and Cheese Strata ",
    calories: 509,
    protein: 30,
    fat: 30,
    sodium: 1201,
    image: "https://www.onceuponachef.com/images/2015/03/Spinach-and-Cheese-Strata-1200x795.jpg"
    },
    {
    title: "Spinach- and Cheese- Stuffed Pasta Shells ",
    calories: 637,
    protein: 32,
    fat: 18,
    sodium: 1435,
    image: "https://www.simplehealthykitchen.com/wp-content/uploads/2016/04/spinach-cheese-stuffed-shells-baked-1.jpg"
    },
    {
    title: "Grilled Lemon Chicken Salad with Dill Cream Dressing ",
    calories: 617,
    protein: 49,
    fat: 37,
    sodium: 307,
    image: "https://cafedelites.com/wp-content/uploads/2016/07/Lemon-Herb-Mediterranean-Chicken-Salad-208.jpg"
    },
    {
    title: "Goat Cheese Pizzas with Indian-Spiced Tomatoes and Mustard Greens ",
    calories: 805,
    protein: 31,
    fat: 25,
    sodium: 1150,
    image: "https://mountainberryeats.com/wp-content/uploads/2020/10/PearGoatCheesePizza_Blog-13-1020x1536.jpg"
    },
    {
    title: "Fish in Foil with Sweet Onions, Tomatoes, and Mojo Verde ",
    calories: 729,
    protein: 97,
    fat: 22,
    sodium: 330,
    image: "https://cleanfoodcrush.com/wp-content/uploads/2020/08/SWEET-ONION-TOMATO-SALAD-CleanFoodCrush.jpg"
    },
    {
    title: "Creamy Lima Bean Soup with Bacon ",
    calories: 403,
    protein: 19,
    fat: 20,
    sodium: 475,
    image: "https://i.pinimg.com/originals/a0/d9/ec/a0d9ec50ec5654f66458a8fcb69eba01.jpg"
    },
    {
    title: "Flank Steak with Chimichurri ",
    calories: 459,
    protein: 37,
    fat: 32,
    sodium: 830,
    image: "https://40aprons.com/wp-content/uploads/2019/02/chimichurri-flank-steak-7.jpg"
    },
    {
    title: "Veal Saut� with Merlot Pan Sauce ",
    calories: 439,
    protein: 29,
    fat: 27,
    sodium: 126,
    image: "https://i.pinimg.com/originals/2e/2f/80/2e2f805bd0bb6b577a63843f0e4f8d42.jpg"
    },
    {
    title: "Chicken Vegetable Soup with Lime and Cilantro ",
    calories: 559,
    protein: 36,
    fat: 28,
    sodium: 512,
    image: "https://www.onelovelylife.com/wp-content/uploads/2022/01/Chicken-Lime-Soup12-2.jpg"
    },
    {
    title: "Beef Stew with Herbed Dumplings ",
    calories: 794,
    protein: 80,
    fat: 25,
    sodium: 1952,
    image: "https://www.kyleecooks.com/wp-content/uploads/2019/03/Crockpot-Beef-Stew-with-Dumplings-21-1024x1536.jpg"
    },
    {
    title: "Chicken with Olives and Feta Cheese ",
    calories: 451,
    protein: 28,
    fat: 33,
    sodium: 394,
    image: "https://i0.wp.com/www.freutcake.com/wp-content/uploads/2019/03/Greek-Lemon-Chicken-with-Feta-3.jpg?resize=760%2C1140"
    },
    {
    title: "Tarragon-Caper Egg Salad Sandwiches with Smoked Salmon ",
    calories: 397,
    protein: 16,
    fat: 23,
    sodium: 690,
    image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Smoked-Salmon-Egg-Salad_EXPS_BFCBBZ19_39099_E01_11_1b-2.jpg"
    },
    {
    title: "Gravlaks with Sweet Mustard Sauce ",
    calories: 517,
    protein: 46,
    fat: 30,
    sodium: 1227,
    image: "https://i.pinimg.com/originals/9f/93/de/9f93deb8e9fedd725470f95e17fee890.jpg"
    },
    {
    title: "Huevos Rancheros Verdes ",
    calories: 509,
    protein: 26,
    fat: 37,
    sodium: 416,
    image: "https://media.blueapron.com/recipes/1199/square_newsletter_images/20150522-1714-14425-2136/2P_040815_2_20R_051915_20Huevos_20Rancheros-6047.jpg?quality=80&amp;width=850"
    },
    {
    title: "Fish Vermicelli with Fresh Dill and Pineapple Sauce ",
    calories: 709,
    protein: 41,
    fat: 35,
    sodium: 3720,
    image: "https://blog.misfitsmarket.com/wp-content/uploads/2021/09/shrimpnoodlebowl_1x1-1024x1024.jpg"
    },
    {
    title: "Tuna- and Potato-Stuffed Ancho Chiles ",
    calories: 656,
    protein: 24,
    fat: 32,
    sodium: 202,
    image: "https://i.pinimg.com/originals/3b/94/52/3b9452d2cd3fbf0bb535ab8a637e9c6b.jpg"
    },
    {
    title: "Broiled Ham Steaks with Rhubarb Chutney ",
    calories: 657,
    protein: 53,
    fat: 16,
    sodium: 4991,
    image: "https://www.smalltownwoman.com/wp-content/uploads/2019/05/ham-steak-DSC_0978.jpg"
    },
    {
    title: "Three-Cheese Baked Eggs with Roasted Peppers ",
    calories: 429,
    protein: 26,
    fat: 30,
    sodium: 889,
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/roasted-pepper-and-baked-eggs-74d4b8d.jpg?quality=90&amp;resize=440,400"
    },
    {
    title: "Two-Bean Turkey Chili ",
    calories: 511,
    protein: 41,
    fat: 12,
    sodium: 245,
    image: "https://www.momontimeout.com/wp-content/uploads/2021/02/turkey-chili-squared.jpg"
    },
    {
    title: "Veal Cacciatore ",
    calories: 630,
    protein: 75,
    fat: 32,
    sodium: 518,
    image: "https://3.bp.blogspot.com/_Z_sYKeIQDV0/S_gH_frrN_I/AAAAAAAACn8/oIi27DcTuNU/s1600/IMG_2259.JPG"
    },
    {
    title: "Gemelli with Zucchini, Tomatoes, and Bacon ",
    calories: 578,
    protein: 20,
    fat: 28,
    sodium: 488,
    image: "https://assets.bonappetit.com/photos/57b1d8ef53e63daf11a4f117/16:9/w_1280,c_limit/mare_gemelli_with_zucchini_tomatoes_and_bacon_h.jpg?mbid=social_retweet"
    },
    {
    title: "Indian-Spiced Chicken, Eggplant, and Tomato Skewers ",
    calories: 570,
    protein: 49,
    fat: 35,
    sodium: 1728,
    image: "https://i.pinimg.com/originals/eb/11/c5/eb11c5d70a493ee1eb08fbcea29d28b7.png"
    },
    {
    title: "Pasta with Squid, Tomatoes, and Capers ",
    calories: 665,
    protein: 28,
    fat: 29,
    sodium: 258,
    image: "https://i.pinimg.com/originals/6a/fa/70/6afa70b950ca5ab8ff2ece2309ce125c.jpg"
    },
    {
    title: "Penne with Smoked Trout and Sugar Snap Peas ",
    calories: 594,
    protein: 28,
    fat: 12,
    sodium: 691,
    image: "https://lh5.googleusercontent.com/proxy/hh1-sgu3ESQccanh5rbZl1qUR3Qv9fGKQBfbi0pKzk3XE2ixF5uz1yOpIPvURdYMBvdyzrr_CjXYTFslrlneNdp0syTLc4rGO7HAjV21ZZPlc6E=s0-d"
    },
    {
    title: "Orzo Carbonara ",
    calories: 514,
    protein: 19,
    fat: 29,
    sodium: 394,
    image: "nan"
    },
    {
    title: "Fillet of Trout with Tomato ",
    calories: 401,
    protein: 35,
    fat: 22,
    sodium: 787,
    image: "https://st.focusedcollection.com/11312302/i/1800/focused_150021552-stock-photo-fried-trout-fillet-tomato-cucumber.jpg"
    },
    {
    title: "Cherries in Almond Syrup Over Greek Yogurt ",
    calories: 520,
    protein: 29,
    fat: 26,
    sodium: 159,
    image: "https://assets.bonappetit.com/photos/57af6ba353e63daf11a4e562/16:9/w_1280,c_limit/cherries-in-almond-syrup-over-greek-yogurt-6461.jpg"
    },
    {
    title: "Baked Pasta with Tomatoes, Shiitake Mushrooms, and Prosciutto ",
    calories: 830,
    protein: 42,
    fat: 37,
    sodium: 1624,
    image: "http://eliotseats.com/wp-content/uploads/2019/01/20190113_090557-COLLAGE.jpg"
    },
    {
    title: "Linguine with Uncooked Tomato, Arugula, and Olive Sauce ",
    calories: 611,
    protein: 19,
    fat: 17,
    sodium: 106,
    image: "https://www.onceuponachef.com/images/2020/08/Linguine-with-Creamy-Arugula-Walnut-Pesto-scaled.jpg"
    },
    {
    title: "Shrimp, Scallop, and Cod Lasagne ",
    calories: 533,
    protein: 35,
    fat: 30,
    sodium: 741,
    image: "https://hoorray-storage-prod.s3.amazonaws.com/images/recipes/08284080-6374-11e5-a693-ad8522573a4f-large"
    },
    {
    title: "Lamb and Shiitake Stew with Tomato-Chianti Sauce ",
    calories: 383,
    protein: 30,
    fat: 10,
    sodium: 160,
    image: "https://i.pinimg.com/originals/04/b4/95/04b495f1b55e8ff2ec650ebf05637c45.jpg"
    },
    {
    title: "Grilled Lemongrass Beef and Noodle Salad ",
    calories: 627,
    protein: 33,
    fat: 25,
    sodium: 1125,
    image: "https://idealistfoods.com/wp-content/uploads/2018/09/Recipe_Grilled_Lemongrass_Beef_Salad_optimized-1024x768.jpg"
    },
    {
    title: "Cioppino Seafood Stew With Gremolata Toasts ",
    calories: 561,
    protein: 49,
    fat: 19,
    sodium: 2038,
    image: "https://assets.epicurious.com/photos/54b87c137cbba01c0db7ff8d/master/pass/51248830_cioppino_1x1.jpg"
    },
    {
    title: "Creamy Fettuccine with Prosciutto, Asparagus, Mushrooms, and Peas ",
    calories: 525,
    protein: 23,
    fat: 19,
    sodium: 658,
    image: "https://1.bp.blogspot.com/-zKDBLJMxfCQ/XOhiFQZxhbI/AAAAAAAADAc/k7J2wJyh_nMrOJCJqJtYwxzLj6V6b9dogCLcBGAs/s1600/Creamy%2BMushroom%2BFettuccine.jpg"
    },
    {
    title: "Sauteed Pasta with Lobster ",
    calories: 705,
    protein: 67,
    fat: 17,
    sodium: 1452,
    image: "https://assets.epicurious.com/photos/561025ce7b55306961bffe9f/1:1/w_600%2Ch_600/103190.jpg"
    },
    {
    title: "Tomato, Garlic, and Potato Frittata ",
    calories: 326,
    protein: 18,
    fat: 21,
    sodium: 773,
    image: "http://www.gourmetproject.ca/wp-content/uploads/2008/06/170_tomato_garlic_and_potato_frittata_p632.jpg"
    },
    {
    title: "Scottish Farmhouse Eggs ",
    calories: 398,
    protein: 19,
    fat: 21,
    sodium: 529,
    image: "https://i.pinimg.com/originals/76/0d/b0/760db01895e028bc5e07f65558887607.png"
    },
    {
    title: "Braised Chicken in Sun-Dried Tomato Cream ",
    calories: 418,
    protein: 55,
    fat: 15,
    sodium: 162,
    image: "https://tammycirceo.com/wp-content/uploads/2019/10/IMG_8905-W-1024x731.jpg"
    },
    {
    title: "Soup Doria ",
    calories: 579,
    protein: 23,
    fat: 24,
    sodium: 964,
    image: "https://i.pinimg.com/originals/4e/f6/01/4ef60199f61bae35135e37fcafa8e4ba.jpg"
    },
    {
    title: "Glazed and Lacquered Roast Turkey ",
    calories: 681,
    protein: 82,
    fat: 34,
    sodium: 5204,
    image: "https://zestfulkitchen.com/wp-content/uploads/2018/11/Glazed-roast-turkey-1-of-1-683x1024.jpg"
    },
    {
    title: "Beef and Broccoli Stir-Fry ",
    calories: 316,
    protein: 28,
    fat: 19,
    sodium: 1268,
    image: "https://www.jocooks.com/wp-content/uploads/2019/04/beef-and-broccoli-1-11.jpg"
    },
    {
    title: "Smoked Fish Trio ",
    calories: 783,
    protein: 98,
    fat: 40,
    sodium: 421,
    image: "https://res.cloudinary.com/dzmyhjsky/image/upload/h_550,ar_6:4,c_pad,g_north,b_white,q_auto:good,f_auto/v1594631769/suppliers/the-weald-smokery/products/smoked-fish-trio1594631777.jpg"
    },
    {
    title: "Rigatoni with Spicy Sun-Dried Tomato Sauce ",
    calories: 763,
    protein: 35,
    fat: 15,
    sodium: 958,
    image: "https://www.thefoodjoy.com/wp-content/uploads/2021/01/spicy-rigatoni-1-1900x2555.jpg"
    },
    {
    title: "Orange Currant Noodle Kugel ",
    calories: 583,
    protein: 18,
    fat: 30,
    sodium: 351,
    image: "https://thetoastykitchen.com/wp-content/uploads/2020/12/serving-of-noodle-kugel-on-wooden-server.jpg"
    },
    {
    title: "Chicken with Red Bell Peppers ",
    calories: 440,
    protein: 55,
    fat: 19,
    sodium: 129,
    image: "https://www.lecremedelacrumb.com/wp-content/uploads/2021/05/mediterranean-chicken-roasted-red-pepper-sauce-7sm-8.jpg"
    },
    {
    title: "Hainanese Chicken Rice ",
    calories: 810,
    protein: 52,
    fat: 39,
    sodium: 1718,
    image: "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/154660.jpg"
    },
    {
    title: "Spiced Beef Corn Bread Cobbler ",
    calories: 533,
    protein: 34,
    fat: 27,
    sodium: 1039,
    image: "http://4.bp.blogspot.com/-OrEsFvX-a1U/TwYr_Ygq_9I/AAAAAAAACBE/pgCD_do_Zw0/s1600/Spiced+Beef+Cornbread+Cobbler.jpg"
    },
    {
    title: "Sauerbraten ",
    calories: 417,
    protein: 50,
    fat: 19,
    sodium: 1362,
    image: "https://houseofnasheats.com/wp-content/uploads/2022/09/German-Sauerbraten-Recipe-Square-1.jpg"
    },
    {
    title: "Pork Tenderloin with Balsamic-Cranberry Sauce ",
    calories: 331,
    protein: 28,
    fat: 14,
    sodium: 103,
    image: "http://prairiecalifornian.com/wp-content/uploads/2017/07/Balsamic-Pork-Tenderloin-3.jpg"
    },
    {
    title: "Turkey Burritos with Salsa and Cilantro ",
    calories: 551,
    protein: 42,
    fat: 27,
    sodium: 938,
    image: "https://cdn.pinchofyum.com/wp-content/uploads/Turkey-Burritos-3.jpg"
    },
    {
    title: "Eggplant Manicotti with Ricotta, Asiago, and Spinach Filling ",
    calories: 381,
    protein: 18,
    fat: 25,
    sodium: 514,
    image: "https://i.pinimg.com/originals/5d/cd/0f/5dcd0fc2cdb5c87d09d19539f3b03520.png"
    },
    {
    title: "Pasta Jambalaya ",
    calories: 779,
    protein: 43,
    fat: 31,
    sodium: 1505,
    image: "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_924/https://www.smalltownwoman.com/wp-content/uploads/2018/05/Jambalaya-Pasta-19.jpg"
    },
    {
    title: "Chicken with Endive, Radicchio and Balsamic Vinegar Glaze ",
    calories: 445,
    protein: 55,
    fat: 17,
    sodium: 124,
    image: "https://xoxobella.com/wp-content/uploads/2021/06/radicchio_endive_chicken_salad_with_creamy_honey_mustard_dressing_bella_bucchiotti_20.jpg"
    },
    {
    title: "Pizza Dough ",
    calories: 914,
    protein: 32,
    fat: 27,
    sodium: 1569,
    image: "https://www.cookingclassy.com/wp-content/uploads/2020/05/pizza-dough-11.jpg"
    },
    {
    title: "Mustardy Kale with Bacon ",
    calories: 331,
    protein: 20,
    fat: 18,
    sodium: 457,
    image: "http://www.52newfoods.com/wp-content/uploads/2019/03/Mustardy-Mushroom-and-Kale-Stroganoff-min.jpg"
    },
    {
    title: "Rintaro's Beef Curry ",
    calories: 475,
    protein: 42,
    fat: 18,
    sodium: 376,
    image: "https://i.pinimg.com/originals/d1/17/33/d11733dfadd6b4b87e9768acff2b67d0.jpg"
    },
    {
    title: "French Onion Soup ",
    calories: 336,
    protein: 17,
    fat: 18,
    sodium: 1397,
    image: "https://www.onceuponachef.com/images/2019/01/French-Onion-Soup-21.jpg"
    },
    {
    title: "Planked Salmon with Coconut Rice ",
    calories: 447,
    protein: 17,
    fat: 13,
    sodium: 904,
    image: "http://static1.squarespace.com/static/537965a1e4b07b722fdf568a/53796e4be4b022b1b4774da2/62d85c90afa54b708371d7a8/1658370736718/Screen+Shot+2022-07-20+at+9.42.21+PM.png?format=1500w"
    },
    {
    title: "Roast Beef, Basil, and Spicy Tomato Chutney Lavash Sandwiches ",
    calories: 857,
    protein: 29,
    fat: 7,
    sodium: 1405,
    image: "https://www.thetastybiteblog.com/wp-content/uploads/2016/02/roast-beef-basil-tomato-chutney-sandwich-4.jpg"
    },
    {
    title: "Mediterranean Chicken ",
    calories: 368,
    protein: 35,
    fat: 21,
    sodium: 188,
    image: "https://easychickenrecipes.com/wp-content/uploads/2020/08/mediterranean-chicken-recipe-3-of-7-1024x1536.jpg"
    },
    {
    title: "Potato and Celery-Root Gratin with Smoked Haddock ",
    calories: 543,
    protein: 17,
    fat: 35,
    sodium: 840,
    image: "https://www.adashofginger.co.uk/wp-content/uploads/2015/09/smoked-haddock-sweet-potato-hash-recipe.jpg"
    },
    {
    title: "Chicken with Mushrooms and White Wine ",
    calories: 504,
    protein: 45,
    fat: 24,
    sodium: 156,
    image: "https://www.kitchensanctuary.com/wp-content/uploads/2015/10/Creamy-Chicken-in-white-wine-sauce-tall-FS-35.jpg"
    },
    {
    title: "Scallop Gratins with Garlic-Lemon Butter ",
    calories: 442,
    protein: 27,
    fat: 18,
    sodium: 1080,
    image: "https://cafedelites.com/wp-content/uploads/2018/03/Garlic-Scallops-IMAGE-38.jpg"
    },
    {
    title: "Seared Salmon with Balsamic Glaze ",
    calories: 407,
    protein: 35,
    fat: 25,
    sodium: 106,
    image: "https://i2.wp.com/saygraceblog.com/wp-content/uploads/2017/07/Pan-Seared-Balsamic-Glazed-Salmon-3.jpg?resize=667%2C1000"
    },
    {
    title: "Apple, Celery, and Smoked Ham Stuffing ",
    calories: 488,
    protein: 22,
    fat: 16,
    sodium: 1098,
    image: "https://howdaily.com/wp-content/uploads/2020/11/Apple-Celery-Stuffing.jpg"
    },
    {
    title: "Cobb Salad Pitas ",
    calories: 568,
    protein: 34,
    fat: 39,
    sodium: 692,
    image: "https://www.cookingonthefrontburners.com/wp-content/uploads/2016/06/FreshCobbPitaSandwich-683x1024.jpg"
    },
    {
    title: "Cornmeal-Crusted Chicken Breasts ",
    calories: 637,
    protein: 60,
    fat: 27,
    sodium: 882,
    image: "https://i1.wp.com/www.servedfromscratch.com/wp-content/uploads/2016/02/IMG_6569.jpg"
    },
    {
    title: "Sauteed Halibut with Pecan Shallot Topping ",
    calories: 337,
    protein: 33,
    fat: 19,
    sodium: 122,
    image: "https://images.eatthismuch.com/site_media/img/56965_piede828_fe6436cc-24a7-4dac-9ff3-c29a2de9bed5.png"
    },
    {
    title: "Soupe a l'Oignon au Fromage (French Onion Soup) ",
    calories: 651,
    protein: 31,
    fat: 29,
    sodium: 1231,
    image: "https://poshjournal.com/wp-content/uploads/2020/10/french-onion-soup.jpg"
    },
    {
    title: "Salmon Paillards with Lettuce and Pea Salad ",
    calories: 405,
    protein: 26,
    fat: 30,
    sodium: 280,
    image: "https://data.thefeedfeed.com/static/2020/01/27/15665812265d6021ea38ce7.jpg"
    },
    {
    title: "Butternut Squash Vegducken With Mushroom-Cranberry Stuffing ",
    calories: 618,
    protein: 21,
    fat: 27,
    sodium: 1396,
    image: "https://149366112.v2.pressablecdn.com/wp-content/uploads/2022/05/butternut-squash-mac-n-cheese2-2048x1365.jpg"
    },
    {
    title: "Tortilla Pie ",
    calories: 552,
    protein: 24,
    fat: 21,
    sodium: 1605,
    image: "http://1.bp.blogspot.com/-gcE-T6rWb3o/U5fCACxN3yI/AAAAAAAARag/bntYbVfcM-8/s1600/IMG_5703fsq.jpg"
    },
    {
    title: "Seared Tuna Burgers with Ginger-Garlic Mayonnaise ",
    calories: 627,
    protein: 60,
    fat: 30,
    sodium: 506,
    image: "https://i.pinimg.com/originals/c3/ca/86/c3ca8604467ff6ee61ac24e3ef8d2420.jpg"
    },
    {
    title: "Sauteed Pork Chops with Mushrooms, Dill, and Sour Cream ",
    calories: 461,
    protein: 34,
    fat: 33,
    sodium: 110,
    image: "https://img.sndimg.com/food/image/upload/q_92,fl_progressive,w_1200,c_scale/v1/img/recipes/35/74/40/picPAHooQ.jpg"
    },
    {
    title: "Turkey Burgers ",
    calories: 537,
    protein: 32,
    fat: 35,
    sodium: 511,
    image: "https://rachaelsgoodeats.com/wp-content/uploads/2016/12/IMG_8987.jpg"
    },
    {
    title: "Louisiana Deviled Crab Cakes ",
    calories: 477,
    protein: 27,
    fat: 31,
    sodium: 1308,
    image: "https://i.pinimg.com/736x/da/5d/60/da5d6028772fac971b134ba0b11d04a8--dinner-dates-crab-cakes.jpg"
    },
    {
    title: "Steamed Clams with Bacon, Tomato, and Spinach ",
    calories: 652,
    protein: 69,
    fat: 27,
    sodium: 2804,
    image: "https://i.pinimg.com/originals/ce/26/13/ce261323f0bcd91ef68af218e0491714.jpg"
    },
    {
    title: "Chicken with Mustard Cream on Watercress ",
    calories: 401,
    protein: 56,
    fat: 17,
    sodium: 352,
    image: "https://reciperunner.com/wp-content/uploads/2021/01/creamy-mustard-chicken-photo.jpg"
    },
    {
    title: "Trout Choucroute ",
    calories: 444,
    protein: 31,
    fat: 28,
    sodium: 1013,
    image: "https://assets.epicurious.com/photos/560d7811f3a00aeb2f1cb46c/16:9/w_1280,c_limit/241724_hires.jpg?mbid=social_retweet"
    },
    {
    title: "Toasted Barley and Asparagus 'risotto' ",
    calories: 536,
    protein: 20,
    fat: 15,
    sodium: 2346,
    image: "https://assets.epicurious.com/photos/560ea7e8f9a84192308a9ac7/1:1/w_600%2Ch_600/104816.jpg"
    },
    {
    title: "Spicy Pork and Mustard Green Soup ",
    calories: 456,
    protein: 21,
    fat: 18,
    sodium: 627,
    image: "https://www.flavorfuljourneys.com/wp-content/uploads/2014/01/Spicy-Pork-Soup-1024x680.jpg"
    },
    {
    title: "Brazilian Fish Stew (Moqueca Capixaba) ",
    calories: 325,
    protein: 40,
    fat: 9,
    sodium: 1004,
    image: "https://static01.nyt.com/images/2016/03/16/dining/16MOQUECA/16MOQUECA-superJumbo.jpg"
    },
    {
    title: "Mexican Seafood Saut� with Avocado-Mango Salsa ",
    calories: 483,
    protein: 27,
    fat: 29,
    sodium: 952,
    image: "https://i.pinimg.com/originals/cd/f5/5e/cdf55e88ea7e6b5f8352a47b54955694.jpg"
    },
    {
    title: "Fettuccine with Preserved Tuna, Capers, and Olives ",
    calories: 709,
    protein: 43,
    fat: 17,
    sodium: 405,
    image: "https://i.pinimg.com/originals/93/fd/60/93fd608f3fb3236ebb7d2311fb6b179c.jpg"
    },
    {
    title: "Green Pea Ravioli in Lemon Broth ",
    calories: 400,
    protein: 17,
    fat: 7,
    sodium: 902,
    image: "https://i.pinimg.com/736x/d9/4c/d4/d94cd405e336ea6a73c9745234b22f76.jpg"
    },
    {
    title: "Pork Roast with Black Bean Sauce ",
    calories: 434,
    protein: 40,
    fat: 23,
    sodium: 199,
    image: "https://www.chinasichuanfood.com/wp-content/uploads/2018/06/pork-in-black-bean-sauce_-9copy-640x960.jpg"
    },
    {
    title: "Sweet Potato Gnocchi with Brown Butter and Sage ",
    calories: 539,
    protein: 17,
    fat: 28,
    sodium: 947,
    image: "https://i.pinimg.com/originals/12/22/d7/1222d71f439bfbae3de05cc48768d4e6.jpg"
    },
    {
    title: "Striped Bass with Swiss Chard, Chestnuts, and Pomegranate Vinaigrette ",
    calories: 497,
    protein: 28,
    fat: 27,
    sodium: 286,
    image: "https://i.pinimg.com/originals/4c/5e/ee/4c5eee4a00fc401f5bd3ccb449fa9085.jpg"
    },
    {
    title: "Ricotta and Spinach Tortelloni in Tomato Sauce ",
    calories: 551,
    protein: 22,
    fat: 30,
    sodium: 594,
    image: "https://rana-cdn.thron.com/delivery/public/image/rana/d37167ec-b902-45ba-8919-da60e220eb80/gg3i3t/std/0x0/AQ_Tablet_7934"
    },
    {
    title: "Turkey Torta ",
    calories: 393,
    protein: 27,
    fat: 11,
    sodium: 420,
    image: "https://assets.bonappetit.com/photos/57addb11f1c801a1038bcc63/16:9/w_1280,c_limit/turkey-torta.jpg?mbid=social_retweet"
    },
    {
    title: "Smoked Salmon with Sour Cream-Caper Sauce ",
    calories: 469,
    protein: 25,
    fat: 13,
    sodium: 689,
    image: "https://live.staticflickr.com/4147/5038189556_4c6258283a_b.jpg"
    },
    {
    title: "Layered Nacho Salad ",
    calories: 458,
    protein: 25,
    fat: 25,
    sodium: 353,
    image: "http://www.recipegirl.com/wp-content/uploads/2007/03/Layered-Nacho-Salad-2-600x900.jpg"
    },
    {
    title: "Pasta With Swordfish and Cherry Tomato Sauce ",
    calories: 654,
    protein: 37,
    fat: 23,
    sodium: 257,
    image: "https://heronearth.com/wp-content/uploads/2015/10/swordfish-pasta-700x523-500x374.jpg"
    },
    {
    title: "Shrimp and Andouille Sausage Gumbo ",
    calories: 505,
    protein: 35,
    fat: 32,
    sodium: 2703,
    image: "https://www.simplyrecipes.com/thmb/M3nuRi-2CInLsyD66iRD6cLHOLI=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2017__02__SHRIMP-GUMBO-LEAD-1-e7e9dcf5d2334ab98327d3d0f055f77f.jpg"
    },
    {
    title: "Blanquette de Veau ",
    calories: 458,
    protein: 48,
    fat: 21,
    sodium: 222,
    image: "https://www.elle-et-vire.com/uploads/cache/1920x1200/uploads/recip/recipe/2028/5e553cc677b55_blanquette-de-veau-1920x500.jpg"
    },
    {
    title: "Pasta with Lentil Bolognese ",
    calories: 499,
    protein: 21,
    fat: 6,
    sodium: 33,
    image: "https://asimplepalate.com/wp-content/uploads/2020/12/lentil-bolognese-n-18.jpg"
    },
    {
    title: "Gravlaks with Sweet Mustard Sauce ",
    calories: 517,
    protein: 46,
    fat: 30,
    sodium: 1227,
    image: "https://i.pinimg.com/originals/9f/93/de/9f93deb8e9fedd725470f95e17fee890.jpg"
    },
    {
    title: "Crusty Mustard-Dill Meat Loaf ",
    calories: 453,
    protein: 20,
    fat: 7,
    sodium: 1232,
    image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps33211_SD163324B08_14_2b-4.jpg"
    },
    {
    title: "Ginger-Marinated Pork Tenderloin ",
    calories: 919,
    protein: 87,
    fat: 31,
    sodium: 4704,
    image: "https://www.plainchicken.com/wp-content/uploads/2020/09/ginger-marinated-pork-tenderloin-1-1-427x640.jpg"
    },
    {
    title: "Fettucine with Yellow Peppers (Fettucine ai Peperoni Gialli) ",
    calories: 557,
    protein: 15,
    fat: 33,
    sodium: 879,
    image: "https://it.thecookinghacks.com/wp-content/uploads/sites/2/2019/11/yellow-peppers.jpg"
    },
    {
    title: "Black Bean Soup with Cilantro-Lime Sour Cream ",
    calories: 402,
    protein: 23,
    fat: 16,
    sodium: 272,
    image: "https://images.themodernproper.com/billowy-turkey/production/posts/2019/black-bean-soup-with-smoked-sausage-7.jpg?w=1200&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1611808733&amp;s=4122c392831f957355664d2470f5c1f4"
    },
    {
    title: "Dean & Deluca's Tuna Sandwich with Carrots, Red Onion, and Parsley ",
    calories: 418,
    protein: 29,
    fat: 19,
    sodium: 1350,
    image: "https://i.pinimg.com/736x/93/85/bd/9385bd2dc4c15c90e490ddc100b244f8.jpg"
    },
    {
    title: "Linguine with Red Clam Sauce ",
    calories: 799,
    protein: 64,
    fat: 9,
    sodium: 762,
    image: "https://i.pinimg.com/originals/af/3c/66/af3c66472ed2efdc488a1c289cf76274.jpg"
    },
    {
    title: "Shrimp Boil With Spicy Horseradish Sauce ",
    calories: 691,
    protein: 35,
    fat: 19,
    sodium: 1308,
    image: "https://littlesunnykitchen.com/wp-content/uploads/2021/05/Shrimp-Cocktail-Sauce-1.jpg"
    },
    {
    title: "Chestnut, Prune, and Pancetta Stuffing ",
    calories: 601,
    protein: 17,
    fat: 27,
    sodium: 1112,
    image: "https://assets.epicurious.com/photos/63766abbb963dbd25e2df93c/1:1/w_2560%2Cc_limit/1106-GT-ET10_01_RECIPE_final.jpg"
    },
    {
    title: "Chicken Soup with Wild Mushrooms and Herbed Matzo Balls ",
    calories: 550,
    protein: 36,
    fat: 39,
    sodium: 632,
    image: "https://www.tasteofhome.com/wp-content/uploads/2019/11/Chicken-Soup-with-Herbed-Matzah-Balls_EXPS_TOHAM20_245370_E10_30_2b.jpg"
    },
    {
    title: "Fish Cakes with Caper-Parsley Sauce ",
    calories: 401,
    protein: 22,
    fat: 18,
    sodium: 402,
    image: "https://www.simplywhisked.com/wp-content/uploads/2018/07/Fish-Cakes-3.jpg"
    },
    {
    title: "Curried Chicken Salad ",
    calories: 496,
    protein: 29,
    fat: 32,
    sodium: 559,
    image: "https://i2.wp.com/saygraceblog.com/wp-content/uploads/2017/07/Curried-Chicken-Salad-Recipe-2.jpg"
    },
    {
    title: "Baked Fish Fillets with Spinach-Pine Nut Topping ",
    calories: 309,
    protein: 41,
    fat: 14,
    sodium: 301,
    image: "https://www.diabetesfoodhub.org/system/thumbs/system/images/recipes/64-baked-fish-fillets-diabetic_523150835_011419_2_3547183137.jpg"
    },
    {
    title: "Kefta and Zucchini Kebabs ",
    calories: 445,
    protein: 17,
    fat: 37,
    sodium: 643,
    image: "https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2016/10/26/Food/Images/food_0441477514713.jpg?t=20170517"
    },
    {
    title: "Chicken Schnitzel with Anchovy-Chive Butter Sauce ",
    calories: 420,
    protein: 41,
    fat: 17,
    sodium: 802,
    image: "https://i.pinimg.com/originals/9d/8f/a4/9d8fa4ea975af5d9d1fbe779a23ae816.jpg"
    },
    {
    title: "Braised Veal Shanks with Mashed Potatoes and Tomato Onion Jus ",
    calories: 1167,
    protein: 105,
    fat: 30,
    sodium: 460,
    image: "https://www.saltys.com/wp-content/uploads/2019/11/Braised-Veal-Shank-2-1170x781.jpg"
    },
    {
    title: "Beef en Cro�te with Coriander Walnut Filling ",
    calories: 343,
    protein: 27,
    fat: 25,
    sodium: 72,
    image: "https://cut2therecipe.com/wp-content/uploads/2021/03/Filet-Mignon-en-Croute-Beef-Tenderloin-Croustades-with-Goat-Cheese-and-Mushroom-Filling-Recipe-Allison-Antalek-cut2therecipe.jpg"
    },
    {
    title: "Mustard-Seed-Crusted Pork Medallions with Red Wine Sauce ",
    calories: 462,
    protein: 45,
    fat: 18,
    sodium: 662,
    image: "https://cook.me/wp-content/uploads/2019/06/Pork-Medallions-with-Red-Wine-Recipe-How-To-Make-Cherry-Sauce-Pork-Medallions-with-Red-Wine-Cherry-Sauce-Delicious-Pork-Medallions-with-Red-Wine-Cherry-Sauce-12.jpg"
    },
    {
    title: "Venison Tenderloin with Madeira Green Peppercorn Sauce ",
    calories: 356,
    protein: 25,
    fat: 22,
    sodium: 937,
    image: "https://honest-food.net/wp-content/uploads/2022/11/venison-tenderloin-full.jpg"
    },
    {
    title: "Garlic-Roasted Striped Bass ",
    calories: 382,
    protein: 58,
    fat: 14,
    sodium: 182,
    image: "https://coastalreview.org/wp-content/uploads/2020/04/striped_bass_2985-scaled.jpg"
    },
    {
    title: "Roasted Salmon with Cucumber Sour Cream ",
    calories: 374,
    protein: 36,
    fat: 23,
    sodium: 902,
    image: "http://www.lecremedelacrumb.com/wp-content/uploads/2017/07/lemon-dill-salmon-101.jpg"
    },
    {
    title: "Bacon-and-Egg Rice ",
    calories: 507,
    protein: 16,
    fat: 24,
    sodium: 916,
    image: "https://preview.redd.it/may6qjfaqqj11.jpg?auto=webp&amp;s=02119dea6178a5767aa0b3b9b5210f0dca629057"
    },
    {
    title: "Veal, Mushroom and Red Wine Sauce ",
    calories: 388,
    protein: 25,
    fat: 26,
    sodium: 429,
    image: "https://trustedveal.com/wp-content/uploads/2019/07/cov-recipes-veal-cutlets-mushroom-sauce.jpg"
    },
    {
    title: "Leek and Mushroom Gratin ",
    calories: 458,
    protein: 18,
    fat: 22,
    sodium: 588,
    image: "https://dishingouthealth.com/wp-content/uploads/2019/05/LeekMushroomGratin3.jpg"
    },
    {
    title: "Steamed Clams with Pasta ",
    calories: 715,
    protein: 77,
    fat: 10,
    sodium: 2734,
    image: "https://3.bp.blogspot.com/-B3K6Xfg6CiM/UBFIhLfQOJI/AAAAAAAAGy4/wWLNdDkyA6U/s1600/Steamed+Clams+&amp;+Pasta+in+White+Wine+Garlic+Sauce.jpg"
    },
    {
    title: "Pan-Seared Sea Scallops with Lentils, Bacon, and Cider Reduction ",
    calories: 640,
    protein: 28,
    fat: 34,
    sodium: 547,
    image: "nan"
    },
    {
    title: "Trippa alla Romana ",
    calories: 541,
    protein: 44,
    fat: 31,
    sodium: 1510,
    image: "https://chowcation.com/wp-content/uploads/2017/trippa-alla-romana.jpg"
    },
    {
    title: "Spicy Chicken, Eggplant and Red Onion Quesadillas ",
    calories: 770,
    protein: 28,
    fat: 37,
    sodium: 1170,
    image: "https://ohsweetbasil.com/wp-content/uploads/teriyaki-chicken-quesadilla-recipe-12.jpg"
    },
    {
    title: "Grilled Strip Steaks with Olive-Oregano Relish ",
    calories: 474,
    protein: 68,
    fat: 22,
    sodium: 394,
    image: "https://www.mygourmetconnection.com/wp-content/uploads/chipotle-seasoned-grilled-strip-steaks.jpg"
    },
    {
    title: "Mushroom Wraps with Spinach, Bell Peppers and Goat Cheese ",
    calories: 384,
    protein: 16,
    fat: 21,
    sodium: 698,
    image: "https://www.happyveggiekitchen.com/wp-content/uploads/2022/09/Mushroom-Wraps-6-660x660.jpg"
    },
    {
    title: "Zucchini, Sun-Dried Tomato, and Mozarella Tart ",
    calories: 538,
    protein: 17,
    fat: 38,
    sodium: 620,
    image: "https://www.thekitchenwhisperer.net/wp-content/uploads/2012/07/Tomato-Zucchini-Tart.jpg"
    },
    {
    title: "Broiled Duck Breasts with Orange Chipotle Sauce ",
    calories: 356,
    protein: 46,
    fat: 10,
    sodium: 1129,
    image: "https://assets.epicurious.com/photos/560de5c67b55306961bfd89c/16:9/w_1280,c_limit/232789.jpg"
    },
    {
    title: "Chicken, Broccoli and Fusilli in Garlic Cream Sauce ",
    calories: 619,
    protein: 49,
    fat: 23,
    sodium: 239,
    image: "https://i.pinimg.com/originals/af/e3/13/afe31384fab789bdeae9d903b677bdd1.jpg"
    },
    {
    title: "Penne and Vegetable Gratin ",
    calories: 594,
    protein: 25,
    fat: 24,
    sodium: 461,
    image: "https://mitsidesgroup.com/wp-content/uploads/2021/02/penne-au-gratin-2048x1365.jpg"
    },
    {
    title: "Panfried Tofu on Sesame Watercress with Soy-Orange Dressing ",
    calories: 440,
    protein: 31,
    fat: 32,
    sodium: 935,
    image: "https://i.pinimg.com/originals/9b/1e/d9/9b1ed9898f7e24c0ba9e1d483884b246.jpg"
    },
    {
    title: "Octopus and Ceci Bean Zuppa with Escarole, Garlic, and Chiles ",
    calories: 340,
    protein: 30,
    fat: 20,
    sodium: 464,
    image: "https://assets.epicurious.com/photos/5609a4db6a59cdb91b5ff3b8/1:1/w_2560%2Cc_limit/351349_hires.jpg"
    },
    {
    title: "Spicy Lamb Pizza With Parsley�Red Onion Salad ",
    calories: 489,
    protein: 21,
    fat: 29,
    sodium: 895,
    image: "https://1.bp.blogspot.com/-N1Cz1CeVZGU/Xs-nBqAhZbI/AAAAAAAARo8/0SNcbwd-_5YqB3raZF9o9tcYgKAxxb6IQCLcBGAsYHQ/s1600/Spicy%2BLamb%2BPizza%2BWith%2BParsley%25E2%2580%2593Red%2BOnion%2BSalad.jpg"
    },
    {
    title: "Chiles Anchos Rellenos de Queso (Cheese-Filled Ancho Chiles) ",
    calories: 505,
    protein: 22,
    fat: 39,
    sodium: 486,
    image: "https://kena.com/wp-content/uploads/2018/01/chiles-anchos-rellenos-queso-salsa-naranja.png"
    },
    {
    title: "Pasta With 15-Minute Meat Sauce ",
    calories: 885,
    protein: 36,
    fat: 38,
    sodium: 655,
    image: "nan"
    },
    {
    title: "Green-Onion Risotto ",
    calories: 448,
    protein: 15,
    fat: 18,
    sodium: 379,
    image: "https://www.quickdryfoods.com/wp-content/uploads/2015/03/green-onion.jpg"
    },
    {
    title: "Pasta with Shrimp and Basil Vinaigrette ",
    calories: 866,
    protein: 41,
    fat: 36,
    sodium: 1070,
    image: "https://jz-eats.com/wp-content/uploads/2019/12/shrimp-pasta-24.jpg"
    },
    {
    title: "Sumo Stew (Chanko Nabe) With Shrimp, Meatballs, and Bok Choy ",
    calories: 494,
    protein: 35,
    fat: 17,
    sodium: 1064,
    image: "https://assets.epicurious.com/photos/56cdf7b3215d75fa1ae8869b/1:1/w_2560%2Cc_limit/EP_02232016_sumostew_recipeimage.jpg"
    },
    {
    title: "Pasta with Sun-Dried Tomatoes, Olive, and Goat Cheese ",
    calories: 864,
    protein: 33,
    fat: 28,
    sodium: 546,
    image: "https://greenvalleykitchen.com/wp-content/uploads/2017/04/Pasta-with-sauteed-cherry-tomatoes-olives-and-feta-3-624x936.jpg"
    },
    {
    title: "Tandoori Chicken Salad ",
    calories: 611,
    protein: 56,
    fat: 37,
    sodium: 277,
    image: "https://www.yourultimatemenu.com/wp-content/uploads/2020/10/Tandoori-Chicken-Salad-1466px.jpg"
    },
    {
    title: "Grilled Tuna with Herbed A�oli ",
    calories: 475,
    protein: 49,
    fat: 29,
    sodium: 202,
    image: "https://assets.epicurious.com/photos/5af078ced0e87c226f24859a/16:9/w_1280,c_limit/grilled-tuna-with-tomato-eggplant-salad-recipe-050418.jpg"
    },
    {
    title: "Shrimp and Pea Risotto ",
    calories: 696,
    protein: 18,
    fat: 11,
    sodium: 872,
    image: "https://www.eazypeazymealz.com/wp-content/uploads/2016/06/Baked-shrimp-risotto-hero.jpg"
    },
    {
    title: "Tomatoes Stuffed with Fresh Mozzarella and Basil ",
    calories: 398,
    protein: 16,
    fat: 35,
    sodium: 504,
    image: "https://fortheloveofcooking.net/wp-content/uploads/2020/12/Mozzarella-and-Basil-Stuffed-Tomatoes-7922.jpg"
    },
    {
    title: "Roasted Portobello and Prosciutto Lasagna ",
    calories: 759,
    protein: 37,
    fat: 40,
    sodium: 1019,
    image: "https://assets.bonappetit.com/photos/57b1d72353e63daf11a4f10c/16:9/w_1280,c_limit/roasted-portobello-and-prosciutto-lasagna.jpg?mbid=social_retweet"
    },
    {
    title: "Banana Espresso Bread Pudding ",
    calories: 702,
    protein: 15,
    fat: 33,
    sodium: 331,
    image: "https://cookingwithawallflower.com/wp-content/uploads/2017/09/Banana-Espresso-Bread-2.jpg"
    },
    {
    title: "Olive-Stuffed Chicken with Almonds ",
    calories: 567,
    protein: 55,
    fat: 37,
    sodium: 629,
    image: "https://thumbs.dreamstime.com/b/original-dish-chicken-almonds-108818799.jpg"
    },
    {
    title: "Italian Sausage and Parmesan Cheese Stuffing ",
    calories: 395,
    protein: 21,
    fat: 18,
    sodium: 939,
    image: "https://www.peanutblossom.com/wp-content/uploads/2021/08/sausagestuffing-feature-1-1024x1024.jpg"
    },
    {
    title: "Orange Whole-Wheat French Toast ",
    calories: 461,
    protein: 18,
    fat: 19,
    sodium: 411,
    image: "nan"
    },
    {
    title: "Nika Hazleton's Penne with Tomato, Eggplant, and Anchovy Sauce ",
    calories: 669,
    protein: 19,
    fat: 33,
    sodium: 760,
    image: "https://mostlydomestic.com/wp-content/uploads/2020/04/baked-penne-creamy-tomato-sauce-vegan-gluten-free-recipe-mostly-domestic.jpeg"
    },
    {
    title: "Sweet-Potato Hash ",
    calories: 542,
    protein: 18,
    fat: 34,
    sodium: 780,
    image: "http://annavocino.com/wp-content/uploads/2015/06/Sweet-Potato-Hash1.jpg"
    },
    {
    title: "Grilled Pork Tenderloin � la Rodriguez with Guava Glaze and Orange Habanero ",
    calories: 583,
    protein: 49,
    fat: 18,
    sodium: 641,
    image: "https://i.pinimg.com/originals/5e/1a/ed/5e1aed46ee7d8b3fcd00aa5495bb5f44.jpg"
    },
    {
    title: "Black Bean, Spinach, and Mushroom Burritos ",
    calories: 672,
    protein: 36,
    fat: 32,
    sodium: 1794,
    image: "https://recipes.net/wp-content/uploads/2020/03/black-bean-spinach-and-mushroom-burritos-scaled.jpg"
    },
    {
    title: "Mozzarella and Tomato Sauce Omelets ",
    calories: 438,
    protein: 23,
    fat: 34,
    sodium: 794,
    image: "https://cmx.weightwatchers.co.uk/assets-proxy/weight-watchers/image/upload/t_WINE_EXTRALARGE/scy65s3w0z7hjzzg6a1i.jpg"
    },
    {
    title: "Plantain Picadillo Pie with Cheese ",
    calories: 636,
    protein: 27,
    fat: 34,
    sodium: 658,
    image: "https://i.pinimg.com/originals/2d/16/f5/2d16f5aaed3310394a0af37b4a5562ca.jpg"
    },
    {
    title: "Fettuccine Quatro Formaggi ",
    calories: 511,
    protein: 20,
    fat: 28,
    sodium: 451,
    image: "https://www.milesfarmersmarket.com/wp-content/uploads/2021/03/homemade-fettuccine-with-alfredo-sauce-RKNQ5KP-1.jpg"
    },
    {
    title: "Chocolate Bread Pudding ",
    calories: 666,
    protein: 17,
    fat: 30,
    sodium: 587,
    image: "https://cdn2.tmbi.com/TOH/Images/Photos/37/1200x1200/Ultimate-Chocolate-Bread-Pudding_EXPS_THCA17_137560_C11_02_3b.jpg"
    },
    {
    title: "Yangzhou Fried Rice ",
    calories: 352,
    protein: 20,
    fat: 7,
    sodium: 1181,
    image: "https://weewok.ca/wp-content/uploads/2017/12/0E021F84-8ED0-4F53-BF7F-053A0C9F4404.jpg"
    },
    {
    title: "Grilled Sirloin Steaks with Blue Cheese-Walnut Butter ",
    calories: 307,
    protein: 18,
    fat: 25,
    sodium: 523,
    image: "https://bigoven-res.cloudinary.com/image/upload/t_recipe-1280/grilled-butter-marinated-steak-sirl-3.jpg"
    },
    {
    title: "Chicken Breasts with Wild Mushrooms, Marjoram, and Marsala ",
    calories: 610,
    protein: 73,
    fat: 26,
    sodium: 172,
    image: "https://www.cookingclassy.com/wp-content/uploads/2020/02/chicken-marsala-02.jpg"
    },
    {
    title: "Sonoran Hot Dogs With Bacon, Pico de Gallo, and Avocado ",
    calories: 508,
    protein: 16,
    fat: 32,
    sodium: 1378,
    image: "https://i.pinimg.com/originals/ec/64/1b/ec641b4242d68c78870010163a3bf039.jpg"
    },
    {
    title: "Kale and White Bean Soup ",
    calories: 757,
    protein: 41,
    fat: 35,
    sodium: 1757,
    image: "https://www.floraandvino.com/wp-content/uploads/2018/04/1-Pot-White-Bean-Kale-Soup-3.jpg"
    },
    {
    title: "Seared Tuna with Green Onion-Wasabi Sauce ",
    calories: 326,
    protein: 45,
    fat: 13,
    sodium: 848,
    image: "https://kitchenswagger.com/wp-content/uploads/2022/03/pan-seared-tuna-1.jpg"
    },
    {
    title: "Curried Chili Shrimp ",
    calories: 829,
    protein: 25,
    fat: 17,
    sodium: 1187,
    image: "https://i.pinimg.com/originals/00/1a/cb/001acb6548ea8b7784e0cdd3e96f74ba.jpg"
    },
    {
    title: "Pork Tenderloin with Spiced Rhubarb Chutney ",
    calories: 444,
    protein: 37,
    fat: 10,
    sodium: 102,
    image: "https://assets.epicurious.com/photos/5613301ef35fab51707e95e9/1:1/w_2560%2Cc_limit/1759_hires.jpg"
    },
    {
    title: "Classic Posole ",
    calories: 567,
    protein: 31,
    fat: 31,
    sodium: 762,
    image: "https://i.pinimg.com/originals/04/29/ca/0429caeff55b0465d5a46f5162c690df.jpg"
    },
    {
    title: "Pasta and Cauliflower Soup Federica ",
    calories: 428,
    protein: 17,
    fat: 25,
    sodium: 1039,
    image: "https://www.acouplecooks.com/wp-content/uploads/2020/04/Cauliflower-Pasta-013.jpg"
    },
    {
    title: "Rice Flaked Red Snapper with Roasted Chile Sauce ",
    calories: 502,
    protein: 40,
    fat: 27,
    sodium: 1202,
    image: "https://i.pinimg.com/originals/45/af/d0/45afd053a58ddbf58dc2639777b57a04.jpg"
    },
    {
    title: "Fish Cakes with Shrimp and Smoked Salmon ",
    calories: 593,
    protein: 26,
    fat: 23,
    sodium: 890,
    image: "https://scrummylane.com/wp-content/uploads/2020/04/salmon_fishcakes_2-1-682x1024.jpg"
    },
    {
    title: "Shrimp de Jonghe ",
    calories: 394,
    protein: 23,
    fat: 28,
    sodium: 907,
    image: "https://d3cizcpymoenau.cloudfront.net/images/27412/SFS_Shrimp_de_Jonghe-8.jpg"
    },
    {
    title: "Shrimp and Mushroom Quinoa Risotto ",
    calories: 659,
    protein: 47,
    fat: 33,
    sodium: 1993,
    image: "http://images.media-allrecipes.com/userphotos/960x960/6854796.jpg"
    },
    {
    title: "Sirloin Steak with Tomato and Cilantro Sauce ",
    calories: 417,
    protein: 29,
    fat: 31,
    sodium: 89,
    image: "https://assets.farmison.com/images/recipe-detail-1380/73732-sirloin-steak-and-chips.jpg"
    },
    {
    title: "Lamb Burgers in Pita with Yogurt Sauce ",
    calories: 562,
    protein: 32,
    fat: 29,
    sodium: 422,
    image: "https://pinchandswirl.com/wp-content/uploads/2020/05/Lamb-Burgers.jpg"
    },
    {
    title: "Chicken and Mashed Potatoes with Herb-Roasted Tomatoes and Olive Broth ",
    calories: 551,
    protein: 41,
    fat: 38,
    sodium: 332,
    image: "https://media.blueapron.com/recipes/21918/square_newsletter_images/1554238593-35-0013-7029/0506_FPP_Chicken__119_Square_Web.jpg?quality=80&amp;width=850&amp;format=pjpg"
    },
    {
    title: "Pasta with 15-Minute Ham, Pea, and Cream Sauce ",
    calories: 823,
    protein: 24,
    fat: 37,
    sodium: 370,
    image: "https://assets.epicurious.com/photos/55f7270e3c346243461d4931/1:1/w_2560%2Cc_limit/09112015_15minute_pastasauce_whitesauce.jpg"
    },
    {
    title: "Fettucine Carbonara with Fried Eggs ",
    calories: 732,
    protein: 42,
    fat: 33,
    sodium: 802,
    image: "http://ayearatthetable.com/wp-content/uploads/2011/02/Pasta1.jpg"
    },
    {
    title: "Grilled Gazpacho Salad with Shrimp ",
    calories: 464,
    protein: 21,
    fat: 29,
    sodium: 734,
    image: "http://assets.epicurious.com/photos/5522945de7851a541a30e60f/master/pass/0706-BA-FOD1-03.jpg"
    },
    {
    title: "Grilled Tuna and Mango Salad ",
    calories: 388,
    protein: 43,
    fat: 15,
    sodium: 80,
    image: "https://www.tanyaskitchen.ky/wp-content/uploads/2018/01/shutterstock_669976078-e1520526986700.jpg"
    },
    {
    title: "Chinese-Hawaiian 'Barbecued' Ribs ",
    calories: 640,
    protein: 45,
    fat: 37,
    sodium: 1582,
    image: "https://omnivorescookbook.com/wp-content/uploads/2020/11/201113_Chinese-BBQ-Ribs_4-624x936.jpg"
    },
    {
    title: "Cajun Seafood Pasta ",
    calories: 935,
    protein: 75,
    fat: 36,
    sodium: 1991,
    image: "https://natashaskitchen.com/wp-content/uploads/2021/04/Cajun-Shrimp-Pasta-3-1024x1536.jpg"
    },
    {
    title: "Pig in a Haystack ",
    calories: 557,
    protein: 31,
    fat: 27,
    sodium: 823,
    image: "https://static.vecteezy.com/system/resources/previews/009/317/223/original/cartoon-illustration-a-pig-walking-around-in-its-cage-on-a-haystack-vector.jpg"
    },
    {
    title: "Porcini-Rubbed Turkey with Shiitake-Madeira Gravy ",
    calories: 522,
    protein: 25,
    fat: 27,
    sodium: 1201,
    image: "https://www.daringgourmet.com/wp-content/uploads/2019/12/Turkey-Gravy-1-square.jpg"
    },
    {
    title: "Herbed Balsamic Chicken with Blue Cheese ",
    calories: 326,
    protein: 39,
    fat: 16,
    sodium: 901,
    image: "https://www.cookingclassy.com/wp-content/uploads/2021/08/balsamic-chicken-22.jpg"
    },
    {
    title: "Garden Vegetable Enchiladas ",
    calories: 538,
    protein: 23,
    fat: 31,
    sodium: 844,
    image: "https://i1.wp.com/jessfuel.com/wp-content/uploads/2013/08/GardenVegetableEnchiladas4.jpg?resize=640%2C427"
    },
    {
    title: "Charred Octopus with Peach, Arugula and Aged Balsamic ",
    calories: 338,
    protein: 41,
    fat: 11,
    sodium: 3035,
    image: "https://fifthrestaurant.thefifth.com/wp-content/uploads/2018/08/Charred-Octopus-Recipe.jpg"
    },
    {
    title: "Roasted Hot-Honey Shrimp With Bok Choy and Kimchi Rice ",
    calories: 448,
    protein: 29,
    fat: 17,
    sodium: 1919,
    image: "https://1.bp.blogspot.com/-QN_HypntWCs/YGqQlD1HVuI/AAAAAAAAWFg/EiyRPcBFL7YJJtu6T79zBXkPgBiIEv6fQCLcBGAsYHQ/w640-h480/bok%2Bchoy%2Bwith%2Bshrimp.JPG"
    },
    {
    title: "Cheddar, Bacon, and Scallion Souffl� ",
    calories: 404,
    protein: 21,
    fat: 29,
    sodium: 408,
    image: "https://www.cherryonmysundae.com/wp-content/uploads/2021/04/bacon-scallion-cheddar-milk-buns-9-720x655.jpg"
    },
    {
    title: "Pasta with Tomatoes and Goat Cheese ",
    calories: 605,
    protein: 25,
    fat: 13,
    sodium: 349,
    image: "http://www.greensnchocolate.com/wp-content/uploads/2013/04/goatcheesetompasta.jpg"
    },
    {
    title: "Red-Wine Marinated Fried Chicken with Onions ",
    calories: 561,
    protein: 37,
    fat: 33,
    sodium: 584,
    image: "https://kikkomanusa.com/homecooks/wp-content/uploads/2021/10/13806_Marinated-Fried-Chicken.jpg"
    },
    {
    title: "Mixed-Herb Pasta with Red Bell Peppers and Feta ",
    calories: 996,
    protein: 34,
    fat: 38,
    sodium: 566,
    image: "https://www.theproducemoms.com/wp-content/uploads/2019/08/grilled-red-bell-pepper-with-olives-and-feta.-2-1024x680.jpg"
    },
    {
    title: "Poached Oysters in Fennel-Saffron Soup ",
    calories: 396,
    protein: 17,
    fat: 31,
    sodium: 913,
    image: "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&amp;c=sc&amp;poi=face&amp;w=1000&amp;h=500&amp;url=https:%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2013%2F08%2Fpoached-oysters-with-pickled-cucumber-and-caviar-XL-RECIPE0417.jpg"
    },
    {
    title: "Grilled Paillards of Beef with Red Wine and Port Sauce ",
    calories: 537,
    protein: 31,
    fat: 28,
    sodium: 249,
    image: "https://static.fooddiez.com/media/images/recipe/og-en/152284.jpg"
    },
    {
    title: "Medallions of Pork with Dried Cherry Sauce ",
    calories: 535,
    protein: 50,
    fat: 28,
    sodium: 177,
    image: "https://whatgreatgrandmaate.com/wp-content/uploads/2020/04/Pork-Tenderloin-Medallions-with-Horseradish-Sauce-1-1-scaled.jpg"
    },
    {
    title: "Moroccan Chicken and Lentils ",
    calories: 430,
    protein: 22,
    fat: 27,
    sodium: 684,
    image: "https://sparkpeo.hs.llnwd.net/e2/guid/Moroccan-Chicken-&amp;-Lentils/cb01bda3-e541-4835-a687-0269f4ed86be.jpg"
    },
    {
    title: "Grilled Flank Steak ",
    calories: 465,
    protein: 36,
    fat: 34,
    sodium: 674,
    image: "https://therecipecritic.com/wp-content/uploads/2018/07/grilled-flank-steak-4.jpg"
    },
    {
    title: "Kale Minestrone with Pistou ",
    calories: 527,
    protein: 23,
    fat: 22,
    sodium: 943,
    image: "https://assets.bonappetit.com/photos/57acf6081b334044149753b0/1:1/w_2560%2Cc_limit/kale-minestrone-with-pistou.jpg"
    },
    {
    title: "Peanut Butter Cake with Chocolate-Peanut Butter Icing ",
    calories: 668,
    protein: 15,
    fat: 35,
    sodium: 341,
    image: "http://www.bakeorbreak.com/wp-content/uploads/2016/03/peanut_butter_cake_with_chocolate_frosting0693_1k.jpg"
    },
    {
    title: "Mustard-Seed-Crusted Pork Medallions with Red Wine Sauce ",
    calories: 462,
    protein: 45,
    fat: 18,
    sodium: 662,
    image: "https://cook.me/wp-content/uploads/2019/06/Pork-Medallions-with-Red-Wine-Recipe-How-To-Make-Cherry-Sauce-Pork-Medallions-with-Red-Wine-Cherry-Sauce-Delicious-Pork-Medallions-with-Red-Wine-Cherry-Sauce-12.jpg"
    },
    {
    title: "Spicy Crab and Melon Salad ",
    calories: 361,
    protein: 19,
    fat: 16,
    sodium: 659,
    image: "https://foodisafourletterword.com/wp-content/uploads/2021/07/Spicy_Crab_Salad_Recipe_for_Poke_Bowls_title.jpg"
    },
    {
    title: "Black Bean Tostadas with Curly Endive Salad ",
    calories: 630,
    protein: 19,
    fat: 37,
    sodium: 364,
    image: "https://i2.wp.com/reluctantentertainer.com/wp-content/uploads/2015/02/Black-Bean-Salad-Stuffed-Endive-2-700x934.jpg"
    },
    {
    title: "Accidental Chicken ",
    calories: 576,
    protein: 36,
    fat: 37,
    sodium: 461,
    image: "https://www.rockrecipes.com/wp-content/uploads/2011/06/Accidental-Indian-Barbecue-Chicken-1.jpg"
    },
    {
    title: "Corn-Crusted Red Snapper with Achiote Shrimp ",
    calories: 818,
    protein: 58,
    fat: 24,
    sodium: 499,
    image: "https://i.pinimg.com/originals/e6/a4/7d/e6a47db3216361c3702a4bd5e35c7b41.jpg"
    },
    {
    title: "Crab Cakes ",
    calories: 303,
    protein: 19,
    fat: 17,
    sodium: 687,
    image: "https://d1dd4ethwnlwo2.cloudfront.net/wp-content/uploads/2014/05/Crab-Cake-1.jpg"
    },
    {
    title: "Peppery Pasta Carbonara with Poached Egg ",
    calories: 792,
    protein: 29,
    fat: 35,
    sodium: 464,
    image: "https://www.healthylunchideas.net/assets/pins/peppery-pasta-carbonara-with-poached-egg.png"
    },
    {
    title: "Grilled Ham and Swiss Sandwiches ",
    calories: 432,
    protein: 29,
    fat: 29,
    sodium: 817,
    image: "https://i1.wp.com/www.myfearlesskitchen.com/wp-content/uploads/2017/04/grilled-ham-and-swiss-sandwich-pinterest-2.jpg?ssl=1"
    },
    {
    title: "Soy-Ginger Beef and Noodle Salad with Peanut Dressing ",
    calories: 627,
    protein: 29,
    fat: 30,
    sodium: 1418,
    image: "https://biancazapatka.com/wp-content/uploads/2021/03/noodle-salad-with-peanut-sauce-720x1008.jpg"
    },
    {
    title: "Clams with Jalape�o, Lemon, and Basil ",
    calories: 362,
    protein: 51,
    fat: 9,
    sodium: 2191,
    image: "https://delightfulplate.com/wp-content/uploads/2020/09/Vietnamese-Steamed-Clams-with-Thai-basil-and-Lemongrass-Ngheu-hap-Sa-La-Que.jpg"
    },
    {
    title: "Scallops with Hazelnuts and Browned Butter Vinaigrette ",
    calories: 500,
    protein: 31,
    fat: 36,
    sodium: 912,
    image: "https://i.pinimg.com/736x/ac/f4/54/acf4546637dbfae4cfd6146ce2f93e9a.jpg"
    },
    {
    title: "Barramundi Fillets With Roasted Sweet Potatoes and Brussels Sprout Chips ",
    calories: 599,
    protein: 15,
    fat: 33,
    sodium: 69,
    image: "https://assets.epicurious.com/photos/58b488ec627f7312db033741/1:1/w_2560%2Cc_limit/BARRAMUNDI-FILLETS-WITH-ROASTED-SWEET-POTATOES-AND-BRUSSELS-SPROUT-CHIPS-17022017.jpg"
    },
    {
    title: "Braised Rabbit with Egg Noodles ",
    calories: 617,
    protein: 43,
    fat: 26,
    sodium: 685,
    image: "https://i.pinimg.com/originals/07/be/e4/07bee44e644962c676ba508fbd1aa775.jpg"
    },
    {
    title: "Braised Veal with Gremolata ",
    calories: 318,
    protein: 42,
    fat: 13,
    sodium: 151,
    image: "https://images.eatsmarter.com/sites/default/files/styles/max_size/public/italian-style-braised-veal-with-gremolata-544492.jpg"
    },
    {
    title: "Lemon-Oregano Chicken ",
    calories: 568,
    protein: 58,
    fat: 33,
    sodium: 779,
    image: "http://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/10/23/1/RF0704H_Lemon-and-Oregano-Chicken_s4x3.jpg.rend.hgtvcom.616.462.jpeg"
    },
    {
    title: "Pork with Gorgonzola Sauce ",
    calories: 430,
    protein: 48,
    fat: 24,
    sodium: 450,
    image: "https://www.tasteofhome.com/wp-content/uploads/2017/10/Pork-with-Gorgonzola-Sauce_exps42196_THCS1227349D07_18_3b_RMS-2.jpg"
    },
    {
    title: "Pork Loin with Apples, Prunes, and Mustard Cream Sauce ",
    calories: 505,
    protein: 50,
    fat: 24,
    sodium: 675,
    image: "https://cookthestory.com/wp-content/uploads/2019/10/Apple-Mustard-Pork-Loin-660x990.jpg"
    },
    {
    title: "Cleansing Ginger-Chicken Soup ",
    calories: 409,
    protein: 29,
    fat: 29,
    sodium: 155,
    image: "https://www.healthbenefitstimes.com/recipe/wp-content/uploads/2018/07/Cleansing-Ginger-Soup-Recipe-768x961.gif"
    },
    {
    title: "Halibut on Mashed Fava Beans with Mint ",
    calories: 515,
    protein: 45,
    fat: 24,
    sodium: 394,
    image: "https://assets.epicurious.com/photos/550b04766e09e36e56c0f414/1:1/w_2560%2Cc_limit/352089_halibut-mashed-fava-beans-mint_6x4.jpg"
    },
    {
    title: "Polenta Tamale Pie ",
    calories: 811,
    protein: 32,
    fat: 29,
    sodium: 1173,
    image: "http://2.bp.blogspot.com/-MHtfOvznzvE/Ukn-B1aAtiI/AAAAAAAAGgQ/ULbbppdjetc/s1600/TOP+PIC+Polento.jpg"
    },
    {
    title: "Rotelle with Broccoli and Spicy Peanut Sauce ",
    calories: 720,
    protein: 28,
    fat: 21,
    sodium: 872,
    image: "https://i.pinimg.com/originals/bf/71/51/bf7151e5438b0b6d2866793b84186dae.jpg"
    },
    {
    title: "Spaghetti with Olive Oil, Garlic and Anchovies ",
    calories: 731,
    protein: 23,
    fat: 32,
    sodium: 1049,
    image: "https://i.pinimg.com/originals/c8/38/d4/c838d407b456c934665460425a97034f.jpg"
    },
    {
    title: "Pappardelle in Lemon Cream Sauce with Asparagus and Smoked Salmon ",
    calories: 635,
    protein: 19,
    fat: 19,
    sodium: 24,
    image: "nan"
    },
    {
    title: "Salmon and Spinach Strudel ",
    calories: 525,
    protein: 33,
    fat: 37,
    sodium: 363,
    image: "https://thumbs.dreamstime.com/z/salmon-spinach-strudel-white-wood-background-62199320.jpg"
    },
    {
    title: "Lamb Tikka with Crispy Onions ",
    calories: 460,
    protein: 34,
    fat: 31,
    sodium: 132,
    image: "https://www.greedygourmet.com/wp-content/uploads/2018/07/lambtikka.jpg"
    },
    {
    title: "Moroccan-Style Potato and Egg Sandwiches ",
    calories: 422,
    protein: 15,
    fat: 19,
    sodium: 589,
    image: "https://www.8days.sg/blob/11811646/8c83067ee4aefde9945d42ed37515bf7/sambal-egg-sandwiches-in-hands-no-border-data.jpg"
    },
    {
    title: "Farfalle with Chicken, Tomatoes, Caramelized Onions, and Goat Cheese ",
    calories: 599,
    protein: 29,
    fat: 24,
    sodium: 201,
    image: "https://under500calories.com/photos/1000x800/39585.jpg"
    },
    {
    title: "Spinach Salad with Shrimp, Fennel and Bacon-Balsamic Vinaigrette ",
    calories: 472,
    protein: 32,
    fat: 30,
    sodium: 1285,
    image: "https://www.eatthis.com/wp-content/uploads/sites/4/2019/01/healthy-spinach-salad-warm-bacon-dressing.jpg?quality=82&amp;strip=1&amp;resize=1400%2C788"
    },
    {
    title: "Asian Turkey Lettuce Wraps ",
    calories: 454,
    protein: 39,
    fat: 23,
    sodium: 895,
    image: "https://therecipecritic.com/wp-content/uploads/2018/12/asianturkeylettucewraps3.jpg"
    },
    {
    title: "Sauteed Pork Tenderloin and Pears in Mustard-Port Sauce ",
    calories: 400,
    protein: 26,
    fat: 13,
    sodium: 139,
    image: "https://pollycookscom.files.wordpress.com/2021/06/pork-medallions.jpeg?w=1200"
    },
    {
    title: "Ropa Vieja ",
    calories: 630,
    protein: 43,
    fat: 26,
    sodium: 827,
    image: "http://www.daringgourmet.com/wp-content/uploads/2016/06/Ropa-Vieja-18-edited.jpg"
    },
    {
    title: "Lemon Dill Baked Orzo with Gruy�re ",
    calories: 527,
    protein: 21,
    fat: 20,
    sodium: 333,
    image: "https://www.align-wellness.com/wp-content/uploads/2020/11/5ea204aa03efa75e8c751e1f_Greek-Orzo-Salad-Photo-p-500.jpg"
    },
    {
    title: "Shrimp and Leek Linguine in White Wine Sauce ",
    calories: 734,
    protein: 31,
    fat: 23,
    sodium: 786,
    image: "https://www.fifteenspatulas.com/wp-content/uploads/2014/08/Shrimp-Linguine-Fifteen-Spatulas-1-640x959.jpg"
    },
    {
    title: "Duck a l'Orange ",
    calories: 585,
    protein: 49,
    fat: 22,
    sodium: 160,
    image: "https://www.seriouseats.com/2018/11/20181023-duck-a-l-orange-vicky-wasik-36-1500x1125.jpg"
    },
    {
    title: "Black Bean and Bell Pepper Salad ",
    calories: 946,
    protein: 18,
    fat: 12,
    sodium: 302,
    image: "https://thishealthytable.com/wp-content/uploads/2021/01/bell-pepper-salad-17-of-19.jpg"
    },
    {
    title: "Roast Beef, Red Pepper, Spinach, and Feta Sandwiches with Tahini Dressing ",
    calories: 395,
    protein: 22,
    fat: 19,
    sodium: 498,
    image: "https://i.pinimg.com/736x/1e/7e/a8/1e7ea811f93f47a84fbd463ea8fd7764--upper-crust-swallow.jpg"
    },
    {
    title: "Bulgur Salad with Chickpeas, Roasted Peppers, and Spiced Cumin Dressing ",
    calories: 569,
    protein: 19,
    fat: 18,
    sodium: 1021,
    image: "https://feelgoodfoodie.net/wp-content/uploads/2021/08/Bulgur-Chickpea-Salad-11.jpg"
    },
    {
    title: "Spaghettini with Spicy Tomato Sauce ",
    calories: 690,
    protein: 25,
    fat: 19,
    sodium: 625,
    image: "https://media.blueapron.com/recipes/2779/square_newsletter_images/1517605520-1-0009-3443/0212_2PV1_Zuchini-Spaghettini_0584_SQ_hi_res.jpg"
    },
    {
    title: "Meat Loaf with Mustard and Dried Fruit ",
    calories: 397,
    protein: 35,
    fat: 18,
    sodium: 953,
    image: "https://i.pinimg.com/736x/89/45/70/89457094292e4b14ca0f7542297ab0c0.jpg"
    },
    {
    title: "Mussels with Sausage, Coconut Milk and Lime ",
    calories: 352,
    protein: 23,
    fat: 24,
    sodium: 1196,
    image: "https://bcboltvirgin.akamaized.net/content/images/1295/296002-Mussels-in-Spiced-Coconut-Milk-1611064625-rectangular_image_1280x720.jpg"
    },
    {
    title: "Cardamom-Scented Grass-Fed Rib Steak with Herb Vinaigrette ",
    calories: 419,
    protein: 23,
    fat: 33,
    sodium: 934,
    image: "https://images.heb.com/is/image/HEBGrocery/002840009-1"
    },
    {
    title: "Sea Bass with Leeks, Potatoes and Balsamic Vinaigrette ",
    calories: 518,
    protein: 38,
    fat: 22,
    sodium: 576,
    image: "https://i.pinimg.com/originals/ab/2d/f1/ab2df194973c5e4c8373527801bb165f.jpg"
    },
    {
    title: "Avocado and White Bean Salsa ",
    calories: 465,
    protein: 19,
    fat: 18,
    sodium: 23,
    image: "https://feelgoodfoodie.net/wp-content/uploads/2017/03/Black-Bean-Salsa-6-736x1103.jpg"
    },
    {
    title: "Linguine with Chicken, Leeks and Tomatoes ",
    calories: 895,
    protein: 48,
    fat: 30,
    sodium: 464,
    image: "https://www.cook2eatwell.com/wp-content/uploads/2019/10/Linguine-with-Chicken-and-Tomatoes-Image-1-1024x683.jpg"
    },
    {
    title: "Black Beans with Garlic, Cumin, and Cilantro ",
    calories: 361,
    protein: 16,
    fat: 15,
    sodium: 1222,
    image: "https://www.performancefoodservice.com/-/media/PFS/Recipes/Hero---Full-Width/performancefoodservice-Recipe-CuminBlackBeans-herofull.jpg?h=966&amp;w=2302&amp;la=en&amp;hash=253938B77303F36B35F5D8B6CBB842DE"
    },
    {
    title: "Salt and Pepper Crusted Rib Roast ",
    calories: 392,
    protein: 20,
    fat: 34,
    sodium: 542,
    image: "https://i.pinimg.com/originals/43/04/7b/43047b83ce3263d68dc0954f697e133a.jpg"
    },
    {
    title: "Orecchiette with Garbanzos, Tomatoes, Feta, and Mint ",
    calories: 576,
    protein: 18,
    fat: 25,
    sodium: 473,
    image: "nan"
    },
    {
    title: "Cheddar Cheese-Stuffed Burgers ",
    calories: 605,
    protein: 42,
    fat: 31,
    sodium: 877,
    image: "https://c.recipeland.com/images/r/20840/9fda6272e16a8f44c92a_1024.jpg"
    },
    {
    title: "Lobster Rolls with Rosemary-Ginger Vinaigrette ",
    calories: 450,
    protein: 15,
    fat: 30,
    sodium: 932,
    image: "https://www.howsweeteats.com/wp-content/uploads/2021/04/lobster-rolls-19-1121x1536.jpg"
    },
    {
    title: "Mole Poblano ",
    calories: 395,
    protein: 24,
    fat: 23,
    sodium: 80,
    image: "https://consalyazucar.com/cdn/recipes/mole_poblano.jpg"
    },
    {
    title: "Butternut Squash and Radicchio Pappardelle ",
    calories: 607,
    protein: 15,
    fat: 30,
    sodium: 49,
    image: "https://i.pinimg.com/originals/1c/c6/f8/1cc6f8e298bc13b0302065ecd466ac1f.jpg"
    },
    {
    title: "Tuna in Tomato Sauce ",
    calories: 374,
    protein: 43,
    fat: 20,
    sodium: 390,
    image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/1/18/1/FNM030117_Tuna-and-Tomato-Sauce_s4x3.jpg.rend.hgtvcom.756.567.suffix/1484758909461.jpeg"
    },
    {
    title: "Asian Chicken Salad ",
    calories: 332,
    protein: 32,
    fat: 19,
    sodium: 1047,
    image: "https://www.eatyourselfskinny.com/wp-content/uploads/2021/01/chinese-chicken-salad-2-1-1460x2048.jpg"
    },
    {
    title: "Dominican Chimichurri Burgers ",
    calories: 417,
    protein: 37,
    fat: 14,
    sodium: 693,
    image: "https://thecrumbykitchen.com/wp-content/uploads/2016/07/Dominican-Chimichurri-Burgers-3.jpg"
    },
    {
    title: "Grilled Mahi-Mahi Tacos ",
    calories: 343,
    protein: 26,
    fat: 14,
    sodium: 619,
    image: "http://www.lakegenevacountrymeats.com/wp-content/uploads/Mahi-Mahi-Tacos.jpg"
    },
    {
    title: "Sauteed Curried Beef and Broccoli ",
    calories: 706,
    protein: 43,
    fat: 15,
    sodium: 1048,
    image: "https://cdn.loveandlemons.com/wp-content/uploads/2020/10/sauteed-broccoli-1024x945.jpg"
    },
    {
    title: "Fennel and Sausage Rag� Over Pasta ",
    calories: 730,
    protein: 36,
    fat: 17,
    sodium: 1239,
    image: "https://thesecretsuppersociety.com/wp-content/uploads/2021/05/Sausage-sage-and-fennel-pasta-1.jpg"
    },
    {
    title: "Lemon-Tarragon Chicken Salad Sandwiches ",
    calories: 343,
    protein: 23,
    fat: 24,
    sodium: 294,
    image: "https://www.jessicagavin.com/wp-content/uploads/2018/09/chicken-salad-sandwich-pinv2.jpg"
    },
    {
    title: "Chicken with Tarragon Vinegar Sauce ",
    calories: 649,
    protein: 59,
    fat: 37,
    sodium: 215,
    image: "https://i.pinimg.com/originals/e8/a6/6c/e8a66c9a5595c56690d146d103ab8bac.jpg"
    },
    {
    title: "Risotto Primavera ",
    calories: 579,
    protein: 20,
    fat: 29,
    sodium: 449,
    image: "https://www.mangiarebenevenezia.it/wp-content/uploads/2018/04/risotto-primavera.jpg"
    },
    {
    title: "New Orleans-Style Red Beans and Rice with Sausage Fulcher ",
    calories: 491,
    protein: 30,
    fat: 20,
    sodium: 1381,
    image: "https://foodiesterminal.com/wp-content/uploads/2021/01/instant-pot-red-beans-and-rice-with-andouille-sausage-4.jpg"
    },
    {
    title: "Loin of Veal with Shiitake Stuffing ",
    calories: 600,
    protein: 56,
    fat: 33,
    sodium: 417,
    image: "https://www.dartagnan.com/on/demandware.static/-/Sites-dartagnan-live-catalog-en/default/dw4641586d/images/products/VEAFRA015-1-V4.jpg"
    },
    {
    title: "Sauteed Halibut with Lemon-Vegetable Relish ",
    calories: 564,
    protein: 51,
    fat: 34,
    sodium: 225,
    image: "http://images.agoramedia.com/wte3.0/gcms/Sauteed-Halibut-With-Spring-Vegetables-722x406.jpg"
    },
    {
    title: "Cheesy Zucchini and Red Onion Flatbread ",
    calories: 395,
    protein: 16,
    fat: 16,
    sodium: 737,
    image: "https://farm8.staticflickr.com/7859/47158892862_6331dfe864_b.jpg"
    },
    {
    title: "Grilled Steak with Parsley-Parmesan Salad ",
    calories: 335,
    protein: 41,
    fat: 18,
    sodium: 372,
    image: "https://www.theseasonedmom.com/wp-content/uploads/2021/05/Steak-Salad.jpg"
    },
    {
    title: "Pork Scaloppine with Herbed Noodles ",
    calories: 608,
    protein: 56,
    fat: 25,
    sodium: 239,
    image: "https://assets.marthastewart.com/styles/wmax-1500/d17/D109623_Unknown-3/D109623_Unknown-3_horiz.jpeg?itok=9k8wW2s_"
    },
    {
    title: "Turkey Gravy ",
    calories: 504,
    protein: 30,
    fat: 27,
    sodium: 1528,
    image: "https://therecipecritic.com/wp-content/uploads/2019/10/turkey_gravy_hero.jpg"
    },
    {
    title: "Garden Greens and Goat Cheese Pasta ",
    calories: 544,
    protein: 22,
    fat: 15,
    sodium: 97,
    image: "https://i.pinimg.com/736x/57/87/45/578745479bb3df917128765727f10813.jpg"
    },
    {
    title: "Spinach Linguine with Goat Cheese ",
    calories: 817,
    protein: 28,
    fat: 35,
    sodium: 1303,
    image: "https://i0.wp.com/themom100.com/wp-content/uploads/2015/02/180518_KWorkman_0017.jpg?resize=550,825&amp;ssl=1"
    },
    {
    title: "Sausage and Egg Casserole with Sun-Dried Tomatoes and Mozzarella ",
    calories: 424,
    protein: 22,
    fat: 35,
    sodium: 849,
    image: "https://www.thecreativebite.com/wp-content/uploads/2019/11/Overnight-Sausage-Egg-Casserole-Pictures-copy.jpg"
    },
    {
    title: "Spicy Soba Noodles with Shiitakes and Cabbage ",
    calories: 495,
    protein: 21,
    fat: 21,
    sodium: 1888,
    image: "https://blythesblog.com/wp-content/uploads/2015/01/IMG_0173-e1421811278195.jpg"
    },
    {
    title: "Linguine with White Clam Sauce ",
    calories: 810,
    protein: 61,
    fat: 16,
    sodium: 266,
    image: "https://www.everydayeileen.com/wp-content/uploads/2016/04/IMG_9382_edited-1.jpg"
    },
    {
    title: "Dirty Rice Stuffing ",
    calories: 414,
    protein: 20,
    fat: 13,
    sodium: 187,
    image: "http://louisiana.kitchenandculture.com/sites/default/files/recipes/Louisiana Kitchen/louisiana-dirty-rice.jpg"
    },
    {
    title: "Roast Duck Breast with Balsamic and Apricot Sauce ",
    calories: 313,
    protein: 34,
    fat: 12,
    sodium: 102,
    image: "https://taste.co.za/wp-content/uploads/2016/07/Roast-duck-breast.jpg"
    },
    {
    title: "Baked Halibut with Paprika,olives and Mushrooms ",
    calories: 320,
    protein: 45,
    fat: 12,
    sodium: 286,
    image: "https://cookinglsl.com/wp-content/uploads/2020/01/baked-halibut-4.jpg"
    },
    {
    title: "Onion and Bacon Tart ",
    calories: 511,
    protein: 15,
    fat: 32,
    sodium: 638,
    image: "https://honestcooking.com/wp-content/uploads/2013/06/2013-06-14-07.30.06.jpg"
    },
    {
    title: "Chicken with Cranberry-Mustard Sauce ",
    calories: 552,
    protein: 72,
    fat: 20,
    sodium: 168,
    image: "https://littlespicejar.com/wp-content/uploads/2017/09/One-Skillet-Chicken-in-Balsamic-Caramelized-Onion-Cream-Sauce-3-768x1152.jpg"
    },
    {
    title: "Shrimp Creole ",
    calories: 492,
    protein: 30,
    fat: 24,
    sodium: 2187,
    image: "https://www.fitfynefabulous.com/wp-content/uploads/2020/05/shrimp-creole.jpg"
    },
    {
    title: "Pineapple Pork Chops ",
    calories: 378,
    protein: 43,
    fat: 18,
    sodium: 905,
    image: "https://www.theendlessmeal.com/wp-content/uploads/2021/05/Pineapple-Pork-Chops-3-680x1019.jpg"
    },
    {
    title: "Rigatoni with Brie, Grape Tomatoes, Olives, and Basil ",
    calories: 454,
    protein: 20,
    fat: 18,
    sodium: 435,
    image: "https://images.eatthismuch.com/img/45500_simmyras_43adc56f-d597-4778-a682-4ddfa9f394a3.png"
    },
    {
    title: "Veal Cutlets with Sauteed Baby Artichokes ",
    calories: 426,
    protein: 32,
    fat: 21,
    sodium: 378,
    image: "https://www.everydayeileen.com/wp-content/uploads/2019/09/sauteed-veal-cutlets.jpg"
    },
    {
    title: "Flank Steak with Chimichurri ",
    calories: 459,
    protein: 37,
    fat: 32,
    sodium: 830,
    image: "https://40aprons.com/wp-content/uploads/2019/02/chimichurri-flank-steak-7.jpg"
    },
    {
    title: "Linguine with Tomatoes and Artichoke Hearts ",
    calories: 603,
    protein: 29,
    fat: 18,
    sodium: 599,
    image: "https://i.pinimg.com/originals/fa/e0/13/fae013695f825c5b3269f599f5666711.jpg"
    },
    {
    title: "Tropical Glazed Ham with Curried Pineapple Chutney ",
    calories: 619,
    protein: 60,
    fat: 31,
    sodium: 4154,
    image: "https://cdn.slidesharecdn.com/ss_thumbnails/tropicalglazedhamwithcurriedpineapplechutney-130425195554-phpapp02-thumbnail.jpg?cb=1366919798"
    },
    {
    title: "Peachy Grilled Chicken Salad ",
    calories: 465,
    protein: 41,
    fat: 27,
    sodium: 819,
    image: "http://4.bp.blogspot.com/-K4PeJ7DWk8I/VanRpMRCaAI/AAAAAAAAPUM/koGfMld7WUM/s1600/DSC_0321.JPG"
    },
    {
    title: "Italian Sausage and Tortellini Soup ",
    calories: 319,
    protein: 23,
    fat: 10,
    sodium: 1545,
    image: "https://www.saltandlavender.com/wp-content/uploads/2017/11/sausage-tortellini-soup-recipe-1.jpg"
    },
    {
    title: "Pea and Parmesan Wonton Ravioli ",
    calories: 627,
    protein: 21,
    fat: 22,
    sodium: 956,
    image: "https://s3.amazonaws.com/green-valley/wp-content/uploads/2015/08/10161458/wonton-ravioli1.jpg"
    },
    {
    title: "Ziti with Kielbasa and Sauerkraut ",
    calories: 521,
    protein: 20,
    fat: 27,
    sodium: 996,
    image: "http://joylovefood.com/wp-content/uploads/2016/02/Cheesy-Baked-Ziti-with-Kielbasa-3.jpg"
    },
    {
    title: "Beef Rolls with Ham and Vegetables Stuffing ",
    calories: 530,
    protein: 36,
    fat: 35,
    sodium: 1258,
    image: "https://www.ruled.me/wp-content/uploads/2017/11/keto-stuffed-beef-rolls-featured.jpg"
    },
    {
    title: "Veal Marsala ",
    calories: 510,
    protein: 45,
    fat: 27,
    sodium: 468,
    image: "https://fthmb.tqn.com/Ji_0GNRDMdfwKcQ5VW3vit-m_rA=/1500x1000/filters:fill(auto,1)/veal-marsala-2-15-56a8c1743df78cf772a05710.jpg"
    },
    {
    title: "Honey Barbequed Salmon with M�che ",
    calories: 655,
    protein: 25,
    fat: 35,
    sodium: 609,
    image: "https://www.mysanfranciscokitchen.com/wp-content/uploads/2013/12/honey-salmon.png"
    },
    {
    title: "Scallops with Apple-Curry Sauce ",
    calories: 330,
    protein: 17,
    fat: 20,
    sodium: 526,
    image: "https://www.willcookforsmiles.com/wp-content/uploads/2021/02/Scallops-Recipe-with-Cream-Sauce-10-1366x2048.jpg"
    },
    {
    title: "Scallops with Asian Noodle Salad ",
    calories: 376,
    protein: 19,
    fat: 12,
    sodium: 1888,
    image: "https://foxeslovelemons.com/wp-content/uploads/2021/04/Asian-Noodle-Salad-2-1367x2048.jpg"
    },
    {
    title: "Smoked Whiskey Wings ",
    calories: 422,
    protein: 33,
    fat: 25,
    sodium: 449,
    image: "http://assets.epicurious.com/photos/54af4174c4a891cc44ccc13d/master/pass/51175660_whiskey-wings_1x1.jpg"
    },
    {
    title: "Crunchy Wasabi-Crusted Fish with Red-Cabbage Slaw ",
    calories: 460,
    protein: 37,
    fat: 26,
    sodium: 1023,
    image: "https://i.pinimg.com/originals/2d/67/ec/2d67ec8a6fc4983ae7804082d8bbaf81.jpg"
    },
    {
    title: "Seafood and Fennel Soup ",
    calories: 427,
    protein: 36,
    fat: 17,
    sodium: 1298,
    image: "https://msmarket.coop/wp-content/uploads/AdobeStock_72098544.jpeg"
    },
    {
    title: "Pasta with Spring Vegetables and Prosciutto ",
    calories: 350,
    protein: 20,
    fat: 22,
    sodium: 851,
    image: "https://www.aberdeenskitchen.com/wp-content/uploads/2017/04/Easy-Spring-Pea-Pesto-Pasta-2.jpg"
    },
    {
    title: "Vegetable and Tofu Red Curry ",
    calories: 616,
    protein: 26,
    fat: 35,
    sodium: 1022,
    image: "https://www.abeautifulplate.com/wp-content/uploads/2020/02/thai-red-curry-tofu-1-3-735x1103.jpg"
    },
    {
    title: "Veal Scaloppine with Mushroom Cream Sauce ",
    calories: 416,
    protein: 27,
    fat: 18,
    sodium: 141,
    image: "https://i.pinimg.com/originals/ba/18/e7/ba18e79aeab6ead373f29841ce3bc4e4.jpg"
    },
    {
    title: "Cioppino ",
    calories: 414,
    protein: 55,
    fat: 12,
    sodium: 1142,
    image: "https://howtofeedaloon.com/wp-content/uploads/2016/08/cioppino-1-1270x1904.jpg"
    },
    {
    title: "Hanger Steak with Shallots ",
    calories: 511,
    protein: 42,
    fat: 32,
    sodium: 528,
    image: "https://i.pinimg.com/originals/a7/b0/3e/a7b03e4f3e5d031591ee58d298ac2951.jpg"
    },
    {
    title: "Manhattan-Style Seafood Stew ",
    calories: 935,
    protein: 100,
    fat: 21,
    sodium: 4937,
    image: "https://i.pinimg.com/originals/27/b4/6c/27b46c1533d3140b6e58622ff300d759.jpg"
    },
    {
    title: "Salmon Wrapped Poached Eggs ",
    calories: 389,
    protein: 25,
    fat: 29,
    sodium: 664,
    image: "https://i.pinimg.com/originals/04/2f/ad/042fad227658e27bdef16408f2734969.jpg"
    },
    {
    title: "Pasta with Butternut Squash and Sage ",
    calories: 656,
    protein: 26,
    fat: 16,
    sodium: 404,
    image: "nan"
    },
    {
    title: "Grilled Chicken with Goat Cheese Stuffing, Peppers, Onions and Two Salsas ",
    calories: 681,
    protein: 65,
    fat: 39,
    sodium: 411,
    image: "https://fthmb.tqn.com/IiQtpOGhu1O4htoVrQwZ_e46lqs=/1300x918/filters:fill(auto,1)/grilled-chicken-goat-cheese-13-56a8ba975f9b58b7d0f4a424.jpg"
    },
    {
    title: "Sauteed Chicken with Parsnip, Apple, and Sherry Pan Sauce ",
    calories: 475,
    protein: 46,
    fat: 25,
    sodium: 96,
    image: "https://i.pinimg.com/originals/32/0f/dc/320fdcad2cdc7ad9a51cb329292465e0.jpg"
    },
    {
    title: "Linguine with Pears and Gorgonzola Cheese ",
    calories: 842,
    protein: 28,
    fat: 38,
    sodium: 649,
    image: "https://1.bp.blogspot.com/_WzejXsD_XCs/S-oUg65dB8I/AAAAAAAAB9Y/hqMcknxvnK0/s1600/Linguine+with+Garlic+and+Cheese.JPG"
    },
    {
    title: "Grilled Korean-Style Short Ribs ",
    calories: 619,
    protein: 63,
    fat: 31,
    sodium: 1918,
    image: "https://bbqingwiththenolands.com/wp-content/uploads/2020/08/Grilled-Korean-Ribs-4-1.jpg"
    },
    {
    title: "Frittata with Mustard Greens and Fontina ",
    calories: 379,
    protein: 20,
    fat: 32,
    sodium: 363,
    image: "https://i.pinimg.com/originals/9a/75/65/9a7565c6aafe84a944caf9dffbad5ce5.jpg"
    },
    {
    title: "Potato, Caramelized Onion, and Goat Cheese Gratin ",
    calories: 499,
    protein: 15,
    fat: 20,
    sodium: 217,
    image: "http://www.thecomfortofcooking.com/wp-content/uploads/2015/01/GarlicandGoatCheesePotatoGratin-4.jpg"
    },
    {
    title: "Crazy Cantina Chili ",
    calories: 742,
    protein: 39,
    fat: 31,
    sodium: 2166,
    image: "https://cdn.copymethat.com/media/orig_star-wars-crazy-cantina-chili-2020012001241707364105s60.jpg"
    },
    {
    title: "Creamy Grits with Rosemary Bacon ",
    calories: 497,
    protein: 16,
    fat: 31,
    sodium: 528,
    image: "http://www.healthylunchideas.net/assets/orignalimages/creamy-grits-with-rosemary-bacon.png"
    },
    {
    title: "Grilled Chicken Breast Stuffed with Prosciutto and Basil ",
    calories: 463,
    protein: 55,
    fat: 25,
    sodium: 663,
    image: "https://howtobbqright.com/wp-content/uploads/2017/04/GrilledChickenBreast_8.jpg"
    },
    {
    title: "Broccoli and Cheddar Skillet Flan ",
    calories: 427,
    protein: 15,
    fat: 26,
    sodium: 772,
    image: "http://whisktogether.com/wp-content/uploads/2012/10/roasted-broccoli-side-dish_1cr.jpg"
    },
    {
    title: "Tuna and Vegetable Fettuccine with Lemon Breadcrumbs ",
    calories: 779,
    protein: 41,
    fat: 35,
    sodium: 596,
    image: "https://godairyfree.org/wp-content/uploads/2016/01/Neapolitan-Tuna-Fetuccine-feature.jpg"
    },
    {
    title: "Penne with Basil-Seafood Sauce ",
    calories: 509,
    protein: 29,
    fat: 20,
    sodium: 923,
    image: "https://versatilefoodie.com/wp-content/uploads/2016/08/Penne-in-Cream-Sauce-3.jpg"
    },
    {
    title: "Veal and Tomato Rago�t with Potatoes, Cinnamon, and Cream ",
    calories: 570,
    protein: 38,
    fat: 32,
    sodium: 543,
    image: "https://i.pinimg.com/736x/8b/32/1a/8b321a95dc8e54f26cf65bce4fe587bc.jpg"
    },
    {
    title: "Chick-Pea Tomato Stew with Moroccan Flavors ",
    calories: 402,
    protein: 19,
    fat: 9,
    sodium: 330,
    image: "https://www.lastingredient.com/wp-content/uploads/2019/10/slow-cooker-moroccan-chickpea-stew4.jpg"
    },
    {
    title: "Orecchiette with Sausage and Red Pepper Sauce ",
    calories: 647,
    protein: 35,
    fat: 14,
    sodium: 818,
    image: "nan"
    },
    {
    title: "Smoked Salmon Chowder ",
    calories: 317,
    protein: 17,
    fat: 16,
    sodium: 777,
    image: "https://littlespicejar.com/wp-content/uploads/2020/07/Seattle-Style-Smoked-Salmon-Chowder-151.jpg"
    },
    {
    title: "Beef Shank and Sausage Rag� with Whole Grain Spaghetti ",
    calories: 791,
    protein: 52,
    fat: 39,
    sodium: 747,
    image: "https://i.pinimg.com/736x/3a/1e/54/3a1e5468459d0557233e7c5bc3053e7f.jpg"
    },
    {
    title: "Duck with Walnut Sherry Vinaigrette ",
    calories: 483,
    protein: 46,
    fat: 30,
    sodium: 567,
    image: "http://tappecue.net/sessionImages/recipes/duck-with-walnut-sherry-vinaigrette-233794.jpg"
    },
    {
    title: "Roasted Salmon with Cranberry-Mustard Sauce ",
    calories: 485,
    protein: 35,
    fat: 34,
    sodium: 350,
    image: "https://eatthegains.com/wp-content/uploads/2017/11/Cranberry-Balsamic-Roasted-Salmon-5.jpg"
    },
    {
    title: "Curried Beef Stew ",
    calories: 465,
    protein: 64,
    fat: 12,
    sodium: 2194,
    image: "https://www.tasteofhome.com/wp-content/uploads/2018/04/Curried-Beef-Stew_EXPS_DIYD19_115464_E09_17_6b.jpg"
    },
    {
    title: "Rotelle with Mushroom Sauce ",
    calories: 557,
    protein: 21,
    fat: 11,
    sodium: 126,
    image: "https://assets.marthastewart.com/styles/wmax-1500/d63/msl-food-entertaining-whats-for-dinner-noodles-rotelle-md110135/msl-food-entertaining-whats-for-dinner-noodles-rotelle-md110135_horiz.jpg?itok=b3Yo0au1"
    },
    {
    title: "Old-Fashioned Meat Loaf ",
    calories: 725,
    protein: 60,
    fat: 36,
    sodium: 1997,
    image: "https://i.pinimg.com/originals/71/3b/23/713b23064649d2e7f76ebdbcc3a99b67.jpg"
    },
    {
    title: "Ham with Tart Berry Sauce ",
    calories: 353,
    protein: 33,
    fat: 22,
    sodium: 3061,
    image: "https://i.pinimg.com/originals/66/28/56/6628567b872ea0d8feb13457e5298356.jpg"
    },
    {
    title: "Chicken and White Bean Soup with Herb Swirl ",
    calories: 750,
    protein: 45,
    fat: 40,
    sodium: 387,
    image: "https://i2.wp.com/nourish-and-fete.com/wp-content/uploads/2021/12/white-bean-chicken-soup-4.jpg"
    },
    {
    title: "Scallop Tea Rice ",
    calories: 451,
    protein: 29,
    fat: 7,
    sodium: 2494,
    image: "http://assets.epicurious.com/photos/560df962f3a00aeb2f1d65c5/1:1/w_600%2Ch_600/109068.jpg"
    },
    {
    title: "Chicken with Honey-Mustard Sauce ",
    calories: 807,
    protein: 18,
    fat: 35,
    sodium: 589,
    image: "https://easychickenrecipes.com/wp-content/uploads/2020/02/honey-mustard-chicken-skillet-4-of-7.jpg"
    },
    {
    title: "Roast Loin of Pork with Apple-Onion Chutney ",
    calories: 325,
    protein: 17,
    fat: 22,
    sodium: 55,
    image: "https://eativitynews.com/wp-content/uploads/2020/07/Roasted-pork-loin-with-crackling-roast-vegetables-gravy-and-apple-sauce-smaller-1024x1024.jpg"
    },
    {
    title: "Creamy Pappardelle with Leeks and Bacon ",
    calories: 613,
    protein: 20,
    fat: 31,
    sodium: 416,
    image: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2021_37/1773392/creamy-pappardelle-chicken-bacon-kb-main-210913.jpg"
    },
    {
    title: "Sizzling Halloumi Cheese with Fava Beans and Mint ",
    calories: 493,
    protein: 27,
    fat: 33,
    sodium: 1241,
    image: "https://assets.bonappetit.com/photos/57b12a1e1b33404414976680/1:1/w_330%2Cc_limit/mare_sizzling_halloumi_cheese_with_fava_beans_and_mint_v.jpg"
    },
    {
    title: "Spicy Ham Hash ",
    calories: 577,
    protein: 32,
    fat: 38,
    sodium: 1790,
    image: "https://myheartbeets.com/wp-content/uploads/2017/12/breakfast-leftover-ham.jpg"
    },
    {
    title: "Grilled Sardine Tartines with Onion and Arugula ",
    calories: 555,
    protein: 50,
    fat: 25,
    sodium: 327,
    image: "https://www.simplyrecipes.com/thmb/QMnIvyGdzy9IjtNtv_G2fXI6Xs0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Grilled-Vegetable-Tartine-LEAD-11-33b5f7b7f3624088ac0b5d46249ada83.jpg"
    },
    {
    title: "Pasta with Chicken, Sun-Dried Tomatoes, Gorgonzola and Pine Nuts ",
    calories: 749,
    protein: 40,
    fat: 22,
    sodium: 590,
    image: "https://i.pinimg.com/originals/6d/28/9b/6d289bc365bd0c1636d8eef25eb88982.jpg"
    },
    {
    title: "Butternut Squash, Bacon, and Rosemary Phyllo Pizza ",
    calories: 455,
    protein: 15,
    fat: 29,
    sodium: 515,
    image: "https://www.theseasonaljunkie.com/wp-content/uploads/2022/09/Bacon-and-Butternut-Squash-Pizza.jpg"
    },
    {
    title: "Shark Kebabs with Orange-Avocado Salsa ",
    calories: 436,
    protein: 38,
    fat: 25,
    sodium: 228,
    image: "https://i0.wp.com/www.lemonythyme.com/wp-content/uploads/2012/09/Shark-Kebobs-with-Avocado-Orange-Salsa.jpg"
    },
    {
    title: "Pan-Roasted Salmon with Ginger and Curry ",
    calories: 426,
    protein: 35,
    fat: 30,
    sodium: 105,
    image: "nan"
    },
    {
    title: "Vietnamese-Style Grilled Steak with Noodles ",
    calories: 928,
    protein: 58,
    fat: 40,
    sodium: 1087,
    image: "https://i.pinimg.com/originals/0c/3c/94/0c3c94cb93ebd13eadbdf8ef02fdb776.png"
    },
    {
    title: "Sauteed Shrimp with Mustard-Chive Sauce ",
    calories: 412,
    protein: 23,
    fat: 34,
    sodium: 1033,
    image: "https://i.pinimg.com/originals/6f/2c/51/6f2c51783c477569681d1c1fb98c4d18.png"
    },
    {
    title: "Shrimp Ceviche with Carrot, Orange, and Fennel ",
    calories: 342,
    protein: 18,
    fat: 15,
    sodium: 859,
    image: "https://sweetandsavorymeals.com/wp-content/uploads/2020/04/shrimp-ceviche-recipe.jpg"
    },
    {
    title: "Thai Curry Penne with Ginger-Tomato Chutney ",
    calories: 537,
    protein: 22,
    fat: 26,
    sodium: 674,
    image: "https://live.staticflickr.com/38/90548716_daec9db20a_b.jpg"
    },
    {
    title: "Salmon, Scallop, and Pea Terrine ",
    calories: 471,
    protein: 36,
    fat: 30,
    sodium: 1031,
    image: "https://media01.stockfood.com/largepreviews/MTEwOTM2NjA=/00357860-Smoked-salmon-terrine-with-cream-cheese-and-asparagus.jpg"
    },
    {
    title: "Spiced Pork with Celery Root Pur�e and Lentils ",
    calories: 826,
    protein: 63,
    fat: 29,
    sodium: 458,
    image: "https://assets.epicurious.com/photos/560df907f3a00aeb2f1d64a9/1:1/w_2560%2Cc_limit/108575.jpg"
    },
    {
    title: "Beef, Black Bean, and Corn Nachos ",
    calories: 543,
    protein: 31,
    fat: 31,
    sodium: 754,
    image: "https://www.averiecooks.com/wp-content/uploads/2019/01/beefnachos-5.jpg"
    },
    {
    title: "Sauteed Striped Bass with Mint Pesto and Spiced Carrots ",
    calories: 529,
    protein: 39,
    fat: 36,
    sodium: 218,
    image: "https://assets.epicurious.com/photos/560d99747b55306961bf7609/16:9/w_1280,c_limit/237901.jpg?mbid=social_retweet"
    },
    {
    title: "Nantucket Scallop Chowder ",
    calories: 490,
    protein: 27,
    fat: 36,
    sodium: 1576,
    image: "https://bigoven-res.cloudinary.com/image/upload/t_recipe-1280/nantucket-scallop-chowder.jpg"
    },
    {
    title: "Banana-Cinnamon French Toast ",
    calories: 505,
    protein: 17,
    fat: 26,
    sodium: 356,
    image: "https://www.justataste.com/wp-content/uploads/2016/06/easy-french-toast-caramelized-bananas-image.jpg"
    },
    {
    title: "Scandinavian Open-Face Bay Shrimp Sandwich ",
    calories: 384,
    protein: 24,
    fat: 28,
    sodium: 941,
    image: "https://i.pinimg.com/originals/b2/72/9f/b2729f8a1464504d3846b6a70278f94d.jpg"
    },
    {
    title: "Fillet of Beef on Garlic Croutons with Roasted Onion, Caper, and Tarragon Sauce ",
    calories: 454,
    protein: 28,
    fat: 25,
    sodium: 921,
    image: "https://cdn.shopify.com/s/files/1/1044/2210/products/Screen_Shot_2017-01-10_at_11.34.33_PM_528b0587-38a2-46dc-99ec-434ed9896b4d_1024x1024.png?v=1503467905"
    },
    {
    title: "Rigatoni with Eggplant, Tomato, and Ricotta ",
    calories: 715,
    protein: 23,
    fat: 20,
    sodium: 886,
    image: "https://friendseat.com/wp-content/uploads/2018/04/rigatoni-with-eggplant-tomato-and-ricotta-recipe-800x600.jpg"
    },
    {
    title: "Seafood Spaghetti ",
    calories: 819,
    protein: 59,
    fat: 33,
    sodium: 1051,
    image: "https://favoreats.s3.us-west-2.amazonaws.com/variants/8RSNDWQdLA4ejrJKVGNs4sn5/88e116c78895eb2e18bb470eafee2b46caa14e239bd2f55e0b51ba01211ef17c"
    },
    {
    title: "Chicken Wings with Curry-Yogurt Glaze ",
    calories: 521,
    protein: 44,
    fat: 33,
    sodium: 236,
    image: "https://www.happyfoodstube.com/wp-content/uploads/2017/03/baked-curry-chicken-wings-with-mango-chutney-pic.jpg"
    },
    {
    title: "Bean Thread Noodles with Beef and Asian Pear ",
    calories: 499,
    protein: 27,
    fat: 24,
    sodium: 1995,
    image: "https://izzycooking.com/wp-content/uploads/2022/09/Bean-Thread-Noodles-01-1.jpg"
    },
    {
    title: "Sausage and Cheese Strata with Sun-Dried Tomatoes ",
    calories: 528,
    protein: 28,
    fat: 30,
    sodium: 1360,
    image: "https://www.tasteofhome.com/wp-content/uploads/2017/10/Cheese-Sausage-Strata_exps14471_BB2406671A09_01_5bC_RMS-1.jpg"
    },
    {
    title: "Sea Bass with Gingered Vegetable Stir-Fry ",
    calories: 343,
    protein: 40,
    fat: 14,
    sodium: 932,
    image: "http://www.applecrumbles.com/wp-content/uploads/2010/04/DSC_4192.jpg"
    },
    {
    title: "Lentils with Cucumbers, Chard, and Poached Egg ",
    calories: 534,
    protein: 35,
    fat: 16,
    sodium: 112,
    image: "https://i.pinimg.com/originals/e7/b7/32/e7b732c6b7b6924abb4bfdf789a3ec06.jpg"
    },
    {
    title: "Crustless Quiche ",
    calories: 521,
    protein: 29,
    fat: 39,
    sodium: 493,
    image: "https://www.wellplated.com/wp-content/uploads/2020/11/Broccoli-Bacon-Crustless-Quiche.jpg"
    },
    {
    title: "Rava Dosas with Potato Chickpea Masala ",
    calories: 811,
    protein: 21,
    fat: 31,
    sodium: 638,
    image: "https://i.pinimg.com/originals/ba/a3/38/baa338345bb97a432d31cebc420c64e1.jpg"
    },
    {
    title: "Prosciutto and Goat Cheese Timbales with Mixed Greens ",
    calories: 436,
    protein: 21,
    fat: 37,
    sodium: 1220,
    image: "https://hummingbirdthyme.com/wp-content/uploads/2021/12/Goat-Cheese-Fig-Jam-Prosciutto-Appetizer-10.jpg"
    },
    {
    title: "Crab, Mango, and Avocado Salad with Citrus Dressing ",
    calories: 466,
    protein: 31,
    fat: 22,
    sodium: 677,
    image: "https://assets.bonappetit.com/photos/57b0edd91b33404414976535/16:9/w_1280,c_limit/crab-mango-and-avocado-salad-with-citrus-dressing.jpg"
    },
    {
    title: "Pasta with Peas, Ricotta Salata, and Lemon ",
    calories: 641,
    protein: 25,
    fat: 26,
    sodium: 353,
    image: "https://www.vegetarianventures.com/wp-content/uploads/2020/04/RicottaPastaBlog-2-of-3-1200x1500.jpg"
    },
    {
    title: "Monte Cristo Chicken ",
    calories: 310,
    protein: 39,
    fat: 13,
    sodium: 101,
    image: "https://www.plainchicken.com/wp-content/uploads/attachments/IMG_1748.JPG"
    },
    {
    title: "Pasta Salad with Tomatoes and Corn ",
    calories: 487,
    protein: 16,
    fat: 23,
    sodium: 217,
    image: "https://reciperunner.com/wp-content/uploads/2021/05/tomato-corn-pasta-salad-photos-1425x2048.jpg"
    },
    {
    title: "Grilled Striped Bass ",
    calories: 412,
    protein: 75,
    fat: 10,
    sodium: 293,
    image: "http://www.marthastewart.com/sites/files/marthastewart.com/imagecache/wmax-520-highdpi/ecl/images/content/pub/ms_living/2002Q3/Fish_xl.jpg"
    },
    {
    title: "Tofu and Leek Stir-Fry with Ground Beef ",
    calories: 506,
    protein: 35,
    fat: 31,
    sodium: 362,
    image: "https://www.simplyrecipes.com/thmb/WvhQktHFmAtjIXiSa53-4afMzyQ=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/Spicy-Tofu-Stirfry-LEAD-4-15d3af7214e443d5a4869d187bac8fe5.jpg"
    },
    {
    title: "Saltimbocca ",
    calories: 533,
    protein: 36,
    fat: 39,
    sodium: 1028,
    image: "https://www.recipetineats.com/wp-content/uploads/2022/09/Veal-saltimbocca_5a.jpg?resize=85"
    },
    {
    title: "Grilled Rib-Eye Steaks with Cucumber Relish ",
    calories: 483,
    protein: 34,
    fat: 36,
    sodium: 104,
    image: "https://www.acedarspoon.com/wp-content/uploads/2019/06/Grilled-Ribeye-Image-8.jpg"
    },
    {
    title: "Vegetable-Sausage Soup ",
    calories: 400,
    protein: 30,
    fat: 13,
    sodium: 3149,
    image: "https://theflavoursofkitchen.com/wp-content/uploads/2018/11/Creamy-Vegetable-Soup-4.jpg"
    },
    {
    title: "Pork Braised in Dark Soy Sauce ",
    calories: 452,
    protein: 27,
    fat: 33,
    sodium: 220,
    image: "https://media.npr.org/assets/img/2014/09/16/201204281118201391908-2-_wide-f91bb7d396eb5b6432adb38c0c050145f3a64aa4-s1400-c100.jpg"
    },
    {
    title: "Soba Noodles with Vegetables, Crispy Tofu, and Toasted Sesame Seeds ",
    calories: 492,
    protein: 22,
    fat: 20,
    sodium: 733,
    image: "https://www.mykitchenlove.com/wp-content/uploads/2019/02/Spicy-Crispy-Tofu-w-Soba-Noodles-4-640x960.jpg"
    },
    {
    title: "Beef Tenderloin Steaks with Smoky Bacon-Bourbon Sauce ",
    calories: 462,
    protein: 19,
    fat: 34,
    sodium: 861,
    image: "https://www.savingdessert.com/wp-content/uploads/2018/01/Beef-Tenderloin-with-Herb-Pan-Sauce-3-800x1200.jpg"
    },
    {
    title: "Beef Paprikas ",
    calories: 520,
    protein: 32,
    fat: 38,
    sodium: 482,
    image: "https://numstheword.com/wp-content/uploads/2021/03/Instant-Pot-Beef-Paprika-06-1366x2048.jpg"
    },
    {
    title: "Eggplant and Tomato Pizza ",
    calories: 687,
    protein: 24,
    fat: 25,
    sodium: 1174,
    image: "https://blog.williams-sonoma.com/wp-content/uploads/2014/06/BLOG-Grilled-Pizza-With-Eggplant-And-Tomatoes.jpg"
    },
    {
    title: "Fettuccine With Sausage and Kale ",
    calories: 602,
    protein: 42,
    fat: 28,
    sodium: 376,
    image: "https://images.eatthismuch.com/site_media/img/45485_HillOK444_8a52a092-9c48-4b3d-9c22-cc19f078529e.png"
    },
    {
    title: "Moroccan Lemon Chicken ",
    calories: 548,
    protein: 44,
    fat: 29,
    sodium: 798,
    image: "http://www.jessicagavin.com/wp-content/uploads/2013/11/one-pan-spiced-lemon-chicken.jpg"
    },
    {
    title: "Orecchiette with Sausage and Red Pepper Sauce ",
    calories: 647,
    protein: 35,
    fat: 14,
    sodium: 818,
    image: "nan"
    },
    {
    title: "Scallops with Spicy Garlic Sauce ",
    calories: 387,
    protein: 21,
    fat: 24,
    sodium: 2258,
    image: "https://carmyy.com/wp-content/uploads/2018/10/spicy-honey-garlic-scallops-2.jpg"
    },
    {
    title: "Grilled Salmon Cakes with Lemon Mayonnaise ",
    calories: 424,
    protein: 16,
    fat: 37,
    sodium: 531,
    image: "https://fthmb.tqn.com/DaOnHdLOidsp7eAES6PNlVa5FT8=/2350x3289/filters:fill(auto,1)/salmoncakes-589de8cc3df78c47589579ab.jpg"
    },
    {
    title: "Vegetable and Cheese Strata ",
    calories: 610,
    protein: 34,
    fat: 34,
    sodium: 990,
    image: "https://lh3.googleusercontent.com/XNk4plgamOqjpSOi_3Yu1S1oHYxeVcWxMqHSLtoejU17npfEeLg9NE6FNbL9YYmAjs1RrAJYhGrHjcUp5QfA4FGPZzhczYvpcvz2q_0=w900-l68"
    },
    {
    title: "Smoked Sausage, Kale and Potato Soup ",
    calories: 477,
    protein: 25,
    fat: 18,
    sodium: 586,
    image: "https://www.thereciperebel.com/wp-content/uploads/2018/01/sausage-potato-soup-kale-www.thereciperebel.com-600-28-of-32.jpg"
    },
    {
    title: "Sausage Stuffing ",
    calories: 634,
    protein: 21,
    fat: 24,
    sodium: 1158,
    image: "http://isernio.com/wp-content/uploads/2015/02/Stuffing.jpg"
    },
    {
    title: "Golden Pan-Fried Fish ",
    calories: 415,
    protein: 48,
    fat: 15,
    sodium: 1333,
    image: "https://assets.epicurious.com/photos/57c5b8d8082060f11022b571/2:1/w_1260%2Ch_630/golden-pan-fried-fish.jpg"
    },
    {
    title: "Broiled Mackerel with Ginger and Garlic ",
    calories: 514,
    protein: 43,
    fat: 35,
    sodium: 1112,
    image: "https://www.seafoodnutrition.org/wp-content/uploads/2020/03/herb-broiled-mackerel-featured-1024x768.jpg"
    },
    {
    title: "Salmon with Breadcrumb, Olive and Sun-Dried Tomato Crust ",
    calories: 525,
    protein: 36,
    fat: 31,
    sodium: 557,
    image: "https://friendseat.com/wp-content/uploads/2018/04/salmon-with-breadcrumb-olive-and-sun-dried-tomato-crust.jpg"
    },
    {
    title: "Asian Meatballs with Sesame Lime Dipping Sauce ",
    calories: 518,
    protein: 35,
    fat: 36,
    sodium: 1428,
    image: "https://i1.wp.com/theweatheredgreytable.com/wp-content/uploads/2016/01/meatballs-asian-meatballs-with-sesame-lime-dipping-sauce-2.jpg?resize=1024%2C768&amp;ssl=1"
    },
    {
    title: "Farro Soup with Kale and Cannellini ",
    calories: 330,
    protein: 18,
    fat: 8,
    sodium: 967,
    image: "https://i.pinimg.com/originals/cd/04/3e/cd043e0ca3a48cc5436efb2522766781.jpg"
    },
    {
    title: "Baked Crab, Brie, and Artichoke Dip ",
    calories: 454,
    protein: 31,
    fat: 31,
    sodium: 996,
    image: "https://margaritasontherocks.com/wp-content/uploads/2016/06/IMG_9351.jpg"
    },
    {
    title: "Roasted Monkfish with Saffron Tomato Sauce and Celeriac Mash ",
    calories: 309,
    protein: 36,
    fat: 13,
    sodium: 421,
    image: "https://c8.alamy.com/comp/E6YEDR/roasted-monkfish-in-herb-sauce-and-celeriac-mash-E6YEDR.jpg"
    },
    {
    title: "Pasta with Kalamata Olives and Roasted Cherry Tomato Sauce ",
    calories: 556,
    protein: 17,
    fat: 25,
    sodium: 482,
    image: "https://thenovicechefblog.com/wp-content/uploads/2018/11/Creamy-Pasta-with-Roasted-Cherry-Tomatoes-5sm.jpg"
    },
    {
    title: "Turkey Tetrazzini ",
    calories: 856,
    protein: 59,
    fat: 30,
    sodium: 661,
    image: "http://4hatsandfrugal.com/wp-content/uploads/2014/11/Turkey-Tetrazzini.jpg"
    },
    {
    title: "Pasta with Smoked Turkey and Wild Mushrooms ",
    calories: 663,
    protein: 35,
    fat: 27,
    sodium: 363,
    image: "https://www.sidechef.com/recipe/71ef712e-04fb-4d67-a709-c2be786f7c0c.jpg?d=1408x1120"
    },
    {
    title: "Shrimp Smorrebrod ",
    calories: 463,
    protein: 23,
    fat: 34,
    sodium: 1013,
    image: "http://oldworldtaste.com/wp-content/uploads/2016/09/shrimpsmorrebrod.jpg"
    },
    {
    title: "Grilled Swordfish with Coriander Lime Butter ",
    calories: 484,
    protein: 41,
    fat: 29,
    sodium: 170,
    image: "https://fthmb.tqn.com/UeAVrxFzmNHhQL-GBcPmvCn6wzU=/960x0/filters:no_upscale()/ginger-limeswordfish-589dea6e5f9b58819c961ca5.jpeg"
    },
    {
    title: "Baked Polenta with Shiitake Rago�t ",
    calories: 533,
    protein: 21,
    fat: 24,
    sodium: 551,
    image: "https://www.thespruceeats.com/thmb/-T_oCPxfarVT_LkGZ-OBeMleZTw=/4494x3000/filters:fill(auto,1)/easy-baked-polenta-with-parmesan-cheese-3057179-hero-01-5c291853c9e77c0001b19643.jpg"
    },
    {
    title: "Black Bean Tart with Chili Crust ",
    calories: 538,
    protein: 15,
    fat: 36,
    sodium: 459,
    image: "https://i.pinimg.com/originals/0a/30/bb/0a30bbb64a9465298e3b823074001197.jpg"
    },
    {
    title: "Garlicky Linguine with Crab, Red Bell Pepper and Pine Nuts ",
    calories: 439,
    protein: 25,
    fat: 16,
    sodium: 686,
    image: "https://i.pinimg.com/originals/c0/2c/37/c02c37dda8b24c1be7096171b6107f3d.jpg"
    },
    {
    title: "Scallop Chowder with Bacon ",
    calories: 427,
    protein: 26,
    fat: 17,
    sodium: 1021,
    image: "http://www.cookingmamas.com/wp-content/uploads/2013/03/Scallop-Bacon-Chowder-2.jpg"
    },
    {
    title: "Penne with Broiled Vegetables and Feta Cheese ",
    calories: 467,
    protein: 17,
    fat: 5,
    sodium: 772,
    image: "http://irepo.primecp.com/2015/06/224900/Three-Cheese-Baked-Penne-Roasted-Vegetables_ExtraLarge1000_ID-1048440.jpg?v=1048440"
    },
    {
    title: "Noodle Kugel ",
    calories: 717,
    protein: 21,
    fat: 35,
    sodium: 502,
    image: "nan"
    },
    {
    title: "Scallops with Capers and Sun-Dried Tomatoes ",
    calories: 455,
    protein: 19,
    fat: 38,
    sodium: 712,
    image: "https://bakerbynature.com/wp-content/uploads/2021/05/Scallops-with-Tomatoes-Olives-and-Scallops-1-of-1.jpg"
    },
    {
    title: "Bruschetta with White Beans and Cheese ",
    calories: 373,
    protein: 19,
    fat: 24,
    sodium: 790,
    image: "https://www.easyonthecook.com/wp-content/uploads/2016/04/bruschetta13.jpg"
    },
    {
    title: "Baked Polenta with Onions and Bacon ",
    calories: 469,
    protein: 16,
    fat: 28,
    sodium: 620,
    image: "https://1.bp.blogspot.com/-hlXIdYo7bEg/WfCIC4x2g9I/AAAAAAAAbaE/289W3Cv6TkcEDslVmRxruRnMDk1Z6BivQCLcBGAs/s16000/aIMG_7990f%2BVertical%2B690.jpg"
    },
    {
    title: "Thai Chicken Pasta ",
    calories: 885,
    protein: 60,
    fat: 29,
    sodium: 879,
    image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Thai-Chicken-Pasta_EXPS_CF2BZ20_46348_E12_05_3b-1.jpg"
    },
    {
    title: "Roast Chicken with Broccoli Rabe, Fingerling Potatoes, and Garlic-Parsley Jus ",
    calories: 492,
    protein: 47,
    fat: 21,
    sodium: 1173,
    image: "https://assets.epicurious.com/photos/54b3e66821388ef838b0df9d/master/pass/355199_roast-chicken_1x1.jpg"
    },
    {
    title: "Roast Chicken and Mango Salad with Yogurt ",
    calories: 480,
    protein: 59,
    fat: 20,
    sodium: 223,
    image: "https://ilovecbfoods.com/wp-content/uploads/2020/11/Mango-Glazed-Roast-Chicken-min.jpg"
    },
    {
    title: "Grilled Shrimp Greek Salad ",
    calories: 392,
    protein: 25,
    fat: 25,
    sodium: 1112,
    image: "http://skinnyfitalicious.com/wp-content/uploads/2016/06/Greek-shrimp-salad-img5.jpg"
    },
    {
    title: "Orecchiette Pasta with Peas, Ham, and Cream ",
    calories: 671,
    protein: 24,
    fat: 23,
    sodium: 1021,
    image: "nan"
    },
    {
    title: "Thai-Style Beef with Noodles ",
    calories: 693,
    protein: 41,
    fat: 24,
    sodium: 1234,
    image: "https://www.deliciousmagazine.co.uk/wp-content/uploads/2018/07/813957-1-eng-GB_vietnamesebeefnoodles-768x960.jpg"
    },
    {
    title: "Herbed Spaetzle ",
    calories: 514,
    protein: 18,
    fat: 23,
    sodium: 715,
    image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/9/4/4/FNM_100112-Herbed-Spaetzle-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371609415844.jpeg"
    },
    {
    title: "Parmesan-Crusted Polenta with Sausage-Mushroom Rago�t ",
    calories: 1190,
    protein: 40,
    fat: 24,
    sodium: 1213,
    image: "https://familystylefood.com/wp-content/uploads/2021/09/Parm-Polenta-1.jpg"
    },
    {
    title: "Penne with Tomatoes, Olives and Two Cheeses ",
    calories: 796,
    protein: 27,
    fat: 28,
    sodium: 278,
    image: "https://cdn11.bigcommerce.com/s-cjh14ahqln/product_images/uploaded_images/mediterraneanpennetunaolivesroastedtomatoes-1-web.jpg"
    },
    {
    title: "Spicy Beef Burritos ",
    calories: 589,
    protein: 47,
    fat: 19,
    sodium: 1599,
    image: "https://thehungryhungryhusband.co.uk/wp-content/uploads/2019/08/Spicy-Beef-Burritos-960x610.jpg"
    },
    {
    title: "Dutch Farmer's Cheese Soup ",
    calories: 459,
    protein: 18,
    fat: 27,
    sodium: 1090,
    image: "http://assets.epicurious.com/photos/58b488ed1c5fbd604af0ffac/master/pass/DUTCH-FARMER'S-CHEESE-SOUP-16022017.jpg"
    },
    {
    title: "Mozzarella-Stuffed Grilled Portobellos with Balsamic Marinade ",
    calories: 398,
    protein: 15,
    fat: 26,
    sodium: 490,
    image: "https://i.pinimg.com/originals/32/bd/66/32bd667da44dc7f6905cc4ff138a52f1.jpg"
    },
    {
    title: "Pasta Bolognese ",
    calories: 718,
    protein: 27,
    fat: 35,
    sodium: 881,
    image: "https://www.thefoodjoy.com/wp-content/uploads/2019/07/pasta-bolognese-3-1600x2143.jpg"
    },
    {
    title: "Spring Vegetable and Goat Cheese Dip ",
    calories: 421,
    protein: 19,
    fat: 33,
    sodium: 666,
    image: "https://i.pinimg.com/originals/e8/4f/33/e84f3373ebc2ef7c2f1003fa993cc22b.jpg"
    },
    {
    title: "Lemongrass Tofu with Mushrooms ",
    calories: 344,
    protein: 17,
    fat: 26,
    sodium: 255,
    image: "https://woonheng.com/wp-content/uploads/2020/11/Lemongrass-Tofu-2-819x1024.jpg"
    },
    {
    title: "Broiled Salmon with Onion, Tomato and Lemon ",
    calories: 350,
    protein: 24,
    fat: 27,
    sodium: 71,
    image: "https://www.dinneratthezoo.com/wp-content/uploads/2019/06/broiled-salmon-11.jpg"
    },
    {
    title: "Curried Red Lentil and Swiss Chard Stew with Garbanzo Beans ",
    calories: 412,
    protein: 24,
    fat: 7,
    sodium: 1198,
    image: "https://4.bp.blogspot.com/-JQELs8yLDFo/T8vwIvEodII/AAAAAAAAAO4/0Ly4aBrotmQ/s1600/stew_currylentilswisschard.jpg"
    },
    {
    title: "Blue Cheese Toasts ",
    calories: 881,
    protein: 34,
    fat: 10,
    sodium: 1914,
    image: "https://i.pinimg.com/originals/3e/4d/de/3e4ddea4dc9fd5563122382f4de59591.jpg"
    },
    {
    title: "Red Wine Brasato with Glazed Root Vegetables ",
    calories: 940,
    protein: 100,
    fat: 38,
    sodium: 800,
    image: "https://assets.epicurious.com/photos/560dd81ff9a84192308a4fb3/1:1/w_600%2Ch_600/237035.jpg"
    },
    {
    title: "Muscovy Duck Breasts with Pomegranate-Wine Sauce ",
    calories: 432,
    protein: 49,
    fat: 15,
    sodium: 265,
    image: "https://i.pinimg.com/originals/cf/6e/8a/cf6e8a03b9bc10c77431f2e196e37752.jpg"
    },
    {
    title: "Grilled Swedish Meatball Kebabs ",
    calories: 313,
    protein: 17,
    fat: 15,
    sodium: 484,
    image: "https://www.mycolombianrecipes.com/wp-content/uploads/2017/05/turkey-skweres.jpg"
    },
    {
    title: "Crab Fat-Caramel Wings ",
    calories: 1160,
    protein: 49,
    fat: 35,
    sodium: 3110,
    image: "https://assets.epicurious.com/photos/54ab4f106529d92b2c033481/1:1/w_600%2Ch_600/51248610_crab-fat-wings_1x1.jpg"
    },
    {
    title: "Ham Steak with Bourbon-Cream Sauce ",
    calories: 415,
    protein: 40,
    fat: 23,
    sodium: 3854,
    image: "https://i.pinimg.com/736x/47/4d/82/474d827c971124e16bfcd72e2a589522.jpg"
    },
    {
    title: "Napoleon of Peeky Toe Crab and Apple ",
    calories: 481,
    protein: 22,
    fat: 31,
    sodium: 879,
    image: "https://keeprecipes.com/sites/keeprecipes/files/6910_1341628111_0.jpg"
    },
    {
    title: "Eggplant-Polenta Stacks with Tomato Sauce ",
    calories: 565,
    protein: 20,
    fat: 36,
    sodium: 1228,
    image: "https://i.pinimg.com/originals/62/90/d9/6290d9a7e54454ce1373ddc536aa1065.jpg"
    },
    {
    title: "Pork Chops with Mango Pineapple Sauce ",
    calories: 685,
    protein: 44,
    fat: 31,
    sodium: 1368,
    image: "https://www.tasteofhome.com/wp-content/uploads/2017/10/exps170951_SD153319C10_08_3b.jpg"
    },
    {
    title: "Vegetable Soup with Basil and Garlic Sauce ",
    calories: 620,
    protein: 32,
    fat: 20,
    sodium: 1037,
    image: "https://www.tarladalal.com/members/9306/big/big_garlic_vegetable_soup-8168.jpg?size=696X905"
    },
    {
    title: "Roasted Shrimp with Champagne-Shallot Sauce ",
    calories: 303,
    protein: 22,
    fat: 19,
    sodium: 888,
    image: "https://i.pinimg.com/originals/73/e7/5d/73e75d88e6d2cfd77580f6afc9d83a28.jpg"
    },
    {
    title: "Zucchini Melon Salad ",
    calories: 583,
    protein: 46,
    fat: 39,
    sodium: 1455,
    image: "http://www.lastingredient.com/wp-content/uploads/2016/08/zucchini-corn-salad4.jpg"
    },
    {
    title: "Grilled Shrimp with Fiery Lemongrass-Chile Sambal ",
    calories: 348,
    protein: 33,
    fat: 16,
    sodium: 1819,
    image: "https://i.pinimg.com/originals/45/3e/af/453eafb5094694662e423c8ab44add9e.jpg"
    },
    {
    title: "White Bean, Butternut Squash, Kale and Olive Stew ",
    calories: 604,
    protein: 26,
    fat: 14,
    sodium: 1472,
    image: "https://anerdcooks.com/wp-content/uploads/2016/11/butternut_squash_kale_white_bean_soup2-768x1152.jpg"
    },
    {
    title: "Couscous and Chicken Salad with Orange-Balsamic Dressing ",
    calories: 797,
    protein: 46,
    fat: 29,
    sodium: 363,
    image: "https://neilshealthymeals.com/wp-content/uploads/2021/08/Couscous-Chicken-Salad-Featured-Image.jpg"
    },
    {
    title: "Salmon Cakes with Lemon Yogurt Sauce ",
    calories: 487,
    protein: 28,
    fat: 36,
    sodium: 261,
    image: "https://canolaeatwell.com/wp-content/uploads/2013/07/Salmon-Cakes-with-Lemon-Yogurt-Sauce.png"
    },
    {
    title: "Grilled Asian-Style Salmon with Cabbage and Mint Slaw ",
    calories: 441,
    protein: 37,
    fat: 30,
    sodium: 593,
    image: "https://i.pinimg.com/originals/14/4d/b7/144db75bff534aaefd6b551deee8eefc.jpg"
    },
    {
    title: "Grilled Lobster with Orange Chipotle Vinaigrette ",
    calories: 780,
    protein: 113,
    fat: 32,
    sodium: 3606,
    image: "https://assets.epicurious.com/photos/555b6885100d9bda6d82075f/1:1/w_2560%2Cc_limit/0607-GT-UP01.01-CP.jpg"
    },
    {
    title: "Pasta with Tomatoes, Pine Nuts and Basil ",
    calories: 534,
    protein: 15,
    fat: 26,
    sodium: 730,
    image: "http://heronearth.com/wp-content/uploads/2019/09/tomato-pine-nut-pasta-675x900.jpg"
    },
    {
    title: "Shrimp Risotto with Baby Spinach and Basil ",
    calories: 847,
    protein: 32,
    fat: 10,
    sodium: 656,
    image: "https://i.pinimg.com/originals/64/ba/38/64ba38fcdfde6af18a01ce2c46488287.jpg"
    },
    {
    title: "Spaghetti with Sweet 100 Tomatoes, Garlic Chives, and Lemon Basil ",
    calories: 560,
    protein: 16,
    fat: 15,
    sodium: 21,
    image: "https://www.homefortheharvest.com/wp-content/uploads/2022/03/Sweet-100-Tomatoes-600x429.jpg"
    },
    {
    title: "Mom's Meat Loaf ",
    calories: 435,
    protein: 27,
    fat: 30,
    sodium: 627,
    image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Mom-s-Meat-Loaf-for-2_EXPS_CF2BZ20_26860_B12_05_2b-1.jpg"
    },
    {
    title: "Orzo with Shrimp, Feta Cheese, and White Wine ",
    calories: 422,
    protein: 21,
    fat: 22,
    sodium: 732,
    image: "nan"
    },
    {
    title: "Potato-Crusted Quiche with Smoked Cheddar and Canadian Bacon ",
    calories: 487,
    protein: 34,
    fat: 25,
    sodium: 899,
    image: "https://i.pinimg.com/originals/c5/85/66/c585661f57068a571cdeaac4018ebabf.jpg"
    },
    {
    title: "Stuffed Chicken Breasts with Cider Vinegar Sauce ",
    calories: 570,
    protein: 43,
    fat: 31,
    sodium: 522,
    image: "https://ifoodblogger.com/wp-content/uploads/2018/10/Roasted-Pepper-Garlic-Stuffed-Chicken-Breast-2.jpg"
    },
    {
    title: "Bacon and Swiss Chard Pasta ",
    calories: 688,
    protein: 24,
    fat: 34,
    sodium: 711,
    image: "https://i.pinimg.com/originals/b1/a7/27/b1a727b42323fd8d359c13ca508abd0a.jpg"
    },
    {
    title: "Salmon with Caper-Anchovy Butter ",
    calories: 503,
    protein: 36,
    fat: 38,
    sodium: 244,
    image: "https://assets.epicurious.com/photos/562558d9219057901cc730ae/1:1/w_2560%2Cc_limit/EP_10192015_freezerpanty_salmonrecipe.jpg"
    },
    {
    title: "Braised Veal Shanks with Green Olives and Capers ",
    calories: 563,
    protein: 75,
    fat: 23,
    sodium: 656,
    image: "https://www.saltys.com/wp-content/uploads/2019/11/Braised-Veal-Shank-2-1170x781.jpg"
    },
    {
    title: "Heirloom Tomato Salad with Mozzarella and Basil ",
    calories: 345,
    protein: 15,
    fat: 27,
    sodium: 668,
    image: "https://littlespicejar.com/wp-content/uploads/2019/07/Marinated-Mozzarella-Tomato-Salad-10-1.jpg"
    },
    {
    title: "Veal Scallops with Bacon and Potatoes ",
    calories: 454,
    protein: 32,
    fat: 16,
    sodium: 948,
    image: "https://www.goodtaste.tv/wp-content/uploads/2020/02/Veal-Scallops.png"
    },
    {
    title: "Lentil Soup with Lamb and Mint ",
    calories: 526,
    protein: 28,
    fat: 24,
    sodium: 271,
    image: "https://singleservingchef.com/wp-content/uploads/2015/03/lamb-and-lentil-soup-600x510.jpeg"
    },
    {
    title: "Peppery Pasta with Feta Cheese ",
    calories: 464,
    protein: 17,
    fat: 14,
    sodium: 425,
    image: "https://i.pinimg.com/originals/59/c3/67/59c3674c684f9cc4100a878b562214f0.jpg"
    },
    {
    title: "Hearty Veal Stew with Red Wine and Sweet Peppers ",
    calories: 334,
    protein: 35,
    fat: 16,
    sodium: 282,
    image: "https://i.pinimg.com/originals/e1/2c/4f/e12c4f9841c975db62620d7e85a5f1da.png"
    },
    {
    title: "Pork Tenderloin with Caramelized Pears and Pear-Brandy Cream Sauce ",
    calories: 556,
    protein: 32,
    fat: 26,
    sodium: 91,
    image: "https://foodal.com/wp-content/uploads/2018/09/Pear-and-Herb-Roasted-Pork-Tenderloin-Pin.jpg"
    },
    {
    title: "Milk-Braised Pork With Lemon and Sage ",
    calories: 500,
    protein: 33,
    fat: 37,
    sodium: 1292,
    image: "https://www.tonyferguson.co.za/wp-content/uploads/2020/06/Lemon-Sage-Pork-Cutlets-1.jpg"
    },
    {
    title: "Sea Bass with Red Pepper and Olive Tapenade ",
    calories: 363,
    protein: 34,
    fat: 21,
    sodium: 395,
    image: "https://i.pinimg.com/736x/61/4a/96/614a96e8e348e870a4556c8fe5fde02f--sea-bass-tapenade.jpg"
    },
    {
    title: "Pierogies with Stewed Sauerkraut and Mushrooms ",
    calories: 590,
    protein: 15,
    fat: 13,
    sodium: 811,
    image: "https://garlicmatters.com/wp-content/uploads/2015/12/Pierogi-with-cabbage-mushrooms-filling-3-1.jpg"
    },
    {
    title: "Five-Spice Pork and Green Bean Stir-Fry ",
    calories: 427,
    protein: 24,
    fat: 25,
    sodium: 953,
    image: "https://a0.anyrgb.com/pngimg/848/258/braised-pork-shanghai-green-dongpo-pork-red-braised-pork-belly-minced-pork-rice-red-cooking-braised-fivespice-powder-pork-belly-vegetable-salad.png"
    },
    {
    title: "Kale with Garlic and Cranberries ",
    calories: 392,
    protein: 18,
    fat: 35,
    sodium: 92,
    image: "https://cadryskitchen.com/wp-content/uploads/2021/02/garlicky-kale.jpg"
    },
    {
    title: "Leek and Cannellini Bean Soup ",
    calories: 631,
    protein: 24,
    fat: 34,
    sodium: 1514,
    image: "https://www.recipesmadeeasy.co.uk/wp-content/uploads/2018/01/Leek-spinach-and-canellini-bean-soup-1.jpg"
    },
    {
    title: "Herbed Shrimp Salad with Watercress on Toasted Brioche ",
    calories: 449,
    protein: 28,
    fat: 18,
    sodium: 1224,
    image: "https://hips.hearstapps.com/hmg-prod/images/herbed-shrimp-and-watercress-salad-65665332da4e0.jpg?crop=0.689xw:0.460xh;0.163xw,0.259xh&amp;resize=640:*"
    },
    {
    title: "Parmesan-Crusted Lemon Chicken ",
    calories: 504,
    protein: 62,
    fat: 19,
    sodium: 425,
    image: "nan"
    },
    {
    title: "Winter Squash Soup with Gruy�re Croutons ",
    calories: 490,
    protein: 19,
    fat: 18,
    sodium: 599,
    image: "https://i.pinimg.com/originals/96/e5/25/96e525e438c9ad7eb215f38a84cc5f45.jpg"
    },
    {
    title: "Spaghettini with Gorgonzola, Leeks and Shallots ",
    calories: 531,
    protein: 17,
    fat: 17,
    sodium: 287,
    image: "https://ais.kochbar.de/kbrezept/440222_603943/24-05nchi/840x630/506/gorgonzola-spaghettini-rezept.jpg"
    },
    {
    title: "Grilled Swordfish Verde ",
    calories: 408,
    protein: 45,
    fat: 22,
    sodium: 193,
    image: "https://www.panningtheglobe.com/wp-content/uploads/2020/07/Grilled-swordfish-salsa-verde-768x1152.jpg"
    },
    {
    title: "Grilled Skirt Steak with Herb Salsa Verde ",
    calories: 416,
    protein: 25,
    fat: 33,
    sodium: 86,
    image: "https://static01.nyt.com/images/2021/03/30/multimedia/clark-skirt-steak/clark-skirt-steak-mobileMasterAt3x-v2.jpg"
    },
    {
    title: "Pea Shoot and Spinach Salad with Bacon and Shiitakes ",
    calories: 385,
    protein: 15,
    fat: 24,
    sodium: 731,
    image: "https://i.pinimg.com/originals/0e/91/66/0e9166be9fea82150c6624121a6838c5.jpg"
    },
    {
    title: "Swordfish Stemperata ",
    calories: 545,
    protein: 41,
    fat: 33,
    sodium: 988,
    image: "https://fthmb.tqn.com/3fUCPUtDy3g-1YPQYHnK2ZWpipM=/2076x1446/filters:fill(auto,1)/swordfish-jeff-rotman-getty-56a5f8eb5f9b58b7d0df532f.jpg"
    },
    {
    title: "Beef Fajitas ",
    calories: 743,
    protein: 43,
    fat: 39,
    sodium: 844,
    image: "https://recipetineats.com/wp-content/uploads/2016/03/Beef-Fajitas_1-680x1018.jpg"
    },
    {
    title: "Bacon and Cabbage Soup ",
    calories: 537,
    protein: 19,
    fat: 28,
    sodium: 1713,
    image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https:%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8035310.jpg"
    },
    {
    title: "Ravioli Salad with Vegetables and Ham ",
    calories: 351,
    protein: 17,
    fat: 23,
    sodium: 1086,
    image: "https://veganheaven.org/wp-content/uploads/2020/06/Ravioli-Salad-9.jpg"
    },
    {
    title: "Weeknight Mapo Tofu With Ground Pork ",
    calories: 344,
    protein: 22,
    fat: 25,
    sodium: 116,
    image: "https://i.pinimg.com/originals/1b/6b/91/1b6b917161c6d15975238e6908fc171f.png"
    },
    {
    title: "Spaghetti with Parsley Pesto ",
    calories: 642,
    protein: 17,
    fat: 37,
    sodium: 221,
    image: "http://2.bp.blogspot.com/-uHHbdJNWe8c/UatGBxfiGfI/AAAAAAAAI0U/qAXGHQZxnI4/s1600/parsley+spaghetti.jpg"
    },
    {
    title: "Crispy Noodle Cake with Shrimp and Snow Peas ",
    calories: 554,
    protein: 21,
    fat: 27,
    sodium: 940,
    image: "https://live.staticflickr.com/3769/9457798047_81efdc336e_b.jpg"
    },
    {
    title: "Chicken Paprikas ",
    calories: 463,
    protein: 59,
    fat: 20,
    sodium: 170,
    image: "https://www.thecompletesavorist.com/wp-content/uploads/2015/06/cp-wide.jpg"
    },
    {
    title: "Beef Carbonnade ",
    calories: 436,
    protein: 52,
    fat: 19,
    sodium: 845,
    image: "https://lh5.googleusercontent.com/-Iv5HcyzEx4o/TWwqneLr2dI/AAAAAAAACT8/ikvL4wnJLa4/s1600/Beef-Carbonnade-1.JPG"
    },
    {
    title: "Grilled Flank Steak with Rosemary and Garlic ",
    calories: 408,
    protein: 36,
    fat: 28,
    sodium: 93,
    image: "https://res.cloudinary.com/hksqkdlah/image/upload/ar_1:1,c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_344/21073_sfs-grilled-marinated-flank-steak-06"
    },
    {
    title: "Four-Cheese Baked Bow Ties ",
    calories: 662,
    protein: 30,
    fat: 29,
    sodium: 854,
    image: "https://www.thegraciouswife.com/wp-content/uploads/2017/01/Bacon-Cheddar-Bow-Ties-Recipe-5.jpg"
    },
    {
    title: "Veal with Prosciutto and Sage ",
    calories: 626,
    protein: 54,
    fat: 38,
    sodium: 1328,
    image: "https://www.thespruceeats.com/thmb/2f6EMqaPd1KoKu2-amGUOsgC1RI=/1432x2097/filters:fill(auto,1)/foodcollection-5722625f3df78c5640123208.jpg"
    },
    {
    title: "Sea Bass, Languedoc Style ",
    calories: 413,
    protein: 30,
    fat: 28,
    sodium: 57,
    image: "https://lh3.googleusercontent.com/_Qjej8ZTgSkXgc1-u_2mNqBKdpIi0-MtubHjYeh15kmj3oIJUxnb3DJzhA5uPkf8PBPl1ThJaC6QHKaowesgOQ=s1200-rj-v1-e365"
    },
    {
    title: "Veal Scallops with Lemon and Capers ",
    calories: 319,
    protein: 22,
    fat: 14,
    sodium: 1281,
    image: "https://www.thespruceeats.com/thmb/WZ4XDFxMW80t2f_dp9iQRp5njHM=/636x0/filters:no_upscale():max_bytes(150000):strip_icc()/veal-scallopini-with-lemon-2216650-diana-rattray-2021-40d9f80dd2c04e0ca679d4d948563cd4.jpg"
    },
    {
    title: "Potato-and-Cheese Pur�e ",
    calories: 472,
    protein: 21,
    fat: 30,
    sodium: 939,
    image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/11/04/KC2912_Creamy-Potato-Puree_s4x3.jpg.rend.hgtvcom.616.462.suffix/1636038824365.jpeg"
    },
    {
    title: "Vegetable and Bean Chili ",
    calories: 364,
    protein: 16,
    fat: 10,
    sodium: 2094,
    image: "https://cookieandkate.com/images/2015/11/best-vegetarian-chili-1-1.jpg"
    },
    {
    title: "Steamed Mussels with Curry and Lemongrass ",
    calories: 318,
    protein: 21,
    fat: 18,
    sodium: 502,
    image: "https://i.pinimg.com/originals/1c/46/d5/1c46d5a1684744f8ef9e410237624085.jpg"
    },
    {
    title: "Dilled Lobster, Avocado, and Potato Salad with Horseradish Dressing Lieber ",
    calories: 594,
    protein: 42,
    fat: 33,
    sodium: 1175,
    image: "https://i.pinimg.com/originals/29/83/df/2983df0f1e564569da24ec5c9a6f78ab.jpg"
    },
    {
    title: "Red Beans and Rice ",
    calories: 560,
    protein: 26,
    fat: 25,
    sodium: 1213,
    image: "https://deliciouslyplated.com/wp-content/uploads/2018/06/redbeansandrice3-1.jpg"
    },
    {
    title: "Mustard-Maple Ham Steaks with Cider-Madeira Sauce ",
    calories: 579,
    protein: 64,
    fat: 19,
    sodium: 6204,
    image: "https://i.pinimg.com/736x/47/4d/82/474d827c971124e16bfcd72e2a589522.jpg"
    },
    {
    title: "Steamed Red Snapper with Ginger, Chiles, and Sesame Oil ",
    calories: 371,
    protein: 47,
    fat: 18,
    sodium: 756,
    image: "http://www.lyndeymilan.com/wp-content/uploads/2020/09/Steamed-snapper-with-Ginger-Shallot-Soy.jpg"
    },
    {
    title: "Roasted Chicken Breast and Vegetables with Prunes ",
    calories: 361,
    protein: 22,
    fat: 15,
    sodium: 127,
    image: "https://boulderlocavore.com/wp-content/uploads/2020/08/ROASTED-CHICKEN-BREASTS-TITLE-1088x1632.jpg"
    },
    {
    title: "Potato and Parmesan Gratin ",
    calories: 380,
    protein: 15,
    fat: 17,
    sodium: 810,
    image: "https://minimalistbaker.com/wp-content/uploads/2012/11/Sweet-Potato-Parmesan-Gratin1.jpg"
    },
    {
    title: "Beef Bourguignon ",
    calories: 561,
    protein: 39,
    fat: 21,
    sodium: 467,
    image: "https://somuchfoodblog.com/wp-content/uploads/2022/11/beef-bourguinon7.jpg"
    },
    {
    title: "Poached Eggs with Tomato Cilantro Sauce ",
    calories: 394,
    protein: 17,
    fat: 27,
    sodium: 860,
    image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/4/2/3/LS-Library_Poached-Eggsin-Tomato-Sauce_s4x3.jpg.rend.hgtvcom.616.462.suffix/1522740167687.jpeg"
    },
    {
    title: "Greens and Grains Scramble ",
    calories: 335,
    protein: 15,
    fat: 24,
    sodium: 1068,
    image: "https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2014/1/7/0/CCDevour_Whole-Grain-Mornings-Greens-and-Grains-Scramble-recipe_s4x3.jpg.rend.hgtvcom.686.515.suffix/1389188623104.jpeg"
    },
    {
    title: "Wild Rice with Smoked Fish and Snap Peas ",
    calories: 506,
    protein: 30,
    fat: 20,
    sodium: 1501,
    image: "https://i.pinimg.com/736x/09/d1/27/09d1279d941c58b2288eb6c22fbfdd62.jpg"
    },
    {
    title: "Halibut with Capers, Olives, and Tomatoes ",
    calories: 366,
    protein: 38,
    fat: 18,
    sodium: 421,
    image: "https://assets.epicurious.com/photos/560df21bf3a00aeb2f1d5c5c/1:1/w_600,h_600/109378.jpg"
    },
    {
    title: "Tortillas in Black Bean Sauce ",
    calories: 651,
    protein: 23,
    fat: 39,
    sodium: 241,
    image: "https://www.vvsupremo.com/wp-content/uploads/2015/10/900X570_Enfrijoladas-Corn-Tortillas-In-Black-Bean-Sauce-900x570.jpg"
    },
    {
    title: "Glazed Ham ",
    calories: 757,
    protein: 91,
    fat: 14,
    sodium: 4508,
    image: "https://wonkywonderful.com/wp-content/uploads/2015/10/glazed-spiral-ham-3.jpg"
    },
    {
    title: "Catfish with Green Olives ",
    calories: 307,
    protein: 26,
    fat: 21,
    sodium: 635,
    image: "https://assets.epicurious.com/photos/560df923f9a84192308a8d9e/1:1/w_600%2Ch_600/108727.jpg"
    },
    {
    title: "Chicken Tortilla Soup ",
    calories: 429,
    protein: 33,
    fat: 18,
    sodium: 1107,
    image: "https://www.jessicagavin.com/wp-content/uploads/2018/08/chicken-tortilla-soup-4.jpg"
    },
    {
    title: "Sloppy Joes ",
    calories: 608,
    protein: 32,
    fat: 37,
    sodium: 793,
    image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Easy-Sloppy-Joes_exps26639_CFC2719783C04_03_3bC_RMS.jpg"
    },
    {
    title: "Grilled Lamb Skewers with Spiced Mint Marinade ",
    calories: 481,
    protein: 33,
    fat: 26,
    sodium: 184,
    image: "https://colavitarecipes.com/wp-content/uploads/2015/02/grilled-lamb-skewers-mint.jpg"
    },
    {
    title: "Spicy Sausage Linguine ",
    calories: 875,
    protein: 37,
    fat: 39,
    sodium: 974,
    image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Spicy-Sausage-Linguine_exps47091_SD1785600D26_RMS.jpg?fit=700%2C1024"
    },
    {
    title: "Sauteed Scallops with Vegetables ",
    calories: 405,
    protein: 25,
    fat: 28,
    sodium: 795,
    image: "https://i.pinimg.com/originals/93/b3/56/93b3567c18195e46253677c4481ea0c8.jpg"
    },
    {
    title: "Soft Fish Tacos ",
    calories: 583,
    protein: 51,
    fat: 19,
    sodium: 716,
    image: "https://www.tasteofhome.com/wp-content/uploads/2018/03/exps31529_LR153742B09_10_5b-1.jpg"
    },
    {
    title: "Maverick Grits ",
    calories: 492,
    protein: 26,
    fat: 27,
    sodium: 1650,
    image: "https://i0.wp.com/theweatheredgreytable.com/wp-content/uploads/2020/03/grits-and-polenta-grits-maverick-grits-1.jpg?fit=1200%2C900&amp;ssl=1"
    },
    {
    title: "Fresh Apricot Upside-Down Cake ",
    calories: 824,
    protein: 15,
    fat: 27,
    sodium: 370,
    image: "https://whereismyspoon.co/wp-content/uploads/2017/06/upside-down-apricot-cake-6.jpg"
    },
    {
    title: "Braised Spring Legumes ",
    calories: 315,
    protein: 19,
    fat: 8,
    sodium: 428,
    image: "https://i.pinimg.com/originals/75/19/e4/7519e427d5f8dec338b95ac591a0a6a3.jpg"
    },
    {
    title: "Pasta with Tomatoes, Artichokes, and Feta Cheese ",
    calories: 681,
    protein: 23,
    fat: 29,
    sodium: 637,
    image: "https://recipes.net/wp-content/uploads/portal_files/recipes_net_posts/2021-08/pasta-with-artichokes-tomatoes-and-feta-recipe.png"
    },
    {
    title: "Ribollita with Italian Sausage ",
    calories: 471,
    protein: 36,
    fat: 19,
    sodium: 1324,
    image: "https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/5654ab3c79a23c43138b4567.jpg"
    },
    {
    title: "Tuna Souvlaki Gyro with Beet Tahini and Parsley Salad ",
    calories: 316,
    protein: 37,
    fat: 9,
    sodium: 212,
    image: "https://i.pinimg.com/originals/90/f3/fe/90f3fe35403d6b2061463ae002bba809.jpg"
    },
    {
    title: "Honey-Roasted Ham or Turkey with Dried Cherry Relish ",
    calories: 582,
    protein: 45,
    fat: 28,
    sodium: 3026,
    image: "http://tartcherryrecipes.com/wp-content/uploads/2014/03/DriedCherryRelish.jpg"
    },
    {
    title: "Grilled Steaks with Blue Cheese and Chiles ",
    calories: 507,
    protein: 36,
    fat: 38,
    sodium: 176,
    image: "https://www.recipegirl.com/wp-content/uploads/2008/09/Grilled-Steaks-with-Blue-Cheese-and-Chiles-1.jpeg"
    },
    {
    title: "Red Snapper with Black Olives, Capers, and Tomatoes ",
    calories: 466,
    protein: 35,
    fat: 35,
    sodium: 1084,
    image: "https://ketocookingchristian.com/wp-content/uploads/2022/05/Red-Snapper-with-Lemon-Caper-Butter-Sauce1-scaled.jpeg"
    },
    {
    title: "Orange and Fennel Poached Sole ",
    calories: 472,
    protein: 76,
    fat: 9,
    sodium: 339,
    image: "nan"
    },
    {
    title: "Shellfish Stew Proven�ale ",
    calories: 691,
    protein: 97,
    fat: 19,
    sodium: 2699,
    image: "https://blog.williams-sonoma.com/wp-content/uploads/2014/05/Healthy_ItalianFishStew_0029.jpg"
    },
    {
    title: "Mahimahi with Macadamia Nut Crust ",
    calories: 495,
    protein: 29,
    fat: 37,
    sodium: 290,
    image: "https://1.bp.blogspot.com/-WQCsm8MwF_Y/VI7M6eczr4I/AAAAAAAAAIA/Ia7PZWrkChs/w1200-h630-p-k-no-nu/Macadamia-Nut-Crusted-Mahimahi-Recipe.jpg"
    },
    {
    title: "New England Clam Chowder ",
    calories: 753,
    protein: 74,
    fat: 28,
    sodium: 2941,
    image: "https://coleycooks.com/wp-content/uploads/2017/10/New-England-Clam-Chowder-7.jpg"
    },
    {
    title: "Creamy Shellfish and Root Vegetable Stew ",
    calories: 595,
    protein: 48,
    fat: 24,
    sodium: 2229,
    image: "https://www.asaucykitchen.com/wp-content/uploads/2020/12/Roasted-Root-Vegetable-Stew-4.jpg"
    },
    {
    title: "Grilled Salmon with Lime Butter Sauce ",
    calories: 456,
    protein: 35,
    fat: 34,
    sodium: 102,
    image: "http://natashaskitchen.com/wp-content/uploads/2017/06/Grilled-Salmon-with-Garlic-Lime-Butter-5.jpg"
    },
    {
    title: "Red, White, and Green Lasagne ",
    calories: 493,
    protein: 28,
    fat: 24,
    sodium: 547,
    image: "https://live.staticflickr.com/3295/3117529969_f8822b2115_b.jpg"
    },
    {
    title: "Chicken Sandwiches with Chive Butter ",
    calories: 586,
    protein: 31,
    fat: 37,
    sodium: 441,
    image: "https://bevcooks.com/wp-content/uploads/2021/07/FullSizeRender-38-scaled.jpg"
    },
    {
    title: "Ratatouille with Penne ",
    calories: 889,
    protein: 23,
    fat: 21,
    sodium: 45,
    image: "https://static.wixstatic.com/media/54b7eb_10dcd8141038431f84978c38ecedecb4~mv2_d_3021_3957_s_4_2.jpg/v1/fit/w_1000,h_1000,al_c,q_80/file.png"
    },
    {
    title: "Hummus and Vegetable Lahvash Sandwiches ",
    calories: 781,
    protein: 30,
    fat: 31,
    sodium: 1334,
    image: "https://www.lastingredient.com/wp-content/uploads/2016/08/spicy-grilled-veggie-hummus-sandwiches3.jpg"
    },
    {
    title: "Corned Beef Hash ",
    calories: 509,
    protein: 25,
    fat: 30,
    sodium: 1118,
    image: "http://www.simplyscratch.com/wp-content/uploads/2018/03/Corned-Beef-Hash-l-SimplyScratch.com_-1200x1798.jpg"
    },
    {
    title: "Calf's Liver with Apples and Onions ",
    calories: 490,
    protein: 41,
    fat: 25,
    sodium: 278,
    image: "https://www.kalofagas.ca/wp-content/uploads/2020/11/20201125_133829-01.jpeg"
    },
    {
    title: "Mussels with Cream, Fennel, and White Wine ",
    calories: 346,
    protein: 28,
    fat: 16,
    sodium: 666,
    image: "http://www.thecurvycarrot.com/wp-content/uploads/2011/03/IMG_6398.jpg"
    },
    {
    title: "Sausage Stuffing ",
    calories: 634,
    protein: 21,
    fat: 24,
    sodium: 1158,
    image: "http://isernio.com/wp-content/uploads/2015/02/Stuffing.jpg"
    },
    {
    title: "Moroccan Braised Beef ",
    calories: 619,
    protein: 40,
    fat: 34,
    sodium: 318,
    image: "https://www.tasteofhome.com/wp-content/uploads/2017/10/Moroccan-Braised-Beef_exps24149_SD2856494B12_11_4bC_RMS.jpg"
    },
    {
    title: "Chicken Breasts Stuffed with Zucchini, Roasted Red Pepper, and Goat Cheese ",
    calories: 342,
    protein: 23,
    fat: 25,
    sodium: 209,
    image: "https://www.theanthonykitchen.com/wp-content/uploads/2019/12/Stuffed-Chicken-Breast-13-680x1020.jpg"
    },
    {
    title: "Mesclun and Cherry Salad with Warm Goat Cheese ",
    calories: 305,
    protein: 15,
    fat: 24,
    sodium: 265,
    image: "https://sutterbuttesoliveoil.com/wp-content/uploads/2018/08/Mesclun-Salad-Cherry-Vin-4.jpg"
    },
    {
    title: "Broccolini-Cheddar Melts ",
    calories: 452,
    protein: 17,
    fat: 37,
    sodium: 612,
    image: "http://www.smells-like-home.com/wp-content/uploads/2017/06/Quick-and-Easy-Broccoli-Melts-large-5-1200x1553.jpg"
    },
    {
    title: "Curried Potato and Spinach Soup with Onion Salsa and Minted Yogurt ",
    calories: 408,
    protein: 19,
    fat: 24,
    sodium: 114,
    image: "https://i.pinimg.com/originals/3e/48/c0/3e48c036b6f12e3f3c95d363cca1524f.jpg"
    },
    {
    title: "Coriander Pork Tenderloin with Carrot-Ginger Sauce ",
    calories: 996,
    protein: 143,
    fat: 40,
    sodium: 416,
    image: "https://primalwellness.coach/wp-content/uploads/2022/04/Citrus-and-Coriander-Pork-Tenderloin-with-Fennel-Puree-4.jpg"
    },
    {
    title: "Chestnut and Sausage Stuffing ",
    calories: 712,
    protein: 27,
    fat: 36,
    sodium: 1272,
    image: "http://www.norbertskitchen.com/wp-content/uploads/2015/07/DSC4087.jpg"
    },
    {
    title: "Beefsteak Tomato, Butterhead Lettuce, and Bacon with Blue Cheese Dressing ",
    calories: 381,
    protein: 15,
    fat: 33,
    sodium: 699,
    image: "https://assets.epicurious.com/photos/5609a60ee0acd286555db99c/16:9/w_1280,c_limit/354962_hires.jpg?mbid=social_retweet"
    },
    {
    title: "Portuguese Fisherman's Stew ",
    calories: 519,
    protein: 53,
    fat: 26,
    sodium: 1174,
    image: "https://simplynaturalgourmet.com/wp-content/uploads/2014/04/Portuguese-Fishermans-Stew.jpg"
    },
    {
    title: "Black Cod Fillets Poached in Five-Spice Broth with Baby Bok Choy and Udon ",
    calories: 522,
    protein: 44,
    fat: 16,
    sodium: 1867,
    image: "https://assets.epicurious.com/photos/54afdb552edcf2b411439e9b/1:1/w_2560%2Cc_limit/51171420_black-cod_1x1.jpg"
    },
    {
    title: "Tortellini in Parmesan Broth ",
    calories: 416,
    protein: 29,
    fat: 20,
    sodium: 1213,
    image: "https://www.triedandtruerecipe.com/wp-content/uploads/2022/11/Tortellini-in-Mushroom-Parmesan-Broth_Hero.jpg"
    },
    {
    title: "Orange and Ginger Chicken ",
    calories: 323,
    protein: 20,
    fat: 18,
    sodium: 62,
    image: "nan"
    },
    {
    title: "Cod with Mushroom-Herb Crust and Tomato Compote ",
    calories: 862,
    protein: 50,
    fat: 35,
    sodium: 1937,
    image: "http://www.littlebroken.com/wp-content/uploads/2016/08/Cod-with-Tomato-and-Herb-Butter-14.jpg"
    },
    {
    title: "Pasta with Shrimp, Tomatoes and Garlic ",
    calories: 500,
    protein: 15,
    fat: 12,
    sodium: 60,
    image: "https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vd2hhdHNpbnRoZXBhbi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDEvU2hyaW1wLVBhc3RhLmpwZyIsImV4cGlyZXNfYXQiOjE2MjU3OTIxODl9.hvsBYwKB8Fctkf93bnOP0-F2Nc74dAjVdIfOwsMUxok/img.jpg?width=2000&amp;height=2000"
    },
    {
    title: "Moules au Beurre D'escargots ",
    calories: 559,
    protein: 42,
    fat: 32,
    sodium: 1563,
    image: "https://i.pinimg.com/originals/66/18/bc/6618bcf170bacdfc6e8b9d603e22c03d.jpg"
    },
    {
    title: "Braised Shrimp and Creamy Endive ",
    calories: 303,
    protein: 22,
    fat: 19,
    sodium: 1686,
    image: "https://usa.lkk.com/-/media/recipe-braised-shrimp.jpg?h=465&amp;la=en&amp;w=600&amp;hash=E7884BA2AF10DF2959B371F4FFC8CF5DCCF8D29C"
    },
    {
    title: "Fennel, Prosciutto and Pine Nut Stuffing ",
    calories: 489,
    protein: 23,
    fat: 27,
    sodium: 1274,
    image: "https://res.cloudinary.com/anova-applied-electronics/image/upload/v1667845356/mobileProduction/yjaqc4bqykmlfgjhh22x.jpg"
    },
    {
    title: "Sea Bass with Watercress Sauce ",
    calories: 465,
    protein: 45,
    fat: 27,
    sodium: 203,
    image: "https://jonoandjules.files.wordpress.com/2020/12/seared-sea-bass-with-lemon-tomato-sauce.jpeg?w=1024"
    },
    {
    title: "Veal Chops with Saffron Orzo and Tomato Sauce ",
    calories: 789,
    protein: 50,
    fat: 37,
    sodium: 699,
    image: "https://cookinginplaingreek.com/wp-content/uploads/2012/12/Veal-with-Tomato-Sauce-and-Orzo-DSC04558.jpg"
    },
    {
    title: "Veal Cacciatore ",
    calories: 630,
    protein: 75,
    fat: 32,
    sodium: 518,
    image: "https://3.bp.blogspot.com/_Z_sYKeIQDV0/S_gH_frrN_I/AAAAAAAACn8/oIi27DcTuNU/s1600/IMG_2259.JPG"
    },
    {
    title: "Halibut with Vegetables and Parsley ",
    calories: 424,
    protein: 42,
    fat: 16,
    sodium: 785,
    image: "https://theflexiblechef.com/wp-content/uploads/2015/06/grilled-halibut-turnips-green-pesto-1024x488.jpg"
    },
    {
    title: "Seared Tuna with Oriental Citrus Sauce ",
    calories: 345,
    protein: 46,
    fat: 10,
    sodium: 2061,
    image: "http://www.lifetasteslikefood.com/wp-content/uploads/2011/07/seared-tuna-side3.jpg"
    },
    {
    title: "Asian-Style Shrimp and Pineapple Fried Rice ",
    calories: 431,
    protein: 16,
    fat: 6,
    sodium: 658,
    image: "https://easyweeknightrecipes.com/wp-content/uploads/2021/05/pineapple-shrimp-fried-rice-4-768x1152.jpg"
    },
    {
    title: "Chicken-Cranberry Hash ",
    calories: 581,
    protein: 32,
    fat: 26,
    sodium: 118,
    image: "https://www.happyfoodstube.com/wp-content/uploads/2019/11/homemade-cranberry-walnut-chicken-salad.jpg"
    },
    {
    title: "Grilled Pork Chops with Tomato Peach Relish ",
    calories: 552,
    protein: 55,
    fat: 27,
    sodium: 203,
    image: "https://i.pinimg.com/originals/c5/04/2d/c5042da4070d7b746fd0441ae5ad0b39.jpg"
    },
    {
    title: "Olive Oil Fried Eggs with Mozzarella and Harissa ",
    calories: 520,
    protein: 20,
    fat: 39,
    sodium: 694,
    image: "https://assets.marthastewart.com/styles/wmax-750/d32/olive-oil-fried-eggs-6277-mn-044/olive-oil-fried-eggs-6277-mn-044_horiz.jpg?itok=AKX8AztZ"
    },
    {
    title: "Shrimp, Avocado, and Noodle Salad ",
    calories: 668,
    protein: 29,
    fat: 31,
    sodium: 1102,
    image: "http://www.foodiecrush.com/wp-content/uploads/2017/07/Citrus-Shrimp-Avocado-Salad-foodiecrush.com-001.jpg"
    },
    {
    title: "Bean Burrito Casserole ",
    calories: 656,
    protein: 27,
    fat: 24,
    sodium: 1102,
    image: "https://www.honeyandbirch.com/wp-content/uploads/2017/03/bean-burrito-casserole-7.jpg"
    },
    {
    title: "Chicken Crepes with Asparagus and Mushrooms ",
    calories: 427,
    protein: 20,
    fat: 29,
    sodium: 315,
    image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Chicken-and-Asparagus-Crepes_exps125631_HC2379809B04_03_1bC_RMS-3.jpg?fit=700%2C1024"
    },
    {
    title: "Chick-Pea, Roasted Pepper and Caper Salad ",
    calories: 415,
    protein: 16,
    fat: 16,
    sodium: 621,
    image: "https://thishealthytable.com/wp-content/uploads/2020/07/Roasted-Chickpea-Salad-1-of-6.jpg"
    },
    {
    title: "Spicy Catfish with Bell Peppers and Onions ",
    calories: 421,
    protein: 28,
    fat: 28,
    sodium: 173,
    image: "http://images.heb.com/is/image/HEBGrocery/recipe-hm-large/spicy-catfish-with-bell-peppers-and-onion-recipe.jpg"
    },
    {
    title: "Ham-and-Egg Pizza Squares ",
    calories: 619,
    protein: 31,
    fat: 36,
    sodium: 1191,
    image: "https://www.gusto.at/_storage/asset/7681074/storage/womanat:slideshow-large/file/153009178/2000-04-048.jpg"
    },
    {
    title: "Mussels, Clams and Shrimp with Saffron Risotto and Green Olive Relish ",
    calories: 408,
    protein: 26,
    fat: 10,
    sodium: 906,
    image: "https://i.pinimg.com/736x/2c/be/4a/2cbe4a413913229d8b13135f2b5a2871--weekly-menu-mediterranean-recipes.jpg"
    },
    {
    title: "Beef and Broccoli Stir-Fry ",
    calories: 460,
    protein: 31,
    fat: 26,
    sodium: 1411,
    image: "https://www.jocooks.com/wp-content/uploads/2019/04/beef-and-broccoli-1-11.jpg"
    },
    {
    title: "Chili-Roasted Game Hens with Jalape�o-Orange Sauce ",
    calories: 461,
    protein: 30,
    fat: 24,
    sodium: 357,
    image: "https://foodfolksandfun.net/wp-content/uploads/2015/09/Grilled-Cornish-Game-Hens-with-Asian-BBQ-Sauce-Recipe.jpg"
    },
    {
    title: "Peanut-Crusted Trout with Pineapple Cilantro Relish ",
    calories: 412,
    protein: 30,
    fat: 25,
    sodium: 1037,
    image: "http://cdn.shopify.com/s/files/1/0250/8353/files/Kale_and_Pineapple_relish_with_trout_large.jpg?164579"
    },
    {
    title: "Pistachio-Crusted Halibut with Spicy Yogurt ",
    calories: 443,
    protein: 39,
    fat: 24,
    sodium: 898,
    image: "https://secureservercdn.net/192.169.222.215/387.d8d.myftpupload.com/wp-content/uploads/2016/03/Pistachio-Crusted-Halibut-with-Spicy-Yogurt-Sauce.jpg"
    },
    {
    title: "Horseradish-Crusted Salmon with Beet Sauce ",
    calories: 540,
    protein: 44,
    fat: 35,
    sodium: 365,
    image: "https://img.apmcdn.org/eed015421137c208ef1649f0ad9d7dd92cc83796/uncropped/5e38c7-splendid-table-new-german-cooking-grilled-salmon-with-beet-sauce.jpg"
    },
    {
    title: "Veal Shoulder with Porcini Mushrooms, Garlic and Rosemary ",
    calories: 610,
    protein: 70,
    fat: 31,
    sodium: 764,
    image: "https://i.pinimg.com/originals/6f/5b/a5/6f5ba576cf531075b18fe20da02b4233.jpg"
    },
    {
    title: "Mediterranean Rice-Stuffed Escarole ",
    calories: 614,
    protein: 19,
    fat: 38,
    sodium: 565,
    image: "http://static1.squarespace.com/static/541b1515e4b0a990b33a796e/5f91d9339d0f796956dd8fe6/600b7d916192842f9f83d178/1636506276813/alison-roman-cooking-chicken-and-escarole-salad-anchovy-croutons.jpg?format=1500w"
    },
    {
    title: "Garbanzo Bean Salad with Tomatoes and Chipotle Chilies ",
    calories: 495,
    protein: 18,
    fat: 24,
    sodium: 583,
    image: "https://i.pinimg.com/originals/a9/c8/c7/a9c8c7a0f5cee77b24bc018231337e43.png"
    },
    {
    title: "Meatloaf ",
    calories: 520,
    protein: 39,
    fat: 28,
    sodium: 469,
    image: "https://embed.widencdn.net/img/beef/eomdci19bw/exact/meatloaf.jpg?u=7fueml"
    },
    {
    title: "Roast New York Strip Loin with Garlic-Herb Crust ",
    calories: 504,
    protein: 40,
    fat: 37,
    sodium: 1041,
    image: "https://lh3.googleusercontent.com/YnoQaUiKVBdrERnJ4aF7HmlVH0-MH8tUJI6jX4yfYDSpHXBoJwENBhq6lTRFcg6msEvA-_n1ydhfDhE35sivfpbKDIjrCNzwVjQ6=w1200-l75"
    },
    {
    title: "Honey and Soy Glazed Salmon ",
    calories: 473,
    protein: 36,
    fat: 28,
    sodium: 1036,
    image: "https://www.foxyfolksy.com/wp-content/uploads/2019/04/honey-soy-glazed-salmon-recipe.jpg"
    },
    {
    title: "Mustard-Tarragon Chicken Saut� ",
    calories: 399,
    protein: 54,
    fat: 15,
    sodium: 198,
    image: "https://i.pinimg.com/originals/92/b7/0a/92b70a2bf95c124489bd0bad74a3006e.jpg"
    },
    {
    title: "Sea Bass with Moroccan Salsa ",
    calories: 322,
    protein: 33,
    fat: 16,
    sodium: 195,
    image: "https://www.moroccoworldnews.com/wp-content/uploads/2020/05/Cooking-Moroccan-roasted-sea-bass-with-peppers-1024x1024.jpg"
    },
    {
    title: "Grilled Pork Chops with Chunky Andouille Barbecue Sauce ",
    calories: 499,
    protein: 47,
    fat: 28,
    sodium: 829,
    image: "https://beautifuleatsandthings.com/wp-content/uploads/2020/08/BBQ-Pork-Chops-5-857x1024.jpg"
    },
    {
    title: "Southwestern Onion Rings ",
    calories: 720,
    protein: 23,
    fat: 17,
    sodium: 2428,
    image: "https://img-global.cpcdn.com/001_steps/bece651fed9413ee/480x360cq70/photo.jpg"
    },
    {
    title: "Asian-Style Flank Steak ",
    calories: 358,
    protein: 41,
    fat: 19,
    sodium: 1344,
    image: "https://i1.wp.com/www.thegarlicdiaries.com/wp-content/uploads/2016/08/IMG_2669.jpg"
    },
    {
    title: "Salmon Fillets in Dill-Peperoncini Cream Sauce ",
    calories: 478,
    protein: 37,
    fat: 33,
    sodium: 174,
    image: "https://cafedelites.com/wp-content/uploads/2019/12/Baked-Salmon-Lemon-Butter-Cream-Sauce-IMAGE-39-1024x1536.jpg"
    },
    {
    title: "Trout with Tarragon Butter ",
    calories: 557,
    protein: 49,
    fat: 39,
    sodium: 127,
    image: "http://wildgreensandsardines.com/wp-content/uploads/2013/04/DSC_3775-1.jpg"
    },
    {
    title: "Chicken and Cashew Stir-Fry ",
    calories: 477,
    protein: 24,
    fat: 37,
    sodium: 825,
    image: "https://therecipecritic.com/wp-content/uploads/2018/07/cashew_chicken_stir_fry4-1-of-1.jpg"
    },
    {
    title: "Grilled Burgers with Roquefort Mayonnaise and Barbecued Red Onions ",
    calories: 530,
    protein: 30,
    fat: 35,
    sodium: 628,
    image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps28800_UG143377D12_18_1b_RMS-8.jpg"
    },
    {
    title: "Warm Goat Cheese Salad with Grilled Olive Bread ",
    calories: 372,
    protein: 16,
    fat: 27,
    sodium: 596,
    image: "http://assets.epicurious.com/photos/560ea0eaf3a00aeb2f1d6ac3/1:1/w_600%2Ch_600/106622.jpg"
    },
    {
    title: "Prosciutto-Stuffed Pork Tenderloin with Mushroom Sauce ",
    calories: 311,
    protein: 36,
    fat: 11,
    sodium: 641,
    image: "https://chezus.com/wp-content/uploads/2018/01/pork_tenderloin_mushroom_sauce-3-of-3-768x1152.jpg"
    },
    {
    title: "Sausage, Chestnut and Fig Stuffing ",
    calories: 628,
    protein: 19,
    fat: 18,
    sodium: 1032,
    image: "https://i2.wp.com/thesuburbansoapbox.com/wp-content/uploads/2015/12/Sausage-and-Chestnut-Stuffing-5-640x960.jpg"
    },
    {
    title: "Quince Stew (Chorosht'e Be) ",
    calories: 330,
    protein: 27,
    fat: 12,
    sodium: 848,
    image: "https://assets.epicurious.com/photos/5604011508929a1609a1e642/1:1/w_2560%2Cc_limit/51109810_hires.jpg"
    },
    {
    title: "Chilled Corn Soup with Lobster Salad ",
    calories: 334,
    protein: 28,
    fat: 11,
    sodium: 632,
    image: "https://thefoodieeats.com/wp-content/uploads/2017/06/chilled-corn-soup-002.jpg"
    },
    {
    title: "Grilled Halibut with Lima Bean and Roasted Tomato Sauce ",
    calories: 397,
    protein: 43,
    fat: 8,
    sodium: 523,
    image: "https://i.pinimg.com/originals/4b/aa/d2/4baad2e3a328b717bee78994b40ff3dc.jpg"
    },
    {
    title: "Roast Chicken with Mushroom Stuffing and Sauce ",
    calories: 1100,
    protein: 159,
    fat: 32,
    sodium: 1292,
    image: "https://img.jamieoliver.com/jamieoliver/recipe-database/46238653.jpg?tr=w-800,h-1066"
    },
    {
    title: "Spiced Pork Tenderloin ",
    calories: 434,
    protein: 37,
    fat: 22,
    sodium: 1070,
    image: "http://dallasduobakes.com/wp-content/uploads/2013/07/IMG_1481.jpg"
    },
    {
    title: "Broiled Bluefish Fillets with Fennel Mayonnaise ",
    calories: 389,
    protein: 46,
    fat: 21,
    sodium: 803,
    image: "https://mvmagazine.com/sites/mvmagazine/files/article-assets/listing-photos/cwcajunbluefish.jpg"
    },
    {
    title: "Port-Glazed Chicken Livers and Onions ",
    calories: 511,
    protein: 32,
    fat: 31,
    sodium: 133,
    image: "https://img-global.cpcdn.com/recipes/4090124229a5fecc/680x482cq70/chicken-livers-and-onions-recipe-main-photo.jpg"
    },
    {
    title: "Four-Cheese Ravioli with Mushrooms ",
    calories: 617,
    protein: 21,
    fat: 28,
    sodium: 826,
    image: "https://cookingwithchefbryan.com/wp-content/uploads/2020/07/Homemade-Ravioli-with-Mushrooms-and-Salami.jpg"
    },
    {
    title: "Italian Sausage and Bell Pepper Paella ",
    calories: 618,
    protein: 34,
    fat: 18,
    sodium: 1114,
    image: "https://karylskulinarykrusade.com/wp-content/uploads/2018/04/Italian-Sausage-Bell-Pepper-Pasta-Pinterest-5.jpg"
    },
    {
    title: "Tequila-Lime Mahimahi Tacos ",
    calories: 407,
    protein: 29,
    fat: 14,
    sodium: 892,
    image: "https://i0.wp.com/www.thebalancedberry.com/wp-content/uploads/2015/04/Mahi-Mahi-Tacos.jpg?resize=600%2C900"
    },
    {
    title: "Steamed Lobster with Lemon-Herb Butter ",
    calories: 753,
    protein: 103,
    fat: 35,
    sodium: 2643,
    image: "https://www.thespruceeats.com/thmb/3C_YnXCs8TTjrhUz8dq1AkY25dI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/steamed-lobster-5097205-hero-06ab15ae53234b0ea162b60d54e57856.jpg"
    },
    {
    title: "Pork Tenderloin with Sauteed Onion and Fennel and Fennel Cream ",
    calories: 448,
    protein: 40,
    fat: 22,
    sodium: 155,
    image: "https://i.pinimg.com/originals/46/40/34/46403445bb0fb09e998081840a864f8d.jpg"
    },
    {
    title: "Poached Eggs with Roasted Asparagus, Prosciutto, and Chive Oil ",
    calories: 387,
    protein: 17,
    fat: 33,
    sodium: 492,
    image: "https://i.pinimg.com/originals/dd/9d/4e/dd9d4e3596ea5008ac57bf65dd2e998e.jpg"
    },
    {
    title: "Shrimp Gazpacho with Basil Croutons ",
    calories: 338,
    protein: 17,
    fat: 13,
    sodium: 631,
    image: "http://images.media-allrecipes.com/userphotos/960x960/6128435.jpg"
    },
    {
    title: "Dried Cod Fish Pie ",
    calories: 832,
    protein: 64,
    fat: 23,
    sodium: 6041,
    image: "http://assets.epicurious.com/photos/54b017686429c4a41c091e1e/master/pass/51163830_cod-pie_1x1.jpg"
    },
    {
    title: "Turkey, Mushroom, and Barley Risotto ",
    calories: 457,
    protein: 31,
    fat: 11,
    sodium: 207,
    image: "https://static01.nyt.com/images/2014/11/07/dining/barley-risotto/barley-risotto-superJumbo.jpg"
    },
    {
    title: "Curried Pea Soup ",
    calories: 384,
    protein: 20,
    fat: 16,
    sodium: 314,
    image: "https://minimalistbaker.com/wp-content/uploads/2020/01/CREAMY-Curried-Chickpea-Soup-1-pot-BIG-flavor-tons-of-plant-based-protein-and-fiber-recipe-minimalistbaker-soup-plantbased-glutenfree-24.jpg"
    },
    {
    title: "Chicory Salad with Bacon, Crispy Potatoes, and Fried Egg ",
    calories: 564,
    protein: 18,
    fat: 40,
    sodium: 497,
    image: "https://assets.epicurious.com/photos/561026def9a84192308aa4f5/1:1/w_600%2Ch_600/104541.jpg"
    },
    {
    title: "Falafel-Spiced Tomatoes and Chickpeas on Flatbread ",
    calories: 700,
    protein: 20,
    fat: 31,
    sodium: 1840,
    image: "https://cdn.shopify.com/s/files/1/0432/4245/5198/files/rcp_tomatoes-chickpeas-flatbread_1024x1024.jpg?v=1696820240"
    },
    {
    title: "Perciatelli with Meatballs and Tomato-Porcini Sauce ",
    calories: 960,
    protein: 50,
    fat: 36,
    sodium: 1556,
    image: "https://media.blueapron.com/recipes/290/c_main_dish_images/20140808-2022-192-9772/PerciatelliQuinoaMeatballsBlueApron_splash_feature.jpg"
    },
    {
    title: "Pork Chops with Wild Mushrooms and Caramelized Onions ",
    calories: 460,
    protein: 19,
    fat: 31,
    sodium: 113,
    image: "https://juliasalbum.com/wp-content/uploads/2021/10/mushroom-pork-chops-1.jpg"
    },
    {
    title: "Chicken with White Wine and Garlic ",
    calories: 452,
    protein: 37,
    fat: 29,
    sodium: 1276,
    image: "http://www.eazypeazymealz.com/wp-content/uploads/2016/09/Garlic-Lemon-Chicken-White-Wine-PIN.jpg"
    },
    {
    title: "Springtime Pasta Primavera ",
    calories: 587,
    protein: 20,
    fat: 24,
    sodium: 813,
    image: "https://frugalfabulousfinds.com/wp-content/uploads/2016/04/Springtime-Pasta-Primavera.jpg"
    },
    {
    title: "Grilled Garlic Lime Pork Tenderloin ",
    calories: 568,
    protein: 49,
    fat: 33,
    sodium: 437,
    image: "http://d3cizcpymoenau.cloudfront.net/images/20575/SFS_grilled_pork_tenderloin-120.jpg"
    },
    {
    title: "Gravy ",
    calories: 303,
    protein: 27,
    fat: 18,
    sodium: 202,
    image: "https://freerecipenetwork.com/wp-content/uploads/2011/10/gravy.jpg"
    },
    {
    title: "Pumpkin Cannelloni with Clams and Sage Brown Butter ",
    calories: 608,
    protein: 41,
    fat: 29,
    sodium: 1772,
    image: "https://assets.epicurious.com/photos/560ea121f9a84192308a947f/1:1/w_2560%2Cc_limit/106999.jpg"
    },
    {
    title: "Sea Bass Amandine on Watercress ",
    calories: 462,
    protein: 28,
    fat: 30,
    sodium: 96,
    image: "https://images.squarespace-cdn.com/content/v1/5b3ca9e8710699a5690b4a7f/1642524954297-SHW4Z2PO67XFIRC31N6B/sea-bass-fattoush-watercress-salad-6756.jpg"
    },
    {
    title: "Spaghetti Squash with Sausage Filling ",
    calories: 584,
    protein: 27,
    fat: 36,
    sodium: 1525,
    image: "https://i.pinimg.com/originals/69/70/86/697086cf58bb9552199a5f368851f948.jpg"
    },
    {
    title: "Pinto Bean Enfrijoladas ",
    calories: 596,
    protein: 22,
    fat: 33,
    sodium: 889,
    image: "http://assets.epicurious.com/photos/58b488f0e789164f12814aa4/2:1/w_1260%2Ch_630/PINTO-BEAN-ENFRIJOLADAS--16022017.jpg"
    },
    {
    title: "Chili Lime Shrimp with Avocado and Coriander ",
    calories: 401,
    protein: 28,
    fat: 26,
    sodium: 2330,
    image: "https://www.hauteandhealthyliving.com/wp-content/uploads/2020/06/Chili-Lime-Shrimp-8-957x1536.jpg"
    },
    {
    title: "Fusilli with Ch�re, Tomatoes and Basil ",
    calories: 644,
    protein: 21,
    fat: 21,
    sodium: 138,
    image: "https://i1.wp.com/aperfectfeast.com/wp-content/uploads/2021/02/IMG-5540-scaled.jpg?resize=1536%2C2048&amp;ssl=1"
    },
    {
    title: "Cheddar, Turkey and Cranberry on Sourdough ",
    calories: 577,
    protein: 37,
    fat: 28,
    sodium: 817,
    image: "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_73,ar_16:9,w_1024/v1/img/recipes/34/08/56/5Xqkj9X5QnWvDUzLxzCD_Food-com-2017-10-310520.jpg"
    },
    {
    title: "Red Curry Shrimp ",
    calories: 316,
    protein: 25,
    fat: 22,
    sodium: 1214,
    image: "https://i.pinimg.com/originals/45/00/4e/45004edbbe602f1038628d8fe6634359.jpg"
    },
    {
    title: "Herbed Clam Hash ",
    calories: 469,
    protein: 32,
    fat: 19,
    sodium: 404,
    image: "http://impeckableeats.com/wp-content/uploads/2012/03/shells.jpg"
    },
    {
    title: "Spicy Lamb with Tomato and Cilantro ",
    calories: 400,
    protein: 21,
    fat: 31,
    sodium: 582,
    image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https:%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2019%2F08%2F27045238%2F3756487.jpg"
    },
    {
    title: "Toasted Barley Risotto with Spinach and Herb Pur�e ",
    calories: 450,
    protein: 18,
    fat: 24,
    sodium: 491,
    image: "https://assets.epicurious.com/photos/54ac989b19925f464b3ac9c8/1:1/w_2560%2Cc_limit/51231690_toasted-barley-risotto_1x1.jpg"
    },
    {
    title: "Potato and Parmesan Gratin ",
    calories: 452,
    protein: 24,
    fat: 23,
    sodium: 696,
    image: "https://minimalistbaker.com/wp-content/uploads/2012/11/Sweet-Potato-Parmesan-Gratin1.jpg"
    },
    {
    title: "Asian Steak and Noodle Salad ",
    calories: 597,
    protein: 41,
    fat: 19,
    sodium: 2805,
    image: "http://soufflebombay.com/wp-content/uploads/2017/05/Asian-Steak-and-Noodle-Salad.jpg"
    },
    {
    title: "Sesame-Crusted Salmon ",
    calories: 366,
    protein: 28,
    fat: 23,
    sodium: 319,
    image: "https://i.pinimg.com/originals/f4/38/20/f43820f4201cceab7b39789ca3f2f57f.jpg"
    },
    {
    title: "Whole-Wheat Spaghetti with Goat Cheese and Arugula ",
    calories: 495,
    protein: 24,
    fat: 24,
    sodium: 343,
    image: "https://www.sueatablelife.eu/m/canteen/1200x675/spaghetti-crema-cover.jpg"
    },
    {
    title: "Basil Flatbread with Roasted Tomatoes and Basil Oil ",
    calories: 575,
    protein: 15,
    fat: 10,
    sodium: 1175,
    image: "https://i.pinimg.com/originals/97/71/f4/9771f4e1e0696765eae3fdffa37e8de0.png"
    },
    {
    title: "Lemon Chicken and Roasted Pepper Sandwiches ",
    calories: 563,
    protein: 44,
    fat: 26,
    sodium: 440,
    image: "https://grandbaby-cakes.com/wp-content/uploads/2014/12/lemon-roasted-chicken-2.jpg"
    },
    {
    title: "Asian Pork and Mushroom Burger Wraps ",
    calories: 457,
    protein: 26,
    fat: 32,
    sodium: 1077,
    image: "https://bigoven-res.cloudinary.com/image/upload/t_recipe-1280/asian-pork-mushroom-and-noodle-922c0c.jpg"
    },
    {
    title: "Pasta e Fagioli con Salsicce (Pasta and Beans with Sausage) ",
    calories: 480,
    protein: 25,
    fat: 15,
    sodium: 1730,
    image: "nan"
    },
    {
    title: "Grilled Monster Pork Chops with Tomatillo and Green Apple Sauce ",
    calories: 660,
    protein: 64,
    fat: 36,
    sodium: 2572,
    image: "https://i.pinimg.com/736x/3a/04/4e/3a044e5d8d2d7d59f207a37d8a315bb3.jpg"
    },
    {
    title: "Thai Tofu with Zucchini, Red Bell Pepper, and Lime ",
    calories: 371,
    protein: 17,
    fat: 31,
    sodium: 367,
    image: "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_73,ar_16:9,w_1024/v1/img/recipes/18/23/20/picaeaTHY.jpg"
    },
    {
    title: "Sauteed Sea Scallops with Mustard Sauce ",
    calories: 362,
    protein: 22,
    fat: 23,
    sodium: 846,
    image: "https://canolaeatwell.com/wp-content/uploads/2018/03/sauteedscallopswithpeasinlemontaragonsauce.jpg"
    },
    {
    title: "Sausage and Cheese Manicotti ",
    calories: 815,
    protein: 43,
    fat: 33,
    sodium: 572,
    image: "https://4.bp.blogspot.com/-dsQg5Ap91wM/W_W0vrXosOI/AAAAAAAAJHY/NhqHG2758b8KrnaF1HwEZchnQA1F3jM9ACLcBGAs/s1600/fullsizeoutput_88e8.jpeg"
    },
    {
    title: "Green Gruel with Eyeballs ",
    calories: 383,
    protein: 22,
    fat: 25,
    sodium: 496,
    image: "https://assets.epicurious.com/photos/5609a633e0acd286555db9e4/master/pass/355730_hires.jpg"
    },
    {
    title: "Black Sea Bass with Sweet-and-Sour Orange Rhubarb Sauce ",
    calories: 632,
    protein: 88,
    fat: 18,
    sodium: 813,
    image: "https://mvmagazine.com/sites/mvmagazine/files/article-assets/listing-photos/smapblackbassgarlic1.jpg"
    },
    {
    title: "Duck Breasts with Orange, Honey and Tea Sauce ",
    calories: 421,
    protein: 44,
    fat: 18,
    sodium: 160,
    image: "https://cornvalefoods.co.uk/wp-content/uploads/2020/07/Duck-in-Orange-600x480.jpg"
    },
    {
    title: "Roasted Pork Chops with Serrano Ham Vinaigrette ",
    calories: 532,
    protein: 21,
    fat: 39,
    sodium: 641,
    image: "https://i.pinimg.com/originals/5a/0b/b3/5a0bb3f217c43b50be624b4c6571fa32.jpg"
    },
    {
    title: "Fried Eggs on Corn Tortillas with Two Salsas (Huevos Divorciados) ",
    calories: 389,
    protein: 15,
    fat: 31,
    sodium: 1315,
    image: "https://images.assetsdelivery.com/compings_v2/darezare/darezare1905/darezare190500001.jpg"
    },
    {
    title: "Fish-and-Chips ",
    calories: 620,
    protein: 34,
    fat: 10,
    sodium: 381,
    image: "https://fthmb.tqn.com/uALIO4N-VCYA5SXIguM_9sJfEnk=/3606x2352/filters:fill(auto,1)/IMG_5442-58b427d35f9b586046d8dfa1.JPG"
    },
    {
    title: "Lebanese Lentil-and-Rice Pilaf with Blackened Onions ",
    calories: 500,
    protein: 16,
    fat: 17,
    sodium: 835,
    image: "https://i1.wp.com/colorfulrecipes.com/wp-content/uploads/2017/08/lebanese-lentil-rice-pilaf-mdardara-with-cabbage-tomato-salad-5.jpg?resize=1200%2C1800"
    },
    {
    title: "Udon Noodles with Shrimp, Snow Peas, and Peanuts ",
    calories: 545,
    protein: 28,
    fat: 20,
    sodium: 1362,
    image: "https://assets.epicurious.com/photos/556cd2e75fa91f011a45a0ae/16:9/w_1280,c_limit/ep-05282015-pasta-udon-noodles-with-shrimp,-snow-peas-+-peanuts_6x4.jpg"
    },
    {
    title: "Fish in Foil with Sweet Onions, Tomatoes, and Mojo Verde ",
    calories: 729,
    protein: 97,
    fat: 22,
    sodium: 330,
    image: "https://cleanfoodcrush.com/wp-content/uploads/2020/08/SWEET-ONION-TOMATO-SALAD-CleanFoodCrush.jpg"
    },
    {
    title: "Grilled Corn, Zucchini, and Black Bean Quesadillas ",
    calories: 692,
    protein: 25,
    fat: 39,
    sodium: 1022,
    image: "https://assets.epicurious.com/photos/556c713450e46c5c01e9a619/1:1/w_2560%2Cc_limit/56389624_grilled-corn-zucchini-black-bean-quesadillas_6x4.jpg"
    },
    {
    title: "Risotto with Leeks, Shiitake Mushrooms, and Truffles ",
    calories: 613,
    protein: 16,
    fat: 32,
    sodium: 367,
    image: "https://i.pinimg.com/originals/75/c1/05/75c10536d75422a4fa4b80ea0d7ec198.jpg"
    },
    {
    title: "Sweet Cheese Pie ",
    calories: 529,
    protein: 16,
    fat: 28,
    sodium: 706,
    image: "http://blogs.kcrw.com/goodfood/wp-content/uploads/2013/08/sweet-cheese-pieshot_03.jpg"
    },
    {
    title: "Truffled Toast with Radicchio and Egg ",
    calories: 407,
    protein: 20,
    fat: 28,
    sodium: 818,
    image: "https://whatscookingamerica.net/wp-content/uploads/2015/03/TruffledEggToast21.jpg"
    },
    {
    title: "Jerusalem Artichoke Soup ",
    calories: 379,
    protein: 15,
    fat: 13,
    sodium: 358,
    image: "https://i2.wp.com/thehealthyhunterblog.com/wp-content/uploads/2016/07/VSCO-Cam-1-1-2.jpg"
    },
    {
    title: "Potato-Leek Soup with Cheese ",
    calories: 600,
    protein: 18,
    fat: 17,
    sodium: 236,
    image: "https://eatingeuropean.com/wp-content/uploads/2018/01/Chunky-Potato-Leek-Soup-1.jpg"
    },
    {
    title: "Turkey Patties with Tarragon-Mustard Gravy ",
    calories: 362,
    protein: 30,
    fat: 21,
    sodium: 381,
    image: "https://i.pinimg.com/originals/23/14/0c/23140cbbdc26c9a7878957d7b07034d3.jpg"
    },
    {
    title: "Pizza with Figs, Prosciutto, Gorgonzola, Balsamic, and Arugula ",
    calories: 713,
    protein: 41,
    fat: 32,
    sodium: 3010,
    image: "https://kitchenswagger.com/wp-content/uploads/2016/07/fig-and-proscutto-pizza-1.jpg"
    },
    {
    title: "Moroccan Fish Tagine with Peppers and Olives ",
    calories: 547,
    protein: 38,
    fat: 33,
    sodium: 884,
    image: "https://cook.me/wp-content/uploads/2020/02/Moroccan-Baked-Fish-Tagine-with-Potatoes-Carrots-Tomatoes-and-Peppers-Recipe-Baked-Fish-Tagine-Oven-Baked-Fish-with-Chermoula-18-683x1024.jpg"
    },
    {
    title: "Tuna and Olive Salad Sandwich ",
    calories: 550,
    protein: 33,
    fat: 27,
    sodium: 949,
    image: "https://i.pinimg.com/originals/b7/a4/91/b7a4915831f28ab983be3aecc3f036c2.jpg"
    },
    {
    title: "Pasta with Three Beans and Bacon ",
    calories: 408,
    protein: 21,
    fat: 17,
    sodium: 558,
    image: "https://www.clarasfamilycookbook.com/wp-content/uploads/2019/01/pasta-and-beans.jpg"
    },
    {
    title: "Stout and Cheddar Rarebit with Fried Eggs ",
    calories: 577,
    protein: 31,
    fat: 36,
    sodium: 739,
    image: "https://assets.epicurious.com/photos/56cf4709d322f7fb05b7d6ad/16:9/w_1280,c_limit/welsh-rarebit.jpg?mbid=social_retweet"
    },
    {
    title: "Teriyaki-Style Chicken ",
    calories: 457,
    protein: 49,
    fat: 21,
    sodium: 1243,
    image: "https://40aprons.com/wp-content/uploads/2019/11/whole30-teriyaki-chicken-pinterest-5.jpg"
    },
    {
    title: "Spiced Veal Roulades ",
    calories: 420,
    protein: 28,
    fat: 23,
    sodium: 1124,
    image: "https://assets.epicurious.com/photos/560d9992f9a84192308a1a34/1:1/w_600%2Ch_600/238251.jpg"
    },
    {
    title: "Grilled Quail Salad with Creamy Garlic Vinaigrette ",
    calories: 497,
    protein: 42,
    fat: 34,
    sodium: 138,
    image: "https://i.pinimg.com/originals/36/a1/6a/36a16a768612f08a0f9e562817c74051.jpg"
    },
    {
    title: "Shark Kebabs with Orange-Avocado Salsa ",
    calories: 416,
    protein: 38,
    fat: 25,
    sodium: 228,
    image: "https://i0.wp.com/www.lemonythyme.com/wp-content/uploads/2012/09/Shark-Kebobs-with-Avocado-Orange-Salsa.jpg"
    },
    {
    title: "Corsican Grilled Whole Fish with Breadcrumbs and Anchovies ",
    calories: 496,
    protein: 62,
    fat: 18,
    sodium: 368,
    image: "https://www.cookingmediterranean.com/wp-content/uploads/2024/01/corsican-grilled-lamb-chops-with-rosemary_001.png"
    },
    {
    title: "Sausage Cheese Grits ",
    calories: 481,
    protein: 23,
    fat: 31,
    sodium: 630,
    image: "http://4.bp.blogspot.com/-boMa9nRwPR4/UZy-bwp6bnI/AAAAAAAAFTk/L5Y0RgAjQyw/s1600/Sausage+%2526+Cheese+Grits+Breakfast+Casserole+1.jpg"
    },
    {
    title: "Fusilli with Lentils and Sausage ",
    calories: 563,
    protein: 26,
    fat: 21,
    sodium: 375,
    image: "https://delishar.com/wp-content/uploads/2016/06/One-Pot-Sausage-Fusilli.jpg"
    },
    {
    title: "Linguine with Spicy Leek and Tomato Sauce ",
    calories: 701,
    protein: 31,
    fat: 28,
    sodium: 703,
    image: "https://www.sharedbounty.com/wp-content/uploads/2019/06/linguine-with-spicy-leek-and-tomato-sauce.jpg"
    },
    {
    title: "Grilled Tofu and Sauteed Asian Greens ",
    calories: 447,
    protein: 37,
    fat: 29,
    sodium: 1481,
    image: "https://i.pinimg.com/originals/6c/0c/57/6c0c5732222d87655a8fcc14c9bc648b.jpg"
    },
    {
    title: "Veal Meat Loaf with Red Bell Pepper and Spinach ",
    calories: 444,
    protein: 28,
    fat: 22,
    sodium: 1026,
    image: "https://www.spendwithpennies.com/wp-content/uploads/2019/05/New-The-BEST-Meatloaf-7.jpg"
    },
    {
    title: "Orecchiette with Red-Wine Veal Sauce ",
    calories: 826,
    protein: 53,
    fat: 21,
    sodium: 344,
    image: "nan"
    },
    {
    title: "Lemongrass Pork with Vietnamese Table Salad ",
    calories: 747,
    protein: 49,
    fat: 26,
    sodium: 2708,
    image: "https://i0.wp.com/www.angsarap.net/wp-content/uploads/2022/02/Vietnamese-Style-Grilled-Lemongrass-Pork.jpg?w=1080&amp;ssl=1"
    },
    {
    title: "Greens and Bulgur Gratin ",
    calories: 406,
    protein: 18,
    fat: 20,
    sodium: 305,
    image: "https://calorganicfarms.com/wp-content/uploads/2021/01/EO4A5776-683x1024.jpg"
    },
    {
    title: "Chicken, Red Pepper, and Green Bean Stir-Fry ",
    calories: 435,
    protein: 28,
    fat: 31,
    sodium: 1397,
    image: "https://d2j6dbq0eux0bg.cloudfront.net/images/37090218/2203693808.jpg"
    },
    {
    title: "Beef Stew with Stout ",
    calories: 378,
    protein: 25,
    fat: 22,
    sodium: 410,
    image: "http://www.pbs.org/food/wp-content/blogs.dir/2/files/2015/03/beef-stout-stew-1.jpg"
    },
    {
    title: "Asparagus Risotto ",
    calories: 650,
    protein: 21,
    fat: 32,
    sodium: 390,
    image: "https://i2.wp.com/garlicmatters.com/wp-content/uploads/2016/03/ASPARAGUS-LEMON-RISOTTO-4.jpg"
    },
    {
    title: "Eggplant, Red Pepper, and Fontina Panini with Spinach Salad ",
    calories: 517,
    protein: 28,
    fat: 37,
    sodium: 915,
    image: "https://assets.epicurious.com/photos/5609a5de6a59cdb91b5ff5cc/16:9/w_1280,c_limit/354309_hires.jpg?mbid=social_retweet"
    },
    {
    title: "Bibimbap at Home ",
    calories: 1000,
    protein: 31,
    fat: 24,
    sodium: 700,
    image: "https://cdn.loveandlemons.com/wp-content/uploads/2020/03/bibimbap.jpg"
    },
    {
    title: "Thai-Spiced Pork Tenderloin with Orange Curry Sauce ",
    calories: 656,
    protein: 41,
    fat: 29,
    sodium: 1274,
    image: "https://friendseat.com/wp-content/uploads/2018/04/THAI-SPICED-PORK-TENDERLOIN-WITH-ORANGE-CURRY-SAUCE-RECIPE.jpg"
    },
    {
    title: "Baked Smoked Ham with Mango ",
    calories: 623,
    protein: 83,
    fat: 11,
    sodium: 4085,
    image: "https://foodandsun.com/wp-content/uploads/2020/12/Apricot-Glazed-Smoked-Baked-Ham.jpeg"
    },
    {
    title: "Scallop and Bacon Chowder ",
    calories: 518,
    protein: 20,
    fat: 37,
    sodium: 1140,
    image: "http://www.cookingmamas.com/wp-content/uploads/2013/03/Scallop-Bacon-Chowder-2.jpg"
    },
    {
    title: "Lobster Salad with Green Beans, Apple, and Avocado ",
    calories: 328,
    protein: 27,
    fat: 15,
    sodium: 4859,
    image: "https://assets.epicurious.com/photos/54b2f3bb3edeef84363b4ad1/16:9/w_1280,c_limit/364850_lobster-salad_1x1.jpg?mbid=social_retweet"
    },
    {
    title: "Perciatelli with Shrimp and Garlic Breadcrumbs ",
    calories: 752,
    protein: 33,
    fat: 34,
    sodium: 1657,
    image: "https://assets.epicurious.com/photos/560de5f47b55306961bfd928/16:9/w_1280,c_limit/233153.jpg"
    },
    {
    title: "Seafood Stew with Fennel and Thyme ",
    calories: 490,
    protein: 57,
    fat: 18,
    sodium: 1659,
    image: "https://i.pinimg.com/originals/33/a8/43/33a8433ae42499e757cb60b92a241882.jpg"
    },
    {
    title: "Steamed Clams With Chickpeas and Green Garlic ",
    calories: 824,
    protein: 78,
    fat: 31,
    sodium: 3030,
    image: "https://d2814mmsvlryp1.cloudfront.net/wp-content/uploads/2013/05/WGC-Steamed-Clams-V3-copy.jpg"
    },
    {
    title: "Fish Tacos ",
    calories: 563,
    protein: 19,
    fat: 40,
    sodium: 1000,
    image: "https://www.vindulge.com/wp-content/uploads/2020/04/Healthy-Fish-Tacos.jpg"
    },
    {
    title: "Quick Moroccan Vegetable Couscous ",
    calories: 714,
    protein: 20,
    fat: 16,
    sodium: 435,
    image: "https://i.pinimg.com/originals/8b/49/71/8b49716c3cc62c9af2e9fb3dfad2bdf9.jpg"
    },
    {
    title: "Swordfish with Balsamic Brown Butter Sauce ",
    calories: 440,
    protein: 34,
    fat: 31,
    sodium: 237,
    image: "https://i.pinimg.com/originals/4e/07/6a/4e076aa79fc6659854cf2a424980c911.jpg"
    },
    {
    title: "Meatballs: The Spuntino Way ",
    calories: 579,
    protein: 35,
    fat: 38,
    sodium: 896,
    image: "https://assets.epicurious.com/photos/54b3072e11c5d6af478b8444/1:1/w_2560%2Cc_limit/360130_meatballs-spuntino_1x1.jpg"
    },
    {
    title: "Tomato-and-Garlic-Stuffed Chicken Cutlets ",
    calories: 311,
    protein: 22,
    fat: 24,
    sodium: 97,
    image: "https://chefjar.com/wp-content/uploads/2022/03/baked-breaded-chicken-cutlets-2.jpg"
    },
    {
    title: "Chinese Chicken Noodle Soup with Sesame and Green Onions ",
    calories: 510,
    protein: 36,
    fat: 16,
    sodium: 627,
    image: "https://omnivorescookbook.com/wp-content/uploads/2021/03/210203_Chinese-Chicken-Noodle-Soup_3-683x1024.jpg"
    },
    {
    title: "Grilled Tuna and Watercress Salad with Asian Flavors ",
    calories: 424,
    protein: 31,
    fat: 26,
    sodium: 1739,
    image: "https://assets.epicurious.com/photos/5aeb779bbdc9cb7cd6eed824/2:1/w_1260%2Ch_630/tuna-watercress-salad-recipe-050318.jpg"
    },
    {
    title: "Texas-Style Chili ",
    calories: 534,
    protein: 70,
    fat: 23,
    sodium: 1356,
    image: "https://i.ytimg.com/vi/E-x7WWw9wLk/maxresdefault.jpg"
    },
    {
    title: "Chicken with Lemon-Basil Sauce ",
    calories: 391,
    protein: 55,
    fat: 17,
    sodium: 125,
    image: "https://cucinadeyung.com/wp-content/uploads/2020/09/Lemon-Chicken-Recipe-with-Lemon-Butter-Sauce_2.jpg"
    },
    {
    title: "Honey, Mustard and Rosemary Pork Roast ",
    calories: 683,
    protein: 51,
    fat: 38,
    sodium: 460,
    image: "http://www.tasteslovely.com/wp-content/uploads/2015/04/Rosemary-Honey-Mustard-Pork-Tenderloin-paleo-glutenfree-3.jpg"
    },
    {
    title: "Grilled Pork Tenderloin with Peach Barbecue Sauce ",
    calories: 485,
    protein: 50,
    fat: 20,
    sodium: 1920,
    image: "https://www.bakingbeauty.net/wp-content/uploads/2015/09/Grilled-Pork-3.jpg"
    },
    {
    title: "Tarragon Roast Turkey with Vermouth ",
    calories: 1106,
    protein: 176,
    fat: 36,
    sodium: 706,
    image: "https://s3.amazonaws.com/backburner-butterball-images-resized/700x/J6RyEo5o7Q4KLM33j/1503525577324-sweet-spiced-tarragon-roast-turkey.jpg"
    },
    {
    title: "Honey-Citrus Chicken ",
    calories: 504,
    protein: 71,
    fat: 13,
    sodium: 471,
    image: "https://i.ytimg.com/vi/78eDRNblApQ/maxresdefault.jpg"
    },
    {
    title: "Roast Turkey with Bourbon Gravy ",
    calories: 604,
    protein: 25,
    fat: 24,
    sodium: 1906,
    image: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/vimdb/271789.jpg"
    },
    {
    title: "Spaghetti with Fresh Clams, Parsley, and Lemon ",
    calories: 981,
    protein: 65,
    fat: 32,
    sodium: 2057,
    image: "https://i.pinimg.com/originals/e4/62/4f/e4624f569f42ed0ba219a3753f841305.jpg"
    },
    {
    title: "Pot Roast in Rich Gravy ",
    calories: 516,
    protein: 62,
    fat: 16,
    sodium: 409,
    image: "https://carolinabodybuilding.com/wp-content/uploads/2020/06/Pot-roast.jpg"
    },
    {
    title: "Grilled Shrimp and Vegetables with Pearl Couscous ",
    calories: 650,
    protein: 36,
    fat: 30,
    sodium: 1980,
    image: "https://www.cookingclassy.com/wp-content/uploads/2019/09/grilled-shrimp-15.jpg"
    },
    {
    title: "Brown Rice Salad with Crunchy Sprouts and Seeds ",
    calories: 527,
    protein: 23,
    fat: 26,
    sodium: 333,
    image: "https://2.bp.blogspot.com/-kSEaMb5qRdc/UhkjBbaSRyI/AAAAAAAACCY/THD5wmGokxw/s1600/Brown+Rice+and+Sprout+Salad+008.jpg"
    },
    {
    title: "Sauteed Salmon with Five-Spice Lime Butter ",
    calories: 469,
    protein: 35,
    fat: 36,
    sodium: 102,
    image: "https://i.pinimg.com/736x/59/b1/10/59b110b6e1284394ff6042228e2c69bd.jpg"
    },
    {
    title: "Mango Meringue Tartlets ",
    calories: 890,
    protein: 16,
    fat: 31,
    sodium: 177,
    image: "https://assets.epicurious.com/photos/560d9990f9a84192308a1a30/1:1/w_600%2Ch_600/238225.jpg"
    },
    {
    title: "Spicy Chicken Salad with Bell Pepper and Cilantro ",
    calories: 472,
    protein: 30,
    fat: 35,
    sodium: 136,
    image: "https://thatspicychick.com/wp-content/uploads/2020/11/Spicy-Pepper-Chicken-front-view-in-serving-bowl.jpg"
    },
    {
    title: "Coriander Chicken Tostadas with Refried Beans and Grilled Fennel ",
    calories: 667,
    protein: 46,
    fat: 31,
    sodium: 749,
    image: "https://assets.epicurious.com/photos/54b424f82413537c0d45cdc4/1:1/w_2560%2Cc_limit/362970_chicken-tostadas_1x1.jpg"
    },
    {
    title: "Linguine with Shellfish Sauce ",
    calories: 1198,
    protein: 103,
    fat: 33,
    sodium: 2473,
    image: "https://certcofresh.com/wp-content/uploads/2020/05/prev-Linguine-With-Seafood-Sauce.jpg"
    },
    {
    title: "Roasted Salmon with Cucumber Sour Cream ",
    calories: 374,
    protein: 36,
    fat: 23,
    sodium: 902,
    image: "http://www.lecremedelacrumb.com/wp-content/uploads/2017/07/lemon-dill-salmon-101.jpg"
    },
    {
    title: "Fish, Clams, and Mussels with White Wine and Garlic ",
    calories: 352,
    protein: 49,
    fat: 12,
    sodium: 1319,
    image: "https://i.pinimg.com/originals/99/e5/57/99e557fad7c9f1748e3c276eca0fecac.png"
    },
    {
    title: "Smoked Salmon, Horseradish Sour Cream, and Cucumber Lavash Sandwiches ",
    calories: 626,
    protein: 54,
    fat: 40,
    sodium: 292,
    image: "https://impromptufridaynights.com/wp-content/uploads/2021/02/Smoked-Salmon-with-horseradish-cream-cheese.jpeg"
    },
    {
    title: "Quick Clam Chowder ",
    calories: 523,
    protein: 27,
    fat: 16,
    sodium: 672,
    image: "https://www.tasteofhome.com/wp-content/uploads/2017/10/Quick-Clam-Chowder_exps14936_S2567819A01_12_3bC_RMS.jpg"
    },
    {
    title: "Sauteed Quail with Shiitake Port Sauce ",
    calories: 619,
    protein: 22,
    fat: 31,
    sodium: 323,
    image: "https://i.pinimg.com/originals/0f/41/cd/0f41cdd2e0b8945ef5c1555c117592af.jpg"
    },
    {
    title: "Pasta with Cherry Tomatoes, Basil, Lemon, and Clams ",
    calories: 756,
    protein: 54,
    fat: 24,
    sodium: 544,
    image: "https://i.pinimg.com/originals/89/9e/8a/899e8a113a8e1eeb2f9e829a1faf8dbc.jpg"
    },
    {
    title: "Baked Salmon with Pernod ",
    calories: 614,
    protein: 42,
    fat: 37,
    sodium: 216,
    image: "https://media.chefdehome.com/800/0/0/baked-salmon/baked-salmon-with-lemon-fennel-chefdehome-3.jpg"
    },
    {
    title: "Kale Dressing ",
    calories: 713,
    protein: 26,
    fat: 40,
    sodium: 650,
    image: "http://www.eatyourselfskinny.com/wp-content/uploads/2017/03/roasted-chickpea-1.jpg"
    },
    {
    title: "Saffron Pasta with Pork and Tomato Sauce ",
    calories: 616,
    protein: 29,
    fat: 31,
    sodium: 591,
    image: "http://www.errenskitchen.com/wp-content/uploads/2015/03/Creamy-Saffron-Pasta-10-of-1.jpg"
    },
    {
    title: "Linguine with Clams and Arugula ",
    calories: 828,
    protein: 32,
    fat: 30,
    sodium: 668,
    image: "https://orsararecipes.net/wp-content/uploads/2021/06/Linguine-with-Shrimp-and-Arugula-640x959.jpg"
    },
    {
    title: "Rosemary Portobello Burgers ",
    calories: 418,
    protein: 21,
    fat: 19,
    sodium: 1219,
    image: "https://i.pinimg.com/736x/45/39/91/4539919deaf7b8def733b9a05e38c75d.jpg"
    },
    {
    title: "Linguine with Pecan Arugula Pesto ",
    calories: 742,
    protein: 22,
    fat: 33,
    sodium: 654,
    image: "https://2.bp.blogspot.com/-VDEhggdzGYg/VZxIEvWMlWI/AAAAAAAAQvc/YfJk5wm7o1Q/s1600/linguine-toasted-pecan-arugula-pesto-3-43-o.jpg"
    },
    {
    title: "Roasted Salmon and Olive-Mustard Butter and Orzo ",
    calories: 857,
    protein: 29,
    fat: 22,
    sodium: 74,
    image: "https://www.cookingclassy.com/wp-content/uploads/2017/12/salmon-roasted-in-butter-7.jpg"
    },
    {
    title: "Barbecued Pork Sandwiches with Pickled Red Onion ",
    calories: 553,
    protein: 38,
    fat: 26,
    sodium: 1220,
    image: "https://assets.epicurious.com/photos/560d99d1f9a84192308a1af4/1:1/w_600%2Ch_600/238800.jpg"
    },
    {
    title: "Spicy Blackened Catfish ",
    calories: 666,
    protein: 70,
    fat: 40,
    sodium: 1029,
    image: "https://4.bp.blogspot.com/-7uedsiEhF_w/URWByDVprlI/AAAAAAAABdU/lNT-9DySWp4/s1600/IMG_7062.JPG"
    },
    {
    title: "Ham and Watercress Crepes ",
    calories: 327,
    protein: 25,
    fat: 21,
    sodium: 1503,
    image: "https://www.safeway.ca/wp-content/uploads/2019/09/Ham_and_Cheese_Egg_Crepes_Sriracha_Mayo_1196-1.png"
    },
    {
    title: "Cheese Tortellini Soup with Cannellini, Kielbasa, and Kale ",
    calories: 569,
    protein: 35,
    fat: 30,
    sodium: 1207,
    image: "https://images.themodernproper.com/billowy-turkey/production/posts/2018/creamy-tomato-tortellini-soup-with-sausage-and-kale-11.jpg?w=1200&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1664443965&amp;s=5da513e98b7ab80fc8e8a9b3ff381ac0"
    },
    {
    title: "Sausage, Leek and Currant Stuffing ",
    calories: 385,
    protein: 18,
    fat: 12,
    sodium: 571,
    image: "https://i.pinimg.com/originals/05/9d/a4/059da42399a2abb9f14adceac991da99.jpg"
    },
    {
    title: "Spinach and Roasted Red Pepper Gratin ",
    calories: 467,
    protein: 17,
    fat: 39,
    sodium: 693,
    image: "https://i.pinimg.com/originals/86/3c/d4/863cd4419fe99aa1f7e1e53b8226ccec.jpg"
    },
    {
    title: "Baked Red Snapper with Fennel-Scented Tomato Sauce ",
    calories: 528,
    protein: 66,
    fat: 18,
    sodium: 1378,
    image: "https://www.thespruceeats.com/thmb/M4Fm2a74Xfu-KPsoAyEzQv964cU=/1500x1000/filters:no_upscale():max_bytes(150000):strip_icc()/baked-red-snapper-with-garlic-3060151-Final-5b9fd6a7c9e77c0050cffb88.jpg"
    },
    {
    title: "Fried Rice with Ham, Egg, and Scallions ",
    calories: 383,
    protein: 18,
    fat: 10,
    sodium: 845,
    image: "https://www.yellowblissroad.com/wp-content/uploads/2021/10/Ham-Fried-Rice-social-scaled.jpg"
    },
    {
    title: "Apple-Onion Roast Turkey with Pan Gravy ",
    calories: 831,
    protein: 151,
    fat: 18,
    sodium: 623,
    image: "https://i.pinimg.com/originals/0b/0a/5d/0b0a5d76fcd80de88691eb6f35bf7393.jpg"
    },
    {
    title: "Red-Onion Meat Loaf ",
    calories: 306,
    protein: 18,
    fat: 16,
    sodium: 865,
    image: "https://www.billboard.com/wp-content/uploads/2022/01/meat-loaf-london-2016-billboard-1548.jpg"
    },
    {
    title: "Split Pea Soup with Sausage and Potato ",
    calories: 582,
    protein: 35,
    fat: 23,
    sodium: 716,
    image: "http://media4.popsugar-assets.com/files/2014/10/31/699/n/1922729/5303a7ae2f00826e_split-pea-soup.jpg.xxxlarge_2x/i/Split-Pea-Sweet-Potato-Soup.jpg"
    },
    {
    title: "Chicken and Dumplings with Mushrooms ",
    calories: 666,
    protein: 44,
    fat: 40,
    sodium: 807,
    image: "http://thewoksoflife.com/wp-content/uploads/2016/04/chicken-dumplings-6.jpg"
    },
    {
    title: "Vietnamese Sticky Chicken with Daikon and Carrot Pickle ",
    calories: 458,
    protein: 37,
    fat: 21,
    sodium: 1299,
    image: "https://foodisafourletterword.com/wp-content/uploads/2020/11/Vietnamese_Pickled_Daikon_and_Carrots_Recipe_Do_Chua_in_bowls.jpg"
    },
    {
    title: "Moroccan Lamb and Eggplant Matzo Pie with Spicy Tomato Sauce ",
    calories: 393,
    protein: 19,
    fat: 21,
    sodium: 914,
    image: "https://i.pinimg.com/originals/f4/13/80/f413801e1fccc86e094b82859752bd65.jpg"
    },
    {
    title: "Lamb Moussaka with Currants ",
    calories: 593,
    protein: 24,
    fat: 37,
    sodium: 841,
    image: "https://i1.wp.com/cookingwithbry.com/wp-content/uploads/Mousaka-Recipe-24.jpg?resize=1254%2C1254&amp;ssl=1"
    },
    {
    title: "Scallops and Haricots Verts with Creamy Bacon Vinaigrette ",
    calories: 305,
    protein: 24,
    fat: 18,
    sodium: 816,
    image: "https://i.pinimg.com/originals/3c/17/42/3c17427a5f2b545eba76476052f32af2.jpg"
    },
    {
    title: "Chilled Cream of Zucchini Soup with Mussels and Fresh Mint ",
    calories: 422,
    protein: 27,
    fat: 21,
    sodium: 746,
    image: "https://www.charlottefashionplate.com/wp-content/uploads/2022/04/IMG_8330.jpg"
    },
    {
    title: "Sausage, Leek and Currant Stuffing ",
    calories: 385,
    protein: 18,
    fat: 12,
    sodium: 571,
    image: "https://i.pinimg.com/originals/05/9d/a4/059da42399a2abb9f14adceac991da99.jpg"
    },
    {
    title: "Cheeseburgers with Charred Green Chiles and Onions ",
    calories: 567,
    protein: 42,
    fat: 30,
    sodium: 1118,
    image: "https://i.pinimg.com/736x/a2/c2/74/a2c274c00ddf9e4a1d998241dc5473ed--turkey-burger-recipes-beef-recipes.jpg"
    },
    {
    title: "Spring Vegetables with Shallots and Lemon ",
    calories: 305,
    protein: 22,
    fat: 8,
    sodium: 62,
    image: "http://www.newidea.com.au/media/105788/spring-onions.jpg"
    },
    {
    title: "Minestrone ",
    calories: 511,
    protein: 21,
    fat: 26,
    sodium: 663,
    image: "https://www.eatbetter.de/sites/eatbetter.de/files/styles/full_width_tablet_4_3/public/2022-03/minestrone_1.jpg?h=4521fff0&amp;itok=bqHKbKrq"
    },
    {
    title: "Pasta Primavera with Smoky Ham ",
    calories: 555,
    protein: 31,
    fat: 14,
    sodium: 1009,
    image: "nan"
    },
    {
    title: "Mussels with Tomatoes, Jalape�o and Tequila ",
    calories: 379,
    protein: 18,
    fat: 26,
    sodium: 473,
    image: "https://i.pinimg.com/736x/8b/6b/82/8b6b8244e078799dbcbed829bc2d4c5c--mussels-tequila.jpg"
    },
    {
    title: "Smoky Shrimp and Halibut Stew ",
    calories: 594,
    protein: 61,
    fat: 27,
    sodium: 1548,
    image: "https://i.pinimg.com/originals/32/15/d4/3215d42e19c5c43dc8d0f1d2b0c205c9.jpg"
    },
    {
    title: "Breakfast Hobo Packs with Hash Brown Potatoes, Sausage, and Scallions ",
    calories: 379,
    protein: 17,
    fat: 28,
    sodium: 510,
    image: "https://assets.epicurious.com/photos/5581ee1f81ac1e5023677afe/1:1/w_2560%2Cc_limit/EP_06172015_hobopacks_Breakfast-Hobo-Packs-with-Hash-Brown-Potatoes%2C-Sausage%2C-and-Scallions_6x4.jpg"
    },
    {
    title: "Garlic, White Cheddar and Chipotle Mashed Potatoes ",
    calories: 538,
    protein: 15,
    fat: 29,
    sodium: 252,
    image: "http://watchlearneat.com/wp-content/uploads/2014/11/Easy-Garlic-Cheddar-Mashed-Potatoes-1.jpg"
    },
    {
    title: "Roasted Whole Fish and Fennel with Crushed Potatoes, Perserved Lemon, and Charmoula ",
    calories: 568,
    protein: 58,
    fat: 25,
    sodium: 262,
    image: "https://www.deliciousmagazine.co.uk/wp-content/uploads/2020/02/whole-roast-fish.jpg"
    },
    {
    title: "Pork Tenderloin With Turmeric, Squash, and Collard Greens Salad ",
    calories: 557,
    protein: 45,
    fat: 24,
    sodium: 1445,
    image: "https://assets.epicurious.com/photos/580e813b4eeca03265dbe5b5/master/pass/Pork-Tenderloin-with-Turmeric-Squash-and-Collard-Greens-Salad-hero-20102016.jpg"
    },
    {
    title: "Orecchiette with Lentils, Onions, and Spinach ",
    calories: 600,
    protein: 23,
    fat: 16,
    sodium: 245,
    image: "nan"
    },
    {
    title: "Chicken and Fall Vegetable Pot Pie ",
    calories: 617,
    protein: 58,
    fat: 32,
    sodium: 336,
    image: "https://tornadoughalli.com/wp-content/uploads/2020/09/CHICKEN-POT-PIE-1.jpg"
    },
    {
    title: "Banana Pancakes with Caramel-Banana Syrup ",
    calories: 760,
    protein: 15,
    fat: 27,
    sodium: 1030,
    image: "https://www.lifeloveandsugar.com/wp-content/uploads/2021/07/Banana-Pancakes3.jpg"
    },
    {
    title: "Brined Pork Loin with Onion, Raisin, and Garlic Compote ",
    calories: 456,
    protein: 49,
    fat: 21,
    sodium: 5766,
    image: "https://assets.bonappetit.com/photos/57b244ea3e1d654349a2fd88/master/pass/mare_brined_pork_loin_with_onion_raisin_garlic_compote_v.jpg"
    },
    {
    title: "Herb-Roasted Sausages and Butternut Squash ",
    calories: 510,
    protein: 20,
    fat: 39,
    sodium: 849,
    image: "https://theblondcook.com/wp-content/uploads/2015/10/sausage-butternut-squash-skillet-6.jpg"
    },
    {
    title: "Brown Butter, Ginger, and Sour Cream Coffee Cake ",
    calories: 756,
    protein: 15,
    fat: 21,
    sodium: 700,
    image: "https://i.pinimg.com/originals/a3/f3/ef/a3f3efeddecd82d4a49df8421fabfeb8.png"
    },
    {
    title: "Chicken Soup with Loads of Vegetables ",
    calories: 353,
    protein: 25,
    fat: 19,
    sodium: 859,
    image: "https://www.jessicagavin.com/wp-content/uploads/2020/09/chicken-vegetable-soup-14-1024x1536.jpg"
    },
    {
    title: "Bagel Chips with Smoked Salmon, Capers, and Lemon ",
    calories: 934,
    protein: 40,
    fat: 12,
    sodium: 1667,
    image: "https://cookingwithbry.com/wp-content/uploads/Smoked-salmon-bagel-with-lemon-and-capers-cream-cheese-2.jpg?_t=1696207889"
    },
    {
    title: "Italian Chicken with Mushroom-and-Wine Sauce ",
    calories: 359,
    protein: 27,
    fat: 20,
    sodium: 91,
    image: "https://cdn3.tmbi.com/secure/RMS/attachments/37/1200x1200/Italian-Baked-Chicken_exps23787_CWC1597098D49_RMS.jpg"
    },
    {
    title: "Roast Turkey with Pomegranate Glaze ",
    calories: 1069,
    protein: 161,
    fat: 29,
    sodium: 1616,
    image: "https://images.eatsmarter.com/sites/default/files/styles/facebook/public/roast-turkey-with-pomegranate-glaze-588028.jpg"
    },
    {
    title: "Pasta 'Rags' with a Thousand Herbs ",
    calories: 633,
    protein: 19,
    fat: 22,
    sodium: 264,
    image: "http://4.bp.blogspot.com/-7fjO1A20-kQ/Td7SzvphzuI/AAAAAAAAC40/Nc6l9PZTpyI/s1600/DSC02580.JPG"
    },
    {
    title: "Macadamia and Ginger Stuffing ",
    calories: 436,
    protein: 19,
    fat: 27,
    sodium: 589,
    image: "https://3.bp.blogspot.com/-WDEJDc_xndM/W_2f0jjXnWI/AAAAAAABPw8/15Mp_9IO3GI0UyE6sW5y4-cLPh-FPm97ACLcBGAs/s1600/Macadamia%2Band%2BGinger%2BStuffing%2BRecipe%2B.jpg"
    },
    {
    title: "BLT Burgers ",
    calories: 574,
    protein: 48,
    fat: 32,
    sodium: 720,
    image: "https://images.ctfassets.net/uw7yiu2kuigc/714b8d929c8e503330c25ef3bf82845a7d01902b9af6052f157e9be2c3f02dd0/0c2b018e4a9a45b5bba849316ed18ce4/Baby-BLT-Burger-Lead.jpg"
    },
    {
    title: "Feta Burgers with Grilled Red Onions ",
    calories: 622,
    protein: 41,
    fat: 38,
    sodium: 933,
    image: "https://i.pinimg.com/originals/85/1c/66/851c66eb7e6cb4020cdbf5a3729d3005.jpg"
    },
    {
    title: "Chicken with Sun-Dried Tomato Cream Sauce ",
    calories: 930,
    protein: 155,
    fat: 27,
    sodium: 380,
    image: "https://www.lecremedelacrumb.com/wp-content/uploads/2017/05/chicken-sundried-tomato-sauce-103-1.jpg"
    },
    {
    title: "Grilled Pork Chops with Sat� Sauce ",
    calories: 440,
    protein: 41,
    fat: 28,
    sodium: 632,
    image: "https://thehealthking.com/wp-content/uploads/2021/07/7886-juicy-grilled-pork-chops-758x758.jpg"
    },
    {
    title: "Lemony Chicken Soup With Farro, White Beans, and Kale ",
    calories: 1156,
    protein: 67,
    fat: 26,
    sodium: 1953,
    image: "https://i.pinimg.com/originals/25/c0/8d/25c08ddc726a5cb192fa4489c31b45b7.png"
    },
    {
    title: "Spaghetti alla Carbonara ",
    calories: 704,
    protein: 30,
    fat: 24,
    sodium: 664,
    image: "https://i2.wp.com/chickandhercheese.com/wp-content/uploads/2016/02/Carbonara-For-Two_03.jpg"
    },
    {
    title: "Spiced Pork Tenderloin ",
    calories: 448,
    protein: 66,
    fat: 18,
    sodium: 178,
    image: "http://dallasduobakes.com/wp-content/uploads/2013/07/IMG_1481.jpg"
    },
    {
    title: "Salmon with Soy-Honey and Wasabi Sauces ",
    calories: 472,
    protein: 36,
    fat: 23,
    sodium: 982,
    image: "https://i.pinimg.com/originals/85/66/dc/8566dc8827727ac15f73d26591bbf8b9.jpg"
    },
    {
    title: "Roast Turkey with Bourbon Gravy ",
    calories: 604,
    protein: 25,
    fat: 24,
    sodium: 1906,
    image: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/vimdb/271789.jpg"
    },
    {
    title: "Thai Chicken Curry ",
    calories: 541,
    protein: 20,
    fat: 39,
    sodium: 892,
    image: "https://www.ericajulson.com/wp-content/uploads/2017/04/Red-Thai-Coconut-Chicken-Curry-3.jpg"
    },
    {
    title: "Penne with Parmesan Cream and Prosciutto ",
    calories: 465,
    protein: 21,
    fat: 22,
    sodium: 645,
    image: "https://thehungrybluebird.com/wp-content/uploads/2015/08/IMG_4180-1.jpg"
    },
    {
    title: "Beef Bone Broth ",
    calories: 318,
    protein: 28,
    fat: 17,
    sodium: 373,
    image: "https://www.themagicalslowcooker.com/wp-content/uploads/2018/10/beef-bone-broth-4.jpg"
    },
    {
    title: "Roasted Eggplant Soup with Goat Cheese Dumplings ",
    calories: 456,
    protein: 15,
    fat: 19,
    sodium: 491,
    image: "https://dishingouthealth.com/wp-content/uploads/2020/10/RoastedEggplantSoup_Step6-1024x1536.jpg"
    },
    {
    title: "Seafood Pasta with Lemon-Saffron Herb Dressing ",
    calories: 606,
    protein: 26,
    fat: 34,
    sodium: 853,
    image: "https://lh3.googleusercontent.com/vZ6jGsiCLBXdJFvNLC2sdq3_mdYJbZ5pvSRxdRpCtjSu47nBUll1i-_tu6vE22Gmia1PVvuhUf3I7_dN_VQUyQ=s1200-rj-v1-e365"
    },
    {
    title: "Panfried Tofu with Chinese Black Bean Sauce ",
    calories: 402,
    protein: 27,
    fat: 23,
    sodium: 1635,
    image: "https://www.kwoklynwan.com/_webedit/cached-images/468-0-132-1086-9868-6724-1353.jpg"
    },
    {
    title: "Lamb Piccata with Capers ",
    calories: 378,
    protein: 15,
    fat: 30,
    sodium: 161,
    image: "https://i.pinimg.com/originals/0b/26/12/0b2612a7030eb5065fe6c24a4baa083b.jpg"
    },
    {
    title: "Baked Swordfish with Olive Relish ",
    calories: 366,
    protein: 34,
    fat: 24,
    sodium: 393,
    image: "http://www.lindysez.com/wp-content/uploads/2013/06/Baked-Swordfish-with-Olive-Relish.jpg"
    },
    {
    title: "Fettuccine with Asparagus, Beet Green Pesto, and Poached Egg ",
    calories: 504,
    protein: 22,
    fat: 13,
    sodium: 131,
    image: "https://static01.nyt.com/images/2016/04/18/dining/18COOKING-FETTUCCINEASPARAGUS1/18COOKING-FETTUCCINEASPARAGUS1-superJumbo.jpg"
    },
    {
    title: "Curried Scallop and Vegetable Chowder ",
    calories: 350,
    protein: 27,
    fat: 10,
    sodium: 1412,
    image: "https://i.pinimg.com/originals/d2/07/12/d207124723f35248c2702b2466e89dfe.jpg"
    },
    {
    title: "Hearty Goulash Soup ",
    calories: 360,
    protein: 32,
    fat: 13,
    sodium: 521,
    image: "https://myislandbistrokitchen.com/wp-content/uploads/2016/04/Goulash-Soup1-683x1024.png"
    },
    {
    title: "Chicken and Shiitake Stir-Fry with Peas and Pea Tendrils ",
    calories: 409,
    protein: 37,
    fat: 13,
    sodium: 1281,
    image: "https://apinchofsaffron.nl/wp-content/uploads/2020/10/91A1797.jpg"
    },
    {
    title: "Shrimp Curry ",
    calories: 422,
    protein: 18,
    fat: 36,
    sodium: 950,
    image: "https://www.chilipeppermadness.com/wp-content/uploads/2019/10/Thai-Curry-Shrimp-Recipe1.jpg"
    },
    {
    title: "Blt Bow Ties ",
    calories: 631,
    protein: 26,
    fat: 29,
    sodium: 667,
    image: "https://friendseat.com/wp-content/uploads/2018/04/blt-bow-tie-pasta-salad-recipe.jpg"
    },
    {
    title: "Cr�me Fra�che-Roasted Salmon ",
    calories: 359,
    protein: 49,
    fat: 16,
    sodium: 692,
    image: "https://www.deliciousmagazine.co.uk/wp-content/uploads/2019/07/DEL0218-Sparrow-SalmonCure_020478.jpg"
    },
    {
    title: "Seared Scallops With Mint, Peas, and Bacon ",
    calories: 359,
    protein: 33,
    fat: 10,
    sodium: 823,
    image: "https://i.pinimg.com/originals/26/7d/96/267d96176577191426918b7b8c1bb307.jpg"
    },
    {
    title: "Grilled Ham Steak with Peppered Peach Glaze ",
    calories: 367,
    protein: 36,
    fat: 11,
    sodium: 3507,
    image: "http://1.bp.blogspot.com/-KNSeu_pgOJI/VZvf2SLoc4I/AAAAAAAAf04/9eFsc7qR9dI/s1600/ham%2Bsteak%2Bon%2Bgrill_003.jpg"
    },
    {
    title: "Reuben Bread Pudding ",
    calories: 447,
    protein: 27,
    fat: 29,
    sodium: 1504,
    image: "https://i2.wp.com/www.imbored-letsgo.com/wp-content/uploads/2016/03/Reuben-Bread-Pudding.jpg"
    },
    {
    title: "Grilled Portobello and Red Bell Pepper Salad with Rosemary Dressing ",
    calories: 347,
    protein: 17,
    fat: 21,
    sodium: 75,
    image: "https://auxdelicesfoods.com/wp-content/uploads/2019/10/portobello-stack.jpeg"
    },
    {
    title: "Asian Noodle Salad with Eggplant, Sugar Snap Peas, and Lime Dressing ",
    calories: 507,
    protein: 16,
    fat: 16,
    sodium: 815,
    image: "https://www.wellplated.com/wp-content/uploads/2016/07/Asian-Noodle-Salad-with-Peanut-Sauce.jpg"
    },
    {
    title: "Zucchini 'Noodles' With Eggplant and Tomatoes ",
    calories: 394,
    protein: 20,
    fat: 16,
    sodium: 1658,
    image: "https://assets.epicurious.com/photos/57a3aa99bd7fde737c837945/16:9/w_1280,c_limit/Zucchini-Noodles-With-Eggplant-tomatoes-recipe-04082016.jpg"
    },
    {
    title: "Jalape�o-Glazed Chicken Breasts ",
    calories: 581,
    protein: 37,
    fat: 16,
    sodium: 147,
    image: "https://easyandhealthyrecipes.com/wp-content/uploads/2019/07/5-Creamy-Garlic-Chicken-Breasts.jpg"
    },
    {
    title: "Chile-Marinated Pork With Vietnamese Brussels Sprouts ",
    calories: 591,
    protein: 56,
    fat: 33,
    sodium: 1634,
    image: "https://1.bp.blogspot.com/-QGcqE_MTXN4/X5nuMMM_6FI/AAAAAAAATAc/P2oy0Xsd_CAmkbSeK8Lf6vdf7u7iJunzgCLcBGAsYHQ/s2048/IMG_6925.JPG"
    },
    {
    title: "Chipotle-Black Bean Burritos ",
    calories: 561,
    protein: 19,
    fat: 29,
    sodium: 1281,
    image: "https://i.pinimg.com/originals/81/33/ea/8133ea2bb7ba675e0041737e19c6fca0.png"
    },
    {
    title: "Seafood Chowder ",
    calories: 612,
    protein: 87,
    fat: 19,
    sodium: 1573,
    image: "https://www.fannetasticfood.com/wp-content/uploads/2019/02/quick-easy-healthy-seafood-chowder-recipe.jpg"
    },
    {
    title: "Ricotta-Filled Ravioli (Ravioli di Ricotta) ",
    calories: 692,
    protein: 30,
    fat: 21,
    sodium: 790,
    image: "https://blog.giallozafferano.it/fantasiaincucina/wp-content/uploads/2018/04/Ravioli-di-ricotta-dolci-ricetta-siciliana-Z.jpg"
    },
    {
    title: "Clams with Fennel and Pernod ",
    calories: 374,
    protein: 22,
    fat: 15,
    sodium: 811,
    image: "https://ouritaliantable.com/wp-content/uploads/2015/06/Clams-with-Fennel-Broth4-1-of-1.jpg"
    },
    {
    title: "Black Bean, Corn, and Tomato Salad ",
    calories: 486,
    protein: 23,
    fat: 16,
    sodium: 327,
    image: "https://www.wellplated.com/wp-content/uploads/2020/06/Black-Bean-Corn-Salad-with-Feta-1017x1536.jpg"
    },
    {
    title: "Two-Bean and Barley Salad with Pine Nuts ",
    calories: 909,
    protein: 37,
    fat: 37,
    sodium: 51,
    image: "https://keviniscooking.com/wp-content/uploads/2016/05/Barley-Salad-with-Apricot-and-Pine-Nuts1.jpg"
    },
    {
    title: "Salmon 'Bulgogi' with Bok Choy and Mushrooms ",
    calories: 459,
    protein: 39,
    fat: 28,
    sodium: 994,
    image: "http://www.weheartfood.com/wp-content/uploads/2010/02/salmonbulgogi.jpg"
    },
    {
    title: "Green Onion Sausage and Shrimp Gravy ",
    calories: 359,
    protein: 27,
    fat: 25,
    sodium: 1114,
    image: "https://d1dxs113ar9ebd.cloudfront.net/225batonrouge/2021/10/FullSizeRender-4.jpg"
    },
    {
    title: "Southwestern Breakfast Scramble ",
    calories: 450,
    protein: 25,
    fat: 34,
    sodium: 857,
    image: "https://www.monicametz.com/wp-content/uploads/2018/09/southwest-scramble-fork-web-1.jpg"
    },
    {
    title: "Grilled Chicken Palliards with Nectarine Chutney ",
    calories: 324,
    protein: 40,
    fat: 8,
    sodium: 227,
    image: "https://i.pinimg.com/originals/7a/b4/78/7ab4788a15ee08e6888c03862987a37d.jpg"
    },
    {
    title: "Corn and Lobster Chowder ",
    calories: 506,
    protein: 29,
    fat: 26,
    sodium: 1117,
    image: "http://thesuburbansoapbox.com/wp-content/uploads/2016/08/Lobster-Corn-Chowder-2.jpg"
    },
    {
    title: "Marilyn's Manicotti ",
    calories: 601,
    protein: 31,
    fat: 29,
    sodium: 1316,
    image: "https://icf.listex.info/med/8c8caf36-1624-7818-7e69-a3411dbce86f.jpg"
    },
    {
    title: "Grilled Fresh Sardines with Fennel and Preserved Lemon ",
    calories: 339,
    protein: 31,
    fat: 18,
    sodium: 617,
    image: "https://mossenplace.com/wp-content/uploads/2021/06/IMG_4167.jpg"
    },
    {
    title: "White Bean Chicken Chili ",
    calories: 880,
    protein: 61,
    fat: 37,
    sodium: 741,
    image: "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/10/White-Bean-Chicken-Chili-Recipe1-1024x1536.jpg"
    },
    {
    title: "Whole-Wheat Spaghetti with Broccoli, Chickpeas, and Garlic ",
    calories: 527,
    protein: 20,
    fat: 18,
    sodium: 751,
    image: "https://images.immediate.co.uk/production/volatile/sites/2/2016/03/21957.jpg?quality=90&amp;resize=556,505"
    },
    {
    title: "Grilled Swordfish with Eggplant, Anchovy and Green Olives ",
    calories: 357,
    protein: 35,
    fat: 22,
    sodium: 528,
    image: "https://www.threeolivesbranch.com/wp-content/uploads/2020/05/grilled-swordfish-steaks-warm-tomato-olive-relish-threeolivesbranch-4.jpg"
    },
    {
    title: "Spaghetti with Fresh Tomato and Herbs ",
    calories: 683,
    protein: 26,
    fat: 30,
    sodium: 1230,
    image: "https://www.totallytarget.com/wp-content/uploads/2019/05/spaghetti.jpg"
    },
    {
    title: "Cornmeal Pudding with Cheese ",
    calories: 363,
    protein: 21,
    fat: 20,
    sodium: 977,
    image: "https://healthiersteps.com/wp-content/uploads/2018/10/easy-cornmeal-pudding.jpg"
    },
    {
    title: "Chicken Soup with Avocado and Crispy Tortilla Strips ",
    calories: 570,
    protein: 37,
    fat: 39,
    sodium: 311,
    image: "https://www.cookingclassy.com/wp-content/uploads/2014/07/chicken-avocado-soup-88-1024x1536.jpg"
    },
    {
    title: "Turkey Mole Sauce ",
    calories: 524,
    protein: 18,
    fat: 34,
    sodium: 605,
    image: "https://i.pinimg.com/originals/2e/62/5b/2e625b78fb5cee77d81aa1b617c4bc92.jpg"
    },
    {
    title: "Curried Seafood Crepes ",
    calories: 484,
    protein: 30,
    fat: 18,
    sodium: 758,
    image: "https://i.pinimg.com/originals/a1/43/b0/a143b07eeb24f9c2c45a89d562c9157d.jpg"
    },
    {
    title: "Chicken Salad with Cilantro and Ginger ",
    calories: 470,
    protein: 34,
    fat: 32,
    sodium: 1821,
    image: "https://i.pinimg.com/originals/55/21/12/5521129727d8c5e7519314ed32e90e56.jpg"
    },
    {
    title: "Roasted Halibut with Garlic Sauce ",
    calories: 377,
    protein: 37,
    fat: 24,
    sodium: 247,
    image: "https://www.imbalife.com/media/image/2016/09/11/roasted-halibut-recipe-imbalife.jpg"
    },
    {
    title: "Hot Open-Faced Ham, Swiss Cheese, and Mushroom Sandwiches ",
    calories: 316,
    protein: 17,
    fat: 23,
    sodium: 486,
    image: "https://live.staticflickr.com/65535/50618137456_99aa6da1e6_k_d.jpg"
    },
    {
    title: "Strozzapreti with Mushrooms and Ricotta ",
    calories: 521,
    protein: 21,
    fat: 17,
    sodium: 209,
    image: "https://static01.nyt.com/images/2014/04/03/dining/Strozzapreti/Strozzapreti-superJumbo.jpg"
    },
    {
    title: "Pork Medallions with Mustard Sauce ",
    calories: 362,
    protein: 26,
    fat: 23,
    sodium: 536,
    image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https:%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2015%2F05%2F20%2Fpork-medallions-grainy-mustard-sauce-ck.jpg"
    },
    {
    title: "Caramelized Onion and Roasted Red Pepper Linguine ",
    calories: 584,
    protein: 20,
    fat: 17,
    sodium: 229,
    image: "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_534/https://www.smalltownwoman.com/wp-content/uploads/2017/12/Creamy-Shrimp-and-Roasted-Red-Pepper-Linguine.jpg"
    },
    {
    title: "Beef Stew in the Crock Pot ",
    calories: 321,
    protein: 36,
    fat: 12,
    sodium: 779,
    image: "https://www.savorynothings.com/wp-content/uploads/2017/09/crock-pot-beef-stew-recipe-image-4.jpg"
    },
    {
    title: "Roast Pork Tenderloins with Balsamic-Chestnut Glaze ",
    calories: 565,
    protein: 43,
    fat: 27,
    sodium: 237,
    image: "https://i2.wp.com/www.primaverakitchen.com/wp-content/uploads/2019/11/Balsamic-Roast-Pork-Tenderloin-Primavera-Kitchen-5.jpg"
    },
    {
    title: "Potatoes Roasted in Goose Fat ",
    calories: 975,
    protein: 20,
    fat: 29,
    sodium: 47,
    image: "https://weekendatthecottage.com/wp-content/uploads/2020/12/GooseFatRoastedPotatoes10-1024x682.jpg"
    },
    {
    title: "Rack of Venison Stuffed with Pecans, Currants, Sausage, and Pears ",
    calories: 760,
    protein: 70,
    fat: 37,
    sodium: 174,
    image: "https://assets.bonappetit.com/photos/57b0ec8bf1c801a1038bdaf3/16:9/w_1280,c_limit/mare_rack_of_venison_stuffed_with_pecans_currants_sausage_and_pears_h.jpg"
    },
    {
    title: "Roast Beef Sandwiches with Blue Cheese Dressing ",
    calories: 379,
    protein: 24,
    fat: 29,
    sodium: 324,
    image: "http://ahintofwine.com/wp-content/uploads/2014/03/DSC_06721.jpg"
    },
    {
    title: "Pappardelle with Squash, Mushrooms, and Spinach ",
    calories: 678,
    protein: 22,
    fat: 30,
    sodium: 339,
    image: "nan"
    },
    {
    title: "Crab Meat Gratin ",
    calories: 362,
    protein: 28,
    fat: 22,
    sodium: 944,
    image: "http://amyinthekitchen.com/wp-content/uploads/2017/07/Crab-Meat-Au-Gratin-6.jpg"
    },
    {
    title: "Perfect Pork Chops ",
    calories: 580,
    protein: 43,
    fat: 34,
    sodium: 1547,
    image: "https://fthmb.tqn.com/0jrXUoL0_Cpt44bvxS2EuRSUCVo=/2500x1667/filters:fill(auto,1)/pork-chop-2500-56a2103b5f9b58b7d0c62be9.jpg"
    },
    {
    title: "Grilled Marinated Sirloin Flap Steaks ",
    calories: 503,
    protein: 47,
    fat: 29,
    sodium: 812,
    image: "https://d3cizcpymoenau.cloudfront.net/images/legacy/34735/SFS_GrilledSkirtSteak_20V2-16.jpg"
    },
    {
    title: "Risotto with Tuscan Kale and Toasted Pumpkin Seeds ",
    calories: 555,
    protein: 20,
    fat: 17,
    sodium: 1121,
    image: "http://girlontherange.com/wp-content/uploads/2015/11/pumpkin-risotto-bowl-www.girlontherange.com_edited.jpg"
    },
    {
    title: "Carolina-Style Pork BBQ Sandwiches ",
    calories: 422,
    protein: 55,
    fat: 16,
    sodium: 1370,
    image: "https://www.melskitchencafe.com/wp-content/uploads/2010/08/bbq-pork-sandwich3.jpg"
    },
    {
    title: "Shrimp and Scallops with Asian Eggplant ",
    calories: 474,
    protein: 31,
    fat: 32,
    sodium: 1533,
    image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Spicy-Shrimp-n-Scallop-Skewers_exps35080_GI2238736C11_30_5bC_RMS.jpg?resize=1024"
    },
    {
    title: "Veal Chops in Curry Sauce ",
    calories: 436,
    protein: 31,
    fat: 31,
    sodium: 161,
    image: "https://i0.wp.com/center-of-the-plate.com/wp-content/uploads/2018/07/Veal-Chop-with-herb-sauce-2.jpg?resize=1000%2C606&amp;ssl=1"
    },
    {
    title: "Crab and Crimini Bisque ",
    calories: 357,
    protein: 20,
    fat: 26,
    sodium: 402,
    image: "https://www.myforkinglife.com/wp-content/uploads/2021/01/crab-bisque-7.jpg"
    },
    {
    title: "Fresh Fig, Prosciutto, and Arugula Salad with Parmesan Shavings ",
    calories: 316,
    protein: 18,
    fat: 23,
    sodium: 1127,
    image: "https://www.halfbakedharvest.com/wp-content/uploads/2018/07/Fresh-Fig-Prosciutto-and-Arugula-Salad-with-Cherry-Tomato-Vinaigrette-1-700x1050.jpg"
    },
    {
    title: "Open-Faced Burgers with Horseradish-Cheese Sauce ",
    calories: 533,
    protein: 42,
    fat: 32,
    sodium: 386,
    image: "https://i.pinimg.com/originals/bd/e3/a5/bde3a5cd07d7550ef7a5e320b209c31f.jpg"
    },
    {
    title: "Barbecue Pulled-Turkey Sandwiches ",
    calories: 443,
    protein: 26,
    fat: 20,
    sodium: 485,
    image: "https://i.pinimg.com/736x/29/bb/45/29bb451dc7d52e9e16e1af7e2712a21d--slider-sandwiches-turkey-sandwiches.jpg"
    },
    {
    title: "Chicken Burritos with Poblano Chiles and Corn ",
    calories: 563,
    protein: 41,
    fat: 25,
    sodium: 674,
    image: "https://www.ambitiouskitchen.com/wp-content/uploads/2020/09/Green-Chile-Chicken-Burritos-4.jpg"
    },
    {
    title: "Japanese Beef and Vegetable Stew ",
    calories: 702,
    protein: 46,
    fat: 33,
    sodium: 2952,
    image: "https://gustotv.com/wp-content/uploads/2020/04/OWK_2034_Japanese-Beef-Stew_horizontal_ver1-scaled.jpg"
    },
    {
    title: "Polenta with Mozzarella and Parmesan ",
    calories: 384,
    protein: 20,
    fat: 18,
    sodium: 487,
    image: "https://i.pinimg.com/originals/11/43/29/114329118775070ba308796620a3cd6b.jpg"
    },
    {
    title: "Camembert with Blue Cheese, Figs and Port Sauce ",
    calories: 473,
    protein: 19,
    fat: 26,
    sodium: 840,
    image: "https://i.pinimg.com/originals/a2/4a/4e/a24a4eda22d6d0b9cee9a653cc4ff205.jpg"
    },
    {
    title: "Cider-Dijon Pork Chops with Roasted Sweet Potatoes and Apples ",
    calories: 726,
    protein: 45,
    fat: 36,
    sodium: 293,
    image: "https://i.pinimg.com/originals/06/46/90/0646909eeaf4aed3fc50acc3e7bbca99.jpg"
    },
    {
    title: "Roast Pork Tenderloins with Cranberry-Port Sauce ",
    calories: 430,
    protein: 37,
    fat: 16,
    sodium: 548,
    image: "https://i.pinimg.com/originals/b3/71/ae/b371ae1364ad6d1f7cb2a95b7d62a304.jpg"
    },
    {
    title: "Apricot Chicken with Almonds ",
    calories: 376,
    protein: 41,
    fat: 11,
    sodium: 827,
    image: "http://lakelurecottagekitchen.com/wp-content/uploads/2013/09/Apricot-chicken-2-close-V.jpg"
    },
    {
    title: "Roasted Vegetable Meatloaf with Mustard Mashed Potatoes ",
    calories: 528,
    protein: 47,
    fat: 24,
    sodium: 1387,
    image: "https://www.gatheranddine.com/wp-content/uploads/2015/05/roasted-vegetable-turkey-meatloaf-10.jpg"
    },
    {
    title: "Spicy Rice with Shrimp and Peppers ",
    calories: 508,
    protein: 29,
    fat: 22,
    sodium: 1593,
    image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Spicy-Shrimp-with-Rice_EXPS_THSO18_35518_D04_19_5b-4.jpg"
    },
    {
    title: "Turkey Meat Loaf with Sun-Dried Tomatoes ",
    calories: 315,
    protein: 28,
    fat: 16,
    sodium: 994,
    image: "https://www.eatyourselfskinny.com/wp-content/uploads/2021/08/turkey-meatloaf-5-scaled.jpg"
    },
    {
    title: "Creamy Polenta with Gorgonzola and Spinach ",
    calories: 425,
    protein: 17,
    fat: 17,
    sodium: 476,
    image: "https://weelittlevegans.com/wp-content/uploads/2017/05/Creamy-Polenta-with-Mushrooms-Spinach-and-Pine-Nuts4-e1611759624350.jpg"
    },
    {
    title: "Super Potato Salad ",
    calories: 641,
    protein: 19,
    fat: 38,
    sodium: 909,
    image: "https://cdn3.tmbi.com/secure/RMS/attachments/37/1200x1200/exps195374_TH163621B02_18_7b.jpg"
    },
    {
    title: "Dilled Seafood en Papillote ",
    calories: 353,
    protein: 31,
    fat: 23,
    sodium: 294,
    image: "https://i.pinimg.com/originals/52/14/8d/52148d1a0b85e9f9c42d3794e2e5811e.jpg"
    },
    {
    title: "Whole-Wheat Peanut Butter Waffles ",
    calories: 457,
    protein: 16,
    fat: 26,
    sodium: 389,
    image: "https://www.maebells.com/wp-content/uploads/2017/09/Flourless-Peanut-Butter-Protein-Waffles-1-3-735x1103.jpg"
    },
    {
    title: "Veal Chops with Tomato-Orange-Basil Sauce ",
    calories: 504,
    protein: 36,
    fat: 34,
    sodium: 176,
    image: "https://i0.wp.com/center-of-the-plate.com/wp-content/uploads/2018/07/Veal-Chop-with-herb-sauce-2.jpg?resize=1000%2C606&amp;ssl=1"
    },
    {
    title: "Diner-Style French Toast ",
    calories: 481,
    protein: 15,
    fat: 27,
    sodium: 630,
    image: "https://static01.nyt.com/images/2017/05/03/dining/03FRENCHTOAST1/03FRENCHTOAST1-superJumbo.jpg"
    },
    {
    title: "Pork Chops with Chiles Rellenos and Ancho Sauce ",
    calories: 387,
    protein: 23,
    fat: 21,
    sodium: 1840,
    image: "https://i.pinimg.com/originals/9b/e5/46/9be546cfbf1876b01f5fc6731f5da25c.jpg"
    },
    {
    title: "Swordfish and Caponata Sandwiches ",
    calories: 586,
    protein: 35,
    fat: 26,
    sodium: 1106,
    image: "https://i.pinimg.com/originals/c4/59/3e/c4593ed0bbc86a9a61d98d84a0265b12.jpg"
    },
    {
    title: "Roast Pork Loin with Beer Sauce ",
    calories: 662,
    protein: 58,
    fat: 29,
    sodium: 361,
    image: "https://www.tasteofhome.com/wp-content/uploads/2017/10/Pork-Roast-with-Plum-Sauce_exps49562_SD1999444D06_29_3bC_RMS.jpg"
    },
    {
    title: "Pork with Guajillo Sauce ",
    calories: 468,
    protein: 30,
    fat: 30,
    sodium: 1487,
    image: "https://moebiusstrip.files.wordpress.com/2019/02/pork-chops-with-peanut-guajillo-sauce.jpg"
    },
    {
    title: "Chinese Curry Chicken ",
    calories: 554,
    protein: 55,
    fat: 28,
    sodium: 1394,
    image: "https://vikalinka.com/wp-content/uploads/2019/02/Chinese-chicken-curry-7-Edit.jpg"
    },
    {
    title: "Seafood Chowder with Bacon and Thyme ",
    calories: 662,
    protein: 64,
    fat: 27,
    sodium: 2009,
    image: "https://girlheartfood.com/wp-content/uploads/2020/06/Creamy-Seafood-Chowder-Recipe.jpg"
    },
    {
    title: "Pepper Steak with Port, Zinfandel, and Mushroom Sauce ",
    calories: 531,
    protein: 35,
    fat: 30,
    sodium: 388,
    image: "https://recipes.saladmaster.com/sites/default/files/styles/recipe_page_main_image/public/SM_pepper_steak_wt_taffel_potatoes (copyright).jpg?itok=DYsPIF6b"
    },
    {
    title: "Beef Stew with Mushrooms, Shallots and Potatoes ",
    calories: 594,
    protein: 59,
    fat: 21,
    sodium: 590,
    image: "https://i.pinimg.com/originals/77/75/e5/7775e5f16465e2f903988236788edcee.jpg"
    },
    {
    title: "Spicy Boiled Crabs, Shrimp, Potatoes, Corn, and Garlic ",
    calories: 952,
    protein: 134,
    fat: 11,
    sodium: 5494,
    image: "https://i.pinimg.com/originals/c2/d9/d5/c2d9d5e4e5376b5a7a88f90f10bf57ad.jpg"
    },
    {
    title: "Tuscan Beef Stew with Polenta ",
    calories: 695,
    protein: 54,
    fat: 26,
    sodium: 628,
    image: "https://www.insidetherustickitchen.com/wp-content/uploads/2020/04/Peposo-1200px-Inside-the-Rustic-Kitchen-3.jpg"
    },
    {
    title: "Shrimp Curry with Yu Choy and Kabocha Squash ",
    calories: 532,
    protein: 17,
    fat: 38,
    sodium: 1406,
    image: "https://assets.epicurious.com/photos/560de57ef3a00aeb2f1d543c/1:1/w_2560%2Cc_limit/232265.jpg"
    },
    {
    title: "Boeuf Bourguignon ",
    calories: 479,
    protein: 42,
    fat: 24,
    sodium: 263,
    image: "https://www.thespruceeats.com/thmb/BgOjFRb2m8nIkxjVnnmSRf3hK70=/3000x2000/filters:fill(auto,1)/french-boeuf-bourguignon-recipe-1375523-d9ae2ba0ea394f71bc2576a3a0ea277e.jpg"
    },
    {
    title: "Grilled East Coast Oysters with Corn Jalape�o Salsita ",
    calories: 500,
    protein: 25,
    fat: 22,
    sodium: 240,
    image: "https://assets.epicurious.com/photos/54b33d1021388ef838b07dbc/master/w_1280%2Cc_limit/358970_grilled-east-coast-oysters_1x1.jpg"
    },
    {
    title: "Roasted Pacific Cod with Spring Vegetables and Mint ",
    calories: 345,
    protein: 37,
    fat: 15,
    sodium: 306,
    image: "https://images.eatthismuch.com/site_media/img/45422_JenKling1027_1a4a2e60-c88f-470d-bb59-476c108c3761.jpg"
    },
    {
    title: "Pasta with Butternut Squash and Rosemary ",
    calories: 691,
    protein: 26,
    fat: 29,
    sodium: 809,
    image: "https://www.halfbakedharvest.com/wp-content/uploads/2020/09/Butternut-Squash-Pasta-Carbonara-with-Rosemary-Bacon-1.jpg"
    },
    {
    title: "White Bean and Vegetable Soup ",
    calories: 592,
    protein: 27,
    fat: 18,
    sodium: 896,
    image: "https://i0.wp.com/www.marilenaskitchen.com/wp-content/uploads/2020/02/White-bean-and-kale-soup.jpeg"
    },
    {
    title: "Penne with Sausage and Tomato Sauce ",
    calories: 476,
    protein: 24,
    fat: 12,
    sodium: 611,
    image: "https://www.lecremedelacrumb.com/wp-content/uploads/2020/05/creamy-tomato-sausage-penne-4sm-4.jpg"
    },
    {
    title: "Seafood Risotto (Risotto ai Fruitti di Mare) ",
    calories: 799,
    protein: 50,
    fat: 38,
    sodium: 1162,
    image: "http://assets.epicurious.com/photos/57b21a7cf53fc7235aebf2ed/master/pass/seafood-risotto-risotto-ai-fruitti-di-mare.jpg"
    },
    {
    title: "Tarragon Scallop Gratins ",
    calories: 312,
    protein: 17,
    fat: 15,
    sodium: 583,
    image: "http://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/food/2015/03/20/f05bd8eee5c14e16b40bf439a268a545/lemon-tarragon-scallop-skewers.jpg?width=600&amp;height=500&amp;mode=crop&amp;quality=75"
    },
    {
    title: "Smoked Salmon and Dill Matzoh Brei ",
    calories: 434,
    protein: 22,
    fat: 27,
    sodium: 1038,
    image: "https://www.gannett-cdn.com/-mm-/58b65903de8f05fef0782a41105559d04d9af303/c=0-1173-3273-3022&amp;r=x1683&amp;c=3200x1680/local/-/media/2017/06/27/INGroup/Indianapolis/636341660564847363-Smoked-Salmon-Dill-Dip.jpg"
    },
    {
    title: "Lasagna with Turkey Sausage Bolognese ",
    calories: 662,
    protein: 41,
    fat: 31,
    sodium: 1121,
    image: "http://3.bp.blogspot.com/-_-tESIZw0EQ/Uqn0XLiu9aI/AAAAAAAAOxs/ihn8Q7Tt8LQ/s1600/IMG_7634.JPG"
    },
    {
    title: "Chicken Saut� with Green Olive Topping ",
    calories: 301,
    protein: 33,
    fat: 17,
    sodium: 348,
    image: "https://juliascuisine.com/wp-content/uploads/2021/07/GREEN-OLIVE-CHICKEN-IMAGE4.jpg"
    },
    {
    title: "Spiced Lamb in Pita ",
    calories: 510,
    protein: 28,
    fat: 34,
    sodium: 812,
    image: "https://i.pinimg.com/originals/2c/2f/b1/2c2fb102faf86eb6e37412ba3ff4034a.jpg"
    },
    {
    title: "Baked Halibut with Warm Sherry Onion Vinaigrette ",
    calories: 349,
    protein: 30,
    fat: 22,
    sodium: 147,
    image: "https://www.sbcanning.com/wp-content/uploads/2020/11/Baked-halibut-with-basil-lemon-vinaigrette-2.jpeg"
    },
    {
    title: "Turkey Giblet Stock ",
    calories: 357,
    protein: 51,
    fat: 14,
    sodium: 342,
    image: "https://3.bp.blogspot.com/-qT692s1kur0/TricXwhcB4I/AAAAAAAABhc/vQWWLtI9DR0/s1600/DSC_1293-1.JPG"
    },
    {
    title: "Lobster Salad with Summer Vegetables ",
    calories: 419,
    protein: 50,
    fat: 14,
    sodium: 1209,
    image: "https://newengland.com/wp-content/uploads/2010/05/summer-lobster-salad-sadie-.jpg"
    },
    {
    title: "Ginger-Soy Grilled Steak ",
    calories: 456,
    protein: 37,
    fat: 31,
    sodium: 1412,
    image: "https://therecipecritic.com/wp-content/uploads/2019/06/perfectgrilledsteak_hero.jpg"
    },
    {
    title: "Penne with Chicken, Shiitake Mushrooms, and Capers ",
    calories: 673,
    protein: 39,
    fat: 29,
    sodium: 198,
    image: "https://assets.epicurious.com/photos/560ea131f9a84192308a94a3/1:1/w_2560%2Cc_limit/107091.jpg"
    },
    {
    title: "Wild Mushroom Pizza ",
    calories: 443,
    protein: 24,
    fat: 16,
    sodium: 734,
    image: "https://images.media-allrecipes.com/userphotos/960x960/3759013.jpg"
    },
    {
    title: "Chicken Soup ",
    calories: 499,
    protein: 47,
    fat: 31,
    sodium: 1278,
    image: "http://itseverythingdelicious.com/wp-content/uploads/2019/01/Chicken-Soup-10.jpg"
    },
    {
    title: "Pasta with Green Vegetables and Herbs ",
    calories: 813,
    protein: 25,
    fat: 36,
    sodium: 788,
    image: "https://www.deliciousmagazine.co.uk/wp-content/uploads/2018/10/pasta.jpg"
    },
    {
    title: "Whole-Wheat Linguine with Cauliflower, Pancetta, and Parmesan ",
    calories: 787,
    protein: 27,
    fat: 33,
    sodium: 881,
    image: "https://theolivegroveoliveoil.com/wp-content/uploads/2020/11/Roasted-Cauliflower-with-pancetta-olives-parmesan-e1604424769445-768x847.jpg"
    },
    {
    title: "White Bean and Ham Hock Soup with Arugula and Corn Bread Croutons ",
    calories: 473,
    protein: 23,
    fat: 28,
    sodium: 585,
    image: "https://www.cookingclassy.com/wp-content/uploads/2019/03/ham-bean-soup-2.jpg"
    },
    {
    title: "Scallops and Spinach Fettuccine with Red Bell Pepper Cream Sauce ",
    calories: 477,
    protein: 22,
    fat: 15,
    sodium: 577,
    image: "http://2.bp.blogspot.com/_MyAG_noXCZc/TLzovLivrLI/AAAAAAAAA50/tPxMvp1I6CQ/s1600/IMG_3939.JPG"
    },
    {
    title: "Mixed-Peppercorn Steaks with Sherry-Marjoram Pan Sauce ",
    calories: 519,
    protein: 36,
    fat: 39,
    sodium: 350,
    image: "https://brendaganttrecipes.com/wp-content/uploads/2023/04/Pan-Seared-Fillet-Steaks-with-Irish-Whiskey-and-Cream-Pan-Sauce.png"
    },
    {
    title: "Fettuccine with Red Clam Sauce ",
    calories: 918,
    protein: 68,
    fat: 25,
    sodium: 2227,
    image: "https://i.pinimg.com/originals/e9/73/27/e9732792af2cc632b1a3360983822d2c.jpg"
    },
    {
    title: "Sunday Supper Macaroni and Cheese ",
    calories: 804,
    protein: 33,
    fat: 34,
    sodium: 1087,
    image: "https://sundaysuppermovement.com/wp-content/uploads/2018/02/Bacon-Macaroni-and-Cheese-In-Content.jpg"
    },
    {
    title: "Broccoli Rabe and Red Bell Pepper Frittata ",
    calories: 400,
    protein: 25,
    fat: 29,
    sodium: 1044,
    image: "https://fitbottomedgirls.com/wp-content/uploads/2020/02/Frittata-Broccoli-Rabe-and-Sheeps-Cheese-800.jpg"
    },
    {
    title: "Caramelized-Onion Pizza with Mushrooms ",
    calories: 632,
    protein: 16,
    fat: 24,
    sodium: 724,
    image: "https://i.ytimg.com/vi/KCc_6PHZQAM/maxresdefault.jpg"
    },
    {
    title: "Springtime Bow Ties with Ham and Asiago ",
    calories: 810,
    protein: 46,
    fat: 21,
    sodium: 1174,
    image: "https://i.pinimg.com/originals/1a/db/6c/1adb6c17eeb174953465b4cf537320c1.jpg"
    },
    {
    title: "Tomato-Anchovy Pasta ",
    calories: 1106,
    protein: 44,
    fat: 40,
    sodium: 1460,
    image: "https://assets.epicurious.com/photos/55f72d733c346243461d496e/1:1/w_2560%2Cc_limit/09112015_15minute_pastasauce_tomato.jpg"
    },
    {
    title: "Maple-Glazed Turkey with Dijon Gravy ",
    calories: 1069,
    protein: 149,
    fat: 36,
    sodium: 655,
    image: "https://i.pinimg.com/originals/06/b4/20/06b4208cb4c80858626954a0c9daf2b7.jpg"
    },
    {
    title: "Black Bean Soup with Cumin and Jalape�o ",
    calories: 320,
    protein: 17,
    fat: 9,
    sodium: 467,
    image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Texas-Black-Bean-Soup_EXPS_HSCBZ17_12816_B07_28_4b.jpg?resize=1024"
    },
    {
    title: "Smoked Fish Chowder ",
    calories: 623,
    protein: 31,
    fat: 37,
    sodium: 1298,
    image: "https://nourishmagazine.co.nz/wp-content/uploads/2019/05/Smoked-Fish-Chowder.jpg"
    },
    {
    title: "Pork, Mushroom, and Snow-Pea Stir-Fry ",
    calories: 464,
    protein: 53,
    fat: 23,
    sodium: 476,
    image: "https://1.bp.blogspot.com/-NuEVXoXJK-o/X2XHodRsKoI/AAAAAAAAPTM/h0Vfy_x7U0M3P72L8CMCIVy2MyuigEwbACNcBGAsYHQ/s1280/DSCN2172a.JPG"
    },
    {
    title: "Broiled Lemon Thyme Pollock ",
    calories: 333,
    protein: 32,
    fat: 23,
    sodium: 467,
    image: "http://www.epicurious.com/images/recipesmenus/2008/2008_december/350901.jpg"
    },
    {
    title: "Sake Kasu-Marinated Sea Bass with Coconut Green Curry Sauce ",
    calories: 330,
    protein: 38,
    fat: 7,
    sodium: 1877,
    image: "https://blog.williams-sonoma.com/wp-content/uploads/2018/10/oct-11-Coconut-Sea-Bass-Curry.jpg"
    },
    {
    title: "Maple-Soy-Glazed Salmon ",
    calories: 431,
    protein: 36,
    fat: 23,
    sodium: 993,
    image: "https://www.cookingclassy.com/wp-content/uploads/2018/09/salmon-creamy-garlic-dijon-sauce-1.jpg"
    },
    {
    title: "Southeast Asian Turkey Burgers ",
    calories: 576,
    protein: 41,
    fat: 30,
    sodium: 884,
    image: "http://1.bp.blogspot.com/-OYpByqX9LY0/TftzjAAF8hI/AAAAAAAAAMg/ys_TMr1yoAk/w1200-h630-p-k-no-nu/Southeast+Asian+Burgers+Done.jpg"
    },
    {
    title: "Orecchiette with Spiced Duck Rag� ",
    calories: 489,
    protein: 23,
    fat: 24,
    sodium: 249,
    image: "nan"
    },
    {
    title: "Smoked Fish Trio ",
    calories: 783,
    protein: 98,
    fat: 40,
    sodium: 421,
    image: "https://res.cloudinary.com/dzmyhjsky/image/upload/h_550,ar_6:4,c_pad,g_north,b_white,q_auto:good,f_auto/v1594631769/suppliers/the-weald-smokery/products/smoked-fish-trio1594631777.jpg"
    },
    {
    title: "Lobster and Confetti Vegetable Salad ",
    calories: 317,
    protein: 27,
    fat: 7,
    sodium: 611,
    image: "https://lepetiteats.com/wp-content/uploads/2017/06/Lobster-Salad-5-1-800x1200.jpg"
    },
    {
    title: "Pasta with Meat Sauce ",
    calories: 645,
    protein: 32,
    fat: 26,
    sodium: 503,
    image: "https://www.thespruceeats.com/thmb/hM7VYaeld6z00D4V6l-43dt-Xfs=/2500x2519/filters:fill(auto,1)/meat-sauce-spaghetti-2500-56dc8ae53df78c5ba053531b.jpg"
    },
    {
    title: "Pan-Seared Petrale Sole with Local Winter Vegetables ",
    calories: 866,
    protein: 127,
    fat: 32,
    sodium: 4646,
    image: "nan"
    },
    {
    title: "Pizza with Fontina, Prosciutto, and Arugula ",
    calories: 732,
    protein: 40,
    fat: 36,
    sodium: 2147,
    image: "https://i.pinimg.com/originals/a5/00/13/a50013853f5deeff6a16445d6382fadb.jpg"
    },
    {
    title: "Hoppin' John Risotto ",
    calories: 649,
    protein: 16,
    fat: 29,
    sodium: 868,
    image: "https://veryvera.wierstewarthosting.com/wp-content/uploads/2016/03/03095632/risotto-hoppin-john-web.jpg"
    },
    {
    title: "Orange Roughy with Tomato-Cilantro Salsa ",
    calories: 336,
    protein: 31,
    fat: 15,
    sodium: 134,
    image: "nan"
    },
    {
    title: "Barley, Cauliflower, and Herbs with Burrata ",
    calories: 411,
    protein: 21,
    fat: 22,
    sodium: 493,
    image: "https://i.pinimg.com/originals/85/b6/5f/85b65f9476e6643d6478c9fa497f04eb.png"
    },
    {
    title: "Duck Bigarade ",
    calories: 324,
    protein: 42,
    fat: 9,
    sodium: 209,
    image: "http://assets.epicurious.com/photos/557752d274cbe9ed7c209987/1:1/w_600%2Ch_600/51197620_duck-bigarade_6x4.jpg"
    },
    {
    title: "Ginger-Marinated Pork Tenderloin ",
    calories: 919,
    protein: 87,
    fat: 31,
    sodium: 4704,
    image: "https://www.plainchicken.com/wp-content/uploads/2020/09/ginger-marinated-pork-tenderloin-1-1-427x640.jpg"
    },
    {
    title: "Chicken, Ham and Fennel Pot Pies ",
    calories: 706,
    protein: 38,
    fat: 40,
    sodium: 761,
    image: "https://images.cookforyourlife.org/wp-content/uploads/2015/08/shutterstock_626255105_Fennel-Chicken-Pot-Pie.jpg"
    },
    {
    title: "Roasted Salmon with Horseradish Cr�me Fra�che ",
    calories: 609,
    protein: 41,
    fat: 39,
    sodium: 4843,
    image: "https://www.whatscookinchicago.com/wp-content/uploads/2009/11/DSC_1094-9308439.jpg"
    },
    {
    title: "Curried Lentil Soup ",
    calories: 345,
    protein: 21,
    fat: 7,
    sodium: 91,
    image: "http://abeautifulmess.com/wp-content/uploads/2020/02/curried-lentil-soup-recipe.jpg"
    },
    {
    title: "Braised Chicken with Onions and Herbs ",
    calories: 490,
    protein: 50,
    fat: 27,
    sodium: 173,
    image: "https://blog.williams-sonoma.com/wp-content/uploads/2012/12/WS_WkNtFF_BrsdChkn_357.jpg"
    },
    {
    title: "Baked Grits with Ham, Wild Mushrooms and Parmesan ",
    calories: 466,
    protein: 16,
    fat: 33,
    sodium: 995,
    image: "https://i.pinimg.com/originals/5a/ce/44/5ace440dda3b1594d2ed804bc63afba0.jpg"
    },
    {
    title: "Coffee-Marinated Skirt Steak ",
    calories: 461,
    protein: 35,
    fat: 29,
    sodium: 291,
    image: "https://healthyrecipesblogs.com/wp-content/uploads/2021/04/skirt-steak-1-2021.jpg"
    },
    {
    title: "Baked Macaroni and Cheese ",
    calories: 463,
    protein: 19,
    fat: 21,
    sodium: 681,
    image: "https://i1.wp.com/1.bp.blogspot.com/-RJhWevqpDis/WJY8TbrBIhI/AAAAAAAAIV4/UolSdz8JL6ovWNfdft9xZazzpUcaGmAKwCEw/s1600/DSC_0009.JPG?ssl=1"
    },
    {
    title: "Shrimp with Tomatoes, Fennel and Oregano ",
    calories: 386,
    protein: 16,
    fat: 30,
    sodium: 728,
    image: "https://mindbody.b-cdn.net/wp-content/uploads/2021/07/Shrimp-tomatoes-fennel.jpeg"
    },
    {
    title: "Prune, Apple, and Chestnut Bread Pudding ",
    calories: 775,
    protein: 23,
    fat: 37,
    sodium: 1055,
    image: "https://200birdies.files.wordpress.com/2013/11/2013-1102-img_3442-apple-prune-bread-pudding.jpg?w=1666"
    },
    {
    title: "Flatbread Pizzas with Olives, Feta and Artichokes ",
    calories: 702,
    protein: 34,
    fat: 34,
    sodium: 1879,
    image: "https://midwestfoodieblog.com/wp-content/uploads/2020/04/FINAL-mediterranean-flatbread-1-6-768x1152.jpg"
    },
    {
    title: "Parsnip and Cheddar Souffl� ",
    calories: 335,
    protein: 15,
    fat: 22,
    sodium: 653,
    image: "nan"
    },
    {
    title: "Sea Bass with Lemon Caper Fettuccine ",
    calories: 518,
    protein: 39,
    fat: 20,
    sodium: 221,
    image: "https://gustotv.com/wp-content/uploads/2020/06/1005-pan-seared-sea-bass-with-.png"
    },
    {
    title: "Pomegranate and Fennel Glazed Rack of Lamb ",
    calories: 396,
    protein: 15,
    fat: 36,
    sodium: 60,
    image: "https://staginggelsons.azureedge.net/uploads/images/legacy/content/svu-retail-independents/g/gelsons/en/about/news-and-events/blog/pomegranate---fennel-glazed-rack-of-lamb/_jcr_content/par/image.img.jpg/1569350961743_2021-10-01-192749_hucs.jpg"
    },
    {
    title: "Crab Linguine with Basil, Lemon & Chile ",
    calories: 538,
    protein: 23,
    fat: 20,
    sodium: 367,
    image: "https://i.pinimg.com/originals/50/be/92/50be9247dbf4d322d6ad02d486c7a834.jpg"
    },
    {
    title: "Easy Beef Lo Mein ",
    calories: 687,
    protein: 48,
    fat: 25,
    sodium: 1892,
    image: "https://lessmeatmoreveg.com/wp-content/uploads/2021/03/1617067358_Easy-Beef-Lo-Mein-recipe-683x1024.jpg"
    },
    {
    title: "Chilled Red Pepper Soup with Basil and Croutons ",
    calories: 522,
    protein: 15,
    fat: 23,
    sodium: 614,
    image: "https://i.pinimg.com/originals/cc/aa/42/ccaa42fd86d6c8a9381eaacb59f15aa5.jpg"
    },
    {
    title: "Winter Minestrone ",
    calories: 361,
    protein: 15,
    fat: 18,
    sodium: 519,
    image: "https://res.cloudinary.com/skcc/image/fetch/c_limit,dpr_auto,f_auto,q_60,w_1200/https://skcc-media.s3.us-west-2.amazonaws.com/aff6a36a-abd1-4a61-b82c-868c0440c58c.jpeg"
    },
    {
    title: "Braised Veal Shoulder with Gremolata and Tomato-Olive Salad ",
    calories: 478,
    protein: 57,
    fat: 22,
    sodium: 396,
    image: "https://img.jamieoliver.com/jamieoliver/recipe-database/46257999.jpg?tr=w-800,h-1066"
    },
    {
    title: "Carrot Cake Smoothie ",
    calories: 403,
    protein: 20,
    fat: 20,
    sodium: 233,
    image: "https://jillianharris.com/wp-content/uploads/2019/04/Jillian-Harris-Carrot-Cake-Smoothie-Recipe-1.jpg"
    },
    {
    title: "Sea Bass with Shallots, Garlic and Marsala ",
    calories: 392,
    protein: 41,
    fat: 14,
    sodium: 276,
    image: "https://i.pinimg.com/originals/1f/f1/78/1ff178254261573349d0d01fa164cb9e.jpg"
    },
    {
    title: "Linguine with Scampi ",
    calories: 814,
    protein: 31,
    fat: 37,
    sodium: 656,
    image: "https://vikalinka.com/wp-content/uploads/2019/02/Shrimp-Scampi-Linguine-6-Edit.jpg"
    },
    {
    title: "Duck Breast with Roasted Peaches and Walnut-Parsley Fried Rice ",
    calories: 665,
    protein: 56,
    fat: 18,
    sodium: 3295,
    image: "https://cookbookreviewdotblog.files.wordpress.com/2021/03/roasted-duck-breast.jpg?w=409&amp;h=566"
    },
    {
    title: "Spicy Braised Chicken with Mushrooms and Star Anise ",
    calories: 578,
    protein: 55,
    fat: 27,
    sodium: 870,
    image: "https://thewoksoflife.com/wp-content/uploads/2021/03/chinese-braised-chicken-mushrooms-12.jpg"
    },
    {
    title: "Kale and Mushrooms with Creamy Polenta ",
    calories: 625,
    protein: 21,
    fat: 35,
    sodium: 615,
    image: "https://www.drfuhrman.com/rollups/b10be8926ae2f3c1fdb4783e18edeb560a5635ade63a7853861f5ed085637111.jpg"
    },
    {
    title: "Grilled Pork Chops with Maple-Cranberry Glaze ",
    calories: 496,
    protein: 19,
    fat: 29,
    sodium: 1078,
    image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Grilled-Maple-Pork-Chops_EXPS_FTTMZ19_113362_C03_05_4b_rms-5.jpg"
    },
    {
    title: "Grilled T-Bone Steaks with Worcestershire-Chive Butter ",
    calories: 433,
    protein: 18,
    fat: 38,
    sodium: 160,
    image: "https://assets.epicurious.com/photos/57bb358bfd214db6472a3179/16:9/w_1280,c_limit/grilled-t-bone-steaks.jpg"
    },
    {
    title: "Sauteed Red Snapper Fillets with Fennel and Orange ",
    calories: 356,
    protein: 36,
    fat: 19,
    sodium: 110,
    image: "https://i.pinimg.com/originals/53/b2/f6/53b2f6244d88781448157f5bdb09ae6a.jpg"
    },
    {
    title: "Slow-Baked Salmon with Avruga Caviar Sauce ",
    calories: 509,
    protein: 44,
    fat: 35,
    sodium: 816,
    image: "https://tasteofmissions.com/wp-content/uploads/2021/07/Oven-baked-Salmon-with-Caviar-Sauce-500x500.jpg"
    },
    {
    title: "Chicken with Peppers and Tomatoes ",
    calories: 399,
    protein: 55,
    fat: 15,
    sodium: 332,
    image: "https://mommymoment.ca/wp-content/uploads/2016/05/CHICKEN-WITH-MUIR-GLEN-TOMATOES-AND-PEPPERS.jpg"
    },
    {
    title: "Tarragon-Lime Chicken ",
    calories: 407,
    protein: 53,
    fat: 20,
    sodium: 107,
    image: "https://i.pinimg.com/736x/d8/de/b2/d8deb2b8f954e34bea2493534f6f3514.jpg"
    },
    {
    title: "Roasted Pork Chops with Serrano Ham Vinaigrette ",
    calories: 532,
    protein: 21,
    fat: 39,
    sodium: 641,
    image: "https://i.pinimg.com/originals/5a/0b/b3/5a0bb3f217c43b50be624b4c6571fa32.jpg"
    },
    {
    title: "Pasta Salad with Mozzarella, Sun-Dried Tomatoes and Olives ",
    calories: 466,
    protein: 18,
    fat: 23,
    sodium: 453,
    image: "nan"
    },
    {
    title: "Boston Marathon Chili ",
    calories: 448,
    protein: 29,
    fat: 29,
    sodium: 391,
    image: "https://www.runningusa.org/wp-content/uploads/2023/07/Boston-marathon-start.jpg"
    },
    {
    title: "Chicken, Shrimp and Beef Sates with Peanut Sauce ",
    calories: 540,
    protein: 41,
    fat: 31,
    sodium: 1907,
    image: "https://i.pinimg.com/originals/89/9b/31/899b31fc5d206a36b4cffa250d94c766.png"
    },
    {
    title: "Roast Pork Lo Mein ",
    calories: 552,
    protein: 26,
    fat: 19,
    sodium: 895,
    image: "http://assets.epicurious.com/photos/56017167d296e7ab46e9dd64/master/pass/51149600_roast-pork-lo-mein.jpg"
    },
    {
    title: "Ground Sirloin Patties with Red Wine Sauce ",
    calories: 510,
    protein: 24,
    fat: 34,
    sodium: 651,
    image: "https://i.pinimg.com/originals/08/96/fc/0896fc739ab2ec76fa12ba38c9b488be.jpg"
    },
    {
    title: "Roast Magret Duck Breasts with Shaved Black Truffles ",
    calories: 648,
    protein: 70,
    fat: 31,
    sodium: 459,
    image: "https://friendseat.com/wp-content/uploads/2018/04/ROAST-MAGRET-DUCK-BREASTS-WITH-SHAVED-BLACK-TRUFFLES-RECIPE.jpg"
    },
    {
    title: "Cumin-Chile Lamb Kebabs With Garlic Yogurt ",
    calories: 495,
    protein: 30,
    fat: 38,
    sodium: 146,
    image: "https://disheswithdad.com/wp-content/uploads/2020/05/yogurt-lamb-kebabs-5-720x720.jpg"
    },
    {
    title: "Veal, Carrot and Chestnut Rago�t ",
    calories: 488,
    protein: 45,
    fat: 20,
    sodium: 225,
    image: "http://2.bp.blogspot.com/-FZLnNHrXlqc/VngPUFFREoI/AAAAAAAACEI/FzszWgS-tDc/s1600/Veal%252C%2BChestnut%2Band%2BCarrot%2BRagu%2B2%2B-%2BCopy.jpg"
    },
    {
    title: "Moroccan-Spiced Chicken Paillards ",
    calories: 479,
    protein: 42,
    fat: 31,
    sodium: 854,
    image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https:%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2019%2F12%2F23%2F7544638.jpg"
    },
    {
    title: "Fish Cakes with Caper-Parsley Sauce ",
    calories: 401,
    protein: 22,
    fat: 18,
    sodium: 402,
    image: "https://www.simplywhisked.com/wp-content/uploads/2018/07/Fish-Cakes-3.jpg"
    },
    {
    title: "Yummy Mummy Meatloaf ",
    calories: 720,
    protein: 33,
    fat: 35,
    sodium: 1224,
    image: "http://assets.epicurious.com/photos/5609a632e0acd286555db9e0/master/pass/355709_hires.jpg"
    },
    {
    title: "Asparagus, Ham, and Cheese Melts ",
    calories: 638,
    protein: 31,
    fat: 40,
    sodium: 1503,
    image: "https://i.pinimg.com/originals/bd/40/24/bd40241226b92e7b33063c826bf74554.jpg"
    },
    {
    title: "Spinach Shakshuka ",
    calories: 434,
    protein: 21,
    fat: 33,
    sodium: 1249,
    image: "https://typhoonleisure.com/wp-content/uploads/2020/09/Spinach-Shakshuka-scaled.jpg"
    },
    {
    title: "Pasta Fazool Casserole ",
    calories: 710,
    protein: 44,
    fat: 33,
    sodium: 1287,
    image: "nan"
    },
    {
    title: "Lobster, Corn, and Potato Salad with Tarragon ",
    calories: 832,
    protein: 117,
    fat: 20,
    sodium: 3212,
    image: "http://www.framedcooks.com/wp-content/uploads/2010/07/Screen-Shot-2015-09-06-at-10.12.46-AM.png"
    },
    {
    title: "Lobster and Pineapple Salad with Basil and Mint ",
    calories: 381,
    protein: 51,
    fat: 7,
    sodium: 1850,
    image: "https://i.pinimg.com/736x/35/ac/7d/35ac7da85cab381d1f12317af8b2d29d--lobster-salad-lobsters.jpg"
    },
    {
    title: "Italian Vegetable Stew ",
    calories: 559,
    protein: 21,
    fat: 25,
    sodium: 1258,
    image: "https://12onions.com/wp-content/uploads/2020/11/italian_vegetable_stew.jpg"
    },
    {
    title: "Haddock in Charmoula Sauce ",
    calories: 457,
    protein: 40,
    fat: 24,
    sodium: 1271,
    image: "https://i.pinimg.com/originals/19/04/b3/1904b31337aa7b73a0c28750daa75c56.png"
    },
    {
    title: "Pan-Baked Lemon Sole with Spinach, Olives, and Tomatoes ",
    calories: 387,
    protein: 28,
    fat: 24,
    sodium: 1071,
    image: "nan"
    },
    {
    title: "Saute�d Chicken Cutlets with Asparagus, Spring Onions, and Parsley-Tarragon Gremolata ",
    calories: 337,
    protein: 36,
    fat: 17,
    sodium: 125,
    image: "https://i.pinimg.com/originals/3e/e5/ac/3ee5acbd2ea9735dad3b9f39fdf906aa.jpg"
    },
    {
    title: "Mushroom and Brown Rice Veggie Burger ",
    calories: 859,
    protein: 35,
    fat: 30,
    sodium: 1018,
    image: "https://i.pinimg.com/736x/2d/df/f2/2ddff2ad0b148125457a70942de18aeb.jpg"
    },
    {
    title: "Shellfish Mixed Grill ",
    calories: 502,
    protein: 85,
    fat: 14,
    sodium: 2900,
    image: "http://assets.epicurious.com/photos/54bd6f452a4b69f8647ec174/1:1/w_600,h_600/shellfish-mixed-grill-6x4.jpg"
    },
    {
    title: "Tuna Noodle Casserole with Mushrooms and Fresh Herbs ",
    calories: 821,
    protein: 37,
    fat: 37,
    sodium: 604,
    image: "https://freshlyhomecooked.com/wp-content/uploads/2019/12/Tuna-noodle-casserole-1.jpg"
    },
    {
    title: "Panfried Tofu with Asian Caramel Sauce ",
    calories: 558,
    protein: 18,
    fat: 40,
    sodium: 687,
    image: "nan"
    },
    {
    title: "Warm Goat Cheese, Beet and Arugula Sandwiches ",
    calories: 396,
    protein: 15,
    fat: 21,
    sodium: 648,
    image: "https://i.pinimg.com/originals/32/08/f3/3208f304ac9b14e7ba4dc527208acdb8.jpg"
    },
    {
    title: "Seared Duck Breasts with Red-Wine Sauce and Candied Kumquats ",
    calories: 404,
    protein: 49,
    fat: 11,
    sodium: 175,
    image: "https://overthefirecooking.com/wp-content/uploads/2021/12/F_IMG_8774-2-scaled.jpg"
    },
    {
    title: "Duck with Walnut Sherry Vinaigrette ",
    calories: 483,
    protein: 46,
    fat: 30,
    sodium: 567,
    image: "http://tappecue.net/sessionImages/recipes/duck-with-walnut-sherry-vinaigrette-233794.jpg"
    },
    {
    title: "Country Ham Cheesecake ",
    calories: 450,
    protein: 15,
    fat: 37,
    sodium: 675,
    image: "https://i.pinimg.com/originals/a6/9e/a8/a69ea8d90bb2bac376e87365b8fef0e4.jpg"
    },
    {
    title: "Shrimp and Scallop Curry ",
    calories: 632,
    protein: 31,
    fat: 36,
    sodium: 970,
    image: "https://www.lakewinds.coop/wp-content/uploads/2018/02/Shrimp-Curry.jpeg"
    },
    {
    title: "Chile Jam Chicken With Caramelized Sweet Potatoes and Peaches ",
    calories: 629,
    protein: 17,
    fat: 33,
    sodium: 1376,
    image: "https://i.pinimg.com/736x/55/1e/20/551e20bb50109213997c8a6158eb0c32.jpg"
    },
    {
    title: "Duck Breasts with Coriander, Endive, and Sweet-and-Sour Orange Sauce ",
    calories: 509,
    protein: 44,
    fat: 17,
    sodium: 227,
    image: "https://www.krumpli.co.uk/wp-content/uploads/2021/05/Duck-Breast-with-Orange-Sauce-02.jpg"
    },
    {
    title: "Ham Steak with Cider Raisin Sauce ",
    calories: 769,
    protein: 65,
    fat: 38,
    sodium: 6154,
    image: "https://oursaltykitchen.com/wp-content/uploads/2020/04/raisin-sauce-for-ham-3-1.jpg"
    },
    {
    title: "Minted Lamb Burgers ",
    calories: 505,
    protein: 28,
    fat: 35,
    sodium: 249,
    image: "http://charlotteslivelykitchen.com/wp-content/uploads/2017/06/Mint-Burger-1.jpg"
    },
    {
    title: "Pan-Grilled Paillards of Duck ",
    calories: 321,
    protein: 46,
    fat: 10,
    sodium: 1294,
    image: "nan"
    },
    {
    title: "Moroccan Chicken with Preserved Meyer Lemons and Green Olives ",
    calories: 406,
    protein: 55,
    fat: 15,
    sodium: 321,
    image: "https://i.pinimg.com/originals/55/78/03/5578038ffa59ac564bb1465d03c923e6.jpg"
    },
    {
    title: "Fish with Curried Cucumber Tomato Water and Tomato Herb Salad ",
    calories: 411,
    protein: 72,
    fat: 9,
    sodium: 421,
    image: "https://www.giverecipe.com/wp-content/uploads/2022/02/Turkish-tomato-salad.jpg"
    },
    {
    title: "Mussels in Green Peppercorn Sauce ",
    calories: 540,
    protein: 55,
    fat: 22,
    sodium: 1309,
    image: "https://assets.epicurious.com/photos/54b313d53edeef84363b9efa/1:1/w_600%2Ch_600/358019_mussels-green-peppercorn-sauce_1x1.jpg"
    },
    {
    title: "Jerusalem Artichoke and Artichoke Heart Linguine ",
    calories: 700,
    protein: 20,
    fat: 21,
    sodium: 1869,
    image: "http://assets.epicurious.com/photos/54b06432fca98987608b2298/master/pass/51127600_artichoke-heart-linguine_1x1.jpg"
    },
    {
    title: "Spicy Black Beans with Chorizo and Chipotle Cream ",
    calories: 330,
    protein: 15,
    fat: 17,
    sodium: 240,
    image: "https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2019/03/05/Food/Images/v-rr-blackbeans_01leadweb.jpg?t=20170517"
    },
    {
    title: "Chicken Tikka ",
    calories: 345,
    protein: 53,
    fat: 12,
    sodium: 474,
    image: "http://2.bp.blogspot.com/_FZ_ZvqwjtxE/TLS-dqYtIvI/AAAAAAAAAXI/gaqjSPvQEFo/s1600/Chicken+Tikka+pic.jpg"
    },
    {
    title: "Cornmeal Crepes with Ricotta and Ham ",
    calories: 567,
    protein: 22,
    fat: 24,
    sodium: 1066,
    image: "http://www.gourmet.com.s3-website-us-east-1.amazonaws.com/images/recipes/2004/07/re-savorypancakes-cornmeal-cakes-ricottaham608.jpg"
    },
    {
    title: "Salmon with Pistachio-Basil Butter ",
    calories: 528,
    protein: 36,
    fat: 40,
    sodium: 103,
    image: "http://images.heb.com/is/image/HEBGrocery/recipe-hm-large/salmon-with-pistachio-basil-butter-recipe.jpg"
    },
    {
    title: "Mexican Pasta with Black Beans ",
    calories: 1021,
    protein: 39,
    fat: 16,
    sodium: 1551,
    image: "https://www.wellplated.com/wp-content/uploads/2017/05/Mexican-Pasta-Salad-recipe.jpg"
    },
    {
    title: "Steamed Mussels in Thai Curry Sauce ",
    calories: 519,
    protein: 32,
    fat: 38,
    sodium: 1202,
    image: "https://more.ctv.ca/content/dam/lifestyle/uploadImg/2019/11/5/steamed-mussels-in-red-thai-curry-sauce.jpg"
    },
    {
    title: "Chicken Salad with Lentils, Peas and Mint ",
    calories: 503,
    protein: 48,
    fat: 18,
    sodium: 163,
    image: "https://assets.marthastewart.com/styles/wmax-1500/d27/6038_110410_chicken_lentils/6038_110410_chicken_lentils_hd.jpg?itok=fmMxnWjc"
    },
    {
    title: "Grilled Apple-and Herb-Marinated Pork Chops and Potatoes ",
    calories: 609,
    protein: 45,
    fat: 28,
    sodium: 1012,
    image: "https://www.recipetineats.com/wp-content/uploads/2016/09/Baked-Pork-Chops_2.jpg"
    },
    {
    title: "Trout with Peppercorn Crust, Bacon and Red Cabbage ",
    calories: 596,
    protein: 58,
    fat: 33,
    sodium: 445,
    image: "https://assets.epicurious.com/photos/55fc4fa8393f29a26aca904d/1:1/w_600%2Ch_600/51238030_bacon-wrapped-trout.jpg"
    },
    {
    title: "Orecchiette with Red-Wine Veal Sauce ",
    calories: 826,
    protein: 53,
    fat: 21,
    sodium: 344,
    image: "nan"
    },
    {
    title: "Potato and Cabbage Bundles ",
    calories: 592,
    protein: 18,
    fat: 29,
    sodium: 851,
    image: "https://www.themagicalslowcooker.com/wp-content/uploads/2019/04/Potatoes-Cabbage-and-Kielbasa-5-800x1200.jpg"
    },
    {
    title: "Fish-and-Chips ",
    calories: 620,
    protein: 34,
    fat: 10,
    sodium: 381,
    image: "https://fthmb.tqn.com/uALIO4N-VCYA5SXIguM_9sJfEnk=/3606x2352/filters:fill(auto,1)/IMG_5442-58b427d35f9b586046d8dfa1.JPG"
    },
    {
    title: "Olive and Fennel Tuna Melts ",
    calories: 504,
    protein: 33,
    fat: 31,
    sodium: 822,
    image: "nan"
    },
    {
    title: "Lemony Rice Soup with Ham and Spring Vegetables ",
    calories: 457,
    protein: 31,
    fat: 22,
    sodium: 1159,
    image: "https://www.simplyscratch.com/wp-content/uploads/2019/02/Creamy-Chicken-Lemon-Rice-Soup-l-SimplyScratch.com-lemon-chicken-rice-soup-homemade-easy-recipe-fromscratch-healthy-11-1200x1798.jpg"
    },
    {
    title: "Detox Pho with Beef, Mushrooms, and Kale ",
    calories: 386,
    protein: 35,
    fat: 9,
    sodium: 1204,
    image: "https://i.pinimg.com/736x/03/7a/bc/037abcfc1c95b3bd6ff77cc3ddafcdac--detox-recipes-paleo-recipes.jpg"
    },
    {
    title: "Warm Orzo Salad with Grilled Shrimp and Feta Downer-Hazell ",
    calories: 704,
    protein: 31,
    fat: 33,
    sodium: 797,
    image: "https://reciperunner.com/wp-content/uploads/2019/08/Shrimp-Orzo-Salad-Feta-Herbs-Pic-735x1095.jpg"
    },
    {
    title: "Tofu Rigatoni Casserole ",
    calories: 602,
    protein: 35,
    fat: 28,
    sodium: 1024,
    image: "http://assets.epicurious.com/photos/560dd82df9a84192308a4fcf/master/pass/239219_hires.jpg"
    },
    {
    title: "Peppered Pork Tenderloin with Cherry Salsa ",
    calories: 361,
    protein: 37,
    fat: 13,
    sodium: 94,
    image: "https://www.poncacitynews.com/sites/poncacitynews.etypegoogle7.com/files/38edb80f6c_Ar00602004.jpg"
    },
    {
    title: "Orecchiette with Broccoli Rabe and Fried Chickpeas ",
    calories: 730,
    protein: 28,
    fat: 26,
    sodium: 537,
    image: "nan"
    },
    {
    title: "Pork Medallions with Mustard-Chive Sauce ",
    calories: 334,
    protein: 33,
    fat: 18,
    sodium: 191,
    image: "http://img.sndimg.com/food/image/upload/w_614,h_461,c_fit/v1/img/recipes/10/38/90/picZbZBIE.jpg"
    },
    {
    title: "Steamed Whole Red Snapper with Asian Flavors ",
    calories: 406,
    protein: 52,
    fat: 17,
    sodium: 829,
    image: "https://www.foodrepublic.com/wp-content/uploads/2011/07/Whole-Red-Snapper.jpg"
    },
    {
    title: "Pasta with Grilled Vegetables and Feta ",
    calories: 453,
    protein: 18,
    fat: 12,
    sodium: 466,
    image: "https://www.spendwithpennies.com/wp-content/uploads/2021/07/SpendWithPennies-Roasted-Veggie-Baked-Feta-Pasta-1-2-500x500.jpg"
    },
    {
    title: "Turkey, Tomato, Ricotta, and Mozzarella Lasagne ",
    calories: 568,
    protein: 42,
    fat: 23,
    sodium: 562,
    image: "https://i.pinimg.com/originals/e9/28/02/e9280209fb95839112b4af249219826e.jpg"
    },
    {
    title: "Red-Cooked Pork with Frizzled Ginger ",
    calories: 806,
    protein: 96,
    fat: 37,
    sodium: 3020,
    image: "https://myincrediblerecipes.com/wp-content/uploads/2017/02/Ginger-Pork11.jpg"
    },
    {
    title: "Scallops with Bell Peppers, Tomatoes, Avocado and Mango ",
    calories: 381,
    protein: 23,
    fat: 19,
    sodium: 679,
    image: "https://instantpot.com.sg/wp-content/uploads/2021/02/Seared-Scallops-with-Pesto-and-Pan-Roasted-Bell-Peppers.jpg"
    },
    {
    title: "Beef, Mushroom, and Broccoli Stir-Fry ",
    calories: 650,
    protein: 38,
    fat: 40,
    sodium: 1298,
    image: "https://hostessatheart.com/wp-content/uploads/2020/12/Beef-and-Broccoli-Stir-Fry-4.jpg"
    },
    {
    title: "Turkey Soup with Orzo and White Beans ",
    calories: 591,
    protein: 49,
    fat: 27,
    sodium: 529,
    image: "https://kitchenconfidante.com/wp-content/uploads/2021/11/Turkey-Orzo-Soup-kitchenconfidante.com-1429.jpg"
    },
    {
    title: "Black Bean, Sausage, and Sweet Potato Soup ",
    calories: 486,
    protein: 30,
    fat: 8,
    sodium: 438,
    image: "https://i2.wp.com/glorioussouprecipes.com/wp-content/uploads/2015/01/Black-Bean-Sausage-and-Sweet-Potato-Soup.jpeg?fit=784%2C1183&amp;ssl=1"
    },
    {
    title: "Classic Meat Loaf with Roasted Vegetables ",
    calories: 606,
    protein: 45,
    fat: 21,
    sodium: 1427,
    image: "https://irepo.primecp.com/2019/05/412304/Classic-Beef-Meatloaf_ExtraLarge1000_ID-3228213.jpg?v=3228213"
    },
    {
    title: "Corn, Tomato, and Lobster Salad ",
    calories: 534,
    protein: 36,
    fat: 22,
    sodium: 1040,
    image: "https://i.pinimg.com/originals/64/e9/58/64e9588f0109d3605dca153ea1ba9b6c.jpg"
    },
    {
    title: "Chilled Zucchini Soup with Lemon-Cumin Shrimp and Cilantro Cream ",
    calories: 323,
    protein: 24,
    fat: 15,
    sodium: 551,
    image: "https://i.pinimg.com/originals/8e/f7/89/8ef789f58f1e1e28b14af76c15768262.jpg"
    },
    {
    title: "Pasta with Arugula and Plum Tomatoes ",
    calories: 799,
    protein: 35,
    fat: 28,
    sodium: 503,
    image: "https://1.bp.blogspot.com/-_vyjAt7V4PE/T6Wxr1TLDNI/AAAAAAAABfA/_AxBawkF1w0/s1600/arugula+pasta.JPG"
    },
    {
    title: "Scrambled Egg Pasta ",
    calories: 595,
    protein: 26,
    fat: 32,
    sodium: 1308,
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2018/11/egg-pasta.jpg"
    },
    {
    title: "Smoked Fish Trio ",
    calories: 783,
    protein: 98,
    fat: 40,
    sodium: 421,
    image: "https://res.cloudinary.com/dzmyhjsky/image/upload/h_550,ar_6:4,c_pad,g_north,b_white,q_auto:good,f_auto/v1594631769/suppliers/the-weald-smokery/products/smoked-fish-trio1594631777.jpg"
    },
    {
    title: "Grilled Chicken with Soy-Lime Sauce ",
    calories: 324,
    protein: 56,
    fat: 7,
    sodium: 1002,
    image: "https://www.rewriteyourstory.in/wp-content/uploads/2021/02/Grilled-Chicken-in-Lime-Sauce.jpg"
    },
    {
    title: "Butternut Squash, Rosemary, and Blue Cheese Risotto ",
    calories: 961,
    protein: 31,
    fat: 35,
    sodium: 808,
    image: "https://www.recipegirl.com/wp-content/uploads/2009/09/Butternut-Squash-Rosemary-and-Blue-Cheese-Risotto-3.jpg"
    },
    {
    title: "Italian Sausage Pasta Salad ",
    calories: 628,
    protein: 28,
    fat: 27,
    sodium: 678,
    image: "https://www.orwhateveryoudo.com/wp-content/uploads/2015/05/Italian-Sausage-Pasta-Salad-3.jpg"
    },
    {
    title: "Lobster and Stone Crab Enchilado ",
    calories: 1089,
    protein: 161,
    fat: 35,
    sodium: 4136,
    image: "https://i.pinimg.com/736x/ee/fe/77/eefe7799809211b76af954ad9e29ea0c.jpg"
    },
    {
    title: "Crab and Corn Chowder with Bacon ",
    calories: 558,
    protein: 32,
    fat: 29,
    sodium: 1308,
    image: "https://i1.wp.com/www.awholesomedish.com/wp-content/uploads/2018/06/Crab-Corn-Chowder2.jpg?resize=747,560&amp;ssl=1"
    },
    {
    title: "Roasted Chicken Wings with Smoked-Paprika Mayonnaise ",
    calories: 547,
    protein: 40,
    fat: 40,
    sodium: 1042,
    image: "https://i.pinimg.com/originals/c0/17/bf/c017bf35cd4d2aae5fd44570642c2bd2.jpg"
    },
    {
    title: "Grilled Spice-Rubbed Skirt Steak ",
    calories: 416,
    protein: 34,
    fat: 29,
    sodium: 539,
    image: "https://i0.wp.com/angsarap.net/wp-content/uploads/2014/03/grilled-skirt-steak.jpg"
    },
    {
    title: "Croissant Egg Sandwiches ",
    calories: 375,
    protein: 18,
    fat: 26,
    sodium: 681,
    image: "https://cdn.apartmenttherapy.info/image/fetch/q_60,w_1024,c_fit/https://s3.amazonaws.com/pixtruder/original_images/6667cb16163dc7f6b96358df40c2ad600dd9c803"
    },
    {
    title: "Bacon-Wrapped Salmon with Wilted Spinach ",
    calories: 544,
    protein: 38,
    fat: 40,
    sodium: 689,
    image: "https://jamiegeller.com/.image/t_share/MTY1NTI1MTk0NzEwNzIyMDg2/roasted-sesame-salmon-with-wilted-spinach.jpg"
    },
    {
    title: "Warm Goat-Cheese Timbales ",
    calories: 309,
    protein: 16,
    fat: 27,
    sodium: 328,
    image: "https://i.pinimg.com/originals/7b/c7/26/7bc7263bb3b61d30745274e38072fb47.jpg"
    },
    {
    title: "Beet Carpaccio ",
    calories: 416,
    protein: 18,
    fat: 25,
    sodium: 896,
    image: "https://lepetiteats.com/wp-content/uploads/2016/04/Beet-Carpaccio-6.jpg"
    },
    {
    title: "Cornish Hens with Caraway Cabbage ",
    calories: 524,
    protein: 28,
    fat: 21,
    sodium: 726,
    image: "https://i0.wp.com/therecipe.website/wp-content/uploads/2017/01/cornhen.jpg?fit=640%2C480&amp;ssl=1"
    },
    {
    title: "Three-Cheese Chicken Breasts in Tomato Sauce ",
    calories: 401,
    protein: 18,
    fat: 20,
    sodium: 752,
    image: "http://www.kosherinthekitch.com/wp-content/uploads/2014/03/chickentomato1.gif"
    },
    {
    title: "Carroty Mac and Cheese ",
    calories: 524,
    protein: 22,
    fat: 36,
    sodium: 829,
    image: "http://assets.epicurious.com/photos/54b2a41b3edeef84363b14f2/master/pass/367160_mac-and-cheese_1x1.jpg"
    },
    {
    title: "Wagon-Wheel Pasta & Goat Cheese ",
    calories: 422,
    protein: 18,
    fat: 12,
    sodium: 382,
    image: "https://assets.epicurious.com/photos/560d78d5f9a841923089d752/1:1/w_2560%2Cc_limit/243107_hires.jpg"
    },
    {
    title: "Chicken and Vegetable Saut� Over Herbed Polenta Triangles ",
    calories: 472,
    protein: 32,
    fat: 27,
    sodium: 110,
    image: "https://mshanken.imgix.net/wso/Articles/2018/8and20_PolentaChickenB122118_1600.jpg"
    },
    {
    title: "Scrambled Eggs with Sausage and Thyme ",
    calories: 349,
    protein: 21,
    fat: 27,
    sodium: 743,
    image: "http://envirofit.org/wp-content/uploads/2017/08/Scrambled-Eggs-With-Sausage-600x600.jpg"
    },
    {
    title: "Penne with Tuna, Basil, and Lemon ",
    calories: 601,
    protein: 40,
    fat: 9,
    sodium: 362,
    image: "https://img.taste.com.au/dVwKCtBE/w1200-h630-cfill/taste/2016/11/creamy-tuna-and-basil-penne-30345-1.jpeg"
    },
    {
    title: "Maple Baked Beans ",
    calories: 471,
    protein: 21,
    fat: 16,
    sodium: 271,
    image: "https://eatineatout.ca/wp-content/uploads/2015/03/Maple-Baked-Beans_2.jpg"
    },
    {
    title: "Soba Salad with Miso Dressing ",
    calories: 671,
    protein: 16,
    fat: 39,
    sodium: 1780,
    image: "https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2020/07/soba-noodle-salad.jpg"
    },
    {
    title: "Ginger Marmalade Chicken Salad ",
    calories: 451,
    protein: 56,
    fat: 10,
    sodium: 162,
    image: "https://i0.wp.com/thebellephant.com/wp-content/uploads/2019/01/Lemon-and-Ginger-Chicken-Salad-Low-Res-3.jpg?fit=1200%2C1800"
    },
    {
    title: "Grilled Pork Tenderloin with Molasses and Mustard ",
    calories: 621,
    protein: 83,
    fat: 15,
    sodium: 554,
    image: "https://i0.wp.com/www.simplybeale.com/wp-content/uploads/2017/08/grilled-pork-tenderloin-with-molass.jpg?fit=2048%2C1536&amp;ssl=1"
    },
    {
    title: "Mussels with Basil Cream ",
    calories: 319,
    protein: 28,
    fat: 16,
    sodium: 657,
    image: "https://assets.epicurious.com/photos/560df235f3a00aeb2f1d5ca0/1:1/w_600%2Ch_600/109511.jpg"
    },
    {
    title: "Pan-Roasted Halibut with Herbed Corona Beans ",
    calories: 371,
    protein: 31,
    fat: 25,
    sodium: 1639,
    image: "nan"
    },
    {
    title: "Spinach Souffl� with Roasted Red Pepper Sauce ",
    calories: 335,
    protein: 26,
    fat: 17,
    sodium: 530,
    image: "https://www.alphafoodie.com/wp-content/uploads/2020/09/Roasted-Red-Pepper-Sauce-2-of-2-1.jpeg"
    },
    {
    title: "Florida Jambalaya ",
    calories: 569,
    protein: 23,
    fat: 24,
    sodium: 1297,
    image: "https://images.squarespace-cdn.com/content/v1/5dcc682f10e8060a74b540c6/1598626644784-YN7347IP2C700ZCVEC6Z/IMG_3087.jpg"
    },
    {
    title: "Scottish Salmon with Shallot-Truffle Honey Glaze, Lump Crab and Green Apple Risotto, and Quince Jam ",
    calories: 786,
    protein: 23,
    fat: 24,
    sodium: 146,
    image: "https://i.pinimg.com/originals/33/85/8e/33858e15ce7aac8b03bb621074cb08a4.jpg"
    },
    {
    title: "Smokey Clam Chowder ",
    calories: 466,
    protein: 38,
    fat: 23,
    sodium: 1272,
    image: "https://i.pinimg.com/736x/d0/ed/e8/d0ede850d4dd59b20c537014e8fb807b.jpg"
    },
    {
    title: "Hearty Beef and Vegetable Soup ",
    calories: 337,
    protein: 22,
    fat: 8,
    sodium: 784,
    image: "https://www.tasteofhome.com/wp-content/uploads/2017/10/Hearty-Vegetable-Beef-Soup_exps49003_SD19999445D08_26_2bC_RMS.jpg"
    },
    {
    title: "Lobster Pasta with Herbed Cream Sauce ",
    calories: 696,
    protein: 50,
    fat: 29,
    sodium: 1089,
    image: "https://figandoliveplatter.com/wp-content/uploads/2021/01/IMG_5854-768x1152.jpg"
    },
    {
    title: "Collards ",
    calories: 761,
    protein: 65,
    fat: 35,
    sodium: 2569,
    image: "https://i.ebayimg.com/images/g/U5AAAOSwYS5d2s5~/s-l1600.jpg"
    },
    {
    title: "Red Snapper Chowder ",
    calories: 341,
    protein: 28,
    fat: 9,
    sodium: 940,
    image: "https://johnrieber.files.wordpress.com/2021/03/red-snapper-chowder.jpeg?w=1500"
    },
    {
    title: "Spicy Chicken Cacciatore ",
    calories: 931,
    protein: 63,
    fat: 29,
    sodium: 297,
    image: "http://1.bp.blogspot.com/-MEKbweUb2SA/UnCEkkjGDgI/AAAAAAAACKY/XyzKsCqWFY0/s1600/IMG_2356.JPG"
    },
    {
    title: "Steamed Mussels with Lemon-Saffron Sauce ",
    calories: 334,
    protein: 22,
    fat: 16,
    sodium: 483,
    image: "https://www.simplyrecipes.com/thmb/xTxuNRcYteB4L3WS7KgpfNOsyCI=/2000x1333/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__07__Mussels_Tomato_Sauce_Lead_8-2f4830bff2834468b782248fd3ce7e11.jpg"
    },
    {
    title: "Cheese Ravioli with Herbs in Meat Broth ",
    calories: 613,
    protein: 30,
    fat: 36,
    sodium: 1205,
    image: "https://tuseibella.net/wp-content/uploads/2020/06/cheese-ravioli.jpg"
    },
    {
    title: "Large Shell Pasta with Seafood Sauce ",
    calories: 609,
    protein: 42,
    fat: 14,
    sodium: 583,
    image: "https://gatherednutrition.com/wp-content/uploads/2020/05/IMG_2987-768x1024.jpg"
    },
    {
    title: "Lamb and Zucchini Fusilli Tossed with Basil Butter ",
    calories: 597,
    protein: 23,
    fat: 26,
    sodium: 203,
    image: "https://i.pinimg.com/originals/7d/80/6c/7d806cc462662176e48a379053500739.jpg"
    },
    {
    title: "Grilled Spice-Rubbed Pork with Tomato Garlic Sauce ",
    calories: 352,
    protein: 38,
    fat: 17,
    sodium: 540,
    image: "https://www.prouditaliancook.com/wp-content/uploads/2016/08/garlic-grilled-fb3.jpg"
    },
    {
    title: "Sunday Frittata with Frizzled Leeks ",
    calories: 314,
    protein: 18,
    fat: 23,
    sodium: 344,
    image: "https://jessicagreenwellness.com/wp-content/uploads/2019/01/Sunday-Frittata-Jessica-Green-Wellness.jpg"
    },
    {
    title: "Pork Chops with Cranberry, Port, and Rosemary Sauce ",
    calories: 495,
    protein: 18,
    fat: 31,
    sodium: 124,
    image: "https://www.cscassets.com/recipes/wide_cknew/wide_25642.jpg"
    },
    {
    title: "Cornbread Casserole and Butternut Squash, Mushrooms, and Ancho Mole ",
    calories: 755,
    protein: 26,
    fat: 34,
    sodium: 1022,
    image: "https://www.thespruceeats.com/thmb/s3KbWAKimZCa9dpjd8ZfSgIh3uc=/2000x1333/filters:fill(auto,1)/butternut-squash-cornbread-2k-56a8c01d5f9b58b7d0f4cb05.jpg"
    },
    {
    title: "Fig Balsamic-Glazed Duck with Pearl Onion and Pear Hash ",
    calories: 467,
    protein: 38,
    fat: 14,
    sodium: 129,
    image: "https://i.pinimg.com/originals/4d/83/fc/4d83fcfb86c17c9ddb75befe59fb9bbb.jpg"
    },
    {
    title: "Seafood Salad with Collard Greens Slaw ",
    calories: 327,
    protein: 37,
    fat: 12,
    sodium: 1368,
    image: "https://www.dinneratthezoo.com/wp-content/uploads/2018/12/seafood-salad-5.jpg"
    },
    {
    title: "Lemon and Salmon Roe Pasta ",
    calories: 600,
    protein: 17,
    fat: 33,
    sodium: 52,
    image: "https://www.sprinklesandsprouts.com/wp-content/uploads/2019/04/Creamy-Lemon-and-Salmon-Pasta-PIN.jpg"
    },
    {
    title: "Barbecued Cheddar Burgers ",
    calories: 307,
    protein: 25,
    fat: 14,
    sodium: 506,
    image: "https://www.aberdeenskitchen.com/wp-content/uploads/2019/06/BBQ-Cheddar-Cheese-Burgers-3.jpg"
    },
    {
    title: "Spicy Spinach and Goat Cheese Pizzas ",
    calories: 853,
    protein: 31,
    fat: 28,
    sodium: 1677,
    image: "https://www.jaroflemons.com/wp-content/uploads/2021/08/Spinach-Pesto-Goat-Cheese-Individual-Pizzas-Landscape-1.jpg"
    },
    {
    title: "Penne Puttanesca with Chicken ",
    calories: 512,
    protein: 29,
    fat: 20,
    sodium: 955,
    image: "https://img.benedettocambridge.com/penne_puttanesca_meaning.jpg"
    },
    {
    title: "Tri-Tip With Chimichurri ",
    calories: 497,
    protein: 32,
    fat: 38,
    sodium: 729,
    image: "https://goodfoodbaddie.com/wp-content/uploads/2020/08/how-to-make-the-best-tri-tip-1122x1536.jpg"
    },
    {
    title: "Quick Minestrone Soup ",
    calories: 830,
    protein: 50,
    fat: 26,
    sodium: 858,
    image: "https://www.cookingclassy.com/wp-content/uploads/2020/10/minestrone-04-1024x1536.jpg"
    },
    {
    title: "Seared Tuna Steaks with Wasabi-Green Onion Mayonnaise ",
    calories: 522,
    protein: 56,
    fat: 30,
    sodium: 836,
    image: "https://www.thespruceeats.com/thmb/Fg7aIczjpcCdDGF2qqHFNdPeLuY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spice-rubbed-seared-tuna-steaks-balsamic-101974-Final-5ba013a9c9e77c0050f3042f.jpg"
    },
    {
    title: "Fennel-Crusted Ahi Tuna with Lemon A�oli Over Couscous ",
    calories: 702,
    protein: 55,
    fat: 29,
    sodium: 656,
    image: "https://assets.epicurious.com/photos/5af07b3d62009a01344db6b5/1:1/w_2560%2Cc_limit/grilled-tuna-with-qunioa-salad-recipe-050718.jpg"
    },
    {
    title: "Mahimahi with Onion, Capers, and Lemon ",
    calories: 330,
    protein: 32,
    fat: 20,
    sodium: 742,
    image: "https://assets.epicurious.com/photos/560dd727f3a00aeb2f1d26e2/16:9/w_1280,c_limit/234257.jpg?mbid=social_retweet"
    },
    {
    title: "Baked Fish Sticks Diablo ",
    calories: 427,
    protein: 38,
    fat: 22,
    sodium: 330,
    image: "https://amindfullmom.com/wp-content/uploads/2020/09/Healthy-Fish-Sticks-610x915.jpg"
    },
    {
    title: "Mulligatawny Soup ",
    calories: 933,
    protein: 56,
    fat: 35,
    sodium: 218,
    image: "https://i.redd.it/w73evmhghxqy.jpg"
    },
    {
    title: "Hearty Rutabaga, Carrot, Parsnip and Sausage Soup ",
    calories: 569,
    protein: 26,
    fat: 26,
    sodium: 4470,
    image: "https://secureservercdn.net/104.238.71.109/03h.3a7.myftpupload.com/wp-content/uploads/2021/02/carrot-parsnip-soup3-scaled.jpg?time=1631844166"
    },
    {
    title: "Baked Beans with Bacon Breadcrumbs ",
    calories: 450,
    protein: 17,
    fat: 8,
    sodium: 1552,
    image: "https://www.tasteandtellblog.com/wp-content/uploads/2017/07/Easy-Baked-Beans-Bacon-tasteandtellblog.com-1.jpg"
    },
    {
    title: "Blade Steaks with Rosemary White-Bean Pur�e ",
    calories: 711,
    protein: 48,
    fat: 37,
    sodium: 231,
    image: "https://www.foodfirefriends.com/wp-content/uploads/2020/05/raw-top-blade-steak-750x417.jpg"
    },
    {
    title: "Escarole Soup with Bacon and Croutons ",
    calories: 323,
    protein: 19,
    fat: 19,
    sodium: 640,
    image: "https://i.pinimg.com/736x/2d/b1/0a/2db10ad750f5caccd898b7b98a78ae6a.jpg"
    },
    {
    title: "Chipotle Chicken Tacos with Potatoes and Guacamole ",
    calories: 618,
    protein: 28,
    fat: 29,
    sodium: 186,
    image: "https://www.halfbakedharvest.com/wp-content/uploads/2020/02/Crispy-Chipotle-Chicken-Tacos-with-Cilantro-Lime-Ranch-1.jpg"
    },
    {
    title: "Leek and Salmon Chowder ",
    calories: 398,
    protein: 27,
    fat: 24,
    sodium: 969,
    image: "https://www.foodsthatfightcancer.ca/wp-content/uploads/2019/01/SalmonLeekDillChowder2-e1548713689259-1200x1195.jpg"
    },
    {
    title: "Grilled Chicken with Root Beer Barbecue Sauce ",
    calories: 591,
    protein: 48,
    fat: 39,
    sodium: 2102,
    image: "http://www.gretasday.com/wp-content/uploads/2015/08/barbecued-chicken-with-homemade-root-beer-bbq-sauce.jpg"
    },
    {
    title: "Veal Bocconcini with Porcini and Rosemary ",
    calories: 536,
    protein: 41,
    fat: 31,
    sodium: 645,
    image: "https://img.taste.com.au/tA2zeCqr/w720-h480-cfill-q80/taste/2016/11/bocconcini-veal-with-marsala-sauce-21596-1.jpeg"
    },
    {
    title: "Herbed Spaetzle ",
    calories: 514,
    protein: 18,
    fat: 23,
    sodium: 715,
    image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/9/4/4/FNM_100112-Herbed-Spaetzle-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371609415844.jpeg"
    },
    {
    title: "Savory Bread Pudding with Asparagus, Gruy�re, and Fines Herbes ",
    calories: 427,
    protein: 27,
    fat: 22,
    sodium: 1117,
    image: "https://i.pinimg.com/736x/98/76/cf/9876cf56f127845aa902e36020168de3.jpg"
    },
    {
    title: "Steak Salad with Shallots and Red Wine ",
    calories: 562,
    protein: 30,
    fat: 40,
    sodium: 962,
    image: "https://www.nisalocally.co.uk/media/zj3l3hei/istock-645780882.jpg"
    },
    {
    title: "Tuna, Black-Eyed Pea and Radish Salad ",
    calories: 375,
    protein: 18,
    fat: 26,
    sodium: 578,
    image: "https://dorothy-lane-market.s3.us-east-2.amazonaws.com/recipes/ahi-tuna-snap-pea-and-radish-salad-2_2880x1920.JPEG"
    },
    {
    title: "Rigatoni with Shrimp in Tomato and Feta Sauce ",
    calories: 634,
    protein: 33,
    fat: 24,
    sodium: 1296,
    image: "https://www.foodandwine.com/thmb/97PY4E6Wk95IYv1_8pDZvBEi0Uw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cream-tomato-rigatoni-FT-RECIPE1020-139fb3fa52574e8bb06f98e7fa3e4f1e.jpg"
    },
    {
    title: "Scotch Eggs with Fresh Herbs ",
    calories: 862,
    protein: 35,
    fat: 36,
    sodium: 1571,
    image: "https://eatlikepinoy.com/wp-content/uploads/2020/05/instant-pot-scotch-eggs.jpg"
    },
    {
    title: "Open-Face Crab Burgers with Red Pepper Dressing ",
    calories: 555,
    protein: 22,
    fat: 25,
    sodium: 1179,
    image: "nan"
    },
    {
    title: "Duck Breast and Fris�e Salad ",
    calories: 499,
    protein: 21,
    fat: 35,
    sodium: 642,
    image: "https://theboiledpeanuts.com/wp-content/uploads/2020/10/side-dishes-for-duck-breast-beautiful-duck-breasts-with-crispy-potatoes-and-frisee-salad-recipe-of-side-dishes-for-duck-breast.jpg"
    },
    {
    title: "Sauteed Flank Steak with Arugula and Roasted Cauliflower and Red Peppers ",
    calories: 405,
    protein: 33,
    fat: 18,
    sodium: 1104,
    image: "https://i.pinimg.com/736x/82/3c/b5/823cb519e5384438ae672e3d53d17e9c.jpg"
    },
    {
    title: "My Grandmother's Spaghetti ",
    calories: 966,
    protein: 66,
    fat: 29,
    sodium: 1051,
    image: "nan"
    },
    {
    title: "Smoked Chicken and Sun-Dried Tomato Sandwiches with Basil Olive Pesto ",
    calories: 346,
    protein: 15,
    fat: 29,
    sodium: 252,
    image: "https://lh3.googleusercontent.com/-XtPUz9393Y0/TWsGtC-XczI/AAAAAAAAAAc/8TWzANj2sFw/s400/February+2011+end+of+month+055.JPG"
    },
    {
    title: "Summer Garden Tortelloni ",
    calories: 379,
    protein: 15,
    fat: 18,
    sodium: 628,
    image: "https://www.bakespace.com/images/large/dfcbfe29c9a7d2a67535796ad70cd13b.jpeg"
    },
    {
    title: "Country Hash ",
    calories: 479,
    protein: 17,
    fat: 35,
    sodium: 309,
    image: "https://www.americas-table.com/wp-content/uploads/2019/08/MG_4776.jpg"
    },
    {
    title: "Curried Monkfish with Apple and Date Compote ",
    calories: 750,
    protein: 35,
    fat: 21,
    sodium: 205,
    image: "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_73,ar_16:9,w_1024/v1/img/recipes/60/06/0/picqVjT8o.jpg"
    },
    {
    title: "Clam and Bacon Pizza ",
    calories: 743,
    protein: 34,
    fat: 36,
    sodium: 1699,
    image: "http://1.bp.blogspot.com/-QQZ3kL4Uhkg/Vco7n29dMmI/AAAAAAAAA18/9Pdad0goFH0/s1600/Clam%2BBacon%2BOnion%2BPizza.jpg"
    },
    {
    title: "Artichoke Fennel Sauce with Prosciutto ",
    calories: 368,
    protein: 18,
    fat: 27,
    sodium: 1104,
    image: "https://i.pinimg.com/originals/28/23/ac/2823ac195876c3e05dd8f9e38185b28f.jpg"
    },
    {
    title: "Lemony Chicken Milanese with Arugula Salad ",
    calories: 512,
    protein: 59,
    fat: 23,
    sodium: 652,
    image: "https://i.pinimg.com/originals/6f/2d/75/6f2d75151f3f310a5fb14189de28b34d.jpg"
    },
    {
    title: "Two Peas in a Pasta ",
    calories: 588,
    protein: 25,
    fat: 17,
    sodium: 615,
    image: "https://recipes.saladmaster.com/sites/default/files/styles/recipe_page_shadowbox/public/7 two peas in a pasta (7)_cropped (copyright).jpg?itok=y4qdKaha"
    },
    {
    title: "Seafood Stew with Tomatoes and Basil ",
    calories: 510,
    protein: 58,
    fat: 17,
    sodium: 2213,
    image: "https://delicerecipes.com/wp-content/uploads/2021/04/tomato-seafood_stew-recipe.jpg"
    },
    {
    title: "Grilled Pork Tenderloin with Fresh Cherry Chutney ",
    calories: 428,
    protein: 31,
    fat: 9,
    sodium: 96,
    image: "https://natashaskitchen.com/wp-content/uploads/2018/06/Grilled-Pork-Tenderloin-Recipe-4-1024x1536.jpg"
    },
    {
    title: "Garlic and Pepper Marinated Flank Steak ",
    calories: 451,
    protein: 50,
    fat: 26,
    sodium: 999,
    image: "https://cdn3.tmbi.com/secure/RMS/attachments/37/1200x1200/exps827__SD143206C04_04_2b.jpg"
    },
    {
    title: "Gratin of Endive and Ham ",
    calories: 336,
    protein: 18,
    fat: 22,
    sodium: 784,
    image: "https://i0.wp.com/www.pardonyourfrench.com/wp-content/uploads/2021/01/Belgian-Endive-Ham-Gratin-1.jpg?fit=1170%2C1753&amp;ssl=1"
    },
    {
    title: "Goat Cheese with Grilled Eggplant and Roasted Peppers on Olive Bread ",
    calories: 451,
    protein: 20,
    fat: 16,
    sodium: 533,
    image: "https://images.media-allrecipes.com/userphotos/6637563.jpg"
    },
    {
    title: "Mussel Chowder ",
    calories: 354,
    protein: 32,
    fat: 16,
    sodium: 893,
    image: "https://www.healthyfood.com/wp-content/uploads/2016/09/Mussel-chowder-1024x657.jpg"
    },
    {
    title: "Upscale Macaroni and Cheese ",
    calories: 426,
    protein: 17,
    fat: 24,
    sodium: 530,
    image: "https://i.pinimg.com/originals/ef/8a/b2/ef8ab253cd8215461e37a6a181af2f91.jpg"
    },
    {
    title: "Chicken with Herbed Vegetable Sauce ",
    calories: 392,
    protein: 56,
    fat: 14,
    sodium: 152,
    image: "http://images.media-allrecipes.com/userphotos/960x960/3757389.jpg"
    },
    {
    title: "Seared Mahimahi with Hot-and-Sour Mango Relish ",
    calories: 348,
    protein: 36,
    fat: 6,
    sodium: 831,
    image: "http://eatsomethingsexy.com/wp-content/uploads/2015/03/mahi-mahi-with-mango-salsa.jpg"
    },
    {
    title: "Scandinavian Vegetable Soup with Shrimp ",
    calories: 329,
    protein: 18,
    fat: 10,
    sodium: 1618,
    image: "http://irepo.primecp.com/2017/09/346007/Scandinavian-Cabbage-Soup_ExtraLarge1000_ID-2415560.jpg?v=2415560"
    },
    {
    title: "Seafood 'Cataplana' with Saffron, Vermouth, and Sorrel ",
    calories: 563,
    protein: 49,
    fat: 24,
    sodium: 1439,
    image: "https://www.foodandwine.com/thmb/ZoqM_rpVqIFojBWHoiKDmgwlOjc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Cataplana-Portugese-Fish-Stew-FT-RECIPE0522-628492e5ebd6472195934e4418ff6fca.jpg"
    },
    {
    title: "Beer-Braised Carnitas ",
    calories: 318,
    protein: 22,
    fat: 23,
    sodium: 631,
    image: "https://laurenslatest.com/wp-content/uploads/2020/08/pork-carnitas-2-copy.jpg"
    },
    {
    title: "Beef Stew with Curry and Lemongrass ",
    calories: 367,
    protein: 41,
    fat: 14,
    sodium: 1306,
    image: "http://www.bhg.com.au/media/40580/beef-stew-2.jpg"
    },
    {
    title: "Asian Risotto with Pancetta and Mussels ",
    calories: 786,
    protein: 45,
    fat: 20,
    sodium: 1832,
    image: "http://www.cookrepublic.com/images/blog/archive/asian_risotto_balls_mango_sauce2.jpg"
    },
    {
    title: "Polenta-Cheese Timballos with Eggs and Spinach ",
    calories: 540,
    protein: 26,
    fat: 37,
    sodium: 504,
    image: "https://www.foodbanjo.com/wp-content/uploads/2022/01/scrambled-eggs-spinach-florentine-2756-01.jpg"
    },
    {
    title: "Prosciutto, Fried Egg, and Parmesan on Country Bread ",
    calories: 500,
    protein: 38,
    fat: 36,
    sodium: 1736,
    image: "https://i.pinimg.com/736x/98/8b/8f/988b8f45b42e35c110f1edec408dd07c.jpg"
    },
    {
    title: "Eggplant Caprese with Grilled Tomato and Basil Vinaigrette ",
    calories: 395,
    protein: 18,
    fat: 31,
    sodium: 514,
    image: "https://seekinggoodeats.com/wp-content/uploads/2022/08/eggplant-caprese-portrait-1.jpg"
    },
    {
    title: "Sausage and Bean Soup ",
    calories: 720,
    protein: 36,
    fat: 33,
    sodium: 707,
    image: "https://www.tasteofhome.com/wp-content/uploads/2017/10/Sausage-Bean-Soup_EXPS_SDON16_8071_D06_03_6b.jpg"
    },
    {
    title: "Fettuccine with Shredded Zucchini, Fresh Ricotta, and Lemon Zest ",
    calories: 672,
    protein: 23,
    fat: 24,
    sodium: 652,
    image: "https://i.pinimg.com/originals/57/73/11/577311bddfce60954d4ceb1f57f4fd72.jpg"
    },
    {
    title: "Roast Chicken Noodle Soup with Chrysanthemum ",
    calories: 740,
    protein: 39,
    fat: 29,
    sodium: 707,
    image: "https://assets.epicurious.com/photos/560de57d7b55306961bfd7c4/1:1/w_600%2Ch_600/232259.jpg"
    },
    {
    title: "Turkey and Mushroom Risotto ",
    calories: 899,
    protein: 72,
    fat: 31,
    sodium: 512,
    image: "http://1.bp.blogspot.com/-C43MWArf9WU/UKaLEmZKTaI/AAAAAAAADT0/0zzH7Nx5WNQ/s1600/TurkeyMushroomRisotto.jpg"
    },
    {
    title: "New MexicoStyle Pot Roast ",
    calories: 518,
    protein: 53,
    fat: 15,
    sodium: 2660,
    image: "https://2.bp.blogspot.com/-ixBRD9QHpc0/Ts24GEi-kNI/AAAAAAAAHK4/MPmD9eN2X9E/s1600/New+Mexico-Style+Roast+003.jpg"
    },
    {
    title: "Linguine with Green Olive Sauce and Zesty Breadcrumbs ",
    calories: 674,
    protein: 15,
    fat: 38,
    sodium: 835,
    image: "https://assets.epicurious.com/photos/55805fab81ac1e5023675ecb/1:1/w_2560%2Cc_limit/56389646_linguine-green-olive-breadcrumbs_1x1.jpg"
    },
    {
    title: "Mexican Chicken and Vegetable Casserole ",
    calories: 504,
    protein: 31,
    fat: 36,
    sodium: 221,
    image: "https://www.theanthonykitchen.com/wp-content/uploads/2020/03/Mexican-Chicken-Casserole-6-1365x2048.jpg"
    },
    {
    title: "Dorade With Potatoes and Burst Tomato Sauce ",
    calories: 498,
    protein: 44,
    fat: 22,
    sodium: 229,
    image: "https://assets.bonappetit.com/photos/57acace81b33404414975112/16:9/w_1280,c_limit/dorade-with-potatoes-and-burst-tomato-sauce.jpg"
    },
    {
    title: "Grilled Marinated Pork Chops ",
    calories: 1012,
    protein: 86,
    fat: 37,
    sodium: 1994,
    image: "https://bigoven-res.cloudinary.com/image/upload/t_recipe-1280/grilled-marinated-pork-chops.jpg"
    },
    {
    title: "Baked Fish with Ratatouille ",
    calories: 339,
    protein: 36,
    fat: 15,
    sodium: 257,
    image: "https://www.tonyferguson.co.za/wp-content/uploads/2021/07/Baked-Fish-with-Ratatouille.jpg"
    },
    {
    title: "Pork and Noodle Soup with Shiitake and Snow Cabbage ",
    calories: 520,
    protein: 27,
    fat: 19,
    sodium: 280,
    image: "https://www.keyingredient.com/media/29/b2/b1b07bec0a395f2ea620de57d654a4da06e1.jpg/rh/pork-and-noodle-soup-with-shiitake-and-snow-cabbage.jpg"
    },
    {
    title: "Pork Chops with Curried Apple-Onion Sauce ",
    calories: 597,
    protein: 50,
    fat: 37,
    sodium: 234,
    image: "https://savoryspin.com/wp-content/uploads/2016/04/Smithfield-Curried-Mango-Pork-Chops-ggnoads-735x1009.jpg"
    },
    {
    title: "Smoked Ham, Barley, and Vegetable Soup ",
    calories: 475,
    protein: 47,
    fat: 19,
    sodium: 1510,
    image: "https://howtofeedapickyeater.com/wp-content/uploads/2018/12/Smoked-Ham-Barley-and-Vegetable-Soup-23.jpg"
    },
    {
    title: "Pancetta- and Herb-Roasted Pork with Fig Jam ",
    calories: 746,
    protein: 58,
    fat: 34,
    sodium: 654,
    image: "nan"
    },
    {
    title: "Spaghetti alla Puttanesca ",
    calories: 513,
    protein: 19,
    fat: 18,
    sodium: 312,
    image: "http://www.oliviascuisine.com/wp-content/uploads/2017/04/spaghetti-alla-puttanesca-IG-1024x1024.jpg"
    },
    {
    title: "Roast Pork Tenderloin with Fresh and Dried Fruit ",
    calories: 323,
    protein: 34,
    fat: 10,
    sodium: 115,
    image: "https://assets.epicurious.com/photos/560dd6d0f9a84192308a4bf3/1:1/w_600%2Ch_600/231432.jpg"
    },
    {
    title: "Curried Chicken Soup with Carrots ",
    calories: 448,
    protein: 26,
    fat: 28,
    sodium: 229,
    image: "https://www.vegetarianventures.com/wp-content/uploads/2021/01/CarrotSoupBlog-2-of-3-1200x1500.jpg"
    },
    {
    title: "Roast Turkey with Herb Butter and Caramelized-Onion Gravy ",
    calories: 839,
    protein: 129,
    fat: 27,
    sodium: 521,
    image: "https://www.freutcake.com/wp-content/uploads/2020/12/Butter-Herb-Beef-Roast-4.jpg"
    },
    {
    title: "Skillet Polenta with Tomatoes and Gorgonzola ",
    calories: 461,
    protein: 17,
    fat: 23,
    sodium: 1270,
    image: "https://a4.pbase.com/g4/40/855740/2/134807382.ygMSDtHn.jpg"
    },
    {
    title: "Corn and Black Bean Tortilla Cakes ",
    calories: 332,
    protein: 18,
    fat: 21,
    sodium: 472,
    image: "http://4.bp.blogspot.com/_BHXoJmZ4m20/Rp1mVjCmdTI/AAAAAAAAAAk/ON4mnqzffHs/w1200-h630-p-k-no-nu/tortilla+cakes003.JPG"
    },
    {
    title: "Spaghetti with Mussels and White Beans ",
    calories: 629,
    protein: 33,
    fat: 18,
    sodium: 803,
    image: "http://img.delicious.com.au/2N2i8Sq1/w1200/del/2016/09/15-minute-spaghetti-with-mussels-in-bianco-35819-4.jpg"
    },
    {
    title: "Scalloped Potatoes with Fennel, Mushrooms and Goat Cheese ",
    calories: 551,
    protein: 25,
    fat: 28,
    sodium: 1201,
    image: "https://i.pinimg.com/originals/02/d2/0b/02d20b9e8af44c87cef9ed536a9ddced.jpg"
    },
    {
    title: "Chile and Chorizo Cornbread ",
    calories: 547,
    protein: 24,
    fat: 37,
    sodium: 1038,
    image: "https://i0.wp.com/comboplate.net/wp-content/uploads/2022/11/Cornbread-Stuffing.jpg?fit=1200%2C800&amp;ssl=1"
    },
    {
    title: "Soft-Shelled Crab Sandwiches ",
    calories: 437,
    protein: 31,
    fat: 23,
    sodium: 617,
    image: "https://www.carolinescooking.com/wp-content/uploads/2016/06/Bahn-mi-style-soft-shell-crab-sandwich-photo.jpg"
    },
    {
    title: "Pork Satay ",
    calories: 616,
    protein: 22,
    fat: 29,
    sodium: 1468,
    image: "https://www.thaifood.rocks/wp-content/uploads/2017/04/pork-satay.jpg"
    },
    {
    title: "Herbed Oyster Stuffing ",
    calories: 487,
    protein: 19,
    fat: 31,
    sodium: 710,
    image: "https://i.pinimg.com/originals/5e/73/be/5e73bee8f9bb3f31e65fd7e5e58b82a8.jpg"
    },
    {
    title: "Crisp Chipotle Shrimp with Corn and Scallions ",
    calories: 410,
    protein: 22,
    fat: 19,
    sodium: 1282,
    image: "https://i.pinimg.com/originals/24/35/b9/2435b946444133cc5b96eda420078072.jpg"
    },
    {
    title: "Braised Halibut Fillets in Coconut and Lemongrass with Smoked Eggplant and Tomato Ginger Chutney ",
    calories: 390,
    protein: 37,
    fat: 22,
    sodium: 318,
    image: "https://static.fooddiez.com/media/images/recipe/og-en/193722.jpg"
    },
    {
    title: "Pasta with Veal, Sausage and Porcini Rag� ",
    calories: 548,
    protein: 29,
    fat: 17,
    sodium: 454,
    image: "http://2.bp.blogspot.com/-aMtEKYRUcFo/TgxWWo805RI/AAAAAAAADWk/hQMGsHuWjqM/s1600/pasta+with+ragu+2.JPG"
    },
    {
    title: "Shrimp Fried Rice with Ginger ",
    calories: 587,
    protein: 34,
    fat: 33,
    sodium: 726,
    image: "http://dishbydish.net/wp-content/uploads/2014/06/Ginger-Shrimp-Fried-Rice5-e1402862146569.jpg"
    },
    {
    title: "Poblano Corn Chowder with Shrimp ",
    calories: 428,
    protein: 20,
    fat: 19,
    sodium: 748,
    image: "https://i.pinimg.com/originals/82/8b/b6/828bb6c50fd792ae485f6bae18117ff1.jpg"
    },
    {
    title: "Israeli Couscous, Peas, Preserved Lemons, Mint & Goat's Cheese ",
    calories: 693,
    protein: 27,
    fat: 27,
    sodium: 2623,
    image: "https://assets.epicurious.com/photos/5565e9be50e46c5c01e93aa7/1:1/w_600%2Ch_600/56389616_israeli-couscous-peas-mint-goat-cheese_6x4.jpg"
    },
    {
    title: "Roast Chicken with Mashed-Potato Stuffing and Root Vegetables ",
    calories: 1062,
    protein: 83,
    fat: 33,
    sodium: 526,
    image: "https://i.pinimg.com/originals/9c/b3/3c/9cb33c0f45f0e9134cfa2abba8e3949b.jpg"
    },
    {
    title: "Sauteed Shrimp with Lemon-Garlic Butter ",
    calories: 412,
    protein: 24,
    fat: 32,
    sodium: 968,
    image: "https://www.bowlofdelicious.com/wp-content/uploads/2021/04/sauteed-shrimp-2.jpg"
    },
    {
    title: "Barbecue Bean Soup ",
    calories: 381,
    protein: 18,
    fat: 9,
    sodium: 556,
    image: "https://i.pinimg.com/originals/2e/72/5d/2e725d5bcef26b3628d969e02e80a93b.jpg"
    },
    {
    title: "Clams and Chorizo with Tomato and Garlic ",
    calories: 565,
    protein: 73,
    fat: 19,
    sodium: 3164,
    image: "https://bennydoro.com/chef/wp-content/uploads/sites/3/2018/01/63df830b5bb864b1e3913f4eadba0fd4-1300x1300.jpeg"
    },
    {
    title: "Pasta in Almond Garlic Sauce ",
    calories: 464,
    protein: 17,
    fat: 22,
    sodium: 180,
    image: "https://149366112.v2.pressablecdn.com/wp-content/uploads/2016/05/smoky-tomato-almond-pasta-sauce.jpg"
    },
    {
    title: "Moroccan Garbanzo Bean and Feta Pitas ",
    calories: 586,
    protein: 17,
    fat: 39,
    sodium: 701,
    image: "https://assets.epicurious.com/photos/58b488f01c5fbd604af0ffb2/2:1/w_1260%2Ch_630/MOROCCAN-GARBANZO-BEAN-AND-FETA-PITAS-160220171778.jpg"
    },
    {
    title: "Pan-Seared Scallops with Smoked-Tomato Butter and Warm Spinach Salad ",
    calories: 724,
    protein: 68,
    fat: 40,
    sodium: 2444,
    image: "nan"
    },
    {
    title: "Island Pork Tenderloin Salad ",
    calories: 716,
    protein: 42,
    fat: 39,
    sodium: 1183,
    image: "https://www.peachythemagazine.com/wp-content/uploads/2019/07/01porksalad.jpg"
    },
    {
    title: "Barbecue Chicken Pizza ",
    calories: 809,
    protein: 47,
    fat: 35,
    sodium: 1541,
    image: "https://bluebowlrecipes.com/wp-content/uploads/2019/05/barbecue-chicken-pizza-0917.jpg"
    },
    {
    title: "Garlicky Eggplant, Tomato and Basil Bobolis ",
    calories: 642,
    protein: 27,
    fat: 26,
    sodium: 1101,
    image: "https://assets.cleanfooddirtygirl.com/recipes/garlicky_thai_basil_eggplant_bowl_2530eaba-071f-414f-85cd-660a77626b3c.jpeg"
    },
    {
    title: "Blade Steaks with Mushrooms ",
    calories: 419,
    protein: 30,
    fat: 30,
    sodium: 751,
    image: "https://res.cloudinary.com/hksqkdlah/image/upload/ar_1:1,c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_344/SFS_Braised_Blade_Steaks_with_Portobellos_and_Vidalias_007_l50dyp"
    },
    {
    title: "Blue and Red Flannel Hash ",
    calories: 470,
    protein: 25,
    fat: 25,
    sodium: 978,
    image: "https://duluthgrill.com/wp-content/uploads/2020/05/red_flannel_hash_lrg.jpg"
    },
    {
    title: "Quinoa Cakes with Eggplant-Tomato Rag� and Smoked Mozzarella ",
    calories: 566,
    protein: 16,
    fat: 36,
    sodium: 209,
    image: "http://3.bp.blogspot.com/-TbGDHFlhmG8/T3jCQzLB-QI/AAAAAAAAEcM/M_dp_HA4S2E/s1600/QuinoaCakesFreshHerbSalad.jpg"
    },
    {
    title: "Baked Whitefish with Tomatoes and Garlic ",
    calories: 356,
    protein: 31,
    fat: 24,
    sodium: 219,
    image: "https://theviewfromgreatisland.com/wp-content/uploads/2017/06/baked-fish-with-burst-tomatoes-and-basil-0144-June-01-2017-4-683x1024.jpg"
    },
    {
    title: "Sauteed Polenta with Sweet Italian Sausage and Broccoli Rabe ",
    calories: 487,
    protein: 29,
    fat: 19,
    sodium: 1669,
    image: "https://i.pinimg.com/originals/5b/bf/6a/5bbf6a197fa1faac2be1c0e2744a81d2.jpg"
    },
    {
    title: "Pizza Dough ",
    calories: 914,
    protein: 32,
    fat: 27,
    sodium: 1569,
    image: "https://www.cookingclassy.com/wp-content/uploads/2020/05/pizza-dough-11.jpg"
    },
    {
    title: "Patty Melts with Charred Onions ",
    calories: 549,
    protein: 42,
    fat: 36,
    sodium: 393,
    image: "https://i.pinimg.com/originals/9e/bd/07/9ebd07ea6f2c45a08e90cb743e9384e9.jpg"
    },
    {
    title: "Beef Bourguignon ",
    calories: 483,
    protein: 45,
    fat: 19,
    sodium: 878,
    image: "https://somuchfoodblog.com/wp-content/uploads/2022/11/beef-bourguinon7.jpg"
    },
    {
    title: "Pan-Seared Swordfish Steaks with Shallot, Caper, and Balsamic Sauce ",
    calories: 360,
    protein: 34,
    fat: 21,
    sodium: 246,
    image: "nan"
    },
    {
    title: "Cauliflower, Swiss Chard, and Chicken Soup ",
    calories: 355,
    protein: 32,
    fat: 14,
    sodium: 438,
    image: "https://pinabresciani.com/wp-content/uploads/2020/01/DSC09035-2.jpg"
    },
    {
    title: "Picadillo Tostadas ",
    calories: 624,
    protein: 30,
    fat: 40,
    sodium: 557,
    image: "https://i.pinimg.com/originals/2d/94/97/2d949745ed87e2ce8c59b6784bd4f8be.jpg"
    },
    {
    title: "Country Hash ",
    calories: 479,
    protein: 17,
    fat: 35,
    sodium: 309,
    image: "https://www.americas-table.com/wp-content/uploads/2019/08/MG_4776.jpg"
    },
    {
    title: "Roast Chicken Breasts with Garbanzo Beans, Tomatoes, and Paprika ",
    calories: 614,
    protein: 46,
    fat: 34,
    sodium: 362,
    image: "https://assets.epicurious.com/photos/560d784cf3a00aeb2f1cb50c/master/pass/242113_hires.jpg"
    },
    {
    title: "Shrimp and Corn Chowder ",
    calories: 548,
    protein: 15,
    fat: 36,
    sodium: 2009,
    image: "https://www.wellplated.com/wp-content/uploads/2016/12/Shrimp-and-Corn-Chowder.jpg"
    },
    {
    title: "Spice-Rubbed Chicken and Vegetable Tacos with Cilantro Slaw and Chipotle Cream ",
    calories: 384,
    protein: 22,
    fat: 20,
    sodium: 623,
    image: "http://www.eatyourselfskinny.com/wp-content/uploads/2017/07/cilantro-lime-tacos-44-1096x1644.jpg"
    },
    {
    title: "Cavatelli with Italian Sausage and Brocolli Rabe ",
    calories: 759,
    protein: 42,
    fat: 19,
    sodium: 758,
    image: "https://i.pinimg.com/originals/9a/43/19/9a43198ff0e57b56cdfa929e827a37ec.jpg"
    },
    {
    title: "Asian Garlic Chicken ",
    calories: 347,
    protein: 55,
    fat: 10,
    sodium: 667,
    image: "https://thewoksoflife.com/wp-content/uploads/2015/05/40-garlic-chicken-9.jpg"
    },
    {
    title: "Beef and Snow Peas with Panfried Noodles ",
    calories: 645,
    protein: 35,
    fat: 32,
    sodium: 436,
    image: "https://www.cookingforkeeps.com/wp-content/uploads/2019/05/Crispy-Honey-Beef-with-Snow-Peas-7-1-720x720.jpg"
    },
    {
    title: "Beer-Marinated Flank Steak with Aji and Guacamole ",
    calories: 498,
    protein: 44,
    fat: 26,
    sodium: 373,
    image: "http://dadsthatcook.com/cdn/shop/articles/columbian-Beer-Marinated-Flank-Steak-2000x1125.jpg?v=1654720256"
    },
    {
    title: "Garlic-Rosemary Turkey with Mushroom Gravy ",
    calories: 887,
    protein: 131,
    fat: 26,
    sodium: 668,
    image: "https://i.pinimg.com/originals/d0/c3/0d/d0c30dc8ae34ccd547b2a06225dfc035.jpg"
    },
    {
    title: "Hoisin Chicken in Lettuce Leaves ",
    calories: 389,
    protein: 29,
    fat: 23,
    sodium: 625,
    image: "https://meta-storage-production.s3.us-east-2.amazonaws.com/recipes/hoisin-chicken-in-lettuce-leaves~rea77/photo.png"
    },
    {
    title: "Pasta With Mushrooms and Prosciutto ",
    calories: 676,
    protein: 21,
    fat: 33,
    sodium: 487,
    image: "nan"
    },
    {
    title: "Shrimp, Crab, and Oyster Gumbo ",
    calories: 304,
    protein: 26,
    fat: 6,
    sodium: 892,
    image: "https://www.tastingtable.com/img/gallery/shrimp-and-okra-gumbo-recipe/l-intro-1640884574.jpg"
    },
    {
    title: "Corn and Okra Stew ",
    calories: 349,
    protein: 20,
    fat: 19,
    sodium: 1435,
    image: "https://beautifuleatsandthings.com/wp-content/uploads/2019/01/BeautifulEatsThings-Okra-Corn-Tomato-Chicken-Stew-P-1-977x1024.jpg"
    },
    {
    title: "Veal Osso Buco (Ossobuco alla Milanese) ",
    calories: 717,
    protein: 61,
    fat: 38,
    sodium: 873,
    image: "https://d2droglu4qf8st.cloudfront.net/2016/03/267477/recipe-15111_ExtraLarge1000_ID-1506650.jpg?v=1506650"
    },
    {
    title: "Coffee-Marinated Bison Short Ribs ",
    calories: 477,
    protein: 69,
    fat: 9,
    sodium: 8187,
    image: "https://www.tenderbison.com/wp-content/uploads/2021/01/recipe-bison-short-ribs-1200x800-1-1024x683.jpg"
    },
    {
    title: "Beef and Potato Pasties ",
    calories: 356,
    protein: 24,
    fat: 21,
    sodium: 241,
    image: "https://i0.wp.com/www.lavenderandlovage.com/wp-content/uploads/2013/08/Cheese-Onion-and-Potato-Pasties-3.jpg?fit=1654%2C1404&amp;ssl=1"
    },
    {
    title: "Tarragon, Chive and Goat Cheese Omelet ",
    calories: 437,
    protein: 27,
    fat: 36,
    sodium: 1023,
    image: "https://i.pinimg.com/originals/b5/99/df/b599df706420658f60ceb39f2ef7153e.jpg"
    },
    {
    title: "Carrot Cardamom Soup ",
    calories: 593,
    protein: 17,
    fat: 25,
    sodium: 1385,
    image: "https://i.pinimg.com/originals/03/14/9d/03149df1bb15db7dd279b7de82ac4443.jpg"
    },
    {
    title: "Tuna and Artichoke Panini ",
    calories: 817,
    protein: 49,
    fat: 35,
    sodium: 1617,
    image: "http://3.bp.blogspot.com/-CgUOdLQv4XQ/UDlPwZTkSkI/AAAAAAAAC0U/i3XrjC1W2aE/s1600/artichokepanini.jpg"
    },
    {
    title: "Barbecued Pork Fried Rice ",
    calories: 300,
    protein: 29,
    fat: 10,
    sodium: 1347,
    image: "https://img.taste.com.au/wL5tnyyE/w1200-h630-cfill/taste/2016/11/barbecued-pork-fried-rice-75970-1.jpeg"
    },
    {
    title: "Spicy Macaroni and Cheese ",
    calories: 910,
    protein: 41,
    fat: 39,
    sodium: 895,
    image: "http://www.lifeasastrawberry.com/wp-content/uploads/2012/12/classic-macaroni-and-cheese-recipe.jpg"
    },
    {
    title: "Swiss Chard Ricotta Gnudi with Fall Mushrooms ",
    calories: 426,
    protein: 18,
    fat: 27,
    sodium: 468,
    image: "https://assets.epicurious.com/photos/54b3e542460b4423363f6dc2/16:9/w_1280,c_limit/355214_swiss-chard-ricotta-gnudi_1x1.jpg"
    },
    {
    title: "Scrambled Eggs with Tomato, Goat Cheese, and Mint ",
    calories: 321,
    protein: 19,
    fat: 23,
    sodium: 821,
    image: "https://friendseat.com/wp-content/uploads/2018/04/SCRAMBLED-EGGS-WITH-TOMATO-GOAT-CHEESE-AND-MINT-RECIPE.jpg"
    },
    {
    title: "Seafood Chowder with Squash ",
    calories: 349,
    protein: 24,
    fat: 18,
    sodium: 1259,
    image: "https://i.pinimg.com/originals/af/93/d5/af93d5fb06dbfe3783827eef6aa42114.jpg"
    },
    {
    title: "Moroccan-Spiced Pastitsio with Lamb and Feta ",
    calories: 580,
    protein: 24,
    fat: 33,
    sodium: 341,
    image: "https://i.pinimg.com/originals/c3/63/45/c363455ec80bf980be01a69c15503d74.jpg"
    },
    {
    title: "Chicken, Onion, and Raisin Stew ",
    calories: 460,
    protein: 18,
    fat: 29,
    sodium: 104,
    image: "https://assets.epicurious.com/photos/560ea0d1f3a00aeb2f1d6a8b/1:1/w_600%2Ch_600/106484.jpg"
    },
    {
    title: "Linguine with Herbed Clam Sauce ",
    calories: 839,
    protein: 59,
    fat: 16,
    sodium: 932,
    image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Linguine-with-Herbed-Clam-Sauce_EXPS_THD18_27671_B08_02_6b-1.jpg"
    },
    {
    title: "Pat's Chicken with Peaches and Jalapenos ",
    calories: 355,
    protein: 30,
    fat: 16,
    sodium: 88,
    image: "https://i.pinimg.com/originals/85/8c/bb/858cbb86b87b34ffe891c671f27aa2cc.jpg"
    },
    {
    title: "Salmon Chowder ",
    calories: 606,
    protein: 40,
    fat: 40,
    sodium: 599,
    image: "https://cdn.momsdish.com/wp-content/uploads/2018/10/IMG_7663-1200x1800.jpg"
    },
    {
    title: "Pork Chops with Leeks in Mustard Sauce ",
    calories: 504,
    protein: 22,
    fat: 36,
    sodium: 1266,
    image: "https://4.bp.blogspot.com/-KsBytLw7Neg/W3RdWMp3vII/AAAAAAAATiE/IJzMu5QZGCkdUXA0I5uOpePAwCPI0KhRACLcBGAs/s1600/Pork%2BChops%2Bwith%2BLeeks%2Bin%2BMustard%2BSauce.jpg"
    },
    {
    title: "Mixed-Pepper Steak with Onions ",
    calories: 546,
    protein: 36,
    fat: 39,
    sodium: 605,
    image: "http://deliciousonadollar.files.wordpress.com/2013/01/img_2501.jpg"
    },
    {
    title: "Baked Halibut with Chopped Olive Salad ",
    calories: 352,
    protein: 32,
    fat: 23,
    sodium: 270,
    image: "https://cookinglsl.com/wp-content/uploads/2020/01/baked-halibut-1.jpg"
    },
    {
    title: "Curried Potato, Spinach and Garbanzo Bean Soup ",
    calories: 667,
    protein: 20,
    fat: 32,
    sodium: 1323,
    image: "https://lh5.googleusercontent.com/proxy/p-HUjzuuQqKa3bGBxdwdw_Nvj5oxGRsJrZbHElSc6Sx3r7E6DuarMKxWYP8ncbFSccGQ_w5R-q4XhE4p_24L8xIZWobv5_mRkd6zOnGdS8EW8Wk=s0-d"
    },
    {
    title: "Chicken Divan ",
    calories: 374,
    protein: 36,
    fat: 18,
    sodium: 344,
    image: "https://sweetandsavorymeals.com/wp-content/uploads/2019/04/how-to-make-chicken-divan.jpg"
    },
    {
    title: "Eggplant, Green Olive, and Provolone Pizza ",
    calories: 646,
    protein: 21,
    fat: 34,
    sodium: 1200,
    image: "https://farm3.static.flickr.com/2336/3864187431_0c9ed38ef6_o.jpg"
    },
    {
    title: "Lobster Bisque ",
    calories: 602,
    protein: 65,
    fat: 23,
    sodium: 2075,
    image: "http://lexiscleankitchen.com/wp-content/uploads/2017/04/Classic-Lobster-Bisque2-1.jpg"
    },
    {
    title: "Skirt Steak Fajitas with Lime and Black Pepper ",
    calories: 809,
    protein: 43,
    fat: 36,
    sodium: 1775,
    image: "https://playswellwithbutter.com/wp-content/uploads/2022/07/Grilled-Skirt-Steak-Fajitas-5-960x1440.jpg"
    },
    {
    title: "Chicken Breasts with Goat Cheese and Rosemary ",
    calories: 343,
    protein: 31,
    fat: 23,
    sodium: 266,
    image: "https://www.momontimeout.com/wp-content/uploads/2021/01/goat-cheese-stuffed-chicken-recipe-square.jpg"
    },
    {
    title: "Spaghetti with Creamy Sun-Dried Tomato Sauce ",
    calories: 679,
    protein: 22,
    fat: 24,
    sodium: 483,
    image: "https://www.favfamilyrecipes.com/wp-content/uploads/2021/06/Spaghetti-Sauce-13-595xh.jpg"
    },
    {
    title: "California Vegetable and Chickpea Chili ",
    calories: 931,
    protein: 35,
    fat: 40,
    sodium: 2881,
    image: "https://thecozyapron.com/wp-content/uploads/2022/10/chickpea-chili_thecozyapron_3.jpg"
    },
    {
    title: "Lamb and Eggplant Pastitsio ",
    calories: 685,
    protein: 31,
    fat: 37,
    sodium: 1239,
    image: "http://i479.photobucket.com/albums/rr158/oneperfectbite/Blog Photos July/LambCasseroleTwo-2.jpg"
    },
    {
    title: "Grilled Fresh Sardines with Fennel and Preserved Lemon ",
    calories: 339,
    protein: 31,
    fat: 18,
    sodium: 617,
    image: "https://mossenplace.com/wp-content/uploads/2021/06/IMG_4167.jpg"
    },
    {
    title: "Fettuccine with Morels, Asparagus, and Goat Cheese ",
    calories: 606,
    protein: 24,
    fat: 22,
    sodium: 267,
    image: "https://i.pinimg.com/originals/b2/28/78/b228786cee87c033b15ec13b96616e57.jpg"
    },
    {
    title: "Crisp Fried Fish Fillets Oriental ",
    calories: 430,
    protein: 45,
    fat: 13,
    sodium: 2079,
    image: "https://www.licious.in/blog/wp-content/uploads/2020/12/Fried-Fish-Fillet-1.jpg"
    },
    {
    title: "Tequila and Lime Chicken Tacos ",
    calories: 383,
    protein: 26,
    fat: 11,
    sodium: 241,
    image: "http://www.thechunkychef.com/wp-content/uploads/2016/04/Tequila-Lime-Chicken-Tacos-3.jpg"
    },
    {
    title: "Greek-Style Shrimp ",
    calories: 412,
    protein: 27,
    fat: 23,
    sodium: 2492,
    image: "https://i.pinimg.com/736x/0e/d4/fe/0ed4feb823c54c1040e4c2458f2d2e66.jpg"
    },
    {
    title: "Goat Cheese-Stuffed Turkey Burgers with Roasted Red Pepper Relish ",
    calories: 481,
    protein: 30,
    fat: 22,
    sodium: 819,
    image: "https://i.pinimg.com/originals/b8/01/e0/b801e03bc62cec2bd7617e3c66fc34df.jpg"
    },
    {
    title: "Mixed Seafood Grill with Paprika-Lemon Dressing ",
    calories: 542,
    protein: 75,
    fat: 22,
    sodium: 1003,
    image: "https://images.squarespace-cdn.com/content/v1/5db239c14644543229502b74/f28d2ea5-81b3-4623-98af-7d85ef4d9147/EP30+S1+-+Seafood+Mixed+Grill+with+a+Burnt+Tomato+and+Caper+Sauce.jpg"
    },
    {
    title: "Sweet Potato and Gruy�re Souffl� ",
    calories: 651,
    protein: 28,
    fat: 25,
    sodium: 674,
    image: "https://www.dinneratthezoo.com/wp-content/uploads/2020/10/sweet-potato-souffle-final-2.jpg"
    },
    {
    title: "Sliced Steak with Arugula ",
    calories: 464,
    protein: 24,
    fat: 38,
    sodium: 658,
    image: "https://images.eatthismuch.com/site_media/img/45608_ldementhon_44c4211c-7457-4c40-b8da-28ec25b92b0d.jpg"
    },
    {
    title: "Warm Pumpkin Salad with Polenta and Candied Pumpkin Seeds ",
    calories: 539,
    protein: 19,
    fat: 32,
    sodium: 1485,
    image: "https://platform.relish.com/wp-content/uploads/2020/01/warm-pumpkin-salad-bacon-pumpkin-seeds-1-mb-683x1024.jpg"
    },
    {
    title: "Ditalini Risotto ",
    calories: 881,
    protein: 33,
    fat: 31,
    sodium: 659,
    image: "https://assets.bonappetit.com/photos/57acd0ebf1c801a1038bc7c0/16:9/w_1200,c_limit/ditalini-risotto.jpg"
    },
    {
    title: "Steak and Eggs Korean Style ",
    calories: 700,
    protein: 40,
    fat: 33,
    sodium: 1516,
    image: "https://media.blueapron.com/recipes/1553/square_newsletter_images/20160225-1541-4-1697/2P_021616_4_SteakEggsKimchiFriedRice_20-_203953_SQ.jpg?quality=80&amp;width=850"
    },
    {
    title: "Meatballs in Tomato-Serrano Chile Sauce ",
    calories: 434,
    protein: 38,
    fat: 23,
    sodium: 1395,
    image: "https://healthyrecipesblogs.com/wp-content/uploads/2013/10/meatballs-tomato-sauce-featured.jpg"
    },
    {
    title: "Miso-Marinated Cod with Balsamic Vinegar and Grapefruit ",
    calories: 489,
    protein: 38,
    fat: 21,
    sodium: 1311,
    image: "http://www.thecruet.com/incs/image.php/resized__main1432671409_aged-grapefruit-white-balsamic-vinegar.jpg?width=475&amp;height=575&amp;cropratio=475:575&amp;image=/store_photos/resized__main1432671409_aged-grapefruit-white-balsamic-vinegar.jpg"
    },
    {
    title: "Smoked-Chicken and Cranberry Salad ",
    calories: 388,
    protein: 21,
    fat: 26,
    sodium: 80,
    image: "https://www.lifesambrosia.com/wp-content/uploads/xSpinach-Cranberry-Salad-Recipe-Photo-6-scaled.jpg.pagespeed.ic.n2UabdHwVk.jpg"
    },
    {
    title: "Shrimp and Mushrooms in Spicy Black Bean Oyster Sauce ",
    calories: 318,
    protein: 17,
    fat: 22,
    sodium: 895,
    image: "https://thewoksoflife.com/wp-content/uploads/2021/11/shrimp-black-bean-sauce-15.jpg"
    },
    {
    title: "Butternut Squash Lasagna Rolls ",
    calories: 519,
    protein: 33,
    fat: 29,
    sodium: 861,
    image: "https://jerryjamesstone.com/wp-content/uploads/2020/01/Butternut-Squash-Lasagna-Rolls-1.jpg"
    },
    {
    title: "White Bean Soup with Duck Confit ",
    calories: 559,
    protein: 27,
    fat: 23,
    sodium: 551,
    image: "https://www.bemindfulbehuman.com/wp-content/uploads/MG_1736.white_.bean_.soup_.with_.duck_.confit.final1_2.png"
    },
    {
    title: "Shrimp and Scallops with White Bean and Herb Sauce ",
    calories: 405,
    protein: 31,
    fat: 15,
    sodium: 905,
    image: "https://www.baked-at420.com/uploads/4/7/3/9/47391859/published/creamy-tuscan-shrimp-scallops-1.jpg?1607995689"
    },
    {
    title: "Hanoi Turmeric Grilled Fish with Dill and Onion ",
    calories: 779,
    protein: 51,
    fat: 34,
    sodium: 2013,
    image: "https://asianinspirations.com.au/wp-content/uploads/2018/12/R01295_Hanoi_Turmeric_Dish_with_Dill.jpg"
    },
    {
    title: "Linguine with Tomato-Leek Sauce ",
    calories: 792,
    protein: 21,
    fat: 30,
    sodium: 58,
    image: "https://www.triedandtruerecipe.com/wp-content/uploads/2019/02/Linguine-with-Easy-Buttery-Tomato-Sauce-1.png"
    },
    {
    title: "Smoked Whiskey Wings ",
    calories: 422,
    protein: 33,
    fat: 25,
    sodium: 449,
    image: "http://assets.epicurious.com/photos/54af4174c4a891cc44ccc13d/master/pass/51175660_whiskey-wings_1x1.jpg"
    },
    {
    title: "Pan-Grilled Salmon on Toast with Scallion Mayonnaise ",
    calories: 457,
    protein: 27,
    fat: 32,
    sodium: 293,
    image: "nan"
    },
    {
    title: "Pasta with White Beans, Tomatoes, and Escarole ",
    calories: 521,
    protein: 23,
    fat: 9,
    sodium: 134,
    image: "https://thewanderlustkitchen.com/wp-content/uploads/2017/01/pasta-white-beans-rosemary-pesto-3.jpg"
    },
    {
    title: "Spring Vegetable Risotto with Poached Eggs ",
    calories: 659,
    protein: 28,
    fat: 20,
    sodium: 335,
    image: "https://assets.bonappetit.com/photos/57ae2e121b33404414975b19/16:9/w_1280,c_limit/spring-vegetable-risotto-with-poached-eggs.jpg?mbid=social_retweet"
    },
    {
    title: "Scallop Potatoes with Gouda and Fennel ",
    calories: 370,
    protein: 15,
    fat: 21,
    sodium: 348,
    image: "https://i.pinimg.com/236x/30/ef/56/30ef56b21417289736008b465d1b8f33.jpg"
    },
    {
    title: "Spinach-Stuffed Chicken Breasts ",
    calories: 438,
    protein: 41,
    fat: 29,
    sodium: 417,
    image: "https://www.spendwithpennies.com/wp-content/uploads/2021/02/Spinach-Stuffed-Chicken-Breasts-SpendWithPennies-8.jpg"
    },
    {
    title: "Turkey Cheddar Sandwiches with Honey Mustard ",
    calories: 446,
    protein: 30,
    fat: 21,
    sodium: 593,
    image: "https://images.eatthismuch.com/site_media/img/906367_brittan_c07d8e49-a85d-44c8-9f19-f1ad677a74f6.jpeg"
    },
    {
    title: "Baked Sea Bass with Walnut-Breadcrumb Crust and Lemon-Dill Sauce ",
    calories: 530,
    protein: 41,
    fat: 31,
    sodium: 482,
    image: "https://www.thespruceeats.com/thmb/08LBrarg5Ylo7zNFgewdm_YZRcg=/0x3648/filters:no_upscale():max_bytes(150000):strip_icc()/baked-chilean-sea-bass-3058415-TO-2021-69a686f87ce94a12ae71fb7e78d818ef.jpg"
    },
    {
    title: "Summer Seafood Stew ",
    calories: 320,
    protein: 41,
    fat: 7,
    sodium: 1208,
    image: "http://3.bp.blogspot.com/-zxw5twPPCek/UcG6IoFuufI/AAAAAAAAIJY/jViw8367UxI/s1600/seafood+stew+recipe-123.jpg"
    },
    {
    title: "Poached Eggs in Pip�rade ",
    calories: 364,
    protein: 17,
    fat: 26,
    sodium: 282,
    image: "https://madaboutfood.co/wp-content/uploads/2019/10/Poached-1-scaled.jpg"
    },
    {
    title: "Pasta Shells with Prosciutto, Ricotta and Mushrooms ",
    calories: 990,
    protein: 46,
    fat: 40,
    sodium: 2125,
    image: "nan"
    },
    {
    title: "Grilled Spiced Garlic Skirt Steak ",
    calories: 473,
    protein: 46,
    fat: 31,
    sodium: 149,
    image: "https://static01.nyt.com/images/2021/03/30/multimedia/clark-skirt-steak/clark-skirt-steak-mobileMasterAt3x-v2.jpg"
    },
    {
    title: "Barbecue Turkey Sandwiches ",
    calories: 450,
    protein: 40,
    fat: 7,
    sodium: 942,
    image: "https://www.makeitgrateful.com/wp-content/uploads/2018/07/5D4B8922-BBQ-Turkey-Sandwiches-1200x1800.jpg"
    },
    {
    title: "Parmesan Mustard Chicken Wings ",
    calories: 433,
    protein: 23,
    fat: 32,
    sodium: 400,
    image: "https://i.pinimg.com/originals/33/c9/e1/33c9e10e97f543dc5d6a3f85373aa024.jpg"
    },
    {
    title: "Roast Pork Tenderloin with Mustard-Tarragon Sauce ",
    calories: 363,
    protein: 25,
    fat: 25,
    sodium: 219,
    image: "https://www.eatwell101.com/wp-content/uploads/2020/11/Pork-Tenderloin-Roast-recipe-3.jpg"
    },
    {
    title: "Baked Scallops with Herbed Breadcrumb Topping ",
    calories: 490,
    protein: 29,
    fat: 17,
    sodium: 1217,
    image: "https://i.pinimg.com/originals/cc/81/74/cc8174fc1d478d34ab1e7d0b9ef0bf36.jpg"
    },
    {
    title: "Mustard-Roasted Salmon with Lingonberry Sauce ",
    calories: 530,
    protein: 36,
    fat: 35,
    sodium: 275,
    image: "https://goodfoodandwords.com/wp-content/uploads/2018/12/Norwegian-Salmon-with-Lingonberry-Sauce-e1544638252711.jpg?is-pending-load=1"
    },
    {
    title: "Wood-Smoked Tri-Tip with Sicilian Herb Sauce ",
    calories: 388,
    protein: 24,
    fat: 32,
    sodium: 384,
    image: "https://images.squarespace-cdn.com/content/v1/5df84d5c1004ae1663abaf92/1600541219834-CK8BMCJ6ODL2NZZUF83X/Smoked+Tri-tip+with+Sicilian+Herb+Sauce-3.jpg"
    },
    {
    title: "Seared Sea Bass with Fresh Herbs and Lemon ",
    calories: 314,
    protein: 37,
    fat: 15,
    sodium: 143,
    image: "http://kitscoastal.com/wp-content/uploads/2016/08/seabass3-1024x1024.jpg"
    },
    {
    title: "Grilled Salmon Fillets with Balsamic Glaze ",
    calories: 405,
    protein: 32,
    fat: 25,
    sodium: 98,
    image: "https://i.pinimg.com/originals/dd/2c/87/dd2c87926725c5591b2d35693060b6eb.jpg"
    },
    {
    title: "Duck Breast and Fris�e Salad ",
    calories: 499,
    protein: 21,
    fat: 35,
    sodium: 642,
    image: "https://theboiledpeanuts.com/wp-content/uploads/2020/10/side-dishes-for-duck-breast-beautiful-duck-breasts-with-crispy-potatoes-and-frisee-salad-recipe-of-side-dishes-for-duck-breast.jpg"
    },
    {
    title: "Oil-Poached Tuna with Escarole and Lima Beans ",
    calories: 403,
    protein: 42,
    fat: 15,
    sodium: 480,
    image: "nan"
    },
    {
    title: "Braised Meat with Butternut Squash ",
    calories: 694,
    protein: 59,
    fat: 32,
    sodium: 824,
    image: "http://2.bp.blogspot.com/-z937gfpxFew/Tx-gQ5exo8I/AAAAAAAABS4/jv5IJ0Tv_BQ/s1600/IMG_8998.JPG"
    },
    {
    title: "Kale, Butternut Squash, and Pancetta Pie ",
    calories: 530,
    protein: 15,
    fat: 35,
    sodium: 655,
    image: "https://i.pinimg.com/originals/a8/cc/4d/a8cc4da4df4863f0e97a0344c5252088.jpg"
    },
    {
    title: "Braised Beef and Veal with Tomato Gravy ",
    calories: 502,
    protein: 45,
    fat: 25,
    sodium: 965,
    image: "https://www.smalltownwoman.com/wp-content/uploads/2020/01/Braised-Beef-DSC_1520.jpg"
    },
    {
    title: "Skirt Steak with Red-Wine Sauce ",
    calories: 447,
    protein: 34,
    fat: 31,
    sodium: 556,
    image: "https://fitfoodiefinds.com/wp-content/uploads/2022/12/Skirt-Steak-sq.jpg"
    },
    {
    title: "Great Curry in a Hurry ",
    calories: 493,
    protein: 38,
    fat: 30,
    sodium: 134,
    image: "https://www.symplytoogood.com.au/wp-content/uploads/2018/07/Curry-in-a-Hurry-book-5-825x550.jpg"
    },
    {
    title: "Italian Turkey, Bean, and Tomato Soup ",
    calories: 376,
    protein: 30,
    fat: 16,
    sodium: 963,
    image: "https://www.theharvestkitchen.com/wp-content/uploads/2017/12/italian-bean-soup-oh-scene.jpg"
    },
    {
    title: "Broccoli Rabe and Provolone Grinders ",
    calories: 409,
    protein: 21,
    fat: 21,
    sodium: 725,
    image: "https://assets.epicurious.com/photos/54b40f35d5e8c3e1070b0347/16:9/w_1280,c_limit/388710_provolone-broccoli-rabe-grinders_1x1.jpg"
    },
    {
    title: "Goat Cheese and Olive-Stuffed Chicken Breasts ",
    calories: 367,
    protein: 39,
    fat: 22,
    sodium: 234,
    image: "https://www.momontimeout.com/wp-content/uploads/2021/01/goat-cheese-stuffed-chicken-recipe-square.jpg"
    },
    {
    title: "Breaded Skinless Fish Fillets with Red Pepper Mayonnaise ",
    calories: 750,
    protein: 46,
    fat: 31,
    sodium: 1412,
    image: "http://images-gmi-pmc.edge-generalmills.com/b64229bc-9367-4fa4-ac30-b68f2bc0f56e.jpg"
    },
    {
    title: "Fried-Egg Caesar with Sun-Dried Tomatoes and Prosciutto Breadsticks ",
    calories: 456,
    protein: 24,
    fat: 31,
    sodium: 1383,
    image: "https://i.pinimg.com/originals/2b/49/e3/2b49e37a2aaf6d4dbc3f2344a73274ed.jpg"
    },
    {
    title: "Red Beans and Rice de Guise ",
    calories: 1046,
    protein: 58,
    fat: 39,
    sodium: 2046,
    image: "http://static1.squarespace.com/static/58b44bf820099eeee6c01fb2/58b450e21b631b2e9cf1ee49/5c4278e970a6ad17665c5740/1547860474620/Red+Beans+and+Rice.JPG?format=1500w"
    },
    {
    title: "Baked Orzo with Shrimp, Tomato Sauce, and Feta ",
    calories: 636,
    protein: 37,
    fat: 24,
    sodium: 1701,
    image: "http://1.bp.blogspot.com/-rEZfHmUX4f4/T2klAuRzB2I/AAAAAAAABTU/eCtt5drcJpE/s1600/shrimporzo2.jpg"
    },
    {
    title: "Rolled Pork Loin Roast Stuffed With Olives and Herbs ",
    calories: 369,
    protein: 33,
    fat: 25,
    sodium: 431,
    image: "https://i.pinimg.com/originals/08/ab/71/08ab71a6d791052d4a4735beb2245279.jpg"
    },
    {
    title: "Orecchiette with Savoy Cabbage, Peas, and Lemon Cream ",
    calories: 636,
    protein: 20,
    fat: 19,
    sodium: 555,
    image: "nan"
    },
    {
    title: "Smoked Trout Souffl� in a Phyllo Crust ",
    calories: 340,
    protein: 16,
    fat: 23,
    sodium: 467,
    image: "https://seafoodexperts.com.au/wp-content/uploads/2020/10/5048-Smoked-Trout-Terrines-CLEAN.jpg"
    },
    {
    title: "Turkey Gravy ",
    calories: 504,
    protein: 30,
    fat: 27,
    sodium: 1528,
    image: "https://therecipecritic.com/wp-content/uploads/2019/10/turkey_gravy_hero.jpg"
    },
    {
    title: "Southern California Crepes ",
    calories: 492,
    protein: 27,
    fat: 32,
    sodium: 444,
    image: "https://i.pinimg.com/originals/75/6e/97/756e97241ff437dc0f1ec8bbf8bbdd4d.jpg"
    },
    {
    title: "Spicy Mussels in White Wine ",
    calories: 305,
    protein: 23,
    fat: 16,
    sodium: 741,
    image: "https://i.pinimg.com/originals/1f/52/b2/1f52b2a67bc0d306e15bb6c7990d86dd.jpg"
    },
    {
    title: "Santa Fe Tortilla Pizza ",
    calories: 522,
    protein: 33,
    fat: 23,
    sodium: 526,
    image: "https://www.culinaryhill.com/wp-content/uploads/2021/05/Taco-Pizza-Culinary-Hill-1200x800-2.jpg"
    },
    {
    title: "Pork, Beef, and Black Bean Chili ",
    calories: 590,
    protein: 37,
    fat: 38,
    sodium: 1427,
    image: "https://recipeland.com/images/r/20639/c0e1fd007eaee5045a17_1024.jpg"
    },
    {
    title: "Spaghetti with Cremini Mushrooms, Lemon, and Thyme ",
    calories: 792,
    protein: 26,
    fat: 27,
    sodium: 911,
    image: "https://whollydelish.ca/wp-content/uploads/2017/06/IMG_8790.jpg"
    },
    {
    title: "Pasta Primavera Pronto ",
    calories: 741,
    protein: 27,
    fat: 25,
    sodium: 147,
    image: "nan"
    },
    {
    title: "Swordfish with Lime-Ginger Glaze ",
    calories: 381,
    protein: 38,
    fat: 12,
    sodium: 1031,
    image: "https://nvtrainingandnutrition.com/nv-media/2022/05/image.jpg"
    },
    {
    title: "Rigatoni with Cheese and Italian Sausage ",
    calories: 470,
    protein: 17,
    fat: 22,
    sodium: 773,
    image: "https://brooklynfarmgirl.com/wp-content/uploads/2021/06/Rigatoni-with-Sweet-Italian-Sausage-731x1024.jpg"
    },
    {
    title: "Zucchini Curry ",
    calories: 607,
    protein: 21,
    fat: 39,
    sodium: 901,
    image: "https://savoryspin.com/wp-content/uploads/2018/08/Easy-Zucchini-Curry.jpg"
    },
    {
    title: "Pasta Frittata with Broccoli Rabe and Sun-Dried Tomatoes ",
    calories: 445,
    protein: 23,
    fat: 19,
    sodium: 868,
    image: "nan"
    },
    {
    title: "White Cheddar Polenta with Sauteed Greens and Garlic-Roasted Portobellos ",
    calories: 476,
    protein: 16,
    fat: 29,
    sodium: 1431,
    image: "https://www.vegetarianventures.com/wp-content/uploads/2020/02/poblanopolentablog-1-of-11.jpg"
    },
    {
    title: "Stone Fruit Cobbler ",
    calories: 852,
    protein: 15,
    fat: 40,
    sodium: 366,
    image: "https://theseasidebaker.com/wp-content/uploads/2016/05/IMG_8675.jpg"
    },
    {
    title: "Quick Sweet Potato, Mushroom, and Black Bean Burrito ",
    calories: 632,
    protein: 21,
    fat: 27,
    sodium: 1167,
    image: "https://i.pinimg.com/originals/ca/de/7a/cade7a4a7db0383936e3311d3d85058c.png"
    },
    {
    title: "Spicy Gumbo-Laya ",
    calories: 582,
    protein: 39,
    fat: 31,
    sodium: 900,
    image: "https://i.pinimg.com/originals/c4/ec/18/c4ec18b10a854ce68866df143e4db3fa.jpg"
    },
    {
    title: "Barbecue Spice-Brined Grilled Turkey ",
    calories: 751,
    protein: 107,
    fat: 30,
    sodium: 4331,
    image: "https://www.howsweeteats.com/wp-content/uploads/2019/11/grilled-turkey-12.jpg"
    },
    {
    title: "Creamy White Bean and Chorizo Soup ",
    calories: 483,
    protein: 22,
    fat: 35,
    sodium: 925,
    image: "https://www.fromachefskitchen.com/wp-content/uploads/2020/10/Chorizo-White-Bean-and-Vegetable-Soup-14.jpg"
    },
    {
    title: "Kale with Sauteed Apple and Onion ",
    calories: 454,
    protein: 19,
    fat: 29,
    sodium: 136,
    image: "https://i0.wp.com/the-consumption.com/wp-content/uploads/2017/11/The-Consumption_Sauteed-Apple-and-Kale_steps2.jpg?resize=980%2C1307&amp;ssl=1"
    },
    {
    title: "Seared Salmon with Citrus-Soy Glaze ",
    calories: 508,
    protein: 37,
    fat: 37,
    sodium: 343,
    image: "https://1.bp.blogspot.com/-MIIM0x05qXY/XUgdj8clohI/AAAAAAACk9M/yppgno-y2y8ICYaElEovGXNVlPVCHv33ACLcBGAs/s1600/IMG_5393.JPG"
    },
    {
    title: "Vietnamese 'Pho' Rice Noodle Soup with Beef ",
    calories: 1084,
    protein: 88,
    fat: 38,
    sodium: 2714,
    image: "https://assets.epicurious.com/photos/57630c09e047a6cf1ee82677/master/w_1000,h_667,c_limit/vietnamese-pho-rice-noodle-soup-with-beef.jpg"
    },
    {
    title: "Sausage and Vegetable Saut� with Eggs ",
    calories: 468,
    protein: 20,
    fat: 33,
    sodium: 636,
    image: "https://allyskitchen.com/wp-content/uploads/2020/03/20200307_080951-001.jpg"
    },
    {
    title: "Hungarian-Style Beef with Bell Peppers and Caraway ",
    calories: 460,
    protein: 26,
    fat: 36,
    sodium: 169,
    image: "https://i.pinimg.com/originals/11/e4/00/11e400f6bdd5c5bdb2decef10f35df36.png"
    },
    {
    title: "Peanut Noodles with Gingered Vegetables and Tofu ",
    calories: 501,
    protein: 24,
    fat: 22,
    sodium: 45,
    image: "https://data.thefeedfeed.com/static/2021/03/04/16149035676041790fea813.jpg"
    },
    {
    title: "Fillet of Beef on Garlic Croutons with Roasted Onion, Caper, and Tarragon Sauce ",
    calories: 454,
    protein: 28,
    fat: 25,
    sodium: 921,
    image: "https://cdn.shopify.com/s/files/1/1044/2210/products/Screen_Shot_2017-01-10_at_11.34.33_PM_528b0587-38a2-46dc-99ec-434ed9896b4d_1024x1024.png?v=1503467905"
    },
    {
    title: "Chinese Fried Rice Deluxe ",
    calories: 500,
    protein: 17,
    fat: 25,
    sodium: 1086,
    image: "http://2.bp.blogspot.com/-2fMDxFPx7k0/URgnME-B6bI/AAAAAAAAC_k/RXr9gRsdbkg/s1600/037+fried+rice.jpg"
    },
    {
    title: "Corn and Bacon Pie ",
    calories: 587,
    protein: 18,
    fat: 40,
    sodium: 684,
    image: "https://www.tasteefulrecipes.com/wp-content/uploads/2019/07/Bacon-corn-pie-1.jpg"
    },
    {
    title: "Bucatini Carbonara with Zucchini ",
    calories: 598,
    protein: 25,
    fat: 28,
    sodium: 500,
    image: "https://data.thefeedfeed.com/static/2019/02/21/15507738415c6eee51c320b.JPG"
    },
    {
    title: "Sausages and Pork Chops Baked with Fruited Sauerkraut ",
    calories: 719,
    protein: 53,
    fat: 36,
    sodium: 2544,
    image: "https://i1.wp.com/www.everydayeileen.com/wp-content/uploads/2015/11/pork-chops-apples-and-sauerkraut.jpg?fit=1080%2C1080&amp;ssl=1"
    },
    {
    title: "Spiced Stonington Shrimp Steamed in Beer ",
    calories: 878,
    protein: 21,
    fat: 32,
    sodium: 730,
    image: "https://deansgapfarm.com/wp-content/uploads/2022/11/Spicy-steamed-shrimp-recipe.gif"
    },
    {
    title: "Seafood Chowder with Squash ",
    calories: 349,
    protein: 24,
    fat: 18,
    sodium: 1259,
    image: "https://i.pinimg.com/originals/af/93/d5/af93d5fb06dbfe3783827eef6aa42114.jpg"
    },
    {
    title: "Orzo with Garbanzo Beans, Goat Cheese, and Oregano ",
    calories: 809,
    protein: 35,
    fat: 38,
    sodium: 642,
    image: "nan"
    },
    {
    title: "Apple and Sausage Stuffing ",
    calories: 371,
    protein: 15,
    fat: 12,
    sodium: 850,
    image: "http://www.thecomfortofcooking.com/wp-content/uploads/2014/09/BestEverSausageSageAppleStuffing-3.jpg"
    },
    {
    title: "Smorgastarta ",
    calories: 488,
    protein: 17,
    fat: 36,
    sodium: 657,
    image: "http://1.bp.blogspot.com/-YTzzRLwWTOU/UMfnuP2d6II/AAAAAAAAGSA/CAJG2nT96dA/s1600/smorgastarta15.jpg"
    },
    {
    title: "Fish Soup with Tomatoes and Red Pepper-Garlic Sauce ",
    calories: 564,
    protein: 59,
    fat: 21,
    sodium: 2177,
    image: "https://poshjournal.com/wp-content/uploads/2020/04/fish-soup-11.jpg"
    },
    {
    title: "Roasted Pork Loin with Tropical Fruits ",
    calories: 560,
    protein: 58,
    fat: 25,
    sodium: 695,
    image: "https://i.pinimg.com/originals/e7/90/cb/e790cb0074b966af7fd9e33b8e31b5f1.jpg"
    },
    {
    title: "Eggplant Parmesan With Fresh Mozzarella ",
    calories: 716,
    protein: 26,
    fat: 39,
    sodium: 708,
    image: "http://shescookin.com/wp-content/uploads/2014/02/Eggplant-Parmesan-with-Fresh-Mozzarella-8689.jpg"
    },
    {
    title: "Grilled Pork Chops with Pineapple Salsa ",
    calories: 535,
    protein: 54,
    fat: 27,
    sodium: 1017,
    image: "http://homemadehooplah.com/wp-content/uploads/2015/07/Grilled-BBQ-Pork-Chops-with-Pineapple-Salsa-5.jpg"
    },
    {
    title: "Campanelle with White Beans, Lemon, and Burrata ",
    calories: 484,
    protein: 24,
    fat: 10,
    sodium: 380,
    image: "https://assets.epicurious.com/photos/556ccd6f5fa91f011a459c2d/1:1/w_2560%2Cc_limit/EP-05272015-pasta-Campanelle-with-White-Beans%2C-Lemon-+-Burrata.jpg"
    },
    {
    title: "Green-Curry Chicken with Peas and Basil ",
    calories: 303,
    protein: 29,
    fat: 18,
    sodium: 92,
    image: "https://i.pinimg.com/originals/1f/80/fa/1f80fa79a53b443dbaa9eda4bb75bb0a.jpg"
    },
    {
    title: "Paad Thai ",
    calories: 447,
    protein: 19,
    fat: 14,
    sodium: 1254,
    image: "nan"
    },
    {
    title: "Lion's Head Casserole ",
    calories: 459,
    protein: 34,
    fat: 29,
    sodium: 1727,
    image: "https://assets.epicurious.com/photos/5c3663149679672d5306e855/2:1/w_1260%2Ch_630/lions-head-casserole-recipe-gourmet-010919.jpg"
    },
    {
    title: "Spicy Indian Orzo ",
    calories: 623,
    protein: 29,
    fat: 35,
    sodium: 523,
    image: "https://themom100.com/wp-content/uploads/2018/09/orange-and-herb-orzo-006.jpg"
    },
    {
    title: "Veal, Mushroom and Red Wine Sauce ",
    calories: 388,
    protein: 25,
    fat: 26,
    sodium: 429,
    image: "https://trustedveal.com/wp-content/uploads/2019/07/cov-recipes-veal-cutlets-mushroom-sauce.jpg"
    },
    {
    title: "Lemony Chicken Milanese with Arugula Salad ",
    calories: 512,
    protein: 59,
    fat: 23,
    sodium: 652,
    image: "https://i.pinimg.com/originals/6f/2d/75/6f2d75151f3f310a5fb14189de28b34d.jpg"
    },
    {
    title: "Ginger-Scented Chicken Soup ",
    calories: 534,
    protein: 37,
    fat: 27,
    sodium: 1037,
    image: "https://www.afarmgirlsdabbles.com/wp-content/uploads/2020/04/AFarmgirlsDabbles_AFD-2a_sq.jpg"
    },
    {
    title: "Golden Fish Sticks ",
    calories: 533,
    protein: 37,
    fat: 29,
    sodium: 542,
    image: "https://wow.zamimg.com/uploads/screenshots/normal/29055-golden-fish-sticks-new-44-healing-power.jpg"
    },
    {
    title: "Baked Penne Pasta with Wild Mushroom Rago�t ",
    calories: 502,
    protein: 20,
    fat: 21,
    sodium: 352,
    image: "https://thefamiliarkitchen.com/wp-content/uploads/2019/08/IMG_0651.jpeg"
    },
    {
    title: "Veal Stew with Potatoes, Tomatoes and Oregano ",
    calories: 500,
    protein: 39,
    fat: 17,
    sodium: 143,
    image: "https://www.recipesfromitaly.com/wp-content/uploads/2021/09/veal-stew-with-potatoes-600x900-3.jpg"
    },
    {
    title: "Breakfast Tacos With Homemade Chorizo, Crispy Potatoes, and Egg ",
    calories: 690,
    protein: 31,
    fat: 39,
    sodium: 1001,
    image: "https://www.spoonforkbacon.com/wp-content/uploads/2018/06/Chorizo_breakfast_tacos.jpg"
    },
    {
    title: "Brazilian Chicken and Rice with Olives ",
    calories: 431,
    protein: 20,
    fat: 35,
    sodium: 209,
    image: "https://media1.s-nbcnews.com/j/MSNBC/Components/Video/201604/tdy_take_food_160427.today-inline-vid-featured-desktop.jpg"
    },
    {
    title: "Mussels With Spicy Tomato Oil and Grilled Bread ",
    calories: 667,
    protein: 45,
    fat: 40,
    sodium: 1128,
    image: "https://i.pinimg.com/originals/79/36/8a/79368aba32399a5ac923a11df13fe54f.jpg"
    },
    {
    title: "Linguine with Tuna, Capers, and Raisins ",
    calories: 920,
    protein: 41,
    fat: 36,
    sodium: 715,
    image: "https://www.safeway.ca/wp-content/uploads/2020/11/WE_Apr16_Tuna_Caper_Linguine.jpg"
    },
    {
    title: "Wild Mushroom Pizza with Garlic Confit and Bacon ",
    calories: 557,
    protein: 20,
    fat: 28,
    sodium: 776,
    image: "https://i.pinimg.com/originals/0b/53/7c/0b537c074c9c345b71bc2e25e081d73d.jpg"
    },
    {
    title: "Broccoli Cheddar Cornbread ",
    calories: 623,
    protein: 18,
    fat: 33,
    sodium: 1368,
    image: "https://rosebakes.com/wp-content/uploads/2010/03/Broccoli-Cheddar-Cornbread-recipe.jpg"
    },
    {
    title: "Smoked-Turkey Tea Sandwiches with Arugula Mayonnaise ",
    calories: 360,
    protein: 17,
    fat: 19,
    sodium: 462,
    image: "https://d1uc6tjdfuj6xp.cloudfront.net/wp-content/uploads/2021/03/25012123/Cucumber-and-Watercress-Tea-Sandwiches-tight.jpg"
    },
    {
    title: "Pork Tenderloin With Arugula Endive and Walnut Vinaigrette ",
    calories: 507,
    protein: 32,
    fat: 40,
    sodium: 87,
    image: "https://i0.wp.com/theweatheredgreytable.com/wp-content/uploads/2016/05/pork-roasted-pork-tenderloin-with-arugula-endive-and-walnut-vinaigrette-1.jpg?fit=1200%2C900&amp;ssl=1"
    },
    {
    title: "Fennel- and Coriander-Spiced Salmon Fillets ",
    calories: 400,
    protein: 35,
    fat: 28,
    sodium: 102,
    image: "https://images.eatsmarter.com/sites/default/files/styles/max_size/public/salmon-fillet-with-fennel-531670.jpg"
    },
    {
    title: "Roast Pork with Sweet-and-Sour Chile Cilantro Sauce ",
    calories: 634,
    protein: 40,
    fat: 29,
    sodium: 743,
    image: "https://4.bp.blogspot.com/-QO7sOAzdpE8/TyCq-kMQetI/AAAAAAAAAN0/8e1l_2CKTHo/s400/RoastSweetSourPorkBlog.jpg"
    },
    {
    title: "Two-Bean Chili with Vegetables ",
    calories: 738,
    protein: 40,
    fat: 38,
    sodium: 1590,
    image: "https://northwestcookingafloat.com/wp-content/uploads/2017/11/BlogBeefChiliwithVegetables3.jpg"
    },
    {
    title: "Sweet-and-Sour Brisket with Shallots and New Potatoes ",
    calories: 509,
    protein: 16,
    fat: 16,
    sodium: 85,
    image: "https://www.westwoodsofstaffordshire.com/wp-content/uploads/2020/06/Parmentier-Shallots-1536x966.jpg"
    },
    {
    title: "Angel Hair Pasta with Tuna and Tomato Sauce ",
    calories: 616,
    protein: 32,
    fat: 16,
    sodium: 372,
    image: "https://www.onionringsandthings.com/wp-content/uploads/2013/01/angel-hair-with-tomato-cream-sauce-4.jpg"
    },
    {
    title: "Chicken with Tomato and Feta Cheese Sauce ",
    calories: 569,
    protein: 47,
    fat: 33,
    sodium: 790,
    image: "https://www.crunchycreamysweet.com/wp-content/uploads/2021/08/chicken-with-tomatoes-and-feta-A.jpg"
    },
    {
    title: "Lemon-and Prosciutto-Stuffed Pork Loin Roast with Broccolini ",
    calories: 538,
    protein: 56,
    fat: 29,
    sodium: 1053,
    image: "https://theartoffoodandwine.com/wp-content/uploads/2023/03/pork-roast-hero.jpg"
    },
    {
    title: "Meat Loaf with Mustard-Dill Sauce ",
    calories: 455,
    protein: 30,
    fat: 30,
    sodium: 346,
    image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps33211_SD163324B08_14_2b-4.jpg"
    },
    {
    title: "Gorgonzola, Pears and Walnuts on Baguette ",
    calories: 356,
    protein: 19,
    fat: 27,
    sodium: 990,
    image: "https://usa.boska.com/cdn/shop/articles/Stokbrood_met_warme_Gorgonzola_peer_en_walnoten_880x588_crop_center.jpg?v=1673866051"
    },
    {
    title: "Spelt Spaghetti, Vine Tomatoes & Baked Ricotta ",
    calories: 616,
    protein: 26,
    fat: 28,
    sodium: 380,
    image: "https://kelliesfoodtoglow.com/wp-content/uploads/2015/09/spelt-spaghetti.jpg?w=691"
    },
    {
    title: "Pork Chops with Ginger-Soy Glaze ",
    calories: 558,
    protein: 66,
    fat: 29,
    sodium: 659,
    image: "https://therectangular.com/wp-content/uploads/2020/10/glazed-pork-chops-unique-honey-ginger-dijon-glazed-pork-chops-quick-easy-amp-few-of-glazed-pork-chops.jpg"
    },
    {
    title: "Quick Paella ",
    calories: 943,
    protein: 43,
    fat: 37,
    sodium: 1758,
    image: "https://www.deliciousmagazine.co.uk/wp-content/uploads/2018/07/927096-1-eng-GB_paella-768x960.jpg"
    },
    {
    title: "Chicken Breasts with Leeks and Mushrooms ",
    calories: 491,
    protein: 40,
    fat: 25,
    sodium: 276,
    image: "https://i.pinimg.com/originals/9c/28/50/9c2850190c82fa0fae9375d076390203.png"
    },
    {
    title: "Smoked Salmon Souffl� ",
    calories: 368,
    protein: 23,
    fat: 25,
    sodium: 517,
    image: "https://isteam.wsimg.com/ip/593df09e-aa1c-46a9-9b58-71118ce936f9/shutterstock_239371918.jpg/:/rs=w:1200,h:1200"
    },
    {
    title: "Striped Bass with Saffron Vegetables and Spiced Broccoli Rabe ",
    calories: 544,
    protein: 40,
    fat: 32,
    sodium: 547,
    image: "https://i.pinimg.com/736x/a2/50/d0/a250d0e25d94c3aef6d2bf5a0e5c8c7f--broccoli-rabe-recipe-bass.jpg"
    },
    {
    title: "Southwest Fusilli with Tomatoes, Garlic and Chilies ",
    calories: 670,
    protein: 21,
    fat: 29,
    sodium: 511,
    image: "https://i.pinimg.com/originals/74/a9/36/74a936ae8401b1bec27ddbdc1f7a794b.jpg"
    },
    {
    title: "Miso-Marinated Salmon with Citrus and Shiitakes ",
    calories: 502,
    protein: 39,
    fat: 34,
    sodium: 106,
    image: "https://i.pinimg.com/originals/8e/ee/c7/8eeec7633201613ad27778b2c0637d5a.png"
    },
    {
    title: "Hearty Corn and Clam Chowder ",
    calories: 461,
    protein: 36,
    fat: 14,
    sodium: 891,
    image: "https://www.saltandlavender.com/wp-content/uploads/2020/07/corn-chowder-recipe-1-720x1080.jpg"
    },
    {
    title: "Penne in Cream Sauce with Sausage ",
    calories: 558,
    protein: 30,
    fat: 23,
    sodium: 795,
    image: "http://assets.epicurious.com/photos/57a105e9437fcffe02f7235d/master/pass/penne-in-cream-sauce-with-sausage.jpg"
    },
    {
    title: "Grilled Hanger Steak with Cucumber Salad ",
    calories: 472,
    protein: 39,
    fat: 26,
    sodium: 1428,
    image: "https://www.tastingtable.com/img/gallery/grilled-hanger-steak/l-intro-1643659042.jpg"
    },
    {
    title: "Shrimp, Fava Bean, and Asparagus Salad ",
    calories: 429,
    protein: 25,
    fat: 26,
    sodium: 482,
    image: "https://2.bp.blogspot.com/-trEGyGPmGeM/VbD6mDEmSwI/AAAAAAAAsGk/UkIMn7GRUmU/s1600/Pea%2BSalad%2Bwith%2BShrimp2.jpg"
    },
    {
    title: "Sausage and Bell Pepper Meatloaf ",
    calories: 557,
    protein: 30,
    fat: 40,
    sodium: 1365,
    image: "https://www.thisisnotdietfood.com/wp-content/uploads/2019/10/sausageandpeppersmeatloaf-1-min.jpg"
    },
    {
    title: "Arctic Char with Pistachio Orange Vinaigrette ",
    calories: 473,
    protein: 39,
    fat: 31,
    sodium: 102,
    image: "https://images.eatthismuch.com/site_media/img/45087_tabitharwheeler_5321f638-c644-444a-85b8-2589b8f5a201.jpg"
    },
    {
    title: "Red Snapper Yuca Cakes with Mojo de Ajo ",
    calories: 314,
    protein: 19,
    fat: 13,
    sodium: 698,
    image: "https://friendseat.com/wp-content/uploads/2018/04/red-snapper-yuca-cakes-with-mojo-de-ajo.jpg"
    },
    {
    title: "Octopus with Linguine ",
    calories: 591,
    protein: 47,
    fat: 11,
    sodium: 544,
    image: "https://cdn.cosmosphilly.com/site/wp-content/uploads/2014/03/Octopus-with-Linguine-725x544.jpg"
    },
    {
    title: "Pasta with Eggplant and Basil Sauce ",
    calories: 694,
    protein: 24,
    fat: 32,
    sodium: 636,
    image: "nan"
    },
    {
    title: "Shrimp and Vegetables in Ginger Coriander Broth ",
    calories: 389,
    protein: 31,
    fat: 12,
    sodium: 1285,
    image: "https://newofday.com/wp-content/uploads/2020/08/Shrimp-broth-with-coriander-768x461.jpg"
    },
    {
    title: "Grilled Seafood Salad Ni�oise ",
    calories: 362,
    protein: 33,
    fat: 16,
    sodium: 606,
    image: "https://sodelicious.recipes/wp-content/uploads/2018/06/12-01-2018-R3-chefs-var2-Seafood-Salad.jpg"
    },
    {
    title: "Sea Scallops with Vegetable Rago�t ",
    calories: 368,
    protein: 20,
    fat: 22,
    sodium: 622,
    image: "https://www.costasinn.com/wp-content/uploads/2016/10/http-10.1.10.228-advpgallery.com-wp-content-uploads-2016-09-ThinkstockPhotos-461315101.jpg"
    },
    {
    title: "Spicy Shrimp and Grits ",
    calories: 772,
    protein: 42,
    fat: 38,
    sodium: 1363,
    image: "https://media.blueapron.com/recipes/21620/square_newsletter_images/1553010512-422-0024-4098/0422_2PF_Shrimp_0145_Square_Web_hi_res.jpg"
    },
    {
    title: "Ginger-Cashew Chicken ",
    calories: 403,
    protein: 40,
    fat: 20,
    sodium: 868,
    image: "https://www.wokandkin.com/wp-content/uploads/2019/07/Honey-Glazed-Ginger-Chicken-Saved-For-Web.gif"
    },
    {
    title: "Trout Grenobloise ",
    calories: 760,
    protein: 71,
    fat: 40,
    sodium: 1405,
    image: "https://assets.marthastewart.com/styles/wmax-1500/d32/trout-grenobloise-1006-mla102311/trout-grenobloise-1006-mla102311_sq.jpg?itok=Wp_DC1jX"
    },
    {
    title: "Teriyaki Pork Chops ",
    calories: 328,
    protein: 24,
    fat: 16,
    sodium: 2395,
    image: "https://lilluna.com/wp-content/uploads/2018/02/teriyaki-pork-chops-RESIZE-2-700x980.jpg"
    },
    {
    title: "Beef and Broccoli Stir Fry ",
    calories: 352,
    protein: 31,
    fat: 17,
    sodium: 1003,
    image: "https://www.jocooks.com/wp-content/uploads/2019/04/beef-and-broccoli-1-11.jpg"
    },
    {
    title: "Cod with Potatoes and Preserved Lemon Relish ",
    calories: 399,
    protein: 29,
    fat: 18,
    sodium: 142,
    image: "http://assets.epicurious.com/photos/54ac906619925f464b3abc8c/master/pass/51232250_cod-with-potatoes_1x1.jpg"
    },
    {
    title: "Noodle Soup with Soy-Cooked Pork (Slack Season Tan Tsi) ",
    calories: 472,
    protein: 15,
    fat: 28,
    sodium: 1129,
    image: "nan"
    },
    {
    title: "Broiled Portobello Topped with Creamy Scrambled Eggs ",
    calories: 329,
    protein: 17,
    fat: 28,
    sodium: 566,
    image: "https://i.pinimg.com/736x/84/dc/f9/84dcf9688ff6d639ad9a0dded18512ac--grilled-portobello-baked-eggs.jpg"
    },
    {
    title: "Shellfish Chowder ",
    calories: 508,
    protein: 37,
    fat: 21,
    sodium: 1885,
    image: "https://i1.wp.com/eatup.kitchen/wp-content/uploads/2020/01/Seafood-Chowder-5441-Web.jpg?fit=1200%2C1800&amp;ssl=1"
    },
    {
    title: "Orange-Brandy Chicken ",
    calories: 400,
    protein: 37,
    fat: 22,
    sodium: 193,
    image: "nan"
    },
    {
    title: "Grilled Salmon with Hoisin Glaze and Plum-Ginger Relish ",
    calories: 635,
    protein: 49,
    fat: 40,
    sodium: 1430,
    image: "https://i.pinimg.com/originals/f5/3f/b9/f53fb94d27adbb1da646af5df164809c.jpg"
    },
    {
    title: "Microwave Polenta ",
    calories: 531,
    protein: 20,
    fat: 27,
    sodium: 480,
    image: "https://www.massel.com.au/wp-content/uploads/2013/03/microwave-magic-polenta.jpg"
    },
    {
    title: "Beef Stew with Stout ",
    calories: 378,
    protein: 25,
    fat: 22,
    sodium: 410,
    image: "http://www.pbs.org/food/wp-content/blogs.dir/2/files/2015/03/beef-stout-stew-1.jpg"
    },
    {
    title: "Quick Mexican Corn Risotto ",
    calories: 425,
    protein: 17,
    fat: 16,
    sodium: 246,
    image: "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/17/73/99/5w0fLdEFSRCdx9DedK8E-IMG_6813.JPG"
    },
    {
    title: "Ranch Beans ",
    calories: 598,
    protein: 31,
    fat: 23,
    sodium: 702,
    image: "https://i5.walmartimages.com/asr/0065af5d-e03d-4d07-8ae6-73711e8629c1_1.3c021be1de57058807dad10aa125ec0f.jpeg"
    },
    {
    title: "Chicken Empanada with Chorizo, Raisins, and Olives ",
    calories: 365,
    protein: 18,
    fat: 21,
    sodium: 601,
    image: "https://i.pinimg.com/originals/96/f7/59/96f759bb5c227ddcee6cbdd41abf1179.jpg"
    },
    {
    title: "Mahi-Mahi with Lemongrass Slaw and Rice Fritters ",
    calories: 701,
    protein: 43,
    fat: 27,
    sodium: 2013,
    image: "https://i.pinimg.com/736x/3b/0e/18/3b0e18eb343cb5a08ebe97eaa6494406.jpg"
    },
    {
    title: "Grilled Pork Tenderloin with Fresh Fig Skewers ",
    calories: 395,
    protein: 33,
    fat: 18,
    sodium: 199,
    image: "https://ontariopork.on.ca/Portals/11/EasyDNNNews/878/images/img-IMG_1608_LR-800-800-p-L-85.jpg"
    },
    {
    title: "Parmesan Chicken with Mixed Baby Greens ",
    calories: 481,
    protein: 48,
    fat: 24,
    sodium: 437,
    image: "nan"
    },
    {
    title: "Yucatan-Style Chicken, Lime, and Orzo Soup ",
    calories: 300,
    protein: 29,
    fat: 10,
    sodium: 135,
    image: "https://d33wubrfki0l68.cloudfront.net/9067fa693ca271eb283c1cb1215998a833371f31/e9cf7/images/uploads/2021_04_05_lemon_chicken_orzo_soup_2.jpg"
    },
    {
    title: "Harissa Shrimp And Summer Vegetable Saut� ",
    calories: 462,
    protein: 24,
    fat: 13,
    sodium: 729,
    image: "https://i.pinimg.com/originals/08/6b/55/086b55e1405e9f39ec3ec00fda1a6fc5.jpg"
    },
    {
    title: "Fusilli with Asparagus and Bacon ",
    calories: 687,
    protein: 26,
    fat: 23,
    sodium: 346,
    image: "https://i.pinimg.com/originals/b8/e4/8f/b8e48f23a758782d6f76d0aa93d44e09.jpg"
    },
    {
    title: "Crab and Roasted Red Bell Pepper Soup ",
    calories: 745,
    protein: 24,
    fat: 16,
    sodium: 505,
    image: "https://theveganatlas.com/wp-content/uploads/2019/03/Roasted-red-bell-pepper-soup.jpg"
    },
    {
    title: "Goat Cheese, Artichoke, and Smoked Ham Strata ",
    calories: 719,
    protein: 42,
    fat: 40,
    sodium: 1931,
    image: "https://i.pinimg.com/originals/40/4d/4d/404d4d1c8e9d13c6d2d492b6029c6fd5.jpg"
    },
    {
    title: "Unstuffed Sweet-and-Sour Cabbage ",
    calories: 409,
    protein: 27,
    fat: 19,
    sodium: 420,
    image: "http://www.hunts.com/sites/g/files/qyyrlu501/files/uploadedImages/img_2220_31760.jpg"
    },
    {
    title: "Penne with Stir-Fried Beef and Red Bell Pepper ",
    calories: 860,
    protein: 42,
    fat: 30,
    sodium: 1126,
    image: "https://www.rachelcarr.com/wp-content/uploads/2017/09/red-pepper-penne-1024px-2.jpg"
    },
    {
    title: "Sauteed Scallops with Fennel Compote in Curry Sauce ",
    calories: 367,
    protein: 19,
    fat: 22,
    sodium: 894,
    image: "https://canolaeatwell.com/wp-content/uploads/2018/03/sauteedscallopswithpeasinlemontaragonsauce.jpg"
    },
    {
    title: "Chicken Curry Soup with Coconut and Lime ",
    calories: 562,
    protein: 59,
    fat: 28,
    sodium: 153,
    image: "https://www.afarmgirlsdabbles.com/wp-content/uploads/2021/03/coconut-curry-chicken-soup__AFD-9ab_s-b2-700x700.jpg"
    },
    {
    title: "Chicken and Mango Salad with Ginger-Orange Dressing ",
    calories: 514,
    protein: 34,
    fat: 35,
    sodium: 100,
    image: "https://natashaskitchen.com/wp-content/uploads/2018/04/Mango-Chicken-Salad-2.jpg"
    },
    {
    title: "Blue Cheese Burgers with Green Peppercorns ",
    calories: 364,
    protein: 36,
    fat: 22,
    sodium: 431,
    image: "https://laurenslatest.com/wp-content/uploads/2021/07/bacon-blue-cheese-burger-1.jpg"
    },
    {
    title: "Soft Beef Tacos with Salsa ",
    calories: 455,
    protein: 43,
    fat: 14,
    sodium: 904,
    image: "https://cdn-uploads.mealime.com/uploads/recipe/thumbnail/211/presentation_5e9107ab-7422-4023-97c4-0604955749a9.jpg"
    },
    {
    title: "Turkey Sausage and Vegetable Frittata Sandwich ",
    calories: 306,
    protein: 22,
    fat: 20,
    sodium: 461,
    image: "https://amyinthekitchen.com/wp-content/uploads/2021/11/Turkey-Sausage-Spinach-Frittata-in-a-cast-iron-skillet-1152x1536.jpg"
    },
    {
    title: "Apple and Sausage Stuffing ",
    calories: 540,
    protein: 15,
    fat: 38,
    sodium: 714,
    image: "http://www.thecomfortofcooking.com/wp-content/uploads/2014/09/BestEverSausageSageAppleStuffing-3.jpg"
    },
    {
    title: "Chipotle Turkey Cutlets with Charred Corn Salsa ",
    calories: 433,
    protein: 34,
    fat: 25,
    sodium: 128,
    image: "https://myquietkitchen.com/wp-content/uploads/2022/06/chipotle-chili-corn-salsa.jpg"
    },
    {
    title: "Mixed-Greens and Sausage Soup with Cornmeal Dumplings ",
    calories: 580,
    protein: 22,
    fat: 34,
    sodium: 1725,
    image: "https://i.pinimg.com/736x/00/55/cd/0055cd7d5ce2cc36d9a33926469ad19c.jpg"
    },
    {
    title: "Tomatoey Spiced Chickpeas ",
    calories: 504,
    protein: 17,
    fat: 25,
    sodium: 761,
    image: "https://thedinnershift.com/wp-content/uploads/2018/03/Spiced-Skillet-Toasted-Chickpeas-e1551062852358.jpg"
    },
    {
    title: "Quinoa, Lime and Chili-Crumbed Snapper With Sweet Potato Wedges ",
    calories: 718,
    protein: 49,
    fat: 16,
    sodium: 231,
    image: "https://images.eatthismuch.com/img/275403_bbebber_149aaa7f-d632-465a-a09c-627353403cb2.png"
    },
    {
    title: "Grilled Tandoori-Spiced Chicken Breasts Over Mesclun Salad ",
    calories: 755,
    protein: 117,
    fat: 26,
    sodium: 646,
    image: "https://www.wellplated.com/wp-content/uploads/2021/05/Best-Grilled-Chicken-Breast-1024x1536.jpg"
    },
    {
    title: "Curried Sea Bass ",
    calories: 322,
    protein: 35,
    fat: 18,
    sodium: 573,
    image: "https://www.krumpli.co.uk/wp-content/uploads/2021/03/Sea-Bass-Curry-with-Fenugreek-Potatoes-2.jpg"
    },
    {
    title: "Sesame Chicken and Stir-Fried Vegetables ",
    calories: 310,
    protein: 23,
    fat: 19,
    sodium: 371,
    image: "https://i.pinimg.com/originals/fc/7a/33/fc7a3365361b3c5ff2caa2f42175bcf2.png"
    },
    {
    title: "Chicken Roasted with Onions and Soy Sauce ",
    calories: 498,
    protein: 49,
    fat: 27,
    sodium: 1167,
    image: "https://i2.wp.com/www.angsarap.net/wp-content/uploads/2017/09/Soy-Sauce-Chicken-02.jpg?ssl=1"
    },
    {
    title: "Tuna in Avocado Halves ",
    calories: 343,
    protein: 27,
    fat: 22,
    sodium: 365,
    image: "https://wholelottayum.com/wp-content/uploads/2023/04/tuna-in-avocado-1024x1536.jpg"
    },
    {
    title: "Pan Bagna ",
    calories: 334,
    protein: 19,
    fat: 20,
    sodium: 350,
    image: "nan"
    },
    {
    title: "Medallions of Venison with Port and Cranberries ",
    calories: 371,
    protein: 42,
    fat: 14,
    sodium: 318,
    image: "https://seasonandthyme.com/wp-content/uploads/2022/02/venison-medallions-recipe-1-720x1080.jpeg"
    },
    {
    title: "Lemony Crab Salad with Baby Greens ",
    calories: 311,
    protein: 21,
    fat: 25,
    sodium: 650,
    image: "http://img.sndimg.com/food/image/upload/w_614,h_461,c_fit/v1/img/recipes/12/48/23/picYdiUfx.jpg"
    },
    {
    title: "Calzones With Chorizo and Kale ",
    calories: 693,
    protein: 33,
    fat: 33,
    sodium: 1763,
    image: "https://i.pinimg.com/originals/bd/37/36/bd373699b550aa179ec9afc1a401f613.jpg"
    },
    {
    title: "Meatless Tamale Pie ",
    calories: 812,
    protein: 26,
    fat: 21,
    sodium: 769,
    image: "https://i.pinimg.com/736x/87/89/8e/87898ee574db292719dc08e93a918fcf--did-you-eat-tamale-pie.jpg"
    },
    {
    title: "Broiled Chicken with Mango, Ginger and Cilantro ",
    calories: 385,
    protein: 37,
    fat: 21,
    sodium: 112,
    image: "https://bigoven-res.cloudinary.com/image/upload/h_320,w_320,c_fill/mahogany-broiled-chicken-with--207af9.jpg"
    },
    {
    title: "Basque-Style Ham and Eggs ",
    calories: 345,
    protein: 21,
    fat: 24,
    sodium: 554,
    image: "https://www.dairydiary.co.uk/wp-content/uploads/2019/01/Baked-Ham-and-Eggs-600x600.jpg"
    },
    {
    title: "Mole Poblano ",
    calories: 395,
    protein: 24,
    fat: 23,
    sodium: 80,
    image: "https://consalyazucar.com/cdn/recipes/mole_poblano.jpg"
    },
    {
    title: "Curried Red Snapper ",
    calories: 305,
    protein: 43,
    fat: 9,
    sodium: 152,
    image: "http://islifearecipe.net/wp-content/uploads/2014/12/IMG_8052-e1419941375806.jpg"
    },
    {
    title: "Beef Stroganov ",
    calories: 330,
    protein: 18,
    fat: 26,
    sodium: 329,
    image: "https://leaf.nutrisystem.com/wp-content/uploads/2018/02/beef-stroganoff.jpg"
    },
    {
    title: "Pan-Seared Tuna with Ginger-Shiitake Cream Sauce ",
    calories: 395,
    protein: 45,
    fat: 21,
    sodium: 973,
    image: "https://www.jessicagavin.com/wp-content/uploads/2020/08/pan-seared-salmon-19-1024x1536.jpg"
    },
    {
    title: "Sauteed Chicken Over Wilted Spinach with Kumquat Sauce ",
    calories: 467,
    protein: 40,
    fat: 22,
    sodium: 169,
    image: "http://assets.marthastewart.com/styles/wmax-1500/d9/20edf21_e/20edf21_e_sq.jpg?itok=bUa0j0Hz"
    },
    {
    title: "Linguine with Tomatoes, Olives, Feta, and Parsley ",
    calories: 723,
    protein: 18,
    fat: 39,
    sodium: 486,
    image: "https://i.pinimg.com/originals/46/d4/07/46d4079c07c4648e30da8938a98367b1.jpg"
    },
    {
    title: "Portobello Mushroom and Sausage Pizzas ",
    calories: 447,
    protein: 19,
    fat: 39,
    sodium: 1015,
    image: "http://www.slimmingeats.com/blog/wp-content/uploads/2012/07/portobello-mushroom-43.jpg"
    },
    {
    title: "Spinach Lasagne Rolls ",
    calories: 661,
    protein: 37,
    fat: 33,
    sodium: 2116,
    image: "http://4.bp.blogspot.com/_WDQSCJJbY1M/S9EY9r2CnfI/AAAAAAAACKs/t6Mogk3IWww/s1600/DSC_4988.JPG"
    },
    {
    title: "Broccoli, Red Pepper, and Cheddar Chowder ",
    calories: 616,
    protein: 24,
    fat: 30,
    sodium: 914,
    image: "https://perfectpotluck.com/files_images/recipes/recipes/1000/57.jpg"
    },
    {
    title: "Chopped Salad with Chicken, Couscous, and Vegetables ",
    calories: 559,
    protein: 17,
    fat: 39,
    sodium: 418,
    image: "https://media.blueapron.com/recipes/162/square_newsletter_images/20141219-0018-14193-7065/162_hi_res.jpg"
    },
    {
    title: "Mexican Scrambled Eggs ",
    calories: 437,
    protein: 22,
    fat: 31,
    sodium: 956,
    image: "https://gran.luchito.com/wp-content/uploads/2018/09/Mexican-Scrambled-Eggs-1-2-950x700.jpg"
    },
    {
    title: "Ham and Swiss Cheese Frittata ",
    calories: 402,
    protein: 25,
    fat: 30,
    sodium: 488,
    image: "https://www.todaysparent.com/wp-content/uploads/2020/03/Frittata-2-BC-Egg-1.jpg"
    },
    {
    title: "Artichokes, Capers, Olives, Lemon Zest, and Italian Tuna on Pasta Shells ",
    calories: 884,
    protein: 44,
    fat: 38,
    sodium: 6052,
    image: "https://i.pinimg.com/736x/79/b1/56/79b156ab0b66e543942f79c7d6d5a837.jpg"
    },
    {
    title: "Bulgur with Leeks, Cranberries, and Almonds ",
    calories: 501,
    protein: 16,
    fat: 19,
    sodium: 83,
    image: "https://koshereveryday.com/wp-content/uploads/2021/05/Bulgur-With-Cranberries-Leeks-And-Almonds-150x150.png"
    },
    {
    title: "Orzo with Tomatoes, Feta, and Green Onions ",
    calories: 536,
    protein: 18,
    fat: 28,
    sodium: 495,
    image: "nan"
    },
    {
    title: "Artichoke and Eggplant Panini ",
    calories: 681,
    protein: 19,
    fat: 40,
    sodium: 1162,
    image: "https://1.bp.blogspot.com/_t_NY3V0aAyo/S7DsCnNo6fI/AAAAAAAAAFg/vMk7qg76ddw/s1600/Panini+001.jpg"
    },
    {
    title: "Sheet-Pan Chicken Saltimbocca With Roasted Potatoes and Crispy Kale ",
    calories: 586,
    protein: 69,
    fat: 21,
    sodium: 1747,
    image: "https://1.bp.blogspot.com/-PujnSZldHKs/YA2YfMDJTQI/AAAAAAADJBI/G1LZNXzdDFUKSgs0mX9y4qOg3wZACNO_wCLcBGAsYHQ/s2048/IMG_5996.JPG"
    },
    {
    title: "Southern Rice Pilaf Stuffing with Ham, Pecans and Greens ",
    calories: 518,
    protein: 21,
    fat: 26,
    sodium: 1087,
    image: "https://i0.wp.com/happyhealthymama.com/wp-content/uploads/2018/08/RicePilaf.jpg?fit=667%2C1000&amp;ssl=1"
    },
    {
    title: "Pork and Ham Loaf with Marmalade-Mustard Glaze ",
    calories: 675,
    protein: 38,
    fat: 38,
    sodium: 1434,
    image: "https://i.pinimg.com/originals/ed/34/ac/ed34ac73847e1c7f2597e57cec782bb5.jpg"
    },
    {
    title: "Bacon and Molasses Beans ",
    calories: 513,
    protein: 24,
    fat: 9,
    sodium: 420,
    image: "https://fthmb.tqn.com/UcywSzBsiHwxAX6GbA-XYEZ4xoE=/3383x2258/filters:fill(auto,1)/slow-baked-beans-12012--58514f9f5f9b58a8cd476fcf.jpg"
    },
    {
    title: "Turkey Scaloppine with Mushroooms ",
    calories: 474,
    protein: 40,
    fat: 30,
    sodium: 453,
    image: "https://friendseat.com/wp-content/uploads/2018/04/TURKEY-SCALOPPINE-WITH-MUSHROOOMS.jpg"
    },
    {
    title: "Curried Pork Chops with Brandied Peach and Crabapple Chutney ",
    calories: 304,
    protein: 22,
    fat: 20,
    sodium: 537,
    image: "https://www.porchdrinking.com/wp-content/uploads/2021/06/PorkChopChutney2-1024x768@2x.jpg"
    },
    {
    title: "Cumin Pork Roast with Wild Mushroom Sauce ",
    calories: 480,
    protein: 43,
    fat: 30,
    sodium: 128,
    image: "https://www.abelandcole.co.uk/media/2224_18529_x.jpg"
    },
    {
    title: "Red Wine Beef Stew ",
    calories: 894,
    protein: 62,
    fat: 17,
    sodium: 1415,
    image: "https://familystylefood.com/wp-content/uploads/2017/11/french-beef-stew-familystylefood.jpg"
    },
    {
    title: "Vietnamese-Style Spaghetti Squash �Noodle� Bowls With Skirt Steak ",
    calories: 526,
    protein: 29,
    fat: 34,
    sodium: 2283,
    image: "https://i.pinimg.com/originals/95/d2/06/95d206a9b5ec75ec42480370571eefd3.jpg"
    },
    {
    title: "Red Snapper with Potatoes, Tomatoes and Red Wine ",
    calories: 626,
    protein: 48,
    fat: 27,
    sodium: 313,
    image: "https://images.kosher.com/details.slide/r/e/red_snapper_with_charred_patatoes%2C__tomatoes_and_lemons.jpg"
    },
    {
    title: "Croques-Monsieur ",
    calories: 433,
    protein: 25,
    fat: 24,
    sodium: 917,
    image: "https://www.croquemonsieur.com.au/images/2021/08/01/headerimg_0806.jpg"
    },
    {
    title: "Herbed Chicken and Arugula Panini ",
    calories: 575,
    protein: 34,
    fat: 34,
    sodium: 331,
    image: "https://twokooksinthekitchen.com/wp-content/uploads/2022/03/herblemonchicken-1.jpg"
    },
    {
    title: "Grilled Mustard-Dill Burgers ",
    calories: 439,
    protein: 36,
    fat: 20,
    sodium: 571,
    image: "https://groundbeefrecipes.com/wp-content/uploads/how-to-grill-burgers-9.jpg"
    },
    {
    title: "Curried Smoked Chicken and Wild Rice Salad ",
    calories: 482,
    protein: 24,
    fat: 26,
    sodium: 465,
    image: "https://www.familyfoodonthetable.com/wp-content/uploads/2017/01/Curried-wild-rice-salad-with-raisins-4.jpg"
    },
    {
    title: "Pasta with Asparagus Pesto ",
    calories: 797,
    protein: 24,
    fat: 38,
    sodium: 496,
    image: "https://reciperunner.com/wp-content/uploads/2019/06/Grilled-Chicken-Asparagus-Pesto-Pasta-Picture-scaled.jpg"
    },
    {
    title: "Caesar Pasta Salad ",
    calories: 497,
    protein: 15,
    fat: 22,
    sodium: 196,
    image: "https://www.justataste.com/wp-content/uploads/2019/03/caesar-pasta-salad-with-chicken-860x1297.jpg"
    },
    {
    title: "Anne Whiteman's Birthday Kugel ",
    calories: 449,
    protein: 15,
    fat: 19,
    sodium: 770,
    image: "https://assets.epicurious.com/photos/560d79187b55306961bf3575/16:9/w_1280,c_limit/350156.jpg"
    },
    {
    title: "Pappardelle with Chicken and Mushroom Rag� ",
    calories: 504,
    protein: 27,
    fat: 38,
    sodium: 359,
    image: "nan"
    },
    {
    title: "Spicy Wok Shrimp with Coconut Rice ",
    calories: 337,
    protein: 24,
    fat: 7,
    sodium: 1518,
    image: "https://assets.epicurious.com/photos/560dd831f9a84192308a4fe7/1:1/w_600%2Ch_600/1222183.jpg"
    },
    {
    title: "Halibut and Clams with Bell Peppers and Saffron ",
    calories: 402,
    protein: 48,
    fat: 14,
    sodium: 787,
    image: "https://images.squarespace-cdn.com/content/v1/545ed58ce4b03a44d11688d4/1617916474112-5EGUJNQRKKJTK17X41AA/Screen+Shot+2021-04-08+at+1.50.58+PM.png"
    },
    {
    title: "Crab Cakes with Tomato Salsa ",
    calories: 359,
    protein: 18,
    fat: 14,
    sodium: 824,
    image: "https://i1.wp.com/homefrontcooking.com/wp-content/uploads/2018/10/img_8282.jpg?resize=1470%2C680&amp;ssl=1"
    },
    {
    title: "Pasta with Herbed Turkey Sauce ",
    calories: 633,
    protein: 37,
    fat: 17,
    sodium: 446,
    image: "https://www.yourhomebasedmom.com/wp-content/uploads/2019/08/garlic-and-herb-pasta.jpg"
    },
    {
    title: "Steamed Sea Bass, Cantonese Style ",
    calories: 319,
    protein: 31,
    fat: 18,
    sodium: 783,
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/steamed-sea-bass-a52c4f4.jpg?quality=90&amp;resize=440,400"
    },
    {
    title: "Turkey Breast Stuffed with Sausage, Fennel, and Golden Raisins ",
    calories: 623,
    protein: 61,
    fat: 35,
    sodium: 685,
    image: "https://platform.relish.com/wp-content/uploads/2020/01/turkeybreaststuffed-683x1024.jpg"
    },
    {
    title: "Creamy Rosemary Turkey and Vegetable Potpie with Herbed Dumplings ",
    calories: 428,
    protein: 35,
    fat: 17,
    sodium: 611,
    image: "https://i.pinimg.com/originals/b0/c9/a3/b0c9a3ffde7e9bfb293fbf1e548ff17b.jpg"
    },
    {
    title: "Penne with Eggplant, Olives and Feta Cheese ",
    calories: 456,
    protein: 15,
    fat: 26,
    sodium: 598,
    image: "https://gffmag.com/wp-content/uploads/2019/03/Penne-Vegetables-Olives-and-Feta-e1555001717650-819x1024.jpg"
    },
    {
    title: "Salade Ni�oise ",
    calories: 669,
    protein: 42,
    fat: 39,
    sodium: 655,
    image: "https://www.womenfitness.net/wp/wp-content/uploads/2017/06/Salade-Ni�oise.jpg"
    },
    {
    title: "Corn Chowder ",
    calories: 573,
    protein: 21,
    fat: 29,
    sodium: 2008,
    image: "https://www.thechunkychef.com/wp-content/uploads/2018/09/Hearty-Homemade-Corn-Chowder-4-680x988.jpg"
    },
    {
    title: "Herbed Chicken Burgers ",
    calories: 712,
    protein: 32,
    fat: 29,
    sodium: 1663,
    image: "https://images.ctfassets.net/uw7yiu2kuigc/10sY3U2JQWI6eqce4CiUuG/a1a72772552ab9ce25a67eb433b2a954/image.jpg?fit=crop&amp;w=572&amp;h=730&amp;f=top"
    },
    {
    title: "Roast Pork Loin with Grapefruit ",
    calories: 692,
    protein: 64,
    fat: 33,
    sodium: 223,
    image: "https://s3-ap-southeast-2.amazonaws.com/pork-test-atomicmedia/staging/wp-content/uploads/2017/03/loin-1200-x-1200.jpg"
    },
    {
    title: "Spicy Garbanzo Bean and Turkey Sausage Soup ",
    calories: 472,
    protein: 28,
    fat: 16,
    sodium: 1174,
    image: "https://www.keyingredient.com/uploads/media/74/17/15c9b080b52772b263b5546d25bfc0ad9aa2.jpg?1560444047"
    },
    {
    title: "Mussel Soup with Avocado, Tomato, and Dill ",
    calories: 451,
    protein: 31,
    fat: 20,
    sodium: 794,
    image: "https://mediacdn.grabone.co.nz/asset/E1M0aEdsS6/box2=w-1200,h-0,dne-T`"
    },
    {
    title: "Chicken Fricass�e with Black-Eyed Peas and Spinach ",
    calories: 470,
    protein: 49,
    fat: 19,
    sodium: 413,
    image: "https://i.pinimg.com/originals/74/e1/d5/74e1d566f6d9e93410a1fb316009a625.png"
    },
    {
    title: "Southern-Style Meatloaf ",
    calories: 512,
    protein: 37,
    fat: 33,
    sodium: 1356,
    image: "https://divascancook.com/wp-content/uploads/2020/07/IMG_8442.jpg"
    },
    {
    title: "Chicken, Mushroom and Leek Fricass�e ",
    calories: 558,
    protein: 73,
    fat: 23,
    sodium: 156,
    image: "https://iowagirleats.com/wp-content/uploads/2015/01/Leek-and-Mushroom-Chicken-Skillet-iowagirleats-02-srgb.jpg"
    },
    {
    title: "Stir-Fried Shrimp, Snow Pea, and Walnut Salad ",
    calories: 318,
    protein: 20,
    fat: 23,
    sodium: 812,
    image: "http://4.bp.blogspot.com/-NjeRDCcVMHs/Tbd_czLJcYI/AAAAAAAAAsk/tKN_7rs9A64/s1600/Wild-Mushrooms-Snow-Peas-Salad-Recipe.jpg"
    },
    {
    title: "Provencal Salad ",
    calories: 575,
    protein: 37,
    fat: 33,
    sodium: 798,
    image: "http://4.bp.blogspot.com/-2QbY2-EBJNA/UX6KX9G_q6I/AAAAAAAAAME/7k3zxz9XqW8/s1600/IMGP1363.JPG"
    },
    {
    title: "Potato Pizza ",
    calories: 698,
    protein: 16,
    fat: 20,
    sodium: 284,
    image: "https://www.christinascucina.com/wp-content/uploads/2015/01/IMG_8465.jpg"
    },
    {
    title: "Greek-Style Shrimp ",
    calories: 412,
    protein: 27,
    fat: 23,
    sodium: 2492,
    image: "https://i.pinimg.com/736x/0e/d4/fe/0ed4feb823c54c1040e4c2458f2d2e66.jpg"
    },
    {
    title: "Octopus Salad ",
    calories: 563,
    protein: 36,
    fat: 30,
    sodium: 1274,
    image: "http://3.bp.blogspot.com/-elBlJj0rylg/TZCh66OQnXI/AAAAAAAAAIM/yXJYiHRBSak/s1600/-4.jpg"
    },
    {
    title: "Broiled Salmon with Orange-Miso Glaze ",
    calories: 371,
    protein: 36,
    fat: 23,
    sodium: 198,
    image: "https://keviniscooking.com/wp-content/uploads/2021/06/Broiled-Salmon-with-Honey-Sesame-Glaze-5-1000x1400.jpg"
    },
    {
    title: "Fettucine with Chicken and Bell Pepper Cream Sauce ",
    calories: 632,
    protein: 28,
    fat: 35,
    sodium: 274,
    image: "https://recipe30.com/wp-content/uploads/2020/07/Roasted-bell-pepper-sauce.jpg"
    },
    {
    title: "Salmon Teriyaki with Carrots and Onions ",
    calories: 398,
    protein: 25,
    fat: 21,
    sodium: 2493,
    image: "https://images.eatthismuch.com/site_media/img/45067_erin_m_bd133177-7673-4756-af39-2cfcd169c2f1.png"
    },
    {
    title: "Linguine with Shrimp and Asparagus ",
    calories: 739,
    protein: 31,
    fat: 26,
    sodium: 708,
    image: "http://producedepot.ca/wp-content/uploads/2014/05/Linguine1300x600.jpg"
    },
    {
    title: "Chicken Paillards with Tomato, Basil, and Roasted-Corn Relish ",
    calories: 636,
    protein: 72,
    fat: 29,
    sodium: 147,
    image: "https://i.pinimg.com/originals/5a/ca/12/5aca123374e1a7ac9de7f4cda39c3002.jpg"
    },
    {
    title: "Tilapia with Balsamic Butter Sauce, Thyme Mashed Potatoes, and Sugar Snap Peas ",
    calories: 596,
    protein: 32,
    fat: 33,
    sodium: 104,
    image: "https://assets.epicurious.com/photos/560dd80ff9a84192308a4f77/1:1/w_2560%2Cc_limit/236885.jpg"
    },
    {
    title: "Shrimp, Lobster, and Jicama Salad ",
    calories: 504,
    protein: 84,
    fat: 14,
    sodium: 2254,
    image: "https://assets.epicurious.com/photos/54b0a4081cc76a014cfad697/1:1/w_600%2Ch_600/51104660_shrimp-lobster-jicama-salad_1x1.jpg"
    },
    {
    title: "Roasted Chicken Sandwiches with Jack Cheese and Chili Mayonnaise ",
    calories: 598,
    protein: 53,
    fat: 39,
    sodium: 454,
    image: "https://i.pinimg.com/originals/37/b1/b9/37b1b940c086fd9c3126c451daab4cbf.jpg"
    },
    {
    title: "Chicken-Apricot Skewers ",
    calories: 440,
    protein: 22,
    fat: 34,
    sodium: 322,
    image: "http://www.simplyscratch.com/wp-content/uploads/2017/06/Grilled-Sticky-Sweet-Chicken-Skewers-l-SimplyScratch.com-20-1200x1798.jpg"
    },
    {
    title: "Pasta with Shrimp, Tomato, and Arugula ",
    calories: 763,
    protein: 34,
    fat: 23,
    sodium: 752,
    image: "https://www.familyfoodonthetable.com/wp-content/uploads/2019/05/Shrimp-penne-pasta-arugula-2.jpg"
    },
    {
    title: "Penne with Herbed Zucchini and Goat Cheese ",
    calories: 506,
    protein: 20,
    fat: 15,
    sodium: 160,
    image: "https://www.lecremedelacrumb.com/wp-content/uploads/2016/10/butternush-squash-penne-102.jpg"
    },
    {
    title: "Persian Beef-and-Split-Pea Stew ",
    calories: 305,
    protein: 24,
    fat: 11,
    sodium: 405,
    image: "https://www.platingsandpairings.com/wp-content/uploads/2018/03/persian-split-pea-beef-stew-12-683x1024.jpg"
    },
    {
    title: "Pinto Bean and Vegetable Chili ",
    calories: 578,
    protein: 27,
    fat: 14,
    sodium: 728,
    image: "https://rainbowplantlife.com/wp-content/uploads/2020/04/pintobeansweetpotatochili285of529-scaled-819x1024.jpg"
    },
    {
    title: "Sea Bass with Tomatoes and Onions ",
    calories: 627,
    protein: 51,
    fat: 31,
    sodium: 852,
    image: "https://www.cuisinefiend.com/RecipeImages/Roasted whole sea bass/roasted-sea-bass-1-600.jpg"
    },
    {
    title: "Shrimp, Crab, and Oyster Gumbo ",
    calories: 304,
    protein: 26,
    fat: 6,
    sodium: 892,
    image: "https://www.tastingtable.com/img/gallery/shrimp-and-okra-gumbo-recipe/l-intro-1640884574.jpg"
    },
    {
    title: "Veal Scallops with Wild Mushroom, Mustard, and Tarragon Sauce ",
    calories: 333,
    protein: 17,
    fat: 24,
    sodium: 487,
    image: "http://images.heb.com/is/image/HEBGrocery/recipe-hm-large/veal-scallops-with-mushroom-sauce-recipe.jpg"
    },
    {
    title: "Pork Chops with Rosemary-Vinegar Sauce ",
    calories: 347,
    protein: 31,
    fat: 22,
    sodium: 113,
    image: "https://i.pinimg.com/736x/77/a5/5f/77a55f15b0b2182be45b14a50baf34dd.jpg"
    },
    {
    title: "Lentil, Garbanzo Bean and Tomato Salad ",
    calories: 484,
    protein: 21,
    fat: 19,
    sodium: 278,
    image: "https://thestingyvegan.com/wp-content/uploads/2017/03/bean-and-lentil-salad-recipe-image-1080x1620.jpg"
    },
    {
    title: "Fettuccine with Shrimp, Scallops and Mussels ",
    calories: 962,
    protein: 50,
    fat: 28,
    sodium: 1178,
    image: "https://www.triedandtruerecipe.com/wp-content/uploads/2020/11/Spicy-Scallop-and-Shrimp-Linguine_MidPage-�-1.jpg"
    },
    {
    title: "Grilled Cheese with Smoked Turkey and Avocado ",
    calories: 596,
    protein: 35,
    fat: 35,
    sodium: 831,
    image: "https://thefoodiephysician.com/wp-content/uploads/2017/02/avocado-grilled-cheese.jpg"
    },
    {
    title: "Chicken Gyros with Yogurt-Dill Sauce ",
    calories: 333,
    protein: 33,
    fat: 11,
    sodium: 226,
    image: "https://www.fannetasticfood.com/wp-content/uploads/2018/06/chicken-gyros-with-watermelon-rind-tzatziki-2.jpg"
    },
    {
    title: "Crab and Herb Fettucine ",
    calories: 397,
    protein: 20,
    fat: 22,
    sodium: 634,
    image: "http://assets.epicurious.com/photos/560dd831f9a84192308a4fe3/1:1/w_600%2Ch_600/1222177.jpg"
    },
    {
    title: "Red Snapper with Black Olives, Capers, and Tomatoes ",
    calories: 466,
    protein: 35,
    fat: 35,
    sodium: 1084,
    image: "https://ketocookingchristian.com/wp-content/uploads/2022/05/Red-Snapper-with-Lemon-Caper-Butter-Sauce1-scaled.jpeg"
    },
    {
    title: "Spaghetti With Tomato and Walnut Pesto ",
    calories: 477,
    protein: 17,
    fat: 14,
    sodium: 304,
    image: "http://assets.epicurious.com/photos/577d247f4f2c1eb16e3d583f/2:1/w_1260,h_630/spaghetti-tomato-walnut-pesto-BA-070616.jpg"
    },
    {
    title: "Sauteed Chicken with Tomatoes, Olives, and Feta ",
    calories: 546,
    protein: 56,
    fat: 33,
    sodium: 323,
    image: "http://2sistersrecipes.com/wp-content/uploads/2015/07/DSC_0467.jpg"
    },
    {
    title: "Pasta with Shrimp and Artichokes ",
    calories: 594,
    protein: 36,
    fat: 14,
    sodium: 1026,
    image: "https://www.foodiecrush.com/wp-content/uploads/2015/04/Shrimp-Pasta-with-Roasted-Red-Peppers-and-Artichokes-_-foodiecrush.com-029.jpg"
    },
    {
    title: "West Indian Rice and Beans ",
    calories: 581,
    protein: 18,
    fat: 10,
    sodium: 1863,
    image: "https://bellyfull.net/wp-content/uploads/2021/03/Rice-and-Beans-blog-2.jpg"
    },
    {
    title: "Broiled Salmon with Spicy Maple Basting Sauce ",
    calories: 438,
    protein: 35,
    fat: 23,
    sodium: 251,
    image: "https://bigoven-res.cloudinary.com/image/upload/t_recipe-1280/spicy-maple-broiled-salmon-3.jpg"
    },
    {
    title: "Creamed Crab with Artichokes ",
    calories: 359,
    protein: 25,
    fat: 22,
    sodium: 1412,
    image: "https://i.pinimg.com/originals/11/75/86/117586d2593ff2c4d4aa715e1490ee5f.jpg"
    },
    {
    title: "Ham and Egg Strata ",
    calories: 523,
    protein: 35,
    fat: 27,
    sodium: 2029,
    image: "http://theseasonedmom.com/wp-content/uploads/2015/11/Ham-Egg-Cheese-Breakfast-Strata-8.jpg"
    },
    {
    title: "Roasted Yellow Pepper Bruschetta ",
    calories: 411,
    protein: 18,
    fat: 27,
    sodium: 659,
    image: "https://natashaskitchen.com/wp-content/uploads/2019/02/Roasted-Pepper-Bruschetta-2-1024x1536.jpg"
    },
    {
    title: "Halibut with Roasted Vegetables and Spicy Cilantro Sauce ",
    calories: 421,
    protein: 33,
    fat: 5,
    sodium: 205,
    image: "https://tamingofthespoon.com/wp-content/uploads/2016/04/Roasted-Halibut-with-Cilantro-Lime-Sauce-R1-1-683x1024.jpg"
    },
    {
    title: "Fettuccine with Tomatoes, Bacon, Arugula and Goat Cheese ",
    calories: 616,
    protein: 26,
    fat: 31,
    sodium: 561,
    image: "https://i.pinimg.com/originals/b8/bc/a9/b8bca9253be4e51007d89a44886c4c1d.jpg"
    },
    {
    title: "Chicken in Lemongrass Sauce ",
    calories: 455,
    protein: 39,
    fat: 23,
    sodium: 1430,
    image: "https://assets.bonappetit.com/photos/5e8cdb6ca7a01c00083b08aa/1:1/w_2560%2Cc_limit/HMONG-Grilled-Chicken-Lemongrass-Sauce.jpg"
    },
    {
    title: "Wine-Braised Pork Loin ",
    calories: 430,
    protein: 32,
    fat: 26,
    sodium: 1080,
    image: "https://www.cookingclassy.com/wp-content/uploads/2020/12/pork-loin-1-1021x1536.jpg"
    },
    {
    title: "Meatball and Vegetable Soup ",
    calories: 436,
    protein: 21,
    fat: 22,
    sodium: 1161,
    image: "https://i0.wp.com/lifewiththecrustcutoff.com/wp-content/uploads/2018/10/Meatball-Vegetable-Soup-5.jpg?fit=1024%2C1536&amp;ssl=1"
    },
    {
    title: "Coffee-Rubbed Cheeseburgers with Texas Barbecue Sauce ",
    calories: 543,
    protein: 39,
    fat: 32,
    sodium: 871,
    image: "https://i.pinimg.com/originals/16/93/07/169307649c313824ce6a62b3a25e6f1b.jpg"
    },
    {
    title: "Meatballs with Bulgur in Onion and Tomato Sauce (Voli Me Plyguri) ",
    calories: 508,
    protein: 29,
    fat: 31,
    sodium: 541,
    image: "https://turkishfoodie.com/wp-content/uploads/2022/09/Bulgur-Meatballs.jpg"
    },
    {
    title: "Cincinnati-Style Chili ",
    calories: 557,
    protein: 69,
    fat: 23,
    sodium: 816,
    image: "https://i.pinimg.com/originals/14/8d/a9/148da9a159e549b4cc4be555cee6b7c3.png"
    },
    {
    title: "Spinach Risotto ",
    calories: 782,
    protein: 30,
    fat: 26,
    sodium: 1029,
    image: "https://www.tasteofhome.com/wp-content/uploads/2020/04/Mushroom-Spinach-Risotto_EXPS_TOHCA20_84504_E10_17_7b-1.jpg"
    },
    {
    title: "Supper Clam Chowder ",
    calories: 592,
    protein: 48,
    fat: 19,
    sodium: 782,
    image: "https://natashaskitchen.com/wp-content/uploads/2017/09/Clam-Chowder-Soup-Recipe-5.jpg"
    },
    {
    title: "Soy-Glazed Beef Burger ",
    calories: 454,
    protein: 28,
    fat: 32,
    sodium: 910,
    image: "https://images.deliveryhero.io/image/foodpanda/recipes/beef-burger-recipe-1.jpg"
    },
    {
    title: "Panfried Flank Steak with Mushroom Rago�t ",
    calories: 409,
    protein: 40,
    fat: 25,
    sodium: 833,
    image: "nan"
    },
    {
    title: "Spiced Tuna Steaks with Fennel and Red Peppers ",
    calories: 390,
    protein: 46,
    fat: 13,
    sodium: 203,
    image: "https://www.thespruceeats.com/thmb/Fg7aIczjpcCdDGF2qqHFNdPeLuY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spice-rubbed-seared-tuna-steaks-balsamic-101974-Final-5ba013a9c9e77c0050f3042f.jpg"
    },
    {
    title: "Balsamic and Tomato Roast Chicken ",
    calories: 493,
    protein: 42,
    fat: 21,
    sodium: 340,
    image: "https://bigoven-res.cloudinary.com/image/upload/t_recipe-1280/balsamic-and-tomato-roast-chicken.jpg"
    },
    {
    title: "Chinese Trinidadian Stir-Fried Shrimp with Rum ",
    calories: 344,
    protein: 36,
    fat: 7,
    sodium: 2374,
    image: "https://i.pinimg.com/originals/4a/b0/c6/4ab0c6523e5dede6d6e360d4b1e791ff.jpg"
    },
    {
    title: "Risotto Primavera ",
    calories: 529,
    protein: 28,
    fat: 16,
    sodium: 975,
    image: "https://www.mangiarebenevenezia.it/wp-content/uploads/2018/04/risotto-primavera.jpg"
    },
    {
    title: "Irene's Beer Stew ",
    calories: 460,
    protein: 40,
    fat: 22,
    sodium: 973,
    image: "https://i.pinimg.com/originals/4a/a7/fd/4aa7fd390981d350986d8ea556d4592a.jpg"
    },
    {
    title: "Fettuccine with Walnuts, Zucchini Ribbons, and Pecorino Romano ",
    calories: 428,
    protein: 20,
    fat: 10,
    sodium: 703,
    image: "https://www.easyrecipesus.com/wp-content/uploads/2024/03/Fettuccine-with-Walnuts-Zucchini-Ribbons-and-Pecorino-Romano.jpg"
    },
    {
    title: "Pasta with Butternut Squash and Spinach ",
    calories: 583,
    protein: 23,
    fat: 14,
    sodium: 367,
    image: "https://domesticgothess.com/wp-content/uploads/2015/01/spinach-ricotta-and-butternut-squash-pasta.jpg"
    },
    {
    title: "Grilled Pork Chops with Anise-Seed Rub and Mango Mojo ",
    calories: 497,
    protein: 42,
    fat: 29,
    sodium: 1565,
    image: "https://www.cookingclassy.com/wp-content/uploads/2019/06/grilled-pork-chops-7-788x1182.jpg"
    },
    {
    title: "Black Bean Ancho Chili ",
    calories: 678,
    protein: 31,
    fat: 21,
    sodium: 353,
    image: "https://www.yummygoodness.com/wp-content/uploads/2017/10/DSCN5101-watermark.jpg"
    },
    {
    title: "Herbed-Cheese and Zucchini Omelet ",
    calories: 507,
    protein: 28,
    fat: 39,
    sodium: 503,
    image: "http://www.recipetineats.com/wp-content/uploads/2017/09/Ultra-Lazy-Zucchini-Ham-Omelette-4.jpg"
    },
    {
    title: "Shaved Asparagus with Parmesan Vinaigrette ",
    calories: 431,
    protein: 33,
    fat: 17,
    sodium: 135,
    image: "https://i.pinimg.com/originals/b1/17/c1/b117c1685c7aad5322c911c9150e14c3.jpg"
    },
    {
    title: "Turkey Gravy ",
    calories: 504,
    protein: 30,
    fat: 27,
    sodium: 1528,
    image: "https://therecipecritic.com/wp-content/uploads/2019/10/turkey_gravy_hero.jpg"
    },
    {
    title: "Chicken and Mashed Potatoes with Herb-Roasted Tomatoes and Olive Broth ",
    calories: 551,
    protein: 41,
    fat: 38,
    sodium: 332,
    image: "https://media.blueapron.com/recipes/21918/square_newsletter_images/1554238593-35-0013-7029/0506_FPP_Chicken__119_Square_Web.jpg?quality=80&amp;width=850&amp;format=pjpg"
    },
    {
    title: "Grilled Portobello Burgers with Piquillo Pepper A�oli and Watercress ",
    calories: 505,
    protein: 17,
    fat: 32,
    sodium: 744,
    image: "https://www.mondaycampaigns.org/wp-content/uploads/2020/03/Grilled-Portobello-Burger.jpg"
    },
    {
    title: "Sauteed Turbot with Braised Endive, Celery Root Flan, Black Truffles, and Garlic Nage ",
    calories: 646,
    protein: 32,
    fat: 38,
    sodium: 2220,
    image: "http://www.bravabod.com/wp-content/uploads/2020/05/sauteedCelery_a.jpg"
    },
    {
    title: "Cumin-Crusted Monster Pork Chop with Peach Chipotle Salsa ",
    calories: 411,
    protein: 18,
    fat: 33,
    sodium: 867,
    image: "https://i.pinimg.com/originals/0f/56/16/0f56163048f9030c4f12bc25cd86dead.jpg"
    },
    {
    title: "Layered Chicken Enchiladas with Tomatillo-Cilantro Sauce ",
    calories: 502,
    protein: 42,
    fat: 25,
    sodium: 536,
    image: "https://i.pinimg.com/originals/3b/d8/d7/3bd8d7b6cc5295d3d9d426edc662bb23.png"
    },
    {
    title: "Salmon Platter with Caper Dressing ",
    calories: 617,
    protein: 23,
    fat: 40,
    sodium: 1741,
    image: "https://iheartumami.com/wp-content/uploads/2020/05/Smoked-Salmon-with-Caper-Chive-Dressing-I-Heart-Umami-3-700x1050.jpg"
    },
    {
    title: "Red-Wine Braised Rabbit with Sage Polenta ",
    calories: 806,
    protein: 75,
    fat: 31,
    sodium: 1448,
    image: "http://pm1.narvii.com/7815/53ec314ae013c871edb0d7e4f695609827ee2854r1-2048-1536v2_uhq.jpg"
    },
    {
    title: "Corn Bread Panzanella ",
    calories: 605,
    protein: 15,
    fat: 33,
    sodium: 953,
    image: "https://www.lifeisbutadish.com/wp-content/uploads/2017/05/Grilled-Corn-Panzanella_-7-600x844.jpg"
    },
    {
    title: "Herbed Goat Cheese Tart ",
    calories: 347,
    protein: 15,
    fat: 29,
    sodium: 361,
    image: "https://spiceandstiletto.com/wp-content/uploads/2021/02/IMG_2056-scaled.jpg"
    },
    {
    title: "Butternut Squash Soup with Star Anise and Ginger Shrimp ",
    calories: 1108,
    protein: 190,
    fat: 20,
    sodium: 7955,
    image: "https://www.chefspencil.com/wp-content/uploads/Star-Anise-Butternut-Squash-Soup-640x959.jpg"
    },
    {
    title: "Sesame Beef and Snow Pea Soup ",
    calories: 417,
    protein: 23,
    fat: 13,
    sodium: 942,
    image: "https://cmx.weightwatchers.com.au/assets-proxy/weight-watchers/image/upload/q_auto/t4oliuptrgqkozdy0yps.jpg?auto=webp"
    },
    {
    title: "Tuna Kebabs with Ginger-Chile Marinade ",
    calories: 435,
    protein: 43,
    fat: 20,
    sodium: 527,
    image: "https://i.pinimg.com/originals/02/89/cd/0289cdcf7ae7b2b5a9e2231e56d94901.jpg"
    },
    {
    title: "Spicy Crab Spaghettini with Preserved Lemon ",
    calories: 447,
    protein: 19,
    fat: 21,
    sodium: 574,
    image: "http://www.gourmet.com.s3-website-us-east-1.amazonaws.com/images/recipes/2008/05/mare_spaghettini608.jpg"
    },
    {
    title: "'Opulent' Chicken ",
    calories: 660,
    protein: 54,
    fat: 39,
    sodium: 373,
    image: "http://1.bp.blogspot.com/_GHfud36HfWM/TR9LbU0SdII/AAAAAAAADqE/R4GMZEM80aQ/s1600/P1017407.JPG"
    },
    {
    title: "Shrimp, Vegetable and Cashew Stir-Fry ",
    calories: 618,
    protein: 31,
    fat: 16,
    sodium: 1593,
    image: "https://i.pinimg.com/originals/c7/6d/d8/c76dd8e33c1e6052acb22cd04e07a61b.png"
    },
    {
    title: "Asian-Style Crab and Shrimp Cakes ",
    calories: 715,
    protein: 32,
    fat: 38,
    sodium: 1952,
    image: "https://blogs.columbian.com/small-plates/wp-content/uploads/sites/37/2015/03/Crab-cakes.jpg"
    },
    {
    title: "Yam and Black Bean Burritos with Amaranth ",
    calories: 494,
    protein: 15,
    fat: 6,
    sodium: 509,
    image: "https://upload.oola.com/rola/uploads/2021/12/black-bean-yam-and-amaranthc14e5e-1.jpg"
    },
    {
    title: "Louisiana Jambalaya ",
    calories: 519,
    protein: 17,
    fat: 26,
    sodium: 1165,
    image: "https://www.itisakeeper.com/wp-content/uploads/2017/11/Louisiana-Jambalaya-Recipe-SQ.jpg"
    },
    {
    title: "Cauliflower Risotto with Brie and Almonds ",
    calories: 554,
    protein: 19,
    fat: 24,
    sodium: 817,
    image: "https://realhealthyrecipes.com/uploads/images/2017-09-28/351134780/1551224664large.jpg"
    },
    {
    title: "Mint-Marinated Shrimp with Tabbouleh, Tomatoes, and Feta ",
    calories: 564,
    protein: 17,
    fat: 31,
    sodium: 1371,
    image: "https://familystylefood.com/wp-content/uploads/2021/03/Feta-Shrimp-macro-2-1200x1800.jpg"
    },
    {
    title: "Curried Peanut Soup ",
    calories: 490,
    protein: 18,
    fat: 29,
    sodium: 299,
    image: "https://i.pinimg.com/736x/77/7d/90/777d906e204e1a84660d81dc0a0a244e.jpg"
    },
    {
    title: "Sausage and White Bean 'Cassoulet' ",
    calories: 771,
    protein: 49,
    fat: 24,
    sodium: 1017,
    image: "http://2.bp.blogspot.com/-uI05tulxPT8/UDGcn37CizI/AAAAAAAACLI/UEXZ21fb49o/s1600/DSC_1312.JPG"
    },
    {
    title: "Asparagus and Leek Risotto with Prosciutto ",
    calories: 539,
    protein: 22,
    fat: 18,
    sodium: 629,
    image: "https://hurrythefoodup.com/wp-content/uploads/2016/04/asparagus-risotto-16.jpg"
    },
    {
    title: "Seared Halibut with Haricots Verts, Scallions, and White Wine Sauce ",
    calories: 509,
    protein: 40,
    fat: 33,
    sodium: 201,
    image: "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_73,ar_16:9,w_1024/v1/img/recipes/20/76/23/piclUmK6D.jpg"
    },
    {
    title: "Lentil Stew with Spinach and Potatoes ",
    calories: 601,
    protein: 29,
    fat: 15,
    sodium: 1495,
    image: "https://easydinnerideas.com/wp-content/uploads/2021/03/Lentil-Stew-2-735x1103.jpeg"
    },
    {
    title: "Pistachio-Crusted Scallops ",
    calories: 318,
    protein: 23,
    fat: 21,
    sodium: 649,
    image: "https://www.prouditaliancook.com/wp-content/uploads/2016/01/pista-scal-1.jpg"
    },
    {
    title: "Bucatini All'Amatriciana ",
    calories: 755,
    protein: 27,
    fat: 31,
    sodium: 692,
    image: "https://i0.wp.com/noplatelikehome.com/wp-content/uploads/2017/02/DSC_5600.jpg?resize=3671%2C2252&amp;ssl=1"
    },
    {
    title: "Dilled Spinach Crepes with Avgolemono Sauce ",
    calories: 440,
    protein: 20,
    fat: 22,
    sodium: 595,
    image: "https://thecrookedcarrot.com/wp-content/uploads/2019/05/spinach-crepes-FI2-2.jpg"
    },
    {
    title: "Cheddar Biscuits with Fried Eggs, Ham, and Brown Butter ",
    calories: 324,
    protein: 15,
    fat: 22,
    sodium: 550,
    image: "https://www.browneyedbaker.com/wp-content/uploads/2020/06/Cheddar-bay-biscuits-12-1200.jpg"
    },
    {
    title: "Pinon ",
    calories: 798,
    protein: 35,
    fat: 35,
    sodium: 716,
    image: "https://mxcity.mx/wp-content/uploads/2020/05/pi�on-1.jpg"
    },
    {
    title: "Southeast Asian Squid Salad ",
    calories: 397,
    protein: 34,
    fat: 19,
    sodium: 1288,
    image: "http://assets.epicurious.com/photos/560dd77d7b55306961bfaa37/1:1/w_600%2Ch_600/235473.jpg"
    },
    {
    title: "Ultimate Turkey Stock ",
    calories: 314,
    protein: 32,
    fat: 18,
    sodium: 137,
    image: "http://glebekitchen.com/wp-content/uploads/2016/05/concentratedturkeystock.jpg"
    },
    {
    title: "Lobster, Scallops, and Mussels with Tomato Garlic Vinaigrette ",
    calories: 802,
    protein: 108,
    fat: 32,
    sodium: 2831,
    image: "https://i.pinimg.com/736x/3b/fd/36/3bfd36980595c04f267527c08f02202f--mussels-scallops.jpg"
    },
    {
    title: "Chili-Seasoned Fish Sticks ",
    calories: 589,
    protein: 38,
    fat: 35,
    sodium: 380,
    image: "https://www.themediterraneandish.com/wp-content/uploads/2020/04/homemade-fish-sticks-recipe-10.jpg"
    },
    {
    title: "Rosemary Citrus Miso-Rubbed Turkey ",
    calories: 841,
    protein: 110,
    fat: 37,
    sodium: 1040,
    image: "https://thiscookindad.com/wp-content/uploads/2015/11/Rosemary-Citrus-Turkey-1.jpg"
    },
    {
    title: "Spiced Pork Tenderloin With Cherry-Thyme Pan Sauce ",
    calories: 760,
    protein: 95,
    fat: 26,
    sodium: 255,
    image: "http://images.lifesambrosia.com/food/1200/spiced-pork-tenderloin.jpg"
    },
    {
    title: "Halibut in Chard Leaves with Lemon-Thyme Butter ",
    calories: 400,
    protein: 38,
    fat: 26,
    sodium: 271,
    image: "https://images.eatthismuch.com/img/45637_HillOK444_1fa54a7d-03d8-4aa5-b674-e5c887e81ab1.png"
    },
    {
    title: "Grilled Fish with Orange-Fennel Salsa ",
    calories: 435,
    protein: 39,
    fat: 21,
    sodium: 514,
    image: "https://www.harmonsgrocery.com/wp-content/uploads/2020/10/RESIZED-Grilled-Fish-with-Citrus-Salsa.jpg"
    },
    {
    title: "Turkey Osso Buco ",
    calories: 643,
    protein: 67,
    fat: 34,
    sodium: 804,
    image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/1/18/0/EI1106_Turkey_Osso_Buco.jpg.rend.hgtvcom.826.620.suffix/1371585680502.jpeg"
    },
    {
    title: "Warm Teriyaki Beef Salad ",
    calories: 493,
    protein: 45,
    fat: 29,
    sodium: 1450,
    image: "https://res.cloudinary.com/orthodox-union/image/fetch/c_fill,f_auto/https://oukosher.org/content/uploads/2006/02/Teriyaki-Beef-Salad.jpg"
    },
    {
    title: "Lamb Shank Rag� with Anson Mills Grits ",
    calories: 628,
    protein: 36,
    fat: 34,
    sodium: 1183,
    image: "https://i.pinimg.com/736x/c1/c8/54/c1c854ff826bca940797a7e82c728740.jpg"
    },
    {
    title: "Old-Fashioned Chicken and Corn Stew ",
    calories: 452,
    protein: 37,
    fat: 25,
    sodium: 136,
    image: "nan"
    },
    {
    title: "Sausage and Potato Breakfast Casserole ",
    calories: 421,
    protein: 21,
    fat: 29,
    sodium: 743,
    image: "http://irepo.primecp.com/2016/01/251358/Potato-and-Sausage-Breakfast-Casserole_ExtraLarge700_ID-1366468.jpg?v=1366468"
    },
    {
    title: "Marinated London Broil with Lemon and Garlic ",
    calories: 510,
    protein: 45,
    fat: 35,
    sodium: 183,
    image: "https://diethood.com/wp-content/uploads/2021/03/london-broil-13-1024x1536.jpg"
    },
    {
    title: "Curried Chicken ",
    calories: 653,
    protein: 55,
    fat: 35,
    sodium: 284,
    image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Creamy-Curried-Chicken_EXPS_SDAM19_34913_C12_07_1b.jpg"
    },
    {
    title: "Fettuccine with Asparagus, Beet Green Pesto, and Poached Egg ",
    calories: 504,
    protein: 22,
    fat: 13,
    sodium: 131,
    image: "https://static01.nyt.com/images/2016/04/18/dining/18COOKING-FETTUCCINEASPARAGUS1/18COOKING-FETTUCCINEASPARAGUS1-superJumbo.jpg"
    },
    {
    title: "Sage Buttermilk Biscuits with Sausage and Cheddar ",
    calories: 472,
    protein: 19,
    fat: 32,
    sodium: 797,
    image: "https://d169bp7fx2b8qn.cloudfront.net/uploads/2016/08/Sage-Gruyere-Biscuits-and-Gravy_Edit.jpg"
    },
    {
    title: "Chicken, Green Bean, Corn, and Farro Salad with Goat Cheese ",
    calories: 390,
    protein: 22,
    fat: 22,
    sodium: 431,
    image: "https://3.bp.blogspot.com/-PlM4ma8R3fY/Uh8Qd6hmyjI/AAAAAAAAFXU/ZZhPGx1Q21k/s1600/mackerel+067.JPG"
    },
    {
    title: "Creamy Garlic Pasta with Mushrooms and Prosciutto ",
    calories: 598,
    protein: 31,
    fat: 18,
    sodium: 1042,
    image: "https://i.pinimg.com/originals/42/53/61/42536138d84799222b2b8333e94addb7.jpg"
    },
    {
    title: "Cod with Lemon, Green Olive, and Onion Relish ",
    calories: 458,
    protein: 31,
    fat: 36,
    sodium: 267,
    image: "https://assets.bonappetit.com/photos/57adf26053e63daf11a4df6d/16:9/w_1280,c_limit/cod-with-lemon-green-olive-and-onion-relish.jpg"
    },
    {
    title: "Chicken Marsala with Sage ",
    calories: 494,
    protein: 55,
    fat: 24,
    sodium: 129,
    image: "http://ahintofwine.com/wp-content/uploads/2016/12/Chicken-Marsala-with-Sage-Mushrooms.jpg"
    },
    {
    title: "Braised Chicken with Green Peppers and Tomatoes ",
    calories: 520,
    protein: 30,
    fat: 38,
    sodium: 149,
    image: "https://mommymoment.ca/wp-content/uploads/2016/05/CHICKEN-WITH-MUIR-GLEN-TOMATOES-AND-PEPPERS.jpg"
    },
    {
    title: "Linguine with Garlic Shrimp and Basil ",
    calories: 694,
    protein: 43,
    fat: 25,
    sodium: 1737,
    image: "https://foodnerdy.com/cdn/recipes/IRecipes_09073540016203595437_orig.jpg"
    },
    {
    title: "Grilled Pork Chops with Sweet Lemongrass Marinade ",
    calories: 458,
    protein: 43,
    fat: 18,
    sodium: 1278,
    image: "https://pupswithchopsticks.com/wp-content/uploads/vietnamese-grilled-lemongrass-porkchops.jpg"
    },
    {
    title: "Skewered Rosemary Shrimp with Mint Pesto ",
    calories: 713,
    protein: 125,
    fat: 16,
    sodium: 5166,
    image: "https://assets.epicurious.com/photos/560df206f9a84192308a84ce/1:1/w_600%2Ch_600/109244.jpg"
    },
    {
    title: "Rigatoni with Eggplant and Pine Nut Crunch ",
    calories: 671,
    protein: 29,
    fat: 37,
    sodium: 726,
    image: "https://assets.epicurious.com/photos/590363ca02cc6e7da4b2893e/master/pass/rigatoni-with-eggplant-BA-042817.jpg"
    },
    {
    title: "Trout with Tropical Fruit Salsa and Mixed Greens ",
    calories: 486,
    protein: 33,
    fat: 31,
    sodium: 98,
    image: "https://i.pinimg.com/originals/85/5c/d7/855cd733d4d5105f5a02e3a04bf8db22.jpg"
    },
    {
    title: "Green Onion Sausage and Shrimp Gravy ",
    calories: 359,
    protein: 27,
    fat: 25,
    sodium: 1114,
    image: "https://d1dxs113ar9ebd.cloudfront.net/225batonrouge/2021/10/FullSizeRender-4.jpg"
    },
    {
    title: "Pan-Fried Flounder with Potatoes in Parsley ",
    calories: 620,
    protein: 32,
    fat: 30,
    sodium: 1713,
    image: "nan"
    },
    {
    title: "Salmon and Vegetable Chowder ",
    calories: 517,
    protein: 31,
    fat: 30,
    sodium: 156,
    image: "https://1.bp.blogspot.com/-ZqxfSz36IvA/WMLsGuhlN9I/AAAAAAAAEik/6qx9ue93cV0pfvbNG32V5ryyMrL_XrF5wCLcB/s1600/IMG_1453.jpg"
    },
    {
    title: "Cantaloupe and Prosciutto with Basil Oil ",
    calories: 309,
    protein: 19,
    fat: 23,
    sodium: 1552,
    image: "http://playswellwithbutter.com/wp-content/uploads/2017/06/PROSCUITTO-WRAPPED-CANTALOUPE-FINALS-1.jpg"
    },
    {
    title: "Broiled Duck Breasts with Orange Chipotle Sauce ",
    calories: 356,
    protein: 46,
    fat: 10,
    sodium: 1129,
    image: "https://assets.epicurious.com/photos/560de5c67b55306961bfd89c/16:9/w_1280,c_limit/232789.jpg"
    },
    {
    title: "Curried Red-Lentil Stew with Vegetables ",
    calories: 434,
    protein: 16,
    fat: 22,
    sodium: 833,
    image: "https://www.fabulesley.com/wp-content/uploads/2020/02/IMG_5393_2.jpg"
    },
    {
    title: "Halibut in Hazelnut Romesco with Potatoes ",
    calories: 486,
    protein: 37,
    fat: 30,
    sodium: 424,
    image: "https://premiumgrowers.com/wp-content/uploads/Hazelnut-Crusted-Halibut.png"
    },
    {
    title: "Scallop Cakes with Cilantro-Lime Mayonnaise and New Potatoes ",
    calories: 301,
    protein: 30,
    fat: 13,
    sodium: 1582,
    image: "https://i.pinimg.com/originals/6d/ac/df/6dacdf6b9b009565da64448ed1842114.jpg"
    },
    {
    title: "Spicy Grilled Chicken with Creamy Pumpkin Mole Sauce ",
    calories: 428,
    protein: 57,
    fat: 17,
    sodium: 188,
    image: "https://www.cookinwithmima.com/wp-content/uploads/2022/05/Spicy-Chicken-Pasta.jpg"
    },
    {
    title: "Red Wine and Mushroom Risotto ",
    calories: 753,
    protein: 25,
    fat: 30,
    sodium: 530,
    image: "https://rachelkor.com/wp-content/uploads/2017/01/Red-wine-risotto-with-mushrooms-and-peas.jpg"
    },
    {
    title: "Chestnut, Prune, and Pancetta Stuffing ",
    calories: 601,
    protein: 17,
    fat: 27,
    sodium: 1112,
    image: "https://assets.epicurious.com/photos/63766abbb963dbd25e2df93c/1:1/w_2560%2Cc_limit/1106-GT-ET10_01_RECIPE_final.jpg"
    },
    {
    title: "Pasta with Roasted Vegetables, Tomatoes and Basil ",
    calories: 429,
    protein: 15,
    fat: 14,
    sodium: 153,
    image: "https://thenovicechefblog.com/wp-content/uploads/2018/11/Creamy-Pasta-with-Roasted-Cherry-Tomatoes-5sm.jpg"
    },
    {
    title: "Spice-Rubbed Salmon ",
    calories: 422,
    protein: 35,
    fat: 30,
    sodium: 684,
    image: "https://littlesunnykitchen.com/wp-content/uploads/2021/08/Honey-Garlic-Salmon-Recipe-2.jpg"
    },
    {
    title: "Red Curry of Lobster and Pineapple ",
    calories: 363,
    protein: 23,
    fat: 23,
    sodium: 1650,
    image: "https://assets.epicurious.com/photos/555cf26f644d45515b758f9d/1:1/w_600%2Ch_600/51222010_red-curry-of-lobster-pineapple_6x4.jpg"
    },
    {
    title: "Sea Bass with Spicy Roasted Bell Pepper Sauce ",
    calories: 484,
    protein: 38,
    fat: 30,
    sodium: 178,
    image: "https://i.pinimg.com/736x/5a/08/e9/5a08e93b3c68afb5b1fd9a04f6cbc2a5.jpg"
    },
    {
    title: "Broiled Steak with Horseradish Cream ",
    calories: 485,
    protein: 40,
    fat: 34,
    sodium: 582,
    image: "https://whisperofyum.com/wp-content/uploads/2021/12/steak-crostini-with-horseradish-cream-1.jpg"
    },
    {
    title: "Queen Elizabeth's Favorite Quiche ",
    calories: 435,
    protein: 17,
    fat: 24,
    sodium: 909,
    image: "https://abountifulkitchen.com/wp-content/uploads/2016/05/IMG_2705-1000x667.jpg"
    },
    {
    title: "Fried Rice ",
    calories: 923,
    protein: 26,
    fat: 23,
    sodium: 1666,
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-fried-rice-020-1543875572.jpg?cropu003d0.668xw:1.00xh;0.262xw,0u0026resizeu003d480:*"
    },
    {
    title: "Red Snapper with Chunky Tomato-Bell Pepper Sauce ",
    calories: 466,
    protein: 44,
    fat: 19,
    sodium: 961,
    image: "https://i.pinimg.com/originals/0a/e8/f7/0ae8f73afdd6628f1a667b58b1cadea4.jpg"
    },
    {
    title: "Finnan Haddie Chowder ",
    calories: 851,
    protein: 51,
    fat: 36,
    sodium: 1384,
    image: "https://parsefiles.back4app.com/tnrOJGe6kaeWMtRgSB6UUFPRlqnGFi0uiPZDLWhI/bc29de221ee282aa0e5875130a2726f4_file.bin"
    },
    {
    title: "Double Olive Pasta ",
    calories: 451,
    protein: 16,
    fat: 20,
    sodium: 863,
    image: "https://theirontomato.com/wp-content/uploads/2015/11/s-double-olive-pasta-600x600.jpg"
    },
    {
    title: "Gouda, Bacon and Leek Pancake ",
    calories: 501,
    protein: 23,
    fat: 36,
    sodium: 736,
    image: "http://4.bp.blogspot.com/-fbZs08HtOG4/TdXgFq1udvI/AAAAAAAAHOs/l4G7Yg1ZRvc/s1600/Leek%2Bpancake%2B2.jpg"
    },
    {
    title: "Scallop and Shrimp Creole ",
    calories: 304,
    protein: 34,
    fat: 12,
    sodium: 1809,
    image: "https://www.lanascooking.com/wp-content/uploads/2021/07/louisiana-shrimp-creole-feature-1200.jpg"
    },
    {
    title: "Lemon Caper Calamari Steaks with Broccolini ",
    calories: 501,
    protein: 28,
    fat: 40,
    sodium: 353,
    image: "https://i.pinimg.com/originals/44/34/7e/44347e2f527c4a4f225d8fcfa19811ce.jpg"
    },
    {
    title: "Grilled Pork Chops with Molasses Barbecue Sauce ",
    calories: 541,
    protein: 48,
    fat: 24,
    sodium: 863,
    image: "http://3.bp.blogspot.com/-W5PxjsbFoKE/TeUEdgOWUaI/AAAAAAAADbQ/nBJ_vXV67hg/s1600/100_0008.JPG"
    },
    {
    title: "Truffled Lobster Risotto ",
    calories: 590,
    protein: 28,
    fat: 29,
    sodium: 575,
    image: "https://www.keyingredient.com/uploads/media/6d/9d/57ba7c3a66265ec064e7fb22d847a3d7d9da.jpg?1560427084"
    },
    {
    title: "Green Lentil and Bacon Salad ",
    calories: 400,
    protein: 26,
    fat: 22,
    sodium: 690,
    image: "http://2.bp.blogspot.com/-k3kOWNPe97Q/VTSS6QQl9cI/AAAAAAAA1CY/gwdeSgS9ibk/w1200-h630-p-k-no-nu/IMG_6258.JPG"
    },
    {
    title: "Aloo Gobhi Stuffing ",
    calories: 524,
    protein: 16,
    fat: 24,
    sodium: 837,
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/aloo-gobi.jpg"
    },
    {
    title: "Jalape�o Honey Mustard Pork Kebabs ",
    calories: 566,
    protein: 45,
    fat: 15,
    sodium: 270,
    image: "https://i.pinimg.com/originals/63/d9/b8/63d9b823e62e07b18ad5826f0e89d7fc.png"
    },
    {
    title: "Cajun Shrimp Tacos with Tomatillo Salsa ",
    calories: 318,
    protein: 18,
    fat: 24,
    sodium: 719,
    image: "https://www.jocooks.com/wp-content/uploads/2015/05/cajun-shrimp-tacos-1-768x960.jpg"
    },
    {
    title: "Roast Pork Tenderloin with Pears and Dried Apricots ",
    calories: 512,
    protein: 35,
    fat: 25,
    sodium: 308,
    image: "https://assets.bonappetit.com/photos/57b24bd4319a58275764d79f/master/pass/mare_roast_pork_tenderloin_with_pears_and_dried_apricots_h.jpg"
    },
    {
    title: "Spiced Chicken Couscous with Cinnamon Onions ",
    calories: 636,
    protein: 18,
    fat: 24,
    sodium: 147,
    image: "https://media.blueapron.com/recipes/3165/square_newsletter_images/1534450833-364-0086-8874/0827_2PP_Chicken_Couscous_15224_WEB_SQ.jpg?quality=80&amp;width=850"
    },
    {
    title: "Cider, Bacon, and Golden Raisin Stuffing ",
    calories: 543,
    protein: 16,
    fat: 26,
    sodium: 946,
    image: "https://i.pinimg.com/originals/41/bf/09/41bf09ff97481ff8d5facf111ebd9eee.jpg"
    },
    {
    title: "Turkey Cutlets with Oranges and Coriander ",
    calories: 332,
    protein: 27,
    fat: 17,
    sodium: 85,
    image: "https://i0.wp.com/www.simplyieva.com/wp-content/uploads/2016/11/Turkey-Cutlets-With-Oranges.jpg?resize=735%2C1102"
    },
    {
    title: "Spaghetti with Eggplant and Tomato Sauce ",
    calories: 732,
    protein: 20,
    fat: 23,
    sodium: 30,
    image: "https://i0.wp.com/adashofsoul.com/wp-content/uploads/2014/09/eggplant-tomato-pasta-1.jpg?fit=640%2C960&amp;ssl=1"
    },
    {
    title: "Detox Pho with Beef, Mushrooms, and Kale ",
    calories: 386,
    protein: 35,
    fat: 9,
    sodium: 1204,
    image: "https://i.pinimg.com/736x/03/7a/bc/037abcfc1c95b3bd6ff77cc3ddafcdac--detox-recipes-paleo-recipes.jpg"
    },
    {
    title: "Linguine with Scampi ",
    calories: 709,
    protein: 27,
    fat: 37,
    sodium: 654,
    image: "https://vikalinka.com/wp-content/uploads/2019/02/Shrimp-Scampi-Linguine-6-Edit.jpg"
    },
    {
    title: "Pistachio Sea Bass with Crab Salad ",
    calories: 570,
    protein: 42,
    fat: 39,
    sodium: 449,
    image: "https://i.pinimg.com/originals/6c/49/26/6c4926a52475ba305a86f7e83046c14a.jpg"
    },
    {
    title: "Brown and Wild Rice with Sausage and Fennel ",
    calories: 1168,
    protein: 47,
    fat: 37,
    sodium: 902,
    image: "https://i.pinimg.com/originals/0f/42/83/0f4283bb5ffd573a8bd1fad7463df1ae.jpg"
    },
    {
    title: "Roast Turkey with Country Ham Stuffing and Giblet Gravy ",
    calories: 344,
    protein: 35,
    fat: 19,
    sodium: 718,
    image: "https://assets.epicurious.com/photos/636144e22714ca00966eebd5/1:1/pass/undefined"
    },
    {
    title: "Grilled Clams with Spaghetti, Prosciutto, and Mixed Greens ",
    calories: 1108,
    protein: 119,
    fat: 29,
    sodium: 5197,
    image: "https://i.pinimg.com/originals/7a/41/93/7a4193f06b8bcae18847d4f109824fb4.jpg"
    },
    {
    title: "Beer-Marinated Flank Steak with Aji and Guacamole ",
    calories: 498,
    protein: 44,
    fat: 26,
    sodium: 373,
    image: "http://dadsthatcook.com/cdn/shop/articles/columbian-Beer-Marinated-Flank-Steak-2000x1125.jpg?v=1654720256"
    },
    {
    title: "Spanish Pork Braise ",
    calories: 646,
    protein: 44,
    fat: 30,
    sodium: 1512,
    image: "https://live.staticflickr.com/8300/8019614743_5ba09af2e2.jpg"
    },
    {
    title: "Thai Beef Stew With Lemongrass and Noodles ",
    calories: 691,
    protein: 57,
    fat: 25,
    sodium: 1316,
    image: "https://enthaicethaikitchen.com/wp-content/uploads/2017/04/KUEY-TEAW-NUER-NAM-TOK.jpg"
    },
    {
    title: "Roasted Monkfish with Curried Lentils and Browned Butter Cauliflower ",
    calories: 605,
    protein: 44,
    fat: 26,
    sodium: 183,
    image: "https://assets.epicurious.com/photos/560df29ef9a84192308a8642/1:1/w_600%2Ch_600/230628.jpg"
    },
    {
    title: "Beer-Marinated Pork Tenderloin with Red Cabbage ",
    calories: 452,
    protein: 41,
    fat: 23,
    sodium: 701,
    image: "https://blog.williams-sonoma.com/wp-content/uploads/2014/01/Healthy_PorkLoin_3203.jpg"
    },
    {
    title: "French Lentil, Prosciutto, and Pepper Salad ",
    calories: 425,
    protein: 22,
    fat: 16,
    sodium: 651,
    image: "https://www.onceuponachef.com/images/2012/01/french-lentil-salad-with-goat-cheese.jpg"
    },
    {
    title: "Grilled Asian Pork Chops and Baby Bok Choy ",
    calories: 460,
    protein: 48,
    fat: 26,
    sodium: 458,
    image: "https://thishealthytable.com/wp-content/uploads/2019/06/grilled-baby-bok-choy-recipe-735x1103.jpg"
    },
    {
    title: "Crab Legs with Mustard Dipping Sauce ",
    calories: 408,
    protein: 28,
    fat: 32,
    sodium: 717,
    image: "https://insanelygoodrecipes.com/wp-content/uploads/2022/07/Homemade-Crab-Legs-with-Hots-Sauce-Lemon-and-Parsley.jpg"
    },
    {
    title: "Roast Beef Wraps with Horseradish Coleslaw ",
    calories: 345,
    protein: 27,
    fat: 16,
    sodium: 276,
    image: "https://dempsters.ca/sites/default/files/styles/recipes_full_467x341_/public/2021-02/Roast Beef_plated_resized008.jpg?itok=eevDs4nw"
    },
    {
    title: "Macaroni and Blue Cheese with Chives ",
    calories: 593,
    protein: 26,
    fat: 32,
    sodium: 598,
    image: "https://thumbs.dreamstime.com/z/macaroni-blue-cheese-tomato-sauce-98216752.jpg"
    },
    {
    title: "Halibut with Roasted Vegetables and Spicy Cilantro Sauce ",
    calories: 421,
    protein: 33,
    fat: 5,
    sodium: 205,
    image: "https://tamingofthespoon.com/wp-content/uploads/2016/04/Roasted-Halibut-with-Cilantro-Lime-Sauce-R1-1-683x1024.jpg"
    },
    {
    title: "Mahimahi with Citrus Sauce, Apple Bananas, and Macadamia Nuts ",
    calories: 397,
    protein: 32,
    fat: 12,
    sodium: 763,
    image: "https://cdn.shopify.com/s/files/1/1111/6422/articles/dreamstime_m_29013109_1_2_7b2e7e06-9533-4c6d-a77b-ce906f50be06_1000x.jpg?v=1575531064"
    },
    {
    title: "Open-Face Roquefort Burgers with Grilled Onions ",
    calories: 385,
    protein: 32,
    fat: 25,
    sodium: 774,
    image: "https://mamasgottabake.files.wordpress.com/2013/05/dsc_0047.jpg?w=590&amp;h=879"
    },
    {
    title: "Cheddar Garlic Stuffed Potatoes ",
    calories: 484,
    protein: 16,
    fat: 27,
    sodium: 298,
    image: "https://watchlearneat.com/wp-content/uploads/2014/11/Easy-Garlic-Cheddar-Mashed-Potatoes-1.jpg"
    },
    {
    title: "Cioppino ",
    calories: 522,
    protein: 69,
    fat: 14,
    sodium: 2955,
    image: "https://howtofeedaloon.com/wp-content/uploads/2016/08/cioppino-1-1270x1904.jpg"
    },
    {
    title: "Grilled Flank Steak with Sauteed Beet Greens and Creamy Horseradish Beets ",
    calories: 377,
    protein: 26,
    fat: 26,
    sodium: 234,
    image: "https://therecipecritic.com/wp-content/uploads/2018/07/grilled-flank-steak-5.jpg"
    },
    {
    title: "Mussels with Pernod and Cream ",
    calories: 636,
    protein: 56,
    fat: 20,
    sodium: 1328,
    image: "http://lexiscleankitchen.com/wp-content/uploads/2017/03/Mussels-Creamy-Mustard-Sauce2.jpg"
    },
    {
    title: "Barbecued Chicken with Vinegar Basting Sauce ",
    calories: 321,
    protein: 54,
    fat: 7,
    sodium: 1627,
    image: "https://1.bp.blogspot.com/-AayEQY_wNE0/UipU7qvsvqI/AAAAAAAADGk/l7R5e3HkZ2k/s1600/IMG_3732.JPG"
    },
    {
    title: "Chicken-Orecchiette Soup with Cilantro and Lemon ",
    calories: 471,
    protein: 37,
    fat: 16,
    sodium: 180,
    image: "https://i1.wp.com/atthetabletonight.com/wp-content/uploads/2020/04/BA84E7FB-0681-423B-8FBD-975641DD8499.jpg?fit=2500%2C1875&amp;ssl=1"
    },
    {
    title: "Chicken with White Wine and Mushrooms ",
    calories: 589,
    protein: 50,
    fat: 34,
    sodium: 172,
    image: "https://www.kitchensanctuary.com/wp-content/uploads/2015/10/Creamy-Chicken-in-white-wine-sauce-tall-FS-35-768x1152.jpg"
    },
    {
    title: "Lobster Fra Diavolo ",
    calories: 983,
    protein: 100,
    fat: 19,
    sodium: 2858,
    image: "https://www.askchefdennis.com/wp-content/uploads/2015/01/lobster-fra-diavolo-11a.jpg"
    },
    {
    title: "Pork Chops with Gingered Plum Sauce ",
    calories: 615,
    protein: 45,
    fat: 22,
    sodium: 989,
    image: "https://deliciouslittlebites.com/wp-content/uploads/2017/10/Pork-Chops-with-Plum-Sauce-Recipe-Image-4-2.jpg"
    },
    {
    title: "Gochujang Pork Shoulder Steaks ",
    calories: 569,
    protein: 34,
    fat: 33,
    sodium: 1411,
    image: "http://assets.epicurious.com/photos/54ac09716529d92b2c035d87/master/pass/51239730_gochujang-pork-shoulder-steaks_1x1.jpg"
    },
    {
    title: "Sesame Chicken Noodle Salad ",
    calories: 776,
    protein: 36,
    fat: 27,
    sodium: 1178,
    image: "https://cdn2.tmbi.com/TOH/Images/Photos/37/1200x1200/Sesame-Chicken-Noodle-Salad_exps150597_TH2847295C02_28_1bC_RMS.jpg"
    },
    {
    title: "Scallops with Tarragon Cream and Wilted Butter Lettuce ",
    calories: 326,
    protein: 21,
    fat: 19,
    sodium: 643,
    image: "https://i.pinimg.com/736x/54/b6/57/54b6572277487481645b681dc4cd93be--lettuce-recipes-sea-scallops.jpg"
    },
    {
    title: "Cumin-Marinated Chicken Wings ",
    calories: 478,
    protein: 42,
    fat: 32,
    sodium: 860,
    image: "https://indiaphile.info/wp-content/uploads/2015/01/cuminchickenwings-9238.jpg"
    },
    {
    title: "Honey Date Nut Breads ",
    calories: 1000,
    protein: 21,
    fat: 30,
    sodium: 1015,
    image: "https://cdn.cupcakeproject.com/wp-content/uploads/2021/04/Date-Nut-Bread-07.jpg"
    },
    {
    title: "Duck Breast with Sweet Cherry Sauce ",
    calories: 384,
    protein: 36,
    fat: 11,
    sodium: 554,
    image: "https://media.istockphoto.com/photos/duck-breast-roasted-as-medium-rare-and-served-with-sweet-cherry-sauce-picture-id1041955596?k=6&amp;m=1041955596&amp;s=170667a&amp;w=0&amp;h=3fQH_gTzXZ8DQcFwZn0Ez-HlsOWWZO1xzCok4HPM4PY="
    },
    {
    title: "Big Apple Pancake ",
    calories: 645,
    protein: 18,
    fat: 35,
    sodium: 464,
    image: "https://cdn.copymethat.com/media/orig_recipe-20190917005514936609a69fs.jpg"
    },
    {
    title: "Penne with Sausage, Wild Mushrooms and Spinach ",
    calories: 815,
    protein: 48,
    fat: 39,
    sodium: 646,
    image: "https://aggieskitchen.com/wp-content/uploads/2009/03/Penne-Sausage-Spinach-image-2.jpg"
    },
    {
    title: "Roast Pork Chops with Bacon and Wilted Greens ",
    calories: 470,
    protein: 34,
    fat: 31,
    sodium: 689,
    image: "https://www.milesfarmersmarket.com/wp-content/uploads/2021/04/pork-chop-with-fries-ZGTVA8J-1.jpg"
    },
    {
    title: "Chicken and Bell Pepper Fajitas ",
    calories: 772,
    protein: 62,
    fat: 31,
    sodium: 1129,
    image: "https://chocolatewithgrace.com/wp-content/uploads/2024/01/CWG-Chicken-Fajitas-6-1-of-1-1536x1097.jpg"
    },
    {
    title: "Spicy Curried Mussels ",
    calories: 627,
    protein: 56,
    fat: 27,
    sodium: 1322,
    image: "https://cdnth.zbporn.com/contents/videos_screenshots/571000/571683/preview.jpg"
    },
    {
    title: "Pip�rade with Ham ",
    calories: 411,
    protein: 19,
    fat: 30,
    sodium: 663,
    image: "https://i.pinimg.com/originals/4a/78/78/4a7878c705cb08dfae03123f40c394a5.jpg"
    },
    {
    title: "Grilled Kielbasa Sandwiches ",
    calories: 547,
    protein: 18,
    fat: 36,
    sodium: 1042,
    image: "http://img.sndimg.com/food/image/upload/w_614,h_461,c_fit/v1/img/recipes/34/83/95/picKuFTHP.jpg"
    },
    {
    title: "Beef Bourguignon ",
    calories: 635,
    protein: 46,
    fat: 20,
    sodium: 709,
    image: "https://somuchfoodblog.com/wp-content/uploads/2022/11/beef-bourguinon7.jpg"
    },
    {
    title: "Grilled Soy-Tamarind Denver Steaks ",
    calories: 426,
    protein: 31,
    fat: 28,
    sodium: 827,
    image: "https://www.firstforwomen.com/wp-content/uploads/sites/2/2022/05/Grilled-steak.jpg"
    },
    {
    title: "Mussels alla Diavola ",
    calories: 698,
    protein: 39,
    fat: 26,
    sodium: 1090,
    image: "https://i.pinimg.com/originals/a6/0e/39/a60e39787061b1b9570cf36a5b2a6d13.jpg"
    },
    {
    title: "Capellini with Fresh Ricotta, Roasted Garlic, Corn, and Herbs ",
    calories: 429,
    protein: 15,
    fat: 22,
    sodium: 182,
    image: "https://foodfairy.com/wp-content/uploads/2020/07/022-Capellini-with-Fresh-Ricotta-Roasted-Garlic-Corn-and-Herbs.jpeg"
    },
    {
    title: "Three-Cheese Pizza with Onion and Sage ",
    calories: 798,
    protein: 32,
    fat: 30,
    sodium: 1303,
    image: "https://img.delicious.com.au/mO82nvP7/w1200/del/2015/10/pork-sage-and-onion-pizza-with-spiced-apple-sauce-14807-1.jpg"
    },
    {
    title: "Crab Salad Sandwiches ",
    calories: 450,
    protein: 21,
    fat: 25,
    sodium: 968,
    image: "https://www.simplejoy.com/wp-content/uploads/2021/06/crab-salad-sandwich-1365x2048.jpg"
    },
    {
    title: "Japanese Noodles with Bok Choy and Tofu ",
    calories: 583,
    protein: 28,
    fat: 16,
    sodium: 910,
    image: "https://i.pinimg.com/originals/75/b8/32/75b832724c0cadd0a1ebbbe46078567a.jpg"
    },
    {
    title: "Spice-Crusted Pork Tenderloin with Andouille Sausage Gravy ",
    calories: 459,
    protein: 40,
    fat: 29,
    sodium: 771,
    image: "https://bigeasyfoods.com/wp-content/uploads/2017/09/Big-Easy-Sausage-new-Andouille-with-Pork-e1563291594307.jpg"
    },
    {
    title: "Grilled Leg of Lamb with Ancho Chile Marinade ",
    calories: 509,
    protein: 38,
    fat: 36,
    sodium: 798,
    image: "https://assets.epicurious.com/photos/54b2fb7211c5d6af478b619f/16:9/w_1280,c_limit/359334_grilled-leg-of-lamb_1x1.jpg?mbid=social_retweet"
    },
    {
    title: "Steamed Chicken Salad with Sesame Sauce ",
    calories: 328,
    protein: 18,
    fat: 20,
    sodium: 1093,
    image: "http://3.bp.blogspot.com/-7cRw0nOzb7U/USl9gSsYAKI/AAAAAAAALHw/SsVh-AJBcDk/s1600/IMG_0766.JPG"
    },
    {
    title: "Apple and Pork Stuffing ",
    calories: 366,
    protein: 19,
    fat: 24,
    sodium: 729,
    image: "https://i.pinimg.com/originals/73/66/f0/7366f074c413e83d321133a379ef2f37.jpg"
    },
    {
    title: "Pan-Seared Ancho Skirt Steak ",
    calories: 450,
    protein: 35,
    fat: 32,
    sodium: 113,
    image: "nan"
    },
    {
    title: "Hanger Steak With Tangy Tomato Relish ",
    calories: 384,
    protein: 33,
    fat: 22,
    sodium: 1995,
    image: "https://i.pinimg.com/736x/e8/63/bd/e863bda200a99b7870fe9d789a972c78.jpg"
    },
    {
    title: "Veal Shanks with Caramelized Onions and Sage ",
    calories: 765,
    protein: 100,
    fat: 27,
    sodium: 872,
    image: "https://i.pinimg.com/originals/02/48/de/0248de97e52ba423a17946cf73f517a8.png"
    },
    {
    title: "Smoked Cheese and Sausage Lasagna ",
    calories: 614,
    protein: 30,
    fat: 38,
    sodium: 1013,
    image: "https://i.pinimg.com/originals/9f/39/9f/9f399fe3d57335b0b8ffd6a2a7004c07.jpg"
    },
    {
    title: "Crispy Oven-Fried Cod ",
    calories: 550,
    protein: 38,
    fat: 26,
    sodium: 859,
    image: "https://s3.eu-west-2.amazonaws.com/dclite-clients/orpington-first/assets/images/business-directory/Crispy-Cod.jpg"
    },
    {
    title: "Herbed Ham and Cheddar Frittata ",
    calories: 438,
    protein: 36,
    fat: 31,
    sodium: 1857,
    image: "https://www.todaysparent.com/wp-content/uploads/2020/03/Frittata-2-BC-Egg-1.jpg"
    },
    {
    title: "Couscous Salad with Shrimp and Mint ",
    calories: 486,
    protein: 26,
    fat: 20,
    sodium: 845,
    image: "https://i.pinimg.com/originals/92/4d/d7/924dd7eb1af8ebbcb1eab30f315c45d4.jpg"
    },
    {
    title: "Kale and White Bean Stew ",
    calories: 435,
    protein: 22,
    fat: 14,
    sodium: 257,
    image: "https://www.simplyquinoa.com/wp-content/uploads/2019/02/tuscan-kale-white-bean-stew-2.jpg"
    },
    {
    title: "Baked Salmon with Mustard-Dill Sauce ",
    calories: 475,
    protein: 36,
    fat: 34,
    sodium: 211,
    image: "https://www.inspiredtaste.net/wp-content/uploads/2016/10/Perfectly-Baked-Salmon-Recipe-2-1200.jpg"
    },
    {
    title: "Scallops and Spinach Fettuccine with Red Bell Pepper Cream Sauce ",
    calories: 477,
    protein: 22,
    fat: 15,
    sodium: 577,
    image: "http://2.bp.blogspot.com/_MyAG_noXCZc/TLzovLivrLI/AAAAAAAAA50/tPxMvp1I6CQ/s1600/IMG_3939.JPG"
    },
    {
    title: "Quinoa Salad with Kale, Pine Nuts, and Parmesan ",
    calories: 427,
    protein: 15,
    fat: 23,
    sodium: 135,
    image: "https://assets.epicurious.com/photos/57b5db0cac22d6f011674005/16:9/w_1280,c_limit/quinoa-salad-with-kale-pine-nuts-and-parmesan.jpg"
    },
    {
    title: "Veal Scaloppine with Gorgonzola Sauce ",
    calories: 462,
    protein: 30,
    fat: 35,
    sodium: 702,
    image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/3/25/2/RF0608H_Veal-Scallopine-with-Mushroom-Marsala-Sauce_s4x3.jpg.rend.hgtvcom.756.567.suffix/1462303201704.jpeg"
    },
    {
    title: "Steak Salad Murphy ",
    calories: 323,
    protein: 23,
    fat: 16,
    sodium: 395,
    image: "https://www.twopeasandtheirpod.com/wp-content/uploads/2020/08/steak-salad-2.jpg"
    },
    {
    title: "Steamed Broccoli with Hummus ",
    calories: 436,
    protein: 19,
    fat: 21,
    sodium: 605,
    image: "https://sweetcaramelsunday.com/wp-content/uploads/2018/12/Raw-Broccoli-Hummus-08.jpg"
    },
    {
    title: "Steamed Clams with Pasta ",
    calories: 715,
    protein: 77,
    fat: 10,
    sodium: 2734,
    image: "https://3.bp.blogspot.com/-B3K6Xfg6CiM/UBFIhLfQOJI/AAAAAAAAGy4/wWLNdDkyA6U/s1600/Steamed+Clams+&amp;+Pasta+in+White+Wine+Garlic+Sauce.jpg"
    },
    {
    title: "Grilled Jumbo Shrimp with Lemon and Oregano ",
    calories: 413,
    protein: 31,
    fat: 29,
    sodium: 1403,
    image: "https://i2.wp.com/s3.amazonaws.com/sbedebi/wp-content/uploads/2017/09/19002922/IMG_9436-1.jpg?resize=1900%2C2850&amp;ssl=1"
    },
    {
    title: "Poached Eggs on Artichoke Bottoms with White Truffle Cream and Mushrooms ",
    calories: 538,
    protein: 20,
    fat: 38,
    sodium: 2112,
    image: "https://assets.epicurious.com/photos/560ea0a17b55306961bfee90/1:1/w_2560%2Cc_limit/106265.jpg"
    },
    {
    title: "Fried Stuffed Chinese Eggplant ",
    calories: 543,
    protein: 25,
    fat: 34,
    sodium: 526,
    image: "https://i.pinimg.com/originals/f9/38/d0/f938d041c923dfbbf4477d59177e193e.jpg"
    },
    {
    title: "Shrimp Salad ",
    calories: 342,
    protein: 28,
    fat: 21,
    sodium: 4145,
    image: "https://sweetandsavorymeals.com/wp-content/uploads/2020/01/shrimp-salad-close-1024x1536.jpg"
    },
    {
    title: "Five-Spice Pork Stir-Fry with Soba Noodles ",
    calories: 744,
    protein: 39,
    fat: 35,
    sodium: 990,
    image: "https://www.theinjuryclinic.com.au/wp-content/uploads/2021/07/recipe-photo.jpeg"
    },
    {
    title: "Southeast Asian Rice Noodles with Calamari and Herbs ",
    calories: 539,
    protein: 23,
    fat: 23,
    sodium: 519,
    image: "https://assets.epicurious.com/photos/5609a5fae0acd286555db960/16:9/w_1280,c_limit/354510_hires.jpg?mbid=social_retweet"
    },
    {
    title: "Linguine with Crab, Lemon, Chile, and Mint ",
    calories: 1195,
    protein: 31,
    fat: 40,
    sodium: 44,
    image: "https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2019/06/Crab-lemon-and-chilli-linguine.jpg"
    },
    {
    title: "Broccoli Rabe Pasta with Golden Garlic ",
    calories: 557,
    protein: 16,
    fat: 26,
    sodium: 58,
    image: "https://themom100.com/wp-content/uploads/2020/02/pasta-with-broccoli-rabe-232-1100x1650.jpg"
    },
    {
    title: "Garlic Lime Chicken Breasts ",
    calories: 500,
    protein: 46,
    fat: 34,
    sodium: 138,
    image: "http://assets.epicurious.com/photos/579fad48e4857f9f1047d0b7/master/pass/garlic-lime-chicken-breasts.jpg"
    },
    {
    title: "Wine-Baked Halibut Steaks with Mustard-Fennel Butter ",
    calories: 375,
    protein: 38,
    fat: 20,
    sodium: 266,
    image: "https://www.saltys.com/wp-content/uploads/2019/03/Pan-Seared-Halibut-Steak-harisa-fingerlings-asparagus-lobster-saffron-cream-4-2000x2000.jpg"
    },
    {
    title: "Grilled Steak and Potatoes with Charmoula Sauce ",
    calories: 598,
    protein: 38,
    fat: 31,
    sodium: 100,
    image: "https://i.pinimg.com/originals/54/52/ed/5452edb159b2db45ed47c10e9f449ceb.jpg"
    },
    {
    title: "Hatch Chile con Queso Dip ",
    calories: 341,
    protein: 18,
    fat: 27,
    sodium: 543,
    image: "https://inmamamaggieskitchen.com/wp-content/uploads/2017/08/Hatch-Chile-Cheese-Dip-3-735x526.jpg"
    },
    {
    title: "Ma�Po Tofu (Spicy Bean Curd with Beef) ",
    calories: 411,
    protein: 23,
    fat: 28,
    sodium: 1544,
    image: "https://i.pinimg.com/originals/2d/f6/73/2df67346201d1c77dcae210fc18f1c5f.jpg"
    },
    {
    title: "Rosemary Chicken with Broccoli Rabe ",
    calories: 395,
    protein: 63,
    fat: 12,
    sodium: 219,
    image: "https://i.pinimg.com/originals/59/25/f3/5925f32cedd964611f7bc77c7cd0729c.jpg"
    },
    {
    title: "Chicken with Spicy Tomato Sauce ",
    calories: 385,
    protein: 55,
    fat: 14,
    sodium: 269,
    image: "https://www.foodelicacy.com/wp-content/uploads/2019/08/Chicken-in-Spicy-Tomato-Sauce-6A-760x1140.jpg"
    },
    {
    title: "Pigeon-Pea Soup ",
    calories: 600,
    protein: 40,
    fat: 31,
    sodium: 917,
    image: "https://i.pinimg.com/originals/18/a2/b1/18a2b173cd4ec7acb2354be07d63057f.jpg"
    },
    {
    title: "Bow Ties with Peas, Lemon, and Mint ",
    calories: 691,
    protein: 28,
    fat: 19,
    sodium: 342,
    image: "https://i.pinimg.com/736x/c4/16/14/c416142f70f7ed9fac8f025c4b971b59--bow-ties-bows.jpg"
    },
    {
    title: "Kielbasa Sausage with Spiced Sauerkraut ",
    calories: 395,
    protein: 19,
    fat: 28,
    sodium: 1592,
    image: "https://www.jerseygirlcooks.com/wp-content/uploads/2022/10/Kielbasa-and-sauerkraut-Skillet.jpg"
    },
    {
    title: "Sauteed Skirt Steak with Braised Scallions ",
    calories: 396,
    protein: 31,
    fat: 28,
    sodium: 694,
    image: "https://thumb.spokesman.com/_5t9P3Ukol9SnqkyxgOxGeqXbNA=/400x0/media.spokesman.com/photos/2004/10/06/foo_skirtsteak_10-06-2004_F42NTTU.jpg"
    },
    {
    title: "Summer Chef's Salad with Grilled Pork, Chicken, and Chimichurri Ranch Dressing ",
    calories: 515,
    protein: 29,
    fat: 38,
    sodium: 402,
    image: "https://i.pinimg.com/originals/24/e0/e3/24e0e38c51393c3d69068202e56948c5.jpg"
    },
    {
    title: "Bubbe's Chicken Soup ",
    calories: 613,
    protein: 38,
    fat: 26,
    sodium: 1055,
    image: "https://cdn.shopify.com/s/files/1/0477/3707/7916/products/seemore-meats-and-veggies_bubbes-chicken-soup-sausage_03_300x.jpg?v=1627011825"
    },
    {
    title: "Crab Cakes with Creamy Chili Sauce ",
    calories: 416,
    protein: 19,
    fat: 19,
    sodium: 647,
    image: "https://i.pinimg.com/originals/09/79/a9/0979a949900a5bd26d7cb3d2ddbd2ede.png"
    },
    {
    title: "Rosemary-Garlic Pork Tenderloin with Sweet-and-Sour Prunes ",
    calories: 420,
    protein: 27,
    fat: 14,
    sodium: 79,
    image: "https://www.thespruceeats.com/thmb/x--KyVqI8s6Em39N3YaQUO033yg=/3644x2733/filters:fill(auto,1)/roasted-pork-tenderloin-469642146-584b016c5f9b58a8cd4f186c.jpg"
    },
    {
    title: "Mussels with Fennel and Roasted Red Pepper Butter ",
    calories: 334,
    protein: 25,
    fat: 16,
    sodium: 732,
    image: "https://dishingouthealth.com/wp-content/uploads/2018/04/Fennelredpepper.jpg"
    },
    {
    title: "Seared Scallops with Leeks and Caviar Sauce ",
    calories: 307,
    protein: 19,
    fat: 18,
    sodium: 686,
    image: "https://images.media-allrecipes.com/userphotos/3756692.jpg"
    },
    {
    title: "Toasted Tortillas with Herbed Goat Cheese ",
    calories: 487,
    protein: 19,
    fat: 24,
    sodium: 1465,
    image: "https://i.pinimg.com/736x/65/40/77/654077cb2f10538cd9bad113b72fb415--healthy-sides-healthy-meals.jpg"
    },
    {
    title: "Mussels with Parsley and Garlic ",
    calories: 305,
    protein: 28,
    fat: 17,
    sodium: 804,
    image: "https://thatothercookingblog.com/wp-content/uploads/2017/07/IMG_7276.jpg"
    },
    {
    title: "Herb-Roasted Chicken Breasts ",
    calories: 510,
    protein: 53,
    fat: 30,
    sodium: 162,
    image: "https://www.primaverakitchen.com/wp-content/uploads/2018/06/Rosemary-Lemon-Roasted-Chicken-Breasts-Primavera-Kitchen-1.jpg"
    },
    {
    title: "Asian Scallop Stew with Coconut, Ginger and Lime ",
    calories: 315,
    protein: 24,
    fat: 19,
    sodium: 1390,
    image: "https://i.pinimg.com/originals/98/a4/e8/98a4e846d3901a4604296dd312a339f0.jpg"
    },
    {
    title: "Grilled Swordfish Verde ",
    calories: 408,
    protein: 45,
    fat: 22,
    sodium: 193,
    image: "https://www.panningtheglobe.com/wp-content/uploads/2020/07/Grilled-swordfish-salsa-verde-768x1152.jpg"
    },
    {
    title: "Black Bean Lasagna Kinstlinger-Bruhn ",
    calories: 689,
    protein: 38,
    fat: 35,
    sodium: 1495,
    image: "https://1.bp.blogspot.com/-x5tjhrePje0/WSNpSTuKcLI/AAAAAAAAAC0/fbmj1ZuGjeQyq04PfyRFrvNzGVjvfnAygCLcB/s1600/54fe7865b826e-ghk-0913-cheeseless-black-bean-lasagna-xln.jpg"
    },
    {
    title: "Chicken Marsala ",
    calories: 695,
    protein: 59,
    fat: 35,
    sodium: 506,
    image: "https://www.thechunkychef.com/wp-content/uploads/2016/04/Easy-Chicken-Marsala-4.jpg"
    },
    {
    title: "Saut� of Fresh Fava Beans, Onions, and Fennel ",
    calories: 654,
    protein: 28,
    fat: 27,
    sodium: 179,
    image: "https://edibleeastbay.com/wp-content/uploads/2021/03/fava-beans-rotated-1-768x1152.jpg"
    },
    {
    title: "Rigatoni with Gorgonzola Cheese ",
    calories: 481,
    protein: 20,
    fat: 22,
    sodium: 608,
    image: "https://cupofjo.com/wp-content/uploads/2014/07/three-ingredient-pasta-rigatoni-cupofjo.jpg"
    },
    {
    title: "Braised Greek Chicken and Artichokes ",
    calories: 458,
    protein: 49,
    fat: 24,
    sodium: 231,
    image: "https://i.pinimg.com/originals/93/54/39/9354393a3db3f0a8e59424979ef73808.jpg"
    },
    {
    title: "Cheddar, Vegetable and Sausage Strata ",
    calories: 499,
    protein: 25,
    fat: 33,
    sodium: 984,
    image: "https://www.spendwithpennies.com/wp-content/uploads/2020/11/FT-Sausage-Breakfast-Strata-SpendWithPennies-7.jpg"
    },
    {
    title: "Orzo with Grilled Shrimp, Summer Vegetables, and Pesto Vinaigrette ",
    calories: 567,
    protein: 27,
    fat: 34,
    sodium: 870,
    image: "nan"
    },
    {
    title: "Herbed Beef and Rice-Noodle Salad ",
    calories: 455,
    protein: 26,
    fat: 14,
    sodium: 1335,
    image: "https://www.lordbyronskitchen.com/wp-content/uploads/2017/01/5-10.jpg"
    },
    {
    title: "Cream of Carrot, White Bean and Pear Soup ",
    calories: 646,
    protein: 27,
    fat: 24,
    sodium: 348,
    image: "http://www.thebakerchick.com/wp-content/uploads/2016/01/White-Bean-Soup-.jpg"
    },
    {
    title: "Zucchini Pizza Crust With Lemony Pea Pesto ",
    calories: 395,
    protein: 18,
    fat: 26,
    sodium: 870,
    image: "https://i.pinimg.com/originals/f8/c6/1b/f8c61b3532f4005a5de6c36cc58a5386.jpg"
    },
    {
    title: "Slow-Cooked Ratatouille Over Goat Cheese Polenta ",
    calories: 550,
    protein: 18,
    fat: 26,
    sodium: 3128,
    image: "https://i.pinimg.com/originals/b2/dd/bb/b2ddbb80b1aa9509e4fa62ccb1955cf3.png"
    },
    {
    title: "Juniper-Brined Roast Turkey with Chanterelle Mushroom Gravy ",
    calories: 711,
    protein: 99,
    fat: 31,
    sodium: 515,
    image: "https://i.pinimg.com/originals/57/5d/6f/575d6f971082511992bd7b002f213c40.jpg"
    },
    {
    title: "Cold Tuna Ni�oise ",
    calories: 437,
    protein: 70,
    fat: 8,
    sodium: 1957,
    image: "https://lh4.ggpht.com/a0wbsPPVYFMZ8-d0SVpc_K401JpjK7EHa78QCYTIYFbE7QjGwE3GPVehCTMOU8wzRuI27JgXdM8KsJqA879IhmY=w1200-h630-pp-rj-v1-e365"
    },
    {
    title: "Pasta with Tomatoes, Mozzarella and Basil ",
    calories: 572,
    protein: 24,
    fat: 26,
    sodium: 428,
    image: "https://www.olivetomato.com/wp-content/uploads/2021/06/SAM_9202.jpeg"
    },
    {
    title: "Chicken-Filled Pastry (B'steeya) ",
    calories: 416,
    protein: 28,
    fat: 24,
    sodium: 252,
    image: "https://i.pinimg.com/originals/58/53/b7/5853b74ff3de216e3229c81848f8cbd1.jpg"
    },
    {
    title: "Pulled Turkey Barbecue Seibels ",
    calories: 300,
    protein: 34,
    fat: 14,
    sodium: 719,
    image: "https://www.jennieo.com/wp-content/uploads/2019/11/image-recipe_pulled-turkey-barbeque-sandwiches.jpg"
    },
    {
    title: "Seared Sea Scallops on Saut�ed Spinach with Hoisin Butter Sauce ",
    calories: 303,
    protein: 22,
    fat: 16,
    sodium: 844,
    image: "https://i0.wp.com/wonkywonderful.com/wp-content/uploads/2019/07/spicy-seared-scallops-3.jpg?ssl=1"
    },
    {
    title: "Pork Loin Braised in Milk ",
    calories: 490,
    protein: 51,
    fat: 28,
    sodium: 1101,
    image: "https://keeprecipes.com/sites/keeprecipes/files/milk_braised_pork_loin.jpg"
    },
    {
    title: "Perciatelli with Tuna, Capers and Tomatoes ",
    calories: 671,
    protein: 35,
    fat: 17,
    sodium: 634,
    image: "http://www.cookiesfromitaly.com/recipes/images/perciatelli_tuna_caper.jpg"
    },
    {
    title: "Spicy Thai Steamed Mussels ",
    calories: 488,
    protein: 47,
    fat: 22,
    sodium: 1354,
    image: "https://www.thevillagegrocer.com/wp-content/uploads/2017/03/steamed-mussels-with-wine-and-saffron-mscs108_horiz.jpeg"
    },
    {
    title: "Asparagus Lasagne ",
    calories: 480,
    protein: 30,
    fat: 23,
    sodium: 405,
    image: "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&amp;c=sc&amp;poi=face&amp;w=956&amp;h=478&amp;url=https:%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2021%2F04%2F02%2F43334_AsparagusLasagna_002_MFS.jpg"
    },
    {
    title: "Pork Medallions with Lemon and Capers ",
    calories: 336,
    protein: 37,
    fat: 18,
    sodium: 277,
    image: "https://diethood.com/wp-content/uploads/2021/02/pork-medallions-3-1024x1536.jpg"
    },
    {
    title: "Beef Braised in Red Wine ",
    calories: 800,
    protein: 58,
    fat: 35,
    sodium: 1365,
    image: "https://i2.wp.com/www.eazypeazymealz.com/wp-content/uploads/2016/06/red-wine-braised-beef-3.jpg?resize=850%2C1275&amp;ssl=1"
    },
    {
    title: "Grilled Whole Fish with Roasted Tomato-Chile Sauce ",
    calories: 349,
    protein: 37,
    fat: 17,
    sodium: 977,
    image: "https://eatandcooking.com/wp-content/uploads/2020/12/recipes-for-grilled-fish-new-grilled-whole-fish-how-to-grill-a-whole-fish-of-recipes-for-grilled-fish.jpg"
    },
    {
    title: "Mexican Meatball Soup with Rice and Cilantro ",
    calories: 418,
    protein: 27,
    fat: 19,
    sodium: 1846,
    image: "https://www.dinneratthezoo.com/wp-content/uploads/2016/02/mexican-meatball-soup-3-683x1024.jpg"
    },
    {
    title: "Cheese Blintzes with Three-Berry Compote ",
    calories: 433,
    protein: 15,
    fat: 21,
    sodium: 538,
    image: "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/k/Photo/Recipe Ramp Up/2021-07-Cheese-Blintz/cheese-blintz-2_01"
    },
    {
    title: "Vietnamese Chicken Soup With Rice ",
    calories: 494,
    protein: 26,
    fat: 19,
    sodium: 438,
    image: "http://thecafesucrefarine.com/wp-content/uploads/30-Minute-Vietnamese-Chicken-Rice-Soup-Bowls-2.jpg"
    },
    {
    title: "Chunky Red Chili ",
    calories: 451,
    protein: 32,
    fat: 23,
    sodium: 1021,
    image: "https://assets.epicurious.com/photos/54ca5a481f13bb9b2edf6029/16:9/w_1280,c_limit/51206840_chunky-red-chili_6x4.jpg"
    },
    {
    title: "Baby Tomato and Fresh Goat Cheese Salad ",
    calories: 515,
    protein: 19,
    fat: 37,
    sodium: 1068,
    image: "https://assets.epicurious.com/photos/560347257bdffb1205b62eaa/6:4/w_274%2Ch_169/51189610.jpg"
    },
    {
    title: "Meaty Ukrainian Borscht ",
    calories: 464,
    protein: 38,
    fat: 19,
    sodium: 923,
    image: "https://i.pinimg.com/originals/7a/fa/fb/7afafb07ebe1f6eacb3c7ae50c6026c5.jpg"
    },
    {
    title: "Spicy Beef with Peppers ",
    calories: 368,
    protein: 26,
    fat: 22,
    sodium: 1146,
    image: "http://thenoshery.com/wp-content/uploads/2014/03/Spicy-Beef-and-Peppers-16.jpg"
    },
    {
    title: "Golden Onion and Zucchini Lasagne ",
    calories: 363,
    protein: 15,
    fat: 23,
    sodium: 382,
    image: "https://cdn.tarladalal.com/members/9306/big/big_zucchini_and_eggplant_lasagne-14003.jpg?size=696X905"
    },
    {
    title: "Lamb Bulgogi with Asian Pear Dipping Sauce ",
    calories: 484,
    protein: 18,
    fat: 31,
    sodium: 2724,
    image: "https://i.pinimg.com/originals/5c/da/8f/5cda8ffca078f3a9e8ddcf3c75a6b748.jpg"
    },
    {
    title: "Leg of Roasted Lamb on Potato, Eggplant, and Tomato Tian ",
    calories: 325,
    protein: 26,
    fat: 19,
    sodium: 177,
    image: "https://www.all-thats-jas.com/wp-content/uploads/2021/02/roasted-lamb-leg-with-garlic-rosemary-and-beer-1096x1536.jpg"
    },
    {
    title: "Peppercorn-Crusted Muscovy Duck with Blueberries ",
    calories: 403,
    protein: 42,
    fat: 15,
    sodium: 151,
    image: "https://storage.needpix.com/rsynced_images/muscovy-duck-14520084296tc.jpg"
    },
    {
    title: "Ginger-Apricot Shrimp ",
    calories: 472,
    protein: 15,
    fat: 25,
    sodium: 1318,
    image: "https://i1.wp.com/cafedelites.com/wp-content/uploads/2018/06/Creamy-Garlic-Shrimp-IMAGE-68.jpg?resize=980%2C1470&amp;ssl=1"
    },
    {
    title: "Lentil Croquettes ",
    calories: 411,
    protein: 23,
    fat: 5,
    sodium: 1257,
    image: "https://www.lentils.org/wp-content/uploads/2020/05/Sask-Pulse-Growers-Lentil-Croquette-6069.jpg"
    },
    {
    title: "Spicy Turkey Paella ",
    calories: 708,
    protein: 41,
    fat: 31,
    sodium: 1004,
    image: "https://www.dadwithapan.com/wp-content/uploads/2018/10/Spicy-Seafood-Paella-Pacific-Foods-Vegetable-Broth-2.jpg"
    },
    {
    title: "Garlic and Rosemary Roasted Pork ",
    calories: 422,
    protein: 22,
    fat: 31,
    sodium: 103,
    image: "http://www.aprettylifeinthesuburbs.com/wp-content/uploads/2011/09/Garlic-Rosemary-Roasted-Pork-3.jpg"
    },
    {
    title: "Tuscan Vegetable Soup (acquacotta) ",
    calories: 454,
    protein: 17,
    fat: 30,
    sodium: 514,
    image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/2-acquacotta-tuscan-vegetable-soup-with-egg-and-bread-maricruz-avalos-flores.jpg"
    },
    {
    title: "Smoked Pork Chops with Onion-and-Cider Glaze ",
    calories: 472,
    protein: 42,
    fat: 25,
    sodium: 262,
    image: "https://patternprincess.com/wp-content/uploads/2020/06/20200626_165726866_iOS-1600x1933.jpg"
    },
    {
    title: "Filet Mignon with Red Wine-Horseradish Sauce ",
    calories: 616,
    protein: 41,
    fat: 39,
    sodium: 98,
    image: "https://i.pinimg.com/originals/3a/93/c9/3a93c9787d64992e74b26677f13657f0.jpg"
    },
    {
    title: "Warm Fris�e-Lardon Salade with Poached Eggs in Red-Wine Sauce ",
    calories: 606,
    protein: 21,
    fat: 31,
    sodium: 785,
    image: "https://simplycalledfood.com/wp-content/uploads/2022/04/How-to-Keep-Poached-Eggs-Warm.jpg"
    },
    {
    title: "Hot Picadillo Sandwiches ",
    calories: 521,
    protein: 19,
    fat: 6,
    sodium: 1136,
    image: "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Picadillo-Sliders_EXPS_THAM17_68307_B11_16_3b.jpg"
    },
    {
    title: "Apple Cheddar Bread Pudding ",
    calories: 606,
    protein: 16,
    fat: 24,
    sodium: 530,
    image: "https://www.tasteofhome.com/wp-content/uploads/2017/10/Apple-Cheddar-Bacon-Bread-Pudding_exps124973_FM143298B03_14_2bC_RMS-1.jpg"
    },
    {
    title: "Steamed Fish with Lime and Chile ",
    calories: 461,
    protein: 74,
    fat: 10,
    sodium: 1772,
    image: "https://assets.epicurious.com/photos/54b40be1d5e8c3e1070af5c3/16:9/w_1280,c_limit/380597_steamed-fish_1x1.jpg?mbid=social_retweet"
    },
    {
    title: "Braised Chicken with Artichoke Hearts, Mushrooms, and Peppers ",
    calories: 514,
    protein: 32,
    fat: 26,
    sodium: 465,
    image: "https://images.squarespace-cdn.com/content/v1/541b1515e4b0a990b33a796e/1611257874220-LCJ8B1128CFDHCHUM2A6/alison-roman-cooking-wine-braised-chicken-with-artichoke-hearts.jpg"
    },
    {
    title: "Lamb and Shiitake Mushroom Stir-Fry ",
    calories: 502,
    protein: 27,
    fat: 31,
    sodium: 859,
    image: "https://ohsnapletseat.com/wp-content/uploads/2021/07/shiitake-mushrooms-stir-fry-2-768x576.jpg"
    },
    {
    title: "Halibut with Red Bell Pepper and Olive Relish ",
    calories: 397,
    protein: 50,
    fat: 16,
    sodium: 442,
    image: "https://assets.bonappetit.com/photos/57b0840c1b334044149762d5/16:9/w_1280,c_limit/mare_halibut_with_red_bell_pepper_and_olive_relish_h.jpg?mbid=social_retweet"
    },
    {
    title: "Xuxu and Shrimp with Chile and Lemon ",
    calories: 406,
    protein: 31,
    fat: 17,
    sodium: 1401,
    image: "https://assets.epicurious.com/photos/54b3e1f621388ef838b0ccd0/1:1/w_2560%2Cc_limit/354968_xuxu-and-shrimp_1x1.jpg"
    },
    {
    title: "Macaroni with Spiced Beef and Tomato Sauce ",
    calories: 580,
    protein: 32,
    fat: 24,
    sodium: 337,
    image: "https://www.wikihow.com/images/a/aa/Prepare-Spicy-Macaroni-with-Tomato-Sauce-Step-5.jpg"
    },
    {
    title: "Baked Tarragon Chicken Thompson ",
    calories: 344,
    protein: 54,
    fat: 12,
    sodium: 206,
    image: "https://static01.nyt.com/images/2016/03/18/dining/18COOKING-TARRAGONCHICK2/18COOKING-TARRAGONCHICK2-superJumbo.jpg"
    },
    {
    title: "Corned Beef and Carrots with Marmalade-Whiskey Glaze ",
    calories: 636,
    protein: 31,
    fat: 31,
    sodium: 1705,
    image: "https://1.bp.blogspot.com/-LXPckrrJqew/YFNKIP-gzqI/AAAAAAABGZA/_yVJdQGs7C8L-PAvf8adK6XMEsQWOA29ACLcBGAsYHQ/s16000/instant-pot-corned-beef-4.jpg"
    },
    {
    title: "Bouillabaisse ",
    calories: 999,
    protein: 133,
    fat: 36,
    sodium: 2343,
    image: "https://2.bp.blogspot.com/-ZQM16gm6fS0/WmsGAyE4lSI/AAAAAAAALJE/kXy4dJjLJQs6TNwzx2GBzsQ6EGxP2zOYACLcBGAs/s1600/Bouillabaisse.jpg"
    },
    {
    title: "Quick Turkey Curry ",
    calories: 355,
    protein: 32,
    fat: 13,
    sodium: 170,
    image: "https://thecookreport.co.uk/wp-content/uploads/2017/10/Turkey-Curry-1-1.jpg"
    },
    {
    title: "Grilled Balsamic-Marinated London Broil with Red Onions ",
    calories: 428,
    protein: 39,
    fat: 24,
    sodium: 105,
    image: "https://i0.wp.com/www.teacher-chef.com/wp-content/uploads/2012/01/1-13-sliced-london-broil1.jpg?ssl=1"
    },
    {
    title: "Cheese and Potato Soup ",
    calories: 427,
    protein: 21,
    fat: 24,
    sodium: 591,
    image: "https://myrecipetreasures.com/wp-content/uploads/2016/11/IMG_4246-3.jpg"
    },
    {
    title: "Mussel and Fennel Bisque ",
    calories: 367,
    protein: 30,
    fat: 17,
    sodium: 1478,
    image: "https://i.pinimg.com/originals/fc/ca/5e/fcca5e0ef1aae2cb40fada3e9abc9f55.jpg"
    },
    {
    title: "Linguine with Spicy Tomato and Clam Juice ",
    calories: 958,
    protein: 53,
    fat: 32,
    sodium: 2559,
    image: "https://i.pinimg.com/originals/cf/73/45/cf7345a6808642d5110c019635d08500.jpg"
    },
    {
    title: "Ramp and Sausage Risotto ",
    calories: 622,
    protein: 23,
    fat: 34,
    sodium: 812,
    image: "http://www.theculinaryenthusiast.com/wp-content/uploads/2011/05/ramp-sausage-risotto.jpg"
    },
    {
    title: "Steamed Red Snapper with Ginger, Chiles, and Sesame Oil ",
    calories: 371,
    protein: 47,
    fat: 18,
    sodium: 756,
    image: "http://www.lyndeymilan.com/wp-content/uploads/2020/09/Steamed-snapper-with-Ginger-Shallot-Soy.jpg"
    },
    {
    title: "Artichoke, Sausage, and Parmesan Cheese Stuffing ",
    calories: 355,
    protein: 17,
    fat: 21,
    sodium: 791,
    image: "https://img.sunset02.com/sites/default/files/image/recipes/su/08/11/artichoke-stuffing-su-1853922-x.jpg"
    },
    {
    title: "Seared Curried Scallops with Zucchini ",
    calories: 329,
    protein: 32,
    fat: 15,
    sodium: 917,
    image: "https://i2.wp.com/wonkywonderful.com/wp-content/uploads/2019/07/spicy-seared-scallops-3.jpg?ssl=1"
    },
    {
    title: "Miso-Marinated Salmon with Cucumber-Daikon Relish ",
    calories: 418,
    protein: 36,
    fat: 28,
    sodium: 125,
    image: "https://thecozyapron.com/wp-content/uploads/2020/09/blackened-salmon_thecozyapron_4.jpg"
    },
    {
    title: "Barbecue Turkey Burgers with Creamy Cole Slaw Holden ",
    calories: 406,
    protein: 32,
    fat: 22,
    sodium: 763,
    image: "https://easygoodideas.com/wp-content/uploads/2020/11/Barbecue-Turkey-Burgers-8.jpg"
    },
    {
    title: "Pan-Fried Catfish with Arugula-Orange Salad ",
    calories: 540,
    protein: 25,
    fat: 34,
    sodium: 734,
    image: "nan"
    },
    {
    title: "Pan-Seared Pork Tenderloin with Rhubarb Compote ",
    calories: 360,
    protein: 40,
    fat: 21,
    sodium: 1068,
    image: "nan"
    },
    {
    title: "Smoked Salmon and Leek Scramble with Meyer Lemon Cr�me Fra�che ",
    calories: 393,
    protein: 21,
    fat: 31,
    sodium: 1008,
    image: "https://i.pinimg.com/originals/50/5e/30/505e30d58d56b8c2db841d167098e475.jpg"
    },
    {
    title: "Pasta with Smoked Whitefish, Tomatoes and Garlic ",
    calories: 615,
    protein: 41,
    fat: 23,
    sodium: 1322,
    image: "https://3.bp.blogspot.com/-1dskkK8mCqQ/WuiEn3YoAwI/AAAAAAAAXaU/FAK0wMmQgF01ifFOEsMf0qHO0qiiCwI7QCEwYBhgL/s1600/salmon%2Btomato%2Bpasta.jpg"
    },
    {
    title: "Lentil and Red Pepper Frittata ",
    calories: 389,
    protein: 27,
    fat: 23,
    sodium: 350,
    image: "https://media1.popsugar-assets.com/files/thumbor/Ujc1gEvoX6EdPwJOBeoyCSecuYY/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2016/03/25/049/n/39192945/0c485fdfa8fa7284_Roasted-Red-Pepper-Frittata-with-Feta-and-Spinach-Get-Inspired-Everyday/i/Roasted-Red-Pepper-Frittata.jpg"
    },
    {
    title: "Pork Chop Milanese with Arugula and Teardrop Tomatoes ",
    calories: 497,
    protein: 20,
    fat: 36,
    sodium: 294,
    image: "https://whatshouldimakefor.com/wp-content/uploads/2018/06/Pork-Milanese-with-Arugula-and-Tomatoes-4-1.jpg"
    },
    {
    title: "Trout in Riesling ",
    calories: 524,
    protein: 42,
    fat: 26,
    sodium: 1010,
    image: "https://i.pinimg.com/originals/23/23/f9/2323f9dd851c822995af8c0053893d2b.jpg"
    },
    {
    title: "Lemon-Rhubarb Chicken ",
    calories: 651,
    protein: 41,
    fat: 36,
    sodium: 165,
    image: "https://i.pinimg.com/originals/22/eb/df/22ebdff49bc8e2575a1a05b9142a2d91.jpg"
    },
    {
    title: "Steamed Mussels with Chipoltes and Coconut Milk ",
    calories: 369,
    protein: 23,
    fat: 23,
    sodium: 539,
    image: "https://i.pinimg.com/originals/b7/18/af/b718af4aabb5fb8e870d19eea0b12693.jpg"
    },
    {
    title: "Cajun Shrimp Tacos with Tomatillo Salsa ",
    calories: 318,
    protein: 18,
    fat: 24,
    sodium: 719,
    image: "https://www.jocooks.com/wp-content/uploads/2015/05/cajun-shrimp-tacos-1-768x960.jpg"
    },
    {
    title: "Garlic Soy Chicken ",
    calories: 537,
    protein: 41,
    fat: 33,
    sodium: 1872,
    image: "https://cravinghomecooked.com/wp-content/uploads/2018/06/garlic-soy-chicken-1-6.jpg"
    },
    {
    title: "Shepherd's Pie with Parsnip Topping ",
    calories: 675,
    protein: 43,
    fat: 26,
    sodium: 308,
    image: "https://twokooksinthekitchen.com/wp-content/uploads/2020/12/IMG_3886-3-683x1024.jpg"
    },
    {
    title: "Yellow Pepper Risotto ",
    calories: 574,
    protein: 22,
    fat: 24,
    sodium: 481,
    image: "https://i.pinimg.com/originals/e7/3f/bf/e73fbff4dc203f4680ffd8993864d3d0.jpg"
    },
    {
    title: "Minestrone Salad ",
    calories: 497,
    protein: 17,
    fat: 18,
    sodium: 991,
    image: "https://whattheforksfordinner.com/wp-content/uploads/2016/06/DSC_0047.jpg"
    },
    {
    title: "Mushroom and Cheddar Cheese Soup ",
    calories: 364,
    protein: 18,
    fat: 24,
    sodium: 801,
    image: "https://i.pinimg.com/originals/39/b0/51/39b0510a5b2e40794490c4f1067ec65d.png"
    },
    {
    title: "Caviar and Salmon Blini Tortes ",
    calories: 534,
    protein: 27,
    fat: 39,
    sodium: 1124,
    image: "https://i.pinimg.com/originals/51/92/4f/51924f639964f13087f0170ca2249a98.jpg"
    },
    {
    title: "Seared Tuna on Fettuccine with Green Olives and Arugula ",
    calories: 775,
    protein: 54,
    fat: 31,
    sodium: 975,
    image: "http://www.jessicagavin.com/wp-content/uploads/2016/11/seared-ahi-tuna-with-haricot-verts-and-carrot-ginger-puree.jpg"
    },
    {
    title: "Orecchiette with Kale and Breadcrumbs ",
    calories: 586,
    protein: 21,
    fat: 22,
    sodium: 458,
    image: "nan"
    },
    {
    title: "Gnocchi with Creamy Tomato-Porcini Sauce ",
    calories: 612,
    protein: 22,
    fat: 15,
    sodium: 554,
    image: "https://i.pinimg.com/originals/92/a6/6f/92a66ff14479c0a683be2f0046c9c56b.jpg"
    },
    {
    title: "Liu Shaokun's Spicy Buckwheat Noodles with Chicken ",
    calories: 510,
    protein: 37,
    fat: 21,
    sodium: 958,
    image: "https://s.yimg.com/ny/api/res/1.2/JEuE0U0f_0SrcEmxaJIPpw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MA--/https://assets.epicurious.com/photos/5cad2f97fbc8bb3e671efbd2/master/w_4738,h_3159,c_limit/Liu-Shaokun's-Spicy-Buckwheat-Noodles-with-Chicken-recipe-03042019.jpg"
    },
    {
    title: "Chipotle-Coffee Steak Salad With Grilled Corn and Tomatoes ",
    calories: 566,
    protein: 32,
    fat: 38,
    sodium: 1786,
    image: "https://healthyfitnessmeals.com/wp-content/uploads/2020/06/Steak-salad-6-819x1024.jpg"
    },
    {
    title: "Cold Poached Salmon with Mustard-Lime Sauce ",
    calories: 591,
    protein: 45,
    fat: 37,
    sodium: 322,
    image: "https://ireallylikefood.com/wp-content/uploads/2021/02/cold-poached-salmon-with-dill-and-yogurt.jpg"
    },
    {
    title: "Carrot Cardamom Soup ",
    calories: 593,
    protein: 17,
    fat: 25,
    sodium: 1385,
    image: "https://i.pinimg.com/originals/03/14/9d/03149df1bb15db7dd279b7de82ac4443.jpg"
    },
    {
    title: "Fried Eggs Over Warm Lentil Salad with Lardons ",
    calories: 504,
    protein: 28,
    fat: 30,
    sodium: 465,
    image: "https://i.pinimg.com/originals/35/2d/f3/352df3683033ec2458bb78b5714d936d.png"
    },
    {
    title: "Tagliatelle with Smoked Salmon Cream Sauce ",
    calories: 454,
    protein: 21,
    fat: 12,
    sodium: 586,
    image: "https://i0.wp.com/www.thefrugalcottage.com/wp-content/uploads/2019/09/smoked-salmon-tagliatelle.jpeg?ssl=1"
    },
    {
    title: "Chile-Crusted Tuna Tacos ",
    calories: 321,
    protein: 24,
    fat: 16,
    sodium: 925,
    image: "https://realfood.tesco.com/media/images/RFO-1400x919-Tuna-tacos-b7d22078-b98f-4f62-b3b4-ab05370547d4-0-1400x919.jpg"
    },
    {
    title: "Sauteed Catfish Fillets with Pecan Butter Sauce ",
    calories: 423,
    protein: 35,
    fat: 30,
    sodium: 215,
    image: "https://i1.wp.com/cookingbride.com/wp-content/uploads/2018/03/Sauteed-Catfish-Fillet-with-Creole-Mustard-Sauce-IMG_2582-WM.jpg?resize=700%2C901&amp;ssl=1"
    },
    {
    title: "Veal Cutlets in Marsala Mustard Sauce ",
    calories: 350,
    protein: 23,
    fat: 22,
    sodium: 117,
    image: "https://i.pinimg.com/originals/ad/ee/48/adee48fe4bb94ac9aca78edc54c11367.jpg"
    },
    {
    title: "Scrambled Eggs with Lox and Cream Cheese ",
    calories: 357,
    protein: 20,
    fat: 29,
    sodium: 665,
    image: "https://www.cookingwithtyanne.com/wp-content/uploads/2021/01/20200715_185341-911x1024.jpg"
    },
    {
    title: "Manhattan Seafood Chowder ",
    calories: 552,
    protein: 48,
    fat: 18,
    sodium: 1246,
    image: "https://www.rockrecipes.com/wp-content/uploads/2008/03/Manhattan-Seafood-Chowder-1-600x600.jpg"
    },
    {
    title: "Winter Vegetable and Beef Soup ",
    calories: 719,
    protein: 43,
    fat: 39,
    sodium: 442,
    image: "https://media1.popsugar-assets.com/files/thumbor/bjmNhIH9dO6Q61FG2IS7mHK0xt4/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/09/18/669/n/44223267/51d8f8d564b6998b_vegetable-beef-soup-10/i/Beef-Vegetable-Soup.jpg"
    },
    {
    title: "Baked Eggs with Tomato-Ham Sauce and Asparagus ",
    calories: 496,
    protein: 36,
    fat: 29,
    sodium: 1866,
    image: "https://eatingeuropean.com/wp-content/uploads/2019/05/Baked-Eggs-Tomato-Cream-Sauce-5.jpg"
    },
    {
    title: "Barley and Lentil Soup ",
    calories: 312,
    protein: 16,
    fat: 7,
    sodium: 2715,
    image: "https://cdn3.tmbi.com/secure/RMS/attachments/37/1200x1200/exps188616_CW153050A06_24_3b.jpg"
    },
    {
    title: "Salmon with Sriracha Sauce and Lime ",
    calories: 313,
    protein: 29,
    fat: 19,
    sodium: 371,
    image: "https://media.self.com/photos/5935c1008d931f75f9971252/master/pass/salmon-sriracha-sauce-lime.jpg"
    },
    {
    title: "Creamy Turnip Soup with Carrot Julienne ",
    calories: 532,
    protein: 17,
    fat: 18,
    sodium: 767,
    image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Creamy-Turnip-Soup_exps97021_THHC2236536B05_25_8bC_RMS.jpg"
    },
    {
    title: "Italian-Style Baked Haddock ",
    calories: 429,
    protein: 42,
    fat: 25,
    sodium: 1416,
    image: "https://static.fanpage.it/wp-content/uploads/sites/22/2021/08/baked-haddock.jpg"
    },
    {
    title: "Breakfast Taco Hobo Packs With Black Beans, Zucchini, and Corn ",
    calories: 327,
    protein: 15,
    fat: 11,
    sodium: 621,
    image: "https://assets.epicurious.com/photos/5581eb6381ac1e5023677a03/2:1/w_1260%2Ch_630/EP_06172015_hobopacks_peppersbeans_6x4.jpg"
    },
    {
    title: "Fettuccine with Shiitakes, Peas and Prosciutto ",
    calories: 464,
    protein: 18,
    fat: 12,
    sodium: 403,
    image: "https://sweetsavoryandsteph.com/wp-content/uploads/2021/03/IMG_8459-1-1152x1536.jpg"
    },
    {
    title: "Sausage Shepherd's Pie with Sweet Potatoes and Squash ",
    calories: 692,
    protein: 37,
    fat: 25,
    sodium: 1126,
    image: "https://woolworths.scene7.com/is/image/woolworthsgroupprod/1108_shepherdspie?wid=1300&amp;hei=1300"
    },
    {
    title: "Panfried Red Snapper with Chipotle Butter ",
    calories: 404,
    protein: 36,
    fat: 24,
    sodium: 460,
    image: "nan"
    },
    {
    title: "Port-Basted Roast Turkey with Pan Gravy ",
    calories: 906,
    protein: 137,
    fat: 30,
    sodium: 587,
    image: "https://i.pinimg.com/originals/bc/c2/9f/bcc29f02a12e32e0805ae5ed0869009e.jpg"
    },
    {
    title: "Pan-Seared Sea Bass with Beet Sauce and Beet Greens ",
    calories: 353,
    protein: 44,
    fat: 13,
    sodium: 577,
    image: "nan"
    },
    {
    title: "Tequila-Glazed Chicken with Jalape�o ",
    calories: 651,
    protein: 44,
    fat: 39,
    sodium: 1002,
    image: "https://assets.epicurious.com/photos/558d5ca5b2ae6bb2718c954f/16:9/w_1280,c_limit/239067_tequila-glazed-chicken-jalapeno_6x4.jpg?mbid=social_retweet"
    },
    {
    title: "Dick Clark's Seared Tuna Pizza ",
    calories: 662,
    protein: 42,
    fat: 27,
    sodium: 1809,
    image: "http://www.jammed.com/~mlb/blogpics/2007/10/pizza/title2.jpg"
    },
    {
    title: "Stuffed Turkey Breast With Butternut Squash, Kale, and Sausage ",
    calories: 631,
    protein: 59,
    fat: 36,
    sodium: 1335,
    image: "https://www.paleorunningmomma.com/wp-content/uploads/2020/10/stuffed-butternut-squash-12.jpg"
    },
    {
    title: "Baby Greens with Warm Goat Cheese ",
    calories: 386,
    protein: 16,
    fat: 31,
    sodium: 722,
    image: "https://i.pinimg.com/originals/fa/57/0a/fa570a69bca8c0f58d2f11c726257bde.jpg"
    },
    {
    title: "Stir-Fried Noodles with Singapore Lamb Curry ",
    calories: 524,
    protein: 19,
    fat: 26,
    sodium: 536,
    image: "https://elavegan.com/wp-content/uploads/2020/10/eating-vegetable-stir-fry-noodles-with-chopsticks-1080x1475.jpg"
    },
    {
    title: "Curried Turkey and Mango Salad ",
    calories: 463,
    protein: 35,
    fat: 27,
    sodium: 229,
    image: "https://eatineatout.ca/wp-content/uploads/2014/10/Curried-Mango-Turkey-and-Walnut-Salad_1m.jpg"
    },
    {
    title: "Cilantro-Lime Crab Salad in Avocado Halves ",
    calories: 467,
    protein: 23,
    fat: 37,
    sodium: 777,
    image: "https://i.pinimg.com/originals/61/eb/67/61eb67776e007bfaec935532fb223cdf.jpg"
    },
    {
    title: "Blueberry Crumble Pie ",
    calories: 1174,
    protein: 57,
    fat: 21,
    sodium: 233,
    image: "https://www.savingdessert.com/wp-content/uploads/2015/06/Blueberry-Crumble-Pie-8.jpg"
    },
    {
    title: "Curried Smoked Turkey and Fruit Salad ",
    calories: 485,
    protein: 28,
    fat: 29,
    sodium: 261,
    image: "https://i.pinimg.com/originals/cd/34/03/cd3403216c7f5df77a59c5ddbc579e48.jpg"
    },
    {
    title: "Brown Sugar-Chipotle Salmon with Honey-Berry Glaze ",
    calories: 526,
    protein: 41,
    fat: 33,
    sodium: 1305,
    image: "https://cdn.momsdish.com/wp-content/uploads/2014/06/Brown-Sugar-Glazed-Salmon-11-scaled.jpg"
    },
    {
    title: "Melted Swiss Cheese with Vegetables ",
    calories: 534,
    protein: 34,
    fat: 32,
    sodium: 233,
    image: "https://assets.bonappetit.com/photos/57acf62a53e63daf11a4dbee/16:9/w_2560%2Cc_limit/best-ever-grilled-cheese.jpg"
    },
    {
    title: "Roasted Cod on Saffron Mashed Potatoes ",
    calories: 673,
    protein: 40,
    fat: 38,
    sodium: 153,
    image: "https://i.pinimg.com/originals/d2/2c/7e/d22c7e94c74726ecc24ac1427613570a.jpg"
    },
    {
    title: "Pistachio Sea Bass with Crab Salad ",
    calories: 570,
    protein: 42,
    fat: 39,
    sodium: 449,
    image: "https://i.pinimg.com/originals/6c/49/26/6c4926a52475ba305a86f7e83046c14a.jpg"
    },
    {
    title: "Hoppin' John Risotto ",
    calories: 649,
    protein: 16,
    fat: 29,
    sodium: 868,
    image: "https://veryvera.wierstewarthosting.com/wp-content/uploads/2016/03/03095632/risotto-hoppin-john-web.jpg"
    },
    {
    title: "New England Clam Chowder ",
    calories: 828,
    protein: 88,
    fat: 28,
    sodium: 1690,
    image: "https://coleycooks.com/wp-content/uploads/2017/10/New-England-Clam-Chowder-7.jpg"
    },
    {
    title: "Indonesian Fried Noodles ",
    calories: 889,
    protein: 50,
    fat: 28,
    sodium: 1918,
    image: "http://3.bp.blogspot.com/-uw1c7F4SyRk/UuEKCpR4fbI/AAAAAAAABDk/4Vsv-2vnQHM/s1600/fried+noodles+(+mie+goreng+)+indonesian+recipes.jpg"
    },
    {
    title: "The Great Onion Soup ",
    calories: 434,
    protein: 17,
    fat: 16,
    sodium: 1145,
    image: "https://allshapes.net/wp-content/uploads/2021/06/Great-Onion-Soup.jpg"
    },
    {
    title: "Eggs Carbonara with Basil and Parmesan ",
    calories: 303,
    protein: 18,
    fat: 24,
    sodium: 596,
    image: "https://friendseat.com/wp-content/uploads/2018/04/EGGS-CARBONARA-WITH-BASIL-AND-PARMESAN.jpg"
    },
    {
    title: "Cod with Mediterranean Salsa ",
    calories: 311,
    protein: 32,
    fat: 17,
    sodium: 345,
    image: "https://i.pinimg.com/originals/e9/e2/3e/e9e23e212eaf921520c5807d161331e4.jpg"
    },
    {
    title: "Seafood Risotto ",
    calories: 437,
    protein: 24,
    fat: 15,
    sodium: 1136,
    image: "https://i0.wp.com/www.oursweetadventures.com/wp-content/uploads/2020/03/Seafood-Risotto.jpg?fit=1920%2C1280&amp;ssl=1"
    },
    {
    title: "Seared Scallops with Tomato Beurre Blanc ",
    calories: 370,
    protein: 19,
    fat: 28,
    sodium: 647,
    image: "https://assets.epicurious.com/photos/555ba7c6644d45515b758707/16:9/w_1280,c_limit/51242060_seared-scallops_6x4.jpg"
    },
    {
    title: "Anything Goes Donabe ",
    calories: 412,
    protein: 40,
    fat: 17,
    sodium: 1778,
    image: "https://assets.bonappetit.com/photos/57acd06ff1c801a1038bc7bc/16:9/w_1280,c_limit/anything-goes-donabe.jpg"
    },
    {
    title: "Lamb Stew with Turkish Flavors ",
    calories: 724,
    protein: 39,
    fat: 40,
    sodium: 974,
    image: "https://i.pinimg.com/originals/07/bc/0b/07bc0b30b8bfac479643de771b1a9c17.jpg"
    },
    {
    title: "Pizza with Sausage, Sauerkraut and Swiss Cheese ",
    calories: 344,
    protein: 16,
    fat: 17,
    sodium: 810,
    image: "https://andrewzimmern.com/wp-content/uploads/Andrew-Zimmern-Recipe-Sauerkraut-Sausage-Pizza-1-scaled.jpg"
    },
    {
    title: "Wilted Mustard Greens ",
    calories: 445,
    protein: 23,
    fat: 38,
    sodium: 220,
    image: "http://1.bp.blogspot.com/_r4_JNV-Lq_Y/TSPWw-Hq3fI/AAAAAAAAACY/rQGaGNK18mc/w1200-h630-p-k-no-nu/P1010586.JPG"
    },
    {
    title: "Linguine with Shrimp and Plum Tomatoes ",
    calories: 878,
    protein: 48,
    fat: 40,
    sodium: 1580,
    image: "https://i.pinimg.com/originals/04/f2/14/04f214ed75087fa6d3fac17050a9ff12.jpg"
    },
    {
    title: "Risotto with Tuscan Kale and Toasted Pumpkin Seeds ",
    calories: 555,
    protein: 20,
    fat: 17,
    sodium: 1121,
    image: "http://girlontherange.com/wp-content/uploads/2015/11/pumpkin-risotto-bowl-www.girlontherange.com_edited.jpg"
    },
    {
    title: "Platter of Roasted Shellfish with Trio of Sauces ",
    calories: 449,
    protein: 57,
    fat: 20,
    sodium: 2157,
    image: "http://assets.epicurious.com/photos/560dd768f9a84192308a4db3/1:1/w_600%2Ch_600/235153.jpg"
    },
    {
    title: "Katniss's Favorite Lamb Stew with Dried Plums ",
    calories: 618,
    protein: 65,
    fat: 19,
    sodium: 1057,
    image: "https://1.bp.blogspot.com/-EmF7YFBzmg4/T3DtgO5folI/AAAAAAAAAF4/tM60vpl9hto/s1600/DSCN2438naann.jpg"
    },
    {
    title: "Chicken and Mushroom Enchiladas ",
    calories: 566,
    protein: 37,
    fat: 38,
    sodium: 1143,
    image: "https://img.taste.com.au/mooDK5RJ/w720-h480-cfill-q80/taste/2016/11/chicken-mushroom-and-thyme-enchiladas-102408-1.jpeg"
    },
    {
    title: "Spicy Baked Shrimp ",
    calories: 347,
    protein: 16,
    fat: 28,
    sodium: 864,
    image: "https://wonkywonderful.com/wp-content/uploads/2017/02/spicy-baked-shrimp-3.jpg"
    },
    {
    title: "Grilled Pork Tenderloin and Belgian Endive and Tomato Chile Jam ",
    calories: 397,
    protein: 38,
    fat: 15,
    sodium: 974,
    image: "https://tastefullygrace.com/wp-content/uploads/2022/09/Grilled-Pork-Tenderloin-Recipe-1-1536x2048.jpg"
    },
    {
    title: "Ham and Sweet Potato Hash with Fried Eggs ",
    calories: 530,
    protein: 27,
    fat: 31,
    sodium: 1431,
    image: "http://cantstayoutofthekitchen.com/wp-content/uploads/Ham-and-Sweet-Potato-Hash-IMG_9166.jpg"
    },
    {
    title: "Chicken and Vegetable Saut� Over Herbed Polenta Triangles ",
    calories: 472,
    protein: 32,
    fat: 27,
    sodium: 110,
    image: "https://mshanken.imgix.net/wso/Articles/2018/8and20_PolentaChickenB122118_1600.jpg"
    },
    {
    title: "Black Bean Mussels ",
    calories: 330,
    protein: 29,
    fat: 17,
    sodium: 996,
    image: "http://farm1.staticflickr.com/686/33300869021_9b62245029_h.jpg"
    },
    {
    title: "Dirty Fried Rice ",
    calories: 471,
    protein: 19,
    fat: 27,
    sodium: 786,
    image: "https://lh3.googleusercontent.com/vRkj_4Fw1QvPfsXXfi7aMxBCG6oeIE6hPT5z-fHkUsdZ2G32vqOkPi0kiCrtlJ6ajRDVXYVz0OS5sJw6SSv9VpzVDcua9E8Z6sbAJCg=w1200-l75"
    },
    {
    title: "Spiced Turkey Breast with Red Cabbage Slaw ",
    calories: 483,
    protein: 24,
    fat: 36,
    sodium: 469,
    image: "https://www.ocado.com/cmscontent/recipe_image_large/30629013.jpg?Z8nt"
    },
    {
    title: "Orecchiette with Broccoli Rabe ",
    calories: 365,
    protein: 15,
    fat: 14,
    sodium: 229,
    image: "nan"
    },
    {
    title: "Salmon Papillotes with Fennel, Potatoes, and Olives ",
    calories: 579,
    protein: 45,
    fat: 36,
    sodium: 303,
    image: "https://media1.popsugar-assets.com/files/thumbor/-hbNPDkgWpuw_hy3Uy0rNuQBYls/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2015/07/13/035/n/1922195/87cace39_Salmon-en-Papillote/i/Salmon-en-Papillote-Fennel-Tomatoes-Olives.jpg"
    },
    {
    title: "Cowboy Christmas Breakfast ",
    calories: 410,
    protein: 24,
    fat: 27,
    sodium: 1033,
    image: "https://i.pinimg.com/originals/70/a0/53/70a05306b6f05dc507cb4cab2ffe836a.png"
    },
    {
    title: "Orzo with Feta, Green Beans, and Tomatoes ",
    calories: 621,
    protein: 23,
    fat: 31,
    sodium: 713,
    image: "nan"
    },
    {
    title: "Split-Pea Soup with Chorizo ",
    calories: 688,
    protein: 53,
    fat: 12,
    sodium: 1030,
    image: "https://i.pinimg.com/originals/21/91/e8/2191e807891d461ca9fc46be2fb9009a.jpg"
    },
    {
    title: "Tuscan Oven Grains and Greens ",
    calories: 460,
    protein: 22,
    fat: 14,
    sodium: 407,
    image: "https://www.thetuscanoven.com/wp-content/uploads/2018/06/tuscan-oven-274_preview.jpeg"
    },
    {
    title: "Seafood Stew ",
    calories: 462,
    protein: 40,
    fat: 18,
    sodium: 928,
    image: "http://3.bp.blogspot.com/-zxw5twPPCek/UcG6IoFuufI/AAAAAAAAIJY/jViw8367UxI/s1600/seafood+stew+recipe-123.jpg"
    },
    {
    title: "'La Brea Tar Pit' Chicken Wings ",
    calories: 410,
    protein: 34,
    fat: 24,
    sodium: 1554,
    image: "https://www.washingtonpost.com/rf/image_982w/2010-2019/WashingtonPost/2019/01/28/Others/Images/2019-01-27/v-rr-superbowl_01.jpg"
    },
    {
    title: "Grilled Salmon with Basil and Mint ",
    calories: 488,
    protein: 36,
    fat: 35,
    sodium: 717,
    image: "https://www.cookingclassy.com/wp-content/uploads/2017/06/grilled-salmon-creamy-pesto-1.jpg"
    },
    {
    title: "Dominican Sancocho ",
    calories: 609,
    protein: 38,
    fat: 31,
    sodium: 243,
    image: "http://www.thepetitgourmet.com/wp-content/uploads/2014/11/DSCN5439.jpg"
    },
    {
    title: "Skillet Roast Chicken with Fennel, Parsnips, and Scallions ",
    calories: 312,
    protein: 23,
    fat: 21,
    sodium: 100,
    image: "https://assets.bonappetit.com/photos/57ad28e81b3340441497543d/master/pass/skillet-roast-chicken-with-fennel-parsnips-and-scallions.jpg"
    },
    {
    title: "Pasta alla Norma ",
    calories: 677,
    protein: 25,
    fat: 15,
    sodium: 61,
    image: "https://cookieandkate.com/images/2020/09/pasta-alla-norma-recipe-3.jpg"
    },
    {
    title: "Whole Wheat-Crusted Chicken Breast Cutlets ",
    calories: 448,
    protein: 44,
    fat: 16,
    sodium: 1022,
    image: "https://assets.epicurious.com/photos/560dd823f3a00aeb2f1d29ee/1:1/w_600%2Ch_600/239147_hires.jpg"
    },
    {
    title: "Moroccan Chickpea Soup ",
    calories: 433,
    protein: 22,
    fat: 10,
    sodium: 254,
    image: "https://www.gimmesomeoven.com/wp-content/uploads/2017/01/Moroccan-Chickpea-Soup-Recipe-1.jpg"
    },
    {
    title: "Udon Noodles with Chicken, Shellfish, and Vegetables ",
    calories: 398,
    protein: 32,
    fat: 6,
    sodium: 1600,
    image: "https://i.pinimg.com/originals/a2/8d/50/a28d5045f6daf33df473ab6356d082c6.jpg"
    },
    {
    title: "Chicken Breasts with Chive and Mustard Sauce ",
    calories: 659,
    protein: 51,
    fat: 39,
    sodium: 1287,
    image: "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&amp;c=sc&amp;poi=face&amp;url=https:%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F7839410.jpg"
    },
    {
    title: "Baked Bass with Fennel ",
    calories: 707,
    protein: 83,
    fat: 21,
    sodium: 406,
    image: "https://cdn.cdkitchen.com/recipes/images/pinterest/37/baked-whole-sea-bass-126699.jpg"
    },
    {
    title: "Braised Beef with Pears and Fresh Ginger ",
    calories: 1092,
    protein: 120,
    fat: 37,
    sodium: 1128,
    image: "https://britneybreaksbread.com/wp-content/uploads/2020/11/IMG_5198-1-1024x683.jpg"
    },
    {
    title: "Mushroom Risotto ",
    calories: 717,
    protein: 18,
    fat: 23,
    sodium: 1650,
    image: "https://hips.hearstapps.com/del.h-cdn.co/assets/17/35/1504128527-delish-mushroom-risotto.jpg"
    },
    {
    title: "Lo Mein with Beef ",
    calories: 543,
    protein: 36,
    fat: 22,
    sodium: 1422,
    image: "http://www.simplesweetsavory.com/wp-content/uploads/2017/11/Beef-Lo-Mein-side-close.jpg"
    },
    {
    title: "Chicken Chili Verde ",
    calories: 478,
    protein: 25,
    fat: 29,
    sodium: 176,
    image: "https://poshjournal.com/wp-content/uploads/2016/06/chicken-chile-verde-9.jpg"
    },
    {
    title: "Prosciutto and Fig Panini ",
    calories: 523,
    protein: 22,
    fat: 10,
    sodium: 1214,
    image: "http://www.shutterbean.com/wp-content/uploads/2013/09/prosciutto3.jpg"
    },
    {
    title: "Portuguese Clams with Lingui�a and Tomatoes ",
    calories: 320,
    protein: 24,
    fat: 18,
    sodium: 1137,
    image: "https://kitchendreaming.com/wp-content/uploads/2016/01/Portuguese-Clams_3_680.jpg"
    },
    {
    title: "Pinto Bean, Sausage, and Fennel Gratin ",
    calories: 768,
    protein: 41,
    fat: 35,
    sodium: 1070,
    image: "http://images.media-allrecipes.com/userphotos/960x960/3757029.jpg"
    },
    {
    title: "Fettuccine with Cherry Tomatoes, Goat Cheese, and Herbs ",
    calories: 799,
    protein: 24,
    fat: 38,
    sodium: 212,
    image: "https://i.pinimg.com/originals/14/16/cf/1416cfcd4290e98d366817e63fe7c3b6.jpg"
    },
    {
    title: "Skillet Poached Eggs with Prosciutto ",
    calories: 548,
    protein: 25,
    fat: 40,
    sodium: 1374,
    image: "https://i.pinimg.com/originals/fa/28/16/fa2816858946277d6fc7277b62f61875.jpg"
    },
    {
    title: "Pasta Rustica with Smoked Mozzarella ",
    calories: 677,
    protein: 30,
    fat: 38,
    sodium: 942,
    image: "nan"
    },
    {
    title: "Bay Scallops with Polenta, Wild Mushrooms, Sherry, and Parsley Bread Crumbs ",
    calories: 543,
    protein: 16,
    fat: 32,
    sodium: 895,
    image: "https://i.pinimg.com/originals/83/b2/d4/83b2d48ac834845600aa0a9da15e70c6.jpg"
    },
    {
    title: "Shrimp and Crab Cannelloni ",
    calories: 679,
    protein: 31,
    fat: 38,
    sodium: 722,
    image: "https://media-cdn.tripadvisor.com/media/photo-s/07/1c/6b/5c/shrimp-and-crab-cannelloni.jpg"
    },
    {
    title: "A Hollywood Ham ",
    calories: 647,
    protein: 52,
    fat: 27,
    sodium: 3648,
    image: "https://www.scholastic.ca/books/app/webroot/img/spreads/9781338806700.jpg"
    },
    {
    title: "Summer Chef's Salad with Grilled Pork, Chicken, and Chimichurri Ranch Dressing ",
    calories: 515,
    protein: 29,
    fat: 38,
    sodium: 402,
    image: "https://i.pinimg.com/originals/24/e0/e3/24e0e38c51393c3d69068202e56948c5.jpg"
    },
    {
    title: "Thai Shrimp Soup with Lemon and Jalapenos ",
    calories: 602,
    protein: 49,
    fat: 22,
    sodium: 1871,
    image: "https://www.dvo.com/link/0408_064813703.jpg"
    },
    {
    title: "Seafood, Avocado and Hearts of Palm Salad ",
    calories: 489,
    protein: 24,
    fat: 39,
    sodium: 1081,
    image: "https://sunrisefitness.com.au/wp-content/uploads/2021/02/Seafood-salad-with-avocado.jpg"
    },
    {
    title: "Clams with Chorizo, Peppers, and Potatoes ",
    calories: 534,
    protein: 16,
    fat: 34,
    sodium: 526,
    image: "https://i.pinimg.com/originals/31/cc/78/31cc78eb3c10a2a7b105eb5d9a1378d4.jpg"
    },
    {
    title: "Tri-Tip Roast with Sun-Dried Tomato and Roasted-Pepper Relish ",
    calories: 409,
    protein: 36,
    fat: 27,
    sodium: 186,
    image: "https://bitternebox.co.uk/wp-content/uploads/2020/11/Artisan-Nut-Roast-Sundried-Tomato.jpg"
    },
    {
    title: "Beef Barley Soup with Wild Mushrooms and Parsnips ",
    calories: 603,
    protein: 55,
    fat: 15,
    sodium: 1157,
    image: "https://www.bowlofdelicious.com/wp-content/uploads/2018/12/Beef-Barley-Soup-with-Mushrooms-4.jpg"
    },
    {
    title: "Spinach and Feta Turnovers ",
    calories: 608,
    protein: 29,
    fat: 19,
    sodium: 1444,
    image: "https://www.tasteofhome.com/wp-content/uploads/2017/10/Spinach-Feta-Turnovers_EXPS_SDJJ18_18371_D02_09_1b.jpg"
    },
    {
    title: "Cioppino ",
    calories: 501,
    protein: 50,
    fat: 23,
    sodium: 1588,
    image: "https://howtofeedaloon.com/wp-content/uploads/2016/08/cioppino-1-1270x1904.jpg"
    },
    {
    title: "Chicken and Bell Pepper Pizza with Barbecue Sauce ",
    calories: 710,
    protein: 35,
    fat: 25,
    sodium: 1613,
    image: "https://bluebowlrecipes.com/wp-content/uploads/2019/05/barbecue-chicken-pizza-0917-683x1024.jpg"
    },
    {
    title: "Broiled Swordfish � la Ni�oise ",
    calories: 609,
    protein: 39,
    fat: 36,
    sodium: 273,
    image: "https://cmx.weightwatchers.ca/assets-proxy/weight-watchers/image/upload/t_WINE_EXTRALARGE/hypm03an7mus8mfegil9.jpg"
    },
    {
    title: "Chicken with Creamy Mushroom Sauce ",
    calories: 525,
    protein: 59,
    fat: 22,
    sodium: 137,
    image: "http://cdn.deliciousmeetshealthy.com/wp-content/uploads/2015/10/Chicken-in-Creamy-Mushroom-Sauce-2.jpg"
    },
    {
    title: "Spicy Salmon with Tomatoes and Star Anise ",
    calories: 326,
    protein: 38,
    fat: 14,
    sodium: 522,
    image: "https://friendseat.com/wp-content/uploads/2018/04/Spicy-Salmon-with-Tomatoes-and-Star-Anise.jpg"
    },
    {
    title: "Mussels with Garlic and Fines Herbes ",
    calories: 444,
    protein: 42,
    fat: 14,
    sodium: 984,
    image: "https://www.foodleclub.com/wp-content/uploads/2020/10/fresh-mussels-in-creamy-garlic-sauce-2.jpg"
    },
    {
    title: "Southwest Chicken Salad with Rice, Corn, and Chilies ",
    calories: 728,
    protein: 42,
    fat: 33,
    sodium: 481,
    image: "http://keviniscooking.com/wp-content/uploads/2015/05/Southwest-BBQ-Chicken-Salad-with-Apricots-Avocado-and-Grilled-Corn1-681x1024.jpg"
    },
    {
    title: "Lamb Kofte with Garlic Yogurt Sauce ",
    calories: 410,
    protein: 23,
    fat: 29,
    sodium: 1097,
    image: "https://www.carolinescooking.com/wp-content/uploads/2018/07/lamb-kofte-pic.jpg"
    },
    {
    title: "Lentil Croquettes ",
    calories: 411,
    protein: 23,
    fat: 5,
    sodium: 1257,
    image: "https://www.lentils.org/wp-content/uploads/2020/05/Sask-Pulse-Growers-Lentil-Croquette-6069.jpg"
    },
    {
    title: "Spicy Stir-Fried Brown Rice with Broccolini and Scallops ",
    calories: 394,
    protein: 18,
    fat: 8,
    sodium: 787,
    image: "https://samskitchen.com.au/wp-content/uploads/2018/01/DSC4971-Fork_Knife_Swoon_Quick_and_Easy_Spicy_Sesame_Garlic_Broccolini.jpg"
    },
    {
    title: "Chicken Soup with Stars and Meatballs ",
    calories: 632,
    protein: 40,
    fat: 24,
    sodium: 775,
    image: "https://www.iheartpublix.com/wp-content/uploads/2017/10/Chicken-and-Stars-Soup.jpg"
    },
    {
    title: "Miso Carbonara with Broccoli Rabe and Red-Pepper Flakes ",
    calories: 871,
    protein: 41,
    fat: 36,
    sodium: 1373,
    image: "https://i.pinimg.com/originals/e7/56/89/e75689d2f83b91bdbfebff4314df5f69.jpg"
    },
    {
    title: "Gouda and Red Salad Pizza ",
    calories: 645,
    protein: 28,
    fat: 29,
    sodium: 1562,
    image: "https://vikalinka.com/wp-content/uploads/2014/05/MG_6757-4.jpg"
    },
    {
    title: "Roast Rack of Lamb with Mint Sauce ",
    calories: 491,
    protein: 17,
    fat: 23,
    sodium: 677,
    image: "https://assets.epicurious.com/photos/57a105ffe4857f9f1047d0c7/master/pass/roast-rack-of-lamb-with-mint-sauce.jpg"
    },
    {
    title: "Pork Cassoulet with Pork Confit and Winter Tomato Sauce ",
    calories: 393,
    protein: 23,
    fat: 22,
    sodium: 1088,
    image: "https://i.pinimg.com/736x/42/0b/eb/420beb285c611bc32b447cc81c3d44e9.jpg"
    },
    {
    title: "Osso Buco Milanese ",
    calories: 653,
    protein: 74,
    fat: 25,
    sodium: 2426,
    image: "nan"
    },
    {
    title: "Twice-Baked Potatoes with Corned Beef and Cabbage ",
    calories: 1006,
    protein: 29,
    fat: 27,
    sodium: 483,
    image: "https://therecipecritic.com/wp-content/uploads/2021/03/instantpotcornedbeef3.jpg"
    },
    {
    title: "Rice Pudding with Cream Sherry ",
    calories: 649,
    protein: 15,
    fat: 12,
    sodium: 314,
    image: "http://www.sprinklesomesugar.com/wp-content/uploads/2014/04/IMG_5063-2.jpg"
    },
    {
    title: "Trout with Cucumber and Sour Cream ",
    calories: 434,
    protein: 39,
    fat: 29,
    sodium: 124,
    image: "https://www.healthylunchideas.net/assets/pins/trout-with-cucumber-and-sour-cream.png"
    },
    {
    title: "Cavatappi with Butternut Squash ",
    calories: 732,
    protein: 23,
    fat: 18,
    sodium: 509,
    image: "https://i.pinimg.com/originals/b7/5f/56/b75f56d69d11181a6fb8300d359c8064.jpg"
    },
    {
    title: "Apple Pie with Cheddar Crust ",
    calories: 805,
    protein: 16,
    fat: 40,
    sodium: 542,
    image: "https://www.spoonforkbacon.com/wp-content/uploads/2014/11/brown-butter-apple-pie-cheddar-crust.jpg"
    },
    {
    title: "Creamed Oysters on Toasted Corn Bread ",
    calories: 695,
    protein: 26,
    fat: 15,
    sodium: 1174,
    image: "http://3.bp.blogspot.com/-I28e0unLliU/UpPC5zHfHAI/AAAAAAAALIQ/v-W4fhuWqRY/s1600/ESTE.jpg"
    },
    {
    title: "Grilled New Orleans-Style Shrimp ",
    calories: 349,
    protein: 24,
    fat: 26,
    sodium: 1096,
    image: "https://fitfoodiefinds.com/wp-content/uploads/2021/07/grilled-shrimp-9-sq.jpg"
    },
    {
    title: "Ricotta Gnudi with Wild Mushroom and Truffle Sauce ",
    calories: 655,
    protein: 40,
    fat: 37,
    sodium: 886,
    image: "https://assets.epicurious.com/photos/5c2d1d48c3d5af2d6fec1a0b/16:9/w_1280,c_limit/ricotta-gnudi-recipe-010219.jpg?mbid=social_retweet"
    },
    {
    title: "Panfried Flank Steak with Mushroom Rago�t ",
    calories: 409,
    protein: 40,
    fat: 25,
    sodium: 833,
    image: "nan"
    },
    {
    title: "Lemon Pine Nut Tagliatelle ",
    calories: 736,
    protein: 19,
    fat: 28,
    sodium: 459,
    image: "https://jonoandjules.files.wordpress.com/2012/08/lemon-tagliatelle.jpg?w=768&amp;h=510"
    },
    {
    title: "Mustard-Roasted Chicken Legs on Arugula ",
    calories: 593,
    protein: 47,
    fat: 38,
    sodium: 444,
    image: "https://i.pinimg.com/736x/2f/67/cf/2f67cf01cb30b0e695678798fb3eeb31--arugula-salad-recipes-barefoot-contessa.jpg"
    },
    {
    title: "Linguine with Salmon and Mushrooms ",
    calories: 551,
    protein: 28,
    fat: 26,
    sodium: 216,
    image: "https://i.pinimg.com/originals/79/48/41/794841b3dca79a5c62e8cb232de2a40b.png"
    },
    {
    title: "Rigatoni with Tomato, Basil, and Mushroom Sauce ",
    calories: 587,
    protein: 20,
    fat: 19,
    sodium: 333,
    image: "https://www.lastingredient.com/wp-content/uploads/2018/02/rigatoni-tomato-sauce5-819x1024.jpg"
    },
    {
    title: "Curried Chicken and Vegetable Salad Mintz ",
    calories: 591,
    protein: 28,
    fat: 38,
    sodium: 350,
    image: "https://i2.wp.com/saygraceblog.com/wp-content/uploads/2017/07/Curried-Chicken-Salad-Recipe-2.jpg"
    },
    {
    title: "Spicy Pork and Cashew Stir-Fry with Snow Peas and Red Pepper ",
    calories: 503,
    protein: 27,
    fat: 36,
    sodium: 923,
    image: "https://assets.epicurious.com/photos/560ea7c8f9a84192308a9a6b/16:9/w_1280,c_limit/104637.jpg"
    },
    {
    title: "Grilled Chicken Drummettes with Ancho-Cherry Barbecue Sauce ",
    calories: 392,
    protein: 25,
    fat: 19,
    sodium: 288,
    image: "https://thefoodiepatootie.com/wp-content/uploads/2014/08/habanero-grilled-chicken-drumettes.png"
    },
    {
    title: "Old-Fashioned Crawfish Boil ",
    calories: 862,
    protein: 104,
    fat: 11,
    sodium: 7887,
    image: "nan"
    },
    {
    title: "Grilled Swordfish with Pineapple Plantain Chutney ",
    calories: 658,
    protein: 47,
    fat: 35,
    sodium: 234,
    image: "https://www.joyineveryseason.com/wp-content/uploads/2016/08/GrilledSwordfishPineappleSalsa.jpg"
    },
    {
    title: "Garlic, White Cheddar and Chipotle Mashed Potatoes ",
    calories: 538,
    protein: 15,
    fat: 29,
    sodium: 252,
    image: "http://watchlearneat.com/wp-content/uploads/2014/11/Easy-Garlic-Cheddar-Mashed-Potatoes-1.jpg"
    },
    {
    title: "Mexican Ceviche Tacos ",
    calories: 324,
    protein: 32,
    fat: 15,
    sodium: 1036,
    image: "http://godairyfree.org/wp-content/uploads/2015/09/mexican-ceviche-ig.jpg"
    },
    {
    title: "Linguine with Broccoli Rabe and Lemon ",
    calories: 613,
    protein: 26,
    fat: 15,
    sodium: 281,
    image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Linguine-with-Broccoli-Rabe-Peppers_exps144255_SD142780D08_13_2bC_RMS.jpg?fit=700%2C1024"
    },
    {
    title: "Bacon Swiss Burgers with Tomato and Avocado ",
    calories: 523,
    protein: 39,
    fat: 39,
    sodium: 980,
    image: "https://assets.epicurious.com/photos/560d7999f9a841923089d998/1:1/w_2560%2Cc_limit/350990_hires.jpg"
    },
    {
    title: "Tuna Burgers Ni�oise ",
    calories: 503,
    protein: 35,
    fat: 26,
    sodium: 860,
    image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Tuna-Burgers_EXPS_SDFM17_925_C10_06_2b-5.jpg?fit=700"
    },
    {
    title: "Duck with Wild Mushrooms and Fig Sauce ",
    calories: 1013,
    protein: 57,
    fat: 31,
    sodium: 300,
    image: "https://www.tasteandflavors.com/wp-content/uploads/2019/12/ROASTED-WILD-DUCK-MUSHROOMS-768x519-1.jpg"
    },
    {
    title: "Spaghetti with Chorizo and Almonds ",
    calories: 828,
    protein: 31,
    fat: 34,
    sodium: 863,
    image: "https://cookeojbh.fr/wp-content/uploads/2016/10/20161017_132721.jpg"
    },
    {
    title: "Italian Sausage with Fennel, Peppers, and Onions ",
    calories: 425,
    protein: 29,
    fat: 28,
    sodium: 1015,
    image: "https://www.healthylunchideas.net/assets/cache/italian-sausage-with-fennel-peppers-and-onions.png"
    },
    {
    title: "Braised Pork Loin with Prunes ",
    calories: 659,
    protein: 22,
    fat: 19,
    sodium: 536,
    image: "http://theroyalchef.com/wp-content/uploads/2012/02/Image-1-917x1024.jpg"
    },
    {
    title: "Baked Ziti with Mushrooms, Peppers, and Parmesan ",
    calories: 485,
    protein: 20,
    fat: 20,
    sodium: 314,
    image: "https://i.pinimg.com/originals/8c/be/98/8cbe987c7e5bde9cc35858f4e017046a.jpg"
    },
    {
    title: "Creole Chicken and Okra Gumbo ",
    calories: 487,
    protein: 26,
    fat: 35,
    sodium: 234,
    image: "https://cdn3.tmbi.com/secure/RMS/attachments/37/1200x1200/Chicken-and-Okra-Gumbo_exps3201_AC2930252C01_15_1bC_RMS.jpg"
    },
    {
    title: "Chicken Piccata ",
    calories: 449,
    protein: 54,
    fat: 22,
    sodium: 314,
    image: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2023/05/Chicken-Piccata-main.jpg"
    },
    {
    title: "Grilled Pork Tenderloin with Peach Barbecue Sauce ",
    calories: 485,
    protein: 50,
    fat: 20,
    sodium: 1920,
    image: "https://www.bakingbeauty.net/wp-content/uploads/2015/09/Grilled-Pork-3.jpg"
    },
    {
    title: "Curried Lentil Stew with Ginger Yogurt ",
    calories: 714,
    protein: 37,
    fat: 26,
    sodium: 315,
    image: "https://i.pinimg.com/originals/f5/2b/63/f52b635043a1c906effd88a20920a2a2.jpg"
    },
    {
    title: "Breaded Chicken Cutlets (aka Grandma Jody's Chicken) ",
    calories: 326,
    protein: 35,
    fat: 16,
    sodium: 157,
    image: "https://i1.wp.com/www.eazypeazymealz.com/wp-content/uploads/2020/12/breaded-chicken-cutlets-12.jpg?fit=800%2C1200&amp;ssl=1"
    },
    {
    title: "Leek and Cod Soup ",
    calories: 449,
    protein: 40,
    fat: 15,
    sodium: 4029,
    image: "https://i.pinimg.com/736x/92/d2/d7/92d2d7fe0d571f5ee047e7240ff72c12.jpg"
    },
    {
    title: "Pea Salad with Radishes and Feta Cheese ",
    calories: 584,
    protein: 29,
    fat: 22,
    sodium: 298,
    image: "https://i.pinimg.com/originals/5a/00/32/5a00321e780f0aa9b136827859fb084c.jpg"
    },
    {
    title: "Salmon Cannelloni with Lemon Cream Sauce ",
    calories: 521,
    protein: 36,
    fat: 36,
    sodium: 851,
    image: "https://keeprecipes.com/sites/keeprecipes/files/download_27.jpg"
    },
    {
    title: "Coffee Cream ",
    calories: 396,
    protein: 18,
    fat: 26,
    sodium: 135,
    image: "https://i5.walmartimages.com/asr/197c461c-72aa-4f0b-8e46-79ae03a0e6f4_1.32eddcbcb7ab4a1d5aa9bf163088f9b8.jpeg"
    },
    {
    title: "Grandfather's Cioppino ",
    calories: 516,
    protein: 59,
    fat: 17,
    sodium: 1230,
    image: "https://www.onceuponachef.com/images/2017/01/Cioppino-3-1200x795.jpg"
    },
    {
    title: "Penang Fried Rice Noodles ",
    calories: 456,
    protein: 21,
    fat: 17,
    sodium: 1275,
    image: "https://assets.epicurious.com/photos/54b2839b9a93d64c380b0db6/master/w_1280%2Cc_limit/368909_penang-fried-rice-noodles_1x1.jpg"
    },
    {
    title: "Curried Pumpkin Breads ",
    calories: 701,
    protein: 17,
    fat: 23,
    sodium: 1525,
    image: "http://www.countrycleaver.com/wp-content/uploads/2017/10/Curried-Pumpkin-Dinner-Rolls.jpg"
    },
    {
    title: "Asparagus, Prosciutto, and Goat Cheese Galettes ",
    calories: 672,
    protein: 26,
    fat: 38,
    sodium: 1598,
    image: "https://cdn11.bigcommerce.com/s-t9imb/images/stencil/1280x1280/products/5057/8336/asparagus_2_blog__01532.1431526269.jpg?c=2"
    },
    {
    title: "Thyme-Roasted Chicken Breast with Morel-Madeira Gravy ",
    calories: 466,
    protein: 41,
    fat: 24,
    sodium: 176,
    image: "https://thatlowcarblife.com/wp-content/uploads/2020/05/oven-roasted-chicken-breasts.jpg"
    },
    {
    title: "White Chicken Chili ",
    calories: 510,
    protein: 45,
    fat: 12,
    sodium: 965,
    image: "https://sweetandsavorymeals.com/wp-content/uploads/2019/03/White-Chicken-Chili-Recipe-4.jpg"
    },
    {
    title: "Coconut Lime Mussels ",
    calories: 320,
    protein: 22,
    fat: 16,
    sodium: 497,
    image: "https://assets.epicurious.com/photos/54b31e9a3edeef84363bc3ee/1:1/w_2560%2Cc_limit/361530_coconut-lime-mussels_1x1.jpg"
    },
    {
    title: "Polenta with Mozzarella and Parmesan ",
    calories: 384,
    protein: 20,
    fat: 18,
    sodium: 487,
    image: "https://i.pinimg.com/originals/11/43/29/114329118775070ba308796620a3cd6b.jpg"
    },
    {
    title: "Tuna, White Bean, and Roasted Pepper Salad with Cream Dijon Dressing ",
    calories: 462,
    protein: 26,
    fat: 28,
    sodium: 584,
    image: "https://i.pinimg.com/originals/2f/65/04/2f65048cc0a4eb48b1aad3a21f188c49.jpg"
    },
    {
    title: "Mussels with Saffron Cream ",
    calories: 629,
    protein: 55,
    fat: 31,
    sodium: 1749,
    image: "https://i1.wp.com/thehungarybuddha.com/wp-content/uploads/2016/05/Steamed-Mussels-with-Saffron-Cream.png?fit=600%2C900&amp;ssl=1"
    },
    {
    title: "Anasazi Butternut Squash Soup with Chorizo and Pepitas ",
    calories: 602,
    protein: 32,
    fat: 37,
    sodium: 1461,
    image: "https://foodupe.com/wp-content/uploads/2021/10/ROASTED-BUTTERNUT-SQUASH-SOUP-WITH-CHORIZO-CRISPY-PINE-NUTS.jpg"
    },
    {
    title: "Greek-Style Penne with Lamb, Parsnips, Tomatoes, and Cinnamon ",
    calories: 481,
    protein: 17,
    fat: 15,
    sodium: 54,
    image: "https://3.bp.blogspot.com/-Z2n-pOFPbD4/WByZxZzjirI/AAAAAAABef8/RLTKexdbAkYXGV_um0GcRy5A9zfiwp5xQCLcB/s1600/lamb%2Bpenne.jpg"
    },
    {
    title: "Baked Rigatoni with Ham, Tomatoes and Feta Cheese ",
    calories: 467,
    protein: 22,
    fat: 20,
    sodium: 809,
    image: "https://www.theoriginaldish.com/wp-content/uploads/2019/10/Baked-Rigatoni-1-683x1024.jpg"
    },
    {
    title: "Herb-Crusted Flank Steak with Cherry Tomatoes and Olives ",
    calories: 511,
    protein: 49,
    fat: 32,
    sodium: 1022,
    image: "https://i.pinimg.com/originals/54/6d/5b/546d5b61a2d3c45546ae826262e896ea.jpg"
    },
    {
    title: "Egg and Avocado Breakfast Sandwich ",
    calories: 445,
    protein: 17,
    fat: 24,
    sodium: 449,
    image: "https://somethingaboutsandwiches.com/wp-content/uploads/2021/01/avocado-egg-sandwich-890x1024.jpg"
    },
    {
    title: "Risotto with Artichoke Hearts, Prosciutto, and Red Bell Pepper ",
    calories: 766,
    protein: 22,
    fat: 28,
    sodium: 800,
    image: "https://everybodylovesitalian.com/wp-content/uploads/2021/01/25recipe.health-articleLarge.jpg"
    },
    {
    title: "Angel-Hair Pasta with Sauteed Squid ",
    calories: 655,
    protein: 73,
    fat: 24,
    sodium: 1916,
    image: "https://thespicechica.com/wp-content/uploads/2020/08/slices-of-squid-bathed-in-a-sauce-of-oil-garlic-and-parsley-with-of-picture-id1256880148-840x560.jpg"
    },
    {
    title: "Chicken Saut� with Olives and Plum Tomatoes ",
    calories: 434,
    protein: 41,
    fat: 24,
    sodium: 198,
    image: "https://addapinch.com/wp-content/uploads/2015/03/chicken-tomatoes-olives-recipe-DSC_1083-1.jpg"
    },
    {
    title: "Pasta and Lamb Casserole (Pastitsio) ",
    calories: 699,
    protein: 29,
    fat: 32,
    sodium: 382,
    image: "https://www.all-thats-jas.com/wp-content/uploads/2020/08/Pasta-pastitsio-casserole-from-Greece.jpg"
    },
    {
    title: "Broiled Salmon With Scallions and Sesame ",
    calories: 585,
    protein: 48,
    fat: 39,
    sodium: 727,
    image: "https://i.pinimg.com/originals/04/bd/0a/04bd0ac58f53047955b2fc277fb5845e.png"
    },
    {
    title: "Green Salad with Goat Cheese, Artichoke Hearts and Migas ",
    calories: 364,
    protein: 15,
    fat: 23,
    sodium: 780,
    image: "https://asimplepalate.com/wp-content/uploads/2021/04/artichoke-salad-2-1365x2048.jpg"
    },
    {
    title: "Parmesan-Crusted Chicken and Asparagus with Sauce Maltaise ",
    calories: 570,
    protein: 66,
    fat: 26,
    sodium: 1133,
    image: "nan"
    },
    {
    title: "Poached Chicken with Tomatoes, Olives, and Green Beans ",
    calories: 480,
    protein: 52,
    fat: 24,
    sodium: 1790,
    image: "https://assets.epicurious.com/photos/5c3673a94247f42cc45c71d7/1:1/w_2560%2Cc_limit/poached-chicken-with-tomatoes-olives-green-beans-recipe-gourmet-010919.jpg"
    },
    {
    title: "Ham and Succotash Stew with Cheddar Biscuits ",
    calories: 850,
    protein: 64,
    fat: 32,
    sodium: 4927,
    image: "https://thefoodcharlatan.com/wp-content/uploads/2021/01/Cheddar-Bay-Biscuits-Recipe_-9.jpg"
    },
    {
    title: "Provencal Goat Cheese and Herb Souffl� ",
    calories: 506,
    protein: 27,
    fat: 37,
    sodium: 1045,
    image: "https://i.pinimg.com/originals/68/59/e9/6859e90378c40110cf8466746cf73847.jpg"
    },
    {
    title: "Asparagus Lemon Pasta ",
    calories: 615,
    protein: 19,
    fat: 19,
    sodium: 459,
    image: "https://asimplepalate.com/wp-content/uploads/2021/06/lemon-asparagus-pasta-2-1365x2048.jpg"
    },
    {
    title: "Maple-Soy-Glazed Mackerel Fillets with Avocado ",
    calories: 547,
    protein: 45,
    fat: 25,
    sodium: 2018,
    image: "https://images.immediate.co.uk/production/volatile/sites/2/2021/06/210504_Olive_Mackerel-c63bff0.jpg?quality=90&amp;resize=620%2C413"
    },
    {
    title: "Lemon-Garlic Baked Shrimp ",
    calories: 372,
    protein: 24,
    fat: 29,
    sodium: 968,
    image: "http://www.katiescucina.com/wp-content/uploads/2018/09/Baked-Lemon-Garlic-Shrimp-600x906.jpg"
    },
    {
    title: "Penne with Slow-Roasted Cherry Tomatoes and Goat Cheese ",
    calories: 668,
    protein: 25,
    fat: 21,
    sodium: 1178,
    image: "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_73,ar_16:9,w_1024/v1/img/recipes/11/72/20/pic3e0j0f.jpg"
    },
    {
    title: "Veal, Wild Mushrooms, and Red Wine ",
    calories: 321,
    protein: 36,
    fat: 11,
    sodium: 518,
    image: "https://i.pinimg.com/originals/32/e6/61/32e661fb096a0ce61583614a35e2b4f5.jpg"
    },
    {
    title: "Steak and Boursin Sandwiches ",
    calories: 470,
    protein: 36,
    fat: 29,
    sodium: 864,
    image: "https://i.pinimg.com/originals/35/2b/52/352b522158291de9bcb26d8c3fa8560b.jpg"
    },
    {
    title: "Green Posole with Cod and Cilantro ",
    calories: 322,
    protein: 28,
    fat: 10,
    sodium: 821,
    image: "https://i.pinimg.com/originals/34/bc/73/34bc7317aaed8a0eff0699030336d286.jpg"
    },
    {
    title: "Chicken Tagine with Chickpeas and Mint ",
    calories: 744,
    protein: 52,
    fat: 38,
    sodium: 589,
    image: "https://static01.nyt.com/images/2016/01/23/dining/23COOKING_CHICKENTAGINE1/23COOKING_CHICKENTAGINE1-superJumbo.jpg"
    },
    {
    title: "Pork Tamale Potpie with Corn Bread Crust ",
    calories: 586,
    protein: 36,
    fat: 21,
    sodium: 655,
    image: "https://i.pinimg.com/originals/2e/90/7d/2e907dccea257320142254cc90c78662.png"
    },
    {
    title: "Pan-Grilled Beer-Marinated Hanger Steak ",
    calories: 434,
    protein: 39,
    fat: 29,
    sodium: 745,
    image: "nan"
    },
    {
    title: "Fish Soup with Bread and Rouille ",
    calories: 702,
    protein: 66,
    fat: 22,
    sodium: 1028,
    image: "https://images.eatsmarter.com/sites/default/files/styles/max_size/public/french-fish-soup-bouillabaisse-with-rouille-578358.jpg"
    },
    {
    title: "Vegetable Stew with Couscous ",
    calories: 742,
    protein: 28,
    fat: 22,
    sodium: 239,
    image: "https://media.blueapron.com/recipes/166/square_newsletter_images/20141219-2029-15-0313/166.jpg?quality=80&amp;width=850"
    },
    {
    title: "Upstate Chili ",
    calories: 691,
    protein: 79,
    fat: 18,
    sodium: 1865,
    image: "https://i.pinimg.com/originals/2c/f3/e0/2cf3e0ff711496d0fc4943ff04b79737.jpg"
    },
    {
    title: "Ultimate Turkey Stock ",
    calories: 314,
    protein: 32,
    fat: 18,
    sodium: 137,
    image: "http://glebekitchen.com/wp-content/uploads/2016/05/concentratedturkeystock.jpg"
    },
    {
    title: "Fusilli with Shrimp and Paneed Chicken ",
    calories: 860,
    protein: 48,
    fat: 34,
    sodium: 1342,
    image: "https://www.safeway.ca/wp-content/uploads/2019/09/Recipe_One_Skillet_Spicy_Shrimp_Fusilli.jpg"
    },
    {
    title: "Tsimmes with Beets, Turnips, and Beef ",
    calories: 487,
    protein: 50,
    fat: 19,
    sodium: 1368,
    image: "https://i.pinimg.com/originals/97/70/7b/97707b2ed8e1e6fc1cea1a559bf86a19.jpg"
    },
    {
    title: "Duck with Honey-Peppercorn Sauce ",
    calories: 425,
    protein: 40,
    fat: 21,
    sodium: 369,
    image: "https://www.foodlovinfamily.com/wp-content/uploads/2021/01/Duck-sauce-in-a-bowl.jpg"
    },
    {
    title: "Spiced Pear Flatbreads with Goat Cheese and Mustard Cream ",
    calories: 784,
    protein: 25,
    fat: 35,
    sodium: 1870,
    image: "https://assets.epicurious.com/photos/54b3eb9b21388ef838b0f0cf/16:9/w_1280,c_limit/354834_spiced-pear-flatbreads_1x1.jpg"
    },
    {
    title: "Rosemary-Rubbed Side of Salmon with Roasted Potatoes, Parsnips, and Mushrooms ",
    calories: 648,
    protein: 46,
    fat: 39,
    sodium: 1093,
    image: "https://live.staticflickr.com/2294/2168127095_851d08885c_b.jpg"
    },
    {
    title: "Tagliatelle with Chestnuts, Pancetta, and Sage ",
    calories: 561,
    protein: 17,
    fat: 23,
    sodium: 343,
    image: "https://seasonseatingsdotnet.files.wordpress.com/2016/12/fullsizerender1.jpg?w=920"
    },
    {
    title: "Grilled Cheese with Smoked Turkey and Avocado ",
    calories: 596,
    protein: 35,
    fat: 35,
    sodium: 831,
    image: "https://thefoodiephysician.com/wp-content/uploads/2017/02/avocado-grilled-cheese.jpg"
    },
    {
    title: "Stacked Chicken Enchiladas with Salsa Verde and Cheese ",
    calories: 460,
    protein: 19,
    fat: 36,
    sodium: 738,
    image: "https://i.pinimg.com/originals/fe/5c/43/fe5c4387bc42c7996aa44231640aac89.jpg"
    },
    {
    title: "Beer-Brined Grilled Pork Chops ",
    calories: 429,
    protein: 42,
    fat: 18,
    sodium: 3886,
    image: "https://www.foodiecrush.com/wp-content/uploads/2019/05/Grilled-Pork-Chops-foodiecrush.com-010B.jpg"
    },
    {
    title: "Na'ama's Fattoush ",
    calories: 437,
    protein: 16,
    fat: 21,
    sodium: 1127,
    image: "https://happyforks.com/static/foto/rec/l/2591.jpg"
    },
    {
    title: "Turkey Shawarma with Tomato Relish and Tahini Sauce ",
    calories: 488,
    protein: 36,
    fat: 25,
    sodium: 925,
    image: "https://assets.bonappetit.com/photos/57b0660d1b33404414976244/master/pass/turkey-shawarma-with-tomato-relish-and-tahini-sauce.jpg"
    },
    {
    title: "Thyme Honey Glazed Ham ",
    calories: 747,
    protein: 70,
    fat: 39,
    sodium: 4819,
    image: "https://www.savoryexperiments.com/wp-content/uploads/2019/03/thyme-honey-glazed-ham-FB-1200x1200.jpg"
    },
    {
    title: "Grilled Salmon with Tomato, Cucumber and Caper Salsa ",
    calories: 311,
    protein: 19,
    fat: 24,
    sodium: 155,
    image: "https://media1.popsugar-assets.com/files/thumbor/BgL9_fPuRC1S-3OtqTUNYq4wG54/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/04/10/864/n/44548660/0560d8d6383f39ef_Pan-Grilled-Salmon-Tomato-Salsa/i/Pan-Grilled-Salmon-Tomato-Salsa.png"
    },
    {
    title: "Our Favorite French Onion Soup ",
    calories: 723,
    protein: 28,
    fat: 30,
    sodium: 1884,
    image: "nan"
    },
    {
    title: "Goulash Soup ",
    calories: 545,
    protein: 40,
    fat: 30,
    sodium: 513,
    image: "http://www.healthy-delicious.com/wp-content/uploads/2017/01/GOULASH-SOUP-Healthy-Delicious-3.jpg"
    },
    {
    title: "Grilled Chicken Tacos ",
    calories: 303,
    protein: 20,
    fat: 23,
    sodium: 573,
    image: "https://www.lecremedelacrumb.com/wp-content/uploads/2016/08/grilled-chicken-tacos-104.jpg"
    },
    {
    title: "Provencal Fish Soup with Saffron Rouille ",
    calories: 436,
    protein: 55,
    fat: 13,
    sodium: 335,
    image: "http://media-cache-ak0.pinimg.com/736x/45/93/de/4593de31b32142ef35a4f85b13afcc95.jpg"
    },
    {
    title: "Braised Meatballs in Red-Wine Gravy ",
    calories: 588,
    protein: 32,
    fat: 36,
    sodium: 1588,
    image: "https://i.pinimg.com/originals/f7/74/9d/f7749d766967bd0589f0a2286e99d131.jpg"
    },
    {
    title: "Ni�oise Orzo Salad ",
    calories: 476,
    protein: 22,
    fat: 19,
    sodium: 437,
    image: "nan"
    },
    {
    title: "Seafood Cannelloni ",
    calories: 313,
    protein: 21,
    fat: 18,
    sodium: 1332,
    image: "https://lh3.ggpht.com/jLRd3Jngh9btaHaSrSzVZ67d5InxilE8g6gizKkrGydrFtnV_DPbz-1uGvmiaCBYZ7iRsxeoJpw8QlvOgINi3A=w1200-h630-pp-rj-v1-e365"
    },
    {
    title: "Halibut with Herb Sauce ",
    calories: 318,
    protein: 32,
    fat: 20,
    sodium: 117,
    image: "https://recipes.net/wp-content/uploads/2020/04/grilled-halibut-with-tomato-herb-sauce.jpg"
    },
    {
    title: "Mussels with Leeks, Saffron and Cream ",
    calories: 309,
    protein: 24,
    fat: 15,
    sodium: 566,
    image: "https://i.pinimg.com/originals/92/42/93/924293bd32e402009e7dc9ebf24d7cc2.jpg"
    },
    {
    title: "Curried Ground Shrimp and Noodles ",
    calories: 575,
    protein: 35,
    fat: 11,
    sodium: 1280,
    image: "https://feralcooks.com/wp-content/uploads/2020/03/Curried-Ground-Shrimp-and-Noodles-min-1.jpeg"
    },
    {
    title: "Grilled Veal Chops with Warm Tomato-Olive Vinaigrette ",
    calories: 547,
    protein: 44,
    fat: 39,
    sodium: 316,
    image: "https://i.pinimg.com/originals/a9/c8/93/a9c8930a549d593539941c8453507a2a.jpg"
    },
    {
    title: "Stewed Turkey with Herbs and Onions ",
    calories: 597,
    protein: 70,
    fat: 22,
    sodium: 933,
    image: "https://whereismyspoon.co/wp-content/uploads/2020/11/pot-of-stewed-turkey-2.jpg"
    },
    {
    title: "Poached Fish with Spinach in Chili-Tomato Sauce ",
    calories: 320,
    protein: 33,
    fat: 12,
    sodium: 380,
    image: "https://bigoven-res.cloudinary.com/image/upload/t_recipe-1280/poached-fish-with-ginger-and-soy.jpg"
    },
    {
    title: "Lisu Spice-Rubbed Roast Pork ",
    calories: 306,
    protein: 24,
    fat: 22,
    sodium: 548,
    image: "https://whattocooktoday.com/wp-content/uploads/2011/12/DSC_2872-214x300.jpg"
    },
    {
    title: "Grill-Roasted Clam Linguine ",
    calories: 606,
    protein: 28,
    fat: 16,
    sodium: 766,
    image: "https://www.simplejoy.com/wp-content/uploads/2020/05/linguine-with-clams.jpg"
    },
    {
    title: "Penne with Broccoli Rabe, Tomatoes, and Parmesan ",
    calories: 666,
    protein: 34,
    fat: 31,
    sodium: 878,
    image: "https://bionaturae.jovialfoods.com/wp/wp-content/uploads/2021/08/DS-Penne-Garlicky-Broccoli-Rabe-11.jpg"
    },
    {
    title: "Corned Beef Hash with Fried Eggs ",
    calories: 497,
    protein: 18,
    fat: 26,
    sodium: 230,
    image: "https://www.tasteofhome.com/wp-content/uploads/2018/04/Corned-Beef-Hash-and-Eggs_exps5360_TH.CW1973175A05_03_3b_RMS.jpg"
    },
    {
    title: "Orange-Molasses Grilled Chicken ",
    calories: 384,
    protein: 54,
    fat: 6,
    sodium: 152,
    image: "nan"
    },
    {
    title: "Sauteed Chicken with Tomato-Saffron Vinaigrette on Fris�e ",
    calories: 448,
    protein: 55,
    fat: 20,
    sodium: 123,
    image: "https://usa.lkk.com/-/media/recipe-sauteed-diced-chicken.jpg?h=775&amp;la=en&amp;w=1000&amp;hash=2266912A545879980ADE7ED2F8E4B9D1C340D279"
    },
    {
    title: "Roasted Chicken, Ramps, and Potatoes ",
    calories: 462,
    protein: 26,
    fat: 27,
    sodium: 200,
    image: "https://www.eatlikenoone.com/wp-content/uploads/2010/04/Roasted-Chicken-with-Ramps.JPG"
    },
    {
    title: "Romaine- and Egg-Stuffed Tomatoes with Pancetta ",
    calories: 461,
    protein: 15,
    fat: 40,
    sodium: 538,
    image: "https://pinabresciani.com/wp-content/uploads/2020/06/DSC04908.jpg"
    },
    {
    title: "Pork Chops Coriander-Cumin Spice Rub ",
    calories: 484,
    protein: 42,
    fat: 33,
    sodium: 118,
    image: "https://i.pinimg.com/originals/ee/82/8d/ee828d1e3f0822033820fcc9b96ba90c.jpg"
    },
    {
    title: "Roast Beef, Basil, and Spicy Tomato Chutney Lavash Sandwiches ",
    calories: 857,
    protein: 29,
    fat: 7,
    sodium: 1405,
    image: "https://www.thetastybiteblog.com/wp-content/uploads/2016/02/roast-beef-basil-tomato-chutney-sandwich-4.jpg"
    },
    {
    title: "Mushroom Risotto ",
    calories: 717,
    protein: 18,
    fat: 23,
    sodium: 1650,
    image: "https://hips.hearstapps.com/del.h-cdn.co/assets/17/35/1504128527-delish-mushroom-risotto.jpg"
    },
    {
    title: "Mexican Poblano, Spinach, and Black Bean 'Lasagne' with Goat Cheese ",
    calories: 552,
    protein: 22,
    fat: 34,
    sodium: 761,
    image: "https://i.pinimg.com/originals/e1/c4/34/e1c434fe0d2bcb82b0ceee17ed13d18d.jpg"
    },
    {
    title: "Skillet Phyllo Pie With Butternut Squash, Kale, and Goat Cheese ",
    calories: 605,
    protein: 26,
    fat: 34,
    sodium: 763,
    image: "https://i.pinimg.com/originals/86/53/ca/8653ca62aecb08491007b3496861e460.jpg"
    },
    {
    title: "Veal and Roasted Vegetable Lasagne Anderson ",
    calories: 558,
    protein: 31,
    fat: 39,
    sodium: 691,
    image: "https://img.taste.com.au/yQ8EobJe/w720-h480-cfill-q80/taste/2016/11/veal-lasagne-with-mushrooms-provolone-cheese-and-ricotta-sauce-95063-1.jpeg"
    },
    {
    title: "Red Snapper � la Ni�oise ",
    calories: 328,
    protein: 35,
    fat: 13,
    sodium: 617,
    image: "https://cu-website-cms-prd.s3.amazonaws.com/david_adan_red_snapper_a_la_provencal_b8baf00d45.jpeg"
    },
    {
    title: "Ham Steak with Brown Sugar and Lime Glaze ",
    calories: 379,
    protein: 32,
    fat: 15,
    sodium: 3065,
    image: "https://dinnerthendessert.com/wp-content/uploads/2020/07/Brown-Sugar-Ham-Steak-2-688x984.jpg"
    },
    {
    title: "Grilled Moroccan Spiced Pork Tenderloin ",
    calories: 409,
    protein: 40,
    fat: 25,
    sodium: 616,
    image: "http://assets.epicurious.com/photos/54b8760a7cbba01c0db7e192/master/pass/51239020_pork-tenderloin_1x1.jpg"
    },
    {
    title: "Farfalle with Tuna, Tomatoes and Olives ",
    calories: 579,
    protein: 30,
    fat: 19,
    sodium: 682,
    image: "http://www.adrianalovesfood.com/wp-content/uploads/2017/11/img_0491.jpg"
    },
    {
    title: "Seafood Linguine ",
    calories: 601,
    protein: 27,
    fat: 22,
    sodium: 562,
    image: "https://i1.wp.com/scruffandsteph.com/wp-content/uploads/2020/01/Seafood-Linguine-3.jpg?ssl=1"
    },
    {
    title: "Jerk Chicken ",
    calories: 572,
    protein: 47,
    fat: 40,
    sodium: 1056,
    image: "https://www.cookingclassy.com/wp-content/uploads/2019/05/jerk-chicken-12.jpg"
    },
    {
    title: "Spinach and Scallop Soup ",
    calories: 497,
    protein: 26,
    fat: 38,
    sodium: 686,
    image: "https://www.recipemagik.com/wp-content/uploads/2020/10/Best-Spinach-Soup-Recipe-with-Crispy-Garlic-Croutons-2.jpg"
    },
    {
    title: "Shrimp and Crab Souffles with Red Bell Pepper and Tarragon ",
    calories: 460,
    protein: 33,
    fat: 27,
    sodium: 1407,
    image: "https://i.pinimg.com/736x/40/0b/02/400b0282cba8fba6caafb2f05d44d58f.jpg"
    },
    {
    title: "Juniper-Brined Roast Turkey with Chanterelle Mushroom Gravy ",
    calories: 711,
    protein: 99,
    fat: 31,
    sodium: 515,
    image: "https://i.pinimg.com/originals/57/5d/6f/575d6f971082511992bd7b002f213c40.jpg"
    },
    {
    title: "Moroccan-Style Mussels ",
    calories: 611,
    protein: 51,
    fat: 22,
    sodium: 1502,
    image: "https://i.pinimg.com/originals/1f/2c/f0/1f2cf0000de0598639837b325ab67485.png"
    },
    {
    title: "Open-Face Ham, Cheddar, and Apple Butter Sandwiches ",
    calories: 623,
    protein: 34,
    fat: 32,
    sodium: 1825,
    image: "https://d1bjorv296jxfn.cloudfront.net/s3fs-public/styles/recipes_header_image/public/recipe-images/sargento/Double-Cheddar-Apple-and-Ham-Sandwich.jpg?itok=ZoDhi854"
    },
    {
    title: "Chicken and Watercress Salad with Hoisin Vinaigrette ",
    calories: 439,
    protein: 28,
    fat: 30,
    sodium: 366,
    image: "https://img.taste.com.au/1esANoFm/w643-h428-cfill-q90/taste/2016/11/chicken-apple-and-watercress-salad-27919-1.jpeg"
    },
    {
    title: "Panko Scallops with Green Chile Chutney ",
    calories: 1161,
    protein: 192,
    fat: 13,
    sodium: 6267,
    image: "https://assets.epicurious.com/photos/5612e662928970611e0a816e/1:1/w_600%2Ch_600/102729.jpg"
    },
    {
    title: "Roasted Chicken with Carrots, Turnips, and Zucchini ",
    calories: 810,
    protein: 88,
    fat: 36,
    sodium: 1321,
    image: "http://www.thecomfortofcooking.com/wp-content/uploads/2016/12/Garlic_Chili_Roasted_Chicken_with_Potatoes_Carrots-3.jpg"
    },
    {
    title: "Turkey-Tomato Stew with Onions and Raisins ",
    calories: 345,
    protein: 23,
    fat: 17,
    sodium: 2012,
    image: "https://www.dianekochilas.com/wp-content/uploads/2020/05/Cod-with-Tomatoes-Onions-Raisins.jpg"
    },
    {
    title: "Grilled Marinated London Broil ",
    calories: 524,
    protein: 38,
    fat: 38,
    sodium: 372,
    image: "https://simplysohealthy.com/wp-content/uploads/2018/05/London-Broil-P3-1024x1024.jpg"
    },
    {
    title: "Chunky Clam and Bacon Dip with Pita Toasts ",
    calories: 479,
    protein: 30,
    fat: 35,
    sodium: 522,
    image: "https://www.thechunkychef.com/wp-content/uploads/2018/12/Creamy-Bacon-Cheese-Dip-hands-768x805.jpg"
    },
    {
    title: "Fish Masala ",
    calories: 519,
    protein: 46,
    fat: 33,
    sodium: 631,
    image: "https://1.bp.blogspot.com/-43JIJ5FbuCg/XXCPss5hYjI/AAAAAAAAEg8/D8458ClK8Vsu5nKD_L87aeYfBn-N49NlgCLcBGAs/s1600/DSC06082.JPG"
    },
    {
    title: "Butterflied Trout with Spicy Lettuce, Celery, and Herbs ",
    calories: 416,
    protein: 46,
    fat: 21,
    sodium: 707,
    image: "https://assets.epicurious.com/photos/55afe4666284773353bf4001/1:1/w_2560%2Cc_limit/56389767_butterflied-trout_1x1.jpg"
    },
    {
    title: "Farmers' Market Quinoa Salad ",
    calories: 425,
    protein: 15,
    fat: 27,
    sodium: 129,
    image: "https://www.onelovelylife.com/wp-content/uploads/2019/06/Farmers-Market-Quinoa-Salad9SM.jpg"
    },
    {
    title: "Scallops Proven�ale ",
    calories: 322,
    protein: 28,
    fat: 18,
    sodium: 893,
    image: "https://www.thoughtco.com/thmb/8fz12Oc9609SCohuoYwqUfKLiww=/2122x1415/filters:fill(auto,1)/486468409-56a5f6e05f9b58b7d0df4f4a.jpg"
    },
    {
    title: "Wild Rice and Toasted Almond Pilaf ",
    calories: 401,
    protein: 15,
    fat: 16,
    sodium: 571,
    image: "http://clubfoody.com/wp-content/uploads/2018/06/Wild-Rice-with-Cranberries-Toasted-Almonds-5_Fotor.jpg"
    },
    {
    title: "Chicken Skewers with Meyer Lemon Salsa ",
    calories: 306,
    protein: 20,
    fat: 22,
    sodium: 106,
    image: "https://simply-delicious-food.com/wp-content/uploads/2019/06/lemon-herb-chicken-skewers-4.jpg"
    },
    {
    title: "Spinach, Fennel, and Sausage Stuffing with Toasted Brioche ",
    calories: 429,
    protein: 21,
    fat: 26,
    sodium: 1225,
    image: "https://assets.bonappetit.com/photos/57afbde453e63daf11a4e698/master/pass/spinach-fennel-and-sausage-stuffing-with-toasted-brioche.jpg"
    },
    {
    title: "Seared Scallops with Lemon and Dill ",
    calories: 416,
    protein: 30,
    fat: 24,
    sodium: 949,
    image: "https://i.pinimg.com/originals/8e/05/de/8e05dee0e0982a35850f8601c9aa7204.jpg"
    },
    {
    title: "Potato, Sage, and Rosemary Pizza ",
    calories: 571,
    protein: 22,
    fat: 24,
    sodium: 1001,
    image: "https://silveroak.com/wp-content/uploads/2020/03/Recipe-Potato-Rosemary-Pizza.jpg"
    },
    {
    title: "Redeye-Glazed Pork Tenderloin with Black-Eyed Peas ",
    calories: 450,
    protein: 40,
    fat: 21,
    sodium: 1266,
    image: "https://i.pinimg.com/originals/d1/2f/4b/d12f4bd84e5126f2286ebc35b5e98d9c.png"
    },
    {
    title: "Pasta with Caramelized Onions, Cabbage, and Smoked Ham ",
    calories: 716,
    protein: 32,
    fat: 24,
    sodium: 970,
    image: "https://lindseyeatsla.com/wp-content/uploads/2022/02/Lindsey_Eats_Caramelized_Cabbage_Leek_Pasta-819x1024.jpg"
    },
    {
    title: "Pasta with Sugar Snap Peas, Asparagus and Parmesan ",
    calories: 402,
    protein: 17,
    fat: 15,
    sodium: 203,
    image: "http://redirect.bigoven.com/pics/pasta-with-sugar-snap-peas-asparagu.jpg"
    },
    {
    title: "Thai Fish Curry ",
    calories: 518,
    protein: 40,
    fat: 36,
    sodium: 643,
    image: "https://www.feastingathome.com/wp-content/uploads/2021/05/Thai-Fish-Curry-22.jpg"
    },
    {
    title: "Vegetable Stir-Fry with Garlic-Miso Sauce ",
    calories: 310,
    protein: 15,
    fat: 13,
    sodium: 264,
    image: "https://i.pinimg.com/originals/c7/6d/d8/c76dd8e33c1e6052acb22cd04e07a61b.png"
    },
    {
    title: "Maple-Barbecued Pork Burgers ",
    calories: 678,
    protein: 23,
    fat: 31,
    sodium: 2039,
    image: "https://img.taste.com.au/GBZ_lJSj/w1200-h630-cfill/taste/2017/02/smashed-pork-burgers-with-apple-slaw-digiapi_1980x1320-121407-1.jpg"
    },
    {
    title: "Grilled Flank Steak with Rosemary ",
    calories: 510,
    protein: 38,
    fat: 32,
    sodium: 1261,
    image: "https://www.recipegirl.com/wp-content/uploads/2008/09/Flank-Steak-1.jpg"
    },
    {
    title: "Gnocchetti Sardi with Wild Boar ",
    calories: 452,
    protein: 22,
    fat: 30,
    sodium: 400,
    image: "https://www.barilla.com/-/media/images/en_us/blog-images/gnocchetti_sardi_sauasage.jpg"
    },
    {
    title: "Asian Bow-Tie Pasta Salad with Shrimp and Vegetables ",
    calories: 487,
    protein: 19,
    fat: 22,
    sodium: 858,
    image: "https://shesgotflavor.com/wp-content/uploads/2013/05/Asian-Shrimp-Pasta-Salad-Feature.jpg"
    },
    {
    title: "Turkey Cutlets with Cilantro-Almond Sauce ",
    calories: 414,
    protein: 34,
    fat: 29,
    sodium: 523,
    image: "https://res.cloudinary.com/hksqkdlah/image/upload/ar_1:1,c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_344/24947_sfs-sauteed-turkey-cutlets-with-honey-mustard-and-tarragon-sauce-023"
    },
    {
    title: "Shrimp, J�cama, and Apricot Salad ",
    calories: 582,
    protein: 17,
    fat: 9,
    sodium: 15,
    image: "https://assets.epicurious.com/photos/560ea0e3f3a00aeb2f1d6abb/1:1/w_600%2Ch_600/106577.jpg"
    },
    {
    title: "Blade Steaks with Rosemary White-Bean Pur�e ",
    calories: 711,
    protein: 48,
    fat: 37,
    sodium: 231,
    image: "https://www.foodfirefriends.com/wp-content/uploads/2020/05/raw-top-blade-steak-750x417.jpg"
    },
    {
    title: "Potato and Macaroni Gratin ",
    calories: 419,
    protein: 16,
    fat: 18,
    sodium: 47,
    image: "https://champsdiet.com/wp-content/uploads/2020/10/potato-and-macaroni-gratin.jpg"
    },
    {
    title: "Grilled Sea Bass with Oregano and Tomatoes ",
    calories: 321,
    protein: 39,
    fat: 15,
    sodium: 359,
    image: "https://realfood.tesco.com/media/images/1400x919-Grilled-sea-bass-6f6fe350-0a94-4132-94e7-c164df62e20d-0-1400x919.jpg"
    },
    {
    title: "Roast Chicken with White Bean Stew and Pancetta ",
    calories: 453,
    protein: 24,
    fat: 32,
    sodium: 396,
    image: "https://happyathome681.files.wordpress.com/2022/01/rustic-sausage-chicken-white-bean-stew.png"
    },
    {
    title: "Grilled Squid on Spinach, Red Pepper, and Mango Salad ",
    calories: 397,
    protein: 30,
    fat: 19,
    sodium: 165,
    image: "https://www.anotherfoodblogger.com/wp-content/uploads/2021/01/grilled-squid-salad-3.png"
    },
    {
    title: "Crab Cakes with Avocado Salad ",
    calories: 462,
    protein: 19,
    fat: 25,
    sodium: 642,
    image: "https://www.savoryexperiments.com/wp-content/uploads/2021/07/Crab-Avocado-Salad-FB.jpg"
    },
    {
    title: "Potato, Leek, Gruy�re and Oyster Mushroom Gratin ",
    calories: 402,
    protein: 16,
    fat: 21,
    sodium: 479,
    image: "https://recipeland.com/images/r/20996/e4573b5bb9cf0b54ff09_1024.jpg"
    },
    {
    title: "Clam and Cod Chowder ",
    calories: 560,
    protein: 59,
    fat: 21,
    sodium: 1637,
    image: "https://blog.vermontcountrystore.com/wp-content/uploads/2018/01/clam-and-cod-chowder.jpg"
    },
    {
    title: "Soy-Basted Chicken Kebabs With Sesame-Citrus Sprinkle ",
    calories: 477,
    protein: 26,
    fat: 29,
    sodium: 1308,
    image: "https://i.pinimg.com/originals/c9/54/e1/c954e1166d412370ad7c006668507d70.jpg"
    },
    {
    title: "Spicy Tamarind Skirt Steak ",
    calories: 452,
    protein: 35,
    fat: 30,
    sodium: 1547,
    image: "http://www.ouichefnetwork.com/images/old/6a01156ed76240970c019b04c31034970d-pi.png"
    },
    {
    title: "Southwestern Lime Chicken with Ancho Chili Sauce ",
    calories: 477,
    protein: 61,
    fat: 22,
    sodium: 949,
    image: "http://www.ahintofhoney.com/wp-content/uploads/blogger/-cx_5n3hq5V0/ThGiBAqFBsI/AAAAAAAAFVY/WJKgQkPU-nY/s1600/IMG_2676.JPG"
    },
    {
    title: "Beef Paprikas ",
    calories: 520,
    protein: 32,
    fat: 38,
    sodium: 482,
    image: "https://numstheword.com/wp-content/uploads/2021/03/Instant-Pot-Beef-Paprika-06-1366x2048.jpg"
    },
    {
    title: "Potato Stew ",
    calories: 690,
    protein: 20,
    fat: 32,
    sodium: 1672,
    image: "https://ladyandtheblog.com/wp-content/uploads/2018/10/SweetPot11.jpg"
    },
    {
    title: "Thai-Inspired Shrimp Stir-Fry ",
    calories: 314,
    protein: 19,
    fat: 15,
    sodium: 716,
    image: "https://www.bitesofberi.com/wp-content/uploads/2021/08/teriyaki-shrimp-stir-fry-1.jpg"
    },
    {
    title: "Grilled Cheddar Cheese and Ham Sandwiches ",
    calories: 536,
    protein: 26,
    fat: 33,
    sodium: 961,
    image: "https://thesaltypot.com/wp-content/uploads/2019/02/Grilled-ham-and-cheese-sandwich13-735x490.jpg"
    },
    {
    title: "Taglierini with Caramelized Scallops and Rosemary Beurre Blanc ",
    calories: 553,
    protein: 22,
    fat: 29,
    sodium: 459,
    image: "https://resizer.otstatic.com/v2/photos/wide-mlarge/25702928.jpg"
    },
    {
    title: "Herb and Cheese Pie ",
    calories: 386,
    protein: 18,
    fat: 24,
    sodium: 797,
    image: "https://i.pinimg.com/originals/13/b4/9c/13b49cc2d2bd32a4d7c2021aa5d07132.jpg"
    },
    {
    title: "Grilled Monterey Sardines with Lemon and Herbs ",
    calories: 497,
    protein: 69,
    fat: 22,
    sodium: 777,
    image: "https://assets.epicurious.com/photos/54b318d7460b4423363eae88/16:9/w_1280,c_limit/360272_grilled-sardines_1x1.jpg"
    },
    {
    title: "Roast Cod with Potatoes, Onions, and Olives ",
    calories: 679,
    protein: 55,
    fat: 36,
    sodium: 333,
    image: "https://i.pinimg.com/originals/f0/cc/f2/f0ccf2ce9971322615ea66fb35ba8640.png"
    },
    {
    title: "Linguine alla Carbonara ",
    calories: 540,
    protein: 23,
    fat: 26,
    sodium: 563,
    image: "https://cookingwithcurls.com/wp-content/uploads/2015/06/Linguine-alla-Carbonara-Incredibly-delicious-and-super-simple-to-make-cookingwithcurls.com_.jpg"
    },
    {
    title: "Turkish-Style Lamb Burgers with Walnut Sauce ",
    calories: 554,
    protein: 26,
    fat: 38,
    sodium: 733,
    image: "https://i.pinimg.com/originals/6a/f0/41/6af041cf51d4549fe473dd5033124503.jpg"
    },
    {
    title: "Roasted Halibut with Walnut Crust ",
    calories: 354,
    protein: 43,
    fat: 17,
    sodium: 164,
    image: "https://i.pinimg.com/originals/20/23/81/20238152d49b8de0df8e7cf6059eedfe.jpg"
    },
    {
    title: "Baked Stuffed Mushrooms with Crab ",
    calories: 419,
    protein: 19,
    fat: 35,
    sodium: 831,
    image: "https://keviniscooking.com/wp-content/uploads/2019/12/Crab-Stuffed-Mushrooms-3.jpg"
    },
    {
    title: "Beer-Can Cabbage Sandwiches ",
    calories: 793,
    protein: 24,
    fat: 35,
    sodium: 1959,
    image: "http://assets.epicurious.com/photos/576998703480633c7feca0d8/master/pass/beer-can-cabbage-hero-06132016.jpg"
    },
    {
    title: "Simple Chicken Curry ",
    calories: 522,
    protein: 39,
    fat: 27,
    sodium: 1112,
    image: "https://i0.wp.com/scruffandsteph.com/wp-content/uploads/2019/03/Cheap-Chicken-Curry-10.jpg?fit=4000%2C6000&amp;ssl=1"
    },
    {
    title: "Arizona Cheese Strata ",
    calories: 536,
    protein: 31,
    fat: 28,
    sodium: 1800,
    image: "https://cocinarrecetasdepostres.net/it/wp-content/uploads/2020/06/Crispy-Arizona-Cheese.jpg"
    },
    {
    title: "Shakshuka ",
    calories: 412,
    protein: 21,
    fat: 24,
    sodium: 2811,
    image: "https://www.licious.in/blog/wp-content/uploads/2020/12/Shakshuka-min.jpg"
    },
    {
    title: "Buttery Barley Risotto with Parmesan Cheese ",
    calories: 405,
    protein: 17,
    fat: 16,
    sodium: 187,
    image: "https://i.pinimg.com/originals/56/ac/75/56ac75fc506b328d0679ffd4f566207e.jpg"
    },
    {
    title: "Shrimp Creole Risotto ",
    calories: 544,
    protein: 16,
    fat: 24,
    sodium: 2579,
    image: "https://easydinnerideas.com/wp-content/uploads/2021/03/Shrimp-Creole-1.jpeg"
    },
    {
    title: "Salmon and Dill Chowder ",
    calories: 559,
    protein: 33,
    fat: 34,
    sodium: 920,
    image: "https://www.thefoodinmybeard.com/wp-content/uploads/2014/09/salmonchowderhero.jpg"
    },
    {
    title: "Artichoke Heart, Fennel, and Parmesan Salad ",
    calories: 356,
    protein: 18,
    fat: 21,
    sodium: 637,
    image: "https://asimplepalate.com/wp-content/uploads/2021/04/artichoke-salad-1-1024x1536.jpg"
    },
    {
    title: "Squid and Fennel Pasta with Lemon and Herbs ",
    calories: 602,
    protein: 30,
    fat: 20,
    sodium: 101,
    image: "https://assets.epicurious.com/photos/5bbe60db9849bc7a1d12f933/1:1/w_2560%2Cc_limit/56389530_squid-fennel-pasta_101018.jpg"
    },
    {
    title: "Breaded Chicken Cutlets with Chunky Vegetable Sauce ",
    calories: 531,
    protein: 66,
    fat: 14,
    sodium: 487,
    image: "https://i1.wp.com/www.eazypeazymealz.com/wp-content/uploads/2020/12/breaded-chicken-cutlets-12.jpg?fit=800%2C1200&amp;ssl=1"
    },
    {
    title: "Cheesy Sausage and Sage Stuffing ",
    calories: 549,
    protein: 23,
    fat: 36,
    sodium: 865,
    image: "https://i.pinimg.com/originals/9d/52/9f/9d529fa849daa298aec9b0bae05740bd.jpg"
    },
    {
    title: "Veal Scallops with Mushrooms and Rosemary ",
    calories: 323,
    protein: 24,
    fat: 20,
    sodium: 680,
    image: "https://i.pinimg.com/736x/60/42/9d/60429d37d92e59a319bac30ef70b679d--marsala-sauce-cooking-sauces.jpg"
    },
    {
    title: "Sauteed Skirt Steak ",
    calories: 350,
    protein: 34,
    fat: 23,
    sodium: 142,
    image: "http://img.sndimg.com/food/image/upload/w_614,h_461,c_fit/v1/img/recipes/91/72/8/picmwI1ZO.jpg"
    },
    {
    title: "Handmade Orecchiette With Mortadella and Pea Sauce ",
    calories: 612,
    protein: 20,
    fat: 39,
    sodium: 582,
    image: "https://assets.epicurious.com/photos/5695509ab52d5eff292b79d3/1:1/w_2560%2Cc_limit/prep_shot_3492%2520copy.jpg"
    },
    {
    title: "Black-Bean Tostados with Roasted Tomatillo Sauce ",
    calories: 457,
    protein: 16,
    fat: 28,
    sodium: 1118,
    image: "https://i.ytimg.com/vi/hCFekRs9Wb8/maxresdefault.jpg"
    },
    {
    title: "Picadillo Arepa Pie ",
    calories: 444,
    protein: 31,
    fat: 19,
    sodium: 832,
    image: "https://assets.epicurious.com/photos/54b32b35460b4423363f0178/1:1/w_600%2Ch_600/357978_picadillo-arepa-pie_1x1.jpg"
    },
    {
    title: "Roast Turkey with Sage and Sherried Cider Giblet Gravy ",
    calories: 325,
    protein: 37,
    fat: 17,
    sodium: 517,
    image: "http://lisaffair.com/web/wp-content/uploads/2020/11/Roast-Turkey-with-Sage-Stuffing-and-Giblet-Gravy_Landscape.jpg"
    },
    {
    title: "Baked Mustard-Crusted Salmon With Asparagus and Tarragon ",
    calories: 486,
    protein: 38,
    fat: 34,
    sodium: 576,
    image: "https://images.eatthismuch.com/site_media/img/412912_tabitharwheeler_cfc5013c-ac72-417d-a6b4-2ccf90c3cbc5.jpg"
    },
    {
    title: "Apple and Sausage Stuffing ",
    calories: 540,
    protein: 15,
    fat: 38,
    sodium: 714,
    image: "http://www.thecomfortofcooking.com/wp-content/uploads/2014/09/BestEverSausageSageAppleStuffing-3.jpg"
    },
    {
    title: "Turkey Shawarma with Tomato Relish and Tahini Sauce ",
    calories: 488,
    protein: 36,
    fat: 25,
    sodium: 925,
    image: "https://assets.bonappetit.com/photos/57b0660d1b33404414976244/master/pass/turkey-shawarma-with-tomato-relish-and-tahini-sauce.jpg"
    },
    {
    title: "Tuna Salad on Olive Bread with Arugula ",
    calories: 403,
    protein: 19,
    fat: 25,
    sodium: 703,
    image: "https://www.cookingclassy.com/wp-content/uploads/2020/03/tuna-salad-32-768x1152.jpg"
    },
    {
    title: "Angel Hair Pasta with Peas, Prosciutto, and Lemon ",
    calories: 726,
    protein: 39,
    fat: 17,
    sodium: 1750,
    image: "https://2.bp.blogspot.com/-_GdSdEqDK_s/UeRLnfmCUWI/AAAAAAAADLA/wiFj1VZxouY/s1600/DSC_0816-001.JPG"
    },
    {
    title: "Grilled Pork Chops with Sour Cherry Sauce ",
    calories: 423,
    protein: 43,
    fat: 19,
    sodium: 157,
    image: "https://i.pinimg.com/originals/5a/e9/df/5ae9df6840d05e5858af7b39f891f3c4.jpg"
    },
    {
    title: "Antipasto Pasta Salad ",
    calories: 434,
    protein: 19,
    fat: 37,
    sodium: 1232,
    image: "https://hostthetoast.com/wp-content/uploads/2018/08/antipasto-pasta-salad-1.jpg"
    },
    {
    title: "Farmers' Market Salad with Spiced Goat Cheese Rounds ",
    calories: 567,
    protein: 22,
    fat: 38,
    sodium: 645,
    image: "http://d2814mmsvlryp1.cloudfront.net/wp-content/uploads/2016/11/Fall-Farmers-Market-Salad-with-Fried-Goat-Cheese.jpg"
    },
    {
    title: "Quick Shrimp Bisque ",
    calories: 576,
    protein: 44,
    fat: 31,
    sodium: 2528,
    image: "https://dfbkuy5licyr9.cloudfront.net/wp-content/uploads/2019/03/Creamy-Shrimp-Bisque.jpg?x34137"
    },
    {
    title: "Penne with Swiss Chard ",
    calories: 589,
    protein: 23,
    fat: 21,
    sodium: 938,
    image: "https://dreamfields-prod.objects.frb.io/images/recipes/_crop910x420/penne-turkey-swiss-chard.jpg"
    },
    {
    title: "Broiled Bluefish with Tomato and Herbs ",
    calories: 431,
    protein: 46,
    fat: 25,
    sodium: 543,
    image: "https://i.pinimg.com/originals/de/d9/14/ded914f9e4c0aad8447cb3811c81dc3d.jpg"
    },
    {
    title: "Chicken Chili Verde ",
    calories: 478,
    protein: 25,
    fat: 29,
    sodium: 176,
    image: "https://poshjournal.com/wp-content/uploads/2016/06/chicken-chile-verde-9.jpg"
    },
    {
    title: "Ann Pachett's Spicy Seafood Chowder ",
    calories: 396,
    protein: 47,
    fat: 13,
    sodium: 2133,
    image: "https://i.pinimg.com/736x/7d/e1/b5/7de1b5045e6415006d60d6607ce7d074.jpg"
    },
    {
    title: "Crispy Pork Cutlets with Capers, Lemon, Arugula, and Chopped Eggs ",
    calories: 976,
    protein: 97,
    fat: 37,
    sodium: 1405,
    image: "https://assets.epicurious.com/photos/560d9af57b55306961bf79e9/master/pass/241341_hires.jpg"
    },
    {
    title: "Quail with Pomegranate Jus ",
    calories: 560,
    protein: 44,
    fat: 38,
    sodium: 381,
    image: "https://assets.epicurious.com/photos/5fd235199d28a0d95e5694ca/1:1/w_2560%2Cc_limit/quail-with-pomegranate-jus-recipe-121020.jpg"
    },
    {
    title: "Sauteed Cod on Snow Peas and Cabbage with Miso Sesame Vinaigrette ",
    calories: 425,
    protein: 30,
    fat: 28,
    sodium: 457,
    image: "https://bigoven-res.cloudinary.com/image/upload/t_recipe-1280/sauteed-snow-peas.jpg"
    },
    {
    title: "Thai-Style Broiled Chicken Wings with Hot-and-Sour Sauce ",
    calories: 552,
    protein: 40,
    fat: 33,
    sodium: 790,
    image: "https://cravingtasty.com/wp-content/uploads/2018/02/Broiled-Crispy-Chicken-Wings-768x1152.jpg"
    },
    {
    title: "Sausage and Pepper Bake ",
    calories: 307,
    protein: 26,
    fat: 17,
    sodium: 867,
    image: "https://www.eazypeazymealz.com/wp-content/uploads/2016/06/Potato-and-sausage-bake-1.jpg"
    },
    {
    title: "Bibimbap at Home ",
    calories: 1000,
    protein: 31,
    fat: 24,
    sodium: 700,
    image: "https://cdn.loveandlemons.com/wp-content/uploads/2020/03/bibimbap.jpg"
    },
    {
    title: "Tuna Noodle Casserole ",
    calories: 689,
    protein: 36,
    fat: 35,
    sodium: 839,
    image: "https://www.kyleecooks.com/wp-content/uploads/2018/01/Classic-Tuna-Noodle-Casserole-7a.jpg"
    },
    {
    title: "Chicken, Asparagus, and Broccoli Stir-Fry ",
    calories: 367,
    protein: 33,
    fat: 21,
    sodium: 426,
    image: "https://www.lecremedelacrumb.com/wp-content/uploads/2019/08/chicken-asparagus-stir-fry-2.jpg"
    },
    {
    title: "Hanoi Beef Noodle Soup ",
    calories: 780,
    protein: 80,
    fat: 18,
    sodium: 2446,
    image: "http://www.ryansrecipes.com/wp-content/uploads/2014/02/vietnamese-beef-pho-soup-recipe-940x700.jpg"
    },
    {
    title: "Turkey Nachos ",
    calories: 482,
    protein: 25,
    fat: 29,
    sodium: 457,
    image: "http://jeanetteshealthyliving.com/wp-content/uploads/2014/03/Turkey-Taco-Nachos-Feature.jpg"
    },
    {
    title: "Monte Cristo Chicken ",
    calories: 310,
    protein: 39,
    fat: 13,
    sodium: 101,
    image: "https://www.plainchicken.com/wp-content/uploads/attachments/IMG_1748.JPG"
    },
    {
    title: "Bell Pepper, Red Onion, and Goat Cheese Pizza ",
    calories: 431,
    protein: 15,
    fat: 24,
    sodium: 610,
    image: "https://i.pinimg.com/originals/63/1c/e7/631ce76dd09e356c62653253dd7034c5.png"
    },
    {
    title: "Curried Meatballs ",
    calories: 470,
    protein: 24,
    fat: 35,
    sodium: 1385,
    image: "https://assets.bonappetit.com/photos/57acd190f1c801a1038bc7c7/1:1/w_2560%2Cc_limit/curried-meatballs.jpg"
    },
    {
    title: "Buttery Steamed Mussels with Sake and Chiles ",
    calories: 498,
    protein: 37,
    fat: 21,
    sodium: 983,
    image: "https://assets.epicurious.com/photos/560d7878f9a841923089d699/1:1/w_2560%2Cc_limit/242485_hires.jpg"
    },
    {
    title: "Santa Fe Pizza ",
    calories: 389,
    protein: 22,
    fat: 20,
    sodium: 741,
    image: "https://www.gopresto.com/i/1531486596236/n/uploads/Santa_Fe_Pizza.jpg"
    },
    {
    title: "Turkey Giblet Stock ",
    calories: 357,
    protein: 51,
    fat: 14,
    sodium: 342,
    image: "https://3.bp.blogspot.com/-qT692s1kur0/TricXwhcB4I/AAAAAAAABhc/vQWWLtI9DR0/s1600/DSC_1293-1.JPG"
    },
    {
    title: "Chorizo and Potato Egg Custard with New Mexican Chile Sauce ",
    calories: 472,
    protein: 21,
    fat: 35,
    sodium: 1239,
    image: "https://i.pinimg.com/originals/3b/db/01/3bdb015e4914feeeb3fcfffc4ecbb435.jpg"
    },
    {
    title: "Grilled Beef Steak Verciano ",
    calories: 393,
    protein: 35,
    fat: 24,
    sodium: 570,
    image: "https://izzycooking.com/wp-content/uploads/2022/05/Grilled-Beef-Steak-thumbnail.jpg"
    },
    {
    title: "Risotto Milanese-Style (Risotta alla Milanese) ",
    calories: 619,
    protein: 17,
    fat: 26,
    sodium: 930,
    image: "https://jrf.com.au/wp-content/uploads/2020/05/milano-how-to-risotto-1920x1080.jpg"
    },
    {
    title: "Beef Pinwheels with Arugula Salad ",
    calories: 546,
    protein: 53,
    fat: 35,
    sodium: 1127,
    image: "https://theseamanmom.com/wp-content/uploads/2018/01/IMG_4310-1000x1325.jpg"
    },
    {
    title: "Fried Fish Marinated in Garlic, Vinegar, Oregano, and Cumin ",
    calories: 315,
    protein: 22,
    fat: 22,
    sodium: 79,
    image: "https://i.pinimg.com/originals/f8/8f/98/f88f98bc9f80faa125af472f0cef8d95.jpg"
    },
    {
    title: "Parmesan-Stuffed Dates Wrapped in Bacon ",
    calories: 469,
    protein: 18,
    fat: 21,
    sodium: 713,
    image: "https://pinchofyum.com/wp-content/uploads/Bacon-Wrapped-Dates-1.jpg"
    },
    {
    title: "Braised Lentils ",
    calories: 408,
    protein: 21,
    fat: 14,
    sodium: 372,
    image: "https://i1.wp.com/urbancottagelife.com/wp-content/uploads/2014/03/img_2607.jpg"
    },
    {
    title: "Mashed Potato and Cauliflower Gratin ",
    calories: 369,
    protein: 15,
    fat: 21,
    sodium: 637,
    image: "https://4.bp.blogspot.com/-GQ8-EmQui4M/WgcWXR26QSI/AAAAAAAABQI/9G9VgW4l2LwH8iqHNhl_xKCgicPFxEU1gCLcBGAs/s1600/cauliflower-mashed-potatoes-vertical-d-1800.jpg"
    },
    {
    title: "Grilled Shrimp with Almonds ",
    calories: 309,
    protein: 24,
    fat: 21,
    sodium: 861,
    image: "https://fitfoodiefinds.com/wp-content/uploads/2021/07/grilled-shrimp-9-scaled.jpg"
    },
    {
    title: "Sweet-Onion Quesadillas ",
    calories: 520,
    protein: 20,
    fat: 21,
    sodium: 1002,
    image: "https://wanderzestblog.com/wp-content/uploads/2019/07/quesadillas_small-44.jpg"
    },
    {
    title: "Halibut in Spiced Court Bouillon ",
    calories: 308,
    protein: 33,
    fat: 9,
    sodium: 1346,
    image: "https://i.pinimg.com/736x/a5/90/75/a59075d033ceaf0f2d500c1ca8422281.jpg"
    },
    {
    title: "Grilled Skirt Steak ",
    calories: 447,
    protein: 46,
    fat: 29,
    sodium: 1579,
    image: "https://i0.wp.com/angsarap.net/wp-content/uploads/2014/03/grilled-skirt-steak.jpg"
    },
    {
    title: "Patatine e Carciofi Arrost roasted Potatoes and Artichokes ",
    calories: 1111,
    protein: 64,
    fat: 17,
    sodium: 1747,
    image: "https://www.mypaneburroemarmellata.com/wp-content/uploads/2014/12/DSC_1038-pesce-arrosto-e-patatine-1028x1536.jpg"
    },
    {
    title: "Mediterranean Salad with Chickpeas and Arugula ",
    calories: 479,
    protein: 22,
    fat: 29,
    sodium: 621,
    image: "https://www.gimmesomeoven.com/wp-content/uploads/2019/04/Everyday-Mediterranean-Greek-Salad-Recipe-2.jpg"
    },
    {
    title: "Southwest-Style Salisbury Steaks ",
    calories: 377,
    protein: 42,
    fat: 20,
    sodium: 846,
    image: "https://2.bp.blogspot.com/-fcfJhuNZ5yw/WW4_n5ZPw1I/AAAAAAAAV2Q/yUaRnv511TYTxsHbTPCYe22cleXKyH7GgCLcBGAs/s1600/simple-salisbury-steak-2.jpg"
    },
    {
    title: "Acorn Squash Velout� with Ginger and Mustard Seeds ",
    calories: 923,
    protein: 21,
    fat: 12,
    sodium: 119,
    image: "https://cmx.weightwatchers.com/assets-proxy/weight-watchers/image/upload/q_auto/b6hpbqxteyfhh9fvbhgb.jpg?auto=webp"
    },
    {
    title: "Cardamom and Lemon Rice Pudding ",
    calories: 821,
    protein: 16,
    fat: 23,
    sodium: 124,
    image: "https://i0.wp.com/www.sippitysup.com/wp-content/uploads/2017/02/RicePuddingTartWEB.jpg?fit=1474%2C2211&amp;ssl=1"
    },
    {
    title: "Croques-Monsieur ",
    calories: 443,
    protein: 20,
    fat: 27,
    sodium: 847,
    image: "https://www.croquemonsieur.com.au/images/2021/08/01/headerimg_0806.jpg"
    },
    {
    title: "Moroccan Chicken Brochettes ",
    calories: 382,
    protein: 20,
    fat: 32,
    sodium: 114,
    image: "https://www.thespruceeats.com/thmb/XNXLgDwFKBdD48vTiqEQ8k_516M=/2278x0/filters:no_upscale():max_bytes(150000):strip_icc()/moroccan-chicken-or-turkey-kebabs-brochettes-2394642-cook-brochettes-step-04-5c929545c9e77c00018fb610.jpg"
    },
    {
    title: "Grilled Fish Tostadas with Pineapple-J�cama Salsa ",
    calories: 371,
    protein: 26,
    fat: 17,
    sodium: 149,
    image: "http://www.notjustbaked.com/wp-content/uploads/2016/06/Grilled-Fish-Tostadas-fish-main.jpg"
    },
    {
    title: "Tuna Pasta Salad ",
    calories: 498,
    protein: 20,
    fat: 25,
    sodium: 394,
    image: "https://www.saltandlavender.com/wp-content/uploads/2019/05/healthy-tuna-pasta-salad-3.jpg"
    },
    {
    title: "Red Wine Mushroom Rago�t ",
    calories: 476,
    protein: 45,
    fat: 18,
    sodium: 199,
    image: "https://www.kansascitysteaks.com/images/www/Filet_Mignon_On_Plat-99b57de2d99f7f4fae90a334232f2e37.jpg"
    },
    {
    title: "French Bread with Kalamata Olives and Thyme ",
    calories: 1173,
    protein: 33,
    fat: 23,
    sodium: 2725,
    image: "https://abetrom.gr/wp-content/uploads/2021/01/French-Bread-with-Kalamata-Olives-and-Thyme-Abetrom-Recipes-1024x538.jpg"
    },
    {
    title: "Moroccan Spiced Beef ",
    calories: 535,
    protein: 46,
    fat: 37,
    sodium: 263,
    image: "https://i.pinimg.com/originals/38/ab/ad/38abaddc2e4edcb6cce8c37c2271764d.png"
    },
    {
    title: "Tuna Tonnato with Eggplant Salad ",
    calories: 478,
    protein: 32,
    fat: 27,
    sodium: 768,
    image: "http://static1.squarespace.com/static/5e625b6ea789c864d51db81e/5ef0ce8871f40b58b9150499/60df0492cc8302417c72a244/1649879357465/Grilled+Tuna+Tonnato+Leggero.jpg?format=1500w"
    },
    {
    title: "Potato Gnocchi with Chicken Livers and Pancetta ",
    calories: 452,
    protein: 19,
    fat: 23,
    sodium: 486,
    image: "https://food.cld.sndimg.com/image/upload/w_2400/v1/fn_core_images/food/fullset/2020/12/21/0/FN_Sweet-Potato-Gnocchi-H2_s4x3.jpg"
    },
    {
    title: "Roast Pork with Apricot and Shallot Stuffing ",
    calories: 422,
    protein: 42,
    fat: 22,
    sodium: 309,
    image: "https://irepo.primecp.com/2016/03/266509/recipe-12202_ExtraLarge800_ID-1497145.jpg?v=1497145"
    },
    {
    title: "Pasta, Sausage, and Bean Rago�t ",
    calories: 566,
    protein: 30,
    fat: 37,
    sodium: 844,
    image: "https://www.crumbblog.com/wp-content/uploads/2020/04/sausagebeanpasta_verticalinthepan.jpg"
    },
    {
    title: "Artichoke and Feta Cheese Pizza ",
    calories: 714,
    protein: 29,
    fat: 21,
    sodium: 1663,
    image: "https://www.halfbakedharvest.com/wp-content/uploads/2021/04/Spinach-and-Artichoke-Pizza-with-Cheesy-Bread-Crust-1-700x1050.jpg"
    },
    {
    title: "Spaghetti with Tuna, Tomatoes, Capers, and Basil ",
    calories: 659,
    protein: 31,
    fat: 25,
    sodium: 480,
    image: "https://sanremo.imgix.net/2020/07/San-Remo_Pro-Spaghetti-w-Tuna-Capers-Lemon_10394-1500x1000.jpg?auto=format&amp;w=1800"
    },
    {
    title: "Mustard-Citrus Grilled Steak ",
    calories: 556,
    protein: 45,
    fat: 39,
    sodium: 1243,
    image: "https://hilahcooking.com/wp-content/uploads/2016/05/grilled-ribeye.jpg"
    },
    {
    title: "Gemelli with Garlic, Herbs, and Bocconcini Mozzarella ",
    calories: 727,
    protein: 29,
    fat: 28,
    sodium: 374,
    image: "https://food-images.files.bbci.co.uk/food/recipes/gemelli_with_anchovies_80715_16x9.jpg"
    },
    {
    title: "Fried Rice with Bacon, Scallions, and Water Chestnuts ",
    calories: 620,
    protein: 15,
    fat: 18,
    sodium: 1737,
    image: "https://chefsavvy.com/wp-content/uploads/bacon-fried-rice.jpg"
    },
    {
    title: "Shrimp and Potatoes with Garlic and Saffron ",
    calories: 437,
    protein: 36,
    fat: 15,
    sodium: 1497,
    image: "https://i.pinimg.com/originals/38/86/35/3886354bbc6cad9fed3380c724870507.jpg"
    },
    {
    title: "Turkey Hash ",
    calories: 337,
    protein: 30,
    fat: 15,
    sodium: 331,
    image: "https://www.chiselandfork.com/wp-content/uploads/2018/09/turkey-hash-1.jpg"
    },
    {
    title: "Meatball and Vegetable Soup ",
    calories: 658,
    protein: 36,
    fat: 28,
    sodium: 2340,
    image: "https://i0.wp.com/lifewiththecrustcutoff.com/wp-content/uploads/2018/10/Meatball-Vegetable-Soup-5.jpg?fit=1024%2C1536&amp;ssl=1"
    },
    {
    title: "Country Sausage and Sage Dressing ",
    calories: 323,
    protein: 16,
    fat: 23,
    sodium: 656,
    image: "http://assets.epicurious.com/photos/561026a6f3a00aeb2f1d7b56/1:1/w_600%2Ch_600/104110.jpg"
    },
    {
    title: "Pasta with Arugula and Prosciutto ",
    calories: 666,
    protein: 29,
    fat: 21,
    sodium: 948,
    image: "https://1.bp.blogspot.com/-_vyjAt7V4PE/T6Wxr1TLDNI/AAAAAAAABfA/_AxBawkF1w0/s1600/arugula+pasta.JPG"
    },
    {
    title: "Linguine with Shrimp, Asparagus, and Basil ",
    calories: 750,
    protein: 25,
    fat: 29,
    sodium: 252,
    image: "https://i1.wp.com/chezlerevefrancais.com/wp-content/uploads/2017/05/Tagliatelle-with-Asparagus-and-Prawns-5.jpg"
    },
    {
    title: "Roast Fillet of Beef with Cornichon Tarragon Sauce ",
    calories: 386,
    protein: 17,
    fat: 30,
    sodium: 253,
    image: "https://i.pinimg.com/originals/9e/5b/71/9e5b71368e848e37b719a657edca7fba.jpg"
    },
    {
    title: "Hot Chicken Salad ",
    calories: 356,
    protein: 16,
    fat: 30,
    sodium: 423,
    image: "http://www.macaroniandcheesecake.com/wp-content/uploads/2015/07/Hot-Chicken-Salad-Casserole-2-of-3.jpg"
    },
    {
    title: "Chinese Barbecued Pork ",
    calories: 361,
    protein: 53,
    fat: 9,
    sodium: 509,
    image: "https://4.bp.blogspot.com/-J4JmGLJFIEI/Uv4rGxF0OrI/AAAAAAAAIaI/_37C7Rwfc84/s1600/Chinese+barbecued+pork_2020.jpg"
    },
    {
    title: "Orange Duck Breasts on Braised Chicory ",
    calories: 415,
    protein: 47,
    fat: 20,
    sodium: 679,
    image: "nan"
    },
    {
    title: "Baked Beans with Bacon and Brown Sugar ",
    calories: 339,
    protein: 17,
    fat: 8,
    sodium: 499,
    image: "https://www.thechunkychef.com/wp-content/uploads/2015/06/Brown-Sugar-Bacon-Baked-Beans.jpg"
    },
    {
    title: "Milk Braised Pork Shoulder with Semolina Gnocchi ",
    calories: 403,
    protein: 22,
    fat: 26,
    sodium: 650,
    image: "https://tastecooking.com/wp-content/uploads/2017/11/Milk-Braised-Pork-Shoulder_-27871-1500x1203.jpg"
    },
    {
    title: "Grilled Flank Steak, Onion and Bell Pepper Sandwiches ",
    calories: 529,
    protein: 42,
    fat: 29,
    sodium: 2745,
    image: "https://img.sndimg.com/food/image/upload/q_92,fl_progressive,w_1200,c_scale/v1/img/recipes/17/87/10/picXHcQcY.jpg"
    },
    {
    title: "Dill-Crusted Pork Tenderloin With Farro, Pea, and Blistered Tomato Salad ",
    calories: 772,
    protein: 53,
    fat: 32,
    sodium: 1467,
    image: "https://assets.epicurious.com/photos/57169f670e3f6ffc32109121/16:9/w_1280,c_limit/EP_04182015_GroceryBag_DillCrustedPorkTenderloinwithFarroPeaBlisteredTomatoSalad.jpg"
    },
    {
    title: "Mussels in Cream Sauce ",
    calories: 600,
    protein: 55,
    fat: 25,
    sodium: 1319,
    image: "http://lexiscleankitchen.com/wp-content/uploads/2017/03/Mussels-Creamy-Mustard-Sauce1.jpg"
    },
    {
    title: "Goat Cheese-Onion Naan with Mango Salsa ",
    calories: 447,
    protein: 16,
    fat: 20,
    sodium: 579,
    image: "https://pb08bistro.com/wp-content/uploads/2020/05/garlic-naan-1--768x1152.jpg"
    },
    {
    title: "Potato Galettes with Crab, Shrimp, and Asparagus ",
    calories: 418,
    protein: 16,
    fat: 30,
    sodium: 641,
    image: "https://i.pinimg.com/736x/57/ad/18/57ad18dec520e71497f5e1b44f3a5336--shrimp-and-asparagus-terre.jpg"
    },
    {
    title: "Artichoke and Parmesan Risotto ",
    calories: 671,
    protein: 22,
    fat: 28,
    sodium: 583,
    image: "https://i.pinimg.com/originals/93/3c/03/933c0385ab6b6634bc6bcd2a4eb91602.jpg"
    },
    {
    title: "Turkey Cream Puff Pie ",
    calories: 563,
    protein: 31,
    fat: 38,
    sodium: 652,
    image: "http://farm3.static.flickr.com/2266/1547013536_b04ca90ae7.jpg"
    },
    {
    title: "Snapper on Angel Hair with Citrus Cream ",
    calories: 631,
    protein: 45,
    fat: 24,
    sodium: 517,
    image: "https://i.pinimg.com/originals/f3/20/b3/f320b33f7480c95133e0ed2f93cbe281.jpg"
    },
    {
    title: "Baked Ham with Marmalade-Horseradish Glaze ",
    calories: 560,
    protein: 73,
    fat: 10,
    sodium: 3698,
    image: "https://wholesale.sutterbuttesoliveoil.com/wp-content/uploads/2018/04/5339d4671a5ef0.34688872-scaled.jpg"
    },
    ]
    
    export default data;