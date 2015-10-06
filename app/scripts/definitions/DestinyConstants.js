// Destiny Inventory Bucket Definition

var BUCKET_HEAD = 3448274439;
var BUCKET_CHEST = 14239492;
var BUCKET_ARMS = 3551918588;
var BUCKET_LEGS = 20886954;

var BUCKET_PRIMARY_WEAPON = 1498876634;
var BUCKET_SPECIAL_WEAPON = 2465295065;
var BUCKET_HEAVY_WEAPON = 953998645;

var BUCKET_BUILD = 3284755031;

// Destiny Stat Definition

var STAT_INTELLECT = 144602215;
var STAT_DISCIPLINE = 1735777505;
var STAT_STRENGTH = 4244567218;
var STAT_LIGHT = 2391494160;

var statNames = {
  STAT_INTELLECT: 'Intellect',
  STAT_DISCIPLINE: 'Discipline',
  STAT_STRENGTH: 'Strength'
};

var STAT_BASE_DAMAGE = 4043523819;


var burns = ['Void Damage', 'Arc Damage', 'Solar Damage'];

// Weapon perks to avoid

var avoidNodes = [
  'Ascend', 'Reforge Ready', 'Void Damage', 'Arc Damage', 'Solar Damage', 'Kinetic Damage', 'Hive Disruptor', 'Oracle Disruptor',
  'Lich Bane', 'Disciplinarian', 'Demotion', 'Mutineer', 'Dreg Burn', 'Shank Burn', 'Vandal Burn', 'Aspect Swap', 'Burgeoning Hunger',
  'Cannibalism', 'Dark Breaker', 'Upgrade Damage', 'Ice Breaker', 'Infuse', 'Sword Strike', 'Scabbard'
];

// Armor perks for hazards

var hazardQuickRevive = [
  40760096, // Light Beyond Nemesis (Warlock)
  2682002320, // Crest of Alpha Lupi (Titan)2272644374
  2272644374,
  3821972036 // Crest of Alpha Lupi (Hunter)
];
var hazardGrenadeOnSpawn = [
  2289894117, // Lucky Raspberry (Hunter)
  2671461052 // Voidfang Vestments (Warlock)
];
var hazardDoubleGrenade = [
  2978872641 // The Armamentarium (Titan)
];

var className = [
  'Titan',
  'Warlock',
  'Hunter'
];

// Match summary weapon kill definitions

var weaponKills = {
  weaponKillsHandCannon: 'Hand Cannon',
  weaponKillsPulseRifle: 'Pulse Rifle',
  weaponKillsScoutRifle: 'Scout Rifle',
  weaponKillsAutoRifle: 'Auto Rifle',
  weaponKillsSniper: 'Sniper Rifle',
  weaponKillsShotgun: 'Shotgun',
  weaponKillsFusionRifle: 'Fusion Rifle',
  weaponKillsRocketLauncher: 'Launcher',
  weaponKillsMachinegun: 'Machine Gun'
};

// Subclass Definitions

var SUNSINGER_CLASS = 3658182170;
var VOIDWALKER_CLASS = 3828867689;
var BLADEDANCER_CLASS = 2962927168;

// Class nodes definitions

var FIREBOLT_GRENADE = 835330335;
var FUSION_GRENADE = 834786008;
var VIKING_FUNERAL = 1173110174;
var TOUCH_OF_FLAME = 527202181;

// Cooldowns

var cooldownsSuperA  = ['5:00', '4:46', '4:31', '4:15', '3:58', '3:40'];
var cooldownsSuperB  = ['5:30', '5:14', '4:57', '4:39', '4:20', '4:00'];
var cooldownsGrenade = ['1:00', '0:55', '0:49', '0:42', '0:34', '0:25'];
var cooldownsMelee   = ['1:00', '0:55', '0:49', '0:42', '0:34', '0:25'];
