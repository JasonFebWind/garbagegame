
//Format:

//Properties:
// - name_cn : Name in Chinese
// - type: 0->湿垃圾 1->干垃圾 2->可回收垃圾 3->有害垃圾

// - icon_name: 图片地址
//湿垃圾

let wet_garbageData = [{"name_cn":"香蕉","type":0,"icon":"./local_asset/waste_category/wet/banana.png"},
					{"name_cn":"西红柿","type":0,"icon":"./local_asset/waste_category/wet/icons8-tomato.png"},
					{"name_cn":"黄瓜","type":0,"icon":"./local_asset/waste_category/wet/icons8-cucumber.png"},
					{"name_cn":"茄子","type":0,"icon":"./local_asset/waste_category/wet/icons8-aubergine.png"},
					{"name_cn":"红辣椒","type":0,"icon":"./local_asset/waste_category/wet/icons8-paprika.png"},
					{"name_cn":"番薯","type":0,"icon":"./local_asset/waste_category/wet/icons8-brown_potato.png"},
					{"name_cn":"南瓜","type":0,"icon":"./local_asset/waste_category/wet/icons8-pumpkin.png"},
					{"name_cn":"橙子","type":0,"icon":"./local_asset/waste_category/wet/icons8-orange.png"},
					{"name_cn":"小蛋糕","type":0,"icon":"./local_asset/waste_category/wet/icons8-cupcake.png"},
					{"name_cn":"菠萝","type":0,"icon":"./local_asset/waste_category/wet/icons8-pineapple.png"},
					{"name_cn":"草莓","type":0,"icon":"./local_asset/waste_category/wet/icons8-strawberry.png"},
					{"name_cn":"桃子","type":0,"icon":"./local_asset/waste_category/wet/icons8-peach.png"},
					{"name_cn":"西瓜","type":0,"icon":"./local_asset/waste_category/wet/icons8-watermelon.png"},
					{"name_cn":"葡萄","type":0,"icon":"./local_asset/waste_category/wet/icons8-grape.png"},
					{"name_cn":"大虾","type":1,"icon":"./local_asset/waste_category/wet/icons8-prawn.png"},
					{"name_cn":"苹果","type":1,"icon":"./local_asset/waste_category/wet/icons8-apple.png"}
					];
//干垃圾
let dry_garbageData = [{"name_cn":"牙齿","type":1,"icon":"./local_asset/waste_category/dry/icons8-tooth_caries.png"},
					   {"name_cn":"化妆刷","type":1,"icon":"./local_asset/waste_category/dry/icons8-cosmetic_brush.png"},
					   {"name_cn":"大骨头","type":1,"icon":"./local_asset/waste_category/dry/icons8-dog_bone.png"},
					   {"name_cn":"贝壳","type":1,"icon":"./local_asset/waste_category/dry/icons8-shellfish.png"},
					   {"name_cn":"厕纸","type":1,"icon":"./local_asset/waste_category/dry/icons8-toilet_paper.png"},
					   {"name_cn":"扫帚","type":1,"icon":"./local_asset/waste_category/dry/icons8-witch_broom.png"},
					   {"name_cn":"海绵宝宝","type":1,"icon":"./local_asset/waste_category/dry/海绵宝宝.png"},
						];

//可回收垃圾
let recyclable_garbageData = [{"name_cn":"智能手表","type":2,"icon":"./local_asset/waste_category/recycle/icons8-apple_watch_apps.png"},
							  {"name_cn":"篮球","type":2,"icon":"./local_asset/waste_category/recycle/icons8-basketball.png"},
							  {"name_cn":"望远镜","type":2,"icon":"./local_asset/waste_category/recycle/icons8-binoculars.png"},
							  {"name_cn":"废旧书本","type":2,"icon":"./local_asset/waste_category/recycle/icons8-book.png"},
							  {"name_cn":"纸箱","type":2,"icon":"./local_asset/waste_category/recycle/icons8-box.png"},
							  {"name_cn":"相机","type":2,"icon":"./local_asset/waste_category/recycle/icons8-compact_camera.png"},
							  {"name_cn":"足球","type":2,"icon":"./local_asset/waste_category/recycle/icons8-football.png"},
							  {"name_cn":"旧衣物","type":2,"icon":"./local_asset/waste_category/recycle/icons8-jacket.png"},
							  {"name_cn":"显示器","type":2,"icon":"./local_asset/waste_category/recycle/icons8-monitor.png"},
							  {"name_cn":"电视","type":2,"icon":"./local_asset/waste_category/recycle/icons8-retro_tv.png"},
							  {"name_cn":"刷子","type":2,"icon":"./local_asset/waste_category/recycle/icons8-shoe_brush.png"},
							  {"name_cn":"袜子","type":2,"icon":"./local_asset/waste_category/recycle/icons8-socks.png"},
							  {"name_cn":"游戏机","type":2,"icon":"./local_asset/waste_category/recycle/icons8-visual_game_boy.png"},
							  {"name_cn":"葡萄酒瓶","type":2,"icon":"./local_asset/waste_category/recycle/icons8-wine_bottle.png"},
							  {"name_cn":"靴子","type":2,"icon":"./local_asset/waste_category/recycle/icons8-winter_boots.png"}
								];
//有害垃圾
let hazardous_garbageData = [{"name_cn":"温度计","type":3,"icon":"./local_asset/waste_category/hazardous/icons8-thermometer.png"},
							  {"name_cn":"蓄电池","type":3,"icon":"./local_asset/waste_category/hazardous/icons8-car_battery.png"},
							  {"name_cn":"药丸","type":3,"icon":"./local_asset/waste_category/hazardous/icons8-pills.png"},
							  {"name_cn":"油漆桶","type":3,"icon":"./local_asset/waste_category/hazardous/icons8-paint_bucket.png"},
							  {"name_cn":"废弃灯泡","type":3,"icon":"./local_asset/waste_category/hazardous/icons8-spiral_bulb.png"}];

let garbagePack = [wet_garbageData,dry_garbageData,recyclable_garbageData,hazardous_garbageData];

