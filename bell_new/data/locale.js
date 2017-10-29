﻿var trans_data = {}
var trans_array = {}
var trans_data_second = {}
trans_array.item = {}
trans_array.placename = {}
trans_array.etc = {}

gt.locale = {
	lang: gt.bell.langType,

	translate: function(obj) {
		if (!obj)
			return obj;

		if (typeof obj == 'string') {
			var lang = gt.locale.lang;

			if (lang == 'en') {
				var value = gt.locale[lang][obj];
				return value ? value : obj;
			}

			if (lang == 'ko') {
	   // 		$.get('../ff14/dbfinder/question/' + obj, function(data) {
	   //          if (data.code == 0) {
	   //          	trans_data[obj] = {
	   //          		"ko": data.result[0].index_kr,
	   //          		"jp": data.result[0].index_ja,
	   //          		"key": data.result[0].key,
	   //          		"type": data.result[0].type
	   //          	}
	   //          } else {
	   //		 trans_data[obj] = {
	   //          		"ko": "",
	   //          		"jp": "",
	   //          		"key": "",
	   //          		"type": ""
	   //          	}
	   //          }
	   //      	}, "json");
	   			var transObj = "";
	   			var targetObj = gt.bell.lang[obj];

	   			if (targetObj !== undefined) {
		   			if (targetObj.ko.length > 1) {
		   				transObj = targetObj.ko; 

		   				// targetObj.key = Number(targetObj.key);

		   				// if (targetObj.type == "item") {
		   				// 	trans_array.item[targetObj.key] = {
		   				// 		"ko": targetObj.ko,
		   				// 		"en": obj,
		   				// 		"jp": targetObj.jp,
		   				// 		"type": targetObj.type
		   				// 		}
		   				// } else {
		   				// 	trans_array.etc[targetObj.key] = {
		   				// 		"ko": targetObj.ko,
		   				// 		"en": obj,	   						
		   				// 		"jp": targetObj.jp,
		   				// 		"type": targetObj.type
		   				// 	}
		   				// }
		   				
		   			} else {
		   				var targetObj_translation = gt.bell.ko_translation[obj];
		   				if (targetObj_translation !== undefined) {
		   					if (targetObj_translation.length > 0) {
		   						var targetObj_translation_615 = gt.bell.ko_translation_615[obj];
		   						if (targetObj_translation_615 !== undefined) {
		   							if (targetObj_translation_615.length > 0) {
			   							transObj = gt.bell.ko_translation_615[obj];
			   						} else {
			   							transObj = targetObj_translation;
			   						}
		   						} else {
			   						transObj = targetObj_translation;
		   						}
		   					} else {
		   						transObj = obj;
		   					}
		   				} else {
		   					transObj = obj;		
		   				}
		   			}
	   			} else {
	   				var targetObj_translation = gt.bell.ko_translation[obj];
	   				if (targetObj_translation !== undefined) {
	   					if (targetObj_translation.length > 0) {
	   						var targetObj_translation_615 = gt.bell.ko_translation_615[obj];
	   						if (targetObj_translation_615 !== undefined) {
	   							if (targetObj_translation_615.length > 0) {
		   							transObj = gt.bell.ko_translation_615[obj];
		   						} else {
		   							transObj = targetObj_translation;
		   						}
	   						} else {
		   						transObj = targetObj_translation;
	   						}
	   					} else {
	   						transObj = obj;
	   					}
	   				} else {
	   					transObj = obj;		
	   				}	   				
	   			}

				return transObj;
			}			
		}

		if (Array.isArray(obj))
			return _.map(obj, function(v) { return gt.locale.translate(v); });

		return obj;
	},

	ajaxCall: function(obj) {

	},

	// Credits: Nenge (nenge.net)
	cn: {
		"The Tangle":"纠缠沼泽林","Ninja Betta":"忍斗鱼","Midge Basket":"摇蚊","Ala Mhigan fighting fish":"斗鱼","Eli Tohm":"招恶荒岛","Dragonspit":"龙涎","Vundu Ok' Bendu":"温杜属本杜集落","The Ruling Quarter":"萨雷安睿哲区","Beta Quadrant":"贝塔管区","Mother of the Sheave":"圣女希瓦像","The Lost Landlord":"人王像","Hemlock":"铁杉村","The Convictory":"圣菲内雅连队露营地","The Answering Quarter":"萨雷安治学区","The Nidifice":"候鸟云巢","Habisphere Control":"生态园管理局","Alpha Quadrant":"阿尔法管区","The Gauntlet":"试炼群岛","The Watcher":"守望者","The Bed of Bones":"大脚雪人居所","Twinpools":"双子池","The Blue Window":"蓝天窗","Avalonia Fallen":"阿瓦隆尼亚古陆","Four Arms":"四臂广场","The Makers' Quarter":"萨雷安精制区","Upper Thaliak River":"沙利亚克河上流","Clearpool":"清澈池","The Pappus Tree":"冠毛大树","Weston Waters":"西方水泉","The Smoldering Wastes":"荒烟野地","Whilom River":"宽慰河","Tharl Oom Khash":"惋惜之晶遗迹","The Iron Feast":"饵食台地","Sohm Al Summit":"索姆阿尔峰顶","Middle Thaliak River":"沙利亚克河中流","The Habisphere":"生态园","The Hundred Throes":"悲叹飞泉","Event Stage GATE":"[游乐场事件]舞台表演","Capelin":"毛鳞鱼","Side Stage GATE":"[游乐场事件]周边活动","The Time of My Life, Any Way the Wind Blows":"舞蹈大师的特训,喷风中的幸存者","Cliffhanger, Vase Off, Skinchange We Can Believe In":"小雏鸟的营救者,从天而降的送货人,火眼金睛的追踪者","Freshwater Fishing":"淡水","Skyfishing":"空鱼","Cloudfishing":"云海","Ocean Fishing":"海水","Dunefishing":"沙海","Rocky Outcropping":"石场","Mineral Deposit":"矿脉","Mature Tree":"良材","Lush Vegetation":"草场","Red Gatherers' Scrip":"赤货收集品","Blue Gatherers' Scrip":"清货收集品","Thunderbolt Eel":"落雷鳗","Loosetongue":"哲学骨舌鱼","Thaliak Caiman":"沙利亚克鳄凯门凯","Sand Leech":"沙蛭","Storm Rider":"飞沙鱼","Sky Faerie":"夕月天女","Rudderfish":"高天鱼","Blueclaw Shrimp":"蓝螯虾","Hoverworm":"浮游虫","Cloud Cutter":"破云飞鱼","Mahar":"马哈尔","Tupuxuara":"妖精翼龙","Brute Leech":"残暴水蛭","Red Balloon":"红气球虫","Sky Faerie":"Sky Faerie","Rudderfish":"Rudderfish","Goblin Jig":"哥布林钓钩","Stonefly Nymph":"石蝇幼虫","Blueclaw Shrimp":"Blueclaw Shrimp","Bladed Steel Jig":"叶片钓钩","Bullfrog":"牛蛙","Sweetfish":"香鱼","Steel Jig":"铁板钩","Fullmoon Sardine":"满月沙丁鱼","Honey Worm":"蜜虫","Silverfish":"银鱼","Goldfish":"金鱼","Assassin Betta":"暗斗鱼","Glowworm":"火萤","Topwater Frog":"漂浮诱饵蛙","Northern Krill":"极地磷虾","Giant Crane Fly":"巨蚊","Butterworm":"黄油虫","Wildfowl Fly":"雉鸡拟饵","Caiman":"凯门鳄","Weston Bowfin":"维斯顿弓鳍鱼","Noontide Oscar":"白丽鱼","Pipira Pira":"皮皮拉皮拉鱼","Pteranodon":"无齿翼龙","Warmwater Bichir":"多鳍鱼","Tiny Axolotl":"小钝口螈","Manasail":"魔帆","Dravanian Bass":"龙堡鲈","Black Iron Bridge":"黑铁大桥","Yellow Copper Ore":"黄铜矿","Chives":"库尔札斯青葱","Pearl Sprouts":"小包心菜","Coerthan Tea Leaves":"库尔札斯茶叶","Pearl Sprout Seeds":"小包心菜种子","Coerthan Tea Seeds":"库尔札斯茶叶种子","Loth ast Vath":"荒烟野地","Chalcocite":"辉铜矿","Pyrite":"黄铁矿","Limonite":"褐铁矿","Chocobo Forest":"陆行鸟之森","Old World Fig":"旧世界无花果","Old World Fig Seeds":"旧世界无花果种子","Landlord Colony":"人王遗迹","Fire Moraine":"火砂砾","Bright Fire Rock":"强火性岩","Radiant Fire Moraine":"火光砾","Chysahl Greens":"卡贝基野菜","Granular Clay":"赤玉土","Peat Moss":"灰玉土","Black Soil":"黑土","Red Rim":"红沿","Voor Sian Siran":"沃仙曦染","Lightning Moraine":"雷砂砾","Radiant Lightning Moraine":"强雷性岩","Bright Lightning Rock":"雷光砾","Highland Oregano":"牛至","Furymint":"留兰","Clary Sage":"鼠尾草","The House of Letters":"书信之家","Yellow Quartz":"土黄石英","Green Quartz":"翠绿石英","Easton Eyes":"东方眼目","Dravanian Mistletoe":"龙堡荞寄生","Porcini":"牛肝菌","Adamantite Ore":"精金矿","Heavens Lemon":"伊修加德柠檬","Abalathian Mistletoe":"阿巴拉提亚槲寄生","Coldwind":"寒风岛","Abalathian Rock Salt":"阿巴拉提亚岩盐","Red Quartz":"深绯石英","Cloud Banana":"云海香蕉","Morel":"伞蘑","The Daggers":"萨雷安睿哲区","Cuprite":"赤铜矿","Light Kidney Ore":"赤铁矿","Aurum Regis Ore":"皇金矿","Astral Moraine":"星砂砾","Violet Quartz":"青紫石英","Blue Quartz":"绀碧石英","Red Alumen":"红明矾","Seventh Heaven":"星极花","Honeydew Almonds":"甜扁桃","Vanilla Beans":"香草豆","Snurbleberry":"鲜红罗兰莓派","Wattle Bark":"金合欢树皮","Dravanian Paprika":"翻云雾海红辣椒","Sun Mica":"金云母","North Silvertear":"银泪湖北岸","Grade 4 Carbonized Matter":"4级碳化暗物质","Lightning Cluster":"雷之晶簇","Fire Cluster":"火之晶簇","Wind Cluster":"风之晶簇","Water Cluster":"水之晶簇","Ice Cluster":"冰之晶簇","Earth Cluster":"土之晶簇","Unaspected Crystal":"无属性水晶","Dark Matter Cluster":"暗物质晶簇","The North Shards":"歌咏裂谷北部","Kuno the Killer":"杀手库诺","Canavan":"加诺","Whitebrim":"白云崖","Thavnairian Mistletoe":"萨维奈槲寄生","Providence Point":"神意之地","Spruce Log":"云杉原木","Dragonhead":"巨龙首","Astral Rock":"星性岩","Vampire Plant":"吸血枝","Witchdrop":"落魔崖","Shonisaurus":"秀尼鱼龙","Raubahn's Push":"劳班缓冲地","Ferberite":"钨铁矿","Raw Topaz":"黄玉原石","Raw Iolite":"堇青石原石","Yugr'am River":"宇格拉姆河","Gold Sand":"金沙","Bluefog":"蓝雾","Virgin Basilisk Egg":"石蜥蜴的初蛋","Broken Water":"秽水","Platinum Ore":"白金矿","Drybone":"枯骨","Mazlaya Greens":"马兹拉雅草","Black Truffle":"黑松露","Burgundy Falls":"紫红瀑布","Gold Ore":"金矿","Coblyn Larva":"矿爬虫虫","Gregarious Worm":"群居蠕虫","Wellwick Wood":"新植林","Antumbral Rock":"强灵性岩","Haldrath's March":"哈尔德拉斯行军道","Darksteel Ore":"玄铁矿","Lost Hope":"无望流民街","Native Gold":"自然金","Raw Emerald":"祖母绿原石","Raw Diamond":"钻石原石","Hammerlea":"金锤台地","Grade 3 Thanalan Topsoil":"3级萨纳兰土壤","Sagolii Desert":"撒沟厉沙海","Helicoprion":"旋齿鲨","Moraby Bay":"莫拉比湾","Raw Ruby":"红宝石原石","Raw Sapphire":"蓝宝石原石","Raincatcher Gully":"接雨草树林","Pumice":"浮石","Dzemael Tomato Seeds":"泽梅尔番茄种子","Dzemael Tomato":"泽梅尔番茄","Volcanic Rock Salt":"拉诺西亚岩盐","Zephyr Drift":"和风流地","Ebony Log":"黑檀原木","Grade 3 La Noscean Topsoil":"3级拉诺西亚土壤","Quarterstone":"四分石地","La Noscean Leek":"拉诺西亚韭菜","Waterfowl Feather":"水鸟之羽","Bronze Lake":"石绿湖","Blood Orange":"鲜血橙","Bamboo Stick":"竹材","Summerford":"盛夏农庄","Apricot":"黄杏","Bloodshore":"鲜血滨","Prickly Pineapple Seeds":"多刺菠萝种子","Prickly Pineapple":"多刺菠萝","Honey Lemon Seeds":"蜜柠檬种子","Honey Lemon":"蜜柠檬","Cedarwood":"雪松原","Young Cieldalaes Spinach":"谢尔达莱嫩菠菜","Isles of Umbra Southshore":"幻影群岛南岸","Endoceras":"内角石","Rhotano Sea (Privateer Sterncastle)":"罗塔诺海（船尾）","Nepto Dragon":"涅普特龙","Little Thalaos":"小撒拉奥斯","Bentbranch":"弯枝","Cypress Log":"丝柏原木","Rootslake":"蔓根沼","Umbral Rock":"灵性岩","Grade 3 Shroud Topsoil":"3级黑衣森林土壤","Upper Paths":"高径","Fragrant Log":"黑衣香木","Urth's Gift":"兀尔德恩惠地","Namitaro":"波太郎","Giant Takitaro":"大泷太郎","Naked Rock":"裸岩丘","Redolent Log":"高级黑衣香木","Nine Ivies":"九藤","Rosemary":"迷迭香","The Honey Yard":"蜜场","Kidragora":"小小蔓德拉","Trillium Bulb":"延龄草的球根","Little Solace":"妖精暂留地","Silkworm Cocoon":"蚕茧","Sorrel Haven":"酸模避风港","Shroud Tea Leaves":"提诺尔卡茶叶","Alder Springs":"桤木泉","Scarlet Sap":"绯红树汁","The Bramble Patch":"荆棘森","Trillium":"延龄花","Barreleye":"桶眼鱼","The Flagship":"阿济兹拉旗舰岛","Aetherfishing":"魔泉","Fiend Worm":"恶魔蠕虫","Platinum Fish":"白金鱼","Blueclaw Shrimp":"蓝螯虾","Sky Faerie":"夕月天女","Rudderfish":"高天鱼",

		// hunt data
		"Glimmerscale":"铜镜","Judgeray":"审判鳐","The Garlok":"伽洛克","Zona Seeker":"虚无探索者","Thousand-Cast Theda":"千竿口花希达","Croakadile":"咕尔呱洛斯","Mindflayer":"夺心魔","Laideronnette":"雷德罗巨蛇","Spawns after 10 Eorzean hours of rain (two cycles.)":"连续两个下雨天气期间10小时ET后溜达触发","Spawns after midnight on the second day of new moon.":"起始触发时间为新月凌晨时溜达触发.持续时间1-4日每天晚上.","Spawns on the first day of full moon after 5PM ET.":"起始触发时间为满月17时溜达触发.持续时间16-20日每天晚上.","Spawns after 200 real minutes of dry weather following showers or rain.":"雨后200分钟真实时间连续不下雨直至下一次下雨期间溜达触发.","Spawns upon catching a Glimmerscale at Nophica's Wells.":"在西萨纳兰丰饶神井渔场钓上铜镜.","Spawns upon catching a Judgeray at Fallgoard Float.":"在黑衣森林北部林区秋瓜湖畔渔场钓上审判鳐.","Unspoiled":'未知采集点',"Ephemeral":'限时采集地点',"Legendary":'传说的采集地点'," Gathering Rate 0%":"获得率 0%"," Gathering Fortune 0%":"获得率 0%",

		// zone data
		"Limsa Lominsa":"利姆萨・罗敏萨","Middle La Noscea":"中拉诺西亚","Lower La Noscea":"拉诺西亚低地","Eastern La Noscea":"东拉诺西亚","Western La Noscea":"西拉诺西亚","Upper La Noscea":"拉诺西亚高地","Outer La Noscea":"拉诺西亚外地","Mist":"海雾村","Gridania":"格里达尼亚","Central Shroud":"黑衣森林中央林区","East Shroud":"黑衣森林东部林区","South Shroud":"黑衣森林南部林区","North Shroud":"黑衣森林北部林区","The Lavender Beds":"薰衣草苗圃","Ul'dah":"乌尔达哈","Western Thanalan":"西萨纳兰","Central Thanalan":"中萨纳兰","Eastern Thanalan":"东萨纳兰","Southern Thanalan":"南萨纳兰","Northern Thanalan":"北萨纳兰","The Goblet":"高脚孤丘","Ishgard":"伊修加德","Coerthas Central Highlands":"库尔札斯中央高地","Coerthas Western Highlands":"库尔札斯西部高地","Mor Dhona":"摩杜纳","The Sea of Clouds":"阿巴拉提亚云海","Azys Lla":"魔大陆阿济兹拉","The Dravanian Forelands":"龙堡参天高地","The Dravanian Hinterlands":"龙堡内陆低地","The Churning Mists":"翻云雾海","Idyllshire":"夏利安废都",

		// weather data
		"Clear Skies":"碧空","Fair Skies":"晴朗","Clouds":"阴云","Fog":"薄雾","Wind":"微风","Gales":"强风","Rain":"小雨","Showers":"暴雨","Thunder":"打雷","Thunderstorms":"雷雨","Dust Storms":"扬沙","Sandstorms":"沙尘暴","Hot Spells":"炎热的天气","Heat Waves":"热浪","Snow":"小雪","Blizzards":"暴雪","Gloom":"妖雾","Auroras":"Auroras","Darkness":"黑暗","Tension":"绝命","Clouds":"阴云","Storm Clouds":"暴风雨云","Heat Waves":"热浪","Gloom":"妖雾","Gales":"强风","Fair Skies":"晴朗","Umbral Wind":"暗风","Umbral Static":"暗雾","Fair Skies":"晴朗",

		// other
		"Perception": "鉴别力", "Gathering": "获得力", "Gathering Rate": "获得率", "Gathering Fortune": "优质率", "Cooldown": "冷却", "hours": "小时", "maintenance": "维护",
		"Mining": "采矿工", "Botany": "园艺工", "Fishing": "捕鱼人", "Unspoiled": "未知采集点", "Ephemeral": "限时采集地点", "Legendary": "传说的采集地点",
		"Collectable": "收集品", "Reducible": "精选", "Blue Scrips": "青货", "Red Scrips": "赤货",
		"Gold Saucer": "金碟游乐场", "The Hunt": "狩猎怪物",
		"Timeline": "采集时间轴", "Filters": "过滤", "Tasks": "只显示", "Other": "其他",
		"Classes": "显示职业", "Types": "显示类别",
		"Aetherial Reduction possible":"精选",
		"Timers": "采集列表", "timers": "个采集表", 'hidden': '个隐藏', "Search": "搜索", "Maps": "地图",
		"Select a list for this timer": "选择一个收藏列表存放这个时间表", "Create new list":"新建一个列表", "Name the new list":"填写收藏列表名字",
		"Predator": "捕鱼人之识", "mooch":"以小钓大"
	}
}