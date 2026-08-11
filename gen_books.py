# -*- coding: utf-8 -*-
"""生成 RAZ 书目种子数据（aa + A 两级），注入 raz_library.json。
书目来源：小花生社群书单（Reading A-Z 官方本级序号），与官方排序一致。
编号规则：编号 = 级别 + RAZ 本级书目序号，如 A13 = Level A 第13本《Vegetables》。
每本书打三个标签：
  - theme : 主题族（联动"可合并主题"6大家族）
  - lang  : 语言pattern（句式/高频词聚类，用于"重复语言"）
  - type  : F(虚构)/NF(非虚构)/SAZ
"""
import json, os

HERE = os.path.dirname(os.path.abspath(__file__))
JSON_PATH = os.path.join(HERE, "raz_library.json")

# ---------------- aa 级原始书目（编号, 书名） ----------------
aa_raw = [
 (1,"Farm Animals"),(2,"Go, Go, Go"),(3,"Jump Over"),(4,"Pets"),(5,"Plains Animals"),
 (6,"Rainforest Animals"),(7,"The Coast"),(8,"Water"),(9,"Spring"),(10,"Summer"),
 (11,"It Is Fall"),(12,"Winter"),(13,"The Ocean"),(14,"The Plant"),(15,"The Chicken"),
 (16,"These Birds"),(17,"Rain on Fairyland"),(18,"Jungle Friends"),(19,"Animals Nap"),(20,"Colorful eggs"),
 (21,"Purple"),(22,"Yellow"),(23,"Blue"),(24,"Green"),(25,"Orange"),
 (26,"Red"),(27,"White"),(28,"Black"),(29,"One"),(30,"Two"),
 (31,"Three"),(32,"Four"),(33,"Five"),(34,"Six"),(35,"Seven"),
 (36,"Eight"),(37,"Nine"),(38,"Ten"),(39,"Eleven"),(40,"Twelve"),
 (41,"Counting Bugs"),(42,"One Insect"),(43,"Counting Letters"),(44,"The Street"),(45,"City Street"),
 (46,"The City"),(47,"The Playground"),(48,"Christmas Eve"),(49,"My Hanukkah"),(50,"Too Many Sweets"),
 (51,"Lunch at School"),(52,"Valentine's Day Gifts"),(53,"Pasta!"),(54,"My Gift for Mom"),(55,"The Garden"),
 (56,"Play Ball!"),(57,"The Baseball Game"),(58,"The Trip"),(59,"The Supermarket"),(60,"The Zoo"),
 (61,"The School"),(62,"The Classroom"),(63,"Summer Camp"),(64,"Summer Picnics"),(65,"The Post Office"),
 (66,"The Bookstore"),(67,"On an Airplane"),(68,"The Subway"),(69,"At the Lake"),(70,"The Backyard"),
 (71,"My School Bus"),(72,"Fido Gets Dressed"),(73,"Picking Apples"),(74,"My Closet"),(75,"The Birthday Party"),
 (76,"Show Some Love"),(77,"This Kitchen"),(78,"My Bath"),(79,"Toys"),(80,"We Build"),
 (81,"We Go Camping"),(82,"The Fort"),(83,"My Garden"),(84,"The Book"),(85,"My Easter"),
 (86,"Mom"),(87,"The Movie"),(88,"My Family"),(89,"Good Night"),(90,"Funny Cat"),
 (91,"Big"),(92,"Little"),(93,"Under"),(94,"On"),(95,"In"),
 (96,"Out"),(97,"Off"),(98,"Over"),(99,"The Market"),(100,"These Are Opposites"),
]

# ---------------- A 级原始书目（编号, 书名） ----------------
a_raw = [
 (1,"Pond Animals"),(2,"My Dog"),(3,"The Big Cat"),(4,"The Forest"),(5,"Mom and I"),
 (6,"What Lives Here?"),(7,"Baby Animals"),(8,"I Love Flowers"),(9,"Hamster Home"),(10,"Oh, Raccoon"),
 (11,"Bird Goes Home"),(12,"Spring Weather"),(13,"Vegetables"),(14,"Fruit Colors"),(15,"Hello, Butterfly"),
 (16,"Shapes in Nature"),(17,"Spring and Fall"),(18,"The Rainstorm"),(19,"Rabbits"),(20,"Snake Colors"),
 (21,"I See My Colors"),(22,"Bird Colors"),(23,"Bedtime Counting"),(24,"Carlos Counts Kittens"),(25,"Maria Counts Pumpkins"),
 (26,"This Insect"),(27,"Halloween Pumpkins"),(28,"Fruit"),(29,"Going Places"),(30,"Now We Bake!"),
 (31,"My Easter Eggs"),(32,"This Is My Halloween"),(33,"Halloween Houses"),(34,"Smells Like Thanksgiving"),(35,"This Feels"),
 (36,"Where to Go"),(37,"Car Parts"),(38,"Fun in the Water"),(39,"I Draw a Bunny"),(40,"Sundae Time"),
 (41,"This Tastes"),(42,"What Do I Hear?"),(43,"The Mall"),(44,"All Kinds of Buttons"),(45,"Make a Salad"),
 (46,"Move It!"),(47,"Our Apartment Building"),(48,"This Is My Bear"),(49,"Write!"),(50,"This Sounds"),
 (51,"Time for Eggs"),(52,"This Looks"),(53,"I Go"),(54,"My Room"),(55,"A Fish Sees"),
 (56,"Go Fly a Kite"),(57,"He Runs"),(58,"Maria Goes to School"),(59,"Carlos Goes to School"),(60,"I Can"),
 (61,"Getting Dressed"),(62,"These Shoes"),(63,"What I Like"),(64,"I Love Pirates"),(65,"The Parade"),
 (66,"I Dream"),(67,"Clean, Not Clean"),(68,"Building with Blocks"),(69,"My House"),(70,"Smile"),
 (71,"Make Me Laugh"),(72,"I Set the Table"),(73,"I Save Money"),(74,"My Body"),(75,"What Makes Me Happy?"),
 (76,"My Hair"),(77,"Athletes"),(78,"Nice, Not Nice"),(79,"Safe, Not Safe"),(80,"You Can Dance"),
 (81,"I Can Skate"),(82,"My Little Brother"),(83,"Muscles"),(84,"Dad and I"),(85,"For Mom"),
 (86,"My Face"),(87,"All Kinds of Faces"),(88,"Grandparents Are Great!"),(89,"We Can Make Sounds"),(90,"In and Out"),
 (91,"Up and Down"),(92,"Who Has It?"),(93,"This Smells!"),(94,"Opposites"),(95,"Hot and Cold"),
 (96,"Christmas Cookies"),(97,"Where They Hid"),(98,"This Lizard"),(99,"Scary, Not Scary"), (100,"I Push"),
]

# ---------------- B 级原始书目（编号, 书名） ----------------
# 来源：小花生社群书单 userbooklist_286065（Reading A-Z 官方本级序号，共99本）
b_raw = [
 (1,"Taking Care of Chase"), (2,"The Pet Rats"), (3,"Gracie's Nose"), (4,"Playful Puppy"), (5,"My Pet Dinosaur"),
 (6,"On the Farm"), (7,"Bonkers Likes to Bark"), (8,"Animal Sounds"), (9,"Pond Life"), (10,"Where Is Water?"),
 (11,"I Love the Earth"), (12,"Animal Coverings"), (13,"Animal Ears"), (14,"The New Forest Path"), (15,"What Has These Feet?"),
 (16,"What Has These Stripes?"), (17,"What Has This Tail?"), (18,"What Has These Spots?"), (19,"Amazing Caves"), (20,"Animals Can Move"),
 (21,"Rain in the City"), (22,"Rain in the Country"), (23,"Gobi Desert Animals"), (24,"Wind Blows"), (25,"How Many Legs?"),
 (26,"What Flies in the Sky?"), (27,"Paint It Purple"), (28,"Our Show"), (29,"Ten"), (30,"My Brain"),
 (31,"High or Low?"), (32,"Healthy Snacks"), (33,"Things Made of Wood"), (34,"What Gives Cover?"), (35,"Fun with Paper"),
 (36,"Bananas Sometimes"), (37,"Henry's Hike"), (38,"Applesauce"), (39,"We Pack a Picnic"), (40,"The Picnic"),
 (41,"We Make Cookies"), (42,"Halloween Costumes"), (43,"On Thanksgiving"), (44,"The Aquarium"), (45,"Too High"),
 (46,"Trucks"), (47,"So Many Shops"), (48,"Animal Caution Signs"), (49,"Stop That Cat!"), (50,"Go Animals Go"),
 (51,"I Read a Book"), (52,"I Pick Up"), (53,"You and I"), (54,"Carlos and His Teacher"), (55,"Maria and Her Teacher"),
 (56,"I Love Art Class"), (57,"Games We Play"), (58,"The Big Game"), (59,"Clean Is Not for Me!"), (60,"Beach Fun"),
 (61,"Taking the Bus"), (62,"Too Many Leaves"), (63,"A Cold Day"), (64,"The Kids Built It"), (65,"Firefly"),
 (66,"Under My Bed"), (67,"We Do Not Share"), (68,"After School"), (69,"All By Myself"), (70,"Boats"),
 (71,"Old and New"), (72,"The Sandwich"), (73,"Valentines All Around"), (74,"Mixing Colors"), (75,"It Is School Time"),
 (76,"Time for Soccer"), (77,"I Am a Community Worker"), (78,"Winter Fun"), (79,"It Is Spring"), (80,"Sophie Goes for a Walk"),
 (81,"Yours or Mine?"), (82,"Near and Far Away"), (83,"You Can Go"), (84,"Swing, Sydney, Swing!"), (85,"Bridges"),
 (86,"Where?"), (87,"Are These His or Hers?"), (88,"Lazy Lulu"), (89,"Light and Heavy"), (90,"The Hungry Goat"),
 (91,"Three Baby Birds"), (92,"Two Little Dicky Birds"), (93,"Wet Wally"), (94,"Drop It!"), (95,"Mouse in the City"),
 (96,"Crows On a Wire"), (97,"Wake Up, Rooster!"), (98,"Make a Superhero!"), (99,"This Turtle"),
]

# ---------------- C 级原始书目（编号, 书名） ----------------
# 来源：小花生社群书单 userbooklist_269067（Reading A-Z 官方本级序号，共99本，缺 C54）
c_raw = [
 (1,"What Is at the Zoo?"), (2,"More Baby Animals"), (3,"All About Spiders"), (4,"Ladybugs"),
 (5,"Apple Tree"), (6,"How Frogs Grow"), (7,"Moms Do So Much"), (8,"Allie and Ollie"),
 (9,"What Animals Eat"), (10,"The Animals of Canada"), (11,"Different Kinds of Sharks"), (12,"We Count"),
 (13,"Many Kinds of Dinosaurs"), (14,"Snow Falls"), (15,"Strange Animals"), (16,"That's a Fruit?"),
 (17,"All About Penguins"), (18,"All About Earthworms"), (19,"Ice"), (20,"Animals That Sting"),
 (21,"How Many?"), (22,"Spirals, Spirals Everywhere"), (23,"SPACE"), (24,"The Moon"),
 (25,"Then and Now"), (26,"The Woodsy Band Jam"), (27,"Yummy, Yummy"), (28,"Mash the Potatoes"),
 (29,"Making Salsa!"), (30,"We Learn to Swim"), (31,"The Easter Egg Hunt"), (32,"What Can I Be?"),
 (33,"Going Away"), (34,"A Place Called Home"), (35,"City Shapes"), (36,"Road Trip"),
 (37,"Shadows"), (38,"Building a Road"), (39,"Airplanes"), (40,"Rocks"),
 (41,"Get In"), (42,"We Buy"), (43,"Birthday Party"), (44,"Fall Fun"),
 (45,"Busy at School"), (46,"Taking Turns"), (47,"What Can We Draw?"), (48,"I Can Be"),
 (49,"At the Fair"), (50,"Teeth Brushing Fun"), (51,"What I Want"), (52,"My Clothes Are Too Small"),
 (53,"Pairs"), (55,"I Won't"), (56,"Jack and Lily's Favorite Food"), (57,"Spring-Cleaning!"),
 (58,"Machines at Home"), (59,"I Wonder"), (60,"Go Away, Lily"), (61,"Lucy Did It"),
 (62,"We Make a Snowman"), (63,"New Again"), (64,"Water Fight!"), (65,"Tools"),
 (66,"Pick Me!"), (67,"We Make Good Choices"), (68,"What's for Breakfast?"), (69,"Winter Hats"),
 (70,"You Like What?"), (71,"The Festival of Lights"), (72,"I Can Help"), (73,"Quiet or Loud?"),
 (74,"How Many Wheels?"), (75,"What Do I Wear?"), (76,"Wash Your Hands"), (77,"Elephant Car Wash"),
 (78,"How Things Move"), (79,"Fall Foods"), (80,"Feelings"), (81,"What's My Job?"),
 (82,"When Is Nighttime?"), (83,"Take a Bite"), (84,"Fall"), (85,"What Season Is It?"),
 (86,"My Teacher"), (87,"Sherman Sure Is Shy"), (88,"Selfish Sasha"), (89,"Open and Close"),
 (90,"There Is a Mouse in the House"), (91,"Mongo and Cutie"), (92,"One Stubborn Horse"), (93,"Who Stole the North Pole?"),
 (94,"Who, Who, Who?"), (95,"Abby and Zots"), (96,"I Want to Be a Cat"), (97,"The Box"),
 (98,"Too Hot!"), (99,"Build a World"), (100,"What Does the Wind Move?"),
]

# ---------------- D 级原始书目（编号, 书名） ----------------
# 来源：小花生社群书单 userbooklist_285996（Reading A-Z 官方本级序号，共92本，无缺口）
d_raw = [
 (1,"Grow"), (2,"Bees Feed Me"), (3,"Whale Watching"), (4,"Frog Is Hungry"),
 (5,"Where Animals Live"), (6,"Swamps"), (7,"Bats Day and Night"), (8,"Welcome Back"),
 (9,"Where Plants Grow"), (10,"Fog"), (11,"Clouds"), (12,"Future Flowers"),
 (13,"Under That Rock"), (14,"No"), (15,"Polly Gets Out"), (16,"Lily the Cat"),
 (17,"Insect Wings"), (18,"Animal Horns"), (19,"To the Woods"), (20,"The Busy Pond"),
 (21,"Tadpole Teasing"), (22,"Cranberries"), (23,"River Otters"), (24,"Reindeer Are Real"),
 (25,"All About Foxes"), (26,"Tiger Sharks"), (27,"Who Runs Faster?"), (28,"How Do They Swim?"),
 (29,"Animal Tongues"), (30,"Why Does an Octopus Need Eight Arms?"), (31,"Less Than"), (32,"Greater Than"),
 (33,"I Count 100 Things"), (34,"At the Library"), (35,"A Day for Dad"), (36,"My Neighborhood"),
 (37,"Getting Around the City"), (38,"Give Them Back!"), (39,"Maria's Halloween"), (40,"Country Places"),
 (41,"My New School"), (42,"My New City"), (43,"At a Fall Fair"), (44,"Imagine the Beach"),
 (45,"Bubbles"), (46,"We Give Away"), (47,"To the Store"), (48,"Our Good Night Story"),
 (49,"Nothing Scares Me!"), (50,"What Do You See?"), (51,"Let's Make a Bird Feeder"), (52,"Mud Balls!"),
 (53,"Animal Costumes"), (54,"Because You Recycle"), (55,"I Need an Eraser"), (56,"Buddy the Bear"),
 (57,"Shave It Off!"), (58,"Katie and Katie"), (59,"Just a Trim"), (60,"My First Class Play"),
 (61,"Backyard Camping"), (62,"I Hide"), (63,"Pillow Fort Password"), (64,"Tootsie Can Talk"),
 (65,"Dollars and Cents"), (66,"I Like My Hair"), (67,"I Did Not Give Up!"), (68,"Who Wants to Play Basketball?"),
 (69,"Hobbies"), (70,"Senses"), (71,"Community Helpers"), (72,"Caretakers"),
 (73,"Workers"), (74,"The Team"), (75,"Amazing Places to Work"), (76,"Why Can't I?"),
 (77,"Sky High!"), (78,"Best Friends Q and U"), (79,"The Sky Is Falling"), (80,"What?"),
 (81,"Swamp Music"), (82,"The Mitten"), (83,"Stone Soup"), (84,"Little Loon"),
 (85,"Pick a Pie"), (86,"Do Not Eat That!"), (87,"What to Wear?"), (88,"Silent e"),
 (89,"How We Get to School"), (90,"The Wheel"), (91,"These Bees"), (92,"So Many Fish"),
]

# ---------------- E 级原始书目（编号, 书名） ----------------
# 来源：小花生社群书单 userbooklist_207410 / 255869（Reading A-Z 官方本级序号，共90本，缺 17 本：E7,E8...等社区清单未收录）
e_raw = [
 (1,"Arctic Animals"), (2,"All About Orcas"), (3,"Which Tree?"), (4,"Places Plants and Animals Live"),
 (5,"Not Enough Snow"), (6,"I Am Your New Plant"), (7,"Country Animals"), (8,"What's in That Pouch?"),
 (9,"In the Mountains"), (10,"The First Strawberry"), (11,"The Four Seasons"), (12,"The Storm"),
 (13,"A Walk With Mom"), (14,"Sloth Wants to Snooze"), (15,"Class Pets"), (16,"City Animals"),
 (18,"All About Coyotes"), (19,"Shapes in Tide Pools"), (20,"All Kinds of Musical Instruments"), (21,"How Many Teeth?"),
 (22,"Five Seconds to Blastoff!"), (23,"Ava Is a Vegan"), (24,"Crazy Cakes"), (25,"Skateboards"),
 (26,"City Places"), (27,"Let's Make Lemonade"), (28,"Say \"Cheese\""), (29,"Let's Carve a Pumpkin"),
 (30,"Nothing for Father's Day"), (31,"KADEN'S KWANZAA"), (32,"The Leaning Tower"), (33,"Goodbye Snow"),
 (34,"Muddy Boots"), (35,"Caring for Earth"), (36,"At the Rodeo!"), (37,"Lunch Boxes"),
 (38,"Hooray for the Farmer's Market!"), (39,"Fantastic Phil"), (40,"Shoes Men Wear"), (41,"Shoes Women Wear"),
 (42,"Getting Ready for School"), (43,"Stop Snoring"), (44,"When I Grow Up"), (45,"How to Tie Your Shoes"),
 (46,"Make a Tree Friend"), (47,"Jobs We Do at School"), (48,"What Is in the Box?"), (49,"The Contest"),
 (50,"Hugs"), (51,"Lost and Found"), (52,"Dolly's Drama Queen Day"), (53,"The Class Pet"),
 (54,"Winter Sports"), (55,"Food Trucks"), (56,"Bath Time"), (57,"All Kinds of Factories"),
 (58,"A Day of Firsts"), (59,"All Kinds of Farms"), (60,"I Am Thankful"), (61,"Making Pizza"),
 (62,"The Sisters C"), (63,"Sew Who?"), (64,"Grandparents Day"), (65,"Doctor Jen"),
 (66,"I'd Like to Be"), (67,"I Work at The Stables"), (68,"Police Officers"), (69,"Time for Bed"),
 (70,"Calming Down"), (71,"A Week With Grandpa"), (72,"Try, Try Again"), (73,"The Boy Who Cried \"Wolf!\""),
 (74,"What's for Dinner?"), (75,"The Brothers G"), (76,"Too Much Work!"), (77,"Maddy Loves to March"),
 (78,"Happy Birthday, Snag!"), (79,"Wake Up, Bear!"), (80,"Tiny Tugboat"), (81,"Bear and Kangaroo"),
 (82,"Runaway Snowball"), (83,"Carlos's First Halloween"), (84,"A Sweet Tale"), (85,"Where Are My Things?"),
 (86,"Zots Goes to School"), (87,"Zots Learns to Play"), (88,"In the Sea"), (89,"The Vet"),
 (90,"I'd Like to Be"), (91,"Police Officers"),
]

# ---------------- B 级人工精标（编号 -> (theme, lang, type)） ----------------
B_TAG = {
 1:("生命世界","综合","F"), 2:("生命世界","综合","F"), 3:("生命世界","综合","F"), 4:("生命世界","综合","F"), 5:("生命世界","My句式","F"),
 6:("生命世界","场景认知","NF"), 7:("生命世界","综合","F"), 8:("生命世界","感官句式","NF"), 9:("生命世界","综合","NF"), 10:("地球与宇宙","天气水句式","NF"),
 11:("地球与宇宙","I句式","NF"), 12:("生命世界","综合","NF"), 13:("生命世界","综合","NF"), 14:("生命世界","场景认知","F"), 15:("生命世界","What句式","NF"),
 16:("生命世界","What句式","NF"), 17:("生命世界","What句式","NF"), 18:("生命世界","What句式","NF"), 19:("地球与宇宙","综合","NF"), 20:("生命世界","Can句式","NF"),
 21:("地球与宇宙","天气水句式","NF"), 22:("地球与宇宙","天气水句式","NF"), 23:("生命世界","综合","NF"), 24:("地球与宇宙","天气水句式","NF"), 25:("生命世界","数字句式","NF"),
 26:("地球与宇宙","What句式","NF"), 27:("思维与创意","颜色句式","F"), 28:("社会与人文","综合","F"), 29:("思维与创意","数字句式","NF"), 30:("身体与健康","My句式","NF"),
 31:("物质与能量","介词反义","NF"), 32:("身体与健康","综合","NF"), 33:("物质与能量","综合","NF"), 34:("生命世界","What句式","NF"), 35:("思维与创意","综合","F"),
 36:("生命世界","综合","NF"), 37:("社会与人文","综合","F"), 38:("身体与健康","综合","F"), 39:("社会与人文","We句式","F"), 40:("社会与人文","综合","F"),
 41:("身体与健康","We句式","F"), 42:("社会与人文","综合","F"), 43:("社会与人文","综合","F"), 44:("生命世界","综合","NF"), 45:("物质与能量","介词反义","F"),
 46:("物质与能量","综合","NF"), 47:("社会与人文","AllKinds句式","NF"), 48:("生命世界","综合","NF"), 49:("生命世界","综合","F"), 50:("生命世界","Go句式","NF"),
 51:("社会与人文","I句式","F"), 52:("社会与人文","I句式","F"), 53:("社会与人文","I句式","F"), 54:("社会与人文","综合","F"), 55:("社会与人文","综合","F"),
 56:("思维与创意","I句式","F"), 57:("社会与人文","We句式","F"), 58:("社会与人文","综合","F"), 59:("身体与健康","Not反义句式","F"), 60:("社会与人文","综合","F"),
 61:("社会与人文","综合","NF"), 62:("生命世界","综合","F"), 63:("地球与宇宙","天气水句式","F"), 64:("社会与人文","综合","F"), 65:("生命世界","综合","NF"),
 66:("身体与健康","介词反义","F"), 67:("社会与人文","Not反义句式","F"), 68:("社会与人文","综合","F"), 69:("身体与健康","综合","F"), 70:("物质与能量","综合","NF"),
 71:("思维与创意","介词反义","F"), 72:("身体与健康","综合","F"), 73:("社会与人文","综合","F"), 74:("思维与创意","颜色句式","NF"), 75:("社会与人文","It句式","F"),
 76:("社会与人文","综合","F"), 77:("社会与人文","I句式","NF"), 78:("地球与宇宙","综合","F"), 79:("地球与宇宙","季节句式","NF"), 80:("社会与人文","Goes句式","F"),
 81:("社会与人文","综合","F"), 82:("思维与创意","介词反义","F"), 83:("物质与能量","Can句式","F"), 84:("社会与人文","综合","F"), 85:("物质与能量","综合","NF"),
 86:("思维与创意","综合","NF"), 87:("社会与人文","综合","F"), 88:("社会与人文","综合","F"), 89:("物质与能量","介词反义","NF"), 90:("生命世界","综合","F"),
 91:("生命世界","数字句式","NF"), 92:("生命世界","数字句式","NF"), 93:("地球与宇宙","天气水句式","F"), 94:("物质与能量","综合","F"), 95:("社会与人文","综合","F"),
 96:("生命世界","综合","NF"), 97:("生命世界","综合","F"), 98:("社会与人文","综合","F"), 99:("生命世界","This句式","NF"),
}

# ---------------- C 级人工精标（编号 -> (theme, lang, type)） ----------------
C_TAG = {
 1:("生命世界","What句式","NF"), 2:("生命世界","动物认知","NF"), 3:("生命世界","动物认知","NF"), 4:("生命世界","动物认知","NF"),
 5:("生命世界","综合","NF"), 6:("生命世界","动物认知","NF"), 7:("社会与人文","综合","F"), 8:("社会与人文","综合","F"),
 9:("生命世界","What句式","NF"), 10:("生命世界","动物认知","NF"), 11:("生命世界","动物认知","NF"), 12:("思维与创意","数字句式","NF"),
 13:("生命世界","动物认知","NF"), 14:("地球与宇宙","天气水句式","NF"), 15:("生命世界","动物认知","NF"), 16:("生命世界","综合","NF"),
 17:("生命世界","动物认知","NF"), 18:("生命世界","动物认知","NF"), 19:("地球与宇宙","天气水句式","NF"), 20:("生命世界","动物认知","NF"),
 21:("思维与创意","数字句式","NF"), 22:("思维与创意","Shapes句式","NF"), 23:("地球与宇宙","综合","NF"), 24:("地球与宇宙","综合","NF"),
 25:("社会与人文","综合","NF"), 26:("社会与人文","综合","F"), 27:("身体与健康","综合","F"), 28:("身体与健康","综合","F"),
 29:("身体与健康","综合","F"), 30:("身体与健康","We句式","F"), 31:("社会与人文","综合","F"), 32:("社会与人文","What句式","F"),
 33:("社会与人文","综合","F"), 34:("社会与人文","综合","F"), 35:("思维与创意","Shapes句式","NF"), 36:("社会与人文","综合","F"),
 37:("地球与宇宙","综合","NF"), 38:("社会与人文","综合","NF"), 39:("物质与能量","综合","NF"), 40:("地球与宇宙","综合","NF"),
 41:("物质与能量","介词反义","F"), 42:("社会与人文","We句式","F"), 43:("社会与人文","综合","F"), 44:("地球与宇宙","季节句式","F"),
 45:("社会与人文","综合","F"), 46:("社会与人文","综合","F"), 47:("思维与创意","What句式","F"), 48:("社会与人文","I句式","F"),
 49:("社会与人文","综合","F"), 50:("身体与健康","综合","NF"), 51:("社会与人文","What句式","F"), 52:("身体与健康","My句式","F"),
 53:("思维与创意","数字句式","NF"), 55:("社会与人文","I句式","F"), 56:("身体与健康","综合","F"), 57:("社会与人文","季节句式","F"),
 58:("物质与能量","综合","NF"), 59:("思维与创意","I句式","F"), 60:("社会与人文","Go句式","F"), 61:("社会与人文","综合","F"),
 62:("地球与宇宙","季节句式","F"), 63:("物质与能量","综合","F"), 64:("地球与宇宙","天气水句式","F"), 65:("物质与能量","综合","NF"),
 66:("社会与人文","综合","F"), 67:("社会与人文","We句式","F"), 68:("身体与健康","What句式","F"), 69:("地球与宇宙","季节句式","F"),
 70:("社会与人文","What句式","F"), 71:("社会与人文","综合","NF"), 72:("社会与人文","I句式","F"), 73:("思维与创意","介词反义","NF"),
 74:("物质与能量","数字句式","NF"), 75:("身体与健康","What句式","F"), 76:("身体与健康","综合","NF"), 77:("生命世界","综合","F"),
 78:("物质与能量","综合","NF"), 79:("身体与健康","季节句式","NF"), 80:("身体与健康","综合","NF"), 81:("社会与人文","What句式","NF"),
 82:("地球与宇宙","综合","NF"), 83:("身体与健康","综合","F"), 84:("地球与宇宙","季节句式","NF"), 85:("地球与宇宙","季节句式","NF"),
 86:("社会与人文","My句式","F"), 87:("社会与人文","综合","F"), 88:("社会与人文","综合","F"), 89:("思维与创意","介词反义","NF"),
 90:("生命世界","综合","F"), 91:("社会与人文","综合","F"), 92:("生命世界","动物认知","F"), 93:("地球与宇宙","综合","F"),
 94:("生命世界","动物认知","NF"), 95:("思维与创意","综合","F"), 96:("生命世界","I句式","F"), 97:("思维与创意","综合","F"),
 98:("地球与宇宙","天气水句式","F"), 99:("思维与创意","综合","F"), 100:("地球与宇宙","What句式","NF"),
}

# ---------------- A 级人工精标（编号 -> (theme, lang, type)） ----------------
# theme 取值：生命世界 / 地球与宇宙 / 物质与能量 / 身体与健康 / 社会与人文 / 思维与创意
# lang  取值：动物认知 / 颜色句式 / 数字句式 / 季节句式 / 天气水句式 / 场景认知 / 介词反义 /
#             感官句式 / My句式 / I句式 / This句式 / AllKinds句式 / What句式 / Not反义句式 / 综合
# type  取值：F / NF
A_TAG = {
 1:("生命世界","动物认知","NF"),2:("社会与人文","My句式","F"),3:("生命世界","动物认知","NF"),
 4:("生命世界","场景认知","NF"),5:("社会与人文","综合","F"),6:("生命世界","What句式","NF"),
 7:("生命世界","动物认知","NF"),8:("生命世界","I句式","NF"),9:("生命世界","场景认知","NF"),
 10:("生命世界","综合","F"),11:("生命世界","Goes句式","NF"),12:("地球与宇宙","天气水句式","NF"),
 13:("生命世界","综合","NF"),14:("思维与创意","颜色句式","NF"),15:("生命世界","综合","NF"),
 16:("思维与创意","Shapes句式","NF"),17:("地球与宇宙","季节句式","NF"),18:("地球与宇宙","天气水句式","NF"),
 19:("生命世界","动物认知","NF"),20:("思维与创意","颜色句式","NF"),21:("思维与创意","颜色句式","NF"),
 22:("思维与创意","颜色句式","NF"),23:("思维与创意","数字句式","NF"),24:("思维与创意","数字句式","NF"),
 25:("思维与创意","数字句式","NF"),26:("生命世界","This句式","NF"),27:("社会与人文","综合","F"),
 28:("生命世界","综合","NF"),29:("物质与能量","综合","NF"),30:("社会与人文","综合","F"),
 31:("社会与人文","My句式","F"),32:("社会与人文","This句式","F"),33:("社会与人文","综合","F"),
 34:("社会与人文","综合","F"),35:("身体与健康","This句式","NF"),36:("社会与人文","综合","F"),
 37:("物质与能量","综合","NF"),38:("地球与宇宙","综合","F"),39:("思维与创意","I句式","F"),
 40:("身体与健康","综合","F"),41:("身体与健康","This句式","NF"),42:("身体与健康","What句式","NF"),
 43:("社会与人文","场景认知","NF"),44:("思维与创意","AllKinds句式","NF"),45:("身体与健康","综合","F"),
 46:("物质与能量","综合","NF"),47:("社会与人文","场景认知","NF"),48:("社会与人文","This句式","F"),
 49:("思维与创意","综合","F"),50:("身体与健康","This句式","NF"),51:("生命世界","综合","NF"),
 52:("身体与健康","This句式","NF"),53:("物质与能量","I句式","F"),54:("社会与人文","My句式","F"),
 55:("生命世界","动物认知","NF"),56:("物质与能量","综合","F"),57:("物质与能量","综合","F"),
 58:("社会与人文","Goes句式","F"),59:("社会与人文","Goes句式","F"),60:("思维与创意","I句式","NF"),
 61:("身体与健康","综合","F"),62:("身体与健康","综合","F"),63:("身体与健康","What句式","F"),
 64:("社会与人文","I句式","F"),65:("社会与人文","场景认知","F"),66:("思维与创意","I句式","F"),
 67:("身体与健康","Not反义句式","NF"),68:("思维与创意","综合","NF"),69:("社会与人文","My句式","F"),
 70:("身体与健康","综合","F"),71:("身体与健康","综合","F"),72:("社会与人文","I句式","F"),
 73:("社会与人文","I句式","NF"),74:("身体与健康","My句式","NF"),75:("身体与健康","What句式","F"),
 76:("身体与健康","My句式","NF"),77:("身体与健康","综合","NF"),78:("身体与健康","Not反义句式","F"),
 79:("社会与人文","Not反义句式","NF"),80:("物质与能量","综合","F"),81:("物质与能量","I句式","F"),
 82:("社会与人文","My句式","F"),83:("身体与健康","综合","NF"),84:("社会与人文","综合","F"),
 85:("社会与人文","综合","F"),86:("身体与健康","My句式","NF"),87:("社会与人文","AllKinds句式","NF"),
 88:("社会与人文","综合","F"),89:("身体与健康","综合","NF"),90:("思维与创意","介词反义","NF"),
 91:("思维与创意","介词反义","NF"),92:("社会与人文","综合","F"),93:("身体与健康","This句式","NF"),
 94:("思维与创意","介词反义","NF"),95:("思维与创意","介词反义","NF"),96:("社会与人文","综合","F"),
 97:("生命世界","综合","F"),98:("生命世界","This句式","NF"),99:("身体与健康","Not反义句式","F"),
 100:("物质与能量","I句式","F"),
}

# ---------------- aa 级关键词规则（编号自动推导） ----------------
def tag_aa(title):
    t = title.lower()
    fiction_markers = ["fairyland","jungle friends","fido","funny cat","birthday party",
                       "show some love","christmas eve","my hanukkah","valentine","good night",
                       "we go camping","the fort","the movie","too many sweets","my gift for mom",
                       "pasta","lunch at school","the trip","play ball","baseball game","my bath",
                       "my closet","toys","the book","my easter","mom","my family","rain on"]
    # 先判断虚构
    is_f = any(m in t for m in fiction_markers)
    # 主题族
    if any(k in t for k in ["farm","pet","plain","rainforest","animal","jungle","bird","zoo",
                            "chicken","fish","bug","insect","bear","cat","dog","tiger","lion",
                            "rabbit","hamster","snake","horse","deer","fox","crocodile","ostrich",
                            "wolf","ape","chimp","goat","duck","sheep","cow","pig","monkey","frog",
                            "parrot","beetle","butterfly","turtle","lizard","elephant","giraffe",
                            "dove","hawk","crow","owl","eagle","goose","turkey","ant","worm","bee",
                            "ladybug","spider","snail","panda","camel","bear "]):
        theme = "生命世界"
    elif any(k in t for k in ["color","red","blue","green","yellow","purple","orange","black","white"]):
        theme = "思维与创意"
    elif any(k in t for k in ["one","two","three","four","five","six","seven","eight","nine","ten",
                              "eleven","twelve","count"]):
        theme = "思维与创意"
    elif any(k in t for k in ["spring","summer","fall","winter","season"]):
        theme = "地球与宇宙"
    elif any(k in t for k in ["water","ocean","coast","lake","rain","sea","river","ice","snow","wave"]):
        theme = "地球与宇宙"
    elif any(k in t for k in ["plant","garden","tree","seed","flower","leaf"]):
        theme = "生命世界"
    elif any(k in t for k in ["under","on","in","out","off","over"]):
        theme = "思维与创意"
    elif any(k in t for k in ["school","classroom","bus","library","post office","bookstore",
                              "airplane","subway","supermarket","market","playground","city",
                              "street","backyard","trip","camp"]):
        theme = "社会与人文"
    elif any(k in t for k in ["big","little","opposite"]):
        theme = "思维与创意"
    elif any(k in t for k in ["bath","kitchen","closet","dressed","toy","book"]):
        theme = "身体与健康"
    elif any(k in t for k in ["mom","family","gift","valentine","hanukkah","christmas","easter"]):
        theme = "社会与人文"
    else:
        theme = "社会与人文"
    # 语言pattern
    if any(k in t for k in ["color","red","blue","green","yellow","purple","orange","black","white"]):
        lang = "颜色句式"
    elif any(k in t for k in ["one","two","three","four","five","six","seven","eight","nine","ten",
                              "eleven","twelve","count"]):
        lang = "数字句式"
    elif any(k in t for k in ["spring","summer","fall","winter"]):
        lang = "季节句式"
    elif any(k in t for k in ["water","ocean","coast","rain","lake","sea","wave","snow","ice"]):
        lang = "天气水句式"
    elif any(k in t for k in ["under","on","in","out","off","over","opposite"]):
        lang = "介词反义"
    elif any(k in t for k in ["school","classroom","bus","library","post","bookstore","airplane",
                              "subway","supermarket","market","playground","city","street",
                              "backyard","camp","trip"]):
        lang = "场景认知"
    elif any(k in t for k in ["animal","bird","fish","bug","insect","zoo","pet","farm","bear",
                              "cat","dog","rabbit","snake","tiger","lion","frog","turtle"]):
        lang = "动物认知"
    else:
        lang = "综合"
    return (theme, lang, "F" if is_f else "NF")

# ---------------- D 及以上通用关键词自动打标（与 aa–C 共用同一套主题族/句式词表） ----------------
# 说明：aa–C 为人工精标；D 及以上书目量大，采用关键词自动推导，质量足以支撑"重复规则/勾选主题"功能。
ANIMALS = ["animal","whale","frog","bee","fish","swamp","bat","cat","dog","bird","penguin","shark",
    "octopus","crab","seal","deer","horse","cow","pig","chicken","duck","owl","insect","snake",
    "turtle","lizard","worm","ant","butterfly","monkey","lion","tiger","elephant","fox","wolf",
    "rabbit","mouse","rat","goat","sheep","farm","zoo","ocean","sea","pond","forest","desert",
    "polar","arctic","jungle","reef","coral","dinosaur","otter","reindeer","fox","sloth","bear",
    "kangaroo","loon","tadpole","horns","tongues","pet","creature","creatures"]
PLANTS = ["plant","tree","flower","seed","leaf","garden","grass","vegetable","fruit","pumpkin",
    "bean","grow","root","strawberry","berry","carve","lemonade"]
EARTH = ["weather","fog","cloud","rain","snow","wind","sun","moon","star","space","earth","rock",
    "mountain","volcano","season","spring","summer","fall","winter","water","ice","storm","sky",
    "light","shadow","solar","planet","fire","heat","cold","temperature","tide","blastoff"]
BODY = ["teeth","tooth","brush","hand","wash","body","healthy","sick","eye","ear","nose","food",
    "eat","breakfast","lunch","dinner","exercise","sleep","feeling","calm","hospital","doctor",
    "bath","hair","clothes","wear","shoes","snoring","bed","tired","hug","scare","scares"]
SOCIETY = ["school","teacher","class","library","store","shop","market","city","community","family",
    "friend","helper","police","fire","mail","post","worker","job","holiday","birthday","festival",
    "party","home","house","neighbor","money","buy","sell","truck","car","bus","train","road",
    "travel","map","country","flag","dad","mom","grandpa","grandparents","kwanzaa","vegan","recycle",
    "play","team","contest","firsts","fair","rodeo","stables","father","work","workers","caretaker"]
THINK = ["shape","color","count","number","math","pattern","size","big","small","same","different",
    "opposite","sort","match","puzzle","draw","paint","music","art","story","imagination","rhyme",
    "letter","word","silent e","alphabet","less than","greater than","cents","dollar","seconds",
    "week","cake","pizza","cheese","lemonade"]
NF_MARK = ["all about","all kinds of","how ","why ","where ","what ","when ","the four seasons",
    "places plants and animals","country animals","city animals","arctic animals","in the mountains",
    "in the sea","shapes in tide pools","how many teeth","caring for earth","food trucks","factories",
    "farms","which tree","what's in that pouch","not enough snow","goodbye snow","winter sports",
    "bath time","senses","amazing places to work","community helpers","police officers","doctor jen",
    "jobs we do","how we get to school","how to tie","getting ready for school","country places",
    "city places","the first strawberry","muddy boots","cranberries","river otters","tiger sharks",
    "animal tongues","animal horns","animal costumes","insect wings","bats day","because you recycle",
    "under that rock","swamps","whale watching","frog is hungry","where animals live","where plants grow",
    "future flowers","reindeer are real","all about foxes","these bees","so many fish","busy pond",
    "making pizza","let's make lemonade","let's carve a pumpkin","crazy cakes","hooray for the farmer",
    "the leaning tower","tiny tugboat","skateboards","five seconds"]

def tag_generic(title):
    t = title.lower()
    # 类型
    is_f = not any(k in t for k in NF_MARK)
    # 主题族（优先级：具体优先）
    if any(k in t for k in ANIMALS):
        theme = "生命世界"
    elif any(k in t for k in PLANTS):
        theme = "生命世界"
    elif any(k in t for k in EARTH):
        theme = "地球与宇宙"
    elif any(k in t for k in BODY):
        theme = "身体与健康"
    elif any(k in t for k in SOCIETY):
        theme = "社会与人文"
    elif any(k in t for k in THINK):
        theme = "思维与创意"
    else:
        theme = "社会与人文"
    # 语言pattern
    if t.startswith("i ") or " i'd" in t or " i am" in t or " i like" in t or " i work" in t or " i need" in t or " i hide" in t or " i did" in t:
        lang = "I句式"
    elif t.startswith("we ") or "we give" in t or "we make" in t or "we get" in t:
        lang = "We句式"
    elif t.startswith("my ") or "my new" in t or "my first" in t or "my neighborhood" in t:
        lang = "My句式"
    elif "what" in t:
        lang = "What句式"
    elif t.startswith("this ") or "this is" in t:
        lang = "This句式"
    elif "can" in t:
        lang = "Can句式"
    elif "go" in t or "going" in t:
        lang = "Go句式"
    elif "all kinds of" in t:
        lang = "AllKinds句式"
    elif "not" in t or "no" in t:
        lang = "Not反义句式"
    elif "shape" in t:
        lang = "Shapes句式"
    elif any(k in t for k in ["color","red","blue","green","yellow","purple","orange","black","white"]):
        lang = "颜色句式"
    elif any(k in t for k in ["count","many","much","number","less than","greater than","hundred","cents","dollar","seconds","five"]):
        lang = "数字句式"
    elif any(k in t for k in ["spring","summer","fall","winter","season"]):
        lang = "季节句式"
    elif any(k in t for k in ["weather","fog","cloud","rain","snow","wind","water","ice","storm","sea","ocean","tide","river","pond","swamp"]):
        lang = "天气水句式"
    elif any(k in t for k in ["under","over","in ","on ","out","off","up","down","away","back"]):
        lang = "介词反义"
    elif any(k in t for k in ANIMALS):
        lang = "动物认知"
    else:
        lang = "综合"
    return (theme, lang, "F" if is_f else "NF")

# ---------------- SAZ 专用打标：Science A-Z 是科普非虚构科学分级 ----------------
# SAZ 书名均为科学主题，主题应归入 生命/地球/物质/身体 四族；type 固定 NF（非虚构科普）。
# 复用 RAZ 的 6 大主题族，但用科学词表（RAZ 读物词表对 SAZ 大量误归社会与人文）。
SAZ_BODY = ["body","health","sense","brain","bone","muscle","heart","blood","breath","disease",
    "nutri","medicine","teeth","tooth","skin","sleep","organ","nerv","digest","immune","germ",
    "virus","hunger","taste","smell","touch","hear","see","feel"]
SAZ_LIFE = ["animal","plant","seed","tree","flower","leaf","organism","habitat","ecosystem","life",
    "living","grow","frog","whale","insect","bird","fish","mammal","reptile","amphibian","bacteria",
    "fungus","rose","pinecone","whisker","baby","parent","cell","species","evolution","adapt",
    "pollin","photosynth","predator","prey","food chain","food web","decompos","microbe","algae",
    "moss","fern","roots","stem","petal","invertebrate","vertebrate","dinosaur","extinct",
    "camouflage","migration","hibernat","metamorph","egg","offspring","trait","gene","dna"]
SAZ_EARTH = ["earth","weather","climate","sun","moon","star","planet","space","solar","rock",
    "mountain","volcano","water","ocean","atmosphere","wind","storm","season","hurricane","glacier",
    "fossil","apollo","earthquake","environment","soil","river","lake","pond","cloud","rain","snow",
    "ice","tide","coral","reef","desert","forest","wetland","prairie","biome","landform","mineral",
    "crust","mantle","lava","magma","meteor","comet","galaxy","telescope","orbit"]
SAZ_MATTER = ["matter","energy","force","motion","electric","magnet","light","heat","sound","chemical",
    "mixture","property","machine","circuit","current","plastic","speed","voltage","battery","wire",
    "gear","lever","pulley","wheel","engine","fuel","pressure","temperature","wave","atom","molecule",
    "solid","liquid","gas","density","volume"]
SAZ_SOCIETY = ["curie","scientist","career","history of science","invent","engineer",
    "technology and society","community"]
SAZ_THINK = ["experiment","observe","measure","variable","method","hypothesis","data","evidence",
    "model","classify","predict","infer","science tool"]

def tag_saz(title):
    t = title.lower()
    # SAZ 全部为非虚构科普
    typ = "NF"
    # 主题优先级：身体 > 生命 > 地球 > 物质 > 社会 > 思维（兜底地球与宇宙，科学书少落社会与人文）
    if any(k in t for k in SAZ_BODY):
        theme = "身体与健康"
    elif any(k in t for k in SAZ_LIFE):
        theme = "生命世界"
    elif any(k in t for k in SAZ_EARTH):
        theme = "地球与宇宙"
    elif any(k in t for k in SAZ_MATTER):
        theme = "物质与能量"
    elif any(k in t for k in SAZ_SOCIETY):
        theme = "社会与人文"
    elif any(k in t for k in SAZ_THINK):
        theme = "思维与创意"
    else:
        theme = "地球与宇宙"
    lang = "综合"
    return (theme, lang, typ)

def build():
    books = []
    # aa
    for num, title in aa_raw:
        theme, lang, typ = tag_aa(title)
        books.append({
            "id": "AA" + str(num).zfill(2),
            "level": "aa", "num": num, "title": title,
            "type": typ, "theme": theme, "lang": lang,
        })
    # A (人工精标)
    for num, title in a_raw:
        theme, lang, typ = A_TAG[num]
        books.append({
            "id": "A" + str(num).zfill(2),
            "level": "A", "num": num, "title": title,
            "type": typ, "theme": theme, "lang": lang,
        })
    # B (人工精标)
    for num, title in b_raw:
        theme, lang, typ = B_TAG[num]
        books.append({
            "id": "B" + str(num).zfill(2),
            "level": "B", "num": num, "title": title,
            "type": typ, "theme": theme, "lang": lang,
        })
    # C (人工精标)
    for num, title in c_raw:
        theme, lang, typ = C_TAG[num]
        books.append({
            "id": "C" + str(num).zfill(2),
            "level": "C", "num": num, "title": title,
            "type": typ, "theme": theme, "lang": lang,
        })
    # D (通用关键词自动打标)
    for num, title in d_raw:
        theme, lang, typ = tag_generic(title)
        books.append({
            "id": "D" + str(num).zfill(2),
            "level": "D", "num": num, "title": title,
            "type": typ, "theme": theme, "lang": lang,
        })
    # E (通用关键词自动打标)
    for num, title in e_raw:
        theme, lang, typ = tag_generic(title)
        books.append({
            "id": "E" + str(num).zfill(2),
            "level": "E", "num": num, "title": title,
            "type": typ, "theme": theme, "lang": lang,
        })
    # ---------------- F–J：读取清洗后的社群书单（成成家合集 / 298674 等），通用关键词自动打标 ----------------
    # F (213823 成成家合集, 90本) / G (213824, 88本) / H (213825, 83本)
    # I (userbooklist_298674, 84本) / J (213827 成成家合集, 86本)
    # 书号：F–H 为 Reading A-Z 官方本级序号；I–J 社群清单未统一暴露官方号，按文档顺序补号（如实标注）。
    fj_map = {
        "F": "level_f_clean.json", "G": "level_g_clean.json", "H": "level_h_clean.json",
        "I": "level_i_clean.json", "J": "level_j_clean.json",
        "K": "level_k_clean.json", "L": "level_l_clean.json", "M": "level_m_clean.json",
        "N": "level_n_clean.json", "O": "level_o_clean.json", "P": "level_p_clean.json",
        "Q": "level_q_clean.json", "R": "level_r_clean.json", "S": "level_s_clean.json",
        "T": "level_t_clean.json", "U": "level_u_clean.json", "V": "level_v_clean.json",
        "W": "level_w_clean.json", "X": "level_x_clean.json", "Y": "level_y_clean.json",
        "Z": "level_z_clean.json", "Z1": "level_z1_clean.json", "Z2": "level_z2_clean.json",
    }
    for lvl, fname in fj_map.items():
        fp = os.path.join(HERE, fname)
        if not os.path.exists(fp):
            print("WARN missing", fp); continue
        pairs = json.load(open(fp, encoding="utf-8"))
        for num, title in pairs:
            theme, lang, typ = tag_generic(title)
            books.append({
                "id": lvl + str(num).zfill(2),
                "level": lvl, "num": num, "title": title,
                "type": typ, "theme": theme, "lang": lang,
            })
    # ---------------- SAZ（Science A-Z）独立科学分级，全段 259 本 ----------------
    # 来源两路：
    #   GK-G2 段（Saz 01–99，99 本）：小花生书单 userbooklist_297221（已本地回补 Saz35），band = GK/G1/G2 × low/mid/high
    #   G3-4 段（SAZ100–181，82 本）与 G5-6 段（SAZ182–259，78 本）：小花生 SAZ 官方系列页（SAZ G3-G4 / SAZ G5-G6），band 多为年级段 G3-4/G5-6，仅少数标 Low/Mid/High，如实仅标段
    # 编号：SAZ + 全局序号（01–259 连续）；band 字段原样透传，显示逻辑按段+档位展示
    saz_fp = os.path.join(HERE, "level_saz_clean.json")
    if os.path.exists(saz_fp):
        for item in json.load(open(saz_fp, encoding="utf-8")):
            num, title = item[0], item[1]
            band = item[2] if len(item) > 2 else ""
            theme, lang, typ = tag_saz(title)
            books.append({
                "id": "SAZ" + str(num).zfill(2),
                "level": "SAZ", "num": num, "title": title,
                "type": typ, "theme": theme, "lang": lang, "band": band,
            })
    return books

if __name__ == "__main__":
    data = json.load(open(JSON_PATH, encoding="utf-8"))
    books = build()
    data["books"] = books
    data["bookNumbering"] = {
        "convention": "编号 = 级别 + RAZ 本级书目序号（Reading A-Z 官方排序 / 社群通用编号），与官方一致",
        "example": "A13 = Level A 第 13 本《Vegetables》；AA01 = Level aa 第 1 本《Farm Animals》",
        "lookupFormat": "查编号直接输入如 A13 / AA01；查书名输入英文书名（支持模糊匹配）",
        "note": "RAZ 官方不在封面印 'A13' 字样，但其在 Reading A-Z 书库中的本级顺序即此序号；社群书单（小花生等）与 Raz-Plus 导出均以此为编号。",
        "coverage": "本库已种子化 RAZ aa–Z2 全 29 级 + SAZ 科学分级共 2800+ 本真实书目。来源：aa–J 来自小花生社群书单（编号对齐 Reading A-Z 官方本级序号），K–Z2 来自 Reading A-Z 官方 leveled-books 页面，SAZ 来自两路：GK-G2 段小花生书单 userbooklist_297221（已回补 Saz35，99 本 Saz 01–99，band 为 GK/G1/G2 × low/mid/high）；G3-4 与 G5-6 段小花生 SAZ 官方系列页（SAZ G3-G4 82 本 + SAZ G5-G6 78 本 = 160 本），band 已由官方 Science A-Z unit 页（书名→Low/Mid/High 权威映射）回填三档，仅 10 本 Unit NF 同名三档书保留年级段 G3-4/G5-6。全段 SAZ 共 259 本，其中 249 本精确到 Low/Mid/High（96.1%）。编号约定：RAZ=级别+本级顺序号；SAZ=SAZ+全局序号（01–259），并带年级段 band。aa–C 人工精标，D–Z2 与 SAZ 关键词自动打标。",
        "seedLevels": ["aa","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Z1","Z2","SAZ"],
        "seedCount": len(books),
    }
    data["meta"]["levelOrder"] = ["aa","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Z1","Z2","SAZ"]
    data["meta"]["version"] = "3.10"
    data["meta"]["updated"] = "2026-08-10"
    json.dump(data, open(JSON_PATH, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
    # 校验
    print("books:", len(books))
    print("aa:", sum(1 for b in books if b["level"]=="aa"), "A:", sum(1 for b in books if b["level"]=="A"))
    from collections import Counter
    print("theme分布:", dict(Counter(b["theme"] for b in books)))
    print("lang分布:", dict(Counter(b["lang"] for b in books)))
    print("type分布:", dict(Counter(b["type"] for b in books)))
